import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Colors from "pages/Colors";
import Navigation from "pages/Navigation";
import Typography from "pages/Typography";
import Spacing from "pages/Spacing";
import Container from "pages/Container";
import Grid from "pages/Grid";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "colors",
      element: <Colors />,
    },
    {
      path: "navigation",
      element: <Navigation />,
    },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "spacing",
      element: <Spacing />,
    },
    {
      path: "container",
      element: <Container />,
    },
    {
      path: "grid",
      element: <Grid />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
