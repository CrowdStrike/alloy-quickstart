import { useFoundry } from "@crowdstrike/alloy-react";
import {
  Alert,
  AlertActionCloseButton,
  Button,
  Form,
  FormGroup,
  Grid,
  GridItem,
  Spinner,
  TextArea,
  TextInput,
} from "@patternfly/react-core";
import { useState } from "react";

type AlertVariant = "custom" | "info" | "warning" | "success" | "danger";

export default function CollectionEditorMock() {
  const { falcon } = useFoundry();

  const [collectionName, setCollectionName] = useState("");
  const [objectName, setObjectName] = useState("");
  const [objectValue, setObjectValue] = useState("");

  const [loading, setLoading] = useState(false);
  const [alertTitle, setAlertTitle] = useState<null | string>(null);
  const [alertText, setAlertText] = useState<null | string>(null);
  const [alertVariant, setAlertVariant] = useState<AlertVariant>("info");
  function setAlert(title: string, text: string | null, variant: AlertVariant) {
    setAlertTitle(title);
    setAlertText(text);
    setAlertVariant(variant);
  }

  function handleLoad() {
    setLoading(true);
    falcon
      ?.collection({ collection: collectionName })
      .read(objectName)
      .then((r: any) => {
        setLoading(false);
        if (r.errors && r.errors.length > 0) {
          const msg = r.errors[0].message as string;
          if (msg.indexOf("object not found") >= 0) {
            setAlert(
              "Object not found",
              "No object by that name exists, but you can still save a new object with that name",
              "info"
            );
          } else if (msg.indexOf("collection not found") >= 0) {
            setAlert(
              "Collection not found",
              "No collection exists with that name, check your spelling and app configuration",
              "warning"
            );
          } else {
            setAlert("Error occurred", r.errors[0].message, "danger");
          }
        } else {
          setAlert(
            "Object loaded",
            "You can make changes and save it, or you can delete it",
            "success"
          );
          setObjectValue(JSON.stringify(r, null, 2));
        }
      });
  }

  function handleSave() {
    setLoading(true);
    falcon
      ?.collection({ collection: collectionName })
      .write(objectName, JSON.parse(objectValue))
      .then((r: any) => {
        setLoading(false);
        if (r.errors && r.errors.length > 0) {
          setAlert("Error occurred", r.errors[0].message, "danger");
        } else {
          setAlert(
            "Object saved",
            `Saved at ${r.resources[0].last_modified_time}`,
            "success"
          );
        }
      });
  }

  function handleDelete() {
    setLoading(true);
    falcon
      ?.collection({ collection: collectionName })
      .delete(objectName)
      .then((r: any) => {
        setLoading(false);
        if (r.errors && r.errors.length > 0) {
          setAlert("Error occurred", r.errors[0].message, "danger");
        } else {
          setAlert("Object deleted", null, "success");
        }
      });
  }

  return (
    <>
      {alertTitle && (
        <Alert
          variant={alertVariant}
          title={alertTitle}
          actionClose={
            <AlertActionCloseButton onClose={() => setAlertTitle(null)} />
          }
        >
          {alertText}
        </Alert>
      )}
      <Form>
        <Grid hasGutter md={6}>
          <GridItem span={4}>
            <FormGroup label="Collection name">
              <TextInput
                value={collectionName}
                onChange={(_, v) => {
                  setCollectionName(v);
                }}
                isDisabled={loading}
              />
            </FormGroup>
          </GridItem>
          <GridItem span={4}>
            <FormGroup label="Object name">
              <TextInput
                value={objectName}
                onChange={(_, v) => {
                  setObjectName(v);
                }}
                isDisabled={loading}
              />
            </FormGroup>
          </GridItem>
          <GridItem span={4}>
            <FormGroup label=" ">
              <Button
                variant="secondary"
                onClick={handleLoad}
                isDisabled={loading}
              >
                Load Object
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={handleSave}
                isDisabled={loading}
              >
                Save
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={handleDelete}
                isDanger
                isDisabled={loading}
              >
                Delete
              </Button>{" "}
              {loading && <Spinner size="lg" />}
            </FormGroup>
          </GridItem>
          <GridItem span={12}>
            <FormGroup label="Object value">
              <TextArea
                autoResize
                value={objectValue}
                onChange={(_, v) => {
                  setObjectValue(v);
                }}
                isDisabled={loading}
              />
            </FormGroup>
          </GridItem>
        </Grid>
      </Form>
    </>
  );
}
