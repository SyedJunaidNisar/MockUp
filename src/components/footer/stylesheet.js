import { makeStyles } from "@material-ui/core";

export default makeStyles({
  MainContainer: {
    zIndex: 50,
    WebkitTransition: "all .7s cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  },
  SvgContainer: {
    marginLeft: "8rem",
  },
  heading: {
    fontFamily: "'IBM Plex Sans Thai Looped'",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "52.34px",
    lineHeight: "118.4%",
    textAlign: "center",
    color: "#3E403F",
  },
});
