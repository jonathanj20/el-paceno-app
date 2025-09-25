import { Link } from "react-router";
interface button{
    text: string,
    path: string
}
const Button = ({text, path}: button) => <Link className="py-2 px-5 bg-mainOrange text-white" to={path}>{text}</Link>

export default Button;