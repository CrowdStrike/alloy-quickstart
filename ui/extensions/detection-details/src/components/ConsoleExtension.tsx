import { Panel } from "@patternfly/react-core";
import { ReactNode } from "react";
import { FalconApiProvider } from "../lib/falconapi";

import "./ConsoleExtension.css";

interface ConsoleExtensionProps {
  children?: ReactNode;
}

export default function ConsoleExtension({ children }: ConsoleExtensionProps) {
  return (
    <FalconApiProvider>
      <Panel className="main-panel">{children}</Panel>
    </FalconApiProvider>
  );
}
