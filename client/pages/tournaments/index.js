import { useQuery } from "@apollo/client";
import React from "react";
import Header from "../../components/layout/header";
// import { Col, Container, Row } from "reactstrap";
import TournamentCard from "../../components/tournaments/tournamentCard";
import { ALL_TOURNAMENTS } from "../../services/graphQL/queries/tournament";
import Styles from "./tournament.module.css";
import LiveScore from "../../components/tournaments/LiveScore";
import Footer from "../../components/layout/footer";

export default function Index() {
  // fetching data
  const { data, error, loading } = useQuery(ALL_TOURNAMENTS);

  // console.log(data);
  // main return
  return (
    <div className="flex flex-col w-full bg-gradient-to-r from-purple-500 to-indigo-500 tournament"
    //  style={{background:"rgba(14,9,75,.8588235294117647)"}}
    >
      <Header />
      {/* <header> */}
      {/* <div> Tournaments</div>
        <div className="filter">
          <span>Filter Tournaments</span>
          <img src="/images/filter.svg" className="svg" alt=""></img>
        </div> */}
      {/* </header> */}
      {/*{loading && <Loading height="70vh" />}*/}
      {/*{loading || (*/}

      {loading && <div className="flex align-center justify-center h-52">Loading....</div>}
      {loading || (
        <>
          <div className="container mx-auto">
            <div className="flex w-full my-10">
              <div className="flex flex-col">
                <div className="totalTitle text-gray-50 text-4xl ml-5 font-semibold"> {data?.tournamentMany.length || 0} tournaments</div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-10">
              {data?.tournamentMany.map((item, index) => {
                console.log('item_index', index);
                let isCenterdCard = false;
                if (index === 0) isCenterdCard = false
                else if (index === 1) isCenterdCard = true
                else if (index === 2) isCenterdCard = false
                else if (index % 2 === 0) isCenterdCard = true;
                // console.log(`item`, item)
                return (
                  <TournamentCard key={item._id} isCenterdCard={isCenterdCard} {...item} />
                );
              })}
            </div>
          </div>
          <div className="text-lg text-white font-bold bg-gradient-to-br from-indigo-700 to-indigo-200 py-14">
            <div className="container mx-auto my-8">
              <h1 className="mb-8 text-4xl ml-5 font-semibold">How it works</h1>
              <div className="flex justify-around mt-3">
                <div>
                  <span className="text-7xl	mx-5 my-3">1</span>
                  <h3 className="mx-3 mt-4">Register For Heat</h3>
                  <div className={`${Styles.bottomBorder}`}></div>
                  <div className="description mx-3 text-base font-normal">
                    <p>Select the heat you want to compete in. You are able to register in multiple heats</p>
                  </div>
                  {/*  */}
                </div>
                <div>
                  <span className="text-7xl mx-5	my-3">2</span>
                  <h3 className={` mx-3 mt-4 `}>Compete</h3>
                  <div className={`${Styles.bottomBorder}`}></div>
                  <div className="description mx-3 text-base font-normal">
                    <p>Select the heat you want to compete in. You are able to register in multiple heats</p>
                  </div>
                </div>
                <div>
                  <span className="text-7xl mx-5 my-3">3</span>
                  <h3 className={`mx-3 mt-4`}>Win the Grand Prize</h3>
                  <div className={`${Styles.bottomBorder}`}></div>
                  <div className="description mx-3 text-base font-normal	">
                    <p>Select the heat you want to compete in. You are able to register in multiple heats</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${Styles.liveScoring} bg-gradient-to-br from-purple-500 to-purple-200 text-center py-14`}>
            <div className="my-8">
              <h1 className="text-4xl font-semibold">Live Scoring</h1>
              <p className="text-base text-sm mb-5">Track how your team is doing in real time</p>
              <LiveScore />
            </div>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}
