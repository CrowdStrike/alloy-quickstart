import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Label,
} from "@patternfly/react-core";

interface DetailsProps {
  data: any;
}

export default function Details({ data }: DetailsProps) {
  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>Data domains</DescriptionListTerm>
        <DescriptionListDescription>
          {data.detection.data_domains.map((d: string) => {
            return <Label>{d}</Label>;
          })}
        </DescriptionListDescription>
        <DescriptionListTerm>Source products</DescriptionListTerm>
        <DescriptionListDescription>
          {data.detection.source_products.map((p: string) => {
            return <Label>{p}</Label>;
          })}
        </DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
}
