"use client";

import { GlobalContext } from "@/context/ContextProvider";
import { Button } from "@nextui-org/react";
import { useContext } from "react";

interface ButtonTypesProps {
  children: React.ReactNode;
  color: "primary" | "secondary" | "success" | "warning" | "danger";
  variant: "shadow" | "solid" | "ghost";
}

export function ButtonTypes({ children }: ButtonTypesProps) {
  const { selectedHeroCard, setSelectedHeroCard } = useContext(GlobalContext);

  function handleClearSelectedHeroCard() {
    setSelectedHeroCard([]);
  }

  return (
    <Button
      color="primary"
      variant="shadow"
      className="w-60 data-[success=true]:hidden"
      data-success={selectedHeroCard.length === 0}
      onClick={handleClearSelectedHeroCard}
    >
      {children}
    </Button>
  );
}
