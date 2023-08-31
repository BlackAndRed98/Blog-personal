import { connect } from "react-redux";
import "../../../styles/header.css";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardPortafolio from "../../../assets/img/CardPortafolio.png";
import CardBlog from "../../../assets/img/CardBlog.jpeg";
import CardSocial from "../../../assets/img/CardSocial.jpeg";
import Card2 from "../../../assets/img/BackgroundImg.jpg";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
function Home() {
  return (
    <header className="Header">
      <div className="Info">
        <h1>Bienvenido a Tech Nftx:</h1>
        <h2>
          <Typewriter
            words={[
              "Innovación Tecnológica",
              "Explora el Futuro Digital",
              "Sumérgete en la Web 3.0",
              "Conoce las Tendencias Tecnológicas",
              "Conecta con Visionarios",
              "Contrata servicios",
              "Tecnologia",
              "Novedades",
              "Noticias",
              "Contactos",
              "El futuro es asombroso!",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="-"
            typeSpeed={100}
            deleteSpeed={40}
            delaySpeed={500}
          />
        </h2>
        <h3>
          En Tech Nftx, te damos la más cordial bienvenida a un espacio diseñado
          para inspirarte, informarte y conectar con la innovación y creatividad
          en el mundo de la tecnología. Nuestro objetivo es brindarte un lugar
          donde puedas explorar y disfrutar de diversas experiencias digitales
          que abarcan desde blogs informativos hasta redes sociales, noticias de
          última hora y una ventana a mi portafolio como programador.
        </h3>
      </div>
      <div className="HomeCards">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image={CardSocial}
            title="Social Network"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Conéctate con Otros Entusiastas en Nuestra Red Social:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ¿Eres un apasionado de la tecnología? Únete a nuestra comunidad en
              la red social y conecta con otros entusiastas que comparten tus
              intereses. Comparte tus ideas, proyectos y descubrimientos, y
              encuentra inspiración en las experiencias de otros miembros.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small" component={NavLink} to="/RedSocial">
              Saber mas
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={CardBlog} title="Blog" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Explora el Mundo Tecnológico a Través de Nuestro Blog:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nuestro blog es un espacio donde podrás mantenerte al tanto de las
              últimas tendencias, novedades y desarrollos en el mundo de la
              tecnología. Desde artículos detallados hasta análisis profundos,
              te brindamos contenido valioso que te mantendrá informado y
              motivado.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small" component={NavLink} to="/Blog">
              Saber mas
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={Card2} title="Blog" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Mantente al Día con las Últimas Noticias:
            </Typography>
            <Typography variant="body2" color="text.secondary">
              La tecnología avanza a pasos agigantados, y sabemos lo importante
              que es estar informado. Nuestra sección de noticias te trae las
              últimas novedades del mundo tecnológico, manteniéndote al tanto de
              eventos, lanzamientos y avances que moldean nuestro futuro
              digital.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small" component={NavLink} to="/Noticias">
              Saber mas
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={CardPortafolio} title="Blog" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Explora Mi Portafolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ¿Quieres saber más sobre mi experiencia como programador? Explora
              mi portafolio, donde encontrarás proyectos que he desarrollado,
              tecnologías que domino y soluciones creativas que he aportado a
              diversos desafíos tecnológicos. Mi portafolio es un testimonio de
              mi pasión por la programación y la creación de soluciones
              innovadoras
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small" component={NavLink} to="/Portafolio">
              Saber mas
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={CardPortafolio} title="Blog" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Explora Mi Portafolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ¿Quieres saber más sobre mi experiencia como programador? Explora
              mi portafolio, donde encontrarás proyectos que he desarrollado,
              tecnologías que domino y soluciones creativas que he aportado a
              diversos desafíos tecnológicos. Mi portafolio es un testimonio de
              mi pasión por la programación y la creación de soluciones
              innovadoras
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small" component={NavLink} to="/Portafolio">
              Saber mas
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200 }} image={CardPortafolio} title="Blog" />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Explora Mi Portafolio
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ¿Quieres saber más sobre mi experiencia como programador? Explora
              mi portafolio, donde encontrarás proyectos que he desarrollado,
              tecnologías que domino y soluciones creativas que he aportado a
              diversos desafíos tecnológicos. Mi portafolio es un testimonio de
              mi pasión por la programación y la creación de soluciones
              innovadoras
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Compartir</Button>
            <Button size="small" component={NavLink} to="/Portafolio">
              Saber mas
            </Button>
          </CardActions>
        </Card>
      </div>
    </header>
  );
}

// No es necesario definir mapStateToProps si no estás mapeando propiedades desde el estado
export default connect(null, {})(Home);
