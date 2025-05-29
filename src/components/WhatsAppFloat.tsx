import { useEffect, useState } from 'react';

const WhatsAppFloat = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            const contactSection = document.getElementById('contact');

            if (!contactSection) return;

            const contactTop = contactSection.offsetTop;
            const scrollY = window.scrollY + window.innerHeight / 2;

            // Show button when past hero and before contact section
            setIsVisible(scrollY < contactTop);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleWhatsAppClick = () => {
        const phoneNumber = "573166211524";
        const message = encodeURIComponent("Hola, me gustaría agendar una consulta inicial. ¿Podrían ayudarme con información sobre sus servicios?");
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={handleWhatsAppClick}
            className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 animate-pulse cursor-pointer"
            aria-label="Contactar por WhatsApp"
        >
            <img src='wtp_logo.svg' className="w-8 h-8" />
        </button>
    );
};

export default WhatsAppFloat;
