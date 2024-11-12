import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const TeamList = () => {
    const [teams, setTeams] = useState([]);
    const getTeams = async () => {
        const response = await axios.get(`http://localhost:5000/teams`);
        setTeams(response.data);
    }
    const deleteTeam = async (id) => {
        await axios.delete(`http://localhost:5000/teams/${id}`);
        await getTeams();
    }
    useEffect(() => {
        getTeams().then(m => console.log("Successfully retrieved the teams"));
    }, []);
    return (
        <main>
            <table className={"table table-hover table-striped"} aria-label={"Teams table"}>
                <caption><h1>Team List</h1></caption>
                <thead>
                <tr>
                    <th scope={"col"}>Team Name</th>
                    <th scope={"col"}>Year Created</th>
                    <th scope={"col"}>Last Trophy</th>
                    <th scope={"col"}>Team Honors</th>
                    <th scope={"col"}>Update</th>
                    <th scope={"col"}>Delete</th>
                </tr>
                </thead>
                <tbody>
                {teams.map((team) => (
                    <tr key={team.id}>
                        <td>{team.teamName}</td>
                        <td>{team.yearCreated}</td>
                        <td>{team.lastTrophy}</td>
                        <td>{team.teamHonors}</td>
                        <td>
                            <Link to={`/edit/${team.id}`} className="btn btn-secondary"
                                  aria-label={`Edit ${team.teamName}`}>Edit</Link>
                        </td>
                        <td>
                            <button onClick={() => deleteTeam(team.id)} className={"btn btn-secondary"}
                                    aria-label={`Delete ${team.teamName}`}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className={"text-center"}>
                <Link to={'/add'} className={"btn btn-secondary"}>Add Team</Link>
            </div>
        </main>
    )
}

export default TeamList;