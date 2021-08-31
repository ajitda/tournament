import { useQuery } from "@apollo/client";
import React from "react";
import Header from "../../components/layout/header";
// import { Col, Container, Row } from "reactstrap";
import TournamentCard from "../../components/tournaments/tournamentCard";
import { ALL_TOURNAMENTS } from "../../services/graphQL/queries/tournament";
import Styles from "./tournament.module.css";
export default function Index() {
  // fetching data
  const { data, error, loading } = useQuery(ALL_TOURNAMENTS);

  // console.log(data);
  // main return
  return (
    <div className="flex flex-col w-full bg-indigo-900 tournament"
    //  style={{background:"rgba(14,9,75,.8588235294117647)"}}
     >
      <Header/>
      {/* <header> */}
        {/* <div> Tournaments</div>
        <div className="filter">
          <span>Filter Tournaments</span>
          <img src="/images/filter.svg" className="svg" alt=""></img>
        </div> */}
      {/* </header> */}
      {/*{loading && <Loading height="70vh" />}*/}
      {/*{loading || (*/}

      {loading && <span>Loading....</span>}
      {loading || (
        <>
          <div className="flex w-full mt-5">
            <div className="flex flex-col">
              <div className="totalTitle text-gray-50"> {data?.tournamentMany.length || 0} tournament</div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 my-3">
            {data?.tournamentMany.map((item, index) => {
              const isCenterdCard = index % 2 === 0;
              // console.log(`item`, item)
              return (
                <TournamentCard
                  key={item._id}
                  isCenterdCard={isCenterdCard}
                  {...item}
                />
              
              );
            })}
          </div>
          <div className={`${Styles.howItWorks} text-lg text-white font-bold bg-indigo-400 mt-4` }>
            <h1 className="ml-5">How it works</h1>
            <div className="flex justify-around mt-3">   
              <div>
                <span className="text-7xl	mx-5 my-3">1</span>
                <h3 className={`mx-3 mt-4`}>Register For Heat</h3>
                <div className={`${Styles.buttomBorder}`}></div>
                <div className="description mx-3 text-base font-normal">
                <p>Select the heat you want to compete in. You are able to register in multiple heats</p>
                </div>
                {/*  */}
              </div>
              <div>
                <span className="text-7xl mx-5	my-3">2</span>
                <h3 className={` mx-3 mt-4 `}>Compete</h3>
                <div className={`${Styles.buttomBorder}`}></div>
                <div className="description mx-3 text-base font-normal">
                <p>Select the heat you want to compete in. You are able to register in multiple heats</p>
                </div>
              </div>
              <div>
                <span className="text-7xl mx-5 my-3">3</span>
                <h3 className={`mx-3 mt-4`}>Win the Grand Prize</h3>
                <div className={`${Styles.buttomBorder}`}></div>
                <div className="description mx-3 text-base font-normal	">
                <p>Select the heat you want to compete in. You are able to register in multiple heats</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`${Styles.liveScoring} bg-indigo-200 text-center`}>
              <h1 className="text-3xl font-bold">Live Scoring</h1>
              <p className="text-base text-sm">Track how your team is doing in real time</p>
              <div className={`${Styles.tableDiv} bg-indigo-100`}>
                <table className={`${Styles.tables} mt-5`}>
                  <tr className="text-purple-600	">
                    <th className="text-xs" colspan="1">#</th>
                    <th className="text-xs">Team Name</th>
                    <th className="text-xs">Best 2 Placement Kills</th>
                    <th className="text-xs">Best 2 kills</th>
                    <th className="text-xs">Total Points</th>
                    <th className="text-xs">Total Victory Royal</th>
                    <th className="text-xs">Total Number of Kills</th>
                    <th className="text-xs">Total Games Played</th>
                  </tr>
                  <tr className="text-indigo-800">
                    <td>1</td>
                    <td>Fish Dance</td>
                    <td>2</td>
                    <td>7</td>
                    <td>4</td>
                    <td>66</td>
                    <td>28</td>
                    <td>94</td>
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
                  </tr>
                  <tr className="bg-indigo-100 text-indigo-800">
                  <td >Game 4</td>
                  <td>Fish Dance</td>
                    <td>2</td>
                    <td>7</td>
                    <td>4</td>
                    <td>66</td>
                    <td>28</td>
                    <td>94</td>
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
                  </tr>
                 </table>
              </div>

          </div>
          
          


        </>
      )}
    </div>
  );
}
