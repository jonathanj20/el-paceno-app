import { useState } from "react";
import Hamburger from "hamburger-react";
import Imagotype from "./Imagotype";

export default function Header(){
    const [showNav, setShowNav] = useState(false);
    const linksNav: string[] = ["Inicio", "Promociones", "Ubicación"];
    const toggleNav = (toggled: boolean) => toggled ? setShowNav(true) : setShowNav(false);

    return(
        <header className="sticky top-0 z-10 bg-[#FFFFFA] flex justify-between items-center p-3">
            <Imagotype/>
            <div className="flex items-center lg:hidden">
                <Hamburger onToggle={toggleNav} />
            </div>
            <nav className={`${showNav ? "block" : "hidden"} bg-[#FFFFFA] fixed top-30 z-10 flex flex-col items-center gap-5 w-full h-[100%] lg:static lg:w-2/6 lg:flex lg:flex-row lg:justify-evenly pt-20 lg:pt-0`}>
                {
                    linksNav.map(link => <a href="#" className="text-lowGray hover:text-mainOrange transition-all delay-150" key={link}>{link}</a>)
                }
            </nav>
        </header>
    )
}