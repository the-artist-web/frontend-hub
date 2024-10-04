import "./About.css"

{/* image bg about */}
import bg_about from "../../assets/image/bg-about.jpg"
import the_artist_web from "../../assets/image/the artist web.jpg";

const HomeMe = () => {
  return (
    <div className="home-me">
        <figure>
            <img
                src={bg_about}
                alt="bg-about"
                loading="lazy"
                className="bg-ablout img-cover"
            />

            <img
                src={the_artist_web}
                alt="the artist web"
                loading="lazy"
                className="the-artist-web img-cover"
            />
        </figure>

        <div className="home-me-body">
            <div className="title-content">
                <div className="title-me">
                    <h1 className="the-artist-web-name display-small">شبكة الفنان</h1>
                    <p className="email label-medium">mohamedyasserxd449@gmail.com</p>
                </div>

                <a href="https://github.com/the-artist-web" target="_blank" className="btn-github label-medium">github me</a>
            </div>

            <p className="description label-small">
                مرحباً! أنا محمد ياسر
                عمري 17 سنة وبدأت البرمجة عندما كان عمري 15 سنة. أحب جميع المجالات التي تتضمن التصميم، ولكن من بينها اخترت البرمجة لأنها المجال الذي جذبني أكثر. قررت أن أتعلم وأطور مهاراتي فيها، وقد حققت بالفعل معظم ما أحتاج إليه، ولكنني ما زلت أهدف إلى تحسين نفسي أكثر. لن أتوقف هنا.
            </p>
        </div>
    </div>
  )
}

export default HomeMe