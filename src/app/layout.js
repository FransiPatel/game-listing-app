import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Game Listing App",
  description: "Browse and search for your favorite games.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-gray-200`}
      >
        <header className="bg-gray-800 text-gray-100 py-4 shadow-md">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-purple-400">Game Listing</h1>
            <p className="text-sm text-gray-400">
              Discover and explore games across platforms
            </p>
          </div>
        </header>
        <main className="container mx-auto px-4 py-6">{children}</main>
        <footer className="bg-gray-800 text-gray-500 py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 Game Listing App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
