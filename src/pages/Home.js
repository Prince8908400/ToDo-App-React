import React, { useContext } from "react";
import Tabs, { TabItem } from "../components/Tab/Tabs";
import TabPanels, { TabPanel } from "../components/Tab/TabPanels";
import { TabContext } from "../store/tab-context";

function Home() {
  const { activeTabs } = useContext(TabContext);
  console.log(activeTabs);

  const tabTitles = ["1D", "2D", "3D", "4D", "5D"];

  const tabItems = [];
  for (let i = 0; i < 5; i++) {
    tabItems.push(
      <div key={i}>
        <Tabs textColor="secondary" variant="secondary" orientation="horizontal" id={`tabs${i + 1}`}>
          {tabTitles.map((title, index) => (
            <TabItem title={title} key={index} />
          ))}
        </Tabs>
        <TabPanels id={`tabs${i + 1}`}>
          {tabTitles.map((title, index) => (
            <TabPanel key={index}>Tab {index + 1}</TabPanel>
          ))}
        </TabPanels>
      </div>
    );
  }

  return (
    <div>
      {tabItems}
    </div>
  )
}

export default Home;

/*   return (
    <>
      <Tabs
        textColor="secondary"
        variant="secondary"
        orientation="horizontal"
        id="tabs1"
      >
        <TabItem title="1D" />
        <TabItem title="2D" />
        <TabItem title="3D" />
        <TabItem title="4D" />
        <TabItem title="5D" />
      </Tabs>
      <TabPanels id="tabs1">
        <TabPanel>
          Tab 1
        </TabPanel>
        <TabPanel>
          Tab 2
        </TabPanel>
        <TabPanel>
          Tab 3
        </TabPanel>
        <TabPanel>
          Tab 4
        </TabPanel>
        <TabPanel>
          Tab 5
        </TabPanel>
      </TabPanels>
 
      <hr />
 
      <Tabs
        textColor="primary"
        variant="primary"
        orientation="horizontal"
        id="tabs2"
      >
        <TabItem title="Description" />
        <TabItem title="Collections" />
      </Tabs>
      <TabPanels id="tabs2">
        <TabPanel>
          Tab 1
        </TabPanel>
        <TabPanel>
          Tab 2
        </TabPanel>
      </TabPanels>
 
      <hr />
 
      <Tabs
        textColor="primary"
        variant="primary"
        orientation="horizontal"
        id="tabs3"
      >
        <TabItem title="1D" />
        <TabItem title="2D" />
        <TabItem title="3D" />
        <TabItem title="4D" />
        <TabItem title="5D" />
      </Tabs>
      <TabPanels id="tabs3">
        <TabPanel>
          Tab 1
        </TabPanel>
        <TabPanel>
          Tab 2
        </TabPanel>
        <TabPanel>
          Tab 3
        </TabPanel>
        <TabPanel>
          Tab 4
        </TabPanel>
        <TabPanel>
          Tab 5
        </TabPanel>
      </TabPanels>
 
      <hr />
 
      <Tabs
        textColor="secondary"
        variant="secondary"
        orientation="horizontal"
        id="tabs4"
      >
        <TabItem title="Any" />
 
        <TabItem title="1" />
        <TabItem title="2" />
        <TabItem title="3" />
        <TabItem title="4" />
      </Tabs>
      <TabPanels id="tabs4">
        <TabPanel>
          Tab 1
        </TabPanel>
        <TabPanel>
          Tab 2
        </TabPanel>
        <TabPanel>
          Tab 3
        </TabPanel>
        <TabPanel>
          Tab 4
        </TabPanel>
        <TabPanel>
          Tab 5
        </TabPanel>
      </TabPanels>
    </>
  ); */
