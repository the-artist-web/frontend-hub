import "./Docs.css"

{/* functions react */}
import { useEffect } from "react"

{/* get element docs */}
import BodyDocs from "./BodyDocs";

const Docs = () => {
    {/* title page */}
    useEffect(() => {
        document.title = "شبكة الفنان | مستندات";
    }, []);

    return (
        <>
            <BodyDocs />
        </>
    )
}

export default Docs