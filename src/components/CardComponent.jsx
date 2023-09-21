import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { urlForImage } from "../../sanity/lib/image";

export default function CardComponent({ name, print, profile, text, mandacaru }) {
    return (
        <>
            <Card className={`py-4 max-w-sm overflow-visible my-24 ${mandacaru ? null : "scale-80" }`}>
                {mandacaru && <figure className="object-cover w-full top-0 right-0 bg-green-300 translate-y-[-2rem] translate-x-[40%]">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-full object-center h-24 w-24 scale-125 absolute -bottom-6 left-0 translate-y-[50%] translate-x-[8.5rem] z-[0]"
                        src="/img/mandacaru.png"
                        width={100}
                    />
                </figure>}
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start overflow-visible">
                    <RiDoubleQuotesL className="font-serif text-[8rem] translate-y-[-20%] absolute opacity-20" />
                    <h4 className="font-bold text-large text-center w-full my-6">{name}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-10 mb-12 text-justify">
                    <p>{text.length > 150 ? text.slice(0, 150) + "..." : text}</p>
                    <br /> <hr className="w-[30%] mx-auto" /> <br />
                    <p className="text-center font-light text-slate-500 cursor-pointer" onClick={() => { }}>Ver depoimento completo</p>
                </CardBody>
                <figure className="object-cover w-full inset-0">
                    <Image alt="Card background" src={urlForImage(profile).url()} width={100}
                        className="object-cover rounded-full object-center h-24 w-24 scale-125 absolute -bottom-6 left-0 translate-y-[50%] translate-x-[8.5rem] z-[0] border-1 border-slate-400" />
                </figure>

            </Card>
        </>
    );
}
