import Link from 'next/link';
import { Button } from './ui/Button';
import logo from './logo.png'
import Image from 'next/image';
export default function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-purple-100 dark:bg-zinc-950/80 dark:border-zinc-800 transition-colors duration-300">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-outfit text-purple-900 dark:text-white tracking-tight">
                    <Image src={logo} alt="Logo" className="w-32" />
                </Link>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-purple-900/80 dark:text-zinc-300">
                    <Link href="#servicos" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Serviços</Link>
                    <Link href="#trafego-pago" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Tráfego Pago</Link>
                    <Link href="#estrategia" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Estratégia</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="primary" asChild>
                        <Link href="https://api.whatsapp.com/send/?phone=5571997284970&text&type=phone_number&app_absent=0">Solicitar Orçamento</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
