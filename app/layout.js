import { Lato as Font } from "next/font/google";
import "@/assets/css/globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme/theme-provider";

export const metadata = {
  title: "TradeHub",
  description: "Best B2B ECommerce Platform",
};

export const font = Font({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
