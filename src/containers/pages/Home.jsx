import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import Header from "components/navigation/home/Header";
function Home (){
    return(
        <Layout>
            <Navbar/>
            <div>
                <Header/>
            </div>
            
            <Footer/>
        </Layout>
    )
}
export default Home;