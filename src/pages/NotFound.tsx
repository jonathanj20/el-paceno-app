import Button from "../components/Button"

export default function NotFound(){
    return(
        <section className="flex flex-col justify-center lg:flex-row lg:justify-evenly lg:items-center min-h-[100vh]">
            <div className="space-y-7 text-center">
                <span className="text-9xl text-mainOrange block font-bold">404</span>
                <p className="text-3xl text-lowGray">Página no encontrada</p>
                <Button path="/" text="Regresar al inicio"/>
            </div>
            <div>
                <img src="./cerdito_confundido.png" alt="cerdito confundido" className="w-80 mx-auto" />
            </div>
        </section>
    )
}