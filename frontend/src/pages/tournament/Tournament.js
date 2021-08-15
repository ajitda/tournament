import { useEffect, useReducer } from "react";
import TournamentApis from "../../apis/TournamentApis";
import Navbar from "../admin/Navbar";
import TournamentForm from "./TournamentForm";
import TournamentTable from "./TournamentTable";
import './tournament.scss';

const Tournament = props => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
        {
            tableForm: "table",
            tournaments: "",
            editDataOfTournaments: ""

        });
    useEffect(() => {
        getAllTournament()
    }, [])

    const getAllTournament = async () => {
        const res = await TournamentApis.index();
        // console.log(`res`, res)
        setState({
            tournaments: res.data,

        });
    }

    const showTableForm = (data) => {
        setState({ tableForm: data });
    }

    const getEditData = (data) => {
        setState({ editDataOfTournaments: data })
    }

    let activeModule = "";
    if (state.tableForm === "form" || state.tableForm === "edit") {
        activeModule = <TournamentForm showTableForm={showTableForm} editDataOfTournaments={state.tableForm === "edit" ? state.editDataOfTournaments : ""} getAllTournament={getAllTournament} />
    } else if (state.tableForm === "table") {
        activeModule = <TournamentTable getAllTournament={getAllTournament} getEditData={getEditData} showTableForm={showTableForm} tournaments={state.tournaments} />
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="d-flex justify-content-between mt-3">

                    <h2 className="">{state.tableForm === "edit" ? "Edit Tournament" : "Tournament"}</h2>
                    <></>
                    {
                        state.tableForm === "form" || state.tableForm === "edit" ?
                            <button type="button" class="btn btn-secondary" onClick={() => showTableForm("table")}>Back</button>
                            :
                            <button type="button" className="btn btn-outline-primary" onClick={() => showTableForm("form")}>Add Tournament</button>
                    }
                </div>
                {activeModule}
            </div>
        </div>
    )
}

export default Tournament;