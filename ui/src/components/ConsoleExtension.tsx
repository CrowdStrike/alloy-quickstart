import { Panel } from "@patternfly/react-core";
import { ReactNode } from "react";

import "./ConsoleExtension.css";
import PatternflyShim from "./PatternflyShim";

interface ConsoleExtensionProps {
  children?: ReactNode;
}

export default function ConsoleExtension({ children }: ConsoleExtensionProps) {
  return (
    <PatternflyShim>
      <Panel className="main-panel">{children}</Panel>
    </PatternflyShim>
  );
}
