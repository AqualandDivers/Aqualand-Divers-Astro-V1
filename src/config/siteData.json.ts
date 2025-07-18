export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		github: string;
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "Aqualand Divers",
	// Your website's title and description (meta fields)
	title: "Aqualand Divers - a dive centre at the heart of diving.",
	description:
		"Get your next website up and running quickly with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "Sam Adcock",
		github: "TyraelWasTaken"
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/logo-min.png",
		alt: "Aqualand Divers",
	},
};

export default siteData;
