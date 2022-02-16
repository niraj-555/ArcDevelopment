import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";

import history from "../assets/history.svg";
import profile from "../assets/niraj.jpg";

import CallToAction from "./ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5rem",

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  avatar: {
    height: "20em",
    width: "20em",
    [theme.breakpoints.down("sm")]: {
      height: "15em",
      width: "15em",
      maxWidth: 300,
      maxHeight: 300,
    },
  },
}));

const About = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h2">
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        container
        justifyContent="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          align="center"
          variant="h4"
          className={classes.missionStatement}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
        justifyContent="space-around"
      >
        <Grid item>
          <Grid
            item
            container
            direction="column"
            style={{ maxWidth: "35em" }}
            lg
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                Founded in 2022, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="body1"
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item container justifyContent="center" lg>
            <img
              src={history}
              alt="quill pen sitting on top of book "
              style={{ maxHeight: matchesMD ? 200 : "22em" }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginBottom: "15em" }}
        className={classes.rowContainer}
      >
        <Grid item>
          <Typography align="center" variant="h4" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" paragraph align="center">
            Niraj Patil , Founder
          </Typography>
          <Typography variant="body1" paragraph align="center">
            Frontend Developer
          </Typography>
        </Grid>
        <Grid item>
          <Avatar alt="founder" src={profile} className={classes.avatar} />
        </Grid>
        <Grid item container justifyContent={matchesMD ? "center" : undefined}>
          <Grid item container direction="column">
            <Grid item style={{ padding: "1.25em" }}>
              <Typography variant="body1" paragraph align="center">
                I taught myself basic coding from a library book in Engineering,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
