/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Scotiabank',
    position: 'Software Engineer',
    url: 'https://www.scotiabank.com/ca/en/personal.html',
    startDate: '2022-01-01',
    endDate: '2022-08-27',
    summary: 'Worked with a team of engineers and data scientists to develop ML pipelines',
    highlights: [
      'Developed the feature engineering, and ML model training pipelines using Python, XGBoost, and LGBM, processed over 1M customers data, and improved its accuracy by 14%.',
      'Implemented reusable ML pipelines for mortgage price optimization and income estimator projects.',
      'Developed an Airflow data ingestion pipeline using Spark, Oracle SQL database, and Kubernetes that decreased data ingestion time by over 200%.',
      'Conduct research on MOB segmentation and devise computational experiments to cluster data.',
      'Proactively engaged with stakeholders to design software architecture and led a team tech-talk.',
    ],
  },
  {
    name: 'University of Toronto',
    position: 'Full-Stack Developer',
    url: 'https://www.utoronto.ca/',
    startDate: '2021-05-01',
    endDate: '2022-05-01',
    summary: 'Lead development of a series of websites, APIs, interactive web maps, and mobile apps',
    highlights: [
      'Led development of a series of websites and interactive web maps capable of displaying multiple layers of GIS and Geospatial data to visualize historical climate trends and key indicators.',
      'Implemented a RESTful Java API that computes climate statistics in agile development cycles.',
      'Developed a mobile application capable of collecting geolocation and climate data. The web maps actively display and integrate the collected data in real time.',
      'Maintained the capacity and performance of web servers, APIs, and databases.',
    ],
  },
];

export default work;
