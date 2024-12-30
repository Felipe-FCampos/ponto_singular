import { background_shadow, computer } from "../assets/Icons";
import Header from "../components/Header/Header";
import '../App.css'
import About from "../components/about/About";
import Projetos from "../components/Projects/Projects";


export default function Home() {
    return (
        <>
            <Header />
            <div className="banner">
                <div className="main_banner">
                    <img className="shadow_of_banner" src={background_shadow} />
                    <img className="computer" src={computer} alt="Computador" />
                </div>
            </div>
            <div className="about">
            <About />
            </div>
            <div className="projetos">
            <Projetos />
            </div>
        </>
    )
}