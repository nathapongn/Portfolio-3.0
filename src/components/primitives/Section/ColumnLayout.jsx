// CSS
import './ColumnLayout.css'
import Wrapper from '../Wrapper/Wrapper.jsx'
import Copy from './Copy.jsx'

export default function ColumnLayout({
    children, 
    showLabel=false, 
    title, 
    description, 
    textAlign="left",
    padding="compact"
}) {
    return(
        <Wrapper flexDirection="column">
            {showLabel &&
            <Copy className="column-label" title={title} description={description} textAlign={textAlign} fullWidth/>
            }
            <div className={`column-layout ${padding}`}>
            {children}
            </div>
        </Wrapper>
    )
}