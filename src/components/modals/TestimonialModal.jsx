import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import Image from "next/image"
import { urlForImage } from "../../../sanity/lib/image"

const TestimonialModal = ({ isOpen, onOpen, onOpenChange, content }) => {

    console.log(content)

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"xl"}
                classNames={{
                    backdrop: "bg-neutral-950/90 backdrop-opacity-90",
                    base: "border-neutral-800 bg-neutral-900 text-neutral-200",
                    body: "text-neutral-300 py-12 gap-[2rem] overflow-auto max-h-[80vh]",
                    header: "border-b-[1px] border-neutral-800",
                    closeButton: "hover:bg-red-700/50 border-none hover:text-red-200 transition-all duration-300 easy-in active:bg-white/10",
                }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex items-center gap-6">
                            <Image src={urlForImage(content.profile).url()} alt="print" width={50} height={50} className="bg-slate-950/30 rounded-full h-12 w-12 object-cover" objectFit="cover" objectPosition="center" />
                                {content.name}
                            </ModalHeader>
                            <ModalBody>
                                <div>
                                    <Image src={urlForImage(content.print).url()} alt="print" width={600} height={600} className="mx-auto bg-slate-950/30 rounded-md" objectFit="cover" objectPosition="center" />
                                </div>
                                <p>
                                    {content.text}
                                </p>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default TestimonialModal