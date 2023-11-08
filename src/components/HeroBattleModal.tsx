"use client";

import Image from "next/image";
import { useContext } from "react";

import { GlobalContext } from "@/context/ContextProvider";

import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";

import { GiAxeSword } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import { StatusLabels } from "./StatusLabels";

export function HeroBattleModal() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectedHeroCard } = useContext(GlobalContext);
  const totals = selectedHeroCard.map(
    (power) =>
      power.powerstats.combat +
      power.powerstats.durability +
      power.powerstats.intelligence +
      power.powerstats.power +
      power.powerstats.speed +
      power.powerstats.strength
  );

  function handleOpen() {
    onOpen();
  }

  return (
    <div
      className="flex items-center justify-center data-[success=true]:hidden"
      data-success={selectedHeroCard.length === 0}
    >
      <Button variant="shadow" color="danger" className="w-60 capitalize text-base" onPress={handleOpen}>
        Iniciar Batalha
        <GiAxeSword />
      </Button>

      <Modal size="2xl" backdrop="blur" isOpen={isOpen} onClose={onClose} className="h-[550px]">
        <>
          <ModalContent className="bg-slate-950">
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-slate-200 text-center px-5 py-1">
                  Batalha
                  <p className="text-lg flex justify-between items-center">
                    {totals.map((total, index) => (
                      <span key={index}>
                        {total === Math.max(...totals) ? (
                          <span className="text-green-500">WIN</span>
                        ) : (
                          <span className="text-red-500">LOSE</span>
                        )}
                      </span>
                    ))}
                  </p>
                </ModalHeader>
                <ModalBody className="flex flex-row justify-between">
                  {selectedHeroCard.map((hero, index) => {
                    return (
                      <main key={hero.id}>
                        <Image src={hero.images.lg} width={150} height={150} alt="" className="" />

                        <section className="flex flex-col gap-3.5 items-center pt-2">
                          <p className="flex flex-row items-center mt-[2.5px] text-slate-300">
                            {hero.powerstats.intelligence}
                            {index === 0 ? (
                              selectedHeroCard[0].powerstats.intelligence >
                              selectedHeroCard[1].powerstats.intelligence ? (
                                <IoIosArrowUp className="text-green-500" />
                              ) : (
                                <IoIosArrowDown className="text-red-500" />
                              )
                            ) : selectedHeroCard[1].powerstats.intelligence >
                              selectedHeroCard[0].powerstats.intelligence ? (
                              <IoIosArrowUp className="text-green-500" />
                            ) : (
                              <IoIosArrowDown className="text-red-500" />
                            )}
                          </p>
                          <p className="flex flex-row items-center mt-[2.5px] text-slate-300">
                            {hero.powerstats.combat}
                            {index === 0 ? (
                              selectedHeroCard[0].powerstats.combat > selectedHeroCard[1].powerstats.combat ? (
                                <IoIosArrowUp className="text-green-500" />
                              ) : (
                                <IoIosArrowDown className="text-red-500" />
                              )
                            ) : selectedHeroCard[1].powerstats.combat > selectedHeroCard[0].powerstats.combat ? (
                              <IoIosArrowUp className="text-green-500" />
                            ) : (
                              <IoIosArrowDown className="text-red-500" />
                            )}
                          </p>

                          <p className="flex flex-row items-center mt-[2.5px] text-slate-300">
                            {hero.powerstats.durability}
                            {index === 0 ? (
                              selectedHeroCard[0].powerstats.durability >
                              selectedHeroCard[1].powerstats.durability ? (
                                <IoIosArrowUp className="text-green-500" />
                              ) : (
                                <IoIosArrowDown className="text-red-500" />
                              )
                            ) : selectedHeroCard[1].powerstats.durability >
                              selectedHeroCard[0].powerstats.durability ? (
                              <IoIosArrowUp className="text-green-500" />
                            ) : (
                              <IoIosArrowDown className="text-red-500" />
                            )}
                          </p>
                          <p className="flex flex-row items-center mt-[2.5px] text-slate-300">
                            {hero.powerstats.power}
                            {index === 0 ? (
                              selectedHeroCard[0].powerstats.power > selectedHeroCard[1].powerstats.power ? (
                                <IoIosArrowUp className="text-green-500" />
                              ) : (
                                <IoIosArrowDown className="text-red-500" />
                              )
                            ) : selectedHeroCard[1].powerstats.power > selectedHeroCard[0].powerstats.power ? (
                              <IoIosArrowUp className="text-green-500" />
                            ) : (
                              <IoIosArrowDown className="text-red-500" />
                            )}
                          </p>
                          <p className="flex flex-row items-center mt-[2.5px] text-slate-300">
                            {hero.powerstats.speed}
                            {index === 0 ? (
                              selectedHeroCard[0].powerstats.speed > selectedHeroCard[1].powerstats.speed ? (
                                <IoIosArrowUp className="text-green-500" />
                              ) : (
                                <IoIosArrowDown className="text-red-500" />
                              )
                            ) : selectedHeroCard[1].powerstats.speed > selectedHeroCard[0].powerstats.speed ? (
                              <IoIosArrowUp className="text-green-500" />
                            ) : (
                              <IoIosArrowDown className="text-red-500" />
                            )}
                          </p>
                          <p className="flex flex-row items-center mt-[2.5px] text-slate-300">
                            {hero.powerstats.strength}
                            {index === 0 ? (
                              selectedHeroCard[0].powerstats.strength > selectedHeroCard[1].powerstats.strength ? (
                                <IoIosArrowUp className="text-green-500" />
                              ) : (
                                <IoIosArrowDown className="text-red-500" />
                              )
                            ) : selectedHeroCard[1].powerstats.strength >
                              selectedHeroCard[0].powerstats.strength ? (
                              <IoIosArrowUp className="text-green-500" />
                            ) : (
                              <IoIosArrowDown className="text-red-500" />
                            )}
                          </p>
                        </section>
                      </main>
                    );
                  })}

                  <div className="flex flex-col gap-2.5 items-center absolute left-2/4 -translate-x-2/4 top-2/4">
                    <StatusLabels />
                  </div>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </>
      </Modal>
    </div>
  );
}
