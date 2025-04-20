import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {
    title: "유튜버 관리",
    showBack: true,
  },
};

export const WithBack = {
  args: {
    title: "유튜버 수정",
    showBack: true,
    onBack: () => alert("돌아가기"),
  },
};
