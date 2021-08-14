import moment from "moment";
import { useReducer, useState } from "react";
import TournamentApis from "../../apis/TournamentApis";
import DateTimePicker from 'react-datetime-picker';

const TournamentForm = props=>{

    const [state, setState] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      mode : props.editDataOfTournaments ? props.editDataOfTournaments.mode  :  "",
      prize : props.editDataOfTournaments ? props.editDataOfTournaments.prize  :  "",
      length : props.editDataOfTournaments ? props.editDataOfTournaments.length  :  "1 Hour 20 Mins",
      scoring : props.editDataOfTournaments ? props.editDataOfTournaments.scoring  :  "team",
      cost : props.editDataOfTournaments ? props.editDataOfTournaments.cost  :  0,
      start_time : props.editDataOfTournaments ? new Date(props.editDataOfTournaments.start_time)  :  new Date(),
      teams : props.editDataOfTournaments ? props.editDataOfTournaments.teams  :  0,
    //   editDataOfTournaments:props.editDataOfTournaments ? props.editDataOfTournaments ? "",
    //   image:""
      
    });
    // const [value, onChange] = useState(new Date());

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

    const dateChange = (value) =>{
        setState({
            start_time: value
        })
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
                props.showTableForm('table');
                props.getAllTournament();
            }
        }
        else{
            const res = await TournamentApis.store(state);
            if(res.success){
                console.log(`saved`)
                props.showTableForm('table');
                props.getAllTournament();

            }}
    }

    return (
        <form className="mt-4" onSubmit={inputSubmit}>
            <div className="form-group">
                {/* <input type="text" className="form-control" name="name" onChange={inputChange} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Tournament name"/> */}
            <label htmlFor="mode">Mode</label>
            <select class="form-control" defaultValue={state.mode} onChange={inputChange} name="mode" required>
                 <option value=""> Please select</option>
                 <option value="solo">Solo</option>
                 <option value="duos">Duos</option>
                 <option value="trios">Trios</option>
            </select>
            </div>
            <div className="form-group">
                <label htmlFor="start_time">Start Time</label>
                <div>
                <DateTimePicker className="date-time-picker" onChange={dateChange} value={state.start_time} /></div>
            </div>
            <div className="form-group">   
                <label htmlFor="scoring">Scoring</label>            
                <input type="text" className="form-control" value={state.scoring} name="scoring"  id="exampleInputPassword1" placeholder="Prize Money" readOnly/>
            </div>
            
            {/* <div className="form-group">
                <input type="text" className="form-control" value={state.length} name="length" onChange={inputChange}  id="exampleInputPassword1" placeholder="Length"/>
            </div> */}
            <div className="form-group">
                <label htmlFor="prize">Prize</label>
                <input type="text" className="form-control" value={state.prize} name="prize" onChange={inputChange}  id="exampleInputPassword1" placeholder="Prize"/>
            </div>
            {/* <div className="form-group">
                <input type="number" className="form-control" value={state.teams} onChange={inputChange}  name="teams" id="exampleInputPassword1" placeholder="Total Teams"/>
            </div> */}
            {/* <div className="form-group">
                <input type="text" className="form-control" value={state.cost} onChange={inputChange}  name="cost" id="exampleInputPassword1" placeholder="Cost"/>
            </div> */}
            {/* <div className="form-group">
                <input type="datetime-local" name="start_time" value={state.start_time} onChange={inputChange}  className="form-control" id="exampleInputPassword1" placeholder="Start time"/>
            </div> */}
            
            {/* <div class="form-group">
                <input type="file" className="form-control-file" onChange={inputChange}  name="image" id="exampleFormControlFile1"/>
            </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default TournamentForm;