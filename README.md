# Misogi-Local-LLM-First-Prompt

To run the `query.js` script, you need to have LM Studio installed and a model loaded. Follow these steps:

1.  **Download and install LM Studio:** If you don't have it already, download LM Studio from [https://lmstudio.ai/](https://lmstudio.ai/).
2.  **Download a model:** In LM Studio, go to the "Discover" tab (the magnifying glass icon on the left) and search for a model, for example, `tinyLlama-1.1b-chat-v1.0`. Download the model.
3.  **Load the model:** Go to the "My Models" tab (the folder icon on the left). Click on the model you downloaded to load it.
4.  **Start the Local Server:** Go to the "LM Runtimes" tab (the server rack icon on the left, or found through the gear icon in the chat view and then "Runtime"). Toggle the "Status" switch to "Running". Ensure the "Server Port" is set to `1234`.
5.  **Install Node.js dependencies:** Open your terminal in the project directory and run:
    ```bash
    npm install openai
    ```
6.  **Run the script:** In your terminal, run the `query.js` script using Node.js:
    ```bash
    node query.js
    ```

The script will send a prompt to the LM Studio local server and print the response.