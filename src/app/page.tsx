import { SectionHero } from "@/components/SectionHero/SectionHero";
import { SectionServices } from "@/components/SectionServices/SectionServices";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionHero />
      <SectionServices />
    </>
  );
}
