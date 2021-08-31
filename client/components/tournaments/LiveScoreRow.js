import React, { useState } from 'react';

export default function LiveScoreRow({tournament}){
    const [showGame, setShowGame] = useState(false);

    let row = '';
    let gameRows = '';
    if (tournament.games && tournament.games.length > 0) {
        gameRows = tournament.games.map((game, index)=>{
            return  <tr key={"tr_game_"+tournament.id+'_'+game.name+index} className="bg-indigo-400 text-gray-50">
            <td className="py-3">{game.name}</td>
            <td className="py-3">{tournament.name}</td>
            <td className="py-3">{game.best2_placement_kills}</td>
            <td className="py-3">{game.best2_kills}</td>
            <td className="py-3">{game.points}</td>
            <td className="py-3">{game.victory_royals}</td>
            <td className="py-3">{game.total_kills}</td>
            <td className="py-3">{game.games_played}</td>
            <td className="py-3"></td>
          </tr>;
        });
        return showGame ? <><tr key={"trn_"+tournament.id} className="text-white bg-indigo-900 cursor-pointer" onClick={()=>setShowGame(false)}>
        <td className="py-3 pl-3">{tournament.id}</td>
        <td className="py-3">{tournament.name}</td>
        <td className="py-3">{tournament.best2_placement_kills}</td>
        <td className="py-3">{tournament.best2_kills}</td>
        <td className="py-3">{tournament.points}</td>
        <td className="py-3">{tournament.victory_royals}</td>
        <td className="py-3">{tournament.total_kills}</td>
        <td className="py-3">{tournament.games_played}</td>
        <td className="py-3"><img className="w-6 filter brightness-0 invert" src="arrow-up.svg" alt="" /></td>
  </tr>
  {gameRows}
  </>
  :<tr key={"trn_"+tournament.id} className="text-indigo-800 cursor-pointer hover:bg-indigo-900 hover:text-white" onClick={()=>setShowGame(true)}>
            <td className="py-3 pl-3">{tournament.id}</td>
            <td className="py-3">{tournament.name}</td>
            <td className="py-3">{tournament.best2_placement_kills}</td>
            <td className="py-3">{tournament.best2_kills}</td>
            <td className="py-3">{tournament.points}</td>
            <td className="py-3">{tournament.victory_royals}</td>
            <td className="py-3">{tournament.total_kills}</td>
            <td className="py-3">{tournament.games_played}</td>
            <td className="py-3"></td>
      </tr>
      
    }
    return row;
}