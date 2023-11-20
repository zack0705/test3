import Assets from './data/assets';
import { getSkills } from './skills.params';
import type { Project } from './types';

const MY_PROJECTS: Array<Project> = [
	{
		slug: 'face-rec',
		color: '#5e95e3',
		description:
			"Developed a distributed application which predicts the person from image or by a real-time live video by using AWS for backend services For video: Prepared Docker images for AWS lambda which fetches video from S3 bucket, processes on it and identifies the person in the video clip and sends the person’s information from DynamoDB For images: Created a web and app server using AWS EC2 instances. Used NodeJS for handling the connections between web server, application server, AWS SQS and AWS S3 buckets Configured auto scaling by using python and boto3 library which would dynamically generate app server AWS EC2 instances (maximum 19) by observing incoming requests Achieved a latency of 2-3 sec for the entire system",
		shortDescription:
			'A AWS based Real Time Face Recognition Service',
		links: [],//to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.FaceRec,
		name: 'FaceRec',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'nodejs', 'java', 'aws', 'html', 'css', 'tensorflow'),
		type: 'Cloud System'
	},
	{
		slug: 'android-app',
		color: '#ff3e00',
		description:
			'Designed an android application using Android Studio which helps user check their heart rate and respiratory rate with their smart phone and keep track of their symptoms Tracked current location of the user (using GPS) every 15 min and user’s health data to the MySQL database Secured user database by allowing access only by their password. The user can choose to share their data to a global server through a website',
		shortDescription:
			'An android application that helps users measure their heart rate and respiratory rate and keep track of COVID-19 symptoms',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Health,
		name: 'Health Tracker',
		period: {
			from: new Date()
		},
		skills: getSkills('java', 'sql', 'android-studio', 'html', 'css'),
		type: 'Android App',
		screenshots: [ ]
	},
	{
		slug: 'job-portal',
		color: '#ff3e00',
		description:
			'Built a full stack job portal system where users can search and/or add job postings with RESTful services using Spring Boot Utilized MongoDB for database along with MongoDB Compass and MongoDB Atlas Search for search functionalities Implemented frontend functionalities using React with JavaScript, HTML5 and CSS3 and used Swagger for testing purposes and Maven for accessing dependencies',
		shortDescription:
			'An full stack job posting and searching website',
		links: [],
		logo: Assets.Job,
		name: 'Job Portal',
		period: {
			from: new Date()
		},
		skills: getSkills('java', 'react', 'js', 'spring', 'html', 'css'),
		type: 'Website',
		screenshots: [ ]
	},
	{
		slug: 'sarcasm',
		color: '#ff3e00',
		description:
			'Built a model that would detect sarcasm from both text and audio by using over 6000 video clips of TV Series like Friends, TBBT, etc. Devised an audio model by implementing CNN and RNN algorithms to identify sarcastic sound patterns for sound processing Implemented NLP techniques to detect sarcasm in text and combined it with the audio model to make a hybrid model with 0.70 F-score value',
		shortDescription:
			'A hybrid machine learning that detects sarcasm through both audio and text',
		links: [{ to: 'https://github.com/zack0705/Multimodal-Sarcasm-Detection', label: 'GitHub' }],
		logo: Assets.Sarcasm,
		name: 'Multimodal Sarcasm Detection',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'sklearn', 'keras', 'tensorflow'),
		type: 'Machine Learning',
		screenshots: [ ]
	},
	{
		slug: 'music-recc',
		color: '#ff3e00',
		description:
			"The basic idea of this project is to recommend music using computer vision through a convolutional neural network. The network is first trained as a classifier with the labels being the 8 different genres of songs from the dataset. The trained network is then modified by discarding the softmax layer i.e. creating a new model which works as an encoder. This encoder takes as input slices of a spectrogram one at a time and outputs a 32 dimensional latent representation of that respective slice. This generates multiple latent vectors for one spectrogram depending on how many slices were generated. These multiple vectors are then averaged to get one latent representation for each spectrogram. The Cosine similarity metric is used to generate a similarity score between one anchor song and the rest of the songs in the test set. The two songs with the highest similarity score with respect to the anchor song are then outputted as the recommendations.",
		shortDescription:
			'A music recommendation system that recommends new songs based on the preference of a song by using the beats and rhythm of the song as a metric for similarity',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Music,
		name: 'Music Reccomender',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'sklearn', 'keras', 'tensorflow'),
		type: 'Android App',
		screenshots: [ ]
	},
	{
		slug: 'tank-wars',
		color: '#ff3e00',
		description:
			"Created a physics based two-player game of 2D tank battle by implementing real-life physics equations in algorithms for the trajectory paths of the tank shots and the two-player mechanism by using concepts of client server programming, socket programming and Peterson’s Algorithm ",
		shortDescription:
			'A real time multiplayer tank battle game',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Tank,
		name: 'Tank Wars',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'numpy'),
		type: 'Android App',
		screenshots: [ ]
	},
	{
		slug: 'bi-direction-search',
		color: '#ff3e00',
		description:
			"Implemented a bi-directional algorithm by using the algorithm of this research paper(https://ojs.aaai.org/index.php/AAAI/article/view/10436). Created a code to generate various kinds of environment of Pacman domain to test the performance of bi-directional search algorithm. Conducted T-test and ANOVA test of the results of bi-directional search algorithm and compared it to that of DFS, BFS, UCS, A*, etc. ",
		shortDescription:
			'Implemented and tested a bi directional search algorithm against the standard search algorithms and showcased its functionality',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Bi_Di,
		name: 'Bi-Directional Search',
		period: {
			from: new Date()
		},
		skills: getSkills('python'),
		type: 'Android App',
		screenshots: [ ]
	},
	{
		slug: 'parallelism',
		color: '#ff3e00',
		description:
			"This project was focused on investigating and comparing three parallelism techniques for training deep learning models: data parallelism, model parallelism, and pipeline parallelism. The objective was to determine the most efficient and effective technique for training large and complex models. The RESNET50 model was trained on the CIfar10 dataset for 20 epochs using each technique, and their performance was compared in terms of timing. The findings of the study revealed that pipeline parallelism offers the best trade-off between performance and efficiency for training deep learning models. The results of this project could have practical implications for industries that heavily rely on deep learning, such as healthcare and finance.",
		shortDescription:
			'A comparative study of various parallelism techniques',
		links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
		logo: Assets.Parallel,
		name: 'Parallelism Techniques',
		period: {
			from: new Date()
		},
		skills: getSkills('python', 'pandas', 'tensorflow'),
		type: 'Android App',
		screenshots: [ ]
	}
];

export default MY_PROJECTS;
