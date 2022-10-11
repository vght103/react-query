import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouteList from "./routes/RouteList";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <RouteList />\
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
