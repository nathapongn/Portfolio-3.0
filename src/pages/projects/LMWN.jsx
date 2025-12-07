import MediaBlock from '../../components/MediaBlock/MediaBlock.jsx'
import Cover from '../../components/Cover/Cover.jsx'

// Assets
import assets from '../../assets/projects/lmwn/index.js';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover
                    className="lmwn"
                    lightSrc={assets.cover}
                    lightSrcMobile={assets["cover-mobile"]}
                />
                <MediaBlock
                ></MediaBlock>
            </main>
        </>
    )
}