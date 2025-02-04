import { useState, CSSProperties } from "react"; // Importa CSSProperties
import { Link } from "react-router-dom";
import "../css/VericalNavbarComponents.css";
import { CardComponents } from "./CardComponents";

interface VerticalNavbarProps {
    // Aggiungi le props di stile
    style?: CSSProperties;
}

export const VerticalNavbarComponents: React.FC<VerticalNavbarProps> = ({ style }) => {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (section: string) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="vertical-navbar" style={style}> {/* Applica lo stile passato come props */}
            <ul>
                {[ 
                    { title: "Get Started", section: "getStarted", links: [{ text: "Installazione", to: "/installazione" }] },
                    {
                        title: "Componenti",
                        section: "componenti",
                        links: [{ text: "Button", to: "/button" },
                        { text: "Footer", to: "/footer" },
                        { text: "Form", to: "/form" },
                        { text: "Grid", to: "/grid" },
                        { text: "Searchbar", to: "/searchbar" }
                    ]
                    },
                ].map(({ title, section, links }) => (
                    <li key={section} className="navbar-section">
                        <span className="section-title" onClick={() => toggleSection(section)}>
                            {title}
                        </span>
                        <ul className={`sublist ${openSection === section ? "open" : ""}`}>
                            {links.map(({ text, to }) => (
                                <li key={to}>
                                    <Link to={to}>{text}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};
