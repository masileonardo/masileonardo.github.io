/* =====================================================================
   DATI DEI PROGETTI: modifica questo file per aggiungere o cambiare progetti.
   - Ogni progetto e' un blocco { ... }. Per aggiungerne uno copia un blocco,
     cambia i testi e metti le foto in assets/img/.
   - "repo" e' il nome del repository su GitHub ("" se non c'e').
   - "video" e' il link YouTube completo ("" se non c'e').
   - "fit": "contain" mostra l'immagine intera (schemi, grafici); per le foto
     lascialo fuori.
   ===================================================================== */

const GITHUB_USER = "masileonardo";

const SITE = {
  email: "leomasi1705@gmail.com",
  linkedin: "https://www.linkedin.com/in/leonardo-masi-b09b28219/",
  youtube: "https://www.youtube.com/@leonardomasi1633",
};

/* Tesi in corso, mostrata in alto */
const CURRENT = {
  id: "ucl-soft-capsule",
  title: "Soft robotic capsule for endoscopy",
  context: "Master thesis | UCL Hawkes Institute, London",
  year: "09/2026 - 01/2027",
  status: "In progress",
  summary:
    "Design and development of a soft robotic capsule for injectable therapies in small and large bowel endoscopy. I'm working on the whole prototype, from the mechanical design to the electronics and firmware.",
  bullets: [
    "Mechanical design with SolidWorks;",
    "Electronics and firmware on STM32 (Nucleo-64 F401RE);",
    "FDM and SLA 3D printing (Bambu Lab, Formlabs);",
    "Fabrication of silicone parts.",
  ],
  tags: ["SolidWorks", "STM32", "3D printing", "Silicone"],
  note: "The project is still in progress, so I can't share code and photos yet.",
};

/* Gruppi di progetti, in questo ordine */
const CATEGORIES = [
  { id: "robotics", title: "Robotics" },
  { id: "electronics", title: "Biomedical and electronics" },
  { id: "modelling", title: "Modelling and identification" },
];

const PROJECTS = [
  {
    id: "franka-manipulation",
    category: "robotics",
    title: "Robotics Manipulation Challenge",
    context: "Master's exam",
    year: "", // TODO: anno
    summary:
      "Automated robotic manipulation pipeline with a Franka Research 3 arm and an Intel RealSense D435i camera, all based on ROS Noetic.",
    overview:
      "I developed an automated robotic manipulation pipeline using a Franka Research 3 robotic arm with an Intel RealSense D435i RGB-D camera. The system relies entirely on ROS Noetic to do pick and place of objects with different shapes and colors, ArUco marker recognition and tracking, and object detection. Everything was tested both in simulation (Gazebo and RViz) and on the real robot.",
    bullets: [
      "Implemented a multi-node ROS Noetic system managed by a central node that communicates with ROS topics and action clients;",
      "ArUco marker recognition and tracking;",
      "Object recognition with YOLOv8;",
      "Computed the centroid of the colored objects for pick and place;",
      "Preliminary tests and trajectory planning in simulation with Gazebo and RViz;",
      "Validated and executed the full pipeline on the real Franka Research 3.",
    ],
    tags: ["ROS Noetic", "Franka FR3", "RealSense D435i", "YOLOv8", "Gazebo", "RViz"],
    images: [
      { src: "franka-aruco.jpg", caption: "ArUco recognition", fit: "contain" },
      { src: "franka-yolo.jpg", caption: "Object recognition with YOLOv8", fit: "contain" },
      { src: "franka-centroids.jpg", caption: "Color objects centroid for pick and place", fit: "contain" },
    ],
    repo: "franka-manipulation-ros",
    video: "",
  },
  {
    id: "perseverance-rover",
    category: "robotics",
    title: "Rover Perseverance | Mission Simulator",
    context: "Personal project",
    year: "2021",
    summary:
      "Mechatronic prototype that simulates the autonomous operations of the Perseverance rover on Mars.",
    overview:
      "I developed a mechatronic prototype to simulate the autonomous operations of the Perseverance rover on Mars. The project focused on autonomous navigation, environmental monitoring and sample collection, integrating two different hardware architectures (LEGO Mindstorms and Arduino) to expand what the system can do.",
    bullets: [
      "Line follower algorithm for path tracking;",
      "Color-based vision system to identify specific waypoints;",
      "Designed and programmed a gripper mechanism;",
      "I2C communication between LEGO Mindstorms and Arduino;",
      "Custom 3D-printed parts designed in SolidWorks.",
    ],
    tags: ["Arduino", "LEGO Mindstorms", "I2C", "SolidWorks", "3D printing"],
    images: [
      { src: "rover-photo.jpg", caption: "The rover" },
      { src: "rover-line-follower.jpg", caption: "Line follower path with color waypoints" },
      { src: "rover-exploded.jpg", caption: "Robot exploded view", fit: "contain" },
    ],
    repo: "perseverance-rover-simulator",
    video: "https://youtu.be/JlRWyniSSKs",
  },
  {
    id: "tangent-bug",
    category: "robotics",
    title: "Implementation of the Tangent Bug algorithm",
    context: "Master's project work",
    year: "2026",
    summary:
      "Simulation of the Tangent Bug algorithm in Python, testing it by changing the main parameters.",
    overview:
      "Simulation of the algorithm in a virtual environment written in Python, to test how it behaves when the main parameters change.",
    bullets: [
      "Implemented a two-state machine: move-to-goal and boundary-following behavior;",
      "Created a graphical interface and GIFs with different parameters.",
    ],
    tags: ["Python", "Path planning"],
    images: [{ src: "tangent-bug.jpg", caption: "Tangent Bug simulation", fit: "contain" }],
    repo: "tangent-bug-planner",
    video: "",
  },
  {
    id: "lidar-analysis",
    category: "robotics",
    title: "Performance analysis of Lidar L1 in indoor and outdoor environments",
    context: "Master's project work",
    year: "2025",
    summary:
      "Tests on the Unitree Lidar L1 to find the best way to use it for autonomous navigation.",
    overview:
      "I tested the Unitree Lidar L1 to find the best operating parameters for autonomous navigation. I looked at the precision and reliability of the sensor in different environments, and at how installation height, orientation and environmental conditions change the quality of the data. The results are useful to tune SLAM algorithms in different scenarios.",
    bullets: [
      "Used ROS to interface with the Lidar L1 and record the data;",
      "Exported the raw data to CSV for the statistical analysis;",
      "Used MATLAB to process the point clouds and check the consistency of the SLAM maps.",
    ],
    tags: ["ROS", "MATLAB", "Point clouds", "SLAM"],
    images: [
      { src: "lidar-pointcloud.jpg", caption: "Example of acquisition", fit: "contain" },
      { src: "lidar-l1.jpg", caption: "Unitree Lidar L1", fit: "contain" },
    ],
    repo: "lidar-l1-performance-analysis",
    video: "",
  },
  {
    id: "grasp-force-sensor",
    category: "electronics",
    title: "Sensor system for measuring force distribution when grasping objects",
    context: "Bachelor's thesis",
    year: "2024",
    summary:
      "Sensorized object to measure the force distribution during grasping, used to evaluate a hand exoskeleton of the university lab.",
    overview:
      "I developed a sensorized object to measure and map the force distribution during grasping tasks. The project was part of a research activity to evaluate a hand exoskeleton developed by the university laboratory. Finding the high and low pressure points during a grasp gave useful data to improve the mechanical design and the control of the exoskeleton.",
    bullets: [
      "Designed the test object in SolidWorks and made it with 3D printing;",
      "Developed the data acquisition system with Arduino and FSLP force sensors;",
      "Soldering and wiring of the sensor matrix;",
      "Experimental trials wearing the lab's hand exoskeleton.",
    ],
    result:
      "I found the main areas of pressure concentration when wearing the exoskeleton, after testing the sensor on male and female subjects. I also looked at other materials and solutions to improve the accuracy of the acquisition.",
    tags: ["Arduino", "FSLP sensors", "SolidWorks", "3D printing", "Soldering"],
    images: [
      { src: "grasp-sensor-cad.jpg", caption: "Sensor object developed", fit: "contain" },
      { src: "grasp-trial.jpg", caption: "Grasping trials with the hand exoskeleton" },
      { src: "grasp-exoskeleton.jpg", caption: "Hand exoskeleton", fit: "contain" },
      { src: "grasp-weights.jpg", caption: "Testing the sensor with weights", fit: "contain" },
    ],
    repo: "grasp-force-sensor",
    video: "",
  },
  {
    id: "ppg-circuit",
    category: "electronics",
    title: "Circuit for estimating cardiac pulsation",
    context: "Master's project work",
    year: "", // TODO: anno
    summary:
      "Analog circuit for real-time heart rate monitoring with photoplethysmography (PPG).",
    overview:
      "I designed and built an analog electronic circuit for real-time heart rate monitoring using non-invasive photoplethysmography (PPG). The project covers the whole signal conditioning chain, from the raw optical signal to the filtered analog output.",
    bullets: [
      "Used a TCRT1000 reflective optical sensor to detect the blood volume changes;",
      "Designed a two-stage conditioning circuit based on the LM358 operational amplifier;",
      "Assembled and soldered the PCB;",
      "Tested the circuit with oscilloscope, signal generator and multimeter.",
    ],
    tags: ["Analog electronics", "LM358", "TCRT1000", "PCB", "Oscilloscope"],
    images: [
      { src: "ppg-pcb.jpg", caption: "Assembled PCB", fit: "contain" },
      { src: "ppg-schematic.jpg", caption: "Electronic schematic", fit: "contain" },
    ],
    repo: "ppg-heart-rate-circuit",
    video: "",
  },
  {
    id: "vehicle-dynamics",
    category: "modelling",
    title: "Modeling and identifying vehicle dynamics",
    context: "Master's project work",
    year: "2025",
    summary:
      "Mathematical models of vehicle dynamics in Simulink and MATLAB, identified from experimental data.",
    overview:
      "I built and validated mathematical models of vehicle dynamics to predict and identify the behavior of the system, simulating its response in different conditions.",
    bullets: [
      "Vehicle models in Simulink;",
      "Nonlinear grey-box identification with the IDNLGREY object in MATLAB to estimate the physical parameters from experimental data;",
      "Repeated the process with real data from a Volvo V70.",
    ],
    tags: ["MATLAB", "Simulink", "System identification"],
    images: [
      { src: "vehicle-response.jpg", caption: "Simulated response comparison", fit: "contain" },
      { src: "vehicle-model.jpg", caption: "Vehicle model", fit: "contain" },
    ],
    repo: "vehicle-dynamics-identification",
    video: "",
  },
];

/* Competizioni */
const COMPETITIONS = [
  {
    id: "rami-2023",
    title: "RAMI Competition, La Spezia",
    context: "UNIFI Robotics Team | 1st place",
    year: "2023",
    text:
      "International marine robotics competition. I was there with the UNIFI Robotics Team, that won 1st place with the FeelHippo AUV.",
    image: { src: "rami-feelhippo.jpg", caption: "FeelHippo AUV, the UNIFI Robotics Team's robot" },
  },
  {
    id: "robocup-junior",
    title: "RoboCup Junior Rescue Line",
    context: "Team leader",
    year: "2017 - 2021",
    text:
      "I worked on the mechanics, the electronics and the programming of the robots. I was team leader of a group of 5 people for 2 years: we won the national phases and qualified for the international finals.",
    image: { src: "robocup-field.jpg", caption: "Example of a race circuit", fit: "contain" },
  },
];

/* Progetti personali */
const MAKER = [
  {
    id: "diy",
    title: "DIY projects",
    context: "Personal project",
    year: "",
    text:
      "In my free time I repair and reprogram home appliances and automation systems (TVs, automatic gates) and I build prototypes, like a 1:1 Iron Man mask with motorized opening and LED lights, controlled by Arduino with 3D-printed supports.",
    image: { src: "diy-wiring.jpg", caption: "Cable connections and 3D-printed support for Arduino" },
  },
];
