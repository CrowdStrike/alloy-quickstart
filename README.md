# foundry-sandbox

👋 This is Evan Stoner's personal reference, template, and playground for working with Foundry apps.

## UI extension: detection details

Things to note:

- `src/index.tsx`: We wrap the `<App />` in a `<FoundryProvider>` which establishes a `FoundryContext`. This is required to interact with the foundry-js API's via our custom hook (keep reading).
- `src/App.tsx`: We wrap whatever extension-specific UI stuff in a `<ConsoleExtension>` which provides base styling for this type of UI component, including pulling in PatternFly base CSS. You can use [any PatternFly component](https://www.patternfly.org/components/all-components) in your app.
- `src/components/ConsoleExtension.tsx`: You can see an example of how to use our custom `useFoundry` hook, which provides the foundry-js `FalconAPI` and a stateful `data` (same as `falcon.data`, but wrapped in a `useState` hook). This example is really useful in that it ensures the PatternFly light/dark theme matches the Falcon console.

See `src/lib/foundry-context.tsx` for more about the custom `useFoundry` hook. Do not instantiate your own `FalconAPI`, we handle all this in a more React-y way.
