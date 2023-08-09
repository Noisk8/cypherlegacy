export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Escucha Psycomore - Selección Tracks de VELEZ ",
    techs: ["Dj set"],
    link: "https://on.soundcloud.com/rG4aw",
  },
  {
    title: "URANUS PODCAST #08 PSYCOMORE de URANUS",
    techs: ["Dj set"],
    link: "https://on.soundcloud.com/kwL4N",
  },
  {
    title: "UNDISCLOSED 1122 by Renata Rave",
    techs: ["Dj set"],
    link: "https://on.soundcloud.com/BRAxHH4dH7V5A2zN8"
  },

  {
    title: "Noisk8 Trusting in the future",
    techs: ["Dj set"],
    link: "https://www.mixcloud.com/noi-silva/trusting-in-the-future/"
  },

  {
    title: "Noisk8 Cuervos y Rosas",
    techs: ["Dj set"],
    link: "https://www.mixcloud.com/noi-silva/sistemas-volatiles/"
  },
  {
    title: "| Episode 095 | Psycomore de Sonidos Subterraneos",
    techs: ["Dj set"],
    link: "https://soundcloud.com/ssubterraneos/episode-095-psycomore"
  },
];

export default projects;
