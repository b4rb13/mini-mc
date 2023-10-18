import "./globals.css";
import type { Metadata } from "next";
import { Black_Ops_One } from "next/font/google";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import GA from "@/components/GA";

const blackOpsOne = Black_Ops_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xareb - File Converter",
  description: `Unleash your creativity with Xareb – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: "Andrey Arakelyan, Derenik Khachatryan",
  keywords:
    "image converter, video converter, audio converter, unlimited image converter, unlimited video converter",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID="mer GA ID-n" />
      <meta name="google-site-verification" content="heto generate kanenq" />
      <body className={blackOpsOne.className}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
