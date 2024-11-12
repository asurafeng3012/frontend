import {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const AddTeam = () => {
    const [teamName, setTeamName] = useState("");
    const [yearCreated, setYearCreated] = useState("");
    const [lastTrophy, setLastTrophy] = useState("");
    const [teamHonors, setTeamHonors] = useState("");
    const navigate = useNavigate();
    const {register, handleSubmit, formState: {errors}} = useForm({mode: 'onBlur'});

    const saveTeam = async (data) => {
        await axios.post('http://localhost:5000/teams', {
            teamName: teamName,
            yearCreated: yearCreated,
            lastTrophy: lastTrophy,
            teamHonors: teamHonors
        });
        navigate('/');
    }
    return (
        <main>
            <form onSubmit={handleSubmit(saveTeam)} className={"col-md-6 mx-auto"}>
                <h1 className={"text-center"}>Add Team</h1>
                <hr/>
                <label htmlFor={"teamName"}>Team Name:</label>
                <input type={"text"} className={"form-control"} id={"teamName"} name={"teamName"}
                       {...register('teamName', {required: true})} placeholder={"Team Name"} value={teamName}
                       onChange={(e) => setTeamName(e.target.value)} autoFocus
                />
                {errors.teamName?.type === 'required' && <small>The team name is required</small>}
                <label htmlFor={"yearCreated"}>Year Created:</label>
                <input type={"text"} className={"form-control"} id={"yearCreated"} name={"yearCreated"}
                       {...register('yearCreated', {required: true})} placeholder={"Year Created"} value={yearCreated}
                       onChange={(e) => setYearCreated(e.target.value)}
                />
                {errors.yearCreated?.type === 'required' && <small>The year created is required</small>}
                <label htmlFor={"lastTrophy"}>Last Trophy:</label>
                <input type={"text"} className={"form-control"} id={"lastTrophy"} name={"lastTrophy"}
                       {...register('lastTrophy', {required: true})} placeholder={"Last Trophy"} value={lastTrophy}
                       onChange={(e) => setLastTrophy(e.target.value)}
                />
                {errors.lastTrophy?.type === 'required' && <small>The last trophy is required</small>}
                <label htmlFor={"teamHonors"}>Team Honors:</label>
                <input type={"text"} className={"form-control"} id={"teamHonors"} name={"teamHonors"}
                       {...register('teamHonors', {required: true})} placeholder={"Team Honors"} value={teamHonors}
                       onChange={(e) => setTeamHonors(e.target.value)}
                />
                {errors.teamHonors?.type === 'required' && <small>The team honors is required</small>}

                <div className={"text-center"}>
                    <button className={"btn btn-secondary me-2"}>Add Team</button>
                    <Link to={"/"} className={"btn btn-secondary"}>Cancel</Link>
                </div>
            </form>
        </main>
    )
}

export default AddTeam;