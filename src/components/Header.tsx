import { useState } from "react";
import Hamburger from "hamburger-react";
import Imagotype from "./Imagotype";

export default function Header(){
    const [showNav, setShowNav] = useState(false);
    const linksNav: string[] = ["Inicio", "Promociones", "Ubicación"];
    const toggleNav = (toggled: boolean) => toggled ? setShowNav(true) : setShowNav(false);

    return(
        <header className="flex justify-between p-3">
            <Imagotype/>
            <div className="flex items-center lg:hidden">
                <Hamburger onToggle={toggleNav} />
            </div>
            <nav className={`${showNav ? "block" : "hidden"} absolute top-30 flex flex-col items-center gap-5 w-full lg:static lg:w-2/6 lg:flex lg:flex-row lg:justify-evenly`}>
                {
                    linksNav.map(link => <a href="#" className="text-[#716C6C] hover:text-mainOrange transition-all delay-150">{link}</a>)
                }
            </nav>
        </header>
    )
}