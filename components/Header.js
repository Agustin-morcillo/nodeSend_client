import React from "react";
import Image from "next/image"
import Link from "next/link";
import logo from "/public/logo.svg"

export default function Header() {
    return (
        <header className="py-8 flex flex-col md:flex-row items-center justify-between">
            <Link href="/" passHref>
                <div className="w-64 mb-8 md:mb-0">
                    <Image src={logo} alt="Nodesend Logo" />
                </div>
            </Link>

            <div>
                <Link href="/login">
                    <a className="bg-red-500 px-5 py-3 rounded-lg text-white font-bold uppercase mr-2">Iniciar Sesión</a>
                </Link>

                <Link href="/register">
                    <a className="bg-black px-5 py-3 rounded-lg text-white font-bold uppercase">Crear cuenta</a>
                </Link>
            </div>
        </header>
    )
}
