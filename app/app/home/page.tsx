import React from "react";
import { PageTitle } from "@/components/page-title";
import { Metadata } from "next";
import { RandomToast } from "./_components/random-toast";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | Home",
  },
};

export default function HomeRoute() {
  return (
    <section className="px-4 py-2">
      <PageTitle selfLabel="Home" />
      <RandomToast />
    </section>
  );
}
