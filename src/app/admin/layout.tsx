"use client";
import Header from "@/components/layout/header";
import SideBar from "@/components/layout/sidebar/adminSidebar";
import { Container } from "@mui/system";
import { FC, ReactNode, useState } from "react";

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-stretch w-full max-lg:flex-col">
      <SideBar />
      <div className="w-full bg-background ml-auto transition-all duration-700">
        <Container maxWidth="xl">
          <Header />
          {children}
        </Container>
      </div>
    </div>
  );
};

export default AdminLayout;
