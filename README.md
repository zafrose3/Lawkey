# LawKey ⚖️

> **Democratizing Legal Awareness with AI.**
> *Understanding the law shouldn't require a law degree.*

LawKey is an open-source, AI-powered legal information assistant designed to help users identify relevant laws, understand legal sections, and gain awareness of their rights in a simple, accessible way.

**⚠️ DISCLAIMER:** LawKey provides **information only**, NOT legal advice. Always consult a qualified attorney for legal matters.

## 🚀 Features

*   **Scenario-Based Search**: Describe a situation (e.g., "Online harassment"), and find relevant laws.
*   **Plain Language Explanations**: Complex legal jargon simplified for everyone.
*   **Knowledge Graph Powered**: Accurate, deterministic law retrieval (No hallucinations on the law itself).
*   **Multilingual Support**: Built to support multiple languages (starting with English).
*   **Voice Input**: Ask questions using your voice.

## 🛠️ Tech Stack

*   **Backend**: Python, FastAPI
*   **Database**: Neo4j (Graph DB), PostgreSQL (Metadata)
*   **AI/NLP**: spaCy, HuggingFace (Intent Detection), LLMs (Simplification only)
*   **Frontend**: React, Tailwind CSS

## 📂 Project Structure

```
/lawkey
├── /backend        # FastAPI application
├── /frontend       # React application
└── /docs           # Project documentation
```

## 🏁 Getting Started

### Prerequisites
*   Python 3.9+
*   Node.js 16+
*   Docker (for Neo4j & Postgres)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/LawKey.git
    cd LawKey
    ```

2.  **Backend Setup**
    ```bash
    cd backend
    python -m venv venv
    source venv/bin/activate  # On Windows: venv\Scripts\activate
    pip install -r requirements.txt
    ```

3.  **Frontend Setup**
    ```bash
    cd frontend
    npm install
    npm start
    ```

## 🤝 Contributing

We welcome contributions from students and developers of all levels! Please check out [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

## 📜 License

This project is licensed under the MIT License.
