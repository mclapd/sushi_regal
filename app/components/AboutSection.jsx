"use client";

import { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Thornton",
    id: "thornton",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Monday: 9am - 5pm</li>
          <li>Tueday: 9am - 5pm</li>
          <li>Wednesday: 9am - 5pm</li>
          <li>Thursday: 9am - 5pm</li>
          <li>Friday: 9am - 5pm</li>
          <li>Saturday: 9am - 3pm</li>
          <li>Sunday: 9am - 3pm</li>
        </ul>
        <br />
        <hr />
        Thornton Shopping Centre Shop28, Cnr Thomas Coke Dr, &Taylor Avenue,
        Thornton NSW 2322
      </div>
    ),
  },
  {
    title: "Warabrook",
    id: "warabrook",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Monday: 7am - 4pm</li>
          <li>Tueday: 7am - 4pm</li>
          <li>Wednesday: 7am - 4pm</li>
          <li>Thursday: 7am - 4pm</li>
          <li>Friday: 7am - 4pm</li>
          <li>Saturday: 7am - 4pm</li>
          <li>Sunday: closed</li>
        </ul>
        <br />
        <hr />3 Angophora Dr, Warabrook NSW 2304
      </div>
    ),
  },
  {
    title: "Maitland",
    id: "maitland",
    content: (
      <div>
        <ul className="list-disc pl-2">
          <li>Monday: 9am - 5pm</li>
          <li>Tueday: 9am - 5pm</li>
          <li>Wednesday: 9am - 5pm</li>
          <li>Thursday: 9am - 5pm</li>
          <li>Friday: 9am - 5pm</li>
          <li>Saturday: 9am - 3pm</li>
          <li>Sunday: closed</li>
        </ul>
        <br />
        <hr />
        Shop 4-5, Pender Place, Church St, Maitland NSW 2320
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("thornton");
  const [isPending, startTransition] = useTransition();

  function handleTabChange(id) {
    startTransition(() => {
      setTab(id);
    });
  }
  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/party.png"
          width={700}
          height={400}
          alt="About image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            I look for his arrows every day I guess he got lost or flew away
            Waiting around is a waste (Waste) Been counting the days since
            November Is loving as good as they say? I look for his arrows every
            day I guess he got lost or flew away Waiting around is a waste
            (Waste) Been counting the days since November Is loving as good as
            they say? I look for his arrows every day I guess he got lost or
            flew away Waiting around is a waste (Waste) Been counting the days
            since November Is loving as good as they say?50:50 노래 가사중 ㅋ
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("thornton")}
              active={tab === "thornton"}
            >
              {" "}
              Thornton{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("warabrook")}
              active={tab === "warabrook"}
            >
              {" "}
              Warabrook{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("maitland")}
              active={tab === "maitland"}
            >
              {" "}
              Maitland{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
