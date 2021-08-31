import React from "react";
import LiveScoreRow from "./LiveScoreRow";

export default function LiveScore()
{
    const tournaments = [
        {id: 1, name: "Fish Dance", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94, games: [
            {name: "Game 1", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
            {name: "Game 2", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
        ]},
        {id: 2, name: "Bus Stop", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94, games: [
            {name: "Game 1", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
            {name: "Game 2", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
        ]},
        {id: 3, name: "Hippies", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94, games: [
            {name: "Game 1", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
            {name: "Game 2", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
        ]},
        {id: 4, name: "O'doyle", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94, games: [
            {name: "Game 1", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
            {name: "Game 2", best2_placement_kills: 2, best2_kills: 7, points: 4, victory_royals: 66, total_kills: 28, games_played: 94},
        ]}
    ];

    let rows = '';
    if (tournaments && tournaments.length > 0) {
        rows = tournaments.map((tournament)=>{
            return <LiveScoreRow tournament={tournament}/>

        })
    }
    return <div className="bg-white max-w-4xl mx-auto rounded-lg py-4">
    <table className="mx-auto w-full mt-5">
        
       <tr className="text-purple-600	">
        <th className="text-sm py-3 pl-3" colspan="1">#</th>
        <th className="text-sm py-3">Team Name</th>
        <th className="text-sm py-3">Best 2<br /> Placement<br /> Kills</th>
        <th className="text-sm py-3">Best 2<br /> kills</th>
        <th className="text-sm py-3">Total<br /> Points</th>
        <th className="text-sm py-3">Total Victory<br /> Royales</th>
        <th className="text-sm py-3">Total Number<br /> of Kills</th>
        <th className="text-sm py-3">Total Games<br /> Played</th>
        <th></th>
      </tr>
      {rows}
      {/*<tr className="text-indigo-800">
        <td>1</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="bg-blue-900 text-gray-50">
        <td>2</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="bg-indigo-400 text-gray-50">
        <td>Game 1</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr>
        <td className="text-indigo-800">Game 2</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="text-indigo-800">
        <td>Game 3</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="bg-indigo-400 text-gray-50">
        <td>Game 4</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="bg-indigo-100 text-indigo-800">
        <td >Game 5</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="text-indigo-800">
        <td>3</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr>
      <tr className="text-indigo-800">
        <td>4</td>
        <td>Fish Dance</td>
        <td>2</td>
        <td>7</td>
        <td>4</td>
        <td>66</td>
        <td>28</td>
        <td>94</td>
        <td></td>
      </tr> */}
    </table>
  </div>;
}