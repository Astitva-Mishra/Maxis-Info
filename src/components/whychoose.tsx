'use client';
import Link from "next/link";
import Chooseusdata from "@/data/chooseus.json";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";

interface chooseus {
  id: number;
  title: string;
  description: string;
   
}

function AboutPage() {
   const chooseus = Chooseusdata.chooseus.filter((course => course.isFeatured))
  return (
    <div className="py-12 bg-gray-900">
      <div>
        <div className="text-center">
                <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6 leading-tight">Why Choose Us</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    We specialize in end-to-end ICT infrastructure management with 24/7 services and a Pan India presence, ensuring unmatched convenience for our clients. Our expertise spans diverse technologies, backed by strong alliances, skilled manpower, and a reliable global footprint—giving us a distinct edge over the competition.
          </p>
        </div>
      </div>
      <div className="mt-10 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {chooseus.map((data: chooseus) => (
            <div key={data.id} className="flex justify-center">
                        <BackgroundGradient
                       className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <h1 mt-5>{data.title}</h1>
                                <p className="text-gray-300 mt-2 text-sm">{data.description}</p>
                                <Link href={`/chooseus/${data.slug}`} className="mt-4 text-blue-500 hover:underline"></Link>
                                
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>

      </div>
         
    </div>
  );
}

export default AboutPage;