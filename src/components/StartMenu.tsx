import Slogan from "./Slogan";
import Button from "./Button";

export default function StartIndex(){
    return(
        <section className="mt-24">
            <div className="p-3 flex flex-col gap-5 items-center lg:w-[50%]">
                <Slogan text="¡Observa la variedad de comida que puedes probar en nuestro menú ahora mismo!" />   
                <Button text="Ver menú"/>
            </div>
        </section>
    )
}