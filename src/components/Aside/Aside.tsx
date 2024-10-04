import { useEffect } from "react"
import "./Aside.css"

{/* router */}
import { Link, NavLink } from "react-router-dom"

const Aside = () => {
  {/* theme mood */}
  useEffect(() => {
    const theme_light = document.querySelector("[data-theme-light]") as HTMLButtonElement;
    const theme_dark = document.querySelector("[data-theme-dark]") as HTMLButtonElement;
    const HTML = document.documentElement as HTMLHtmlElement;

    // localStorage
    if (localStorage.length !== 0) {
      if (localStorage.HTML) HTML.dataset.theme = localStorage.HTML;
      if (localStorage.theme_light) theme_light.classList.add(localStorage.theme_light);
      if (localStorage.theme_dark) theme_dark.classList.add(localStorage.theme_dark);
    };

    const themeLight = () => {
      HTML.dataset.theme = "light";
      theme_light.classList.add("active");
      theme_dark.classList.add("active");

      // localStorage
      localStorage.setItem("HTML", "light");
      localStorage.setItem("theme_light", "active");
      localStorage.setItem("theme_dark", "active");
    };
    theme_light.addEventListener("click", themeLight);

    const themeDark = () => {
      HTML.dataset.theme = "dark";
      theme_light.classList.remove("active");
      theme_dark.classList.remove("active");

      // localStorage
      localStorage.setItem("HTML", "dark");
      localStorage.setItem("theme_light", "");
      localStorage.setItem("theme_dark", "");
    };
    theme_dark.addEventListener("click", themeDark);

    return (() => {
      theme_light.removeEventListener("click", themeLight);
      theme_dark.removeEventListener("click", themeDark);
    });
  }, []);

  return (
    <aside className="aside" data-aside>
      <Link to="/" className="logo">شبكة الفنان</Link>

      <div className="aside-list">
        <NavLink to="/" className={({ isActive }) => isActive ? "aside-link active label-medium" : "aside-link label-medium"}>
          <i className="fa-solid fa-home"></i>

          الصفحة الرئيسية
        </NavLink>

        <NavLink to="/docs?search=html" className={({ isActive }) => isActive ? "aside-link active label-medium" : "aside-link label-medium"}>
          <i className="fa-solid fa-file"></i>

          مستندات
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => isActive ? "aside-link active label-medium" : "aside-link label-medium"}>
          <i className="fa-solid fa-user"></i>

          من انا
        </NavLink>
      </div>

      <p className="title-aside">مواقع التواصل</p>

      <div className="aside-list">
        <a target="_blank" href="https://www.linkedin.com/in/mohamed-yasser-2706252aa/" rel='noopener noreferrer' className="aside-link label-medium">
          <i className="fa-brands fa-linkedin-in"></i>

          linkedin
        </a>

        <a target="_blank" href="https://wa.me/message/YEX6SYAH54GFC1" rel='noopener noreferrer' className="aside-link label-medium">
          <i className="fa-brands fa-whatsapp"></i>

          whatsapp
        </a>

        <a target="_blank" href="https://www.instagram.com/the_artists_web" rel='noopener noreferrer' className="aside-link label-medium">
          <i className="fa-brands fa-instagram"></i>

          instagram
        </a>
        
        <a target="_blank" href="https://www.youtube.com/@theartistweb" rel='noopener noreferrer' className="aside-link label-medium">
          <i className="fa-brands fa-youtube"></i>

          youtube
        </a>

        <a target="_blank" href="https://www.facebook.com/profile.php?id=100013677881896" rel='noopener noreferrer' className="aside-link label-medium">
          <i className="fa-brands fa-square-facebook"></i>

          facebook
        </a>
      </div>

      <p className="title-aside">ادوات مساعدة</p>

      <div className="aside-list">
        <Link to="/docs?search=الصفحات الرئيسية" className="aside-link label-medium">
          <i className="fa-solid fa-clipboard"></i>

          الصفحات الرئيسية
        </Link>

        <Link to="/docs?search=فاجوال ستوديو" className="aside-link label-medium">
          <i className="fa-solid fa-code"></i>

          فاجوال ستوديو
        </Link>

        <Link to="/docs?search=احجام الاجهزة" className="aside-link label-medium">
          <i className="fa-solid fa-desktop"></i>

          احجام الاجهزة
        </Link>

        <Link to="/docs?search=مواقع مساعدة" className="aside-link label-medium">
          <i className="fa-solid fa-question-circle"></i>

          مواقع مساعدة
        </Link>
      </div>

      <button className="btn-mood theme-light label-medium" data-theme-light>
        الوضع النهاري
      </button>

      <button className="btn-mood theme-dark label-medium" data-theme-dark>
        الوضع الليلي
      </button>
    </aside>
  )
}

export default Aside