export interface DashboardConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: DashboardConfig = {
	github_access_token: process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "2565fa91-2ac4-4e4f-9111-6d27a598082d",
			repository_url: "https://github.com/rpalaciosg/backend_nodepop_api",
		},
		{
			id: "3565fa91-2ac4-4e4f-9111-6d27a598082d",
			repository_url: "https://github.com/rpalaciosg/richardpalaciosg.dev",
		},
		{
			id: "4565fa91-2ac4-4e4f-9111-6d27a598082d",
			repository_url: "https://github.com/javascriptecuador/web",
		},
		{
			id: "5565fa91-2ac4-4e4f-9111-6d27a598082d",
			repository_url: "https://github.com/rpalaciosg/dotfiles",
		},
	],
};
