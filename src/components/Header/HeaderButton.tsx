import Image from "next/image";
import Arrow from '@/assets/arrow-down.svg'

type Props = {
    title: string;
}

export function HeaderButton({ title }: Props
) {
    return (
        <button className="flex items-center gap-3">
            <span className="text-white font-bold">{title}</span>
            <Image src={Arrow} alt="Arrow Down" />
        </button>
    );
}