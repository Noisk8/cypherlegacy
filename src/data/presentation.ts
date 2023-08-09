type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "Musíca para canalizar la realidad",
  title: "CypherLegacy",
  description:
    "Cypher legacy es la unión de dos duplas creativas, Cyphernomicon [El sueño de una pensión] y Arp Legacy [Undisclosed1122 & Phycomore]",
  socials: [
    {
      label: "Cyphernomicon",
      link: "https://www.instagram.com/el_sueno_de_una_pension/",
    },
    {
      label: "Arplegacy",
      link: "https://www.instagram.com/arplegacy/",
    },
  
  ],
};

export default presentation;
