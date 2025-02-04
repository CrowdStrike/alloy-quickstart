import { Title } from "@patternfly/react-core";
import ConsolePage from "../components/ConsolePage";
import { useFoundry } from "../lib/foundry-context";
export default function App() {
  const { isInitialized } = useFoundry();

  if (!isInitialized) {
    return null;
  }

  return (
    <ConsolePage>
      <Title headingLevel="h1">Pages</Title>
    </ConsolePage>
  );
}
