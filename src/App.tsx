import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PresentationTopics } from "./components/PresentationTopics";
import { Book } from "./components/Book";
import { Pricing } from "./components/Pricing";
import { QuoteRequestForm } from "./components/QuoteRequestForm";
import { Footer } from "./components/Footer";
import { Privacy } from "./components/Privacy";
import { Toaster } from "./components/ui/sonner";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);

  if (showPrivacy) {
    return (
      <>
        <Privacy onBack={() => setShowPrivacy(false)} />
        <Toaster />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PresentationTopics />
      <Testimonials />
      <Pricing />
      <Book />
      <QuoteRequestForm />
      <Footer onPrivacyClick={() => setShowPrivacy(true)} />
      <Toaster />
    </div>
  );
}