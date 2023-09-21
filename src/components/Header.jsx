import { Albert_Sans } from 'next/font/google'

const albertSans = Albert_Sans({ subsets: ['latin'], weight: ['200', '400', '700'] })

const Header = ({ children, id }) => {
    return (
        <>
            {id === "copy" ?
                <header><h1 className={`${albertSans.className}`}> {children} </h1></header>
                :
                <header><h2 className={`${albertSans.className}`}> {children} </h2></header>
            }
        </>
    )
}

export default Header