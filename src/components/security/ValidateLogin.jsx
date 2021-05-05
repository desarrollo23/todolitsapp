import { Redirect } from "react-router";

const ValidateLogin = (props) => {

    const data = localStorage.getItem('user');

    return(
        <>
            {data != null ? <Redirect to = {props.component}/> : <Redirect to = "/login" />}
        </>
    )
}

export default ValidateLogin;