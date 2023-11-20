import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	s({
		slug: 'python',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'java',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'js',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'aws',
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'css',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		logo: Assets.HTML,
		name: 'HTML'
	}),
	s({
		slug: 'reactjs',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
	s({
		slug: 'nodejs',
		logo: Assets.NodeJs,
		name: 'NodeJS'
	}),
	s({
		slug: 'sql',
		logo: Assets.SQL,
		name: 'SQL'
	}),
	s({
		slug: 'android-studio',
		logo: Assets.Android,
		name: 'Android Studio'
	}),
	s({
		slug: 'numpy',
		logo: Assets.Numpy,
		name: 'NumPy'
	}),
	s({
		slug: 'pandas',
		logo: Assets.Pandas,
		name: 'Pandas'
	}),
	s({
		slug: 'sk-learn',
		logo: Assets.Sklearn,
		name: 'Sklearn'
	}),
	s({
		slug: 'tensorflow',
		logo: Assets.Tensorflow,
		name: 'TensorFlow'
	}),
	s({
		slug: 'keras',
		logo: Assets.Keras,
		name: 'Keras'
	}),
	s({
		slug: 'mongo-db',
		logo: Assets.MongoDB,
		name: 'MongoDB'
	}),
	s({
		slug: 'docker',
		logo: Assets.Docker,
		name: 'Docker'
	}),
	s({
		slug: 'spring',
		logo: Assets.Spring,
		name: 'Spring'
	})
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));
