import "./NavbarMobile.css"

{/* router */}
import { NavLink } from "react-router-dom"

{/* functions react */}
import { useEffect } from "react"

{/* components */}
import Overflow from "../Overflow/Overflow"

const NavbarMobile = () => {
  {/* open aside */}
  useEffect(() => {
    const aside = document.querySelector("[data-aside]") as HTMLDivElement;
    const overflow = document.querySelector("[data-overflow]") as HTMLDivElement;
    const open_aside = document.querySelector("[data-open-aside]") as HTMLButtonElement;

    const openAside = () => {
      aside.classList.add("active");
      overflow.classList.add("active");
    };
    open_aside.addEventListener("click", openAside);

    const closeAside = () => {
      aside.classList.remove("active");
      overflow.classList.remove("active");
    };
    overflow.addEventListener("click", closeAside);

    return (() => {
      open_aside.removeEventListener("click", openAside);
      overflow.removeEventListener("click", closeAside);
    });
  }, []);

  {/* open lang box */}
  useEffect(() => {
    const lang_box = document.querySelector("[data-lang-box]") as HTMLDivElement;
    const close_lang_box = document.querySelector("[data-close-lang-box]") as HTMLButtonElement;
    const open_lang_box = document.querySelector("[data-open-lang-box]") as HTMLButtonElement;

    const openLangBox = () => { lang_box.classList.add("active"); };
    open_lang_box.addEventListener("click", openLangBox);

    const closeLangBox = () => { lang_box.classList.remove("active"); };
    close_lang_box.addEventListener("click", closeLangBox);

    return (() => {
      open_lang_box.removeEventListener("click", openLangBox);
      close_lang_box.removeEventListener("click", closeLangBox);
    });
  }, []);

  return (
    <>
      <nav className="navbar-mobile">
        <button className="navbar-link label-large" data-open-aside>
          <i className="fa-solid fa-bars"></i>
        </button>

        <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link-home active label-large" : "navbar-link-home label-large"}>
          <i className="fa-solid fa-home"></i>
        </NavLink>

        <button className="navbar-link label-large" data-open-lang-box>
          <i className="fa-solid fa-code"></i>
        </button>
      </nav>
    
      <Overflow />
    </>
  )
}

export default NavbarMobile