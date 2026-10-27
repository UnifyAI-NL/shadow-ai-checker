# Shadow AI Checker

A free Claude skill that shows **where your company's data goes when your team uses AI**, and what to arrange first.

Your team already uses AI. Often not the AI you know about: ChatGPT on a personal account, a free notetaker, a browser extension, an AI feature in your CRM that someone switched on, an MCP server that can read your mailbox. That is shadow AI. It is nearly always well meant. The risk is in what goes in, where it goes and whether it is used to train models.

## What it does

1. **Asks your language** and says which assistant it is, and what it cannot see about your own account.
2. **Interviews you** in three short rounds: the company, your software and accounts, and your connections (connectors, MCP servers, automations, chatbots, extensions).
3. **Optionally reads your admin console with you** (Microsoft 365 or Google Workspace): which apps people connected to their work account, and which browser extensions are installed. Hard evidence next to what people say.
4. **Writes an anonymous team questionnaire** of five questions, because the owner never knows everything the team uses. Paste the answers back and the skill adds them.
5. **Checks every data flow**: training on or off, EU or US, a data processing agreement, what a connection can read or change, and the EU AI Act.

## What you get

- **A data map:** every tool and connection with a green, orange or red rating and why
- **A "what can go in" table:** per account type (free, personal paid, business, API) which data may go in
- **The first three actions**, ordered by risk
- **A one-page AI policy** and a **cheat sheet** for the team: "Can this go into AI?"
- **A paragraph on AI literacy** (EU AI Act, article 4)

The provider reference at the end of [`SKILL.md`](shadow-ai-checker/SKILL.md) is dated and lists its sources. Terms change: the setting in your own account is what counts.

## Install

- **claude.ai or the desktop app:** download the folder [`shadow-ai-checker`](shadow-ai-checker/) as a zip and upload it under Settings › Capabilities › Skills.
- **Claude Code:** copy the folder to `~/.claude/skills/` (or `.claude/skills/` in your project).
- **ChatGPT, Gemini or Copilot:** paste the contents of [`SKILL.md`](shadow-ai-checker/SKILL.md) as your first message.

Then start with: *"Run the shadow AI check for my company."*

## What it does not do

It is not legal advice and does not audit whether a provider keeps its promises. It asks for roles, never names. Do not paste customer or personnel data into the conversation.

## How we do it at UnifyAI

Our AI agents run on EU endpoints and training on your data is switched off. Want help making your AI use safe and useful? [unify-ai.nl](https://unify-ai.nl)

---

Made by UnifyAI – [unify-ai.nl](https://unify-ai.nl). MIT licence.
