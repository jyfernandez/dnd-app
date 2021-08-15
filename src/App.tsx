import "./App.css";
import "antd/dist/antd.css";
import SortableTable from "./components/SortableTable";

function App() {
  return (
    <div className="app">
      <div className="content-container">
        <SortableTable />
      </div>
    </div>
  );
}

export default App;
