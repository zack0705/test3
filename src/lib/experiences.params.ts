import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'Arizona State University',
		description: "Compiled a dataset of over 30,000 reviews of Amazon and BestBuy products using a web scraper created with Python and Beautiful Soup API Gained insight on the data by carrying out data analysis and sentiment analysis on it using Python and libraries such as nltk and vader and presented the results through various data visualization techniques and graphs Identified top 30 popular topics from the data by training a LDA Model for Topic Modelling on the review data and used Python and LDAVis library for its visualization Collaborated on the research presented by Dr. Nina Sharp at the 24th International Conference on Human-Computer Interaction",
		contract: ContractType.PartTime,
		type: 'Data Analyst',
		location: 'Tempe, AZ, US',
		period: { from: new Date("12/13/2021"), to: new Date("08/15/2022") },
		skills: getSkills('python', 'numpy'),
		name: 'Research Data Analyst',
		color: '#ffffff',
		links: [],
		logo: Assets.ASU,
		shortDescription: 'Assisted the DeSmart Lab in ASU for the ongoing research by doing data analysis and providing technological assistance'
	},
	{
		slug: 'software-freelance',
		company: 'Career Launcher',
		description: "Analyzed the dataset consisting of stock data of various companies using Keras, SciPy, Pandas and Scikit-Learn Achieved a stock trade call predicting accuracy of over 76% by visualizing stock data for technical analysis and designing a model by using existing trade calls and Bollinger Bands Improved the performance of a portfolio by 40% by diversifying the portfolio according to the Modern Portfolio Theory and performing clustering for analysis",
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Ahmedabad, Gujarat, India',
		period: { from: new Date("06/01/2020"), to: new Date("08/31/2020") },
		skills: getSkills('python', 'numpy', 'sklearn'),
		name: 'Software Developer Engineer Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.CareerLauncher,
		shortDescription: 'Conducted data analysis on the stock data of some companies along side predicting stock market and creating portfolio solutions as well'
	},
	{
		slug: 'software-freelance-junior',
		company: 'Smart Bridge Education Services Pvt. Ltd.',
		description: "Created a chat assistant which can resolve the user’s technical queries by giving the solution from a guide book Built the model with IBM Watson Assistant, IBM Watson Discovery, IBM Cloud Services and node-red",
		contract: ContractType.Internship,
		type: 'Artificial Intelligence',
		location: 'Ahmedabad, Gujarat, India',
		period: { from: new Date("05/01/2020"), to: new Date("06/31/2020") },
		skills: getSkills('css', 'html', 'nodejs', 'python'),
		name: 'Artificial Intelligence Intern',
		color: '#ffffff',
		links: [],
		logo: Assets.SmartBridge,
		shortDescription: 'Created and deployed a smart chat bot using IBM technologies'
	}
];

export default MY_EXPERIENCES;
