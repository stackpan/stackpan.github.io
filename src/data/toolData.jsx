import React from 'react';
import {
  SiCss3,
  SiDocker,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpring,
  SiTailwindcss,
  SiUml,
} from '@icons-pack/react-simple-icons';

const tools = [
  {
    category: 0,
    name: 'HTML',
    icon: ({ className }) => <SiHtml5 className={className} />,
  },
  {
    category: 0,
    name: 'CSS',
    icon: ({ className }) => <SiCss3 className={className} />,
  },
  {
    category: 0,
    name: 'Javascript',
    icon: ({ className }) => <SiJavascript className={className} />,
  },
  {
    category: 1,
    name: 'NodeJS',
    icon: ({ className }) => <SiNodedotjs className={className} />,
  },
  {
    category: 1,
    name: 'Laravel',
    icon: ({ className }) => <SiLaravel className={className} />,
  },
  {
    category: 1,
    name: 'Spring',
    icon: ({ className }) => <SiSpring className={className} />,
  },
  {
    category: 1,
    name: 'ReactJS',
    icon: ({ className }) => <SiReact className={className} />,
  },
  {
    category: 1,
    name: 'TailwindCSS',
    icon: ({ className }) => <SiTailwindcss className={className} />,
  },
  {
    category: 2,
    name: 'MySQL',
    icon: ({ className }) => <SiMysql className={className} />,
  },
  {
    category: 2,
    name: 'PostgreSQL',
    icon: ({ className }) => <SiPostgresql className={className} />,
  },
  {
    category: 2,
    name: 'Redis',
    icon: ({ className }) => <SiRedis className={className} />,
  },
  {
    category: 3,
    name: 'Linux',
    icon: ({ className }) => <SiLinux className={className} />,
  },
  {
    category: 3,
    name: 'Docker',
    icon: ({ className }) => <SiDocker className={className} />,
  },
  {
    category: 4,
    name: 'Git',
    icon: ({ className }) => <SiGit className={className} />,
  },
  {
    category: 4,
    name: 'Github',
    icon: ({ className }) => <SiGithub className={className} />,
  },
  {
    category: 4,
    name: 'OpenAPI',
    icon: ({ className }) => <SiOpenapiinitiative className={className} />,
  },
  {
    category: 4,
    name: 'PlantUML',
    icon: ({ className }) => <SiUml className={className} />,
  },
  {
    category: 4,
    name: 'Figma',
    icon: ({ className }) => <SiFigma className={className} />,
  },
];

export default tools;
