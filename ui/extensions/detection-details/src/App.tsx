import { Tab, Tabs, TabTitleText } from "@patternfly/react-core";
import React from "react";
import { useFoundry } from "./lib/foundry-context";

import ConsoleExtension from "./components/ConsoleExtension";
import Details from "./routes/details";
import Home from "./routes/home";

export default function App() {
  const { data, isInitialized } = useFoundry();
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(
    "home"
  );

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
    <ConsoleExtension>
      <Tabs activeKey={activeTabKey} onSelect={handleTabClick}>
        <Tab title={<TabTitleText>Home</TabTitleText>} eventKey="home">
          <Home detection={data!.detection} />
        </Tab>
        <Tab title={<TabTitleText>Details</TabTitleText>} eventKey="details">
          <Details detection={data!.detection} />
        </Tab>
      </Tabs>
    </ConsoleExtension>
  );
}
