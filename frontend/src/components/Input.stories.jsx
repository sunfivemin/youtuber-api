import Input from "./Input";
import { useState } from "react";

export default {
  title: "Components/Input",
  component: Input,
};

export const Default = () => {
  const [value, setValue] = useState("");

  return (
    <Input
      name="test"
      placeholder="입력해보세요"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const WithPlaceholder = () => (
  <Input
    name="username"
    placeholder="사용자 이름"
    value=""
    onChange={() => {}}
  />
);

export const NumberInput = () => (
  <Input
    name="age"
    type="number"
    placeholder="나이"
    value=""
    onChange={() => {}}
  />
);
