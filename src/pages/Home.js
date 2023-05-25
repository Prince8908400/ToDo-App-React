import React from "react";
import Tabs from "../components/Tab/Tabs";
import TabContent from "../components/Tab/TabContent";
import { TabContext } from "../store/tab-context";
import { useContext } from "react";

function Home() {
  const tabCtx = useContext(TabContext);

  const handleChange = (event) => {
    const activeTabId = parseInt(event.target.getAttribute("id"));
    tabCtx.handleTabChange(activeTabId);
  };

  return (
    <>
      <Tabs
        textColor="primary"
        variant="primary"
        orientation="horizontal"
        onTabChange={handleChange}
        id="tabs1"
      >
        <Tabs.TabItem title="3D" id={1} />
        <Tabs.TabItem title="2D" id={2} />
      </Tabs>
      <TabContent id={1}>
        <p>Tab 1</p>
      </TabContent>
      <TabContent id={2}>
        <p>Tab 2</p>
      </TabContent>

      <hr />

      <Tabs
        textColor="primary"
        variant="primary"
        orientation="horizontal"
        onTabChange={handleChange}
        id="tabs2"
      >
        <Tabs.TabItem title="3D" id={1} />
        <Tabs.TabItem title="2D" id={2} />
      </Tabs>
      <TabContent id={1}>
        <p>Tab 1</p>
      </TabContent>
      <TabContent id={2}>
        <p>Tab 2</p>
      </TabContent>

      <hr />

      <Tabs
        textColor="primary"
        variant="primary"
        orientation="horizontal"
        onTabChange={handleChange}
        id="tabs3"
      >
        <Tabs.TabItem title="3D" id={1} />
        <Tabs.TabItem title="2D" id={2} />
      </Tabs>
      <TabContent id={1}>
        <p>Tab 1</p>
      </TabContent>
      <TabContent id={2}>
        <p>Tab 2</p>
      </TabContent>
    </>
  );
}

export default Home;
