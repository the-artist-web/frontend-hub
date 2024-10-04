import "./LangBox.css"

{/* router */}
import { Link, useLocation, useNavigate } from "react-router-dom"

{/* functions react */}
import { useEffect, useRef, useState } from "react"

{/* components */}
import SkeletonCircle from "../SkeletonCircle/SkeletonCircle"

{/* type data */}
type DataType = {
  image: string,
  titlePage: string,
  textContent: string
};

const LangBox = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterData, setFilterData] = useState<DataType[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  {/* get fetch api */}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/frontend-hub/data.json");
        const data = await res.json();
        setData(data.slice(0, 13));
        setFilterData(data.slice(0, 13));
        setLoading(false);
      } catch (error) {
        console.error("Error Fetch Data In Searchbar", error);
        setLoading(false);
      };
    };

    fetchData();
  }, [location]);

  {/* search element */}
  const searchInLangBox = () => {
    const query = searchRef.current?.value;
    if (query) {
      const filter: DataType[] = data.filter((ele: DataType) => { return ele.titlePage.toLowerCase().includes(query.toLowerCase().trim()); });
      setFilterData(filter);
    } else {
      setFilterData(data);
    };
  };

  {/* search go docs */}
  const searchGoDocs = (e: React.KeyboardEvent) => {
    const query = searchRef.current?.value;
    if (e.key === "Enter" && query) {
      navigate(`/docs?search=${query.toLowerCase().trim()}`)
    };
  };

  return (
    <div className="lang-box" data-lang-box>
      <div className="input-lang-box">
        <div className="input-box">
          <input 
            ref={searchRef}
            onKeyUp={searchInLangBox}
            onKeyDown={searchGoDocs}
            type="text"
            placeholder="بحث"
            className="input-search-lang-box label-medium"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <button className="close-lang-box label-large" data-close-lang-box>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="card-lang-list">
        {loading ? (
          <SkeletonCircle />
        ) : (
          filterData.map((ele, index) => (
            <Link to={`/docs?search=${ele.titlePage.toLowerCase().trim()}`} className="card-lang" key={index}>
              <div className="card-title">
                <img
                  src={ele.image}
                  alt={ele.titlePage}
                  loading="lazy"
                  className="img-card img-cover"
                />

                <div className="title-body">
                  <p className="name label-medium">{ele.titlePage}</p>
                  <p className="frontend label-small">frontend</p>
                </div>
              </div>

              <p className="description label-small">{ele.textContent}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default LangBox