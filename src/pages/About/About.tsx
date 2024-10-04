import "./About.css"

{/* functions react */}
import { useEffect } from "react"

{/* get elements about */}
import HomeMe from "./HomeMe";
import SliderSkills from "./SliderSkills";
import Posts from "./Posts";

const About = () => {
    {/* title page */}
    useEffect(() => {
        document.title = "شبكة الفنان | من انا";
    }, []);

    return (
        <>
            <HomeMe />
            <SliderSkills />
            <Posts />
        </>
    )
}

export default About