import "./Home.css"

{/* functions react */}
import { useEffect } from "react"

{/* element element home */}
import SearchHome from "./SearchHome";
import CardList from "./CardList";

export const Home = () => {
    {/* title page */}
    useEffect(() => {
        document.title = "شبكة الفنان";
    }, []);

    return (
        <>
            
            <SearchHome />
            <CardList />
        </>
    )
}

export default Home