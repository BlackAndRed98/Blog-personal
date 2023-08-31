import { connect } from "react-redux";
import { Button } from "@mui/material";
import "../../styles/index.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
import techLogo from "../../assets/img/tECH.gif";

function Footer() {
  return (
    <nav className="Footer">
      <img src={techLogo} alt="Tech Logo" className="Logo" />

      <ul className="CreatorSocial">
        <li>
          <Button
            component={Link}
            to="https://twitter.com/blackandred_eth" // Ruta a la página de Twitter
            variant="outlined"
            className="custom-button"
            sx={{
              ml: "5px",
              mt: "5px",
              mb: "10px",
              color: "azure",
              backgroundColor: "black",
              border: "solid",
              borderColor: "rgba(0, 94, 255, 0.836)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
              },
            }}
          >
            <TwitterIcon />
            Blackandred
          </Button>
        </li>
        <li>
          <Button
            component={Link}
            to="https://www.linkedin.com/in/franco-nicolas-fuentes-457bb024b/"
            variant="outlined"
            className="custom-button"
            sx={{
              ml: "5px",
              mt: "5px",
              mb: "10px",
              color: "azure",
              backgroundColor: "black",
              border: "solid",
              borderColor: "rgba(0, 94, 255, 0.836)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
              },
            }}
          >
            <LinkedInIcon />
            Franco Nicolas Fuentes
          </Button>
        </li>
        <li>
          <Button
            variant="outlined"
            className="custom-button"
            sx={{
              ml: "5px",
              mt: "5px",
              mb: "10px",
              color: "azure",
              backgroundColor: "black",
              border: "solid",
              borderColor: "rgba(0, 94, 255, 0.836)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
              },
            }}
          >
            <InstagramIcon />
            Franco NicKolas Fuentes
          </Button>
        </li>
        <li>
          <Button
            variant="outlined"
            className="custom-button"
            sx={{
              ml: "5px",
              mt: "5px",
              mb: "10px",
              color: "azure",
              backgroundColor: "black",
              border: "solid",
              borderColor: "rgba(0, 94, 255, 0.836)",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
              },
            }}
          >
            <EmailIcon />
            TechNftx@gmail.com
          </Button>
        </li>
      </ul>
    </nav>
  );
}

// No es necesario definir mapStateToProps si no estás mapeando propiedades desde el estado
export default connect(null, {})(Footer);
