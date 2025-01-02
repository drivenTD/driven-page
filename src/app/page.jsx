"use client";
import Visual from "@/components/Main/Visual";
import About from "@/components/Main/About";
import MarqueeAbout from "@/components/Main/MarqueeAbout";
import Portfolio from "@/components/Main/Portfolio";
import Datamon from "@/components/Main/Datamon";
import Read from "@/components/Main/Read";
import Solution from "@/components/Main/Solution";

export default function Page() {
  return (
    <>
      <Visual />
      <About />
      <MarqueeAbout />
      <Portfolio />
      <Datamon />
      <Read />
      <Solution />
    </>
  );
}
