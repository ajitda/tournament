import moment from "moment";
import TournamentApis from "../../apis/TournamentApis";
const TournamentTable = (props) => {
  // console.log(`props.tournaments`, props.tournaments)

  const goToEdit = (data) => {
    props.getEditData(data);
    props.showTableForm("edit")
  }

  const deleteTournament = async (data) => {
    console.log(`data.id`, data._id)
    const res = await TournamentApis.delete(data);
    if (res.success) props.getAllTournament();
  }

  let tableValue = ""
  if (props.tournaments) {
    tableValue = props.tournaments.map(tournament => (
      <tr>
        <td>{tournament.mode}</td>
        <td>${tournament.prize}</td>
        <td>{moment(tournament.start_time).format("DD MMM YYYY HH:mm:ss")}</td>
        <td>{tournament.teams}</td>
        <td><img alt="" className="mr-2" src="https://img.icons8.com/material-outlined/24/000000/edit--v1.png" onClick={() => goToEdit(tournament)} /><img src="https://img.icons8.com/material-outlined/24/000000/add-trash.png" onClick={() => deleteTournament(tournament)} alt="" /></td>
      </tr>
    ))
  }
  return (
    <table className="table mt-3">
      <thead>
        <tr className="table-primary">
          <th scope="col">Mode</th>
          <th scope="col">Prize</th>
          <th scope="col">Start Time</th>
          <th scope="col">Perticipents</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tableValue}
      </tbody>
    </table>
  )
}
export default TournamentTable