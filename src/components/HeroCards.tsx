import { HeroCardContent } from "./HeroCardContent";

export interface APIDataprops {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: "Male";
    race: "Human";
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export async function HeroCards() {
  const datas: APIDataprops[] = await fetch(`http://homologacao3.azapfy.com.br/api/ps/metahumans?limit=12`, {
    method: "GET",
  }).then((response) => response.json());

  return (
    <div className="flex flex-wrap justify-center items-center gap-5 mt-5">
      <HeroCardContent datas={datas.slice(0, 35)} />
    </div>
  );
}
