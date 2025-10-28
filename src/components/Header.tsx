import { useState } from "react";
import Hamburger from "hamburger-react";
import Imagotype from "./Imagotype";
import { Link } from "react-router";
interface LinkNav{
    name: string,
    href: string
}

interface Header{
    isIndex: boolean
}

export default function Header({ isIndex }: Header){
    const [showNav, setShowNav] = useState(false);
    const linksNav: LinkNav[] = [
        {name: "Inicio", href: "#"},
        {name: "Promociones", href: "#promotion"},
        {name: "Ubicación", href: "#location"}
    ];
    
    return(
        <header className="sticky top-0 z-10 bg-[#FFFFFA] flex justify-between items-center p-3">
            <Imagotype/>
            <div className="flex items-center lg:hidden">
                <Hamburger toggled={showNav} toggle={setShowNav} />
            </div>
            <nav className={`${showNav ? "top-30" : "top-[-1000px]"} bg-[#FFFFFA] transition-all duration-[650ms] fixed z-[-1] flex flex-col items-center gap-5 w-full h-[100%] lg:static lg:w-2/6 lg:flex lg:flex-row lg:justify-evenly pt-20 lg:pt-0`}>
                {
                    isIndex ? linksNav.map(({ name, href }) => <a href={href} onClick={() => setShowNav(false)} className="text-lowGray hover:text-mainOrange transition-all delay-150" key={name}>{name}</a>) : <Link to={"/"} className="text-lowGray hover:text-mainOrange transition-all delay-150" >Inicio</Link>
                }
            </nav>
        </header>
    )
}