import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Zeel Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		// case Platform.StackOverflow:
		// 	return Icons.StackOverflow;
		// case Platform.Facebook:
		// 	return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		// case Platform.Twitter:
		// 	return Icons.Twitter;
		// case Platform.Youtube:
		// 	return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Home',
	name: 'Zeel',
	lastName: 'Prajapati',
	description:
		"Hello! I am an experienced Software Engineer with expertise in Software Development, Data Analysis and Machine Learning. My passion for innovation, strong problem-solving skills, and commitment to staying current makes me a valuable addition to any team. Explore my work to see how I can contribute to your organization's success. Let's connect and discuss potential collaborations.",
	links: [
		{ 
			platform: Platform.GitHub, 
			link: 'https://github.com/zack0705' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/zeelprajapati/'
		},
		{
			platform: Platform.Email,
			link: 'prajapatizeel75@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: "https://drive.google.com/file/d/1F-ESoWd6KKSTDTHuEYqqNAfk3-XXtTVi/view?usp=sharing"
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
