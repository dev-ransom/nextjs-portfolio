"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import GithubIcon from "/public/github.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import "react-toastify/dist/ReactToastify.css";

const SimpleEmailSection = () => {
	const [, setEmailSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const target = e.target as HTMLFormElement;
		const data = {
			email: (target.email as HTMLInputElement).value,
			subject: (target.subject as HTMLInputElement).value,
			message: (target.message as HTMLTextAreaElement).value,
		};

		try {
			// Simulate email submission
			console.log("Email data:", data);
			toast.success("Message sent successfully!", { autoClose: 3000 });
			setEmailSubmitted(true);
			target.reset(); // Clear the form
		} catch (error) {
			console.error("Error sending message:", error);
			toast.error("Something went wrong. Please try again!", {
				autoClose: 3000,
			});
		}
	};

	return (
		<section
			className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
			id="contact"
		>
			<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
			<div className="z-10">
				<h5 className="text-xl font-bold text-white my-2">
					Let&apos;s Connect
				</h5>
				<p className="text-[#ADB7BE] mb-4 max-w-md">
					{" "}
					I&apos;m currently looking for new opportunities, my inbox is always
					open. Whether you have a question or just want to say hi, I&apos;ll
					try my best to get back to you!
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="github.com" target="_blank">
						<Image src={GithubIcon} alt="Github Icon" />
					</Link>
					<Link href="linkedin.com" target="_blank">
						<Image src={LinkedinIcon} alt="Linkedin Icon" />
					</Link>
				</div>
			</div>
			<ToastContainer />
			<form className="flex flex-col" onSubmit={handleSubmit}>
				<div className="mb-6">
					<label htmlFor="email" className="text-white block text-sm mb-1">
						Your Email
					</label>
					<input
						name="email"
						type="email"
						id="email"
						required
						className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg w-full p-2"
						placeholder="youngGmail.com"
					/>
				</div>
				<div className="mb-6">
					<label htmlFor="subject" className="text-white block text-sm mb-1">
						Subject
					</label>
					<input
						name="subject"
						type="text"
						id="subject"
						required
						className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg w-full p-2"
						placeholder="What’s on your mind?"
					/>
				</div>
				<div className="mb-4">
					<label htmlFor="message" className="text-white block text-sm mb-1">
						Message
					</label>
					<textarea
						name="message"
						id="message"
						required
						className="bg-gray-800 border border-gray-700 text-gray-200 rounded-lg w-full p-2"
						placeholder="Type your message here..."
					></textarea>
				</div>
				<button
					type="submit"
					className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
				>
					Send Message
				</button>
			</form>
		</section>
	);
};

export default SimpleEmailSection;
