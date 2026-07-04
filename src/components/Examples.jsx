import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTab, setSelectedTab] = useState("");

    function handleSelect(selectedTab) {
        setSelectedTab(selectedTab);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs 
            
            buttons={
                <>
                    <TabButton onSelect={() => handleSelect('components')} isActive={selectedTab === 'components'}>
                        Components
                    </TabButton>
                    <TabButton onSelect={() => handleSelect('jsx')} isActive={selectedTab === 'jsx'}>
                        JSX
                    </TabButton>
                    <TabButton onSelect={() => handleSelect('props')} isActive={selectedTab === 'props'}>
                        Props
                    </TabButton>
                    <TabButton onSelect={() => handleSelect('state')} isActive={selectedTab === 'state'}>
                        State
                    </TabButton>
                </>
            }>
                {!selectedTab ? <p> Please select a tab to view its content.</p> : <div id="tab-content">
                    <h3>{EXAMPLES[selectedTab].title}</h3>
                    <p>{EXAMPLES[selectedTab].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTab].code}
                        </code>
                    </pre>
                </div>}
            </Tabs>


        </Section>
    );
}