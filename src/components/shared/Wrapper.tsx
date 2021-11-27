import React from "react";
import Head from "./Head";
import NavBar from "./NavBar";

interface WrapperProps {
  title: string;
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children, title }) => {

  return (
    <>
      <Head title={title} />
      {children}
    </>
  );
};

export default Wrapper;
