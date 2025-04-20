import React from "react";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-10">
      <main className="max-w-3xl mx-auto px-12 py-24">{children}</main>
    </div>
  );
}
