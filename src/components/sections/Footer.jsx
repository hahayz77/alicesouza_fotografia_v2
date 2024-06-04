import Image from "next/image"
import Link from "next/link"
import { BsBehance, BsWhatsapp, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <footer className="grid place-content-center relative">
                <div className="footer_mandacaru_wrapper">
                    <Image className="pointer-events-none block mx-auto" src={"/img/mandacaru.png"} width={80} height={80} />
                </div>
                <div className="footer_links">
                    <Link href={"#"}><BsInstagram /></Link>
                    <Link href={"#"}><BsBehance /></Link>
                    <Link href={"#"}><BsWhatsapp /></Link>
                </div>
                <div className="footer_menu">
                    <Link href={"#"}>Home</Link>
                    <span>|</span>
                    <Link href={"#"}>Portfólio</Link>
                    <span>|</span>
                    <Link href={"#"}>Contato</Link>
                </div>
                <p className="text-center">Todos os Direitos Reservados. Alice Souza Fotografia.</p>
                <div id="footer_curve">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill"></path>
                    </svg>
                </div>
            </footer>
        </>
    )
}

export default Footer