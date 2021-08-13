import moment from "moment";
import React, { useEffect, useReducer } from 'react';
import TournamentApis from '../apis/TournamentApis';
import './home.css';

const Home = props => {
    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
       tournaments:"", 
       totalTournaments:""
    });

    useEffect(() => {
        getAllTournament()
    }, [])
    // let image = ""
    // if(state.tournaments){}
    // let image = "";
    let showTournaments ="";
    if(state.tournaments){
        showTournaments = state.tournaments.map((tournament) =>{
            // if(tournament.mode === "solo"){
            //     image = <img className="" src="single.jpg" alt="single"/>
            // }else if(tournament.mode === "duo"){
            //     image = <img className="" src="doubel.jpg" alt="single"/>
            // }
            // else if(tournament.mode === "trio"){
            //     image = <img className="" src="triple.jpg" alt="single"/>
            // }
            return(<div className="single-tournament mt-3 mr-2">
                <div className="img-part">
                <img className="single-img" src="single.jpg" alt="single"/>
                </div>
                <div className="mode-name mt-4">
                    <p>Free {tournament.mode}</p>
                    <span>{moment(tournament.start_time).format("dddd MMMM D, YYYY")}</span>
                </div>
                <div className="expected-team d-flex justify-content-center">
                    <img className="orange-icon" src="orange.png" alt="orange" height="10px"/>
                    <p>200+ teams expected</p>
                </div>
                <div className="prize text-center mt-3">
                    <h3>
                        ${tournament.prize} Prize
                    </h3>
                    <span>Per devision</span>
                </div>

                <div className="last-part m-2">
                    <div className="mode d-flex justify-content-between ">
                    <p>Mode</p>
                    <></>
                    <p className="next-part">{tournament.mode}</p>
                    </div>
                    <div className="mode d-flex justify-content-between ">
                    <p>Length</p>
                    <></>
                    <p className="next-part">{tournament.length}</p>
                    </div>
                    <div className="mode d-flex justify-content-between ">
                    <p>Start Time</p>
                    <></>
                    <p className="next-part">{moment(tournament.start_time).format("LT")}</p>
                    </div>
                    <div className="mode d-flex justify-content-between ">
                    <p>Scoring</p>
                    <></>
                    <p className="next-part">{tournament.scoring}</p>
                    </div>
                    <div className="mode d-flex justify-content-between ">
                    <p>Teams/Devision</p>
                    <></>
                    <p className="next-part">{tournament.teams}</p>
                    </div>
                    <div className="mode d-flex justify-content-between ">
                    <p>Cost/Player</p>
                    <></>
                    <p className="next-part">{tournament.cost}</p>
                    </div>
                   
                    <button type="button" className="btn btn-light orange ">Register Now</button>
                </div>
            </div>
            )
        })
    }


    const getAllTournament = async ()=>{
        const res = await TournamentApis.index();
        // console.log(`res`, res)
        setState({
            tournaments: res.data,
            totalTournaments: res.data.length
        });
    }
    console.log(`state.tournaments`, state.tournaments)
    return(
    <div className="home-page">
        <div className="d-flex justify-content-between top-side">
            <h1>Tournaments</h1>
            <>
            </>
            <button type="button" className="btn btn-light mt-2 mr-3">Filter Tournaments</button>
        </div>
        <div className="counts-tournament m-3">
            <p>{state.totalTournaments} Tournaments</p>
        </div>
         <div className="tournaments d-flex justify-content-around">
            {showTournaments}
         </div>
    </div>
   
    )
     
}

export default Home;