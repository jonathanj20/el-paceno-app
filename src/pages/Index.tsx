import Header from "../components/Header";
import StartIndex from "../components/StartMenu";
import Promotion from "../components/Promotion";
import Location from "../components/Location";

export default function Index(){
    return(
        <main>
            <Header />
            <StartIndex />
            <Promotion />
            <Location />
        </main>
    )
}