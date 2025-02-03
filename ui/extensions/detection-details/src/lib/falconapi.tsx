import FalconApi, { LocalData } from "@crowdstrike/foundry-js";
import { createContext, useContext, useEffect, useState } from "react";

interface IFalconApiContext {
  falcon: FalconApi<LocalData> | undefined;
  data: LocalData | undefined;
  isInitialized: boolean;
}

const FalconApiContext = createContext<IFalconApiContext>({
  falcon: undefined,
  data: undefined,
  isInitialized: false,
});

export function FalconApiProvider({ children }: { children: React.ReactNode }) {
  const [falcon] = useState(() => new FalconApi());
  const [data, setData] = useState<LocalData>();
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    let isMounted = true;
    falcon.connect().then(() => {
      if (isMounted) {
        setIsInitialized(falcon.isConnected);
        setData(falcon.data);
        falcon.events.on("data", setData);
      }
    });

    return () => {
      // cleanup function on unrender
      isMounted = false;
      falcon.events.off("data", setData);
    };
  }, [falcon]);

  useEffect(() => {
    if (data == undefined) {
      return;
    } else if (data.theme == "theme-dark") {
      document.documentElement.classList.add("pf-v6-theme-dark");
    } else {
      document.documentElement.classList.remove("pf-v6-theme-dark");
    }
  }, [data]);

  return (
    <FalconApiContext.Provider value={{ falcon, data, isInitialized }}>
      {children}
    </FalconApiContext.Provider>
  );
}

export function useFalconApi() {
  const context = useContext(FalconApiContext);
  if (context === undefined) {
    throw new Error("useFalconApi must be used within a FalconApiProvider");
  }
  return context;
}
