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
      link: "https://twitter.com/gxanshu",
    },
    {
      label: "ArpLegacy",
      link: "https://bento.me/gxanshu",
    },
  
  ],
};

export default presentation;
