// Components 
import Cover from '../../components/Cover/Cover.jsx'
import ColumnLayout from '../../components/Section/ColumnLayout.jsx';
import Copy from '../../components/Section/Copy.jsx';
import MediaBlock from '../../components/MediaBlock/MediaBlock.jsx';
import Divider from '../../components/Divider/Divider.jsx'

// Assets
import assets from '../../assets/projects/nimbus/index.js';
import Wrapper from '../../components/Wrapper/Wrapper.jsx';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover 
                    lightSrc={assets.cover.light.image}
                    darkSrc={assets.cover.dark.image}
                    lightSrcMobile={assets["cover-mobile"].light.image}
                    darkSrcMobile={assets["cover-mobile"].dark.image}
                    modeSupport={true}
                />
                <ColumnLayout>
                    <Copy
                        title="Nimbus"
                        titleSize="text-xxl"
                        description="Streamlines personal finance management with automation."
                        descriptionSize="text-m"
                        cols="6"
                        textAlign="left"
                    />
                    <Copy
                        title="Tools"
                        titleSize="text-m strong"
                        description={
                        <ul className="list-plain">
                            <li>Figma</li>
                            <li>Microsoft Excel</li>
                            <li>Adobe Premiere</li>
                            <li>Adobe Photoshop</li>
                        </ul>}
                        descriptionSize="text-m"
                        cols="3"
                        textAlign="left"
                    />
                    <Copy 
                        title="Role"
                        titleSize="text-m strong"
                        description="Individual Project"
                        descriptionSize="text-m"
                        cols="3"
                        textAlign="left"
                    />
                </ColumnLayout>
                <Divider />
                <MediaBlock 
                    caption="Problem"
                    title="Not Quite Right"
                    description="Since I began tracking my personal finances, I've struggled to find a single app that meets all my needs. One app might excel at a particular feature but lacks a handy feature that another app does well. Moreover, the inconvenience of manually recording all my transactions has been a persistent challenge."
                    lightSrc={assets.problem.light.image}
                    darkSrc={assets.problem.dark.image}
                />
                <ColumnLayout
                    showLabel={true}
                    title="User Research"
                    description="To gather insights, I conducted a brief survey with 16 participants, most of whom currently use a tracking app or platform, while others have used such tools in the past."
                >
                    <Copy
                        title="72%"
                        description='of respondents find the manual tracking process to be their most disliked aspect. Respondents who stopped tracking also cited this aspect as their primary reason.'
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                    <Copy
                        title="77%"
                        description='of respondents prefer to track their finances weekly, while the remainder prefer daily tracking.'
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                    <Copy
                        title="50%"
                        description='of respondents cited customization and visualization of their finances as the most appreciated aspects of their platform.'
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                 </ColumnLayout>
                 <MediaBlock
                    title="Objective"
                    description="Design a localized personal finance tracking platform for Thailand that offers comprehensive features with added automation to enhance convenience."
                    lightSrc={assets.obj.light.image}
                    darkSrc={assets.obj.dark.image}
                 />
                <MediaBlock showLabel={false} lightSrc={assets.wireframe.light.image} darkSrc={assets.wireframe.dark.image} />
                <MediaBlock showLabel={false} lightSrc={assets.sitemap.light.image} darkSrc={assets.sitemap.dark.image} />
                <Copy title="Design Solution" className="section-header" fullWidth/>
                <MediaBlock
                    orientation='vertical'
                    cols="12"
                    showLabel={false}
                    lightSrc={assets["mockup-1"].light.image}
                    darkSrc={assets["mockup-1"].dark.image}
                />
                <ColumnLayout>
                    <MediaBlock
                        withWrapper={false}
                        orientation='vertical'
                        cols="6"
                        showLabel={false}
                        lightSrc={assets["mockup-2"].light.image}
                        darkSrc={assets["mockup-2"].dark.image}
                    />
                    <MediaBlock
                        withWrapper={false}
                        orientation='vertical'
                        cols="6"
                        showLabel={false}
                        lightSrc={assets["mockup-3"].light.image}
                        darkSrc={assets["mockup-3"].dark.image}
                    />
                </ColumnLayout>
                <MediaBlock
                caption="Overview"
                title="Dashboard"
                mediaType="image"
                description="Provides an overview of your assets, statistics, recent transactions, active budgets, and account balances."
                lightSrc={assets.dashboard.light.image}
                darkSrc={assets.dashboard.dark.image}
                />
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets.overview.light.video}
                    darkSrc={assets.overview.dark.video}
                    title="Accuracy"
                    description="A convenient date range picker offers users with varying payroll dates a clear and accurate view of their true monthly cash flow and budget."
                />
                <MediaBlock
                    mirror={true}
                    lightSrc={assets.txn.light.image}
                    darkSrc={assets.txn.dark.image}
                    caption="Insights"
                    title="Transaction"
                    description="Detailed record of all transactions with a stacked bar chart displaying transaction categories for each month, offering a clear visualization of users' spending patterns."
                />
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets.txn.light.video}
                    darkSrc={assets.txn.dark.video}
                    title="Transaction Overview"
                    description="Users can view records of all their transactions, spending pattern by categories, and edit records."
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["flow-txn"].light.image}
                    darkSrc={assets["flow-txn"].dark.image}
                    showLabel={false}
                />
                <Copy 
                    title="Automation" 
                    description="Besides manual transaction entry, users can link accounts from supported banks or upload payment slips and bank statements to automatically log transactions." 
                    className="section-header" 
                    fullWidth
                />
                <MediaBlock
                    mediaType="video"
                    orientation="vertical"
                    lightSrc={assets.upload.light.video}
                    darkSrc={assets.upload.dark.video}
                    title="Transaction Upload"
                    description="Users can upload payment slips to record expenses or historical statements to automatically log all transactions. An AI model analyzes the upload via OCR, inputs transaction information, and assigns categories for recognized recipients or senders. Users can then fine-tune these categories or add notes."
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["flow-upload"].light.image}
                    darkSrc={assets["flow-upload"].dark.image}
                    showLabel={false}
                />
                <MediaBlock
                    mirror={false}
                    lightSrc={assets.txn.light.image}
                    darkSrc={assets.txn.dark.image}
                    caption="Keep Control"
                    title="Budget"
                    description="Take control of spending by adding a custom budget and setting a limit for different categories. Stay informed with daily recommended spending amounts and receive notifications when approaching budget limits."
                />
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets.budget.light.video}
                    darkSrc={assets.budget.dark.video}
                    title="Create Budget"
                    description="Users can create a budget by selecting their preferred categories and setting spending limits, with a recommended daily amount to stay within budget.Users can view records of all their transactions, spending pattern by categories, and edit records."
                />
                <MediaBlock
                    mirror={false}
                    lightSrc={assets.inv.light.image}
                    darkSrc={assets.inv.dark.image}
                    caption="Comprehensive"
                    title="Investment"
                    description="Track investments including domestic mutual funds, stocks across major international markets, and commodities. Compare performance across various asset types with ease."
                />
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets["inv-stocks"].light.video}
                    darkSrc={assets["inv-stocks"].dark.video}
                    title="Stocks"
                    description="Track stocks across major exchanges."
                />
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets["inv-mf"].light.video}
                    darkSrc={assets["inv-mf"].dark.video}
                    title="Mutual Funds"
                    description="Track domestic mutual funds with daily NAV updates."
                />
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets["inv-commo"].light.video}
                    darkSrc={assets["inv-commo"].dark.video}
                    title="Commodities"
                    description="Track major commodities in customizable units."
                />
                <MediaBlock
                    showLabel={false}
                    lightSrc={assets["flow-inv"].light.image}
                    darkSrc={assets["flow-inv"].dark.image}
                    title="Commodities"
                    description="Track major commodities in customizable units."
                />
                <Copy title="Style Guide" className="section-header" fullWidth/>
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["style-1"].light.image}
                    darkSrc={assets["style-1"].dark.image}
                    showLabel={false}
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["style-2"].light.image}
                    darkSrc={assets["style-2"].dark.image}
                    showLabel={false}
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["style-3"].light.image}
                    darkSrc={assets["style-3"].dark.image}
                    showLabel={false}
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["style-4"].light.image}
                    darkSrc={assets["style-4"].dark.image}
                    showLabel={false}
                />
                <Wrapper>
                    <Copy
                        title="Reflection"
                        description="
                        Nimbus stands out as the most challenging and intricate personal design project I've undertaken. From initial scoping to countless sketching iterations, the process required an additional level of depth and precision. Designing for both light and dark modes for the first time demanded a highly systematic approach to primitives and semantic tokenization.
                        
                        This project was also one of the most iterative I've ever worked on, often requiring me to revisit the drawing board more than I anticipated.

                        Ultimately, the experience profoundly shaped my growth as a designer. It improved my ability to approach projects with a structured mindset, significantly enhancing how I tackle design challenges in my professional practice."
                        fullWidth={true}
                        textAlign="left"
                        className="section-header"
                    />
                </Wrapper>
            </main>
        </>
    )
}