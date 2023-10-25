import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sushi Regal",
  description:
    "Sushi Regal is specialized in Japanese food, including sushi and rolls, located in Thornton, Warabrook, and Maitland in the Newcastle",
  keywords: [
    "sushi rolls",
    "fresh sushi",
    "Japanese cuisine",
    "sushi cafe",
    "sushi restaurant",
    "handcrafted sushi",
    "sushi delicacies",
    "sushi artistry",
    "Thornton",
    "Warabrook",
    "Maitland",
    "Newcastle",
  ],
  url: "https://sushi-regal.vercel.app",
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googlebot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "larget",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
