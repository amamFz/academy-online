import { IconType } from "react-icons/lib";
import {
  PiGraduationCapThin,
  PiStudentThin,
  PiUsersThreeThin,
  PiVideoCameraThin,
} from "react-icons/pi";

interface Achievment {
  id: number;
  icon: IconType | string;
  value: number;
  title: string;
  bg?: string;
  textColor?: string;
}

export const achievments: Achievment[] = [
  {
    id: 1,
    icon: PiGraduationCapThin,
    value: 10000,
    title: "Alumni",
    bg: "bg-secondary/10",
    textColor: "text-secondary",
  },
  {
    id: 2,
    icon: PiVideoCameraThin,
    value: 10000,
    title: "Video",
    bg: "bg-orange-500/10",
    textColor: "text-orange-500",
  },
  {
    id: 3,
    icon: PiStudentThin,
    value: 10000,
    title: "Student",
    bg: "bg-red/10",
    textColor: "text-red",
  },
  {
    id: 4,
    icon: PiUsersThreeThin,
    value: 10000,
    title: "User",
    bg: "bg-blue-500/10",
    textColor: "text-blue-500",
  },
];
