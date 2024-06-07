import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { HiMenu } from 'react-icons/hi';
import MenuMobile from "../MenuMobile";

const Nav = () => {

    const pathname = usePathname()
    const isStudioPath = () => pathname.includes('/studio')

    return (
        <>
            {!isStudioPath() &&
                <>
                    <nav id="nav">
                        <Link href={"#"} className="icon_container">
                            <HiMenu style={{ color: '#ffffff', fontSize: '1.8rem' }} />
                        </Link>
                        <Link href={"/"} className="logo_container">
                            <figure> <Image height={100} width={170} src={"/img/logo.png"} alt="logo" /> </figure>
                        </Link>
                    </nav>
                    {/* <MenuMobile /> */}
                </>
            }
        </>
    )
}

export default Nav