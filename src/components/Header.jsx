const Header = ({ children, id }) => {
    return (
        <>
            {id === "copy" ?
                <header><h1> {children} </h1></header>
                :
                <header><h2> {children} </h2></header>
            }
        </>
    )
}

export default Header