import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon
} from '@heroicons/react/24/solid';
import { Benefit } from '@/types/typings';

const benefits: Benefit[] = [
  {
    Icon: HomeModernIcon,
    title: 'State of the Art Facilities',
    description:
      'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.'
  },
  {
    Icon: UserGroupIcon,
    title: "100's of Diverse Classes",
    description:
      'Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.'
  },
  {
    Icon: AcademicCapIcon,
    title: 'Expert and Pro Trainers',
    description:
      'Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.'
  }
];

export default benefits;
