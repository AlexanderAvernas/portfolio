import HeroVisit from "@/components/HeroVisit";
import StickyNavButton from "@/components/StickyNavButton";
import About from "./about";
import Experience from "@/components/Experience";

export default function Home() {
  const workExperience = [
    {
      title: "Fysioterapeut",
      company: "Tyresö Rehab", // Plats visas med ikon
      employmentType: "Heltid", // Visas i oval badge
      period: "Juni 2020 - Nuvarande",
      description: "",
    },
    {
      title: "Fysioterapeut",
      company: "Joint Academy (digitalt)",
      employmentType: "Deltid",
      period: "Sep 2019 - Nuvarande",
      description: "",
    },
    {
      title: "Frontendutvecklare",
      company: "Brilliant Works (Praktik)",
      employmentType: "Deltid",
      period: "Jan 2024 - Juni 2024",
      description: "",
    },
    {
      title: "Frontendutvecklare",
      company: "Nilo collaboration AB (praktik)",
      employmentType: "Deltid",
      period: "Aug 2023 - Dec 2023",
      description: "",
    },
    {
      title: "Fysioterapeut",
      company: "Aleris Skärholmen",
      employmentType: "Deltid",
      period: "Jan 2019 - Jan 2020",
      description: "",
    },
    {
      title: "Kontaktperson",
      company: "Haninge Kommun",
      employmentType: "Deltid",
      period: "Jan 2013 - dec 2018",
      description: "",
    },
    {
      title: "Snickare",
      company: "Fröberg Allt i Bygg AB",
      employmentType: "Heltid",
      period: "Jan 2012 - Jan 2016",
      description: "",
    },
  ];

  const education = [
    {
      degree: "Frontendutvecklare, Yrkesutbildning",
      school: "It-högskolan",
      studyType: "Deltid", // För utbildning
      period: "Aug 2022 - Juni 2024",
      description: "",
    },
    {
      degree: "Idrottsmedicin Magister",
      school: "Linnéuniversitetet",
      studyType: "Deltid", // För utbildning
      period: "Aug 2019 - Aug 2020",
      description: "",
    },
    {
      degree: "Kandidatexamen Fysioterapi",
      school: "Luleå Tekniska Universitet",
      studyType: "Heltid",
      period: "Jan 2016 - Jan 2019",
    },
  ];

  return (
    <>
      <HeroVisit />
      <Experience workExperience={workExperience} education={education} />
      <About />
      <StickyNavButton />
    </>
  );
}
