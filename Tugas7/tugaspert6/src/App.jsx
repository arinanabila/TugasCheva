import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-[#242424] m-0 p-0" style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f7f4ed' }}>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
