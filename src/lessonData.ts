export interface Lesson {
  id: number;
  title: string;
  description: string;
  type?: string;
}

const lessonData = [
  {
    type: "practice",
    id: 1,
    title: "React",
    description: "React is a JavaScript library for building user interfaces",
  },
  {
    type: "lesson",
    id: 2,
    title: "Redux",
    description: "Redux is a predictable state container for JavaScript apps",
  },
  {
    id: 3,
    title: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    id: 4,
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    id: 5,
    title: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework",
  },
  {
    id: 6,
    title: "MongoDB",
    description:
      "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era",
  },
  {
    id: 7,
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system",
  },
  {
    id: 8,
    title: "MySQL",
    description:
      "MySQL is an open-source relational database management system",
  },
  {
    id: 9,
    title: "Docker",
    description:
      "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers",
  },
  {
    id: 10,
    title: "Kubernetes",
    description:
      "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management",
  },
  {
    id: 11,
    title: "AWS",
    description:
      "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis",
  },
  {
    id: 12,
    title: "Azure",
    description:
      "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers",
  },
];

export default lessonData;
