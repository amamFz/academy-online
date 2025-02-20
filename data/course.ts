import { IconType } from "react-icons/lib";
import { GoArrowUpRight, GoStarFill } from "react-icons/go";
import { PiStarFill, PiCheck, PiPlayFill } from "react-icons/pi";

interface Course {
  id: number;
  title: string;
  image: string;
  tag: string;
  star: IconType;
  rating: string;
  instruktur: string;
  icon: IconType;
}

interface dataButton {
  id?: number;
  tag: string;
}

interface courseInformation {
  id: number;
  check: IconType;
  courseInformation: string;
}

interface Lessons {
  id: number;
  title: string;
  time: string;
  playIcon: IconType;
}

interface Review {
  id: number;
  image: string;
  name: string;
  job: string;
  review: string;
  rating: IconType;
}

export const course: Course[] = [
  {
    id: 1,
    title: "Learning JavaScript With Imagination",
    image: "/images/course/course-1.png",
    tag: "Development",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "David Millar",
    icon: GoArrowUpRight,
  },
  {
    id: 2,
    title: "The Complete Graphic Design for Beginners",
    image: "/images/course/course-2.png",
    tag: "Design",
    star: GoStarFill,
    rating: "(4.5 Reviews)",
    instruktur: "Jenny Wilson",
    icon: GoArrowUpRight,
  },
  {
    id: 3,
    title: "Learning Digital Marketing on Facebook",
    image: "/images/course/course-3.png",
    tag: "Marketing",
    star: GoStarFill,
    rating: "(4.3 Reviews)",
    instruktur: "Wade Warren",
    icon: GoArrowUpRight,
  },
  {
    id: 4,
    title: "Financial Analyst Training & Investing Course",
    image: "/images/course/course-4.png",
    tag: "Business",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "Robert Fox",
    icon: GoArrowUpRight,
  },
  {
    id: 5,
    title: "Data Analysis & Visualization Masterclass",
    image: "/images/course/course-5.png",
    tag: "Data Science",
    star: GoStarFill,
    rating: "(4.5 Reviews)",
    instruktur: "Guy Hawkins",
    icon: GoArrowUpRight,
  },
  {
    id: 6,
    title: "Master the Fundamentals of Math",
    image: "/images/course/course-6.png",
    tag: "Mathematic",
    star: GoStarFill,
    rating: "(4.7 Reviews)",
    instruktur: "Sawpawlo Mark",
    icon: GoArrowUpRight,
  },
  {
    id: 7,
    title: "How To Build A Localized Website With Hugo And Strapi",
    image: "/images/course/course-7.png",
    tag: "Business",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "David Millar",
    icon: GoArrowUpRight,
  },
  {
    id: 8,
    title: "Designing Effective Pricing Plans UX",
    image: "/images/course/course-8.png",
    tag: "Desingn",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "Sawpawlo Mark",
    icon: GoArrowUpRight,
  },
  {
    id: 9,
    title: "Accelerating UX Maturity With A Breakthrough Project",
    image: "/images/course/course-9.png",
    tag: "Language",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "David Millar",
    icon: GoArrowUpRight,
  },
  {
    id: 10,
    title: "Demystifying The New Gatsby Framework",
    image: "/images/course/course-10.png",
    tag: "Creative",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "Jack & Jon",
    icon: GoArrowUpRight,
  },
  {
    id: 11,
    title: "Voice Control Usability Considerations For Partially",
    image: "/images/course/course-11.png",
    tag: "Data",
    star: GoStarFill,
    rating: "(4.8 Reviews)",
    instruktur: "Lily Rebeca",
    icon: GoArrowUpRight,
  },
  {
    id: 12,
    title: "Things I Wish I’d Known Earlier In My Career",
    image: "/images/course/course-12.png",
    tag: "Finance",
    star: GoStarFill,
    rating: "(4.5 Reviews)",
    instruktur: "Sawpawlo Mark",
    icon: GoArrowUpRight,
  },
];

export const dataButton: dataButton[] = [
  {
    id: 1,
    tag: "Overview",
  },
  {
    id: 2,
    tag: "Lessons",
  },
  {
    id: 3,
    tag: "Review",
  },
];
export const courseInformation: courseInformation[] = [
  {
    id: 1,
    check: PiCheck,
    courseInformation: "Work with color & Gradients & Grids",
  },
  {
    id: 2,
    check: PiCheck,
    courseInformation: "All the useful shortcuts",
  },
  {
    id: 3,
    check: PiCheck,
    courseInformation: "Be able to create Flyers, Brochures, Advertisements",
  },
  {
    id: 4,
    check: PiCheck,
    courseInformation: "How to work with Images & Text",
  },
];

export const lessons: Lessons[] = [
  {
    id: 1,
    title: "Setup Project",
    time: "5:00",
    playIcon: PiPlayFill,
  },
  {
    id: 2,
    title: "Setup Project",
    time: "5:00",
    playIcon: PiPlayFill,
  },
  {
    id: 3,
    title: "Setup Project",
    time: "5:00",
    playIcon: PiPlayFill,
  },
  {
    id: 4,
    title: "Setup Project",
    time: "5:00",
    playIcon: PiPlayFill,
  },
];

export const review: Review[] = [
  {
    id: 1,
    image: "/images/user/user-01.png",
    name: "David Heilo",
    job: "Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 2,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 3,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 4,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 5,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 6,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 7,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 8,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
  {
    id: 9,
    image: "/images/user/user-02.png",
    name: "Jenny Wilson",
    job: "Product Designer",
    review:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium excepturi corrupti consectetur doloribus. Quas, mollitia vero.",
    rating: PiStarFill,
  },
];
