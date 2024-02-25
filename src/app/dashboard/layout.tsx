"use client";
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sidebar/dashboardSidebar";
import { Container } from "@mui/system";
import { FC, ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-stretch w-full max-lg:flex-col">
      <SideBar />
      <div className="w-full bg-background transition-all duration-700 overflow-auto">
        <Container maxWidth="xl">
          <Header />
          {children}
        </Container>
      </div>
    </div>
  );
};

export default DashboardLayout;
