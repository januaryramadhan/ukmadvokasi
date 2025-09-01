import Hero from "@/components/section/hero";
import VisiMisi from "@/components/section/visi-misi";
import ProgramTerdekat from "@/components/section/program-terdekat";
import PengurusSection from "@/components/section/pengurus-section";
import KontakSection from "@/components/section/kontak-section";

export default function Home() {
  return (
    <>
      <Hero />
      <VisiMisi />
      <ProgramTerdekat />
      <PengurusSection />
      <KontakSection />
    </>
  );
}
