import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "Uniford Foundation",
  description: "In India, For the world!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
