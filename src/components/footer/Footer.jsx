import { Box, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./stylesheet";
import { ReactComponent as FooterSvg } from "../../assets/footer.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  const classes = useStyles();

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);

  return (
    <Box className={classes.MainContainer}>
      <div data-aos="fade-left" className={classes.SvgContainer}>
        <FooterSvg />
      </div>
      <Box>
        <Typography className={classes.heading}>
          Who what where contract
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
