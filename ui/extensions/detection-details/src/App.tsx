import { Panel, Tab, Tabs, TabTitleText } from "@patternfly/react-core";
import React, { useEffect, useState } from "react";
import { FalconApiContext, useFalconApiContext } from "./lib/falconapi";
import Home from "./routes/home";

import "./app.css";
import Details from "./routes/details";

export default function App() {
  const { falcon, navigation, isInitialized } = useFalconApiContext();
  const [data, setData] = useState<any>(falcon.data);
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(
    "home"
  );

  useEffect(() => {
    falcon.events.on("data", setData);
  }, []);

  if (!isInitialized) {
    return null;
  }

  // Toggle currently active tab
  const handleTabClick = (
    event: React.MouseEvent<any> | React.KeyboardEvent | MouseEvent,
    tabIndex: string | number
  ) => {
    setActiveTabKey(tabIndex);
  };

  return (
    <FalconApiContext.Provider value={{ falcon, navigation, isInitialized }}>
      <Panel className="main-panel">
        <Tabs activeKey={activeTabKey} onSelect={handleTabClick}>
          <Tab title={<TabTitleText>Home</TabTitleText>} eventKey="home">
            <Home data={data} />
          </Tab>
          <Tab title={<TabTitleText>Details</TabTitleText>} eventKey="details">
            <Details data={data} />
          </Tab>
        </Tabs>
      </Panel>
    </FalconApiContext.Provider>
  );
}
