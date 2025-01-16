import FalconApi, { LocalData } from "@crowdstrike/foundry-js";
import { Navigation } from "@crowdstrike/foundry-js/lib/navigation";
import { createContext, useEffect, useMemo, useState } from "react";

interface IFalconApiContext {
  falcon: FalconApi<LocalData>;
  navigation: Navigation<LocalData> | undefined;
  isInitialized: boolean;
}
const FalconApiContext = createContext<IFalconApiContext>(
  {} as IFalconApiContext
);

function useFalconApiContext() {
  const [isInitialized, setIsInitialized] = useState(false);
  const falcon = useMemo(() => new FalconApi(), []);
  const navigation = useMemo(
    () => (falcon.isConnected ? falcon.navigation : undefined),
    [falcon.isConnected]
  );

  useEffect(() => {
    (async () => {
      await falcon.connect();

      setIsInitialized(falcon.isConnected);
    })();
  }, []);

  return { falcon, navigation, isInitialized };
}

export { FalconApiContext, useFalconApiContext };
