import { Albert_Sans } from 'next/font/google'

const albertSans = Albert_Sans({ subsets: ['latin'], weight: ['200', '400', '700'] })

const Header = ({ children, id }) => {
    return (
        <>
            <h1 className={`${albertSans.className} ${id === "copy" ? "font-extralight" : "title"} text-center`}> {children} </h1>
        </>
    )
}

export default Header