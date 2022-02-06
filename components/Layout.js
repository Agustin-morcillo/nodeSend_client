import React from "react"
import Head from "next/head"

import Header from "./Header"

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Next.js NodeSend</title>
                <meta name="description" content="NodeSend es la forma más sencilla de enviar tus archivos a todo el mundo. Comparta archivos y fotos de gran tamaño. ¡Compartir archivos es fácil!" />
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto">
                    <Header />
                    <main className="mt-20">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}
