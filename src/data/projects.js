// TODO Add a couple lines about each project
const data = [
  {
    title: 'Black-Scholes Options Pricing App',
    subtitle: 'Streamlit Python Application',
    image: '/images/projects/bscholes.png',
    date: '2025-05-18',
    desc: 'Developed and deployed an interactive web application using Streamlit and Python for calculating theoretical option prices and key "Greeks" based on the Black-Scholes model. Features include configurable heatmaps to visualize price trends, risk sensitivities, and PnL for traders. App Link: https://my-black-scholes.streamlit.app/',
  },
  {
    title: 'gRPC Market Data Dissemination System',
    subtitle: 'C++ client-server application',
    image: '/images/projects/market_data.png',
    date: '2024-12-02',
    desc: 'Developed a C++ client-server app simulating a real-time market data feed using gRPC and Protocol Buffers.',
  },
  {
    title: 'NEAR Validator Node Monitoring App',
    subtitle: 'Devops application',
    image: '/images/projects/grafana.jpg',
    date: '2023-07-05',
    desc: 'Setup and deployed a containerized NEAR validator node on an AWS EC2 instance to validate transactions. Deployed a Prometheus app to monitor node performance and a Grafana dashboard to plot graphs of key stats.',
  },
  {
    title: 'Handwriting Recognizer - Neural Network',
    subtitle: 'Neural network that recognizes hand written digits',
    image: '/images/projects/digit.jpg',
    date: '2023-03-20',
    desc: 'Trained a neural network in C using back-propagation to classify hand-written digits with an accuracy of 93%. ',
  },
  {
    title: 'Cat and Mouse Game AI',
    subtitle: 'A reinforcement learning model that plays the cat and mouse game',
    image: '/images/projects/cat_mouse.jpg',
    date: '2023-02-28',
    desc: 'Trained a feature-based reinforcement learning algorithm in C to play the cat and mouse game in a maze. Achieved 86% win-rate using the Q-learning algorithm, feature selection is optimized by hyperparameter tuning. ',
  },
  {
    title: 'Cipher Chat Platform',
    subtitle: 'Full-stack application',
    image: '/images/projects/chat_app.jpg',
    date: '2022-12-05',
    desc: 'Implemented a SHA-encrypted chat platform utilizing a static client, RESTful Flask server, and MongoDB. Capable of user registration, login, direct messaging, joining chat rooms, global chat, and keeping chat history.',
  },
  {
    title: 'Boundary Breaker',
    subtitle: 'Full-stack mobile application',
    image: '/images/projects/grocery.jpg',
    date: '2021-11-20',
    desc: 'Developed a full-stack application with a RESTful Django (Python) API, a SQL database, and a Flutter mobile interface to display an in-store map and help users navigate from their location to in-store goods.',
  },
];

export default data;
