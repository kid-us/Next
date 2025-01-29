import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Navbar";
import Provider from "./auth/Provider";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Next Learn",
  description: "Generated by next Learn",
};

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="container mx-auto py-10">
            <Navbar />
            <main className="mt-10">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
