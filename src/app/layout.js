import { Inter, Roboto } from "next/font/google";
import Navbar from "./components/navbar/navbar";
import "@styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], style: "normal", weight: "400" });

export const metadata = {
  title: "Fakhri Rasyad",
  description: "Made for PMW2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
