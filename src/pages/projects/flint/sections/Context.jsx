// Components
import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";
import Copy from "../../../../components/primitives/Section/Copy.jsx";
import SectionHeader from "../../../../components/patterns/SectionHeader.jsx"
import VisualBlock from "../../../../components/patterns/VisualBlock.jsx"

// Assets
import assets from '../../../../assets/projects/flint/index.js';
import copy from '../../../../assets/projects/flint/copy.js';

// Lucide
import { CircleQuestionMark } from 'lucide-react';

export default function Context() {
    return (
        <>
            <MediaBlock
                lightSrc={assets.problem.light.image}
                darkSrc={assets.problem.dark.image}
                caption={copy.problem.caption}
                title={copy.problem.title}
                description={copy.problem.description}
                padding="roomy"
            />
            <ColumnLayout
                showLabel={true}
                title={copy.stats.title}
            >
                <Copy  
                    media
                    mediaSrc={assets.stocks.image}
                    title={copy.stats.item[0].title}
                    titleSize="text-xxl"
                    description={copy.stats.item[0].description}
                    background={true}
                    cols="4"
                    textAlign="left"
                ></Copy>
                <Copy
                    media
                    mediaSrc={assets.bank.image}
                    title={copy.stats.item[1].title}
                    titleSize="text-xxl"
                    description={copy.stats.item[1].description}
                    background={true}
                    cols="4"
                    textAlign="left"
                ></Copy>
                <Copy
                    media
                    mediaSrc={assets.coin.image}
                    title={copy.stats.item[2].title}
                    titleSize="text-xxl"
                    description={copy.stats.item[2].description}
                    background={true}
                    cols="4"
                    textAlign="left"
                ></Copy>
            </ColumnLayout>
            <SectionHeader
                title={copy.designQuestion}
            />
            <MediaBlock
                lightSrc={assets.competitive.image}
                caption={copy.competitive.caption}
                title={copy.competitive.title}
                description={copy.competitive.description}
                padding="roomy"
            />
            <VisualBlock 
                lightSrc={assets.analysis.light.image}
                darkSrc={assets.analysis.dark.image}
            />
            <ColumnLayout
                showLabel={true}
                title={copy.painPoints.title}
            >
                <Copy  
                    media
                    mediaSrc={assets.wayfinder.image}
                    title={copy.painPoints.item[0].title}
                    titleSize="text-l"
                    description={copy.painPoints.item[0].description}
                    background={true}
                    cols="6"
                    textAlign="left"
                ></Copy>
                <Copy
                    media
                    mediaSrc={assets.sign.image}
                    title={copy.painPoints.item[1].title}
                    titleSize="text-l"
                    description={copy.painPoints.item[1].description}
                    background={true}
                    cols="6"
                    textAlign="left"
                ></Copy>
                <Copy
                    media
                    mediaSrc={assets.shell.image}
                    title={copy.painPoints.item[2].title}
                    titleSize="text-l"
                    description={copy.painPoints.item[2].description}
                    background={true}
                    cols="6"
                    textAlign="left"
                ></Copy>
                <Copy
                    media
                    mediaSrc={assets.barrier.image}
                    title={copy.painPoints.item[2].title}
                    titleSize="text-l"
                    description={copy.painPoints.item[2].description}
                    background={true}
                    cols="6"
                    textAlign="left"
                ></Copy>
            </ColumnLayout>
            <SectionHeader
                title={copy.risks.title}
                description={copy.risks.description}
            />
            <VisualBlock 
                lightSrc={assets["flow-problem"].light.image}
                darkSrc={assets["flow-problem"].dark.image}
            />
            <MediaBlock
                mediaType="video"
                lightSrc={assets.onboard.light.video}
                darkSrc={assets.onboard.dark.video}
                caption={copy.objective.caption}
                title={copy.objective.title}
                description={copy.objective.description}
                padding="roomy"
            />
            <SectionHeader
                title={copy.discoverability.title}
                description={copy.discoverability.description}
            />
            <VisualBlock 
                lightSrc={assets["flow-objective"].light.image}
                darkSrc={assets["flow-objective"].dark.image}
            />
            <ColumnLayout padding="fit">
                <MediaBlock 
                    showLabel={false}
                    lightSrc={assets["wireframe-1"].light.image}
                    darkSrc={assets["wireframe-1"].dark.image}
                    withWrapper={false}
                    cols={6}
                />
                <MediaBlock
                    showLabel={false}
                    lightSrc={assets["wireframe-1"].light.image}
                    darkSrc={assets["wireframe-1"].dark.image}
                    withWrapper={false}
                    cols={6}
                />
            </ColumnLayout>
        </>
    )
}