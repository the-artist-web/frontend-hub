import "./Searchbar.css"

{/* router */}
import { Link, useLocation, useNavigate } from "react-router-dom"

{/* functions react */}
import React, { useEffect, useRef, useState } from "react"

{/* components */}
import SkeletonCircle from "../SkeletonCircle/SkeletonCircle"

{/* data type */}
type DataType = {
  image: string,
  titlePage: string
};

const Searchbar = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filterData, setFilterData] = useState<DataType[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  {/* get fetch data */}
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
  const searchInSearchbar = () => {
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
    <div className="searchbar" data-searchbar>
      <div className="header">
        <div className="input-searchbar-box">
          <input
            ref={searchRef}
            onKeyUp={searchInSearchbar}
            onKeyDown={searchGoDocs}
            type="text"
            placeholder="بحث..."
            className="input-searchbar label-medium"
          />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        <button className="close-searchbar label-large" data-close-searchbar>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="searchbar-list">
        {loading ? (
          <SkeletonCircle />
        ) : (
          filterData.map((ele, index) => (
            <Link to={`/docs?search=${ele.titlePage.toLowerCase().trim()}`} className="card-searchbar" key={index}>
              <img
                src={ele.image}
                alt={ele.titlePage}
                loading="lazy"
                className="img-card img-cover"
              />

              <div className="card-body">
                <p className="name label-medium">{ele.titlePage}</p>
                <p className="frontend label-small">frontend</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}

export default Searchbar