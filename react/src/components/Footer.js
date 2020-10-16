import React, { Fragment } from "react";
import { Box, Typography, Link, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Footer.css";
import gitimg from "../github-img.png";
const apilink = "https://openweathermap.org/api";
const repolink = "https://github.com/GeekHaven/weather-app";
const prof_of_garvit = "https://github.com/garvitchittora";
const prof_of_vishwas = "https://github.com/infern018";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "grid",
    marginTop: "120px",
    gridTemplateColumns: "repeat(3, 1fr)",
    background: "#3046b5",
    color: "#fff",
    boxShadow: [
      "0px 2px 4px -1px rgba(0,0,0,0.2)",
      "0px 4px 5px 0px rgba(0,0,0,0.14)",
      "0px 1px 10px 0px rgba(0,0,0,0.12)",
    ].join(","),
  },
  link: {
    fontFamily: ["Roboto", "Helvetica", "Arial", "sans-serif"].join(","),
  },
}));
const imgStyles = {
  height: "100px",
  width: "auto",
  background: "transparent",
  borderRadius: "50%",
  margin: "10px",
};
const linkStyles = {
  color: "white",
  textDecoration: "underline",
  margin: "2px 6px",
  fontSize: "16px !important",
  lineHeight: "1.3",
  whiteSpace: "nowrap",
  letterSpacing: "0.00938em",
};

const Footer = () => {
  const showMQ = useMediaQuery("(max-width: 768px)");
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.footer}>
        <Box
          component="div"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Link href={repolink} target="_blank" rel="noopener">
            <img src={gitimg} style={imgStyles} alt="link_of_repo" />
          </Link>
          <Link
            target="_blank"
            rel="noopener"
            className={classes.Link}
            href={apilink}
            style={linkStyles}
          >
            API used
          </Link>
        </Box>
        {showMQ ? (
          <Box flexGrow="1" />
        ) : (
          <Box
            textAlign="center"
            style={{ padding: ".5rem" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography className={classes.link}>
              &copy;{new Date().getFullYear()} GEEKHAVEN IIIT ALLAHABAD | All
              Rigths Reserved | Terms Of Service | Privacy
            </Typography>
          </Box>
        )}
        <Box
          textAlign="center"
          style={{ padding: ".5rem" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography color="inherit" style={{ margin: "0 6px" }}>
            Made by:
          </Typography>
          <Link
            target="_blank"
            rel="noopener"
            href={prof_of_garvit}
            color="inherit"
            style={linkStyles}
            className={classes.Link}
          >
            Garvit
          </Link>
          <Link
            className={classes.Link}
            href={prof_of_vishwas}
            style={linkStyles}
            target="_blank"
            rel="noopener"
          >
            Vishwas
          </Link>
        </Box>
      </Box>
      {showMQ && (
        <Box textAlign="center" style={{ padding: ".5rem" }}>
          <Typography
            style={{ color: "white", padding: "1rem" }}
            className={classes.Link}
          >
            &copy;{new Date().getFullYear()} GEEKHAVEN IIIT ALLAHABAD | All
            Rigths Reserved | Terms Of Service | Privacy
          </Typography>
        </Box>
      )}
    </Fragment>
  );
};

export default Footer;
