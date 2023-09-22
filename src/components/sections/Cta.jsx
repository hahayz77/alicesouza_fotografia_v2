import Link from "next/link"
import Header from "../Header"

const Cta = ({cta}) => {

    const { title, button } = cta[0];

    return (
        <>
            <section id="cta">
                <Header>{title}</Header>
                <Link href={"#"}><button className="cta_button">{button}</button></Link>
            </section>
        </>
    )
}

export default Cta