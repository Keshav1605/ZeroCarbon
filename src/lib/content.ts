export const ledgerSequenceData = {
  question: "How much did Mumbai office emit in April?",
  jsonParams: {
    tool: "query_ledger",
    params: {
      site: "IN-MUM-04",
      month: "2026-04"
    }
  },
  ledgerRow1: "IN-MUM-04 · Electricity · 342.0 kWh",
  ledgerRow2: "0.281 tCO2e · CEA grid factor"
};

export const capabilities = [
  {
    tag: "→ AUDIT",
    title: "Natural language ledger auditing",
    body: "Ask a question in plain English and the model turns it into the right database call, then hands back a formatted answer.",
    example: "\"List all Scope 3 travel entries that aren't verified yet.\""
  },
  {
    tag: "→ CALCULATE",
    title: "Instant GHG Protocol calculations",
    body: "Exposes verified calculation tools for electricity, fuel combustion, air travel, waste, and logistics — using location-specific factors like India's CEA grid emission factors.",
    example: "electricity_calc · combustion_calc · travel_calc · waste_calc"
  },
  {
    tag: "→ INGEST",
    title: "Automated data ingestion",
    body: "Point the model at unstructured text or a file, and it extracts the values, runs the calculation, and records the entry — all from one prompt.",
    example: "\"Log this diesel invoice for the Chennai site.\""
  }
];

export const comparisonRows = [
  {
    label: "Data entry",
    before: "Manual entry from paper invoices into spreadsheets, with a high human error rate.",
    after: "Invoices are emailed in, parsed by AI, and logged instantly."
  },
  {
    label: "Validation",
    before: "Receipts and calculations sit in separate folders; auditing happens offline, by hand.",
    after: "Every ledger entry links back to its source invoice for one-click audit checks."
  },
  {
    label: "Integration",
    before: "Developers write static API code just to parse and upload CSV files.",
    after: "Cursor, Windsurf, or a Python script query and write data through one bridge."
  },
  {
    label: "Reporting",
    before: "Reports arrive monthly or yearly, usually from an external consultant.",
    after: "Ask a question in chat, or let a cron job report on a schedule you set."
  }
];

export const architectureLayers = [
  {
    title: "Client",
    subtitle: "where the request starts",
    body: "Operators ask questions, write code, or trigger scheduled automation from Claude Desktop, an IDE, or a script."
  },
  {
    title: "Gateway",
    subtitle: "where it's authenticated",
    body: "Translates a local pipe or remote HTTP call into a JSON-RPC message and checks the API key signature."
  },
  {
    title: "MCP Core",
    subtitle: "where tools are offered",
    body: "Publishes the list of available tools and validates that incoming variables match expected categories."
  },
  {
    title: "Ingestion",
    subtitle: "where files become numbers",
    body: "Monitors a shared mailbox and runs multimodal models to convert invoice images and PDFs into figures."
  },
  {
    title: "Ledger",
    subtitle: "where it's recorded",
    body: "Runs the SQL transaction, attaches the source document, and keeps the carbon record's integrity intact."
  }
];

export const integrationTabs = [
  {
    "id": "claude",
    "label": "Claude Desktop",
    "steps": [
      "<b>Open your config file.</b> Windows: <code>Win + R</code> → paste <code>%APPDATA%\\Claude\\claude_desktop_config.json</code>. macOS: open <code>~/Library/Application Support/Claude/claude_desktop_config.json</code>.",
      "<b>Add your ZeroCarbon bridge.</b> Paste the block below and drop in your live API key.",
      "<b>Restart Claude Desktop.</b> A small plug icon appears in the chat input once it's connected."
    ],
    "code": "{\n  \"mcpServers\": {\n    \"zerocarbon\": {\n      \"command\": \"npx\",\n      \"args\": [\n        \"-y\",\n        \"@modelcontextprotocol/server-http-bridge\",\n        \"--url\",\n        \"https://zerocarbon.org.in/api/v1/mcp\"\n      ],\n      \"env\": {\n        \"ZEROCARBON_API_KEY\": \"YOUR_zc_live_API_KEY_HERE\"\n      }\n    }\n  }\n}"
  },
  {
    "id": "cursor",
    "label": "Cursor / Windsurf",
    "steps": [
      "In Cursor, open <b>Settings → Features → MCP.</b>",
      "Click <b>+ Add New MCP Server.</b>",
      "Set <b>Name</b> to ZeroCarbon and <b>Type</b> to <code>command</code>, then paste the command below.",
      "Add an env variable: key <code>ZEROCARBON_API_KEY</code>, value your live key. Save."
    ],
    "code": "# Command\nnpx -y @modelcontextprotocol/server-http-bridge --url \\\n  https://zerocarbon.org.in/api/v1/mcp\n\n# Env\nZEROCARBON_API_KEY=zc_live_..."
  },
  {
    "id": "email",
    "label": "Email pipeline",
    "steps": [
      "<b>Add your inbox credentials</b> to the environment so ZeroCarbon can read incoming invoices.",
      "<b>Set a cron schedule</b> on your hosting platform to scan the inbox automatically."
    ],
    "code": "# Step 1 — environment\nEMAIL_USER=\"your-inbox-address@yourcompany.com\"\nEMAIL_PASSWORD=\"your-secure-imap-app-password\"\nEMAIL_HOST=\"imap.gmail.com\"\nEMAIL_PORT=993\nZEROCARBON_API_KEY=\"zc_live_...\"\n\n# Step 2 — cron scheduler\n{\n  \"crons\": [\n    {\n      \"path\": \"/api/v1/company/automation/email-scan\",\n      \"schedule\": \"0 0 * * *\"\n    }\n  ]\n}"
  }
];

export const marqueeRows = [
  "IN-MUM-04 · Electricity · 342.0 kWh",
  "0.281 tCO2e · CEA grid factor",
  "UK-LON-01 · Air Travel · 1,200 km",
  "0.115 tCO2e · DEFRA factor",
  "US-NY-02 · Waste · 150 kg",
  "IN-CHN-01 · Diesel · 50 L",
  "0.134 tCO2e · EPA factor"
];
