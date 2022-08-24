import { makeStyles } from "@material-ui/core";

export default makeStyles({
  teamContainer: {
    marginLeft: "25rem",
    marginRight: "25rem",
  },
  teamWrapper: {
    // width: "1440px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  teamMemberContainer: {},
  teamMemberName: {
    fontFamily: "'Inder'",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "31.34px",
    lineHeight: "118.4%",
    textAlign: "center",
  },
  midImage: {
    marginTop: "5rem",
    "&:hover": {
      WebkitTransform: "scale(1.4)",
      MozTransform: "scale(1.4)",
      msTransform: "scale(1.4)",
      OTransform: "scale(1.4)",
      transform: "scale(1.4)",
    },
  },
});
