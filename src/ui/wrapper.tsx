import NavBar from "@/components/navbar";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}
const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main className={"mt-16 p-4 px-12 flex flex-col items-center gap-2"}>
        {children}
      </main>
    </>
  );
};

export default Wrapper;
