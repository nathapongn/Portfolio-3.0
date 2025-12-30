const copy = {
    intro: {
        title: "Amper",
        description: "Unifying public electric vehicle chargers. One app, more chargers, across Thailand. A handier partner for all EV drivers.",
        tools: {
            title: "Tools",
            description: ["Figma", "ChatGPT-4o", "Adobe Premiere Pro", "Adobe Photoshop"]
        },
        roles: {
            title: "Roles",
            description: "Individual Project"
        }
    },
    problem: {
        caption: "Problem",
        title: "Fragmented Networks",
        description: [
            `As electric vehicles rapidly gain popularity in Thailand, so does the expansion of public EV chargers. But with growth comes fragmentation.

            Each charging provider operates its own app—with different interfaces, user journeys, and payment methods. Drivers are forced to relearn how to charge depending on where they go.

            For many EV drivers, the biggest obstacle isn't finding a charger—it's navigating the messy ecosystem around it.`
        ]
    },

    stats: {
        title: "Thailand's EV Statistics",
        items: [
            {
                value: "+684%",
                description:
                    "Growth in EV registrations in Thailand from 2022 to 2023."
            },
            {
                value: "11,467",
                description:
                    "Charging plugs available nationwide as of December 2024."
            },
            {
                value: "15",
                description:
                    "Major public EV charger providers—each with their own app as of January 2025."
            }
        ]
    },

    objective: {
        caption: "Objective",
        title: "Unify Public EV Chargers",
        description:
            `Amper aims to simplify EV charging in Thailand by unifying fragmented networks into a single platform—allowing drivers to discover, book, and charge across providers in one app. 
            
            It makes charging more transparent and reliable by empowering users with reviews, issue reports, and community-driven updates.`
    },

    providerStudy: {
        title: "EV Charging Providers Study"
    },

    pricing: {
        title: "Pricing Models",
        description:
            "A detailed study of Thailand's major public EV charging providers reveals four distinct user journeys—each shaped by pricing models that affect how sessions are started, monitored, and ended.",
        provider: "Providers:",
        items: [
            {
                title: "Per kWh",
                description:
                    "Charged based on the total electricity delivered. Users can start charging freely and stop at any time, or the session may end automatically if capped by the provider.",
                providers: [
                    "EV Station PluZ",
                    "EleXa",
                    "PEA Volta",
                    "MEA EV"
                ]
            },
            {
                title: "Per kWh with Time Slot",
                description:
                    "Users are charged per kWh but must pre-select a charging duration. The session ends automatically once the reserved time is up, regardless of whether the charging goal is met.",
                providers: [
                    "AlterVim",
                    "Shell Recharge"
                ]
            },
            {
                title: "Per Session",
                description:
                    "A flat rate is charged for a fixed time window. The total energy received depends on the charger's speed, and charging ends when time expires.",
                providers: [
                    "EA Anywhere (AC)"
                ]
            },
            {
                title: "Fixed Amount",
                description:
                    "Users prepay a fixed amount and are charged by kWh until the prepaid value is used up. The session ends automatically when the spending cap is reached.",
                providers: [
                    "EA Anywhere (DC)"
                ]
            }
        ]
    },

    oper: {
        title: "Operational Differences",
        description:
            "In addition to pricing models, user interactions and hardware behaviors can vary significantly by provider and location, impacting the overall experience.",
        items: [
            {
                title: "Plug Identification",
                description:
                    "Some chargers offer a dedicated QR code for each plug, auto-selecting it upon scan. Others use a shared QR code, requiring users to manually select a plug. Older chargers may skip QR codes entirely and rely on numeric identification."
            },
            {
                title: "Charger Access",
                description:
                    "Some setups require extra steps before charging. Certain units require prepayment and compartment unlocking, while some mall-based chargers require users to lower parking blockers through the app before plugging in."
            }
        ]
    },
    design_solution: "Design Solution",
    home: {
        caption: "Home",
        title: "Overview",
        description:
            "The Home screen provides a centralized view of EV activity. Users can track active charging sessions in real time and review monthly summaries across all linked vehicles. Whether charging now or reviewing past usage, Amper delivers a clear snapshot the moment the app launches.",
        states: [
            "While Charging",
            "Default"
        ]
    },

    map: {
        caption: "Map",
        title: "Discoverability",
        description:
            "All supported chargers across multiple networks are unified into a single, easy-to-navigate map. Real-time availability is color-coded for quick scanning, and filters help narrow stations by plug type, charging speed, availability, and more. Station pages include detailed information and community-generated updates, making discovery faster and more reliable."
    },

    station: {
        caption: "Station Details",
        title: "Transparent and Reliable",
        description: [
            `Each station page provides standardized, real-time information including status, available plug types, pricing structure, and operating hours—ensuring consistency across providers.
            
            Community-powered features allow users to suggest corrections, report issues, confirm fixes, and leave reviews. By giving users a voice, Amper builds a more transparent and trustworthy charging ecosystem.`
        ]
    },

    addVehicle: {
        caption: "Add Vehicle",
        title: "Customization",
        description:
            "Users can add and customize vehicle profiles by selecting the exact make and model, ensuring compatibility with available chargers. Additional supported plug types can be added, allowing Amper to tailor recommendations and check-in flows to real-world setups."
    },

    chargeJourney: {
        title: "Sample Check-in Journeys",
        description:
            "Designed to support each provider's pricing model and hardware configuration while improving efficiency through clearer information, fewer screens, and a visually consistent interface.",
        samples: [
            {
                caption: "Sample 1",
                title: "EleXA",
                description: {
                    plugIdentification: "Dedicated QR Code",
                    pricingModel: "Per kWh",
                    similarProviders: [
                        "EV Station PluZ",
                        "AlterVim",
                        "On-ion",
                        "EVolt"
                    ]
                },
                description:
                    "Dedicated QR code chargers offer a simple scan-and-charge flow. Amper improves the EleXA journey by removing a misleading full-page battery percencaptione step and replacing it with a compact, clearly captioned option within the confirmation page. This creates space for station and plug details, reducing the risk of users checking into the wrong plug."
            },
            {
                caption: "Sample 2",
                title: "PEA Volta",
                description: {
                    plugIdentification: "Shared QR Code",
                    pricingModel: "Per kWh",
                    similarProviders: [
                        "MEA EV",
                        "Shell Recharge",
                        "ReverSharger"
                    ]
                },
                description:
                    "Shared QR code chargers still require manual plug selection. Amper improves the experience by allowing flexible payments via connected cards and e-wallets, eliminating the need to top up provider-specific wallets and reducing fragmented balances across apps."
            },
            {
                caption: "Sample 3",
                title: "Shell Recharge",
                description: {
                    plugIdentification: "Shared QR Code",
                    pricingModel: "Per kWh with time slot",
                    similarProviders: [
                        "ReverSharger"
                    ]
                },
                description:
                    "The original flow required users to select charging duration before choosing a start time, which didn't match real-world planning behavior. Amper redesigns the flow so users select start and end times first, with duration calculated automatically—making booking more intuitive and reducing friction."
            },
            {
                caption: "Sample 4",
                title: "EA Anywhere (DC)",
                description: {
                    plugIdentification: "Shared QR Code",
                    pricingModel: "Prepaid fixed amount"
                },
                description:
                    "Amper consolidates a previously complex check-in flow into a streamlined experience. Vehicle selection, payment method, and amount selection are merged into a single confirmation page, followed by a unified instruction screen. This reduces the flow from 12 clicks to 5 and from 7 screens to 3 without removing required steps."
            }
        ],
        showcase: [
            "AlterVim", "EA Anywhere (AC)"
        ]
    },

    reflection: {
        title: "Reflection",
        description: [
            `Unifying public EV chargers was an idea I had been thinking about for some time but never fully pieced together until this project. It became the first project where I deeply considered not only on-screen journeys, but also the hardware and operational constraints shaping them.
            
            What I initially expected to be a small project grew far more complex. Designing a consistent check-in experience across diverse providers challenged my assumptions and pushed my design thinking. Balancing real-world constraints, provider requirements, and user mental models ultimately made the project both demanding and deeply rewarding.`
        ]
    }
}

export default copy;