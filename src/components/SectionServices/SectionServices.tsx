import Image from "next/image";
import { Container } from "../SectionHero/Container";

import IconPhone from '@/assets/icon-phone.svg';
import IconSolution from '@/assets/icon-solutions.svg';
import IconOptions from '@/assets/icon-options.svg';
import IconCard from '@/assets/icon-card.svg'

import ImagePhone from '@/assets/phone.png'

import { CardItem } from "./CardItem";

export function SectionServices() {
    return (
        <section className="relative w-full h-[965px]">

            <Container>
                <div className="flex-1 max-w-[594px] pt-32">
                    <span className="block text-primary-orange text-sm font-bold uppercase mb-9">Serviços exclusivos</span>
                    <h2 className="text-primary-gray text-[56px] font-bold leading-tight mb-6">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-lg max-w-[554px] mb-16 text-second-gray">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor,
                        no conforto da sua casa.
                    </p>

                    <ul className="flex flex-col items-start gap-9">
                        <CardItem
                            title="Acompanhar sua conta, fazer transferências e pagamentos de onde estiver"
                            icon={IconPhone}
                            alt="Phone Icon"
                        />
                        <CardItem
                            title="Soluções de empréstimos e renegociação para organizar suas finanças"
                            icon={IconSolution}
                            alt="Solution Icon"
                        />
                        <CardItem
                            title="Diversas opções de investimentos, de acordo com o seu perfil de investidor."
                            icon={IconOptions}
                            alt="Options Icon"
                        />
                        <CardItem
                            title="Acompanhe a fatura do seu cartão de crédito e faça compras online com seu cartão"
                            icon={IconCard}
                            alt="Card Icon"
                        />
                    </ul>
                </div>
            </Container>

            <div className="absolute top-0 right-0 flex items-center h-full w-[32%] bg-gray-phone ">
                <Image src={ImagePhone} alt="Image Phone" className="translate-x-[-50%]"/>
            </div>

        </section>
    );
}