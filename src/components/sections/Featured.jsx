import Link from "next/link"
import Header from "../Header"
import { urlForImage } from "../../../sanity/lib/image"
import Image from "next/image"

const Featured = ({featured}) => {

    const {title, images} = featured[0];

    return (
        <>
        <section id="featured">
            <Header>{title}</Header>
            <div className="grid_imgs">
                {images?.map(({ _id, image, link }) => {
                    return (
                            <Link key={_id} href={link}> <Image width={1200} height={1200} src={urlForImage(image).url()} alt={link}/> </Link>
                    )
                })}
            </div>
        </section>
    </>
    )
}

export default Featured