import Link from 'next/link';
import Image from 'next/image';
import logo from './logo.png';

export default function Header() {
    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/">
                            <Image src={logo} alt="Logo Anilox Design" className="h-8 w-auto object-contain" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link href="#cenario" className="text-gray-600 hover:text-anilox transition font-medium">O Cenário</Link>
                        <Link href="#solucao" className="text-gray-600 hover:text-anilox transition font-medium">Nossa Solução</Link>
                        <Link href="#planos" className="text-gray-600 hover:text-anilox transition font-medium">Planos</Link>
                        <Link href="#processo" className="text-gray-600 hover:text-anilox transition font-medium">Como Funciona</Link>
                    </div>
                    <div>
                        <Link href="#contato" className="bg-anilox hover:bg-anilox-dark text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg shadow-anilox/30">
                            Falar com Consultor
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}