import { AiOutlineLineChart, AiOutlineHome } from 'react-icons/ai';
import { MdVideoLabel } from 'react-icons/md';
import { BiTennisBall } from 'react-icons/bi';
import {
  BsBoxArrowInUpRight,
  BsLaptop,
  BsCodeSlash,
  BsSun,
} from 'react-icons/bs';
import { TbBrandTinder } from 'react-icons/tb';
import { SiReasonstudios } from 'react-icons/si';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { FaRegMoon } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { GiConsoleController } from 'react-icons/gi';
import { VscCircuitBoard } from 'react-icons/vsc';
import { CiUser } from 'react-icons/ci';
import { BsChatRight } from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import { MdOutlineSaveAlt } from 'react-icons/md';

export const nestedList = [
  { id: 1, text: 'Reddit iOS' },
  { id: 2, text: 'Reddit Android' },
  { id: 3, text: 'Rereddit' },
  { id: 4, text: 'Best Communities' },
  { id: 5, text: 'Communities' },
  { id: 6, text: 'About Reddit' },
  { id: 7, text: 'Careers' },
  { id: 8, text: 'Press' },
];

export const gamingList = [
  { id: 1, text: 'Survivorio' },
  { id: 2, text: 'Mobile Legends' },
  { id: 3, text: 'Squad Busters' },
];

export const sportsList = [
  { id: 1, text: 'UFC' },
  { id: 2, text: 'NBA' },
  { id: 3, text: 'NFL' },
];

export const cryptoList = [
  { id: 1, text: 'BTC' },
  { id: 2, text: 'Polkadot' },
  { id: 3, text: 'Ethereum' },
];

export const businessList = [
  { id: 1, text: 'Blackrock' },
  { id: 2, text: 'Tesla' },
  { id: 3, text: 'Gamestop' },
];

export const televisonList = [
  { id: 1, text: 'Breaking Bad' },
  { id: 2, text: 'Better Call Saul' },
  { id: 3, text: 'El Camino' },
];

export const celebrityList = [
  { id: 1, text: 'Joe Rogan' },
  { id: 2, text: 'Max Holloway' },
  { id: 3, text: 'Charles Olivera' },
];

export const sideListItems = [
  { id: 1, subdivision: true, text: 'Feeds' },
  { id: 2, text: 'Home', icon: <AiOutlineHome size={24} /> },
  { id: 3, text: 'Popular', icon: <BsBoxArrowInUpRight size={24} /> },
  { id: 4, subdivision: true, text: 'Recent' },
  { id: 5, text: 'r/leetcode', icon: <BsLaptop size={24} /> },
  { id: 6, text: 'r/nextjs', icon: <BsCodeSlash size={24} /> },
  { id: 7, text: 'r/tinder', icon: <TbBrandTinder size={24} /> },
  { id: 8, subdivision: true, text: 'Topics' },
  {
    id: 9,
    nested: true,
    data: gamingList,
    icon: <GiConsoleController size={24} />,
    text: 'Gaming',
  },
  {
    id: 10,
    nested: true,
    data: sportsList,
    icon: <BiTennisBall size={24} />,
    text: 'Sports',
  },
  {
    id: 11,
    nested: true,
    data: businessList,
    icon: <AiOutlineLineChart size={24} />,
    text: 'Business',
  },
  {
    id: 12,
    nested: true,
    data: cryptoList,
    icon: <VscCircuitBoard size={24} />,
    text: 'Crypto',
  },
  {
    id: 13,
    nested: true,
    data: televisonList,
    icon: <MdVideoLabel size={24} />,
    text: 'Television',
  },
  {
    id: 14,
    nested: true,
    data: celebrityList,
    icon: <CiUser size={24} />,
    text: 'Celebrity',
  },
];

export const userProfileItems = [
  {
    id: 1,
    text: 'Dark Mode',
    text2: 'Light Mode',
    icon: <FaRegMoon size={24} />,
    isDarkMode: true,
    icon2: <BsSun size={24} />,
  },
  { id: 2, text: 'Help Center', icon: <AiOutlineQuestionCircle size={24} /> },
  {
    id: 3,
    nested: true,
    data: nestedList,
    icon: <IoMdInformationCircleOutline size={24} />,
    text: 'More',
  },
  { id: 4, divider: true },
  { id: 5, text: 'Login / Sign Up', icon: <SiReasonstudios size={24} /> },
];

export const imageCardsItems = [
  {
    id: 1,
    header: 'Holloway scores last-second knockout against Gaethje',
    subHeader: 'After making the climb to 155lbs, "Blessed" has..',
    imageUrl: 'https://picsum.photos/id/209/1462/218',
    user: 'r/ufc and more',
    icon: <CiUser size={18} />,
  },
  {
    id: 2,
    header: 'Bitcoin price headed up',
    subHeader: 'Bitcoin expeirences best day in 2 months..',
    imageUrl: 'https://picsum.photos/id/20/1462/218',
    user: 'r/bitcoin and more',
    icon: <CiUser size={18} />,
  },
  {
    id: 3,
    header: 'ChatGPT 4o',
    subHeader: 'How to get started with the latest version..',
    imageUrl: 'https://picsum.photos/id/1/1462/218',
    user: 'r/space and more',
    icon: <CiUser size={18} />,
  },
  {
    id: 4,
    header: 'Ukraine outlook worsens as Western aid subsides',
    subHeader: 'Just hours after announcing Ukraine is not..',
    imageUrl: 'https://picsum.photos/id/161/1462/218',
    user: 'r/war and more',
    icon: <CiUser size={18} />,
  },
];

export const cardContentItems = [
  {
    id: 1,
    likes: '12k',
    icon: <CiUser />,
    user: 'r/Art',
    postedBy: 'u/Testuser123',
    timeAgo: '3',
    desc: 'ChatGPT 4o draws Van Gogh paintings',
    image: 'https://th.bing.com/th/id/OIP.nlUEBBElMGVwKooaqBcVmwHaFj?rs=1&pid=ImgDetMain',
    comments: '98',
  },
  {
    id: 2,
    likes: '26k',
    icon: <CiUser />,
    user: 'r/ufc',
    postedBy: 'u/Trippyalv',
    timeAgo: '17',
    desc: 'Volk responds to people who think he\'s too old',
    youtubeId: 'Hvldm4Ke664',
    comments: '1.1k',
  },
  {
    id: 3,
    likes: '5.1k',
    icon: <CiUser />,
    user: 'r/AITA',
    postedBy: 'u/Specialist_Sort_4248',
    timeAgo: '12',
    desc: 'AITA for asking my wife to not hang out with her friend who has a different lifestyle than us because I\'m afraid of losing her?',
    comments: '6.9k',
    linkUrl: 'https://www.reddit.com/r/AmItheAsshole/',
  },
];

export const popularCommunityItems = [
  {
    id: 1,
    header: 'Popular Communities',
    content: [
      'AskReddit',
      'NoStupidQns',
      'DestinyTheGame',
      'ExpllainLikeFive',
      'AskMen',
      'LeagueOfLegends',
      'MineCraft',
      'Anime',
      'IamA',
      'AskWomen',
      'OutOfTheLoop',
      'Fitness',
      'destiny2',
      'PS4',
      'apple',
      'Twitch',
      'videos',
    ],
  },
  {
    id: 2,
    header: 'Gaming',
    content: [
      'AskReddit',
      'NoStupidQns',
      'DestinyTheGame',
      'ExpllainLikeFive',
      'AskMen',
      'LeagueOfLegends',
      'MineCraft',
      'Anime',
      'IamA',
      'AskWomen',
      'OutOfTheLoop',
      'Fitness',
      'destiny2',
      'PS4',
      'apple',
      'Twitch',
      'videos',
    ],
  },
  {
    id: 3,
    header: 'Sports',
    content: [
      'AskReddit',
      'NoStupidQns',
      'DestinyTheGame',
      'ExplainLikeFive',
      'AskMen',
      'LeagueOfLegends',
      'MineCraft',
      'Anime',
      'IamA',
      'AskWomen',
      'OutOfTheLoop',
      'Fitness',
      'destiny2',
      'PS4',
      'apple',
      'Twitch',
      'videos',
    ],
  },
];

export const cardFooterItems = [
  { id: 1, icon: <BsChatRight size={18} />, comments: true, text: 'Comments' },
  { id: 2, icon: <FaShare />, text: 'Share' },
  { id: 3, icon: <MdOutlineSaveAlt />, text: 'Save' },
];
