import Image from "next/image";

type Props = {
    title: string;
    icon: string;
    alt: string;
}

export function CardItem({ title, icon, alt }: Props) {
    return (
        <li className="flex items-center gap-9 pb-9 border-b-[1px] border-opacity-gray">
            <div className="w-7 h-7 flex items-center justify-center">
                <Image src={icon} alt={alt} />
            </div>
            <p className="flex-1 text-txt-gray pr-2">{title}</p>
        </li>
    );
}