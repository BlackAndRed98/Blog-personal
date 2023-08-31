import { connect } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react"; // Importa useState
import "../../styles/navbar.css";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import TextField from "@mui/material/TextField";
import PeopleIcon from "@mui/icons-material/People";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BookIcon from "@mui/icons-material/Book";
import WorkIcon from "@mui/icons-material/Work";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Logo from "../../assets/img/LogoTransparenteAzul.png";
import { DotLoader } from "react-spinners";

function Navbar() {
  const [loading, setLoading] = useState({
    homeButton: false,
    SocialButton: false,
    BlogButton: false,
    PortafolioButton: false,
    NoticiasButton: false,
  }); // Usa un objeto para manejar estados individuales

  const [anchorEl, setAnchorEl] = useState(null); // Estado para manejar el menú

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = async (buttonName, toPath) => {
    setLoading((prevLoading) => ({ ...prevLoading, [buttonName]: true }));

    await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate an action

    setLoading((prevLoading) => ({ ...prevLoading, [buttonName]: false }));
  };

  return (
    <div className="Navbar">
      <nav className="Navbar-nav">
        <div className="Avatar">
          <Button>
            <Avatar
              className="Avatar"
              alt=""
              sx={{
                width: 60,
                height: 60,
                border: "solid",
                borderColor: "rgba(0, 94, 255, 0.836)",
              }}
            />
          </Button>
        </div>

        <Button
          onClick={() => handleButtonClick("homeButton")}
          className="custom-button"
          component={NavLink}
          to="/"
          sx={{
            backgroundColor: "black",
            border: "solid",
            borderColor: "rgba(0, 94, 255, 0.836)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <DotLoader loading={loading["homeButton"]} size={20} color="azure" />
          <HomeIcon
            className="custom-button"
            sx={{
              color: "white",
              fontSize: 30,
            }}
          />
        </Button>
        <Button
          onClick={() => handleButtonClick("SocialButton")}
          component={NavLink}
          to="/RedSocial"
          variant="outlined"
          className="custom-button"
          sx={{
            color: "azure",
            backgroundColor: "black",
            border: "solid",
            borderColor: "rgba(0, 94, 255, 0.836)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <DotLoader
            loading={loading["SocialButton"]}
            size={20}
            color="azure"
          />
          <PeopleIcon />
          Red Social
        </Button>
        <Button
          onClick={() => handleButtonClick("BlogButton")}
          component={NavLink}
          to="/Blog"
          variant="outlined"
          className="custom-button"
          sx={{
            color: "azure",
            backgroundColor: "black",
            border: "solid",
            borderColor: "rgba(0, 94, 255, 0.836)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <DotLoader loading={loading["BlogButton"]} size={20} color="azure" />
          <BookIcon />
          Blog
        </Button>
        <Button
          onClick={() => handleButtonClick("PortafolioButton")}
          component={NavLink}
          to="/Portafolio"
          variant="outlined"
          className="custom-button"
          sx={{
            backgroundColor: "black",
            color: "azure",
            border: "solid",
            borderColor: "rgba(0, 94, 255, 0.836)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <DotLoader
            loading={loading["PortafolioButton"]}
            size={20}
            color="azure"
          />
          <WorkIcon />
          Portafolio
        </Button>
        <Button
          onClick={() => handleButtonClick("NoticiasButton")}
          component={NavLink}
          to="/Noticias"
          variant="outlined"
          className="custom-button"
          sx={{
            backgroundColor: "black",
            color: "azure",
            border: "solid",
            borderColor: "rgba(0, 94, 255, 0.836)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <DotLoader
            loading={loading["NoticiasButton"]}
            size={20}
            color="azure"
          />
          <NewspaperIcon />
          Noticias
        </Button>

        <Button
          variant="outlined"
          className="custom-button"
          onClick={handleMenuOpen}
          sx={{
            backgroundColor: "black",
            color: "azure",

            border: "solid",
            borderColor: "rgba(0, 94, 255, 0.836)",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Cambio de color al hacer hover
            },
          }}
        >
          <ExpandMoreIcon />
          Mas
        </Button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Ajustes">
            Ajustes
          </MenuItem>
          <MenuItem onClick={handleMenuClose} component={NavLink} to="/Soporte">
            Soporte
          </MenuItem>
          <MenuItem
            onClick={handleMenuClose}
            component={NavLink}
            to="/Privacidad"
          >
            Privacidad
          </MenuItem>
          {/* Agrega más opciones de menú según tus necesidades */}
        </Menu>
        <div className="SerchBar">
          <TextField
            hiddenLabel
            id="standard-size-small"
            size="small"
            variant="standard"
            label="Busqueda"
            sx={{ backgroundColor: "azure" }}
          />
        </div>
      </nav>
      <Link to="/">
        <img alt="LogoT" src={Logo} className="LogoT" />
      </Link>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}; // Aquí puedes mapear propiedades desde el estado si es necesario
};
export default connect(mapStateToProps, {})(Navbar);
