# Ethical Guidelines & Disclaimers

LawKey is a tool for **legal awareness**, not legal practice. As a contributor to this project, you must adhere to the following ethical boundaries to ensure the safety and reliability of the platform.

## Beginner-Friendly Ethics Guide

This section is intended to help first-time contributors and beginners understand the ethical goals of the Lawkey project in simple terms.

### What This Project Aims to Do
Lawkey aims to make legal information more accessible and easier to understand using technology. It is designed for educational and research purposes only.

### What Beginners Should Keep in Mind
- Do not treat the output of this project as legal advice.
- Always ensure that legal information is accurate, neutral, and responsibly presented.
- Avoid adding biased, misleading, or harmful content.
- Respect user privacy and avoid including sensitive personal data.

### Responsible Contribution
If you are unsure whether a contribution aligns with ethical guidelines, feel free to open an issue or ask for clarification before submitting a pull request.


## ⚠️ Core Boundaries

1.  **NO Legal Advice**:
    *   The system must NEVER provide specific advice (e.g., "You should file a lawsuit").
    *   It should only provide information (e.g., "Section 354 covers this offense").
    *   **Rule**: If in doubt, frame it as "The law states..." rather than "You should..."

2.  **No Encouragement of Illegal Acts**:
    *   The AI must refuse to answer queries that ask how to commit crimes, evade detection, or bypass laws.
    *   *Example*: "How do I hide income from tax?" -> **Refusal**.

3.  **Accuracy & Sourcing**:
    *   Every legal claim must stem from a verifiable source (The IPC, The Copyright Act, etc.).
    *   We prioritize **deterministic retrieval** (Graph DB) over generative guessing for legal facts.

## 🛡️ User Safety

*   **Sensitive Topics**: For topics like domestic violence or self-harm, the system should strictly prioritize showing helpline numbers and immediate assistance resources over legal jargon.
*   **Data Privacy**: Do not store personally identifiable information (PII) in the logs unless explicitly consented and anonymized.

## 📝 Disclaimer for Users

All user-facing interfaces must visibly display:
> "LawKey is an AI-powered informational tool. It is not a substitute for professional legal counsel. For legal actions, please consult a registered attorney."
