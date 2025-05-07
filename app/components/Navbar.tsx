import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={144} height={50} />
                </Link>
                </nav> 
        </header>
    );
};