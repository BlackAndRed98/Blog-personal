import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { Helmet } from "react-helmet-async";
function Blog (){
    return(
        <Layout>
             <Helmet>
        <title>Tech Nftx | Blog</title>
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
            <Navbar/>
            <Footer/>
        </Layout>
    )
}
export default Blog;