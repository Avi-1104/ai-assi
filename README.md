# AI-Assi

AI-Assi is an AI-powered assistant that utilizes OpenAI's GPT-4. This project is divided into two main components: the backend and the frontend.

## Prerequisites

Ensure you have the following installed on your computer:

- **Python**: Version 3.10.6 or higher
- **Node.js**: Version 8.15.0 or higher
- **npm**: Version 9.5.0 or higher

Additionally, you must set an `OPENAI_API_KEY` in your environment, as the project relies on this key for OpenAI API calls.

## Backend

The backend is written in Python. It serves data files (teams and users) to the frontend and makes the relevant calls to OpenAI. It sets a lot of system context to make the responses meaningful with respect to the query. The default port for the backend is 5000.

### Installation

1. **Create a virtual environment**:

   python -m venv venv
