"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { ShoppingModal } from "@/components";
import LoginSection from "@/components/LoginSection";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={client}>
      <ReactQueryStreamedHydration>
        <Provider store={store}>
          <ShoppingModal />
          <LoginSection/>
          {children}
        </Provider>
      </ReactQueryStreamedHydration>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Providers;
