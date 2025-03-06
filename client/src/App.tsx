import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Footer from "./components/Footer.tsx";
import Features from "./components/Features.tsx";
import CallToAction from "./components/CallToAction.tsx";
import Faqs from "./components/Faqs.tsx";
import HowItWorks from "./components/HowItWorks.tsx";
import Products from "./components/Products.tsx";
import AddProduct from "./components/AddProduct.tsx";

function App() {

  return(
      <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50">
          <Navbar />
          <main className="container mx-auto px-4 py-16">
              <Hero />
              <Features />
              <Products />
              <AddProduct onAddProduct={function(): void {
                  throw new Error("Function not implemented.");
              } } />
              <HowItWorks />
              <CallToAction />
              <Faqs />
          </main>
          <Footer />
      </div>
  )
}

export default App
