import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { urlForImage } from "../../sanity/lib/image";

export default function CardComponent({ name, print, profile, text, mandacaru }) {
    return (
        <>
            <Card className={`testimonial_card ${mandacaru ? null : "scale-80"}`}>
                {mandacaru &&
                    <figure className="testimonial_mandacaru">
                        <Image alt="Card background" src="/img/mandacaru.png" width={100} />
                    </figure>}
                <CardHeader className="card_header">
                    <RiDoubleQuotesL className="quotes" />
                    <h4>{name}</h4>
                </CardHeader>
                <CardBody className="card_body">
                    <p>{text.length > 150 ? text.slice(0, 150) + "..." : text}</p>
                    <br /> <hr /> <br />
                    <p className="p_link" onClick={() => { }}>Ver depoimento completo</p>
                </CardBody>
                <figure className="testimonial_profile">
                    <Image alt="Card background" src={urlForImage(profile).url()} width={100} />
                </figure>

            </Card>
        </>
    );
}
