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
		text: "Store",
		link: "/store/"
	},
	{
		text: "Trips & Events",
		link: "/trips&events/",
	},	
	{
		text: "Contact Us",
		link: "/#contact",
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
