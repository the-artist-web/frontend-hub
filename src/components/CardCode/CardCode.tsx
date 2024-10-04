import "./CardCode.css"

{/* type data props */}
type DataTypeProps = {
  image: string,
  alt: string,
  name: string,
  description: string,
  code: string
};

const CardCode = (props: DataTypeProps) => {
  return (
    <div className="card-code">
      <div className="card-title">
          <img
              src={props.image}
              alt={props.alt}
              loading="lazy"
              className="img-title img-cover"
          />

          <div className="title-body">
              <p className="name label-medium">{props.name}</p>
              <p className="frontend label-small">frontend</p>
          </div>
      </div>

      <div className="card-body">
          <p className="description-lang label-small" dangerouslySetInnerHTML={{ __html: props.description }} />
          <h2 className="code label-medium"  dangerouslySetInnerHTML={{ __html: props.code }} />
      </div>
    </div>
  )
}

export default CardCode