import {
  DescriptionList,
  DescriptionListDescription,
  DescriptionListGroup,
  DescriptionListTerm,
  Label,
} from "@patternfly/react-core";

interface DetailsProps {
  detection: any;
}

export default function Details({ detection }: DetailsProps) {
  return (
    <DescriptionList>
      <DescriptionListGroup>
        <DescriptionListTerm>Data domains</DescriptionListTerm>
        <DescriptionListDescription>
          {detection.data_domains.map((d: string) => {
            return <Label>{d}</Label>;
          })}
        </DescriptionListDescription>
        <DescriptionListTerm>Source products</DescriptionListTerm>
        <DescriptionListDescription>
          {detection.source_products.map((p: string) => {
            return <Label>{p}</Label>;
          })}
        </DescriptionListDescription>
      </DescriptionListGroup>
    </DescriptionList>
  );
}
