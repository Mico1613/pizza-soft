import { ChakraProvider } from "@chakra-ui/react";
import { store } from "~app/model";
import { router } from "~app/router";
import { AppLayout } from "~app/ui";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "./styles/App.scss";

const App = () => (
  <Provider store={store}>
    <ChakraProvider>
      <AppLayout>
        <RouterProvider router={router} />
      </AppLayout>
    </ChakraProvider>
  </Provider>
);

createRoot(document.getElementById("root")!).render(<App />);
