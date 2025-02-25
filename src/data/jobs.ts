import BlackmouthGamesLogo from "../assets/images/work/blackmouth.png";
import HaystackLogo from "../assets/images/work/haystack.png";
import BevertecLogo from "../assets/images/work/bevertec.png";
import TranzfermeLogo from "../assets/images/work/tranzferme.png";
import AmigoCloudLogo from "../assets/images/work/amigocloud.png";

export default [
  {
    name: "Blackmouth Games",
    link: "https://www.blackmouthgames.com/",
    logo: BlackmouthGamesLogo,
    location: "🇪🇸 Madrid, Spain (remote)",
    description: "Indie videogame company",
    positions: [
      {
        title: "Backend Developer",
        start: new Date("2024-04"),
        end: new Date("2024-07"),
        teamDescription:
          "Backend team, we made the game online capabilities possible",
        stack: ["Typescript", "Go", "DynamoDB", "PostgreSQL", "AWS Cognito"],
      },
    ],
  },
  {
    name: "Haystack News",
    link: "https://haystack.tv",
    logo: HaystackLogo,
    location: "🇺🇸 San Francisco, CA, US (remote)",
    description:
      "News streaming service with different local, national and international channels",
    positions: [
      {
        title: "Tech Lead",
        start: new Date("2024-01"),
        end: new Date("2024-04"),
        teamDescription:
          "Lead of the Web-based TVs team and still part of Website team",
        stack: ["Same stack as before"],
      },
      {
        title: "Software Developer",
        start: new Date("2022-06"),
        end: new Date("2023-12"),
        teamDescription: "Two teams! Website and the Web-based TV platforms",
        stack: ["Typescript", "Svelte", "React", "MongoDB", "Snowflake"],
      },
    ],
  },
  {
    name: "Bevertec",
    link: "https://www.bevertec.com",
    logo: BevertecLogo,
    location: "🇨🇦 Ontario, Canada (remote)",
    description:
      "Provider of banking systems and solutions to financial companies",
    positions: [
      {
        title: "Full-Stack Developer",
        start: new Date("2021-05"),
        end: new Date("2022-05"),
        teamDescription: "Alpha Banking team, we maintained a bank system.",
        stack: ["Java", "Groovy", "Javascript", "Oracle", "Linux"],
      },
    ],
  },
  {
    name: "Tranzfer.me",
    link: "https://tranzfer.me",
    logo: TranzfermeLogo,
    location: "🇵🇪 Lima, Peru (remote)",
    description: "International money transfer service",
    positions: [
      {
        title: "Software Developer",
        start: new Date("2020-07"),
        end: new Date("2021-04"),
        teamDescription:
          "We created the web app. There wasn't one when I joined!",
        stack: ["Java", "CodePipeline", "CloudFormation", "CDK", "DynamoDB"],
      },
    ],
  },
  {
    name: "AmigoCloud",
    link: "https://amigocloud.com/",
    logo: AmigoCloudLogo,
    location: "🇺🇸 San Francisco, CA, US (remote)",
    description: "Collaborative web-based mapping and analytics platform",
    positions: [
      {
        title: "Full-Stack Intern",
        start: new Date("2018-07"),
        end: new Date("2018-11"),
        teamDescription:
          "We maintained and created new features for the web platform",
        stack: ["Python", "Javascript", "PostgreSQL"],
      },
    ],
  },
];
