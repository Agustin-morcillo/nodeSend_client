import React from "react";
import Image from "next/image"
import logo from "/public/logo.svg"

export default function Header() {
    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <div className="w-64 mb-8 md:mb-0">
                <Image src={logo} alt="Nodesend Logo" />
            </div>
        </header>
    )
}
