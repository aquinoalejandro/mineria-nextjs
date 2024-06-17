import Image from "next/image";
import { Component } from "@/components/component/component";
import RootLayout from "./layout";

export default function Home() {
  return (
    <div>
      <RootLayout />
      <Component />
    </div>

  );
}
