import { useQuery } from "@apollo/client";
import React from "react";
import Header from "../../components/layout/header";
// import { Col, Container, Row } from "reactstrap";
import TournamentCard from "../../components/tournaments/tournamentCard";
import { ALL_TOURNAMENTS } from "../../services/graphQL/queries/tournament";
import "./tournament.module.css";
export default function Index() {
  // fetching data
  const { data, error, loading } = useQuery(ALL_TOURNAMENTS);

  console.log(data);
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
              <div className="totalTitle"> {data?.tournamentMany.length || 0} tournament</div>
            </div>
          </div>
          <div className="flex flex-3 w-full mt-5">
            {data?.tournamentMany.map((item, index) => {
              const isCenterdCard = index % 2 === 0;
              return (
                <TournamentCard
                  key={item._id}
                  isCenterdCard={isCenterdCard}
                  {...item}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
