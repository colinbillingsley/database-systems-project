import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";
import RSOCard from "./RSOCard";
import CreateRSO from "../components/CreateRSO";

const Rso = () => {
    const [rsos, setRsos] = useState([]);
    const [myRsos, setMyRsos] = useState([]);
    const [uniName, setUniName] = useState('');
    const { user } = useAuthContext();

    // method to get the user's university
    const getUserUniversity = async () => {
        const baseUrl = `http://localhost:3500/university/api/university/${user.uni_id}`;
        try {
            const response = await axios.get(`${baseUrl}`);
            setUniName(response.data.uni_name);
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    // method to get the RSOs the user is a part of
    const getUserRSOs = async () => {
        const baseUrl = `http://localhost:3500/rso/api/user/rsos/${user.uid}`;
        try {
            const response = await axios.get(baseUrl);
            const rsos = response.data.rsos;
                const rsosArray = rsos.map(rso => ({
                    rso_id: rso.rso_id,
                    uni_id: rso.uni_id,
                    name: rso.name?.trim(),
                    created_by: rso.created_by,
                    type: rso.type?.trim(),
                    desc: rso.desc?.trim(),
                    number: rso.number?.trim(),
                    email: rso.email?.trim(),
                    status: rso.status?.trim(),
                        }));
                setMyRsos(rsosArray);
        } catch (error) {
            console.log("error getting my RSOs")
            console.log(error.response.data.error)
        }
    }

    // call api route to get all the RSOs from the db
    const getAllRSOs = async () => {
        const getAllRSOsUrl = `http://localhost:3500/rso/api/rsos/${user.uni_id}`;
        await axios.get(getAllRSOsUrl)
            .then((response) => {
                const rsos = response.data.rsos;
                const rsosArray = rsos.map(rso => ({
                    rso_id: rso.rso_id,
                    name: rso.name?.trim(),
                    created_by: rso.created_by,
                    type: rso.type?.trim(),
                    desc: rso.desc?.trim(),
                    number: rso.number?.trim(),
                    email: rso.email?.trim(),
                    status: rso.status?.trim(),
                        }));
                setRsos(rsosArray);
            })
            .catch((error) => {
                console.log("error getting RSOs")
                console.log(error)
            })
    }

    // open create rso menu when create rso is clicked
    const RSOClick = () => {
        const createRSO = document.querySelector('.create-rso-wrapper');
        createRSO.classList.remove('hidden');
    }

    useEffect(() => {
        getUserRSOs();
        getUserUniversity();
        getAllRSOs();
    },[])

    return (
        <div className="rso-container">
            <div className="rsos-heading-container">
                <h2 className="rso-main-heading">RSOs at {uniName}</h2>
                {/* user is not student, they can create rso */}
                {user.role !== 0 ? <button className="btn" onClick={RSOClick}>Create RSO</button> : ''}
            </div>

            <div className="my-rsos-content-container">
                <h2 className="rso-heading">My RSOs</h2>
                <div className="my-rsos-cards-container">
                    <ul className="list-of-my-rsos">
                            {/* check if there's any events in database */}
                            {(myRsos.length === 0) 
                                // if no rsos found, display message
                                ? 
                                <li>
                                    <p className="no-data">You are not a member of any RSOs.</p>
                                </li> 
                                // if rsos found, display all rsos
                                :
                                myRsos.map((rso, index) => {
                                    // format rso name to be placed in URL
                                    const trimmedName = rso.name.trim();
                                    const formattedName = trimmedName.replace(/\s+/g, '-');

                                    return (
                                        <li className="rso-item">
                                            <Link to={`/rsos/${rso.rso_id}/${formattedName}`}>
                                                <RSOCard rso={rso}/>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                </div>
            </div>

            <div className="my-rsos-content-container">
                <h2 className="rso-heading">All RSOs</h2>
                <div className="my-rsos-cards-container">
                    <ul className="list-of-my-rsos">
                        {/* check if there's any events in database */}
                        {(rsos.length === 0) 
                            // if no rsos found, display message
                            ? 
                            <li>
                                <p className="no-data">There are no RSOs at your university at the moment.</p>
                            </li> 
                            // if rsos found, display all rsos
                            :
                            rsos.map((rso, index) => {
                                // format rso name to be placed in URL
                                const trimmedName = rso.name.trim();
                                const formattedName = trimmedName.replace(/\s+/g, '-');

                                return (
                                    <li className="rso-item">
                                        <Link to={`/rsos/${rso.rso_id}/${formattedName}`}>
                                            <RSOCard rso={rso}/>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <CreateRSO getAllRSOs={getAllRSOs} getUserRSOs={getUserRSOs}/>
        </div>
    )
}

export default Rso
