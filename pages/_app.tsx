import Footer from "@/components/footer";
import Logo from "@/components/logo";
import { Navigation } from "@/components/navigation";
import { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const links = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Dashboard", href: "/dashboard" },
    // { title: "Digital Garden", href: "/digital-garden" },
  ];

  return (
    <div className="relative">
      <Navigation position="fixed" className="section" links={links}>
        <Logo />
      </Navigation>
      {/* <main className="min-h-screen flex flex-col items-center mx-auto isolate"> */}
      <Component {...pageProps} />
      <Footer />
      {/* </main> */}
    </div>
  );
}

export default MyApp;
