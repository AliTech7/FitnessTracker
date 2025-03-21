import axios from "axios";
import {useNavigate} from "react-router-dom";

function Logout() {
    const Nav = useNavigate();

    function logmeout() {
        axios
        .post("http://localhost:8000/user/logout")
        .then((res) => {
            window.localStorage.removeItem("authToken");
            window.localStorage.removeItem("user");
            console.log(res);
            Nav("/login");
        })
        .catch((err) => console.log(err));
    };

    // eslint-disable-next-line no-undef
    if(!winodw.localStorage.getItem("authToken")) {
        Nav("/login");
    }

    return (
        <div className="">
            <button
            className="btn btn-secondary mt-5"
            onClick={() => logmeout()}>
            Logout
            </button>
        </div>
    );

};

export default Logout;