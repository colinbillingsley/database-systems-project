import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

import axios from "axios";

const RSOInfoPage = () => {
    const [rsoInfo, setRsoInfo] = useState({});
    const [rsoMembers, setRsoMembers] = useState([]);
    const { user } = useAuthContext();
    const { rso_id: rsoId } = useParams();

    const getUsernameFromMembers = async (uid) => {
        await axios.get(`http://localhost:3500/user/api/user/${uid}`)
            .then((response) => {
                const username = response.data.user.username;
                setRsoMembers(rsoMembers => [...rsoMembers, username]);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const getRsoMembers = async () => {
        const baseUrl = 'http://localhost:3500/rso/api/rso/members';
        await axios.get(`${baseUrl}/${rsoId}`)
            .then((response) => {
                const members = response.data.members;
                
                members.map((member) => {
                    getUsernameFromMembers(member.uid);
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // join RSO
    const joinRSO = async () => {
        const baseUrl = 'http://localhost:3500/rso/api/rso/join';
        await axios.post(`${baseUrl}/${rsoId}/${user.uid}`)
            .then((response) => {
                getRsoMembers();
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const leaveRSO = async () => {
        const baseUrl = 'http://localhost:3500/rso/api/rso/leave';
        await axios.delete(`${baseUrl}/${rsoId}/${user.uid}`)
            .then((response) => {
                const updatedMembers = rsoMembers.filter(member => member !== user.username);
                setRsoMembers(updatedMembers);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // get the RSO information
    const getRso = async () => {
        const baseUrl = 'http://localhost:3500/rso/api/rso';
        await axios.get(`${baseUrl}/${parseInt(rsoId)}`)
            .then((response) => {
                const rso = response.data.rso;
                setRsoInfo(rso);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getRso();
        getRsoMembers();
    }, [rsoId])

    return (
        <div className="rso-info">
            <div className="rso-info-container">
                <div className="rso-info-left-content">
                    <div className="rso-info-heading">
                        <h2 className="rso-info-name">{rsoInfo.name}</h2>
                        <p className="rso-info-type">{rsoInfo.type}</p>
                    </div>
                    <p className="rso-info-description">{rsoInfo.desc ? rsoInfo.desc : <p className="no-data">No description added for RSO.</p>}</p>
                </div>

                <div className="rso-info-right-content">
                    <div className="contact-section">
                        <h3>Contact Info</h3>
                        <p>{rsoInfo.email}</p>
                        <p>{rsoInfo.number}</p>
                    </div>
                    <hr />
                    <div className="members-section">
                        <h3>Members</h3>
                        <ul className="members-list">
                            {rsoMembers.map(member => {
                                return(<li className="member-item">{member}</li>)
                            })
                            }
                        </ul>
                    </div>
                    <hr />
                    <div className="join-section">
                        {rsoMembers.includes(user.username)
                        ?   <div>
                                <h3>Want to leave the RSO?</h3>
                                <button onClick={leaveRSO} className="join-rso-btn">Leave RSO</button>
                            </div>
                        :   <div>
                                <h3>Want to join the RSO?</h3>
                                <button onClick={joinRSO} className="join-rso-btn">Join RSO</button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RSOInfoPage
