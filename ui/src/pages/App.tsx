import ConsolePage from "../components/ConsolePage";
import { useFoundry } from "../lib/foundry-context";
import Home from "./routes/Home";
import Settings from "./routes/Settings";

export default function App() {
  const { isInitialized } = useFoundry();

  if (!isInitialized) {
    return null;
  }

  const routes = [
    {
      title: "Home",
      path: "/home",
      element: <Home />,
    },
    {
      title: "Settings",
      path: "/settings",
      element: <Settings />,
    },
  ];

  return <ConsolePage title="Sandbox" routes={routes} />;
}
