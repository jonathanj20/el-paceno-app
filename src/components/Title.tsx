interface Title{
    text: string
}

export default function Title({ text }: Title){
    return(
        <h2 className = "text-center font-semibold text-2xl">{text}</h2>
    )
}