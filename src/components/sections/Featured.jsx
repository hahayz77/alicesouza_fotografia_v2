import Link from "next/link"
import Header from "../Header"
import { urlForImage } from "../../../sanity/lib/image"
import Image from "next/image"

const Featured = ({featured}) => {

    return (
        <>
        <section id="featured">
            <Header>Destaques</Header>
            <div className="grid_imgs mb-32">
                {featured?.sort((a,b)=> a.order - b.order).map(({ _id, image, link }) => {
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