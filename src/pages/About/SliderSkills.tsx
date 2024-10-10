import "./About.css"

{/* functions react */}
import { useEffect, useState } from "react"

{/* skeleton card skill */}
const SkeletonCardSkill = () => {
  return <div className="skeleton-card-skill"></div>
};

{/* type data */}
type DataType = {
  image: string,
  titlePage: string
}

const SliderSkills = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoding] = useState<boolean>(true);

  {/* get fetch data */}
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/frontend-hub/data.json");
        const data = await res.json();
        setData(data.slice(0, 11));
        setLoding(false);
      } catch (error) {
        console.error("Error Fetch Data In Slider Skills");
        setLoding(false);
      };
    };

    fetchData();
  }, []);

  return (
    <div className="skills">
        <h1 className="headline title-medium">مهاراتي</h1>

        <div className="slider-skills">
          {loading ? (
            Array(13).fill(0).map((_,index) => <SkeletonCardSkill key={index} />)
          ) : (
            data.map((ele, index) => (
              <div className="card-skill" key={index}>
                <img
                  src={ele.image}
                  alt={ele.titlePage}
                  loading="lazy"
                  className="img-card img-cover"
                />

                <p className="name-skill label-medium">{ele.titlePage}</p>
              </div>
            ))
          )}
        </div>
    </div>
  )
}

export default SliderSkills