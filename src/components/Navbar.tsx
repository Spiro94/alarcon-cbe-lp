import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    {/* You can replace this with your logo image if you have a small version */}
                    <span className={`text-xl font-bold ${isScrolled ? 'text-teal-800' : 'text-gray-800'}`}>
                        Alarcón CBE
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('services')}
                        className={`font-medium hover:text-teal-600 cursor-pointer transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}
                    >
                        Servicios
                    </button>
                    <button
                        onClick={() => scrollToSection('benefits')}
                        className={`font-medium hover:text-teal-600 cursor-pointer transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}
                    >
                        Resultados
                    </button>
                    <button
                        onClick={() => scrollToSection('testimonials')}
                        className={`font-medium hover:text-teal-600 cursor-pointer transition-colors ${isScrolled ? 'text-gray-600' : 'text-gray-700'}`}
                    >
                        Testimonios
                    </button>
                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="bg-teal-600 hover:bg-teal-700 cursor-pointer text-white rounded-full px-6"
                    >
                        Agendar Cita
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-800"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
                    <button
                        onClick={() => scrollToSection('services')}
                        className="text-left py-2 text-gray-600 hover:text-teal-600 font-medium"
                    >
                        Servicios
                    </button>
                    <button
                        onClick={() => scrollToSection('benefits')}
                        className="text-left py-2 text-gray-600 hover:text-teal-600 font-medium"
                    >
                        Resultados
                    </button>
                    <button
                        onClick={() => scrollToSection('testimonials')}
                        className="text-left py-2 text-gray-600 hover:text-teal-600 font-medium"
                    >
                        Testimonios
                    </button>
                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                    >
                        Agendar Cita
                    </Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
