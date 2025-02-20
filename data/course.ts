import { GoArrowUpRight, GoStarFill } from "react-icons/go";
import { IconType } from "react-icons/lib";

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
