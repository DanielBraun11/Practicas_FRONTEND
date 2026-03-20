import "./globals.css";

export const metadata = {
  title: "Catálogo de Productos",
  description: "Práctica 3 Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}