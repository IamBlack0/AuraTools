import Link from 'next/link'

export function Footer() {
    return (
        <footer className="bg-white shadow mt-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500">
                            AuraTools &copy; 2024 . Todos los derechos reservados.
                        </p>
                    </div>
                    <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
                        <Link
                            href="/privacidad"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Política de Privacidad
                        </Link>
                        <Link
                            href="/terminos"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Términos de Uso
                        </Link>
                        <Link
                            href="/contacto"
                            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                        >
                            Contacto
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}