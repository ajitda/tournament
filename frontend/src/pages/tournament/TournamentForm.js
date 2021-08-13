import moment from "moment";
import { useReducer } from "react";
import TournamentApis from "../../apis/TournamentApis";

const TournamentForm = props=>{

    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      mode:props.editDataOfTournaments ? props.editDataOfTournaments.mode : "",
      prize:props.editDataOfTournaments ? props.editDataOfTournaments.prize : "",
      length:props.editDataOfTournaments ? props.editDataOfTournaments.length : "",
      scoring:props.editDataOfTournaments ? props.editDataOfTournaments.scoring : "team",
      cost:props.editDataOfTournaments ? props.editDataOfTournaments.cost : "",
      start_time:props.editDataOfTournaments ? moment(props.editDataOfTournaments.start_time).format("M/DD/YYYY LT"): "",
      teams:props.editDataOfTournaments ? props.editDataOfTournaments.teams : "",
    //   editDataOfTournaments:props.editDataOfTournaments ? props.editDataOfTournaments ? "",
    //   image:""
      
    });
    console.log(`props.editDataOfTournaments`, state.start_time)
    const inputChange = (event) => {
        const target = event.target;
        let value = target.value;
        const name = target.name;
        if(name === "mode" && value === "solo"){
            setState({scoring:"player"})
        }
        // console.log(`value`, value)
        setState({ [name]: value})
    }
    
    const inputSubmit = async (e) => {
        e.preventDefault();
        // let data = {
        //     cast: state.cast,
        // }
        if(props.editDataOfTournaments){
            const res = await TournamentApis.update(state,props.editDataOfTournaments._id);
            if (res.success) {
                // $.notify({ message: 'Updated!' }, { type: 'success' })
                props.showTableForm(false);
                props.getAllTournament();
            }
        }
        else{
            const res = await TournamentApis.store(state);
            if(res.success){
                console.log(`saved`)
                props.showTableForm(false);
                props.getAllTournament();

            }}
    }
// console.log(`state.scoring`, state.scoring)
    return (
        <form className="mt-4" onSubmit={inputSubmit}>
            <div className="form-group">
                {/* <input type="text" className="form-control" name="name" onChange={inputChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Tournament name"/> */}
            
            <select class="form-control" value={state.mode} onChange={inputChange} name="mode">
                 <option disabled selected> Mode</option>
                 <option value="solo">Free Solos</option>
                 <option value="trio">Free Trios</option>
                 <option value="duo">Free Duos</option>
            </select>
            </div>
 
            <div className="form-group">               
                <input type="text" className="form-control" value={state.scoring} name="scoring"  id="exampleInputPassword1" placeholder="Prize Money"/>
            </div>
            
            <div className="form-group">
                <input type="text" className="form-control" value={state.length} name="length" onChange={inputChange}  id="exampleInputPassword1" placeholder="Length"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" value={state.prize} name="prize" onChange={inputChange}  id="exampleInputPassword1" placeholder="Prize Money"/>
            </div>
            <div className="form-group">
                <input type="number" className="form-control" value={state.teams} onChange={inputChange}  name="teams" id="exampleInputPassword1" placeholder="Total Teams"/>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" value={state.cost} onChange={inputChange}  name="cost" id="exampleInputPassword1" placeholder="Cost"/>
            </div>
            <div className="form-group">
                <input type="datetime-local" name="start_time" value={state.start_time} onChange={inputChange}  className="form-control" id="exampleInputPassword1" placeholder="Start time"/>
                {/* <input type="" id="birthdaytime" name="birthdaytime"> */}
            </div>
            {/* <div class="form-group">
                <input type="file" className="form-control-file" onChange={inputChange}  name="image" id="exampleFormControlFile1"/>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default TournamentForm;