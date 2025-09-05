import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Header(){
    const [showNav, setShowNav] = useState(false);
    const linksNav = ["Inicio", "Promociones", "Ubicación"];
    const toggleNav = (toggled: boolean) => toggled ? setShowNav(true) : setShowNav(false);

    return(
        <header className="flex justify-between p-3">
            <div className="flex items-center gap-5">
                <img src="./logo.png" alt="logo_el-paceño" className="w-[65px]" title="El paceño"/>
                <h2 className="text-[#F58811]">Carnitas y Birria <br /> "EL PACEÑO"</h2>
            </div>
            <div className="lg:hidden">
                <Hamburger onToggle={toggleNav} />
            </div>
            <nav className={`${showNav ? "block" : "hidden"} absolute top-30 flex flex-col items-center gap-5 w-full lg:static lg:w-2/6 lg:flex lg:flex-row lg:justify-evenly`}>
                {
                    linksNav.map(link => <a href="#" className="text-[#716C6C] hover:text-[#F58811] transition-all delay-150">{link}</a>)
                }
            </nav>
        </header>
    )
}