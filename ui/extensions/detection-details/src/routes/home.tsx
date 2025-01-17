import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
} from "@patternfly/react-core";

interface HomeProps {
  data: any;
}

export default function Home({ data }: HomeProps) {
  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>Objective</DescriptionListTerm>
        <DescriptionListDescription>
          <code>{data.detection.objective}</code>
        </DescriptionListDescription>
        <DescriptionListTerm>Detection ID</DescriptionListTerm>
        <DescriptionListDescription>
          <code>{data.detectionId}</code>
        </DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
}
