'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="bg-white shadow relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/AuraToolsLogo.svg"
                            alt="AuraTools Logo"
                            width={48}
                            height={32}
                        />
                        <h1 className="text-2xl font-bold text-black">AuraTools</h1>
                    </div>

                    {/* Botón hamburguesa */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Menú desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <nav className="space-x-4">
                            <Link href="/tools" className="text-gray-600 hover:text-gray-900">
                                Herramientas
                            </Link>
                        </nav>
                        <div className="flex space-x-2">
                            <Button variant="outline">Iniciar sesión</Button>
                            <Button>Registrarse</Button>
                        </div>
                    </div>
                </div>

                {/* Menú móvil */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col space-y-4 pt-4 pb-2`}>
                    <Link href="/tools" className="text-gray-600 hover:text-gray-900 py-2">
                        Herramientas
                    </Link>
                    <div className="flex flex-col space-y-2">
                        <Button variant="outline" className="w-full">Iniciar sesión</Button>
                        <Button className="w-full">Registrarse</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}