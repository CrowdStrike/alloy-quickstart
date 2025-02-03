import { Panel } from "@patternfly/react-core";
import { ReactNode, useEffect } from "react";

import { useFoundry } from "../lib/foundry-context";
import "./ConsoleExtension.css";

interface ConsoleExtensionProps {
  children?: ReactNode;
}

export default function ConsoleExtension({ children }: ConsoleExtensionProps) {
  const { data } = useFoundry();

  useEffect(() => {
    if (data == undefined) {
      return;
    } else if (data.theme == "theme-dark") {
      document.documentElement.classList.add("pf-v6-theme-dark");
    } else {
      document.documentElement.classList.remove("pf-v6-theme-dark");
    }
  }, [data]);

  return <Panel className="main-panel">{children}</Panel>;
}
