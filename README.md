
# Responsive Gemini ChatBot

A responsive, full-page chat interface that leverages the Gemini API to deliver an interactive chatbot experience. Users can select from multiple models and receive dynamic text outputs along with downloadable content when available.

## Features

- **Responsive Design:** Fully responsive chat UI optimized for all devices.
- **Model Selection:** Choose between different models using a dropdown.
- **Seamless Integration:** Connects to the Gemini API for live responses.
- **Chat History:** Maintains conversation context with auto-scroll functionality.
- **Inline Data Downloads:** Automatically provides download links for inline data such as files/images.
- **Modern JavaScript:** Utilizes ES6+ for clean and maintainable code.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A valid Gemini API key.

### Configuration

- **API Key Setup:** Open `script.js` and update the `apiKey` variable:
  ```javascript
  const apiKey = "YOUR_GEMINI_API_KEY";
  ```

- **Adjust Generation Config:** Tweak the generation settings in `script.js` if needed:
  ```javascript
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  ```

## Usage

1. Select the desired model from the dropdown.
2. Enter your message in the chat input area.
3. Press the "Send" button or hit Enter.
4. View the chatbot response displayed in the chat area.
5. If inline data is present, download links will be generated automatically.

## Code Structure

- **index.html:** Contains the main HTML structure.
- **style.css:** Styles the chat interface.
- **script.js:** Handles chat logic, API communication, and processing of inline data.

## Demo
https://yapweijun1996.github.io/Gemini-API-JavaScript-Sample/


