import Head from "next/head";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./global.css";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: process.env.AppName,
  description: "Enigma is the modern version of a mystery game, turned into an immersive adventure. The players play unique character characters with special skills, investigate richly detailed 3D environments, and piece together clues to crack the ultimate case. This exciting new take on Cluedo brings suspense and strategy to life, transforming the classic game into an immersive, interactive mystery. With unique skills for each character, 3D environments, and evolving plot twists, players get to dive deep into their roles, uncover clues, and interrogate suspects like never before.",
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
