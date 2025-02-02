import { Footer, Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="grow">
        <Home />
      </main>
      <Footer />
    </>
  );
};

export default App;
