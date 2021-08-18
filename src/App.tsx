import * as React from "react";
import SortableTable from "./components/SortableTable";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <React.Suspense
          fallback={
            <div
              style={{
                position: "fixed",
                display: "grid",
                placeContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              Loading&hellip;
            </div>
          }
        >
          <div className="content-container">
            <Switch>
              <Route
                exact
                path="/sortable-table"
                render={() => {
                  return <SortableTable />;
                }}
              />
              <Route
                exact
                path="/"
                render={() => {
                  return <h1>Hello</h1>;
                }}
              />
              <Route
                path="*"
                render={() => {
                  return <h1>Hi</h1>;
                }}
              />
            </Switch>
          </div>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
