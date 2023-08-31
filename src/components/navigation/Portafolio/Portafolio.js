import { connect } from "react-redux";
import "../../../styles/portafolio.css";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Link } from "react-router-dom";
import { Box, Tab } from "@mui/material";

import { Typewriter } from "react-simple-typewriter";
import { hover } from "@testing-library/user-event/dist/hover";
function PortafolioJ() {
  const [value, setValue] = useState("1"); // Define and initialize 'value' using useState

  const handleChange = (event, newValue) => {
    setValue(newValue); // Define handleChange function
  };
  return (
    <div className="PortafolioPage">
      <header className="Header">
        <h1 style={{ backgroundColor: "transparent" }}>Mi Portafolio</h1>
        <h2 style={{ backgroundColor: "transparent" }}>
          <Typewriter
            words={[
              "Programacion Web",
              "React.js",
              "IA",
              "Python",
              "Data Bases",
              "JavaScript",
              "Contrata servicios",
              "Mira mis Ultimos proyectos",
              "Mi experiencia",
              "Aprende conmigo",
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
      </header>
      <body>
        <div className="Info">
          <h3 className="InfoH">
            Bienvenido a mi Portafolio como Programador FullStack ¡Hola y
            bienvenido! Soy{" "}
            <span style={{ backgroundColor: "black" }}>
              Franco Nicolas Fuentes
            </span>
            , un apasionado programador FullStack con experiencia en la creación
            de soluciones tecnológicas innovadoras. Este portafolio es un
            espacio donde te invito a explorar mis proyectos, experiencias y
            opiniones en el mundo de la programación.
            <div>
              <h2 className="InfoH">Sobre Mí</h2>
              Desde que me sumergí en el mundo del desarrollo web, he estado
              construyendo y mejorando mis habilidades tanto en el desarrollo
              frontend como en el backend. Mi enfoque en el desarrollo FullStack
              me permite abordar proyectos de manera integral, desde la creación
              de interfaces de usuario cautivadoras hasta la implementación de
              sólidas arquitecturas de servidor.
            </div>
            <h2 className="InfoH"> Explora mis Proyectos</h2>
            En esta plataforma, encontrarás una variedad de proyectos que he
            desarrollado a lo largo de mi carrera. Estos proyectos abarcan
            diversas áreas, desde aplicaciones web interactivas hasta sistemas
            de gestión y mucho más. Cada proyecto representa un desafío único
            que me permitió perfeccionar mis habilidades y aprender de cada
            experiencia.
            <h2 className="InfoH">Opiniones y Reflexiones </h2>
            Además de mostrar mis proyectos, también compartiré mis reflexiones
            y opiniones sobre las últimas tendencias en el mundo tecnológico.
            Creo que la tecnología es un campo en constante evolución, y me
            emociona mantenerme al día con las novedades y los avances que
            moldean nuestro futuro digital. A través de mis publicaciones,
            espero inspirarte y brindarte información valiosa para que también
            puedas explorar este emocionante viaje.
            <h2 className="InfoH">Conéctate conmigo </h2>
            Me encantaría que te tomes un tiempo para explorar mi portafolio y
            conocer más sobre mí y mi trabajo. Si tienes preguntas, ideas para
            colaboraciones o simplemente quieres charlar sobre tecnología, no
            dudes en contactarme. Puedes encontrarme en
            <br />
            <Link href="#">
              <span style={{ backgroundColor: "black", color: "blue" }}>
                francofuentestecno@gmail.com
              </span>
            </Link>{" "}
            o en mis redes sociales. Gracias por visitar mi portafolio. Espero
            que encuentres inspiración y oportunidades para aprender y crecer en
            el mundo de la programación. ¡Sigue explorando y creando!
          </h3>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Como empecé"
                  value="1"
                  sx={{
                    color: "azure",
                    ml: "5%",
                    backgroundColor: "black",
                    borderRadius: "5%",
                  }}
                />
                <Tab
                  label="Progreso"
                  value="2"
                  sx={{
                    color: "azure",
                    ml: "5%",
                    backgroundColor: "black",
                    borderRadius: "5%",
                  }}
                />
                <Tab
                  label="Actualmente"
                  value="3"
                  sx={{
                    ml: "5%",
                    color: "azure",
                    backgroundColor: "black",
                    borderRadius: "5%",
                  }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <div className="IntroPresentacion">
                <h3>Mi Viaje Inspirador en el Mundo de la Programación</h3>
                <p>
                  Hace más de un año, me encontraba sumergido en el apasionante
                  mundo de las criptomonedas. La idea de crear mi propio
                  proyecto y ser parte de esta revolución tecnológica me animaba
                  profundamente. Fue en ese momento que el germen de la
                  programación empezó a germinar en mi mente.
                </p>
                <h3>El Comienzo con Solidity y las Criptomonedas</h3>
                <p>
                  Mi viaje comenzó con Solidity, el lenguaje que impulsa la
                  magia detrás de las criptomonedas y los contratos
                  inteligentes. Soñaba con crear algo asombroso por mi cuenta,
                  pero pronto me di cuenta de que este camino requería más que
                  solo pasión. Se necesitaba un equipo sólido y financiación
                  para llevar a cabo mi visión. Sin embargo, esto no me
                  desanimó; en cambio, me inspiró a explorar más.
                </p>
                <h3>De la Idea a la Acción: Aprendiendo lo Básico</h3>
                <p>
                  Con la determinación en el corazón, decidí dar un paso atrás y
                  comenzar desde lo más básico. Aprendí las piedras angulares de
                  la web: HTML, CSS y JavaScript. Cada línea de código se
                  convirtió en un lienzo en blanco donde podía dar vida a mis
                  ideas. Poco a poco, mi comprensión se profundizó y me aventuré
                  en el mundo versátil de Python.
                </p>
              </div>
            </TabPanel>
            <TabPanel value="2">
              <div className="IntroProgreso">
                <h3>Un Cambio de Rumbo y el Poder del Aprendizaje Continuo</h3>
                <p>
                  A medida que exploraba nuevas áreas, me di cuenta de que mi
                  viaje iba más allá de las criptomonedas. Encontré un deseo
                  ardiente de crear soluciones tecnológicas innovadoras. Mi
                  enfoque se expandió hacia el desarrollo web, Python, React y
                  Django, abrazando la filosofía de aprender constantemente.
                </p>
                <h3>Del Conocimiento a la Acción: Materializando Mis Ideas</h3>
                <p>
                  Con cada nuevo concepto que dominaba, se presentaba una
                  oportunidad emocionante para dar vida a una idea. Comencé a
                  crear y desarrollar proyectos, cada uno un testimonio de mi
                  crecimiento y dedicación. Cada línea de código, cada solución
                  ingeniosa, me acercaba a mis metas. Hoy, el reflejo de mi
                  viaje se encuentra en una página web deslumbrante, construida
                  desde cero. Utilicé Python para respaldar mi backend y Django
                  para administrar mis datos. React se convirtió en mi
                  herramienta para crear experiencias fluidas y atractivas en el
                  frontend.
                </p>
              </div>
            </TabPanel>
            <TabPanel value="3">
              <div className="IntroActualmente">
                <h3>Conexiones Profesionales y Futuras Colaboraciones</h3>
                <p>
                  A medida que mi viaje en el mundo del desarrollo sigue
                  evolucionando, estoy emocionado por las oportunidades que el
                  futuro tiene reservadas. Mi compromiso con la excelencia en la
                  programación y la tecnología sigue siendo firme, y estoy más
                  que dispuesto a compartir mis conocimientos y habilidades con
                  otros apasionados por este campo. Si estás buscando
                  colaboradores para tus proyectos, deseas explorar nuevas ideas
                  o simplemente deseas tener una conversación sobre desarrollo,
                  estaré encantado de conectarme contigo. Juntos, podemos
                  explorar posibilidades y trabajar hacia soluciones innovadoras
                  que impulsen el progreso tecnológico. Mi dedicación para
                  aprender y crecer en este mundo en constante cambio sigue
                  siendo una fuerza impulsora. Espero no solo avanzar en mi
                  propio camino, sino también contribuir al crecimiento de otros
                  en su travesía en el desarrollo y la programación. No dudes en
                  contactarme para discutir posibles oportunidades de
                  colaboración, intercambiar ideas o simplemente tener una
                  conversación sobre la emocionante industria de la tecnología.
                  ¡Estoy ansioso por las conexiones profesionales y futuras
                  colaboraciones!
                </p>
              </div>
            </TabPanel>
          </TabContext>
        </div>
      </body>
    </div>
  );
}

// No es necesario definir mapStateToProps si no estás mapeando propiedades desde el estado
export default connect(null, {})(PortafolioJ);
