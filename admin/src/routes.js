import { exact } from "prop-types";
import React from "react";

// // page Imports
const CreateTournament = React.lazy(() =>
  import("./views/pages/tournament/createTournament")
);

const routes = [
  { path: "/", exact: true, name: "Home" },
  {
    path: "/admin/create-tournament",
    exact: true,
    name: "Create Tournament",
    component: CreateTournament,
  },
];

export default routes;
