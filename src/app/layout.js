import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Casa Lalla Takerkoust - Lalla Takerkoust Vibe Agafay Desert",
  description:
    "Discover Casalalla Takerkoust: A Culinary Gem Near Marrakech - Casalalla is a must-visit restaurant that offers a unique dining experience. Enjoy a delightful blend of traditional Moroccan and international cuisine, meticulously prepared with fresh, local ingredients. With breathtaking views of Takerkoust Lake and the Atlas Mountains, Casalalla provides the perfect backdrop for a memorable meal.",
  keywords:
    "Casalalla, barrage lalla Takerkoust, lalla takerkoust lake, lalla takerkoust activities, restaurant, Moroccan cuisine, Agafay Desert, Marrakech, dining experience",
  verification: {
    google: "WleKnHMlv2-IUhmNP2UlP7vcheVTK09fLKHwSmVFt3c",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1GSVC5EJ1N" />
      <body>{children}</body>
    </html>
  );
}
