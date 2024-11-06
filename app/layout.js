import Head from "next/head";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: process.env.AppName,
  description: "App discription will be written here",
  icons: [{
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    url: './enigma_logo_final.png',
  }]
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>
            <main>
              <Navbar />
              {children}
              <Footer />
            </main>
          </main>
        </body>
      </html >
    </ClerkProvider>
  );
}
