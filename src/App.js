import { useEffect } from "react";
import Layout from "./layout";
function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#1D1546";
  });
  return <Layout />;
}

export default App;
