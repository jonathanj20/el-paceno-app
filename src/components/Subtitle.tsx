interface Subtitle {
    text: string
}

export default function Subtitle({text}: Subtitle){
    return(
        <h3 className="text-center text-mainOrange text-lg">{text}</h3>
    )
}