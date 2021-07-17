import React from "react";
import Footer from "./footer";
import Header from "./header";
import "../styles/layout.css";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
