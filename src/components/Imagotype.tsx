import { Link } from "react-router"

export default function Imagotype(){
    return(
        <div className="flex items-center gap-5">
            <Link to={"/"}>
                <img src="./logo.png" alt="logo_el-paceño" className="w-[65px]" title="El paceño"/>
            </Link>
            <h2 className="text-mainOrange font-kavoon">Carnitas y Birria <br /> "EL PACEÑO"</h2>
        </div>
    )
}