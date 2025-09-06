interface button{
    text: string,
}
const Button = ({text}: button) => <a className="py-2 px-5 bg-mainOrange text-white" href="#">{text}</a>

export default Button;