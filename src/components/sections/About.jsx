import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Header from "../Header";

const About = ({ about }) => {
    
    const { title, description, image, opacity } = about[0];

    return (
        <>
            <section id="about" className="section" style={{ backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${image ? urlForImage(image).url() : "/img/a2.jpg"})` }}>
                <figure className="mandacaru_wrapper">
                    <Image width={120} height={120} src={"/img/mandacaru.png"} />
                </figure>
                <div className="title_container">
                    <Header>{title}</Header>
                </div>
                <hr className="about_line" />
                <div className="text_container">{description}</div>
            </section>
        </>
    )
}

export default About