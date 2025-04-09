// Simple configuration for Gemini API
const generationConfig = {
	temperature: 1,
	topP: 0.95,
	topK: 40,
	maxOutputTokens: 8192,
	responseMimeType: "text/plain",
};

// Store chat history
let chatHistory = [];

// Start a chat session
async function startChatSession(selectedModel) {
	return {
		sendMessage: async function(messageData) {
			let userMessage = typeof messageData === "string" ? { role: "user", parts: [{ text: messageData }] } : messageData;
			const requestBody = { contents: [...chatHistory, userMessage], generationConfig };
			const url = "https://generativelanguage.googleapis.com/v1beta/models/" + selectedModel + ":generateContent?key=" + apiKey;
			const response = await fetch(url, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(requestBody)
			});
			if (!response.ok) throw new Error("API error " + response.status);
			const result = await response.json();
			if (result.candidates && result.candidates.length > 0) {
				const modelResponse = { role: "model", parts: result.candidates[0].content.parts };
				chatHistory.push(userMessage, modelResponse);
			} else {
				throw new Error("No response from API");
			}
			return result;
		}
	}
}

// Read file as Base64
function readFileAsBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result.split(",")[1]);
		reader.onerror = reject;
		reader.readAsDataURL(file);
	});
}

// Append a message to the chat area
function appendMessage(role, text) {
	const chatMessages = document.getElementById("chatMessages");
	const msgDiv = document.createElement("div");
	msgDiv.className = "message " + role;
	msgDiv.textContent = text;
	chatMessages.appendChild(msgDiv);
	chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send chat message (with optional image)
async function runChat() {
	const userInput = document.getElementById("userInput");
	const imageInput = document.getElementById("imageInput");
	const modelSelect = document.getElementById("modelSelect");
	const messageText = userInput.value.trim();
	const imageFile = imageInput.files[0];
	const selectedModel = modelSelect.value;
	
	if (!messageText && !imageFile) {
		alert("Please enter a message or upload an image.");
		return;
	}
	
	if (messageText) appendMessage("user", messageText);
	if (imageFile) appendMessage("user", "Image: " + imageFile.name);
	
	userInput.value = "";
	imageInput.value = "";
	appendMessage("system", "Sending...");
	
	let parts = [];
	if (messageText) parts.push({ text: messageText });
	if (imageFile) {
		try {
			const base64Data = await readFileAsBase64(imageFile);
			parts.push({ inline_data: { data: base64Data, mime_type: imageFile.type } });
		} catch (err) {
			appendMessage("system", "Error reading image.");
			return;
		}
	}
	const userMessage = { role: "user", parts };
	
	try {
		const session = await startChatSession(selectedModel);
		const result = await session.sendMessage(userMessage);
		// Remove "Sending..." message
		const chatBody = document.getElementById("chatMessages");
		chatBody.removeChild(chatBody.lastChild);
		if (result.candidates && result.candidates.length > 0) {
			const candidate = result.candidates[0];
			const textResponse = candidate.content.parts.filter(p => p.text).map(p => p.text).join("\n");
			appendMessage("model", textResponse || "No text response.");
		}
	} catch (err) {
		appendMessage("system", "Error: " + err.message);
	}
}

// Event listeners for Send button and Enter key
document.getElementById("sendBtn").addEventListener("click", runChat);
document.getElementById("userInput").addEventListener("keypress", function(e) {
	if (e.key === "Enter" && !e.shiftKey) {
		e.preventDefault();
		runChat();
	}
});