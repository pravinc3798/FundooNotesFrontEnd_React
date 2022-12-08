import { makeStyles } from "@mui/styles";

export const useStyle = makeStyles({
  Note1Container: {
    marginTop: "6rem",
    width: "45vw",
    padding: "1px 1px",
    marginBottom: '2rem'
  },

  Note1Paper: {
    p: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "45vw",
    borderRadius: "10px",
    color: "rgba(0,0,0,0.702)",
    borderColor: "#202124",
    boxShadow: "0 0 5px #202124",
  },

  Note2Container: {
    marginTop: "6rem",
    width: "45vw",
    borderRadius: "12px",
    marginBottom: '2rem'
  },

  Note2Paper: {
    p: "2px 4px",
    width: "50vw",
    borderRadius: "10px",
    color: "rgba(0,0,0,0.702)",
    borderColor: "#202124",
    boxShadow: "0 0 5px #202124",
  },

  Note2Title: {
    display: "flex",
    alignItems: "center",
    height: "3rem",
  },

  Note2Description: {
    minHeight: "3rem",
  },

  Note2Icons: {
    display: "flex",
  },

  Note2IconButtons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  Note2Buttons: {
    marginRight: "2rem",
  },

  Note3Container: {
    position: "relative",
    margin: "1.2rem",
  },

  Note3Description: {
    height: "3rem",
    resize: "none",
    overflow: "hidden",
  },

  Note3Title: {
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "2px 4px",
  },

  Note3Paper: {
    padding: "4px 4px",
    width: "212px",
    borderRadius: "10px",
    color: "rgba(0,0,0,0.702)",
  },

  Note3Icons: {
    display: "flex",
    justifyContent: "space-between",
  },
});

export const DashboardUseStyle = makeStyles({
  DBContainer: {
    display: "flex",
    width:'95vw'
  },

  DBNotes: {
    display: "flex",
    flexWrap: "wrap",
  },

  DBHeading: {
    display: "flex",
    justifyContent: "center",
    marginTop: "1.5rem",
    marginLeft: "40vw",
  },
});
