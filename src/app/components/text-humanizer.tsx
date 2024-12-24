'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Loader2 } from 'lucide-react'

export function TextHumanizer() {
    const MAX_CHARS = 512;
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [language, setLanguage] = useState('es')
    const [showCopyMessage, setShowCopyMessage] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleClear = () => {
        setInput('')
    }

    const handleCopy = async () => {
        if (!input) return; // No hacer nada si no hay texto
        try {
            await navigator.clipboard.writeText(input)
            setShowCopyMessage(true)
            setTimeout(() => {
                setShowCopyMessage(false)
            }, 2000)
        } catch (err) {
            console.error('Error al copiar:', err)
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        setInput(text.slice(0, MAX_CHARS));
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const text = e.clipboardData.getData('text');
        setInput(prevInput => (prevInput + text).slice(0, MAX_CHARS));
    };

    // Modificar el handler para el segundo textarea
    const handleCopyOutput = async () => {
        if (!output) return;
        try {
            await navigator.clipboard.writeText(output)
            setShowCopyMessage(true)
            setTimeout(() => {
                setShowCopyMessage(false)
            }, 2000)
        } catch (err) {
            console.error('Error al copiar:', err)
        }
    }

    const handleHumanize = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('http://127.0.0.1:8000/humanize_with_transitions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: input, language }),
            });
            const data = await response.json();
            setOutput(data.humanized_text);
        } catch (error) {
            console.error('Error al humanizar el texto:', error);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 mt-4">Humanizador de Texto</h2>
            <div className="flex flex-col md:flex-row border rounded-lg bg-white overflow-hidden">
                <div className="flex-1 flex flex-col">
                    <Textarea
                        placeholder="Ingrese el texto que quiere parafrasear aquí"
                        value={input}
                        onChange={handleInput}
                        onPaste={handlePaste}
                        maxLength={MAX_CHARS}
                        className="flex-1 border-0 rounded-none min-h-[200px] md:min-h-[300px] resize-none focus-visible:ring-0"
                    />
                    <Separator />
                    <div className="p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <select className="w-full sm:w-auto text-sm border rounded px-2 py-1" value={language} onChange={(e) => setLanguage(e.target.value)}>
                            <option value="es">Español</option>
                            <option value="en">Inglés</option>
                        </select>
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <span className="text-sm text-gray-500">
                                {input.length}/{MAX_CHARS} caracteres
                            </span>
                            <Button variant="ghost" size="sm" onClick={handleCopy} title="Copiar texto" disabled={!input}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /><path d="M4 12h8" /><path d="M4 16h8" /><path d="M4 8h8" /></svg>
                            </Button>

                            <Button variant="ghost" size="sm" onClick={handleClear} title="Borrar texto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="md:hidden" />
                <Separator orientation="vertical" className="hidden md:block h-auto" />

                <div className="flex-1 flex flex-col">
                    <Textarea
                        value={output}
                        readOnly
                        className="flex-1 border-0 rounded-none min-h-[200px] md:min-h-[300px] resize-none focus-visible:ring-0"
                        placeholder="Texto parafraseado aparecerá aquí..."
                    />
                    <Separator />
                    <div className="p-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                        <select className="w-full sm:w-auto text-sm border rounded px-2 py-1">
                            <option>Descargar</option>
                        </select>
                        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                            <span className="text-sm text-gray-500">
                                {output.length} caracteres
                            </span>
                            <Button variant="ghost" size="sm" onClick={handleCopyOutput} title="Copiar texto" disabled={!output}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /><path d="M4 12h8" /><path d="M4 16h8" /><path d="M4 8h8" /></svg>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="mt-4 flex justify-start md:justify-center md:mr-32">
                <Button
                    onClick={handleHumanize}
                    size="sm"
                    className="w-full sm:w-32 h-10"
                    disabled={isLoading || !input}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Procesando
                        </>
                    ) : (
                        'Humanizar'
                    )}
                </Button>
            </div>
            {showCopyMessage && (
                <div className="fixed bottom-4 right-4 bg-green-100 text-green-800 px-4 py-2 rounded-md text-sm shadow-md z-50">
                    ¡Texto copiado!
                </div>
            )}
        </div>
    )
}
