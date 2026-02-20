import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';
import logo from './logo2.png';
export default function Footer() {
    return (
        <footer className="bg-zinc-950 text-white pt-20 pb-10 border-t border-purple-900/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold font-outfit text-white tracking-tight block mb-4">
                            <Image src={logo} alt="Logo" className="w-32" />
                        </Link>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            Agência especializada em Marketing Digital e Design Gráfico com mais de 10 anos de experiência transformando marcas.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-outfit font-semibold text-lg mb-4 text-purple-300">Serviços</h4>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li><Link href="#design-grafico" className="hover:text-purple-400 transition-colors">Design Gráfico</Link></li>
                            <li><Link href="#marketing-digital" className="hover:text-purple-400 transition-colors">Marketing Digital</Link></li>
                            <li><Link href="#trafego-pago" className="hover:text-purple-400 transition-colors">Tráfego Pago</Link></li>
                            <li><Link href="#criacao-sites" className="hover:text-purple-400 transition-colors">Criação de Sites</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-semibold text-lg mb-4 text-purple-300">Contato</h4>
                        <ul className="space-y-3 text-zinc-400 text-sm">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-purple-500" />
                                <span>contato@aniloxdesign.com.br</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-outfit font-semibold text-lg mb-4 text-purple-300">Redes Sociais</h4>
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/anilox_oficial/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-500 text-xs">
                    <p>&copy; {new Date().getFullYear()} Anilox Design. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
