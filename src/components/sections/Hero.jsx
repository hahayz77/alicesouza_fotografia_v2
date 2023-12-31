import { urlForImage } from "../../../sanity/lib/image";
import Header from "../Header";


const Hero = ({ hero }) => {

    const { description, image, opacity } = hero[0];
    
    return (
        <>
            <div id="hero">
                <Header id="copy" >{description}</Header>
                <div id="hero_img" style={{ backgroundImage: `linear-gradient(to top, rgba(45, 45, 45, ${opacity}), rgba(45, 45, 45, ${opacity})), url(${urlForImage(image).url()})` }}></div>
                <div id="hero_curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Hero