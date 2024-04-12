import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";


const MyAccount = () => {
    const [universityInfo, setUniversityInfo] = useState({})
    const { user } = useAuthContext();

    const setUserValues = async () => {

        // get the text box for university
        const username = document.querySelector('#username');
        const email = document.querySelector('#email');

        username.value = user.username;
        email.value = user.email;

        await getUserUniversity();
    }

    const getUserUniversity = async () => {
        const baseUrl = `http://localhost:3500/university/api/university/${user.uni_id}`;
        try {
            const response = await axios.get(`${baseUrl}`);
            // get the text box for university
            const uniValue = document.querySelector('#university');
            console.log(response);
            uniValue.value = response.data.uni_name;

            if (parseInt(user.role) === 2) {
                const address = document.querySelector('#address');
                const population = document.querySelector('#population');
                const description = document.querySelector('#description');

                address.value = response.data.location;
                population.value = response.data.NOstudents;
                description.value = response.data.desc;
            }

        } catch (error) {
            console.log(error);
            return null;
        }
    }

    useEffect(() => {
        setUserValues();
    },[])

    return (
        <div className="my-account">
            <h2 className="main-heading">My Account</h2>

            <form className="account-info-form">
                <div className="form-body">
                    <div className="form-section">
                        <label htmlFor="university">University Name</label>
                        <input type="text" name="university" id="university" disabled/>
                    </div>

                    {parseInt(user.role) === 2
                    ?
                        <>
                            <div className="form-section">
                                <label htmlFor="address">University Address</label>
                                <input type="text" name="address" id="address" disabled/>
                            </div>

                            <div className="form-section">
                                <label htmlFor="population">University Population</label>
                                <input type="text" name="population" id="population" disabled/>
                            </div>

                            <div className="form-section">
                                <label htmlFor="description">University Description</label>
                                <textarea rows={5} name="description" id="description" disabled/>
                            </div>
                        </>
                    : ''
                    }

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
