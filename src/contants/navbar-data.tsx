import { AiOutlineEye, AiOutlineRobot } from 'react-icons/ai';
import { BiBookOpen, BiNetworkChart, BiNews } from 'react-icons/bi';
import { FaReact } from 'react-icons/fa';
import { FiGlobe, FiPackage } from 'react-icons/fi';
import { HiOutlineUsers } from 'react-icons/hi';
import { LuWorkflow } from 'react-icons/lu';
import {
  MdCampaign,
  MdOutlineEngineering,
  MdOutlineVisibility,
  MdOutlineWeb,
  MdSecurity,
  MdStorefront,
} from 'react-icons/md';
import { PiBuildingsBold } from 'react-icons/pi';
import { RiServerLine } from 'react-icons/ri';
import {
  TbBuildingStore,
  TbFileReport,
  TbServerBolt,
  TbStack3,
  TbTemplate,
  TbTools,
} from 'react-icons/tb';

export const products = [
  {
    label: 'Products',
    sections: [
      {
        title: 'DX Platform',
        menuItems: [
          {
            icon: <AiOutlineEye />,
            title: 'Previews',
            subtitle: 'Helping teams ship 6× faster',
          },
          {
            icon: <AiOutlineRobot />,
            title: 'AI',
            subtitle: 'Powering breakthroughs',
          },
        ],
      },
      {
        title: 'Managed Infrastructure',
        menuItems: [
          {
            icon: <RiServerLine />,
            title: 'Fluid Compute',
            subtitle: 'Servers, in serverless form',
          },
          {
            icon: <TbServerBolt />,
            title: 'Rendering',
            subtitle: 'Fast, scalable, and reliable',
          },
          {
            icon: <MdOutlineVisibility />,
            title: 'Observability',
            subtitle: 'Trace every step',
          },
          {
            icon: <MdSecurity />,
            title: 'Security',
            subtitle: 'Scale without compromising',
          },
        ],
      },
      {
        title: 'Open Source',
        menuItems: [
          {
            icon: <FaReact />,
            title: 'Next.js',
            subtitle: 'The native Next.js platform',
          },
          {
            icon: <TbStack3 />,
            title: 'Turborepo',
            subtitle: 'Speed with Enterprise scale',
          },
          {
            icon: <BiNetworkChart />,
            title: 'AI SDK',
            subtitle: 'The AI Toolkit for TypeScript',
          },
        ],
      },
    ],
  },
];

export const solutions = [
  {
    label: 'Solutions',
    sections: [
      {
        title: '',
        menuItems: [
          {
            icon: <AiOutlineRobot />,
            title: 'AI Apps',
            subtitle: 'Deploy at the speed of AI',
          },
          {
            icon: <MdStorefront />,
            title: 'Composable Commerce',
            subtitle: 'Power storefronts that convert',
          },
          {
            icon: <MdCampaign />,
            title: 'Marketing Sites',
            subtitle: 'Launch campaigns fast',
          },
          {
            icon: <PiBuildingsBold />,
            title: 'Multi-tenant Platforms',
            subtitle: 'Scale apps with one codebase',
          },
          {
            icon: <MdOutlineWeb />,
            title: 'Web Apps',
            subtitle: 'Ship features, not infrastructure',
          },
        ],
      },
    ],
  },
  {
    label: 'Users',
    sections: [
      {
        title: '',
        menuItems: [
          {
            icon: <LuWorkflow />,
            title: 'Platform Engineers',
            subtitle: 'Automate away repetition',
          },
          {
            icon: <MdOutlineEngineering />,
            title: 'Design Engineers',
            subtitle: 'Deploy for every idea',
          },
        ],
      },
    ],
  },
];

export const resources = [
  {
    label: 'Resources',
    sections: [
      {
        title: '',
        menuItems: [
          {
            icon: <AiOutlineRobot />,
            title: 'AI Apps',
            subtitle: 'Deploy at the speed of AI',
          },
          {
            icon: <MdStorefront />,
            title: 'Composable Commerce',
            subtitle: 'Power storefronts that convert',
          },
          {
            icon: <MdCampaign />,
            title: 'Marketing Sites',
            subtitle: 'Launch campaigns fast',
          },
          {
            icon: <PiBuildingsBold />,
            title: 'Multi-tenant Platforms',
            subtitle: 'Scale apps with one codebase',
          },
          {
            icon: <MdOutlineWeb />,
            title: 'Web Apps',
            subtitle: 'Ship features, not infrastructure',
          },
        ],
      },
    ],
  },
  {
    label: 'Users',
    sections: [
      {
        title: '',
        menuItems: [
          {
            icon: <LuWorkflow />,
            title: 'Platform Engineers',
            subtitle: 'Automate away repetition',
          },
          {
            icon: <MdOutlineEngineering />,
            title: 'Design Engineers',
            subtitle: 'Deploy for every idea',
          },
        ],
      },
    ],
  },
  {
    label: 'Tools',
    sections: [
      {
        title: '',
        menuItems: [
          {
            icon: <TbTools />,
            title: 'Resource Center',
            subtitle: "Today's best practices",
          },
          {
            icon: <FiPackage />,
            title: 'Marketplace',
            subtitle: 'Extend and automate workflows',
          },
          {
            icon: <TbTemplate />,
            title: 'Templates',
            subtitle: 'Jumpstart app development',
          },
          {
            icon: <BiBookOpen />,
            title: 'Guides',
            subtitle: 'Find help quickly',
          },
          {
            icon: <TbBuildingStore />,
            title: 'Partner Finder',
            subtitle: 'Get help from solution partners',
          },
        ],
      },
    ],
  },
  {
    label: 'Company',
    sections: [
      {
        title: '',
        menuItems: [
          {
            icon: <HiOutlineUsers />,
            title: 'Customers',
            subtitle: 'Trusted by the best teams',
          },
          {
            icon: <FiGlobe />,
            title: 'Blog',
            subtitle: 'The latest posts and changes',
          },
          {
            icon: <TbFileReport />,
            title: 'Changelog',
            subtitle: 'See what shipped',
          },
          {
            icon: <BiNews />,
            title: 'Press',
            subtitle: 'Read the latest news',
          },
        ],
      },
    ],
  },
];

export const menuData = [
  { label: 'Products', menu: products },
  { label: 'Solutions', menu: solutions },
  { label: 'Resources', menu: resources },
  { label: 'Entreprise' },
  { label: 'Docs' },
  { label: 'Pricing' },
];
