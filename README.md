🚀 **Gemini-clone**



A Desktop Conversational AI Interface
This project is a high-fidelity, custom-built clone of the core Gemini AI chat application. It serves as a practical demonstration of integrating the Gemini API into a modern, responsive web application built with React.js.

The primary goal of this build is to replicate the smooth, contextual, and text-based conversational experience of a modern large language model (LLM) interface.

🌟 Features
Core AI Chat: Full integration with the Gemini API for fast, coherent text generation.

Real-time Responses: Supports streaming responses for a fluid, engaging user experience.

Contextual Conversations: Maintains conversation history and context to support detailed follow-up questions.

Clean UI: Minimalist and intuitive user interface inspired by the official Gemini design.

💻 Technology Stack
This application is built as a single-page application (SPA) focused on speed and modern development practices.

. Frontend: React.js

. API Integration: Gemini API

. Styling: CSS, Bootstrap

. Package Management: npm

⚠️ Current Limitations
Please be aware of the following scope limitations for the current version:

Desktop-Only: The application is explicitly designed and optimized for desktop browsers. Mobile and tablet responsiveness is not yet implemented.

Text Focus: This build is currently restricted to core text generation functionality and does not support image input (Multimodality), code execution, or advanced features.

🛠️ Installation & Quick Start
Follow these steps to clone the repository and run the application locally.

Prerequisites
Node.js (LTS recommended)

A personal Gemini API Key

Step 1: Clone the Repository
git clone [https://github.com/siddhesh-Mune1/Gemini-clone.git](https://github.com/siddhesh-Mune1/Gemini-clone.git)
cd Gemini-clone

Step 2: Install Dependencies
npm install

Step 3: Configure Your API Key
You must provide your Gemini API key for the application to function.

Create a file named .env in the root of the project directory.

Add your API key to the file using the following variable name:

# .env file
REACT_APP_GEMINI_API_KEY="YOUR_API_KEY_HERE"

Security Note: Never commit your .env file or API key directly to GitHub! The project assumes you are using a .gitignore file to exclude it.

Step 4: Run the Application
Start the React development server:

npm start

The application will now be running at http://localhost:3000.

📌 Future Plans
Implementing full mobile responsiveness for tablet and phone layouts.

Adding support for Multimodal inputs (e.g., uploading and analyzing images).

Integrating user authentication and history saving.
