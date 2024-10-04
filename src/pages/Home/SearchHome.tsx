import "./Home.css"

{/* img logo */}
import imgLogo from "/image/the artist web.jpg"

{/* router */}
import { useLocation } from "react-router-dom"

{/* functions react */}
import { useEffect } from "react"

{/* components */}
import Searchbar from "../../components/Searchbar/Searchbar"

const SearchHome = () => {
    const location = useLocation();

    {/* open aside */}
    useEffect(() => {
        const searchbar = document.querySelector("[data-searchbar]") as HTMLDivElement;
        const open_searchbar = document.querySelector("[data-open-searchbar]") as HTMLInputElement;
        const close_searchbar = document.querySelector("[data-close-searchbar]") as HTMLButtonElement;
        const overflow = document.querySelector("[data-overflow]") as HTMLDivElement;

        const openSearchbar = () => { 
            searchbar.classList.add("active");
            overflow.classList.add("active");
        };
        open_searchbar.addEventListener("focus", openSearchbar);

        const closeSearchbar = () => { 
            searchbar.classList.remove("active");
            overflow.classList.remove("active");
        };
        close_searchbar.addEventListener("click", closeSearchbar);

        const closeSearchbarOverflow = () => { 
            searchbar.classList.remove("active");
            overflow.classList.remove("active");
        };
        overflow.addEventListener("click", closeSearchbarOverflow);

        return (() => {
            open_searchbar.removeEventListener("focus", openSearchbar);
            close_searchbar.removeEventListener("click", closeSearchbar);
            overflow.removeEventListener("click", closeSearchbarOverflow);
        });
    }, [location]);

    return (
        <>
            <div className="search-home">
                <div className="input-box">
                    <img
                        src={imgLogo}
                        alt="the artist web"
                        loading="lazy"
                        className="img-input-box img-cover"
                    />

                    <input
                        type="text"
                        placeholder="انا هنا لمساعدتك"
                        className="input-home label-large"
                        data-open-searchbar
                    />
                </div>

                <button className="button-search label-medium">بحث</button>
            </div>

            <Searchbar />
        </>
    )
}

export default SearchHome