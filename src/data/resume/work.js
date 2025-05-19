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
    endDate: '2025-06-30',
    // summary: '',
    highlights: [
      'Led the design and development of mission-critical microservices for Canadian air traffic management.',
      'Optimized the core voice communication system, significantly improving runtime performance improvement through algorithmic and data structure enhancements.',
      'Ensured software quality through comprehensive unit, component, integration, and system testing.',
      'Proactively led design review meetings with internal stakeholders to communicate software architecture and present high-level system diagrams.',
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
      'Developed the Python feature engineering and XGBoost model training pipelines for pricing optimization and income estimator projects.',
      'Implemented a big data pipeline to extract, load, transform (ETL), and automate data ingestion from Colombias Oracle SQL database to a GCP data lake, greatly decreasing ingestion time. Automated using Airflow DAGs and deployed containerized Apache Spark application on a Kubernetes cluster.',
      'Devised MOB segmentation experiments to cluster data and performed hyperparameter tuning for ML models.',
      'Performed advanced data analysis and data sanitization using Pandas and Matplotlib to extract business intel.',
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
      'Innovated on Python Django microservices, improving runtime efficiency by leveraging pre-processing, caching, advanced algorithms, and data structures to reduce latency on RESTful API services.',
      'Automated data processing and extraction from PostgreSQL databases to support application functions.',
      'Developed an interactive web map using React.js capable of displaying 50+ ArcGIS layers of road networks, heat maps, and Geospatial data to visualize historical climate trends and key indicators.',
      'Drove Scrum meetings in a cross-functional agile team, aligning software requirements, producing system documentation, and assessing project direction.',
    ],
  },
];

export default work;
