import { connect } from "react-redux";
import "../../../styles/redsocial.css";

import { Typewriter } from "react-simple-typewriter";
function RedSocial() {
  return (
    <div className="RedSocial">
      <header className="RedSocial-header">
        <div className="typewriter">
          <h5 className="LogoRs">
            Tech RS
            <Typewriter
              words={[
                "#TechRS",
                "#TechNftx ",
                "#ComunidadTecnológica ",
                "#Aprendizaje",
                "#CrecimientoPersonal ",
                "#Programación",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="-"
              typeSpeed={100}
              deleteSpeed={40}
              delaySpeed={500}
            />
          </h5>
        </div>
      </header>
      <body className="RedSocial-body"></body>
      <footer className="RedSocial-footer">
        <ul>
          <li>
            <h4>🌐 ¿Qué es TechRS en Tech Nftx? </h4>
            TechRS es la comunidad social dentro de la plataforma Tech Nftx,
            diseñada para que te conectes, compartas y aprendas junto a otros
            entusiastas de la tecnología y la programación. Aquí es donde puedes
          </li>
          <li>
            <h4>🤝 Conectar con Afines</h4>
            Únete a otros amantes de la tecnología, comparte experiencias y
            conoce a personas que comparten tus intereses. ¡La comunidad te
            espera con los brazos abiertos!
          </li>
          <li>
            <h4>🚀 Compartir tu Pasión</h4>
            Publica tus proyectos, logros y conocimientos en tecnología. Inspira
            a otros y obtén la retroalimentación de una comunidad que te
            entiende. 💡 Aprender y Crecer: Descubre recursos, tutoriales y
            charlas que te ayudarán a desarrollarte en el campo tecnológico. ¡No
            hay límite para lo que puedes aprender!
          </li>
          <li>
            <h4>📸 ¿Cómo acceder a TechRS?</h4>
            Ingresa a la app Tech Nftx y busca la sección de TechRS. Aquí podrás
            explorar, interactuar y aprender de otros miembros de la comunidad.
            ¡Únete a la revolución tecnológica en Tech Nftx y aprovecha la
            comunidad de TechRS para llevar tus habilidades y conocimientos al
            siguiente nivel!
          </li>
          <li>
            <h4>🔗 Más que una Red Social</h4> Una Comunidad Tecnológica TechRS
            en Tech Nftx es más que una red social, es un lugar donde los
            entusiastas de la tecnología se unen para impulsar su crecimiento.
            ¡Únete hoy mismo y forma parte de algo grandioso!
          </li>
        </ul>
      </footer>
    </div>
  );
}

// No es necesario definir mapStateToProps si no estás mapeando propiedades desde el estado
export default connect(null, {})(RedSocial);
