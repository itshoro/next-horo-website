import Footer from "@/components/footer";
import Navigation from "@/components/nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Navigation />
      <main className="min-h-screen flex flex-col items-center mx-auto">
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

export default MyApp;
