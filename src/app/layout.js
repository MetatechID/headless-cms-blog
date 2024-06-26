import { Inter } from "next/font/google";
import "@/styles/globals.css";
// import "@/styles/styles.sass";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jaya Berani Maju",
  description: "metatech",
};

const RootLayout = ({ children }) => {
  return (
    <html
      lang="en"
      className="scroll-smooth dark:bg-[#EAECF6]"
      suppressHydrationWarning
    >
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
