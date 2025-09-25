interface food {
    image: string,
    name: string,
    price: number,
    description: string
}

export default function Food({image, name, price, description}: food){
    return(
        <div className="mt-10 space-y-5 lg:flex">
            <div>
                <img src={image} alt="birria" className="w-[70%] mx-auto lg:w-64 lg:mx-0" />
            </div>
            <div className="space-y-5 px-10">
                <div className="text-mainOrange flex justify-between">
                    <span>{name}</span>
                    <span>${price}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
    )
}