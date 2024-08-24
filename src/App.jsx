//Importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

//App component's style sheet
import "./App.css";

//Importing other child components
import ContextComponent from "./ContextComponent";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";

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
