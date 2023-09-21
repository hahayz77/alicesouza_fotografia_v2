import Image from 'next/image';
import 'primeicons/primeicons.css';

const Loading = () => {

    return (
        <>
            <div className='grid place-content-center fixed inset-0 bg-black z-30'>
                <figure className='grid place-content-center absolute inset-0 z-40 animate-pulse'> <Image height={100} width={150} src={"/img/logo.png"} alt="logo" /> </figure>
                <div className="grid place-content-center absolute inset-0 bg-black z-30">
                    <i className="pi pi-spin pi-spinner" style={{ fontSize: '13rem', opacity: 0.1 }}></i>
                </div>
            </div>
        </>
    )
}

export default Loading  