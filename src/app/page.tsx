import { Provider } from "@/components/Provider";
import { Header } from "@/components/Header";
import { HeroCards } from "@/components/HeroCards";
import { HeroBattleModal } from "@/components/HeroBattleModal";
import { ButtonTypes } from "@/components/ButtonTypes";

import { BsInfoCircle } from "react-icons/bs";

export default function Home() {
  return (
    <Provider>
      <Header />

      <div className="flex justify-center items-center gap-1 max-sm:flex-col max-sm:items-center">
        <p className="text-slate-300 max-sm:text-center max-sm:text-xs">
          <BsInfoCircle className="text-slate-300" />
          Selecione duas cartas de heróis para começar o combate!
        </p>
      </div>

      <div className="flex justify-center items-center pt-5 pb-0 gap-5 max-sm:flex-col">
        <HeroBattleModal />
        <ButtonTypes color="primary" variant="shadow">
          Limpar Seleção
        </ButtonTypes>
      </div>
      <main className="flex flex-wrap p-10 justify-center gap-1">
        <HeroCards />
      </main>
    </Provider>
  );
}
