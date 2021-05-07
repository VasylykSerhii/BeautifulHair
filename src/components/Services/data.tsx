import {
  HairExtension,
  HairDye,
  HairIron,
  HairStraightener,
} from "assets/icons";
import { IServiceData } from "./interface";

export const servicesData = [
  {
    slug: "kholodne-vidnovlennya",
    icon: <HairExtension size={50} color="#fff" />,
    title: "Холодне відновлення",
    desc:
      "Холодне молекулярне відновлення волосся направлене на поповнення в пошкодженому волоссі кератину.",
    colors: {
      from: "#24e2fe",
      to: "#237efd",
    },
    images: "/images/holodne.jpg",
  },
  {
    slug: "botoks",
    icon: <HairDye size={50} color="#fff" />,
    title: "Ботокс",
    desc:
      "Ботокс - це процедура спрямована на відновлення і оздоровлення пасм.",
    colors: {
      from: "#ffd324",
      to: "#fda323",
    },
    images: "/images/holodne.jpg",
  },
  {
    slug: "keratyn",
    icon: <HairIron size={50} color="#fff" />,
    title: "Кератин",
    desc:
      "Кератин - це білок, який складається з величезної кількості різновидних амінокислот.",
    colors: {
      from: "#f82fa0",
      to: "#b43dff",
    },
    images: "/images/holodne.jpg",
  },
  {
    slug: "nanoplastyka",
    icon: <HairStraightener size={50} color="#fff" />,
    title: "Нанопластика",
    desc:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
    colors: {
      from: "#00bc80",
      to: "#03dc0d",
    },
    images: "/images/holodne.jpg",
  },
];

export const serviceData = (slug: string | string[]): IServiceData => {
  return servicesData.filter((el) => el.slug === slug)[0];
};
