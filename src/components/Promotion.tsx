export default function Promotion(){
    return(
        <section className="mt-44">
            <h3 className="text-center text-mainOrange text-lg">Nuestras promociones</h3>
            <h2 className="text-center font-semibold text-2xl">Ofertas que no se repiten</h2>
            <div className="mt-10 space-y-16 lg:flex lg:justify-center">
                <div className="relative lg:w-[50%]">
                    <img src="./marco_promocion.png" alt="marco" className="w-96 mx-auto"/>
                    <img src="./promocion.jpg" alt="comida en promoción" className="w-52 absolute top-[97px] left-0 right-0 mx-auto rotate-x-15 -rotate-y-30 cursor-pointer transition-all duration-300 hover:-rotate-y-[-30deg] rounded-md"/>
                </div>
                <div className="text-center lg:w-[50%] space-y-3 mt-16">
                    <p className="text-mainOrange text-2xl">Tortas de carnitas</p>
                    <p className="text-lowGray text-2xl">todos los días</p>
                    <p className="text-mainOrange font-itim text-7xl">2x100</p>
                </div>
            </div>
        </section>
    )
}