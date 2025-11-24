import Wrapper from "../components/Wrapper/Wrapper";
import MediaBlock from "../components/MediaBlock/MediaBlock";

import assets from "../../src/assets/site/index"

export default function About() {
    return(
        <>
            <main>
                <Wrapper>
                    <div className="About">
                        <MediaBlock 
                        title="A little about me"
                        description={`I'm Nat, a UX Designer based in Bangkok with a background in architecture with 4+ years of experience. I currently design at SCB (Siam Commercial Bank), one of Thailand's largest financial institutions.

                        At SCB, I am primarily responsible for designing internal tools that support bank staff and RMs in their daily operations, alongside customer-facing business banking platforms that serve the financial needs of thousands of companies—from SMEs to the country’s largest corporations. I work across both web and mobile platforms.

                        These products help enable some of the most critical financial transactions in Thailand.`}
                        lightSrc={assets.about["1"]}
                        />

                        <MediaBlock 
                        title="What I value"
                        description={`As a designer with an architecture background, I highly value organization and consistency. I believe a well-structured design system—intuitive for designers and translatable to development—is essential for improving communication, increasing efficiency, and reducing discrepancies across teams.

                        I keep our systems up to date with new features and mentor both in-house and external designers.
                        
                        To me, a strong design system follows a three-layer pyramid: Understanding, Flexibility, and Efficiency. With a solid understanding, components become clear and reusable; flexibility keeps them adaptable; and efficiency naturally follows.`
                        }
                        lightSrc={assets.about["2"]}
                        mirror={true}
                        />
                    </div>
                </Wrapper>
            </main> 
        </>
    )
}