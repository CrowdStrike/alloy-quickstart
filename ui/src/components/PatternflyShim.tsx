import "@patternfly/react-core/dist/styles/base.css";
import { ReactNode, useEffect } from "react";
import { useFoundry } from "../lib/foundry-context";

interface PatternflyShimProps {
  children: ReactNode;
}

export default function PatternflyShim({ children }: PatternflyShimProps) {
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

  return <>{children}</>;
}
