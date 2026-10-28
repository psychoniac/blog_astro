import { useState } from "react";

export default function Navbar({ userProfile = null, currentPath = "/" }) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: 'Accueil', path: '/' },
        { label: 'Mes articles', path: '/blog' },
        { label: 'A propos', path: '/about' },
    ];

    return (
        <nav className="border-b-2 border-ny-border bg-ny-card/90 backdrop-blur sticky top-0 z-50 px-4 py-3">
            <div className="max-w-6xl mx-auto flex items-center justify-between">

                {/* Logo / Brand 90s */}
                <a href="/" className="flex items-center gap-3 group">
                    <div className="bg-ny-yellow text-black font-display font-bold text-2xl px-3 py-1 border-2 border-black shadow-[3px_3px_0px_0px_#000] group-hover:translate-x-0.5 transition-transform">
                        BLOCK PARTY
                    </div>
                    <span className="hidden sm:inline-block text-xs font-bold tracking-wider text-ny-muted uppercase">
                        RDR & Underground
                    </span>
                </a>

                {/* Liens Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className={`text-xs uppercase font-bold transition-colors ${currentPath === link.path ? 'text-ny-yellow underline' : 'text-gray-300 hover:text-ny-yellow'
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Actions utilisateur Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    {userProfile ? (
                        <a
                            href="/profile"
                            className="flex items-center gap-2 bg-ny-bg px-3 py-1.5 border-2 border-black text-xs font-bold text-ny-yellow hover:border-ny-yellow transition-all"
                        >

                            <span>{userProfile.username || 'Mon Profil'}</span>
                        </a>
                    ) : (
                        <a
                            href="/login"
                            className="flex items-center gap-2 bg-ny-red text-white text-xs font-bold px-4 py-2 border-2 border-black shadow-brut-red hover:translate-x-0.5 transition-all uppercase"
                        >
                            Connexion
                        </a>
                    )}
                </div>

                {/* Bouton Hamburger Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-ny-yellow border-2 border-black bg-ny-bg"
                    aria-label="Toggle menu"
                >
                    {isOpen}
                </button>

            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden mt-3 pt-3 border-t-2 border-ny-border flex flex-col gap-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.path}
                            href={link.path}
                            className="text-sm font-bold uppercase text-gray-200 hover:text-ny-yellow px-2 py-1"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="pt-2 border-t border-ny-border">
                        <a
                            href="/login"
                            className="flex items-center justify-center gap-2 bg-ny-yellow text-black font-bold py-2 border-2 border-black uppercase text-xs"
                        >
                            Connexion / Inscription
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}