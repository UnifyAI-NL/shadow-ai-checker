# Provider reference

**Status: 27 October 2026.** Provider terms change. The setting in the account itself is what counts: when in doubt, check it there or ask the provider. Report a change as an issue in this repository, with the source.

| Provider and plan | Trains on your input? | Where the data goes | Where to check |
|---|---|---|---|
| **ChatGPT** Free, Plus, Pro (OpenAI) | Yes by default; you can switch it off | US | Settings › Data controls › "Improve the model for everyone" |
| **ChatGPT** Business, Enterprise, Edu; OpenAI API | No, unless the customer opts in | US; EU data residency available for Enterprise, Edu and eligible API projects | Admin console; API organisation settings |
| **Claude** Free, Pro, Max (Anthropic) | Only if "Help improve Claude" is on; on means up to 5 years retention, off means 30 days | US | Settings › Privacy › "Help improve Claude" |
| **Claude** Team, Enterprise; Anthropic API | No (commercial terms) | US; via cloud platforms (AWS Bedrock, Google Vertex AI) in chosen regions, including the EU | Admin settings; the cloud region of the project |
| **Gemini** app with a personal Google account | Yes while "Gemini Apps Activity" is on; human reviewers can read conversations (detached from the account), reviewed chats are kept up to 3 years | Google data centres (global) | myactivity.google.com › Gemini Apps Activity |
| **Gemini** in Google Workspace (business account) | No: content is not used to train models | Workspace data regions, set by the admin | Google Workspace admin console |
| **Microsoft 365 Copilot** (business) | No: prompts, answers and company data are not used to train foundation models | EU Data Boundary for commercial customers; models from some subprocessors are excluded from it | Microsoft 365 admin center |
| **Microsoft Copilot** with a personal account | Check the setting; consumer terms apply | Varies | Copilot settings › Privacy |
| **Mistral Le Chat** Free, Pro, Student | Yes by default; you can switch it off | EU (France) | Settings › Privacy |
| **Mistral Le Chat** Team, Enterprise | No by default | EU (France) | Admin settings |
| **DeepSeek** app and website | Yes | China (no EU adequacy decision) | Not suitable for company data. Self-hosted open-source DeepSeek models are a different case: the data stays where you host them. |

## Connections

- **Connectors** (mail, Drive, SharePoint, CRM) inside an assistant follow the terms of that assistant's account: a connector on a free or personal account brings company data under consumer terms.
- **MCP servers** run code that gives the AI access to a system. Check who made it, where it runs, what it may read and write, and whether the person who installed it is still there.
- **Automations** (Zapier, Make, n8n, Power Automate) send data to the AI provider in their AI step; the provider's terms for that account apply, plus those of the automation platform.

## Sources (checked 27 October 2026)

- OpenAI, data residency in Europe: https://openai.com/index/introducing-data-residency-in-europe/
- Anthropic, updates to the consumer terms: https://www.anthropic.com/news/updates-to-our-consumer-terms
- Google, Gemini in Workspace apps and your data: https://support.google.com/mail/answer/14615114
- Google, Gemini Apps privacy hub: https://support.google.com/gemini/answer/13594961
- Microsoft, data, privacy and security for Microsoft 365 Copilot: https://learn.microsoft.com/microsoft-365-copilot/microsoft-365-copilot-privacy
- Mistral, opting out of training: https://help.mistral.ai/en/articles/347614-can-i-opt-out-of-my-input-or-output-data-being-used-for-training
- DeepSeek, privacy policy (data stored in the People's Republic of China)
