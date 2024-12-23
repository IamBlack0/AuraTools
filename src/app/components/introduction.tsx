export function Introduction() {
    return (
        <div className="max-w-4xl mx-auto mt-8 md:mt-12 p-4 md:p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                ¿Qué es el Humanizador de Texto?
            </h2>
            <p className="text-sm md:text-base mb-3 md:mb-4">
                El Humanizador de Texto es una herramienta de inteligencia artificial diseñada para transformar
                texto generado por máquinas en un lenguaje más natural y fluido, similar al que usaría un ser humano.
            </p>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
                ¿Cómo funciona?
            </h3>
            <ol className="list-decimal list-inside space-y-1 md:space-y-2 text-sm md:text-base">
                <li className="pl-2">Ingresa el texto que deseas humanizar en el área de texto de la izquierda.</li>
                <li className="pl-2">Haz clic en el botón "Humanizar".</li>
                <li className="pl-2">Nuestro algoritmo de IA procesará tu texto, ajustando el tono, la estructura y el vocabulario.</li>
                <li className="pl-2">El resultado aparecerá en el área de texto de la derecha, listo para que lo uses.</li>
            </ol>
            <p className="mt-3 md:mt-4 text-sm md:text-base">
                Esta herramienta es ideal para mejorar la calidad de textos generados automáticamente,
                como traducciones automáticas, resúmenes de IA o contenido generado por chatbots.
            </p>
        </div>
    )
}