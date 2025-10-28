import Header from "../components/Header";
import StartIndex from "../components/StartMenu";
import Promotion from "../components/Promotion";
import Location from "../components/Location";

export default function Index(){
    return(
        <main>
            <Header isIndex />
            <div className="space-y-56 lg:space-y-80 lg:py-5">
                <StartIndex />
                <Promotion />
                <Location />
            </div>
        </main>
    )
}