const copy = {
  intro: {
    title: "Flint",
    description:
      "An investing app that inspires beginners to invest and empowers them with valuable information every step of the way.",
    tools: {
      title: "Tools",
      description: ["Figma", "Adobe Premiere Pro", "Adobe Photoshop"],
    },
    roles: {
      title: "Roles",
      description: "Individual Project",
    },
  },

  problem: {
    caption: "Problem",
    title: "Most of us aren't investing",
    description: `According to 2022 statistics from the Bank of Thailand, the majority of Thais do not invest their money. This is mainly due to a knowledge gap in investments, high cost of entry, and a general lack of financial literacy. 
    
    For reference, despite launching their first exchange more than 25 years later, over 8% of Vietnam's population already invests in stocks.`,
  },

  stats: {
    title: "Out of 70M people, only",
    item: [
      {
        title: "3%",
        description: "invest in financial products",
      },
      {
        title: "3M",
        description: "brokerage accounts",
      },
      {
        title: "1.5M",
        description: "mutual fund accounts",
      },
    ],
  },

  designQuestion:
    "How might design help make investing more appealing and accessible?",

  competitive: {
    caption: "Challenge",
    title: "Competitive Analysis",
    description: `Since 2009, Streaming has been Thailand's primary stock investing application. While its current design may appeal to experienced traders familiar with its decades-old interface, it presents significant hurdles for new investors.

    These challenges include a steep learning curve, an overwhelming and unintuitive interface that still lacks essential information, limited investment opportunities, a slow deposit and withdrawal process, and more.`,
  },

  painPoints: {
    title: "Pain Points",
    item: [
      {
        title: "Uninformative Interface",
        description:
          "Full of trading jargon, symbols, and abbreviations without any descriptions. Overwhelming trading statistics with insufficient financial information or company details.",
      },
      {
        title: "Unintuitive Navigation",
        description:
          "The lack of intuitive redirection means users must manually navigate through different tabs or menus. This journey demands additional effort and time to get accustomed to.",
      },
      {
        title: "The Wait",
        description:
          "Slow deposits and withdrawals with a 1–2 business day wait and a high minimum withdrawal amount deter new investors.",
      },
      {
        title: "Barrier",
        description:
          "A 100-share minimum order for Thai stocks, a hidden odd lot menu, and limited access to international investments.",
      },
    ],
  },

  risks: {
    caption: null,
    title: "Risks of an uninformative interface",
    description:
      "Insufficient information leads to over-reliance on external sources, which can result in misinformation and bias.",
  },

  objective: {
    caption: null,
    title: "Objective",
    description:
      "Make investing less intimidating by providing an informative investing environment through a modern and inviting user-friendly interface, with new features added to enhance convenience.",
  },

  discoverability: {
    caption: null,
    title: "Discoverability",
    description:
      "Reducing reliance on external sources of information empowers users to make well-informed choices.",
  },

  design_solution: "Design Solution",

  home: {
    caption: "Personalized",
    title: "Home",
    description:
      "A distraction-free environment that allows users to stay on top of their investments, track goals, read the latest articles, and view upcoming events such as dividend payout dates, economic data releases, and earnings reports—personalized to their holdings and watchlists.",
  },

  inv: {
    caption: "Accessible",
    title: "Investing",
    description:
      "Odd lot purchases (orders of fewer than 100 shares) are integrated into Thai stock investing. Enhancing the transparency of the odd lot feature makes high-priced large-cap stocks more accessible and reduces the risk of investors feeling compelled to invest in lower-priced, often more volatile, stocks.",
  },

  info: {
    caption: "Insightful",
    title: "Securities Information",
    description:
      "Each security includes extensive statistical and financial information. Trading jargon, abbreviations, and symbols are accompanied by informative bottom sheets that open with a tap, ensuring investors stay well-informed while reducing the need for external sources.",
  },

  wallet: {
    caption: "Instantaneous",
    title: "Wallet",
    description:
      "Users can invest directly from their wallet's available balance or spend from their cash balance via bank transfer, QR payment, and cash card—eliminating the 1–2 business day withdrawal process of a typical brokerage account.",
  },

  card: {
    caption: "Convenient",
    title: "Cash Card",
    description:
      "Flint's cash card provides a hassle-free way to spend or withdraw cash from an ATM directly from the THB cash balance. Real-time access to the cash balance makes deposit commitments less intimidating for beginners.",
  },

  alerts: {
    title: "Alert Bottom Sheet",
    description:
      "Automatically opens when users enter a security that requires additional acknowledgment.",
    item: [
      "Market Surveillance Alert",
      "Tax Benefit Fund (SSF & RMF)",
      "High Risk Equity",
    ],
  },

  styleGuide: {
    title: "Style Guide",
  },

  reflection: {
    title: "Reflection",
    description: `This project was inspired by challenges I faced when starting my investing journey, along with similar experiences shared by others in social media investment groups.

    Initially envisioned as a smaller project, further research revealed additional areas for improvement, leading to expanded solutions beyond UI enhancements. As the scope grew, I learned to build a comprehensive design system from scratch to ensure consistency and integrated motion design to further enhance the user experience.`,
  },
};

export default copy;
