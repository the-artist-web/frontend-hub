import "./Docs.css";

{/* router */}
import { useParams } from "react-router-dom";

{/* functions react */}
import { useEffect, useRef, useState } from "react";

{/* components */}
import SkeletonCircle from "../../components/SkeletonCircle/SkeletonCircle";
import CardCode from "../../components/CardCode/CardCode";

{/* DataType */}
type DataType = {
  image: string;
  titlePage: string;
  textContent: string;
  cardName: string;
  titleCard: string;
  description: string;
};

const BodyDocs = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [filterData, setFilterData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const searchRef = useRef<HTMLInputElement>(null);
  const params = useParams();

  {/* get url params */}
  const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
  const langParams: string | null = urlParams.get("search");
  const lang: string = langParams ? decodeURIComponent(langParams).toLowerCase() : "";

  {/* get fetch data */}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/data.json");
        const fetchedData = await res.json();

        setData(fetchedData);

        const filterParams = fetchedData.filter((ele: DataType) =>
          ele.titlePage.toLowerCase().includes(lang)
        );
        
        const allCards = filterParams.flatMap((ele: any) => ele.cards);
        setFilterData(allCards);

        setLoading(false);
      } catch (error) {
        console.error("Error Fetch Data In Card List", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [params, lang]);

  {/* get load More Items */}
  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleCount]);

  {/* search element */}
  const searchInCardCode = () => {
    const query = searchRef.current?.value;
    if (query) {
      const filtered: DataType[] = filterData.filter((ele: DataType) =>
        ele.titleCard.toLowerCase().includes(query.toLowerCase().trim())
      );
      setFilterData(filtered);
    } else {
      setFilterData(data.flatMap((ele: any) => ele.cards));
    }
  };

  return (
    <div className="body-docs">
      <div className="input-box">
        <input
          ref={searchRef}
          onKeyUp={searchInCardCode}
          type="text"
          placeholder="بحث في الاكواد"
          className="input-docs label-large"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="card-code-list">
        {loading ? (
          <SkeletonCircle />
        ) : (
          filterData.slice(0, visibleCount).map((ele, index) => (
            <CardCode
              key={index}
              image={ele.image}
              alt={ele.cardName}
              name={ele.cardName}
              description={ele.description}
              code={ele.titleCard}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BodyDocs;