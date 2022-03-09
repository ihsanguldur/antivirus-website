import {
    useParams, //get dynamic url params
    useNavigate //can route
} from "react-router-dom";

export default function navigation(Component) {
    return (props) => (
        <Component {...props} params={useParams()} navigate={useNavigate()} />
    );
}