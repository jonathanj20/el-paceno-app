import Slogan from "./Slogan";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Keyboard, Autoplay } from 'swiper/modules';
import type { CSSProperties } from "react";

export default function StartIndex(){
    interface food {
        name: string,
        image: string,
    }

    const foods: food[] = [
        {name: "Torta", image: "./torta.png"},
        { name: "Quesabirria", image: "./quesabirria.png" },
        { name: "Tacos de carnita", image: "./tacos_carnita.png" },
        { name: "Birria", image: "./birria.png" },
    ];

    return(
        <section className="mt-14 lg:mt-24 flex flex-col lg:flex-row gap-14">
            <div className="p-3 flex flex-col gap-5 items-center justify-center lg:w-[50%]">
                <Slogan text="¡Observa la variedad de comida que puedes probar en nuestro menú ahora mismo!" />   
                <Button text="Ver menú" path="/menu" />
            </div>
            <Swiper className="w-full lg:w-[40%]" slidesPerView={1} modules={[Navigation, Pagination, A11y, Keyboard, Autoplay]} navigation keyboard autoplay loop pagination={{ clickable: true, }} style={{
                '--swiper-navigation-color': 'var(--color-mainOrange)',
                '--swiper-pagination-color': 'var(--color-mainOrange)',
            } as CSSProperties}>
                {
                    foods.map(({name, image}) => {
                        return(
                            <SwiperSlide key={name} className="mb-12">
                                <h2 className="text-center">{name}</h2>
                                <img src={image} alt={name} className="mx-auto mt-5 w-[65%] md:w-72"/>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}