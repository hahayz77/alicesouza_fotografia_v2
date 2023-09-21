import Link from "next/link"

const SanityError = ({ message }) => {
    return (
        <>
            <div className="fixed inset-0 w-screen min-h-screen z-30 grid place-content-center bg-black">
                <h2 className="text-center text-3xl">{message}</h2>
                <Link className="text-center text-xl text-blue-300" href={"/studio"}>Sanity Studio</Link>
            </div>

        </>
    )
}

export default SanityError