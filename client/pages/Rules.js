
import { useState } from "react"
import Header from "../components/layout/header"
export default function Rules() {
 const [rules] = useState([{
  rule:'The players registered must have at least 100 BR matches (solos, duos, trios and squads) played on their account in the last 3 years to be eligible (LTM, creative, bot lobbies and all other game modes will not be counted towards the 100 match total)'
 },
{
 rule:'Queue up with your full squad in a public lobby in the BR mode that matches the game type of the heat.'
},{
 rule:'There is no need to check in prior to the heat start.'
},{
 rule:'There is no limit to the number of games a team can play during a heat. However, only the best 2, 3, or 4 games will be counted (check individual heats to see how many games will count towards your final score).'
},{
 rule:'Teams can start their final game before the time is up, and continue playing until the end of that game.'
},{
 rule:'Teams are allowed to back out of games.'
},{
 rule:'Tournament heats can be played on PC, PLAYSTATION, SWITCH, MOBILE and XBOX.'
},
{
 rule:'Z League has the right to disqualify a team if any form of cheating is suspected. This includes but is not limited to using hacks, smurfing and reverse boosting.'
},{
 rule:'Reverse boosting is defined as deliberately under-performing in games prior to tournament play in order to be placed in a lower tier lobby.'
},{
 rule:'In the case of a tie, the total number of kills will be used as the first tie break. The second tie break will be the number of Victory Royales. The third tie break will be the least number of games played. If teams are still tied, the prize for the position and next position will be split between teams. For clarity, if two teams are tied in p2 after accounting for points, total team kills, wins and number of games played, the prize for p2 and p3 would be split by the teams.'
},{
 rule:'If your heat is impacted by an API outage, our team will notify you on the live scoreboard. Continue playing as normal. Our team will average all games played from the start of the heat until API is back online.'
},{
 rule:'Fully registered team must be present in order for scores to count. In the case that a team member cannot play, substitution for an alternate eligible player can be made up until heat cutoff time.'
},{
 rule:'If a full team is not present and the team has not canceled, the team will forfeit their match and right to a refund (if a refund is eligible).'
},
{
 rule:'Z League reserves the right to update or modify rules at any point in time.'
}])
 return (
  <>
  <div style={{backgroundColor:'#6E63F3'}} className="w-full sm:w-full ">
    <Header/>
    
  </div>
  <div className="m-auto pt-14 w-full">
   <h1 className="mb-9 text-5xl text-center font-bold m-auto">Rules</h1>
   {
    rules && rules.map((index,key)=>(
<div className="text-xl text-left  max-full mx-36  mb-4 font-medium list-item" style={{color:' rgb(2, 2, 72)'}}>{index.rule}</div>

    )
    )
   }
   
  </div>
 
  </>
 )
}
