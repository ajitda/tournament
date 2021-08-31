import moment from 'moment';
import React from "react";
// import "./tournamentCard.module.css";
//disable es-lint next line
import Styles from './tournamentCard.module.css';
export default function TournamentCard({
  mode,
  prize,
  scoring,
  startTime,
  createdAt,
  isCenterdCard,
}) {
  // {`${Styles.ananda} ananda`}
  // console.log(`createdAt`, createdAt)
  const starStyle = {
    "background": "#ebe6fd",
    "border-radius": "20px",
    "padding": "3px",
    "max-width": "13rem",
    "width": "100%",
    "margin": "0 auto",
    "fontSize": "14px",
  }
  return (
    <div className="flex flex-col mb-8" md="4">
      <div
        style={{
          height: isCenterdCard && "575px",
          marginTop: isCenterdCard && "-6px",
        }}
        className="tournamentCard relative bg-gray-50 rounded-lg mt-5 px-5 mx-3">
        <img
          className={`${Styles.icon} img absolute`}
          src={
            mode === "solo"
              ? "/images/single.svg"
              : mode === "duo"
              ? "/images/duo.svg"
              : "/images/trio.svg"
          }
          alt="single icon"
        ></img>
        <div className="title  text-center font-medium mt-8 text-3xl ">
          Free <span style={{ textTransform: "capitalize" }}>{`${mode}s`}</span>
        </div>
        <div className="text-center my-2 text-gray-300">{moment(startTime).format('LLLL')}</div>
        <div className="flex justify-center mt-4 bg-gray-50" style={starStyle}>
          <img src="/images/star.png" style={{height:"13px"}}alt="star" className="starIcon mt-1 mr-1"></img>
          <span>200+ teams expected</span>
        </div>
        <div className="prizeText text-center my-2 font-bold text-4xl">${prize} Prize</div>
        <div className="prizesubText text-center text-gray-400">PER DIVISION</div>
        <div className="items flex justify-between mt-4 mx-3">
          <span className="font-medium">Mode</span>
          <span
            className="poppinsBd font-bold"
            style={{ textTransform: "capitalize" }}
          >{`${mode}s`}</span>
        </div>
        <div className="items flex justify-between mt-4 mx-3">
          <span className="font-medium">Length</span>
          <span className="poppinsBd font-bold">1H:30M</span>
        </div>
        <div className="items flex justify-between mt-4 mx-3">
          <span className="font-medium">Start Time</span>
          <span className="poppinsBd font-bold">
            {/*{`${formatDate(parseISO(startTime), "p")} PDT`}*/}
            startTime
          </span>
        </div>
        <div className="items flex justify-between mt-4 mx-3">
          <span className="font-medium">Scoring</span>
          <span className="poppinsBd font-bold">{`${scoring} ${
            mode === "solo" ? "Players" : "Teams"
          }`}</span>
        </div>
        <div className="items flex justify-between mt-4 mx-3">
          <span className="font-medium">Teams / Divison</span>
          <span className="poppinsBd font-bold	">20</span>
        </div>
        <div className="items flex justify-between mt-4 mx-3">
          <span className="font-medium">Cost/Player</span>
          <span className="poppinsBd font-bold" style={{color:"#8de20a"}}>Free Entry</span>
        </div>
        <button
          className="btn registerButton text-center my-3"
          style={{ marginTop: isCenterdCard || "65px" ,margin:"12px auto",display:"block"}}
        >
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}
