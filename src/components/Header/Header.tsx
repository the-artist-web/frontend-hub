import "./Header.css"

{/* type data props */}
type DataTypeProps = {
    title: string
};

const Header = (props: DataTypeProps) => {
  return <header className="header label-large">
        <div className="container">
            {props.title}
        </div>
    </header>
}

export default Header