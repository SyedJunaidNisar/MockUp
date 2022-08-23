import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./stylesheet";

const HeroSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.MainContainer}>
      <Box className={classes.LogoContainer}>
        <Typography className={classes.Logo}>LOGO</Typography>
      </Box>

      <Box className={classes.textWrapper}>
        <Typography className={classes.Description}>
          we are team who are creative, smart, <br /> honest, responsive,
          persistent, ethical, <br /> innovative and crazy about online
          technology
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
