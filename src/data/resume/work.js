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
    name: 'Frequentis',
    position: 'Software Developer',
    url: 'https://www.frequentis.com/en',
    startDate: '2023-09-01',
    // summary: '',
    highlights: [
      'Led development of new functionalities in extensive Maven projects, also optimizing algorithms and data structures for system configurators, providing RESTful services that manage all Canadian air traffic. ',
      'Implemented Jenkins pipelines that automate development-level testing, perform SonarQube code analysis, generate software component binary artifacts, produce Docker images, and securely store them on Artifactory. ',
      'Refined the mission control and polling system for the legacy C++ systems, enhancing its efficiency by ~200%. ',
      'Proactively engaged with internal stakeholders to design key software architectures and led a team tech talk. ',
    ],
  },
  {
    name: 'Scotiabank',
    position: 'Data Scientist Intern',
    url: 'https://www.scotiabank.com/ca/en/personal.html',
    startDate: '2022-01-01',
    endDate: '2022-08-27',
    // summary: '',
    highlights: [
      'Developed the Python feature engineering and XGBoost model training pipelines for pricing optimization and income estimator projects. Processed over 1M customers’ data and achieved an overall accuracy of 87%. ',
      'Implemented a big data pipeline to extract, transform, and automate data ingestion from Colombia’s Oracle SQL database to GCP data lake, decreasing ingestion time by over 400%. Automated using Airflow DAGs and deployed containerized Apache Spark application on a Kubernetes cluster. ',
      'Devised MOB segmentation experiments to cluster data and performed hyperparameter tuning for ML models. ',
      'Performed advanced data analysis and data cleaning using Pandas and Matplotlib to extract business intel. ',
    ],
  },
  {
    name: 'University of Toronto',
    position: 'Software Developer Intern',
    url: 'https://www.utoronto.ca/',
    startDate: '2021-05-01',
    endDate: '2022-05-27',
    // summary: '',
    highlights: [
      'Innovated on RESTful Java Spring Boot APIs to yield more than 300% improvement in runtime by leveraging pre-processing, caching, advanced algorithms, and data structures to reduce latency on critical services.',
      'Automated data processing and extraction from PostgreSQL databases to support application functions. ',
      'Built Jenkins CI/CD pipelines to continuously test, integrate, and build Docker images of new software. ',
      'Developed an interactive web map using React, capable of displaying 50+ ArcGIS layers of road networks, heat maps, and Geospatial data to visualize historical climate trends and key indicators. ',
      'Drove Scrum meetings in an agile team aligning team members, assessing project direction, and removing blockers, leading to the completion of multiple core features within half the scoped time.',
    ],
  },
];

export default work;
