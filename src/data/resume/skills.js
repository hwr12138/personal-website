const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Maven',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'GoLang',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'AWS',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jenkins',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Prometheus',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Grafana',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Data Science / Data Mining',
    competency: 4,
    category: ['ML'],
  },
  {
    title: 'Neo4j',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Git/Bitbucket',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Python', 'ML'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['ML', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML', 'Python'],
  },
  {
    title: 'Typescript',
    competency: 2,
    category: ['Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML'],
  },
  {
    title: 'C++',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['ML', 'Python'],
  },
  {
    title: 'XGBoost',
    competency: 4,
    category: ['ML', 'Python'],
  },
  {
    title: 'Django',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['ML', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['ML', 'Python'],
  },
  {
    title: 'Spark',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Pylint',
    competency: 3,
    category: ['Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
