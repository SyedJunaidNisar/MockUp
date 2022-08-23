import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Pic1, Pic2, Pic3, Pic4, Pic5, Pic6 } from "../../assets";
import useStyles from "./stylesheet";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamSection = () => {
  const classes = useStyles();

  React.useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <Box
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box data-aos="fade-right" className={classes.teamContainer}>
        <Box className={classes.teamWrapper}>
          <Box className={classes.teamMemberContainer}>
            <Box>
              <img src={Pic1} alt="team-member" />
            </Box>
            <Typography className={classes.teamMemberName}>
              Joke Creative Director
            </Typography>
          </Box>
          <Box className={classes.teamMemberContainer}>
            <Box className={classes.midImage}>
              <img src={Pic2} alt="team-member" />
            </Box>
            <Typography className={classes.teamMemberName}>
              Joke Creative Director
            </Typography>
          </Box>
          <Box className={classes.teamMemberContainer}>
            <Box>
              <img src={Pic3} alt="team-member" />
            </Box>
            <Typography className={classes.teamMemberName}>
              Joke Creative Director
            </Typography>
          </Box>
        </Box>

        <Box className={classes.teamWrapper}>
          <Box className={classes.teamMemberContainer}>
            <Box>
              <img src={Pic4} alt="team-member" />
            </Box>
            <Typography className={classes.teamMemberName}>
              Joke Creative Director
            </Typography>
          </Box>
          <Box className={classes.teamMemberContainer}>
            <Box className={classes.midImage}>
              <img src={Pic5} alt="team-member" />
            </Box>
            <Typography className={classes.teamMemberName}>
              Joke Creative Director
            </Typography>
          </Box>
          <Box className={classes.teamMemberContainer}>
            <Box>
              <img src={Pic6} alt="team-member" />
            </Box>
            <Typography className={classes.teamMemberName}>
              Joke Creative Director
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default TeamSection;
