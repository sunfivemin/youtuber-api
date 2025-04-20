import React from "react";

export default function Input({
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
}
