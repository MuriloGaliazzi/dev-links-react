import { useState } from "react";
import Profile from "../components/profile/profile";
import Swicth from "../components/switch/switch";
import Links from "../components/links/links";
import SocialLinks from "../components/socialLinks/social.Links";
import Footer from "../components/footer/footer";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg"
import imgLightMode from "../img/Among-Us-feat.jpg"


const App = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    const imgSrc = isLightMode ? imgLightMode : imgDarkMode;
    const imgAlt = isLightMode ? "Imagem no Modo Claro" : "Imagem no Modo Escuro"
    return (
        <div id="container">
            <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@MuriloGaliazzi</Profile>
            <Swicth></Swicth>
            <div id="links">
                <ul>
                    <Links link={"https://github.com"}>GitHub</Links>
                    <Links link={"#"}>Instagram</Links>
                    <Links link={"#"}>Portfólio</Links>
                    <Links link={"#"}>Projetos</Links>
                    
                </ul>

            </div>
            <div id="sociallinks">
                <SocialLinks href={"#"} icon={"logo-github"} />
                <SocialLinks href={"#"} icon={"logo-instagram"} />
                <SocialLinks href={"#"} icon={"logo-twitter"} />
                <SocialLinks href={"#"} icon={"logo-youtube"} />

            </div>
            <Footer link={"#"}>@MuriloGaliazzi</Footer>
        </div>
    );
};

export default App;
