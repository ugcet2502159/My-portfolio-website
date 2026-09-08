import { Project, Certificate, LeadershipItem, EducationItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Apeksha Anantha Krishna',
  shortName: 'Apeksha A.K.',
  role: 'Aspiring Technology Professional & AI/Data Science Student',
  badge: 'B.Tech • AI & Data Science • REVA University',
  bio: 'An aspiring technology professional passionate about programming, problem-solving, AI, and building practical solutions.',
  extendedBio: [
    'I am a B.Tech student specializing in Artificial Intelligence and Data Science with a strong interest in programming and technical problem-solving. My academic journey has helped me build a foundation in C and Python while developing my logical thinking and problem-solving abilities.',
    'I have gained practical exposure through academic projects in IoT and 2D graphics. I am a responsible and disciplined learner who is willing to take on new challenges and continuously learn.'
  ],
  email: 'apekshakrishna9@gmail.com',
  githubUrl: 'https://github.com/apekshakrishna9-star',
  githubUser: 'github.com/apekshakrishna9-star',
  linkedinUrl: 'https://linkedin.com/in/apeksha-anantha-krishna-04961a384',
  linkedinUser: 'LinkedIn Profile',
  quote: '“Designed & built with curiosity and continuous learning.”'
};

export const HIGHLIGHT_CARDS = [
  {
    id: 'highlight-1',
    icon: 'school',
    title: 'B.Tech – AI & Data Science',
    description: 'REVA University student building core analytical and computational acumen.'
  },
  {
    id: 'highlight-2',
    icon: 'data_object',
    title: 'Foundational Programming',
    description: 'Structured logic, data structures, and algorithmic implementation in C & Python.'
  },
  {
    id: 'highlight-3',
    icon: 'developer_board',
    title: 'Applied Systems',
    description: 'Hands-on exposure bridging hardware sensors (IoT) and 2D computer graphics concepts.'
  },
  {
    id: 'highlight-4',
    icon: 'psychology',
    title: 'Learner Mindset',
    description: 'Consistent discipline, open to feedback, and committed to persistent self-improvement.'
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'prog-lang',
    title: 'Programming Languages',
    icon: 'code',
    skills: ['C', 'Python']
  },
  {
    id: 'prog-fund',
    title: 'Programming Fundamentals',
    icon: 'account_tree',
    skills: ['Variables', 'Control Structures', 'Functions', 'Programming Logic', 'Basic Problem-Solving']
  },
  {
    id: 'ds-ml',
    title: 'Data Science & Machine Learning',
    icon: 'query_stats',
    skills: ['Fundamental Concepts', 'Introductory Implementation']
  },
  {
    id: 'ai-app',
    title: 'AI & Application Development',
    icon: 'smart_toy',
    skills: ['AI-Based Solution Design', 'Problem Solving']
  },
  {
    id: 'dev-tools',
    title: 'Development Tools',
    icon: 'construction',
    skills: ['GitHub', 'Visual Studio Code']
  },
  {
    id: 'eng-prob',
    title: 'Problem Solving & Engineering',
    icon: 'lightbulb',
    skills: ['Debugging', 'Logical Thinking', 'Programming Implementation', 'Technical Documentation']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-soil-moisture',
    title: 'Smart Soil Moisture Detection & Automatic Irrigation System',
    category: 'IoT & Embedded Systems',
    status: 'Active Telemetry',
    description: 'An IoT-based system designed to monitor soil moisture and support automatic irrigation based on soil moisture conditions.',
    pipeline: [
      { icon: 'water_drop', label: 'Moisture Sensor' },
      { icon: 'memory', label: 'NodeMCU / ESP' },
      { icon: 'power', label: 'Relay & Pump' }
    ],
    highlight: 'The system activates irrigation based on soil moisture conditions and provides monitoring/control through Blynk.',
    tags: [
      'NodeMCU / ESP8266',
      'Soil Moisture Sensor',
      'Relay Module',
      'Water Pump',
      'Blynk IoT App'
    ],
    type: 'iot-simulator',
    fullDetails: {
      problemStatement: 'Manual irrigation frequently leads to over-watering or under-watering of vegetation. This project automates moisture sampling with real-time cloud feedback and autonomous water pump actuation.',
      hardwareComponents: [
        'Capacitive & Resistive Soil Moisture Probe (analog signal)',
        'NodeMCU ESP8266 Wi-Fi Microcontroller',
        'Single-channel 5V Optocoupler Relay Module',
        'Mini Submersible DC Water Pump (3V-6V)',
        'Tubing and reservoir assembly'
      ],
      softwareStack: [
        'C / C++ (Arduino IDE for firmware)',
        'Blynk IoT Cloud Protocol & Mobile Application',
        'Wi-Fi 802.11 b/g/n Telemetry stream'
      ],
      keyOutcomes: [
        'Continuous analog soil moisture sampling with threshold calibration',
        'Automatic relay trigger when soil moisture drops below 35%',
        'Manual override toggle via Blynk mobile dashboard from anywhere',
        'Push notifications when water reservoir requires replenishment'
      ]
    }
  },
  {
    id: '2d-graphics-project',
    title: '2D Graphics Project',
    category: 'Computer Graphics',
    status: 'Academic Showcase',
    description: 'An academic 2D graphics project demonstrating fundamental computer graphics concepts through graphical elements and visual interaction.',
    highlight: 'Demonstrates Cartesian coordinate systems, geometric primitives, 2D matrix transformation pipeline, and viewport mapping.',
    tags: [
      'Coordinate systems',
      '2D rendering pipelines',
      'Visual interactivity'
    ],
    type: 'graphics-2d',
    fullDetails: {
      problemStatement: 'Understanding the mathematical foundations of visual computing requires hands-on exploration of matrix translation, rotation, scaling, and pixel rasterization algorithms.',
      softwareStack: [
        'C Programming / Graphics Libraries',
        'Cartesian & Normalized Device Coordinates (NDC)',
        'Linear Algebra: 2D Affine Transformation Matrices',
        'Interactive Keyboard & Mouse Event Polling'
      ],
      keyOutcomes: [
        'Real-time translation, rotation, and scaling of 2D polygons',
        'Coordinate axis clipping and viewport transformation',
        'Bresenham line and circle rasterization fundamentals',
        'Interactive parameter tuning with real-time canvas redraws'
      ]
    }
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: 'wadhwani',
    title: 'Wadhwani Foundation Certificate',
    category: 'Professional Skills',
    subtitle: 'Professional development & foundational skills credential',
    issuer: 'Wadhwani Foundation',
    issueDate: '2024',
    credentialId: 'WF-NEN-2024-AK09',
    summary: 'Comprehensive certification verifying workplace readiness, critical problem-solving methodologies, self-leadership, and cross-functional team communication.',
    skillsVerified: [
      'Workplace Professionalism',
      'Structured Problem-Solving',
      'Communication & Presentation',
      'Critical Thinking & Team Agility'
    ]
  },
  {
    id: 'ibm',
    title: 'IBM Certificate',
    category: 'Technical Skills',
    subtitle: 'Technical & computational skills foundation',
    issuer: 'IBM SkillsBuild / IBM Academic Initiative',
    issueDate: '2024',
    credentialId: 'IBM-SB-AI-849204',
    summary: 'Demonstrated proficiency in foundational computational systems, artificial intelligence principles, algorithmic concepts, and modern cloud technologies.',
    skillsVerified: [
      'Artificial Intelligence Principles',
      'Computational Thinking',
      'Data Analysis Foundations',
      'Emerging Technologies in Cloud & Cognitive Computing'
    ]
  }
];

export const LEADERSHIP_ITEMS: LeadershipItem[] = [
  {
    id: 'school-captain',
    title: 'School Captain',
    description: 'Served as School Captain and helped coordinate school-related activities and student initiatives.',
    icon: 'shield_person'
  },
  {
    id: 'elected-leader',
    title: 'Elected Student Leader',
    description: 'Gained valuable practical experience in responsibility, public communication, and personal confidence.',
    icon: 'how_to_reg'
  },
  {
    id: 'march-past',
    title: 'March-Past Troop Captain',
    description: 'Led the school\'s march-past troop, instilling coordination, discipline, synchronization, and teamwork.',
    icon: 'flag'
  },
  {
    id: 'team-leadership',
    title: 'Team Leadership',
    description: 'Consistent experience guiding, collaborating with, and coordinating fellow students during events.',
    icon: 'groups_3'
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'btech',
    statusLabel: 'Currently Pursuing',
    degree: 'B.Tech – Artificial Intelligence & Data Science',
    institution: 'REVA University',
    isCurrent: true
  },
  {
    id: 'pu-college',
    statusLabel: '2025 • 91% Score',
    degree: '12th / Pre-University Course',
    institution: 'Mahesh PU College, Chitradurga',
    score: '91%',
    year: '2025'
  },
  {
    id: 'secondary',
    statusLabel: '2023 • 87.8% Score',
    degree: '10th / Secondary School',
    institution: 'SJMR School, M.K. Hatti, Chitradurga',
    score: '87.8%',
    year: '2023'
  }
];

export const CURRENT_FOCUS_DATA = {
  badge: 'Fresher / Student Explorer',
  bio: 'I am currently focused on strengthening my programming and technical foundation, building academic projects, exploring AI and data science, and gaining practical experience through hands-on learning.',
  points: [
    {
      icon: 'terminal',
      text: 'Data structure practice & algorithm logic'
    },
    {
      icon: 'neurology',
      text: 'AI model fundamentals & basic math'
    },
    {
      icon: 'sensors',
      text: 'IoT experimentation with microcontrollers'
    }
  ]
};
