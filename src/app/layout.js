import "./globals.css";

export const metadata = {
  title: "Casa Lalla Takerkoust",
  description: "Lalla Takerkoust Vibe Agafay Desert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
