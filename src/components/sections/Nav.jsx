import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { HiMenu } from 'react-icons/hi';

const Nav = () => {

    const pathname = usePathname();

    return (
        <>
            {pathname.slice(0, 7) !== "/studio" ?
                (<nav id="nav">
                    <Link href={"#"} className="icon_container">
                        <HiMenu style={{ color: '#ffffff', fontSize: '1.8rem' }} />
                    </Link>
                    <Link href={"/"} className="logo_container">
                        <figure> <Image height={100} width={170} src={"/img/logo.png"} alt="logo" /> </figure>
                    </Link>
                </nav>)
                :
                null
            }
        </>
    )
}

export default Nav