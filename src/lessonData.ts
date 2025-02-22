export interface Lesson {
  id: number;
  title: string;
  description: string;
  type: string;
  unlocked: boolean;
}

const lessonData = <Lesson[]>[
  {
    type: "تمرین",
    id: 1,
    title: "React",
    description: "هر که بامش بیش برفش بیشتر",
    unlocked: true,
  },
  {
    type: "درس",
    id: 2,
    title: "Redux",
    description: "Redux is a predictable state container for JavaScript apps",
    unlocked: true,
  },
  {
    type: "تمرین",
    id: 3,
    title: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
    unlocked: true,
  },
  {
    type: "تمرین",
    id: 4,
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
    unlocked: true,
  },
  {
    type: "درس",
    id: 5,
    title: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework",
    unlocked: true,
  },
  {
    type: "تمرین",
    id: 6,
    title: "MongoDB",
    description:
      "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era",
    unlocked: true,
  },
  {
    type: "تمرین",
    id: 7,
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system",
    unlocked: true,
  },
  {
    type: "تمرین",
    id: 8,
    title: "MySQL",
    description:
      "MySQL is an open-source relational database management system",
    unlocked: true,
  },
  {
    type: "درس",
    id: 9,
    title: "Docker",
    description:
      "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers",
    unlocked: true,
  },
  {
    type: "درس",
    id: 10,
    title: "Kubernetes",
    description:
      "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management",
  },
  {
    type: "تمرین",
    id: 11,
    title: "AWS",
    description:
      "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis",
  },
  {
    type: "تمرین",
    id: 12,
    title: "Azure",
    description:
      "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers",
  },
  {
    type: "تمرین",
    id: 13,
    title: "React",
    description: "React is a JavaScript library for building user interfaces",
  },
  {
    type: "درس",
    id: 14,
    title: "Redux",
    description: "Redux is a predictable state container for JavaScript apps",
  },
  {
    type: "تمرین",
    id: 15,
    title: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript",
  },
  {
    type: "تمرین",
    id: 16,
    title: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine",
  },
  {
    type: "درس",
    id: 17,
    title: "Express",
    description:
      "Express is a minimal and flexible Node.js web application framework",
  },
  {
    type: "تمرین",
    id: 18,
    title: "MongoDB",
    description:
      "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era",
  },
  {
    type: "تمرین",
    id: 19,
    title: "PostgreSQL",
    description:
      "PostgreSQL is a powerful, open source object-relational database system",
  },
  {
    type: "تمرین",
    id: 20,
    title: "MySQL",
    description:
      "MySQL is an open-source relational database management system",
  },
  {
    type: "درس",
    id: 21,
    title: "Docker",
    description:
      "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers",
  },
  {
    type: "درس",
    id: 22,
    title: "Kubernetes",
    description:
      "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management",
  },
  {
    type: "تمرین",
    id: 23,
    title: "AWS",
    description:
      "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis",
  },
  {
    type: "تمرین",
    id: 24,
    title: "Azure",
    description:
      "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers",
    unlocked: false,
  },
];

export default lessonData;
