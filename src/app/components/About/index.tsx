"use client";

import Image from "next/image";
import { useState, useTransition } from "react";
import TabButton from "../Button";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Next</li>
        <li>Responsive web design</li>
        <li>TypeScript</li>
        <li>Three JS</li>
        <li>JavaScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>ALX software programming</li>
        <li>University of Illorin</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ALX frontEnd</li>
        <li>Coursera</li>
      </ul>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const activeTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about"
          src="/images/workSpace.jpg"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, HTML, CSS, and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {activeTab ? activeTab.content : <p>Tab content not found</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
