
# Responsive Gemini ChatBot

A responsive, full-page chat interface that integrates with the Gemini API. This project allows users to interact with the chatbot by selecting from multiple models and receive textual responses along with inline downloadable content when applicable.

## Features

- Responsive, full-page chat UI.
- Model selection via dropdown.
- Seamless integration with the Gemini API.
- Displays chat history with automatic scrolling.
- Supports inline data processing for downloadable files.
- Uses modern JavaScript (ES6+) for modular, maintainable code.

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, etc.).
- A valid Gemini API key.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/responsive-gemini-chatbot.git
   ```

2. Navigate to the project directory:

   ```bash
   cd responsive-gemini-chatbot
   ```

3. Open `index.html` in your browser, or use a live server plugin in your code editor.

### Configuration

- Update the `apiKey` variable in `script.js` with your Gemini API key:

   ```javascript
   const apiKey = "YOUR_GEMINI_API_KEY";
   ```

- Modify the generation configuration in `script.js` as necessary:

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

1. Select a model from the dropdown.
2. Type your message in the chat input area.
3. Click the "Send" button or hit Enter.
4. The chatbot response will be displayed in the chat area.
5. If inline data is provided in the response, download links will be generated.

## Code Structure

- `index.html`: Main HTML structure.
- `style.css`: Styling for the chat interface.
- `script.js`: Contains the logic for chat interaction, API communication, and inline data processing.

## Demo
https://yapweijun1996.github.io/Gemini-API-JavaScript-Sample/


