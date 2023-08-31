import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Routes from "./Routes";

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tech Nftx | Future is awesome!</title>
        <meta
          name="description"
          content="Explora las ultimas novedades en tecnologia, web3, blockchain, IA inteligencia artificial y comparte tu opinion en nuestro blog o red social en donde puedes mantenerte al tanto de las ultimas noticias"
        />
        <meta
          name="keywords"
          content="tecnologia, programacion, web, ia,blog de tecnologia, red social web3, software, developers"
        />
        <meta name="robots" content="all" />
        <link rel="canonical" href="https://www.TechNftx.com" />
        <meta name="author" content="Tech Nftx" />
        <meta name="author" content="Tech Nftx" />

        {/* Meta Social Tags */}
        <meta property="og:title" content={"Tech Nftx | Future is awesome"} />
        <meta
          property="og:description"
          content={
            "tecnologia, programacion, web, ia,blog de tecnologia, red social web3, software, developers"
          }
        />
        <meta property="og:url" content={"https://www.TechNftx.com"} />
        <meta property="og:image" content={"./assets/img/NavbarImg.png"} />

        <meta
          property="twitter:title"
          content={"Tech Nftx | Future is awesome"}
        />
        <meta
          property="twitter:description"
          content={
            "tecnologia, programacion, web, ia,blog de tecnologia, red social web3, software, developers"
          }
        />
        <meta property="twitter:url" content={"https://www.TechNftx.com"} />
        <meta property="twitter:image" content={"./assets/img/NavbarImg.png"} />
      </Helmet>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </HelmetProvider>
  );
}
export default App;
