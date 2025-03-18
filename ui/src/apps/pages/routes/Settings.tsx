import { CollectionEditor } from "@crowdstrike/alloy-react";
import { PageSection, Title } from "@patternfly/react-core";

export default function Settings() {
  return (
    <PageSection>
      <Title headingLevel="h3">Settings</Title>
      <CollectionEditor
        collectionNameDefault="config"
        collectionNameEditable={false}
        objectNameDefault="default"
        objectNameEditable={false}
        loadObjectValue={true}
        loadButtonVisible={false}
        deleteButtonVisible={false}
        objectValueDefault={{ special_key: "PLACEHOLDER" }}
      />
    </PageSection>
  );
}
