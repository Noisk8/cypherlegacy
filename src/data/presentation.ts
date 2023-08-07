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
    "Cypher legacy es la unión de dos duplas creativas",
  socials: [
    {
      label: "Pyscomore",
      link: "https://twitter.com/gxanshu",
    },
    {
      label: "Volketierno",
      link: "https://bento.me/gxanshu",
    },
    {
      label: "Noisk8",
      link: "https://github.com/gxanshu",
    },
    {
      label: "Undisclosed1122",
      link: "https://github.com/gxanshu",
    },
  ],
};

export default presentation;
