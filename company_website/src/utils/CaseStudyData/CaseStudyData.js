import IMAGES from "@/constants/images";

const caseStudyData = [
  {
    id: 1,
    title: "E-Shop Upgrade",
    category: "Web Application",
    images: [IMAGES.casestudy, IMAGES.Strategy1, IMAGES.Strategy2, IMAGES.blog],
    aboutProject:
      "We accelerated the client’s product development timeline, cutting delivery from six months to just three weeks. A data-driven and agile approach ensured cost optimization and market readiness.",
    platform: ["Ecommerce "],
    problemStatement: `
    The client struggled with frequent cart abandonment due to a lack of seamless navigation, delayed checkout processes, and a non-intuitive user journey. Moreover, backend inefficiencies caused system lags during high-traffic periods, impacting revenue growth.
    `,
    solution: `
     We built an intuitive, high-speed e-commerce platform using Vue.js for a sleek interface and Laravel for robust backend operations. MySQL was integrated for structured data management, and Google Cloud enabled real-time scalability. Enhanced navigation, one-click checkout, and faster load speeds drastically improved customer engagement and reduced cart abandonment rates.
    `,
    technologyIcons: [
      IMAGES.icons.googlecloud,
      IMAGES.icons.laravel,
      IMAGES.icons.mysql,
      IMAGES.icons.vuejs,
    ],
  },

  {
    id: 2,
    title: "FinTech Redefined",
    category: "Web Application",
    images: [IMAGES.casestudy, IMAGES.Strategy1, IMAGES.Strategy2, IMAGES.blog],
    aboutProject:
      "Our innovative approach helped modernize the client's business processes, reducing operational costs by 40 percents and improving efficiency across all departments within weeks.",
    platform: ["FinTech"],
    problemStatement:
      "The existing financial management system was outdated, with frequent data inconsistencies and the inability to support real-time transactions. These issues led to user dissatisfaction and hindered the scalability of their services.",
    solution: `
    We delivered an advanced FinTech platform using Angular for dynamic dashboards and Django for backend analytics. PostgreSQL ensured high-level data integrity, while AWS Lambda facilitated real-time payment processing. Tailored APIs enabled seamless third-party integration, boosting the system's overall reliability.
    `,
    technologyIcons: [
      IMAGES.icons.angular,
      IMAGES.icons.django,
      IMAGES.icons.postgresql,
      IMAGES.icons.awslambda,
    ],
  },

  {
    id: 3,
    title: "HIPAA-Health Solution ",
    category: "Web and Mobile Application",
    images: [IMAGES.casestudy, IMAGES.Strategy1, IMAGES.Strategy2, IMAGES.blog],
    aboutProject:
      "We empowered the client with cutting-edge technology, transforming an underperforming system into a scalable and customer-centric solution in record time.",
    platform: ["Healthcare "],
    problemStatement:
      "The client’s appointment scheduling system suffered from inefficient workflows, poor patient data management, and a lack of mobile compatibility, resulting in lost bookings and customer dissatisfaction.",
    solution: `
    Our team developed a HIPAA-compliant mobile and web app using React Native for seamless cross-platform usage. The backend, powered by Python Flask and hosted on Azure, enabled secure and scalable patient data management. Real-time notifications and an intuitive calendar feature streamlined appointment scheduling, improving overall patient experience.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.flask,
      IMAGES.icons.azure,
      IMAGES.icons.twillio,
    ],
  },

  {
    id: 4,
    title: "Smart Learning",
    category: "Web Application",
    images: [IMAGES.casestudy, IMAGES.Strategy1, IMAGES.Strategy2, IMAGES.blog],
    aboutProject:
      "By adopting future-proof strategies, we elevated the client’s platform, ensuring reliability and performance that exceeded market standards.",
    platform: ["EdTech"],
    problemStatement:
      "The client’s online learning portal experienced frequent crashes during peak usage and lacked interactive features, resulting in low engagement and a high dropout rate among users.",
    solution: `
    We created a robust learning management system with a React.js-based frontend and Ruby on Rails for backend development. Redis caching was implemented for faster load times, and WebRTC was integrated for seamless live video streaming. Additionally, gamification elements like quizzes and leaderboards were incorporated to boost user engagement.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.rubyrails,
      IMAGES.icons.redis,
      IMAGES.icons.webrtc,
    ],
  },

  {
    id: 5,
    title: "Faster Insights",
    category: "Data Analytics",
    images: [IMAGES.casestudy, IMAGES.Strategy1, IMAGES.Strategy2, IMAGES.blog],
    aboutProject:
      "We streamlined the client’s data processing workflow, cutting analysis time by 60 percent and enabling smarter decision-making capabilities.",
    platform: ["Data Analytics"],
    problemStatement:
      "The client faced challenges with processing large volumes of data, leading to delayed analytics and reporting. Moreover, the system lacked advanced visualization tools for actionable insights.",
    solution: `
    We implemented a scalable data pipeline using Apache Kafka and Spark for real-time data ingestion and processing. D3.js was used for creating interactive dashboards, while Google BigQuery supported fast and cost-effective analytics. The new system significantly reduced data processing time and enabled better business insights.
    `,
    technologyIcons: [
      IMAGES.icons.apachekafka,
      IMAGES.icons.spark,
      IMAGES.icons.d3,
      IMAGES.icons.bigquery,
    ],
  },

  {
    id: 6,
    title: "Retail Redesign",
    category: "Web Application",
    images: [IMAGES.casestudy, IMAGES.Strategy1, IMAGES.Strategy2, IMAGES.blog],
    aboutProject:
      "We revolutionized the client's digital presence by designing a user-first platform that achieved 300 percents growth in customer retention within six months.",
    platform: ["Retail"],
    problemStatement:
      "The client’s existing platform failed to engage customers due to an outdated design, slow search functionality, and lack of personalization features.",
    solution: `
    We revamped the platform with a customer-centric design using Svelte for high-speed frontend performance and Node.js for scalable backend processes. Elasticsearch was integrated for lightning-fast search capabilities, and a recommendation engine powered by TensorFlow added personalized shopping experiences.
    `,
    technologyIcons: [
      IMAGES.icons.svelte,
      IMAGES.icons.nodejs,
      IMAGES.icons.elasticsearch,
      IMAGES.icons.tensorflow,
    ],
  },
];

export default caseStudyData;
