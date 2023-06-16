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
    position: 'Software Engineer Intern',
    url: 'https://www.scotiabank.com/ca/en/personal.html',
    startDate: '2022-01-01',
    endDate: '2022-08-27',
    summary: 'Worked with a team of engineers and data scientists to develop ML pipelines',
    highlights: [
      'Developed the feature engineering and ML model training pipelines for mortgage price optimization and income estimator. Utilized XGBoost to process over 1M customers\' data and achieved an overall accuracy of 90%.',
      'Implemented an Airflow DAG to automate data ingestion from Oracle SQL database to GCP data lake that decreased ingestion time by over 400%. The pipeline is built using Kubernetes, Docker, and PySpark.',
      'Devised MOB segmentation experiments to cluster data and performed hyperparameter tuning for ML models.',
      'Automated comprehensive tests on code and pipelines using Pytest, committing to CI efforts.',
      'Proactively engaged with internal stakeholders to design key software architecture and led a team tech talk.',
    ],
  },
  {
    name: 'University of Toronto',
    position: 'Full-Stack Developer',
    url: 'https://www.utoronto.ca/',
    startDate: '2021-05-01',
    endDate: '2022-05-27',
    summary: 'Led development of a series of web apps, APIs, and mobile apps',
    highlights: [
      'Led development of a series of interactive web maps using React, capable of displaying 50+ ArcGIS road-network layers, heat maps, and Geospatial data to visualize historical climate trends and key indicators.',
      'Innovated on RESTful Java Spring Boot APIs to yield more than 300% improvement in runtime by leveraging pre-processing, caching, advanced algorithms, and data structures to reduce latency on critical services.',
      'Developed API\'s capability to efficiently retrieve real-time and pre-processed data from PostgreSQL database.',
      'Built CI/CD pipelines with GitHub actions to continuously test and deploy new versions of web apps and APIs.',
      'Drove Scrum meetings in an agile team aligning team members, assessing project direction, and removing blockers, leading to the completion of multiple core features within half the scoped time.',
    ],
  },
];

export default work;
