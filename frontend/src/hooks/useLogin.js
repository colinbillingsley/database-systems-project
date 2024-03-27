import { useAuthContext } from "./useAuthContext";
import axios from "axios";

export const useLogin = () => {
    const { dispatch } = useAuthContext()

    // login user
    const login = async (username, password) => {

        /// get the error element
        const loginError = document.querySelector('.error');

        try {
            // get the response from the api call
            const response =  await axios.post('http://localhost:3500/user/api/users/login', {username, password});

            // response was successful
            if (response.status === 200) {
                // get the user data from the response
                const user = response.data.user;
                // update auth context
                dispatch({type: 'LOGIN', payload: user});
                // save user to local storage
                localStorage.setItem('user', JSON.stringify(user))
                return true;
            }
            else {
                return false;
            }
        } catch (error) {
            loginError.innerHTML = error.response.data.error;
            return false;
        }
    }

    return {login}
}