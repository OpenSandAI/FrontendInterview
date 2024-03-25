import "./globals.css";
import Footer from "@/components/Footer";
import List from "@/components/List";
import Header from "@/components/Header";
import { Box, Container } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Container maxWidth="xl">
          <Header />
          <List />
          <Box
            sx={{ height: "calc(100vh)" }}>
            {children}
          </Box>
          <Footer />
        </Container>
      </body>
    </html>
  );
}