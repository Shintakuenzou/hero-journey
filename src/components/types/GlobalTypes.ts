import { Dispatch, SetStateAction } from "react";
import { APIDataprops } from "../HeroCards";

export interface ConetxtProviderProps {
  children: React.ReactNode;
}

export interface GlobalContextProps {
  filterHeros: string;
  setFilterHeros: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedHeroCard: APIDataprops[];
  setSelectedHeroCard: Dispatch<SetStateAction<APIDataprops[]>>;
}
