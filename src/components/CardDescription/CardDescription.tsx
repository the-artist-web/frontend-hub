import "./CardDescription.css"

{/* data type props */}
type DataTypeProps = {
  image: string,
  alt: string,
  name: string,
  description: string
};

const CardDescription = (props: DataTypeProps) => {
  return (
    <div className="card-description">
      <div className="header-card">
          <img
              src={props.image}
              alt={props.alt}
              loading="lazy"
              className="img-card img-cover"
          />

          <div className="header-body">
              <p className="name-lang label-medium">{props.name}</p>
              <p className="frontend label-small">frontend</p>
          </div>
      </div>

      <p className="description-lang label-small">{props.description}</p>
  </div>
  )
}

export default CardDescription