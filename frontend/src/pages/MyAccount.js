import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";


const MyAccount = () => {
    const { user } = useAuthContext();

    const getUserInformation = () => {
        const baseUrl = 'http://localhost:3500/user/api/users/findUser';
        axios.get(`${baseUrl}` + `?username=${user.username}`)
            .then((response) => {
                // get the text boxes for uni, username, and email
                const uniValue = document.querySelector('#university');
                const userValue = document.querySelector('#username');
                const emailValue = document.querySelector('#email');

                // get the user information
                const user = response.data.user;

                // if username exists
                if (!!user.username) {
                    // set the value of username box to user's username
                    userValue.value = user.username;
                }

                // if email exists
                if (!!user.email) {
                    // set the value of email box to user's email
                    emailValue.value = user.email;
                }

            })
            .catch((error) => {

            })
    }

    useEffect(() => {
        getUserInformation();
    },[])

    return (
        <div className="my-account">
            <h2 className="main-heading">My Account</h2>

            <form className="account-info-form">
                <div className="form-body">
                    <div className="form-section">
                        <label htmlFor="university">University</label>
                        <input type="text" name="university" id="university" disabled/>
                    </div>

                    <div className="form-section">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" id="username" disabled/>
                    </div>

                    <div className="form-section">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" disabled/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default MyAccount
