import YoutuberCard from "./YoutuberCard";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/YoutuberCard",
  component: YoutuberCard,
};

const sampleData = {
  id: 1,
  channelTitle: "딩고프리스타일",
  sub: "100만명",
  videoNum: "345",
};

export const Default = {
  args: {
    youtuber: sampleData,
    onEdit: action("Edit clicked"),
    onDelete: action("Delete clicked"),
  },
};
