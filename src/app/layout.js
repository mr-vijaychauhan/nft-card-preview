import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit(
  {
    subsets: ["latin"],
    weight: ["300", "400", "600"]
  }
);

export const metadata = {
  title: "NFT Preview Card | Frontend Mentor",
  description: "NFT Preview Card",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-main ${outfit.className}`}>{children}</body>
    </html>
  );
}
