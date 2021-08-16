import React from "react";
import { Col, Container, Row } from "reactstrap";
import TournamentCard from "../../components/tournament/tournamentCard";
import useFetchApi from "../../helpers/hooks/useFetchApi";
import Loading from "../../components/loading/Loading";
import "./tournament.css";
export default function Tournament() {
  // fetching data
  const { data, isLoading } = useFetchApi("/tournament/");

  console.log(data);
  // main return
  return (
    <Container fluid className="tournament">
      <header>
        <div> Tournaments</div>
        <div className="filter">
          <span>Filter Tournaments</span>
          <img src="/images/filter.svg" className="svg" alt=""></img>
        </div>
      </header>
      {isLoading && <Loading height="70vh" />}
      {isLoading || (
        <>
          <Row className="mt-5">
            <Col>
              <div className="totalTitle"> {data?.length || 0} tournament</div>
            </Col>
          </Row>
          <Row className="mt-5">
            {data?.map((item, index) => {
              const isCenterdCard = index % 2 === 0;
              return (
                <TournamentCard
                  key={item._id}
                  isCenterdCard={isCenterdCard}
                  {...item}
                />
              );
            })}
          </Row>
        </>
      )}
    </Container>
  );
}
