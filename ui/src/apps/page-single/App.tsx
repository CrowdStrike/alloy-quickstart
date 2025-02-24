import { PageSection, Title } from "@patternfly/react-core";
import { ConsolePage, useFoundry } from "alloy-react";

export default function App() {
  const { isInitialized } = useFoundry();

  if (!isInitialized) {
    return null;
  }

  return (
    <ConsolePage title="Sandbox">
      <PageSection>
        <Title headingLevel="h3">Single Page</Title>
      </PageSection>
    </ConsolePage>
  );
}
