import "./Home.css"

{/* functions react */}
import { useEffect, useState } from "react"

{/* components */}
import SkeletonCircle from "../../components/SkeletonCircle/SkeletonCircle"
import CardDescription from "../../components/CardDescription/CardDescription"

{/* DataType */}
type DataType = {
    image: string,
    titlePage: string,
    textContent: string
};

const CardList = () => {
    const [data, setData] = useState<DataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [visibleCount, setVisibleCount] = useState(4);

    {/* get fetch data */}
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("/frontend-hub/data.json");
                const data = await res.json();
                setData(data.slice(0, 11));
                setLoading(false);
            } catch (error) {
                console.error("Error Fetch Data In Card List", error);
                setLoading(false);
            };
        };
    
        fetchData();
    }, []);

    {/* get load More Items */}
    const loadMoreItems = () => {
        setVisibleCount((prevCount) => prevCount + 4);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
                loadMoreItems();
            };
        };

        window.addEventListener('scroll', handleScroll);

        return () => { window.removeEventListener('scroll', handleScroll); };
    }, [visibleCount]);

    return (
        <div className="card-list">
           {loading ? (
                <SkeletonCircle />
            ) : (
                data.slice(0, visibleCount).map((ele, index) => (
                    <CardDescription 
                        key={index} 
                        image={ele.image} 
                        alt={ele.titlePage} 
                        name={ele.titlePage} 
                        description={ele.textContent} 
                    />
                ))
            )}
        </div>
    )
}

export default CardList