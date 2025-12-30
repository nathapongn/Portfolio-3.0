const copy = {
    intro: {
        title: "Nimbus",
        description: "Streamlines personal finance management with automation.",
        tools: {
            title: "Tools",
            description: ["Microsoft Excel", "Adobe Premiere Pro", "Adobe Photoshop"]
        },
        roles: {
            title: "Roles",
            description: "Individual Project"
        }
    },
    problem: {
        caption: "Problem",
        title: "Not Quite Right",
        description: "Since I began tracking my personal finances, I've struggled to find a single app that meets all my needs. One app might excel at a particular feature but lacks another feature that a competing app does well. Moreover, the inconvenience of manually recording all my transactions has been a persistent challenge."
    },
    user_research: {
        header: {
            title: "User Research",
            description: "To gather insights, I conducted a brief survey with 16 participants, most of whom currently use a finance tracking app or platform, while others have used one in the past."
        },
        item: [
            {
                title: "72%",
                description: "of respondents find manual tracking to be the most disliked aspect. Respondents who stopped tracking also cited this as their primary reason."
            },
            {
                title: "77%",
                description: "of respondents prefer to track their finances weekly, while the remainder prefer daily tracking."
            },
            {
                title: "50%",
                description: "of respondents cited customization and visualization of their finances as the most appreciated aspects of their platform."
            }
        ]
    },
    objective: {
        title: "Objective",
        description: "Design a localized personal finance tracking platform for Thailand that offers comprehensive features with added automation to enhance convenience."
    },
    design_solution: "Design Solution",
    dashboard: {
        caption: "Overview",
        title: "Dashboard",
        description: "Provides an overview of assets, statistics, recent transactions, active budgets, and account balances."
    },
    dashboard_preview: {
        title: "Accuracy",
        description: "A convenient date range picker offers users with varying payroll dates a clear and accurate view of their true monthly cash flow and budget."
    },
    txn: {
        caption: "Insights",
        title: "Transaction",
        description: "A detailed record of all transactions with a stacked bar chart that displays transaction categories for each month, offering a clear visualization of spending patterns."
    },
    txn_preview: {
        title: "Transaction Overview",
        description: "Users can view records of all transactions, spending patterns by category, and edit records."
    },
    automation: {
        title: "Automation",
        description: "In addition to manual transaction entry, users can link accounts from supported banks or upload payment slips and bank statements to automatically log transactions."
    },
    txn_upload: {
        title: "Transaction Upload",
        description: "Users can upload payment slips to record expenses or historical statements to automatically log transactions. An AI model analyzes the upload via OCR, extracts transaction information, and assigns categories for recognized recipients or senders. Users can then fine-tune these categories or add notes."
    },
    budget: {
        caption: "Keep Control",
        title: "Budget",
        description: "Take control of spending by creating custom budgets and setting limits for different categories. Stay informed with daily recommended spending amounts and receive notifications when approaching budget limits."
    },
    budget_preview: {
        title: "Create Budget",
        description: "Users can create a budget by selecting preferred categories and setting spending limits, with a recommended daily amount to help stay within budget."
    },
    inv: {
        caption: "Comprehensive",
        title: "Investment",
        description: "Track investments including domestic mutual funds, stocks across major international markets, and commodities. Compare performance across various asset types with ease."
    },
    inv_preview: [
        {
            title: "Stocks",
            description: "Track stocks across major exchanges."
        },
        {
            title: "Mutual Funds",
            description: "Track domestic mutual funds with daily NAV updates."
        },
        {
            title: "Commodities",
            description: "Track major commodities in customizable units."
        }
    ],
    style_guide: "Style Guide",
    reflection: {
        title: "Reflection",
        description: `Nimbus stands out as the most challenging and intricate personal design project I've undertaken. From initial scoping to countless sketching iterations, the process required an additional level of depth and precision. Designing for both light and dark modes for the first time demanded a highly systematic approach to primitives and semantic tokenization. 
        
        This project was also one of the most iterative I've ever worked on, often requiring me to revisit the drawing board more than anticipated. Ultimately, the experience profoundly shaped my growth as a designer, strengthening my ability to approach projects with a structured mindset and improving how I tackle complex design challenges in my professional practice.`
    }
};

export default copy;