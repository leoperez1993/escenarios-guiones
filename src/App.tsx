import Layout from "./layout/Layout";

import "/node_modules/primeflex/primeflex.css";
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primeicons/primeicons.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <Layout>
        <AppRoutes />
      </Layout>
    </>
  );
}

export default App;
