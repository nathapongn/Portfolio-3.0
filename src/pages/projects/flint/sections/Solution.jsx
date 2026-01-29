// Components
import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";

// Patterns
import VisualBlock from "../../../../components/patterns/VisualBlock.jsx";
import SectionHeader from "../../../../components/patterns/SectionHeader.jsx";
import ShowcaseBlock from "../../../../components/patterns/ShowcaseBlock.jsx";

// Assets
import assets from '../../../../assets/projects/flint/index.js';
import copy from '../../../../assets/projects/flint/copy.js';

export default function Solution() {
    return (
        <>
            <SectionHeader
                title={copy.design_solution}
            />
            <MediaBlock
                orientation='vertical'
                cols="12"
                showLabel={false}
                lightSrc={assets["mockup-1"].light.image}
                darkSrc={assets["mockup-1"].dark.image}
                padding="fit"
            />
            <ColumnLayout>
                <MediaBlock
                    withWrapper={false}
                    orientation='vertical'
                    cols="6"
                    showLabel={false}
                    lightSrc={assets["mockup-2"].light.image}
                    darkSrc={assets["mockup-2"].dark.image}
                    padding="fit"
                />
                <MediaBlock
                    withWrapper={false}
                    orientation='vertical'
                    cols="6"
                    showLabel={false}
                    lightSrc={assets["mockup-3"].image}
                    padding="fit"
                />
            </ColumnLayout>
            <MediaBlock
                mediaType="video"
                lightSrc={assets.home.light.video}
                darkSrc={assets.home.dark.video}
                caption={copy.home.caption}
                title={copy.home.title}
                description={copy.home.description}
                padding="roomy"
            />
            <MediaBlock
                mirror
                mediaType="video"
                lightSrc={assets.inv.light.video}
                darkSrc={assets.inv.dark.video}
                caption={copy.inv.caption}
                title={copy.inv.title}
                description={copy.inv.description}
                padding="roomy"
            />
            <MediaBlock
                mediaType="video"
                lightSrc={assets.info.light.video}
                darkSrc={assets.info.dark.video}
                caption={copy.info.caption}
                title={copy.info.title}
                description={copy.info.description}
                padding="roomy"
            />
            <ColumnLayout>
                <MediaBlock 
                    showLabel={false}
                    withWrapper={false}
                    lightSrc={assets["alert-1"].light.image}
                    darkSrc={assets["alert-1"].dark.image}
                    cols="4"
                    mediaCaption={copy.alerts.item[0]}
                />
                <MediaBlock 
                    showLabel={false}
                    withWrapper={false}
                    lightSrc={assets["alert-2"].light.image}
                    darkSrc={assets["alert-2"].dark.image}
                    cols="4"
                    mediaCaption={copy.alerts.item[1]}
                />
                <MediaBlock 
                    showLabel={false}
                    withWrapper={false}
                    lightSrc={assets["alert-3"].light.image}
                    darkSrc={assets["alert-3"].dark.image}
                    cols="4"
                    mediaCaption={copy.alerts.item[2]}
                />
            </ColumnLayout>
            <MediaBlock
                mirror
                mediaType="video"
                lightSrc={assets.wallet.light.video}
                darkSrc={assets.wallet.dark.video}
                caption={copy.wallet.caption}
                title={copy.wallet.title}
                description={copy.wallet.description}
                padding="roomy"
            />
            <MediaBlock
                lightSrc={assets.card.light.image}
                darkSrc={assets.card.dark.image}
                caption={copy.card.caption}
                title={copy.card.title}
                description={copy.card.description}
                padding="roomy"
            />
            <SectionHeader 
                title={copy.styleGuide.title}
            />
            <VisualBlock 
                lightSrc={assets["sheet-1"].light.image}
                darkSrc={assets["sheet-1"].dark.image}
            />
            <VisualBlock 
                lightSrc={assets["sheet-2"].light.image}
                darkSrc={assets["sheet-2"].dark.image}
            />
            <ShowcaseBlock 
                lightSrc={assets.motion.light.video}
                darkSrc={assets.motion.dark.video}
            />
            <SectionHeader 
                title={copy.reflection.title}
                description={copy.reflection.description}
                textAlign="left"
            />
        </>
    )
}