/**
 * Sorna A — Engineering Portfolio
 * Project Data & Technical Specifications
 * Source of Truth: Engineering Resume
 */

export const projects = [
  {
    id: 'tremor-monitoring',
    number: '01',
    title: 'Wearable Hand Tremor Monitoring System',
    category: 'Biomedical Instrumentation & Inertial Sensing',
    status: 'Prototype & Analysis',
    statusDetail: 'Conceptual actuation & sEMG exploration',
    description:
      'Engineered an inertial sensing wearable system utilizing an MPU9250 9-axis IMU sensor securely mounted to an ergonomic wrist brace. Captured tri-axial acceleration, angular rate, and geomagnetic data to characterize physiological and pathological tremor frequency patterns. Explored surface electromyography (sEMG) sensor integration and adaptive actuator-based stabilization mechanisms as conceptual advancements.',
    keyPoints: [
      'MPU9250 9-axis IMU (accelerometer, gyroscope, magnetometer) wrist-brace integration',
      'Multi-axis kinematic motion data acquisition to characterize tremor frequency & amplitude',
      'Explored sEMG muscle activation sensing and adaptive counter-motion actuator concepts',
    ],
    technologies: [
      'MPU9250 9-Axis IMU',
      'Inertial Sensing',
      'Kinematic Analysis',
      'sEMG Concept',
      'Adaptive Actuation',
      'Embedded C/C++',
    ],
    technicalType: 'biomechanical',
  },
  {
    id: 'environmental-monitoring',
    number: '02',
    title: 'Drone-Inspired Environmental Monitoring System',
    category: 'IoT Systems & Environmental Telemetry',
    status: 'System Hardware Built',
    statusDetail: 'LabVIEW VI & logging interface planned',
    description:
      'Developed a compact multi-sensor environmental telemetry node anchored by a Raspberry Pi Pico microcontroller. Interfaced a DHT11 temperature/humidity sensor, an MQ-2 combustible gas and smoke detector, and a resistive soil moisture sensor with wireless telemetry facilitated by an ESP8266 Wi-Fi module. Planned an interactive LabVIEW virtual instrument interface for real-time telemetry visualization, threshold alerts, and automated CSV logging.',
    keyPoints: [
      'Raspberry Pi Pico microcontroller core managing synchronous sensor data acquisition',
      'Integrated DHT11 (temp/humidity), MQ-2 (gas/smoke), and resistive moisture transducers',
      'ESP8266 Wi-Fi transmission with planned LabVIEW VI for real-time alerts and CSV logging',
    ],
    technologies: [
      'Raspberry Pi Pico',
      'ESP8266 Wi-Fi',
      'DHT11 Sensor',
      'MQ-2 Gas Sensor',
      'Resistive Moisture',
      'LabVIEW (Planned)',
    ],
    technicalType: 'telemetry',
  },
  {
    id: 'intellipump-digital-twin',
    number: '03',
    title: 'IntelliPump – Digital-Twin-Based Pump Health Monitoring',
    category: 'Industrial Automation & Predictive Diagnostics',
    status: 'Workflow Developed',
    statusDetail: 'Physical sensor integration in progress',
    description:
      'Formulated a machine-learning analytical workflow for continuous predictive health monitoring and anomaly detection in industrial pump assemblies. Designed computational models utilizing pump vibration, operating temperature, line voltage, and phase current measurements. Developed an interactive digital-twin monitoring dashboard concept for health diagnostics, with physical hardware sensor integration currently in progress.',
    keyPoints: [
      'Multi-parameter sensor acquisition model: vibration, casing temperature, voltage, and current',
      'Machine-learning classification workflow for early-stage anomaly detection and degradation analysis',
      'Architected digital-twin dashboard concept with live physical sensor integration actively in progress',
    ],
    technologies: [
      'Digital Twin Concept',
      'Machine Learning',
      'Vibration Analysis',
      'Thermal Monitoring',
      'Current & Voltage Sensing',
      'Anomaly Detection',
    ],
    technicalType: 'digital-twin',
  },
  {
    id: 'vision-slam-navigation',
    number: '04',
    title: 'Vision-Based Navigation Using MASt3R + SLAM with Path Planning',
    category: 'Autonomous Robotics & Spatial Computing',
    status: 'Simulation Validated',
    statusDetail: 'MATLAB UAV simulation & visual odometry',
    description:
      'Built a comprehensive MATLAB-based simulation framework for vision-guided unmanned aerial vehicle (UAV) autonomous navigation. Explored dense 3D environment reconstruction and continuous spatial tracking leveraging MASt3R-SLAM representations. Implemented visual odometry estimation and combined it with an A* (A-Star) global path planning algorithm to compute optimal, collision-free flight trajectories.',
    keyPoints: [
      'MATLAB/Simulink autonomous aerial vehicle kinematic and visual simulation framework',
      'Explored MASt3R-SLAM representations for dense 3D scene reconstruction and feature tracking',
      'Integrated visual odometry and A* heuristic global path planning for collision-free trajectories',
    ],
    technologies: [
      'MATLAB / Simulink',
      'MASt3R-SLAM',
      'Visual Odometry',
      'Dense 3D Reconstruction',
      'A* Path Planning',
      'UAV Navigation',
    ],
    technicalType: 'robotics',
  },
]

export const experiences = [
  {
    id: 'nitttr-chennai',
    role: 'Research Intern',
    organization: 'NITTTR Chennai',
    department: 'National Institute of Technical Teachers Training and Research',
    location: 'Chennai, Tamil Nadu',
    period: 'June 2026',
    type: 'Research Internship',
    domain: 'Robotics & Vision-Based Navigation',
    description:
      'Conducted engineering research focused on Vision-Based Navigation Using MASt3R + SLAM with Path Planning for autonomous spatial navigation.',
    responsibilities: [
      'Worked on Vision-Based Navigation Using MASt3R + SLAM with Path Planning',
      'Performed MATLAB simulation for UAV trajectory modeling and odometry validation',
      'Explored dense visual SLAM techniques for 3D spatial reconstruction',
    ],
    skills: [
      'MASt3R-SLAM',
      'MATLAB Simulation',
      'Visual Odometry',
      'Dense 3D Reconstruction',
      'Path Planning',
    ],
  },
  {
    id: 'nlc-india-neyveli',
    role: 'Industrial Intern',
    organization: 'NLC India Limited',
    department: 'Thermal Power Plant',
    location: 'Neyveli, Tamil Nadu',
    period: 'Industrial Training',
    type: 'Industrial Internship',
    domain: 'Power Generation & Industrial Instrumentation',
    description:
      'Underwent technical plant training on large-scale thermal power generation, core machinery, and heavy industrial instrumentation systems.',
    responsibilities: [
      'Studied boilers, steam turbines, high-voltage generators, and auxiliary plant equipment',
      'Studied industrial instrumentation systems used for continuous plant monitoring and control',
      'Gained comprehensive knowledge of lignite-based power generation cycles and strict industrial safety procedures',
    ],
    skills: [
      'Thermal Power Generation',
      'Boilers & Steam Turbines',
      'Industrial Instrumentation',
      'Auxiliary Plant Systems',
      'Industrial Safety Protocols',
    ],
  },
  {
    id: 'cornerstone-engineering',
    role: 'Engineering Intern',
    organization: 'Cornerstone Engineering Solutions',
    department: 'Industrial Automation Division',
    location: 'Puducherry',
    period: 'Technical Training',
    type: 'Technical Internship',
    domain: 'Industrial Automation & PLC Systems',
    description:
      'Completed practical training on industrial automation architecture, programmable controllers, and relay control systems.',
    responsibilities: [
      'Learned PLC fundamentals, ladder logic architectures, and industrial relays',
      'Gained hands-on exposure to relay and PLC operation in simulated industrial environments',
      'Studied introductory SCADA system design and modern industrial automation practices',
    ],
    skills: [
      'PLC Fundamentals',
      'Industrial Relays',
      'Introductory SCADA',
      'Ladder Logic Concepts',
      'Automation Practices',
    ],
  },
]

export const skillCategories = [
  {
    id: 'electronics',
    number: '01',
    title: 'Electronics & Solid-State Circuits',
    icon: 'Cpu',
    description:
      'Discrete semiconductor devices, power switching components, and analog operational amplifier circuit topologies.',
    subcategories: [
      {
        name: 'Devices & Solid-State Components',
        skills: ['Diodes', 'Transistors', 'FETs', 'SCR', 'UJT', 'DIAC', 'TRIAC', 'Operational Amplifiers'],
      },
      {
        name: 'Circuit Topologies',
        skills: ['Amplifiers', 'Oscillators', 'Rectifiers', 'Multivibrators', 'Wave-Shaping Circuits'],
      },
    ],
  },
  {
    id: 'instrumentation',
    number: '02',
    title: 'Instrumentation & Process Control',
    icon: 'Sliders',
    description:
      'Transducer principles, process variable measurement, and closed-loop industrial feedback control systems.',
    subcategories: [
      {
        name: 'Variable Measurement',
        skills: ['Sensors & Transducers', 'Temperature Measurement', 'Pressure Measurement', 'Level Measurement', 'Flow Measurement'],
      },
      {
        name: 'Control Elements & Loops',
        skills: ['Industrial Instrumentation', 'Process Control Systems', 'Control Valves', 'PID Controllers'],
      },
    ],
  },
  {
    id: 'embedded',
    number: '03',
    title: 'Embedded Systems & Hardware',
    icon: 'Layers',
    description:
      'Microcontroller platforms, legacy processor architectures, and peripheral sensor interfacing.',
    subcategories: [
      {
        name: 'Computing Targets',
        skills: ['Arduino UNO', 'LPC2148 ARM', '8051 Microcontroller', '8085 Microprocessor'],
      },
      {
        name: 'Sensor Interfacing',
        skills: ['Sensor Interfacing', 'Eye-Blink Sensors', 'IR (Infrared) Sensors'],
      },
    ],
  },
  {
    id: 'automation',
    number: '04',
    title: 'PLC & Industrial Automation',
    icon: 'Workflow',
    description:
      'Programmable logic controller execution, standard current telemetry loops, and supervisory architectures.',
    subcategories: [
      {
        name: 'Industrial Control & I/O',
        skills: ['PLC Fundamentals', 'Analog & Digital I/O', '4–20 mA Signal Basics', 'SCADA Fundamentals'],
      },
    ],
  },
  {
    id: 'software',
    number: '05',
    title: 'Software & Simulation Tools',
    icon: 'Code2',
    description:
      'Computational modeling environments, electronic schematic capture, and virtual instrumentation suites.',
    subcategories: [
      {
        name: 'Engineering Environments',
        skills: ['Arduino IDE', 'Proteus', 'LabVIEW', 'Keil µVision', 'MATLAB', 'Simulink'],
      },
    ],
  },
]

export const achievements = [
  {
    id: 'fruit-ripeness-poster',
    number: '01',
    ordinal: 'Second Prize',
    title: 'Mini Project Poster Presentation',
    context: 'Fruit Ripeness Sensor Project',
    department: 'Department of Electronics & Instrumentation Engineering',
    institution: 'Puducherry Technological University',
    category: 'Technical Presentation',
    icon: 'Presentation',
    description:
      'Awarded second prize for the poster presentation on the Fruit Ripeness Sensor project, organized by the Department of Electronics and Instrumentation Engineering at Puducherry Technological University.',
  },
  {
    id: 'jigyasa-quiz-2026',
    number: '02',
    ordinal: 'Second Prize',
    title: 'Quiz Competition: Jigyasa 2026',
    context: 'Departmental Academic Competition',
    department: 'Department of Electronics & Instrumentation Engineering',
    institution: 'Puducherry Technological University',
    category: 'Academic Quiz',
    icon: 'Award',
    description:
      'Secured second prize in the Jigyasa 2026 quiz competition organized by the Department of Electronics and Instrumentation Engineering at Puducherry Technological University.',
  },
  {
    id: 'coco-sports-competition',
    number: '03',
    ordinal: 'Second Prize',
    title: 'Coco Sports Competition',
    context: 'Inter-Departmental Athletics',
    department: 'Sports Department',
    institution: 'Puducherry Technological University',
    category: 'Athletics',
    icon: 'Trophy',
    description:
      'Achieved second prize in the Coco sports competition organized by the Sports Department at Puducherry Technological University.',
  },
]

export const certifications = [
  {
    id: 'wildlife-ecology',
    title: 'Wildlife Ecology',
    provider: 'NPTEL',
    period: '2024',
    type: 'NPTEL Certification',
    category: 'course',
  },
  {
    id: 'forest-land-management',
    title: 'Forest and Land Management',
    provider: 'NPTEL',
    period: '2025',
    type: 'NPTEL Certification',
    category: 'course',
  },
  {
    id: 'biomedical-workshop',
    title: 'Biomedical Engineering Workshop',
    provider: 'NIT Puducherry',
    period: '2023',
    type: 'Technical Workshop',
    category: 'workshop',
  },
  {
    id: 'esp32-iot-workshop',
    title: 'IoT Made Easy with ESP32',
    provider: 'VIT Vellore',
    period: 'March 2026',
    type: 'Technical Workshop',
    category: 'workshop',
  },
  {
    id: 'design-thinking-workshop',
    title: 'Design Thinking Workshop',
    provider: 'Department of Electronics & Instrumentation Engineering, Puducherry Technological University',
    period: 'Institutional Workshop',
    type: 'Departmental Workshop',
    category: 'workshop',
  },
]

export const contactInfo = {
  email: 'sornaarumugam0721@gmail.com',
  location: 'Puducherry, India',
  institution: 'Puducherry Technological University',
  department: 'Department of Electronics & Instrumentation Engineering',
  // TODO: Add Sorna's verified LinkedIn profile URL when available (e.g., https://linkedin.com/in/username)
  linkedin: null,
  // TODO: Add Sorna's verified GitHub profile URL when available (e.g., https://github.com/username)
  github: null,
}




