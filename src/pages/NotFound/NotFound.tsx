import "./NotFound.css"

{/* functions react */}
import { useEffect } from "react"

const NotFound = () => {
    {/* title page */}
    useEffect(() => {
        document.title = "هذة الصفحة غير موجودة";
    }, []);

    return <div className="not-found">
        <h1 className="error-404 headline-small">404</h1>
        <p className="not-found-text label-large">هذة الصفحة غير موجودة</p>
    </div>
}

export default NotFound