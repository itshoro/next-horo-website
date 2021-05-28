import Footer from "@/components/footer";
import Navigation from "@/components/nav";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const links = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Dashboard", href: "/dashboard" },
    { title: "Digital Garden", href: "/digital-graden" },
  ];

  return (
    <div className="relative">
      <Navigation links={links} />
      <main className="min-h-screen flex flex-col items-center mx-auto">
        <Component {...pageProps} />
        <Footer />
      </main>
    </div>
  );
}

export default MyApp;
