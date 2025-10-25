import Title from "./Title";
import Subtitle from "./Subtitle";
import Map from "./Map";
import Details from "./Details";

export default function Location(){
    return(
        <section data-aos="fade-up" id="location"> 
            <Subtitle text="Encuéntranos sin perderte" />
            <Title text="Ubicación" />
            <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:gap-10">
                <Map />
                <Details />
            </div>
        </section>
    )
}