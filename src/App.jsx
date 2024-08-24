//Importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//App component's style sheet
import "./App.css";

//Importing other child components
import ContextComponent from "./ContextComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      {/* wrapping the child component which going to use context inside the ContextComponent*/}
      <ContextComponent>
        <Header />
        <ProductList />
      </ContextComponent>
      <Footer />
    </>
  );
}

export default App;
