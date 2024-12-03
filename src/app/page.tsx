import AboutMe from "./components/About";
import AchievementsSecion from "./components/Achievements";
import SimpleEmailSection from "./components/EmailTemplate";
import Footer from "./components/footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/Project";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col bg-[#121212]">
			<Navbar />
			<div className="container mt-24 mx-auto px-12 py-4">
				<HeroSection />
				<AchievementsSecion />
				<AboutMe />
				<ProjectsSection />
				<SimpleEmailSection />
				<Footer />
			</div>
		</main>
	);
}
