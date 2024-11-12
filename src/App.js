import {BrowserRouter, Routes, Route} from "react-router-dom";
import TeamList from "./components/TeamList";
import AddTeam from "./components/AddTeam";
import EditTeam from "./components/EditTeam";

function App() {
    return (
        <BrowserRouter>
            <div className={"container"}>
                <Routes>
                    <Route path={"/"} element={<TeamList/>}/>
                    <Route path={"/add"} element={<AddTeam/>}/>
                    <Route path={"/edit/:id"} element={<EditTeam/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;