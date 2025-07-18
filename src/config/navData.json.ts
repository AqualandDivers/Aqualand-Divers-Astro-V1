export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Courses & Services",
		link: "/courses&services/",
	},
	{
		text: "Contact Us",
		link: "/#contact",
	},
	{
		text: "About Us",
		link: "/#about"
	},
	{
		text: "Gallery",
		link: "/Gallery/",
	},
	// {                     //in case you need a drop down
	// 	text: "Pages",
	// 	dropdown: [

	// 		{
	// 			text: "Elements",
	// 			link: "/elements/",
	// 		},
	// 	],
	// },
];

export default navConfig;
