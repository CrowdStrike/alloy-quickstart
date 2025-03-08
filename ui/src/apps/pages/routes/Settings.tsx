import { PageSection, Title } from "@patternfly/react-core";
import CollectionEditor from "../../../components/CollectionEditor";

export default function Settings() {
  return (
    <PageSection>
      <Title headingLevel="h3">Settings</Title>
      <CollectionEditor />
    </PageSection>
  );
}
