// Shared projects data for project listings
export const projects = [
  {
    title: 'Personal Library Management System',
    image: `${process.env.PUBLIC_URL}/assets/DevOps.png`,
    description: 'A full-stack, containerized web application for managing a personal library. It features a Java Spring Boot backend and React frontend, fully automated with Terraform, Ansible, and Jenkins for robust infrastructure and CI/CD.',
    features: [
      'Book catalog management with metadata and cover image uploads',
      'Secure user authentication and registration flows',
      'Containerized deployment using Docker and Docker Compose',
      'Infrastructure as Code (IaC) provisioning with Terraform and Ansible',
      'Automated CI/CD pipeline using Jenkins'
    ],
    tech: ['React', 'Java Spring Boot', 'MySQL', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Personal-Library-Management-System-DevOps.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Personal-Library-Management-System-DevOps.git',
  },

  {
    title: 'Phishing Detection',
    image: `${process.env.PUBLIC_URL}/assets/phish-guard.png`,
    description: 'PhishGuard is a ML Powered Chrome extension that detects phishing by scanning pages and links.',
    features: [
      'On-device URL and text classification using a local Flask API',
      'Real-time phishing detection and user warnings',
      'Blocks malicious sites while preserving user privacy',
      'Chrome extension integration for seamless protection'
    ],
    tech: ['Python', 'Flask', 'scikit-learn', 'Chrome Extension APIs', ' JavaScript'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Phishing-Detection-Extension.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Phishing-Detection-Extension.git',
  },

  {

    title: 'Complaint Management System ',
    image: `${process.env.PUBLIC_URL}/assets/image.png`,
    description: 'We developed and deployed a full-stack web application to digitize and streamline the complaint and maintenance request process within the Faculty of Engineering.',
    features: [
      'Role-based dashboards for users and admins',
      'Complaint submission with automatic timestamping and status history',
      'Admin-controlled custom status updates and activity tracking',
      'Invitation-based login with public registration for low-level roles',
      'JWT-based authentication (access & refresh tokens) for secure sessions',
      'Passwords stored securely using hashing (bcrypt) and salted encryption'
    ],
    tech: ['React', 'Nest js', 'MySql'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/CoRe_Test.git',
    demo: 'https://co-re-test-front.vercel.app/',
  },

  {
    title: 'Volunteer Management Platform',
    image: `${process.env.PUBLIC_URL}/assets/1.png`,
    description: 'Developed a comprehensive volunteer management system that connects organizations with volunteers through an integrated digital platform. ',
    features: [
      'Event management and volunteer discovery system',
      'RESTful APIs with WebSocket real-time chat',
      'Donation campaign hosting and role-based access control',
      'Optimized MySQL schema and full project lifecycle management',
      'JWT-based authentication for API security and session management',
      'Secure password handling with hashing and encryption (bcrypt)'
    ],
    tech: ['Ballerina', 'React js', 'MySql'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/iwb25-009-targaryenx',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/iwb25-009-targaryenx',
  },

  {
    title: 'Driving License Tracker system',
    image: `${process.env.PUBLIC_URL}/assets/Driving-License-System.png`,
    description: 'The Driving License Tracker system is a web-based application for managing driving licenses and tracking violations. It allows users to register, manage their license details, and view their violation history. When a traffic violation occurs, an officer can record the violation in the system.',
    features: [
      'Users can view their profile and all violations associated with their account',
      'Admins and officers can create new violations with details such as type, description, and fine amount',
      'Each violation includes officer info, payment status, and receipts',
      'Complete history of violations including payment details',
      'Supports tracking for both registered users and unregistered citizens',
      'JWT-based authentication (access & refresh tokens) for secure sessions',
      'Passwords stored securely using hashing (bcrypt) and salted encryption'
    ],
    tech: ['React', 'Node/Express', 'MySQL'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Driving-License-Tracker.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Driving-License-Tracker.git',
  },

  {
    title: 'Network Monitoring Dashboard',
    image: `${process.env.PUBLIC_URL}/assets/NetworkDashboard.jpg`,
    description: 'A real-time network flood attack monitoring and visualization system.',
    features: [
      'Real-time monitoring of network performance and topology',
      'Live charts and visualizations for key metrics',
      'Alerting and filtering to quickly detect attacks',
      'Tools for diagnosis and performance analysis'
    ],
    tech: ['Python', 'Streamlit', 'scapy', 'pandas', 'pymongo', 'plotly'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Network-Dashboard.git',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Network-Dashboard.git',
  },
  {
    title: 'Budget Tracker',
    image: `${process.env.PUBLIC_URL}/assets/BudgetTracker.png`,
    description: 'Developed GUI interface for monitoring active connections, logging requests, and viewing connection Developed a comprehensive budget management application for both desktop and web platforms.',
    features: [
      'Robust CRUD operations for transactions',
      'Integrated calendar for tracking expenses',
      'Dynamic graphs and visualizations for financial data',
      'Cross-platform support for desktop and web'
    ],
    tech: ['React', 'Express js ', ' MySql', 'C#'],
    github: 'https://github.com/Pathum-Vimukthi-Kumara/Budget_Tracker',
    demo: 'https://github.com/Pathum-Vimukthi-Kumara/Budget_Tracker',
  },
];

export default projects;
