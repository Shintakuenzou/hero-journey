"use client";

import { APIDataprops } from "./HeroCards";

import Image from "next/image";

import { Card, CardFooter, CardBody } from "@nextui-org/react";
import { GiAncientSword } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "@/context/ContextProvider";

interface HeroCardContentProps {
  datas: APIDataprops[];
}

export function HeroCardContent({ datas }: HeroCardContentProps) {
  const { filterHeros, selectedHeroCard, setSelectedHeroCard, setIsOpen } = useContext(GlobalContext);

  function handelePressGetCardData(id: number) {
    const newArr: APIDataprops[] = datas.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });

    if (selectedHeroCard.length < 2) {
      setSelectedHeroCard((prevState: APIDataprops[]) => {
        const vaerify = prevState.some((item) => item.id === id);
        if (vaerify) {
          return [...prevState];
        }
        return [...prevState, newArr[0]];
      });
    } else {
      console.log("O array já contém dois elementos.");
    }
  }

  const IDs = selectedHeroCard.map((item) => item.id);

  return (
    <>
      {datas.map((dataFiltered) => {
        const totalPower =
          dataFiltered.powerstats.combat +
          dataFiltered.powerstats.durability +
          dataFiltered.powerstats.intelligence +
          dataFiltered.powerstats.power +
          dataFiltered.powerstats.speed +
          dataFiltered.powerstats.strength;
        return dataFiltered.name.toLowerCase().includes(filterHeros.toLowerCase()) ||
          dataFiltered.name.toUpperCase().includes(filterHeros.toUpperCase()) ? (
          <Card
            key={dataFiltered.id}
            isPressable
            onPress={() => handelePressGetCardData(dataFiltered.id)}
            data-success={IDs.some((item) => item === dataFiltered.id)}
            className="data-[success=true]:border-2 data-[success=true]:border-red-600"
          >
            <CardBody className="overflow-visible p-0">
              <Image src={dataFiltered.images.lg} width={200} height={200} alt="" />
            </CardBody>

            <CardFooter className="text-slate-800 flex flex-col justify-center items-center">
              <b>{dataFiltered.name}</b>

              <div className="flex items-center justify-center">
                <GiAncientSword />
                <span>{totalPower}</span>
              </div>
            </CardFooter>
          </Card>
        ) : null;
      })}
    </>
  );
}
