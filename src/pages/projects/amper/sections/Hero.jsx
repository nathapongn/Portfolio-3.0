import Cover from "../../../../components/primitives/Cover/Cover.jsx";
import Copy from "../../../../components/primitives/Section/Copy.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";
import Divider from "../../../../components/primitives/Divider/Divider.jsx";

// Assets
import assets from '../../../../assets/projects/amper/index.js';
import copy from '../../../../assets/projects/amper/copy.js';

export default function Hero() {
    return (
        <>
            <Cover 
                lightSrc={assets.cover.light.image}
                darkSrc={assets.cover.dark.image}
            />
            <ColumnLayout>
                <Copy
                    title={copy.intro.title}
                    titleSize="text-xxl"
                    description={copy.intro.description}
                    descriptionSize="text-m"
                    cols="6"
                    textAlign="left"
                />
                <Copy
                    title={copy.intro.tools.title}
                    titleSize="text-m strong"
                    description={
                    <ul className="list-plain">
                        <li>{copy.intro.tools.description[0]}</li>
                        <li>{copy.intro.tools.description[1]}</li>
                        <li>{copy.intro.tools.description[2]}</li>
                        <li>{copy.intro.tools.description[3]}</li>
                    </ul>}
                    descriptionSize="text-m"
                    cols="3"
                    textAlign="left"
                />
                <Copy 
                    title={copy.intro.roles.title}
                    titleSize="text-m strong"
                    description={copy.intro.roles.description}
                    descriptionSize="text-m"
                    cols="3"
                    textAlign="left"
                />
            </ColumnLayout>
            <Divider />
        </>
    )
}