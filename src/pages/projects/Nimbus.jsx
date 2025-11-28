// Components 
import Wrapper from '../../components/Wrapper/Wrapper.jsx'
import Cover from '../../components/Cover/Cover.jsx'

// Assets
import assets from '../../assets/projects/nimbus/index.js';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover 
                    lightSrc={assets.cover.light}
                    darkSrc={assets.cover.dark}
                />
            </main>
        </>
    )
}