interface slogan{
    text: string
}

const Slogan = ({text}: slogan) => <h2 className="text-3xl text-center">{text}</h2>

export default Slogan;