import { format as formatDate, parseISO } from "date-fns";
import React from "react";
import { Button, Col } from "reactstrap";
import "./tournamentCard.css";
export default function TournamentCard({
  mode,
  prize,
  scoring,
  startTime,
  createdAt,
  isCenterdCard,
}) {
  return (
    <Col md="4">
      <div
        style={{
          height: isCenterdCard || "670px",
          marginTop: isCenterdCard || "-40px",
        }}
        className="tournamentCard"
      >
        <img
          className="img"
          src={
            mode === "solo"
              ? "/images/single.svg"
              : mode === "duo"
              ? "/images/duo.svg"
              : "/images/trio.svg"
          }
          alt="single icon"
        ></img>
        <div className="title">
          Free <span style={{ textTransform: "capitalize" }}>{`${mode}s`}</span>
        </div>
        <div className="text">{formatDate(parseISO(createdAt), "PPPP")}</div>
        <div className="tag">
          <img src="/images/star.png" alt="star" className="starIcon"></img>
          <span>200+ teams expected</span>
        </div>
        <div className="prizeText">${prize} Prize</div>
        <div className="prizesubText">PER DIVISION</div>
        <div className="items mt-4">
          <span>Mode</span>
          <span
            className="poppinsBd"
            style={{ textTransform: "capitalize" }}
          >{`${mode}s`}</span>
        </div>
        <div className="items">
          <span>Length</span>
          <span className="poppinsBd">1H:30M</span>
        </div>
        <div className="items">
          <span>Start Time</span>
          <span className="poppinsBd">
            {`${formatDate(parseISO(startTime), "p")} PDT`}
          </span>
        </div>
        <div className="items">
          <span>Scoring</span>
          <span className="poppinsBd">{`${scoring} ${
            mode === "solo" ? "Players" : "Teams"
          }`}</span>
        </div>
        <div className="items">
          <span>Teams / Divison</span>
          <span className="poppinsBd">20</span>
        </div>
        <div className="items">
          <span>Cost/Player</span>
          <span className="poppinsBd textGreen">Free Entry</span>
        </div>
        <Button
          className="registerButton"
          style={{ marginTop: isCenterdCard || "65px" }}
        >
          REGISTER NOW
        </Button>
      </div>
    </Col>
  );
}
