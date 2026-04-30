import type { Metadata } from "next";
import "./globals.css";
import NavegadorPags from "./components/NavegadorPags";

export const metadata: Metadata = {
  title: "Mi Red Social",
  description: "Una red social sencilla",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <div className="MainContainer">
          <NavegadorPags />
          {children}
        </div>
      </body>
    </html>
  );
}