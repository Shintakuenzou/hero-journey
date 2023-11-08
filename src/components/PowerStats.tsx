"use client";

import { useState, useEffect } from "react";

interface HeroProps {
  status: "intelligence" | "combat" | "durability" | "power" | "speed" | "strength";
  index: number;
  selectedHeroCard: APIDataprops[];
}

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { APIDataprops } from "./HeroCards";

export default function PowerStats({ index, status, selectedHeroCard }: HeroProps) {
  return;
}
