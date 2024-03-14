import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Box, Container } from "@mui/material";

import TopBar from "@/components/TopBar";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import LoginModel from "@/components/LoginModel";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demo1 title",
  description: "Demo1 description...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container maxWidth="xl">
          <TopBar />
          <NavBar />
          <Box
            paddingInline={2}
            paddingBlock={2}
            sx={{ minHeight: "calc(100vh - 134px - 64px - 50px)" }}>
            {children}
          </Box>
          <Footer />
          <LoginModel />
        </Container>
      </body>
    </html>
  );
}
