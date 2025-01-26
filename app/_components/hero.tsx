"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { GithubIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Replace with the actual base64-encoded string of your hero-orange.jpg
const base64Image = "data:image/jpeg;base64,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"; // Actual base64 string of your image

export function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between w-screen overflow-hidden px-10 py-4 pt-20 text-sm sm:px-20 md:px-32 md:text-base lg:px-40">
      <div className="relative z-10 flex flex-col items-start gap-3 md:w-1/2">
        {/* Badge */}
        <Link href="https://github.com/asendlabs/startstack">
          <Badge
            variant={"outline"}
            className="group flex w-fit gap-1 rounded-full px-3 py-1.5 text-orange-500"
          >
            <GithubIcon className="mr-1 size-3" />
            <p className="cursor-pointer group-hover:underline">
              Fork the <span>repo</span> to get started.
            </p>
          </Badge>
        </Link>

        {/* Heading with Orange Pill */}
        <h1 className="max-w-[41.5rem] break-words text-left text-4xl font-bold text-black dark:text-white md:text-5xl">
          The{" "}
          <span className="relative inline-block bg-orange-600 px-2 py-1 rounded-full text-white transform rotate-[5deg]">
            easiest way
          </span>{" "}
          to get started with your next saas project.
        </h1>
      </div>

      {/* Image with Base64 Source */}
      <div className="mt-4 md:mt-0 relative">
        <Image
          src={base64Image}  // Base64 encoded image directly used in the src
          alt="Hero Section Illustration"
          className="rounded-lg shadow-md"
          width={714}  // Fixed width for image
          height={400} // Fixed height for image
          priority={true} // Ensures the image loads first
        />
      </div>
    </section>
  );
}
