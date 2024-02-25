import React from "react";
import Footer from "@/components/pages/home/Footer/Footer";
import Navbar from "@/components/pages/home/Header/Navbar";
import { Container } from "@mui/system";

interface WebsiteLayoutProps {
  children: any;
}

const WebsiteLayout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col gap-8 justify-start min-h-screen w-full">
      <header className="space-y-14 mt-4 w-full">
        <Container maxWidth="xl">
          <Navbar />
        </Container>
      </header>
      <div className="flex justify-center min-h-[400px] w-full">{children}</div>
      <footer className="w-full bg-card_shade mt-auto">
        <Container maxWidth="xl">
          <Footer />
        </Container>
      </footer>
    </main>
  );
};

export default WebsiteLayout;
