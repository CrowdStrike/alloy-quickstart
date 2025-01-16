import { Panel, Title } from "@patternfly/react-core";
import { FalconApiContext, useFalconApiContext } from "./lib/falconapi";

export default function App() {
  const { falcon, navigation, isInitialized } = useFalconApiContext();

  if (!isInitialized) {
    return null;
  }

  return (
    <FalconApiContext.Provider value={{ falcon, navigation, isInitialized }}>
      <Panel>
        <Title headingLevel="h1">Hello from Patternfly</Title>
      </Panel>
    </FalconApiContext.Provider>
  );
}
