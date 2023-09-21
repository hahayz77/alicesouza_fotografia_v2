import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function CardComponent() {

    const testimonial = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quo adipisci qui quaerat accusantium eaque nihil, quisquam aspernatur suscipit quis! Quo voluptatum optio eos. Odio, ab! Maxime soluta similique repudiandae."

    return (
        <>
            <Card className="py-4 max-w-sm overflow-visible my-24">
                <figure className="object-cover w-full inset-0 bg-green-300 translate-y-[-3rem]">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-full object-center h-24 w-24 scale-125 absolute -bottom-6 left-0 translate-y-[50%] translate-x-[8.5rem] z-[0]"
                        src="/img/mandacaru.png"
                        width={100}
                    />
                </figure>
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start overflow-visible">
                    <h1 className="font-serif text-[10rem] translate-y-[-20%] absolute opacity-50 ">"</h1>
                    <h4 className="font-bold text-large text-center w-full my-6">Alice Souza</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 px-10 mb-12 text-justify">
                    <p>{testimonial.length > 150 ? testimonial.slice(0, 150) + "..." : testimonial}</p>
                    <br /> <hr className="w-[30%] mx-auto" /> <br />
                    <p className="text-center font-mono text-slate-500">Ver depoimento completo</p>
                </CardBody>
                <figure className="object-cover w-full inset-0 bg-green-300">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-full object-center h-24 w-24 scale-125 absolute -bottom-6 left-0 translate-y-[50%] translate-x-[8.5rem] z-[0]"
                        src="/img/a1.jpg"
                        width={100}
                    />
                </figure>

            </Card>
        </>
    );
}
