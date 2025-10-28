import { Link } from "react-router"

export default function Imagotype(){
    return(
        <Link to={"/"} className="flex items-center gap-5">
            <img src="./logo.png" alt="logo_el-paceño" className="w-[65px]" title="El paceño"/>
            <h2 className="text-mainOrange font-kavoon">Carnitas y Birria <br /> "EL PACEÑO"</h2>
        </Link>
    )
}