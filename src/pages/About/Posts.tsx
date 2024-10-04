import "./About.css"

{/* functions react */}
import { useEffect, useState } from "react"

{/* get image */}
import image from "../../assets/image/the artist web.jpg"

{/* skeleton circle */}
import SkeletonCircle from "../../components/SkeletonCircle/SkeletonCircle"

{/* type data */}
type DataType = {
  id: string,
  icon: string,
  image: string,
  name_me: string,
  web_developer: string,
  text_post: string
}

const Posts = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(4);

  {/* get fetch data */}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/posts.json");
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error Fetch Data In Posts", error);
        setLoading(false);
      };
    };

    fetchData();
  }, []);

  {/* get load more item */}
  const loadMoreItems = () => { setCurrentIndex((prevCurrent) => prevCurrent + 4); };

  useEffect(() => {
    const handelScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        loadMoreItems();
      };
    };

    window.addEventListener("scroll", handelScroll);

    return (() => { window.removeEventListener("scroll", handelScroll); });
  }, [currentIndex]);

  return (
    <div className="posts">
      {loading ? (
        <SkeletonCircle />
      ) : (
        data.slice(0, currentIndex).map((ele, index) => (
          <div className="card-post" key={index}>
            <div className="card-title">
              <img
                src={image}
                alt={ele.name_me}
                loading="lazy"
                className="img-title img-cover"
              />

              <div className="title-content">
                <p className="name label-medium">{ele.name_me}</p>
                <p className="email label-small">{ele.web_developer}</p>
              </div>
            </div>

            <p className="post-text label-medium">{ele.text_post}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default Posts