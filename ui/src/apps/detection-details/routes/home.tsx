import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from "@patternfly/react-core";

interface HomeProps {
  detection: any;
}

export default function Home({ detection }: HomeProps) {
  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>Objective</DescriptionListTerm>
        <DescriptionListDescription>
          {detection.objective}
        </DescriptionListDescription>
        <DescriptionListTerm>Detection ID</DescriptionListTerm>
        <DescriptionListDescription>
          <code>{detection.composite_id}</code>
        </DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
}
