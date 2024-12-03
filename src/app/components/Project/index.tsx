"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./components/ProjectTags";
import ProjectCard from "./components/ProjectsCard";

const projectsData = [
	{
		id: 1,
		title: "React Portfolio Website",
		description: "Project 1 description",
		image: "/images/portfolio.jpg",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/dev-ransom/nextjs-portfolio",
		previewUrl: "/",
	},
	{
		id: 2,
		title: "Pure JS Portfolio Website",
		description: "Project 2 description",
		image: "/images/JsProject.jpg",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/dev-ransom/personal-portfolio",
		previewUrl: "https://personal-portfolio-ashy-beta.vercel.app/",
	},
	{
		id: 3,
		title: "Article Summarizer Application",
		description: "Project 3 description",
		image: "/images/articleMain.jpg",
		tag: ["All", "Web"],
		gitUrl: "https://github.com/dev-ransom/aI_article_summarizer",
		previewUrl: "https://steady-kataifi-11c296.netlify.app/",
	},
	{
		id: 5,
		title: "React Firebase Template",
		description: "Authentication and CRUD operations",
		image: "/images/projects/5.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
	{
		id: 6,
		title: "Full-stack Roadmap",
		description: "Project 5 description",
		image: "/images/projects/6.png",
		tag: ["All", "Web"],
		gitUrl: "/",
		previewUrl: "/",
	},
];

const ProjectsSection = () => {
	const [tag, setTag] = useState("All");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter((project) =>
		project.tag.includes(tag)
	);

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
				My Projects
			</h2>
			<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
				<ProjectTag
					onClick={handleTagChange}
					name="All"
					isSelected={tag === "All"}
				/>
				<ProjectTag
					onClick={handleTagChange}
					name="Web"
					isSelected={tag === "Web"}
				/>
			</div>
			<ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
				{filteredProjects.map((project, index) => (
					<motion.li
						key={index}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={project.id}
							title={project.title}
							description={project.description}
							imgUrl={project.image}
							gitUrl={project.gitUrl}
							previewUrl={project.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
