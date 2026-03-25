import Image from 'next/image';
import logo from './logo2.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                    <Image src={logo} alt="Logo Anilox Design" className="h-6 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition" />
                </div>
                <p className="text-sm">© {new Date().getFullYear()} Anilox Design. Todos os direitos reservados. Foco em Conversão.</p>
            </div>
        </footer>
    );
}