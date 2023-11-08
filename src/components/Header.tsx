"use client";

import { ChangeEvent, useContext, useState } from "react";
import { Input } from "@nextui-org/input";
import { GlobalContext } from "@/context/ContextProvider";

export function Header() {
  const { filterHeros, setFilterHeros } = useContext(GlobalContext);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setFilterHeros(e.target.value);
  }

  return (
    <header className="flex justify-center items-center p-10">
      <Input
        type="text"
        variant="underlined"
        placeholder="Pesquisar herói"
        className="text-slate-300 text-lg"
        onChange={(e) => handleChange(e)}
        value={filterHeros}
      />
    </header>
  );
}
