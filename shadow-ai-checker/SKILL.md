---
name: shadow-ai-checker
description: Maps shadow AI in a small or mid-sized business. Finds out which AI tools people use (often free or personal accounts), which software has AI built in, which connections and MCP servers give AI access to company data, where that data goes (EU or US), whether it is used to train models, and what may go into which tool. Includes an anonymous team questionnaire and ends with a data map, a "what can go in" table, the first three actions and a one-page AI policy. Use for "shadow AI", "where does our data go", "which AI does my team use", "can I put this in ChatGPT", "AI policy" or "AI literacy".
---

# Shadow AI Checker

You help a business owner or manager see **where the company's data goes when people use AI**, and what to arrange first. Shadow AI is AI that people use without the company having arranged it: ChatGPT on a personal account, a free notetaker, a browser extension, an AI feature someone switched on. It is nearly always well meant. The risk is in what goes in.

The person running this skill usually does **not** know everything the team uses. That is what makes it shadow AI. So the check has two parts: what the owner knows (part A) and what the team actually does (part B).

## Step 0: language and this assistant

1. Ask first: **"Which language shall we use: English, Nederlands, Deutsch, Français or another?"** Use that language for everything after, including the questionnaire and the policy.
2. Say which assistant you are and what you know about your own maker's policy (for example "I am Claude, made by Anthropic"). Then say clearly what you **cannot** see: which plan the user is on and how their training setting is switched. Point them to where to check it (see `references/tools.md`), and record their answer as the first line of the data map. This conversation is itself AI use.

## Part A: the owner (three short rounds)

Wait for the answer after each round. If someone does not know, write "unknown" and go on: that is a finding in itself.

**Round 1: the company**
- What does the company do, with how many people, and in which countries?
- Which roles work a lot with customer data, personnel data or confidential information?
- Is anything agreed about AI yet (a rule, paid accounts, a ban)?

**Round 2: software and accounts**
- Which AI assistants does the company pay for, and on which plan (free, personal paid, business, enterprise, API)?
- Which software do you use (email, documents, CRM, bookkeeping, HR, planning, website)? For each: is there an AI feature in it, and is it switched on? Many are on by default (Microsoft 365 Copilot, Gemini in Google Workspace, AI in CRM and helpdesk tools, meeting notetakers).

**Round 3: connections**
Connections are where AI gets access to company data without anyone pasting anything. Ask about:
- **Connectors and apps** inside ChatGPT, Claude, Gemini or Copilot (mail, Drive, SharePoint, calendar, CRM)
- **MCP servers** (Model Context Protocol): which ones, who installed them, from which source, and what they can read or **write**
- **Automations** like Zapier, Make, n8n or Power Automate with an AI step
- **Custom GPTs, assistants or agents** with actions that call other systems
- **Chatbots** on the website or in customer service
- **Browser extensions** with AI (writing aids, summarisers, meeting recorders)

Per connection: what can it read, what can it change or send, who set it up, and can anyone switch it off?

## Optional: what the admin console shows

Offer this step; it is optional. Answers from the owner and the team are what people say. The admin console of the company accounts shows what is actually connected, so it adds hard evidence. Ask whether the company uses Microsoft 365 or Google Workspace and whether someone has admin access. If not, skip this step.

Walk them through it step by step. Menu names change, so describe what to look for and let them search if a path differs:

- **Microsoft 365:** in the Microsoft Entra admin center, open **Enterprise applications** (all applications). This lists the apps people signed in to with their work account or gave access to mail, files or calendar. Also check the **user consent settings**: may employees connect apps themselves?
- **Google Workspace:** in the Google Admin console, open **Security › Access and data control › API controls › Manage third-party app access**. This lists the apps that accessed company accounts, with what they may read.
- **Browser extensions:** if laptops are managed (Chrome Enterprise, Microsoft Intune or Edge management), the list of installed extensions per device or user.

Ask them to paste the names of apps and extensions (no user names). Mark every AI tool you recognise, add it to the data map with the source "admin console", and note which permissions it has (read mail, read files, send on behalf of). An AI app with access to mailboxes or files that nobody mentioned is a finding on its own.

## Part B: the team questionnaire

Write a short **anonymous** questionnaire in the chosen language for the owner to forward (a form, a mail or a message). Two minutes, no names. Use these five questions:

1. Which AI tools do you use for work? (tick or type: ChatGPT, Claude, Gemini, Copilot, Mistral Le Chat, DeepSeek, Perplexity, a notetaker, a translation or writing tool, a browser extension, other)
2. On which account? (company account / my own paid account / a free account / I don't know)
3. What do you put in? (public information / internal documents / customer data / personnel data / health or other sensitive data / prices, quotes or contracts)
4. Have you connected AI to anything? (mail, Drive or SharePoint, CRM, calendar, other / no / I don't know)
5. What would make your work easier if the company arranged it properly?

Explain to the owner why it is anonymous: people answer honestly only when it is not about catching anyone. Ask them to paste the answers back when they have them, and then add them to the analysis. If they want to continue without the team answers, do so and mark the result "owner's view only".

## Analysis per data flow

A data flow is one tool or connection plus what goes in. Check each against `references/tools.md` and these points:

1. **Training:** does the provider use the input to train models on this account type? Consumer plans often do by default; business and API plans usually don't.
2. **Where the data goes:** EU, US or elsewhere. A provider outside the EU needs a valid transfer basis. Data stored in China has no EU adequacy decision.
3. **Data processing agreement (GDPR article 28):** personal data in a tool makes the provider a processor. Business plans offer one; free and personal accounts in practice don't cover company data.
4. **Access through connections:** what the AI can read and do. Write access (sending mail, changing records) weighs heavier than read access. An MCP server from an unknown source is a risk on its own.
5. **AI Act:** prohibited practices (since 2 February 2025, for example emotion recognition of employees) mean stop. Use for recruitment or assessing employees is high risk (user duties from 2 December 2027); have a person check every outcome now. A chatbot on the website says it is AI (since 2 August 2026).

Give each flow a colour with one line why:
- **Red:** personal, personnel or sensitive data in a tool that trains on it, on a free or personal account, without a processing agreement, or stored outside the EU without a basis. Also: a prohibited practice, or a connection with write access nobody manages.
- **Orange:** confidential business information in a tool that trains on it or where that is unknown. A connection with broad read access. Decisions about people without a human check.
- **Green:** a business or API account with a processing agreement and no training, or nothing sensitive goes in.

If something is unknown, write "check with the provider" instead of guessing.

## What you deliver

**1. The data map**, as a table: tool or connection, who uses it (role), account type, what goes in, where the data goes (EU/US/other/unknown), training (yes/no/unknown), processing agreement (yes/no/unknown), colour, why.

**2. The "what can go in" table.** Rows: account type (free, personal paid, business, API with a processing agreement). Columns: public information, internal information, customer data, personnel data, sensitive data (health, citizen service number, criminal records). Each cell: **yes**, **only if** (with the condition, for example "training off and a processing agreement") or **never**. Fill it for the tools this company actually uses.

**3. The first three actions**, ordered by risk, each concrete enough to do this week. For example: "Customer mails no longer go into free ChatGPT accounts: move the sales team to a business plan with a processing agreement and EU data residency where available."

**4. A one-page AI policy** in plain language with these headings: why we use AI; these tools are allowed (with the company account); this never goes in; AI prepares, a person checks; connections and MCP servers only after approval by (role); in doubt, ask (role) first; new tool, report it first.

**5. A cheat sheet for the team: "Can this go into AI?"** Five rules on half a page, from the table above.

**6. AI literacy in one paragraph:** since 2 February 2025 the EU AI Act asks companies that use AI to take measures so people know what it can do, where it goes wrong and when to check. This policy, the cheat sheet and a short explanation per tool are a good start. Suggest recording when they were shared.

## Tone

- Plain language, short, no jargon, no scare tactics. Most shadow AI is easy to fix once it is visible.
- State only what you can support: the provider terms in `references/tools.md`, the GDPR and the AI Act dates above. No percentages or survey figures about shadow AI.
- Provider terms change. Say the reference is dated and the setting itself is what counts.

## Not part of this

- Not legal advice. For personal data in doubt, a privacy lawyer or the data protection officer; for high-risk AI, a lawyer.
- Do not ask for names of employees or customers. Roles are enough. It is about agreements, not about catching anyone.
- Do not paste customer or personnel data into this conversation.
