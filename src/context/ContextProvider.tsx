"use client";

import { createContext, useState } from "react";
import { APIDataprops } from "../components/HeroCards";
import { GlobalContextProps, ConetxtProviderProps } from "@/components/types/GlobalTypes";

export const GlobalContext = createContext<GlobalContextProps>({
  filterHeros: "",
  setFilterHeros: (value: string) => {},
  isOpen: false,
  setIsOpen: (value: boolean) => {},
  selectedHeroCard: [],
  setSelectedHeroCard: () => {},
});

export function ContextProvider({ children }: ConetxtProviderProps) {
  const [filterHeros, setFilterHeros] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHeroCard, setSelectedHeroCard] = useState<APIDataprops[]>([]);
  return (
    <GlobalContext.Provider
      value={{ filterHeros, setFilterHeros, isOpen, setIsOpen, selectedHeroCard, setSelectedHeroCard }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
