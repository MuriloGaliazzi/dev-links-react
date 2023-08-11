import { useSpring, animated } from "react-spring";
import styles from "./swicth.module.css";


const Swicth =({mode, infoButton}) =>{
    const animation = useSpring({
        left: infoButton ? "0%" : "50%"
    })
    return(
        <div id={styles.switch} onClick={mode}>
            <animated.button style={animation}></animated.button>
            <span></span>
        </div>
    );
};

export default Swicth;