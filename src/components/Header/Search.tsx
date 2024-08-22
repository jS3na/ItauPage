import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image';

export function Search() {
    return (
        <div className="flex items-center gap-4 pr-6">
            <Image src={IconSearch} alt="Search Icon" />
            <input placeholder="Buscar" type="text" className="bg-transparent outline-none text-white placeholder-white"/>
        </div>
    );
}