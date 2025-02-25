import { ConsolePage, useFoundry } from "@crowdstrike/alloy-react";
import { PageSection, Title } from "@patternfly/react-core";

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
