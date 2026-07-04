import { useState } from 'react';
import CoreConcepts from './components/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import { Header } from './components/Header.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';


function App() {
  const [selectedTab, setSelectedTab] = useState("");

  function handleSelect(selectedTab) {
    setSelectedTab(selectedTab);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts key={concept.title} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
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
          </menu>
          {!selectedTab ? <p> Please select a tab to view its content.</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTab].code}
              </code>
            </pre>
          </div>}
        </section>
      </main>
    </div>
  );
}

export default App;
