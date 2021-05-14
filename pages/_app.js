import Navigation from "@/components/nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="relative">
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
