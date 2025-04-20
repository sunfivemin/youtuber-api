import Button from "./Button";
import { FaArrowLeft } from "react-icons/fa";

export default {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = {
  args: {
    label: "확인",
    variant: "primary",
  },
};

export const Secondary = {
  args: {
    label: "취소",
    variant: "secondary",
  },
};

export const Danger = {
  args: {
    label: "삭제",
    variant: "danger",
  },
};

export const Disabled = {
  args: {
    label: "비활성",
    variant: "primary",
    disabled: true,
  },
};

export const WithIcon = {
  args: {
    label: "뒤로가기",
    icon: <FaArrowLeft />,
    variant: "secondary",
  },
};

export const Clickable = {
  args: {
    label: "눌러봐!",
    variant: "primary",
    onClick: () => alert("클릭!"),
  },
};
