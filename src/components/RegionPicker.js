import React, { useState } from "react";

const regions = [
  {
    name: "Demacia",
    champion: [
      "Fiora",
      "Galio",
      "Garen",
      "Jarvan IV",
      "Kayle",
      "Lux",
      "Morgana",
      "Poppy",
      "Quinn",
      "Shyvana",
      "Sylas",
      "Vayne",
      "Xin Zhao",
    ],
  },
  {
    name: "Noxus",
    champion: [
      "Cassiopeia, Darius",
      "Draven",
      "Katarina",
      "Kled",
      "LeBlanc",
      "Mordekaiser",
      "Riven",
      "Samira",
      "Sion",
      "Swain",
      "Talon",
      "Vladimir",
    ],
  },
  {
    name: "Ionia",
    champion: [
      "Ahri",
      "Akali",
      "Irelia",
      "Ivern",
      "Jhin",
      "Karma",
      "Kayn",
      "Kennen",
      "Lee Sin",
      "Lillia",
      "Master Yi",
      "Wukong",
      "Rakan",
      "Sett",
      "Shen",
      "Syndra",
      "Varus",
      "Xayah",
      "Yasuo",
      "Yone",
      "Zed",
    ],
  },
  {
    name: "Freljord",
    champion: [
      "Anivia",
      "Ashe",
      "Braum",
      "Gnar",
      "Gragas",
      "Lissandra",
      "Nunu",
      "Olaf",
      "Ornn",
      "Sejuani",
      "Trundle",
      "Tryndamere",
      "Udyr",
      "Volibear",
    ],
  },
  {
    name: "Bandópolis",
    champion: [
      "Corki",
      "Lulu",
      "Rumble",
      "Teemo",
      "Tristana",
      "Veigar",
      "Yuumi",
    ],
  },
  {
    name: "Zaun",
    champion: [
      "Blitzcrank",
      "Dr.Mundo",
      "Ekko",
      "Janna",
      "Jinx",
      "Renata Glasc",
      "Singed",
      "Twitch",
      "Urgot",
      "Viktor",
      "Warwick",
      "Zac",
      "Ziggs",
      "Zeri",
    ],
  },
  {
    name: "Piltover",
    champion: [
      "Caitlyn",
      "Camille",
      "Ezreal",
      "Heimerdinger1",
      "Jayce",
      "Orianna",
      "Seraphine",
      "Vi",
    ],
  },
  {
    name: "Ilha das Sombras",
    champion: [
      "Elise",
      "Gwen",
      "Hecarim",
      "Kalista",
      "Karthus",
      "Maokai",
      "Thresh",
      "Vex",
      "Viego",
      "Yorick",
    ],
  },
  {
    name: "Ixtal",
    champion: [
      "Malphite",
      "Milio",
      "Neeko",
      "Nidalee",
      "Qiyana",
      "Rengar",
      "Zyra",
    ],
  },
  {
    name: "O Vazio",
    champion: [
      "Bel'Veth",
      "Cho'Gath",
      "Kai'sa",
      "Kassadin",
      "Kha'Zix",
      "Kog'Maw",
      "Malzahar",
      "Rek'Sai",
      "Vel'Koz",
    ],
  },
  {
    name: "Águas de Sentina",
    champion: [
      "Fizz",
      "Gangplank",
      "Graves",
      "Illaoi",
      "Miss Fortune",
      "Nautilus",
      "Pyke",
      "Tahm Kench",
      "Twisted Fate",
    ],
  },
  {
    name: "Targon",
    champion: [
      "Aphelios",
      "Aurelion Sol",
      "Diana",
      "Leona",
      "Pantheon",
      "Soraka",
      "Taric",
      "Zoe",
    ],
  },
  {
    name: "Shurima",
    champion: [
      "Akshan",
      "Amumu",
      "Azir",
      "Nasus",
      "Rammus",
      "Renekton",
      "Rengar",
      "Sivir",
      "Skarner",
      "Taliyah",
      "Xerath",
      "K'Sante",
    ],
  },
];

function RegionPicker() {
  const [index, setIndex] = useState(-1);

  const { name: region, champion: champions } =
    index === -1 ? { name: "", champion: [] } : regions[index];

  function raffleRegion() {
    setIndex(Math.floor(Math.random() * regions.length));
  }

  return (
    <div className="justify-center items-center">
      <div className="pt-[2%] pb-[5%] ">
        <h1 className=" font-bold text-[73px] bg-clip-text text-transparent bg-gradient-to-b from-[rgb(103_71_31)] to-[rgb(203_172_98)]">
          Sorteio de Regiões do League of Legends
        </h1>
      </div>
      <button  onClick={raffleRegion}>
        Sortear Região
      </button>
      {index === -1 ? (
        <div>
          <p>Aperte para sortear</p>
        </div>
      ) : (
        <div className="pt-[5%]">
          <p className=" text-[60px] font-[700]">Região Sorteada</p>
          <p className=" text-[76px] tracking-[12px] font-[500]">
            {region}
          </p>
          <p className="text-[25px] ">{champions.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default RegionPicker;
