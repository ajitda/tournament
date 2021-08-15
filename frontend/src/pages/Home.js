import moment from "moment";
import React, { useEffect, useReducer } from 'react';
import TournamentApis from '../apis/TournamentApis';
import './home.scss';
import { faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = props => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
        {
            tournaments: "",
            totalTournaments: ""
        });

    useEffect(() => {
        getAllTournament()
    }, []);

    // let image = ""
    // if(state.tournaments){}
    // let image = "";
    let showTournaments = "";
    if (state.tournaments) {
        showTournaments = state.tournaments.map((tournament) => {
            // if(tournament.mode === "solo"){
            //     image = <img className="" src="single.jpg" alt="single"/>
            // }else if(tournament.mode === "duo"){
            //     image = <img className="" src="doubel.jpg" alt="single"/>
            // }
            // else if(tournament.mode === "trio"){
            //     image = <img className="" src="triple.jpg" alt="single"/>
            // }
            return (<div className="col-md-4">
                <div className="single-tournament mt-3 p-3">
                    <div className="tournament-icon text-center">
                        {/* <img src="single.jpg" alt="single" /> */}
                        <FontAwesomeIcon icon={faUser} />
                    </div>
                    <div className="mode-name mt-4 text-center">
                        <h2 className="mb-2"><b>{tournament.mode.charAt(0).toUpperCase() + tournament.mode.slice(1)}</b></h2>
                        <p className="text-grey mb-2">{moment(tournament.start_time).format("dddd MMMM D, YYYY")}</p>
                    </div>
                    <div className="expected-team d-flex justify-content-center">
                        <FontAwesomeIcon icon={faStar} />
                        <p className="mb-0">200+ teams expected</p>
                    </div>
                    <div className="prize text-center mt-3">
                        <h3>
                            ${tournament.prize} Prize
                        </h3>
                        <p className="text-grey mb-0 mt-2">PER DIVISION</p>
                    </div>

                    <div className="last-part m-2">
                        <div className="mode d-flex justify-content-between ">
                            <p>Mode</p>
                            <></>
                            <p><b>{tournament.mode}</b></p>
                        </div>
                        <div className="mode d-flex justify-content-between ">
                            <p>Length</p>
                            <></>
                            <p><b>1H:30M</b></p>
                        </div>
                        <div className="mode d-flex justify-content-between ">
                            <p>Start Time</p>
                            <></>
                            <p><b>{moment(tournament.start_time).format("LT")}</b></p>
                        </div>
                        <div className="mode d-flex justify-content-between ">
                            <p>Scoring</p>
                            <></>
                            <p><b>{tournament.scoring}</b></p>
                        </div>
                        <div className="mode d-flex justify-content-between ">
                            <p>Teams/Devision</p>
                            <></>
                            <p><b>{tournament.teams}</b></p>
                        </div>
                        <div className="mode d-flex justify-content-between ">
                            <p>Cost/Player</p>
                            <></>
                            <p className="text-green"><b>Free Entry</b></p>
                        </div>

                        <button type="button" className="btn btn-light orange-btn ">REGISTER NOW</button>
                    </div>
                </div>
            </div>
            )
        })
    }


    const getAllTournament = async () => {
        const res = await TournamentApis.index();
        // console.log(`res`, res)
        setState({
            tournaments: res.data,
            totalTournaments: res.data.length
        });
    }
    return (
        <div className="home-page">
            <div className="container pt-5">
                <div className="d-flex justify-content-between top-side">
                    <h1>Tournaments</h1>
                    <>
                    </>
                    <button type="button" className="btn btn-light mt-2 mr-3">Filter Tournaments</button>
                </div>
                <div className="counts-tournament m-3">
                    <p>{state.totalTournaments} Tournaments</p>
                </div>
                <div className="tournaments row">
                    {showTournaments}
                </div>
            </div>
        </div>
    )

}

export default Home;