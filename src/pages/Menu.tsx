import Header from "../components/Header";
import Food from "../components/Food";

export default function Menu(){
    interface food{
        image: string,
        name: string,
        price: number,
        description: string
    }

    const foods: food[]=[
        { image: "./torta.png", name: "Torta", price: 100, description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas semper nulla, in euismod ipsum suscipit a. Vivamus facilisis vitae augue quis congue."},
        { image: "./quesabirria.png", name: "Quesabirria", price: 100, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas semper nulla, in euismod ipsum suscipit a. Vivamus facilisis vitae augue quis congue." },
        { image: "./tacos_carnita.png", name: "Tacos de carnitas", price: 100, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas semper nulla, in euismod ipsum suscipit a. Vivamus facilisis vitae augue quis congue." },
        { image: "./birria.png", name: "Birria", price: 100, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas semper nulla, in euismod ipsum suscipit a. Vivamus facilisis vitae augue quis congue." }
    ];
 
    return(
        <>
            <Header isIndex={false} />
            {
                foods.map(({image, name, price, description}) => <Food image={image} name={name} price={price} description={description} />)
            }
        </>
    )
}