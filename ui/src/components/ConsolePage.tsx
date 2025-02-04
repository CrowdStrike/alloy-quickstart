import { ReactNode } from "react";

import PatternflyShim from "./PatternflyShim";

interface ConsolePageProps {
  children?: ReactNode;
}

export default function ConsolePage({ children }: ConsolePageProps) {
  return <PatternflyShim>{children}</PatternflyShim>;
}
