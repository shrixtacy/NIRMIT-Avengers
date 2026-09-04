"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useRegistrationModal } from "../../components/RegistrationModal";
import { getRegistrationUrl } from "../../data/registrationLinks";

interface PrizePool {
  total: string;
  first: string;
  second: string;
  third: string;
}

interface MidEvaluation {
  required: boolean;
  details: string;
}

interface EvaluationCriterion {
  name: string;
  weight: string;
  description: string;
}

interface StudentLeadInfo {
  name: string;
  role?: string;
  streamBranch?: string;
  phone?: string;
}

interface EventStage {
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
}

interface EventDetails {
  id: string;
  name: string;
  category: string;
  domain: string;
  description: string;
  longDescription: string;
  objectives: string[];
  targetAudience: string;
  inPersonFormat: string;
  stages: EventStage[];
  date: string;
  time: string;
  reporting: string;
  venue: string;
  teamSize: string;
  capacity: string;
  fee: string;
  prizePool: PrizePool;
  midEvaluation: MidEvaluation;
  facultyLeads: string[];
  studentLeadsList: StudentLeadInfo[];
  studentLeads: string[];
  leads: string[]; // fallback compatibility
  points: string[];
  rules: string[];
  technicalRequirements: string[];
  venueRequirements: string[];
  evaluationCriteria: EvaluationCriterion[];
  bgImage: string;
  topOverlay?: string;
  heroLeft?: string;
  heroRight?: string;
}

const eventsDictionary: Record<string, EventDetails> = {
  "falcon-strike": {
    id: "falcon-strike",
    name: "FALCON STRIKE",
    category: "DRONE OBSTACLE COURSE",
    domain: "Drone / Robotics",
    description: "Practical high-speed FPV drone obstacle course navigation testing precision aerial control, elevation maneuvers, tactical reaction time, and drone stability.",
    longDescription: "Falcon Strike is NIRMIT 2.0's flagship outdoor drone obstacle navigation showdown. Engineered to test practical flight control, elevation maneuvers, high-speed slalom navigation, and split-second tactical reaction time, pilots navigate FPV quadcopters through a custom-engineered outdoor obstacle course featuring hoop rings, elevation tunnels, and precision drop pads.",
    objectives: [
      "Demonstrate precision high-speed aerial flight control and obstacle avoidance.",
      "Execute elevation changes and tight slalom turns within strict time perimeters.",
      "Maintain pre-flight safety compliance, LiPo telemetry, and fail-safe motor configurations.",
      "Compete on the leaderboard for total lap speed and gate accuracy points.",
    ],
    targetAudience: "Open to all undergraduate & postgraduate students proficient in drone piloting, robotics engineering, or FPV flight simulation.",
    inPersonFormat: "Competitors undergo a mandatory technical inspection and telemetry check. Once cleared, pilots execute timed flight runs through 8 illuminated hoop rings, elevation tunnels, and slalom pylons. Scored based on completion time, gate precision, and obstacle penalty points.",
    stages: [
      {
        title: "STAGE 1: TECHNICAL INSPECTION & PRE-FLIGHT CHECK",
        subtitle: "Safety Audit & Frequency Lock",
        duration: "07:30 AM – 08:30 AM",
        description: "Mandatory safety check of drone components, LiPo battery containment, fail-safe motor kill-switch configuration, and RF frequency channel assignment.",
        deliverables: ["Drone Safety Pass", "Assigned RF Frequency Channel", "Pilot Badge Verification"],
      },
      {
        title: "STAGE 2: QUALIFYING HOOP & GATE TIMED RUN",
        subtitle: "Obstacle Navigation Qualifier",
        duration: "08:30 AM – 10:45 AM",
        description: "Pilots execute official timed flight runs through 8 illuminated hoop rings and elevation gates. Scored based on lap completion speed and gate accuracy.",
        deliverables: ["Qualifying Lap Time Record", "Gate Accuracy Scorecard"],
      },
      {
        title: "STAGE 3: CHAMPIONSHIP SLALOM & FINALE TRIAL",
        subtitle: "Grand Finale Flight Showdown",
        duration: "11:00 AM – 01:00 PM",
        description: "Top qualified finalists navigate high-speed slalom pylons and obstacle tunnels in a championship time trial to determine the Air Master champion.",
        deliverables: ["Finalist Score Log", "Air Master Trophy Winner Declaration"],
      },
    ],
    date: "11 October 2026",
    time: "8:00 AM – 1:00 PM",
    reporting: "7:30 AM",
    venue: "Football Ground Arena",
    teamSize: "1 – 3 Members per Team",
    capacity: "20 Teams Maximum",
    fee: "₹500 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Air Master Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation required. Direct on-field drone flight competition.",
    },
    facultyLeads: ["Sanjay Ray", "Santosh Sahu", "J. Binita"],
    studentLeadsList: [
      { name: "Partha Sarathi Nayak", role: "Student Lead", streamBranch: "MBA (3rd Yr)", phone: "+91 96927 67042" },
      { name: "Adisakti Sahoo", role: "Student Lead", streamBranch: "B.Tech CSE (3rd Yr)", phone: "+91 63706 56719" },
    ],
    studentLeads: ["Partha Sarathi Nayak", "Adisakti Sahoo"],
    leads: ["Sanjay Ray", "Santosh Sahu", "J. Binita"],
    points: [
      "Precision hoop ring gate navigation and high-speed slalom course.",
      "Technical pre-flight inspection, telemetry logging, and battery safety monitoring.",
      "Scoring based on completion time, maneuver execution, and obstacle penalty points.",
      "LiPo batteries must be stored in fireproof bags; fail-safe motor cut-offs enforced.",
    ],
    rules: [
      "All drones must undergo a mandatory technical inspection and calibration check before entering the flight arena.",
      "Pilots must operate strictly within designated flight corridors; crossing safety perimeters results in immediate disqualification.",
      "Scoring is calculated based on total course completion time plus penalty seconds for missed gates or ring contacts.",
      "Each team is allowed a maximum of 2 battery swap attempts during official timed runs.",
      "LiPo batteries must be transported in fireproof LiPo bags; fail-safe motor kill switch must be configured.",
      "Arming drone motors outside designated safety flight zones is immediate grounds for ejection.",
    ],
    technicalRequirements: [
      "Technical calibration & propeller safety inspection area",
      "LiPo battery charging station & safety containment bags",
      "Dedicated RF frequency channel monitoring & telemetry logging desk",
      "Digital scoreboards and lap timer tracking system",
    ],
    venueRequirements: [
      "Designated outdoor drone flight arena at NMIET Football Ground",
      "360° high safety netting barriers & spectator perimeter line",
      "Elevated judges observation platform with clear flightline visibility",
    ],
    evaluationCriteria: [
      { name: "Speed & Lap Completion Time", weight: "40%", description: "Total elapsed time taken to complete the obstacle circuit." },
      { name: "Gate & Hoop Accuracy", weight: "30%", description: "Successful traversal of all 8 obstacle gates without missing or bypass penalties." },
      { name: "Flight Control & Stability", weight: "20%", description: "Smooth elevation changes, cornering control, and drift management." },
      { name: "Pre-Flight & Safety Compliance", weight: "10%", description: "Fail-safe configuration, battery handling, and safety check pass." },
    ],
    bgImage: "/events/falcon-bg.webp",
    heroLeft: "/falcon-left.webp",
    heroRight: "/falcon-right.webp",
  },

  "nextech": {
    id: "nextech",
    name: "NEXTECH 2.0",
    category: "AGENTIC AI HACKATHON",
    domain: "Software / AI / Innovation",
    description: "Flagship continuous 24-hour build sprint creating autonomous LLM agents, multi-agent orchestrators, regional language models, and accessibility tools.",
    longDescription: "Nextech 2.0 is NIRMIT's flagship 24-hour continuous build hackathon focused on Agentic AI. Competitors leverage LLM agentic frameworks (LangChain, AutoGen, CrewAI, LlamaIndex, Smolagents) to build autonomous agents, multi-agent systems, Odia/Indic regional language accessibility tools, and offline-compatible intelligent workflows addressing EdTech and real-world societal challenges.",
    objectives: [
      "Build functional autonomous AI agents capable of tool calling, decision loops, and multi-agent coordination.",
      "Implement regional language localization (Odia/Indic text & voice interfaces) for low-resource accessibility.",
      "Ensure offline fallback mechanisms and edge AI compatibility for disconnected environments.",
      "Deliver a working MVP and pitch deck live before industry CTOs and venture partners.",
    ],
    targetAudience: "Engineering students, AI developers, full-stack programmers, and UX designers capable of building autonomous LLM applications.",
    inPersonFormat: "50 shortlisted teams gather in the MBA Auditorium for a 24-hour build sprint. On Day 1, teams undergo a mandatory In-Person Mid-Evaluation (4:00 PM - 7:00 PM, 30% weightage) where judges audit GitHub commits and prototype progress; the bottom 50% of teams are eliminated. Remaining finalists continue building overnight for Day 2 Grand Finale pitches before industry CTOs.",
    stages: [
      {
        title: "STAGE 1: ONLINE PRE-SELECTION (FORM SUBMISSION)",
        subtitle: "Abstract & Architecture Screening",
        duration: "Prior to Event",
        description: "Teams submit pitch PPT deck, architecture block diagram, and founder intro video link in the registration form. Top 50 teams shortlisted.",
        deliverables: ["Presentation PPT Deck", "System Architecture Diagram", "Intro Video Link"],
      },
      {
        title: "STAGE 2: DAY 1 IN-PERSON MID-EVALUATION",
        subtitle: "30% Weightage • 50% Elimination",
        duration: "04:00 PM – 07:00 PM (Day 1)",
        description: "Mandatory on-site audit of GitHub commits, architecture diagram, and core agentic workflow. Bottom 50% of teams are eliminated.",
        deliverables: ["Active GitHub Commit Audit", "Working Agent Workflow Demo", "Architecture Review"],
      },
      {
        title: "STAGE 3: OVERNIGHT SPRINT & GRAND FINALE PITCH",
        subtitle: "70% Weightage • CTO Jury Defense",
        duration: "10:00 AM – 03:00 PM (Day 2)",
        description: "Finalist teams complete build sprint and deliver a 7-minute live MVP pitch & demo followed by 5 minutes of intensive CTO jury Q&A.",
        deliverables: ["Live Working Product MVP", "Final GitHub Repo Submission", "Grand Pitch Deck"],
      },
    ],
    date: "14 – 15 October 2026",
    time: "Day 1 8:00 AM – Day 2 3:00 PM",
    reporting: "Day 1 7:30 AM",
    venue: "Auditorium, MBA Block",
    teamSize: "3 – 5 Members per Team",
    capacity: "Top 50 Selected Teams (150–250 Participants)",
    fee: "₹500 per Team (Only after selection)",
    prizePool: {
      total: "₹45,000",
      first: "₹20,000 + Champion Trophy",
      second: "₹15,000 + Merit Certificate",
      third: "₹10,000 + Merit Certificate",
    },
    midEvaluation: {
      required: true,
      details: "Mandatory Online Pre-Selection (PPT + Architecture Diagram + Intro Video in Form) AND Day 1 In-Person Mid-Eval (30% weightage, 4:00 PM - 7:00 PM, eliminates bottom 50% teams).",
    },
    facultyLeads: ["Pragyan Srichandan", "Sanjay Dash", "Maneesh Yadav", "SK Saffruddin"],
    studentLeadsList: [
      { name: "Shriyansh Dash", role: "Student Lead", streamBranch: "B.Tech CSE (4th Yr)", phone: "+91 82496 73948" },
      { name: "Om Prakash Nahak", role: "Student Lead", streamBranch: "B.Tech CSE (4th Yr)", phone: "+91 78549 30192" },
      { name: "Aman Singh", role: "Student Lead", streamBranch: "B.Tech CSE (4th Yr)", phone: "+91 93374 82910" },
    ],
    studentLeads: ["Shriyansh Dash", "Om Prakash Nahak", "Aman Singh"],
    leads: ["Pragyan Srichandan", "Sanjay Dash", "Maneesh Yadav", "SK Saffruddin"],
    points: [
      "Day 1 In-Person Mid-Evaluation (30% weightage) eliminates bottom 50% of competing teams.",
      "Mentorship sessions with AI architects, technical leads, and founders.",
      "Key evaluation metrics: Regional language support, UI design, offline compatibility, and autonomous agent framework.",
      "24-hour overnight access with dedicated high-concurrency Wi-Fi and power strips.",
    ],
    rules: [
      "Teams must submit official GitHub repository links; all commits during the hackathon window will be audited.",
      "Day 1 Mid-Evaluation carries 30% of total score; non-qualifying teams will be eliminated.",
      "Key evaluation parameters: Autonomous agent design (30%), regional language localization (20%), offline functionality (20%), UI/UX & pitch (30%).",
      "Plagiarized templates or pre-built complete repositories are strictly prohibited; code diff auditing will be enforced.",
      "All team members must remain on campus grounds during the 24-hour build window.",
      "Use of external open-source LLM APIs is permitted; all API keys must be configured via environment variables.",
    ],
    technicalRequirements: [
      "Dedicated high-concurrency 1 Gbps Wi-Fi network with redundant bandwidth",
      "Minimum 2 power sockets per workstation for high-performance laptops",
      "Automated GitHub commit tracking & code plagiarism audit scripts",
      "Large presentation projection screens & live scoreboard display",
    ],
    venueRequirements: [
      "MBA Auditorium configured with ergonomic workstation tables for 50 teams",
      "24-hour security & overnight facility access control",
      "Catering & midnight snack lounge zone",
      "Central Control & Technical Support Desk",
    ],
    evaluationCriteria: [
      { name: "Autonomous Agentic Architecture", weight: "30%", description: "Effective tool calling, autonomous decision loops, and multi-agent coordination." },
      { name: "Regional Language Localization", weight: "20%", description: "Seamless Odia/Indic language support, voice interface, or accessibility translation." },
      { name: "Offline & Edge Capability", weight: "20%", description: "Low-resource performance, local LLM execution, or offline fallback mechanisms." },
      { name: "UI/UX & Grand Pitch Defense", weight: "30%", description: "Intuitive user experience, live working MVP demonstration, and clear pitch defense." },
    ],
    bgImage: "/thanos-bg.webp",
  },

  "multiverse": {
    id: "multiverse",
    name: "MULTIVERSE OF IDEAS",
    category: "IDEATHON 2026",
    domain: "Innovation / Ideation",
    description: "Idea-focused startup challenge where teams pitch technical solutions, market-fit models, UVP frameworks, and sustainable engineering innovations.",
    longDescription: "Multiverse of Ideas is NIRMIT's premier startup pitch ideathon where student innovators, product thinkers, and tech entrepreneurs present technology-driven solutions to critical societal, business, and sustainability problems.",
    objectives: [
      "Identify meaningful real-world problem statements and target user personas.",
      "Propose innovative, scalable technology architectures and Unique Value Propositions (UVP).",
      "Formulate sustainable business models, revenue strategies, and GTM roadmaps.",
      "Defend startup vision in a high-stakes 12-minute pitch & jury Q&A session.",
    ],
    targetAudience: "Aspiring entrepreneurs, product managers, engineering innovators, and business management students.",
    inPersonFormat: "Top 20 pre-selected teams receive 12 minutes total on stage (5–7 minutes live slide deck pitch followed by 5 minutes of intensive jury Q&A). Teams present problem statements, target user segmentation, technical architecture, unique value proposition (UVP), and financial sustainability models.",
    stages: [
      {
        title: "STAGE 1: ONLINE ABSTRACT & VIDEO SCREENING",
        subtitle: "Pre-Selection Filtering",
        duration: "Prior to Event",
        description: "Teams submit a 10-slide PPT deck, problem summary, and 2-min intro video in registration form. Top 20 teams shortlisted.",
        deliverables: ["10-Slide Pitch Deck", "Problem Statement Abstract", "2-Min Video Pitch"],
      },
      {
        title: "STAGE 2: MEDIA CONSOLE LOAD & BRIEFING",
        subtitle: "Slide Check & Sequence Draw",
        duration: "12:30 PM – 01:00 PM",
        description: "Selected teams load final presentation slides at the media console desk and receive pitch sequence numbers.",
        deliverables: ["Verified Slide Deck File", "Pitch Sequence Number"],
      },
      {
        title: "STAGE 3: LIVE PITCH DECK & JURY Q&A",
        subtitle: "12 Mins Total Allocation",
        duration: "01:00 PM – 05:00 PM",
        description: "Teams deliver a 5–7 minute live presentation followed by 5 minutes of intensive jury Q&A defense before investor judges.",
        deliverables: ["Live Stage Pitch", "Jury Q&A Defense"],
      },
    ],
    date: "12 October 2026",
    time: "1:00 PM – 5:00 PM",
    reporting: "12:30 PM",
    venue: "Seminar Hall, MBA Block",
    teamSize: "2 – 5 Members per Team",
    capacity: "20 Teams Maximum",
    fee: "₹300 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Ideathon Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: true,
      details: "Mandatory online submission of PPT deck, problem statement summary, and founder intro video in registration form.",
    },
    facultyLeads: ["Jaswant Patro", "J. Binita", "Santosh Sahu"],
    studentLeadsList: [
      { name: "Gayatri Rout", role: "Student Lead", streamBranch: "B.Tech CSE (5th Sem)", phone: "+91 93370 88946" },
      { name: "Dhananjaya Sathpathy", role: "Student Lead", streamBranch: "MBA (3rd Sem)", phone: "+91 91147 84837" },
    ],
    studentLeads: ["Gayatri Rout", "Dhananjaya Sathpathy"],
    leads: ["Jaswant Patro", "J. Binita", "Santosh Sahu"],
    points: [
      "12 minutes total allocation per team (5–7 mins pitch deck + 5 mins jury Q&A).",
      "Evaluation on market feasibility, innovation depth, target UVP, and scalability.",
      "Investor connection, incubation guidance, and technical mentorship.",
      "Pre-selected teams load slides prior to session start.",
    ],
    rules: [
      "Pitch presentations must strictly stay within the 5 to 7 minute window.",
      "Slides must cover: Problem Statement, Solution Architecture, Target Market, UVP, and Feasibility.",
      "All team members must be present during the live presentation for jury Q&A.",
      "Pre-selected teams must load their presentation slides at the media console prior to session start.",
      "Unauthorised change of presentation slides on stage is prohibited.",
    ],
    technicalRequirements: [
      "HD presentation projection system with HDMI/Type-C inputs",
      "Wireless handheld microphones & lapels for presenters",
      "Digital countdown timer display visible to presenters",
      "Power supply for jury scoring tablets",
    ],
    venueRequirements: [
      "MBA Seminar Hall with tiered executive seating",
      "Presentation podium & stage area",
      "Dedicated jury panel table with evaluation marksheets",
    ],
    evaluationCriteria: [
      { name: "Problem Definition & Need", weight: "25%", description: "Clarity of real-world problem, target user identification, and market gap." },
      { name: "Innovation & Tech Feasibility", weight: "25%", description: "Uniqueness of solution architecture and technical implementation viability." },
      { name: "Business Model & Scalability", weight: "25%", description: "Revenue strategy, unit economics, market size, and growth roadmap." },
      { name: "Pitch Quality & Jury Defense", weight: "25%", description: "Communication clarity, slide design, time discipline, and Q&A answers." },
    ],
    bgImage: "/multiverse-bg.webp",
    heroLeft: "/multiverse-bottom-left.webp",
    heroRight: "/multiverse-top-right.webp",
  },

  "ultron": {
    id: "ultron",
    name: "PROJECT ULTRON",
    category: "IOT & HARDWARE EXHIBITION",
    domain: "IoT / Hardware Exhibition",
    description: "Exhibition showcasing connected microcontrollers, smart sensor networks, embedded automation, and real-world IoT hardware prototypes.",
    longDescription: "Project Ultron is an interactive hardware and IoT exhibition showcasing physical microcontrollers, smart sensor networks, embedded automation, robotics, and industrial IoT solutions built by engineering students.",
    objectives: [
      "Build physical hardware circuits integrating sensors, microcontrollers (ESP32/Arduino/Raspberry Pi), and actuators.",
      "Demonstrate real-time IoT cloud connectivity, MQTT telemetry dashboards, or local sensor automation.",
      "Present technical schematic posters (A1/A2 format) detailing circuit diagrams and component specs.",
      "Engage with visiting delegates, faculty, and jury mentors during live exhibition booth inspections.",
    ],
    targetAudience: "IoT enthusiasts, electronics engineering students, embedded systems developers, and hardware builders.",
    inPersonFormat: "Shortlisted teams set up interactive display booths in the Electrical Block Hallway. Judges and visiting delegates inspect working hardware demonstrations, circuit schematics, and technical posters. Each team presents their project live to jury mentors during rotational booth evaluations.",
    stages: [
      {
        title: "STAGE 1: ONLINE ABSTRACT & SCHEMATIC SCREENING",
        subtitle: "Pre-Selection Check",
        duration: "Prior to Event",
        description: "Teams submit PPT deck, circuit schematic, and working hardware video link in the registration form.",
        deliverables: ["Circuit Schematic Diagram", "Working Demo Video Link", "Project Abstract"],
      },
      {
        title: "STAGE 2: EXHIBITION BOOTH SETUP & ELECTRICAL TEST",
        subtitle: "Power & Sensor Calibration",
        duration: "01:30 PM – 02:00 PM",
        description: "Shortlisted teams set up display tables, power connections, poster boards, and test hardware live.",
        deliverables: ["Hardware Booth Ready", "Poster Mounted", "Live Sensor Test Pass"],
      },
      {
        title: "STAGE 3: ROTATIONAL JURY INSPECTION & DEMO",
        subtitle: "Live Defense & Judging",
        duration: "02:00 PM – 05:00 PM",
        description: "Jury panel conducts rotational booth inspections evaluating technical execution, live working stability, and poster defense.",
        deliverables: ["Live Hardware Demo", "Schematic Poster Defense"],
      },
    ],
    date: "11 October 2026",
    time: "2:00 PM – 5:00 PM",
    reporting: "1:30 PM",
    venue: "Electrical Block Hallway",
    teamSize: "1 – 3 Members per Team",
    capacity: "20 Teams Maximum",
    fee: "₹300 per Participant",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Ultron Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: true,
      details: "Mandatory online submission of PPT deck, project summary, and working video link in the registration form.",
    },
    facultyLeads: ["Jitendra Padhi", "Bhagyalaxmi Devi", "Pranaya Rout"],
    studentLeadsList: [
      { name: "Subhasree Panda", role: "Student Lead", streamBranch: "B.Tech CSE (7th Sem)", phone: "+91 91239 87837" },
      { name: "Vaswati P. Mohanty", role: "Student Lead", streamBranch: "B.Tech CSE (7th Sem)", phone: "+91 76089 11996" },
      { name: "Jaga Das", role: "Student Lead", streamBranch: "BCA (4th Sem)", phone: "+91 89847 26731" },
    ],
    studentLeads: ["Subhasree Panda", "Vaswati P. Mohanty", "Jaga Das"],
    leads: ["Jitendra Padhi", "Bhagyalaxmi Devi", "Pranaya Rout"],
    points: [
      "Dedicated exhibition booth with dual power outlets for every shortlisted project.",
      "Live hardware demonstration for visiting students, faculty, and jury.",
      "Assessment on technical complexity, hardware integration, utility, and scalability.",
      "Mandatory schematic poster display alongside hardware.",
    ],
    rules: [
      "Shortlisted teams must bring all necessary sensors, microcontrollers, and backup power supplies.",
      "Projects must demonstrate working hardware functionality live before the jury panel.",
      "Teams must display a technical project poster (A2 or A1 size) detailing architecture and circuit schematics.",
      "Hazardous chemical or high-voltage unshielded components are strictly prohibited for safety.",
      "Unpowered non-working mockups are not eligible for top prize consideration.",
    ],
    technicalRequirements: [
      "Dual 230V AC power sockets per exhibition booth",
      "Cloud Wi-Fi connectivity for MQTT/HTTP connected sensors",
      "Oscilloscopes and multimeter testing support on standby",
    ],
    venueRequirements: [
      "Electrical Block exhibition hallway with display tables",
      "Poster mounting boards (A1/A2 size) for schematics and block diagrams",
      "Safety barriers and wire management channels",
    ],
    evaluationCriteria: [
      { name: "Technical Implementation & Hardware", weight: "30%", description: "Quality of circuit wiring, microcontroller integration, and sensor accuracy." },
      { name: "Practical Utility & Application", weight: "30%", description: "Real-world relevance, industrial utility, and problem-solving impact." },
      { name: "Live Demonstration Stability", weight: "20%", description: "Flawless real-time operation of sensors, actuators, and cloud dashboards." },
      { name: "Poster Presentation & Defense", weight: "20%", description: "Visual schematic poster quality and depth of answers during jury inspection." },
    ],
    bgImage: "/ultron-bg.webp",
    heroLeft: "/ultron-left.webp",
    heroRight: "/ultron-right.webp",
  },

  "civil-wars": {
    id: "civil-wars",
    name: "CIVIL WARS",
    category: "FREE FIRE GAMING TOURNAMENT",
    domain: "Gaming / Esports",
    description: "Competitive Free Fire battle royale squad tournament hosted across custom room elimination brackets with live stadium shoutcasting.",
    longDescription: "Civil Wars is NIRMIT's high-stakes Free Fire mobile esports tournament. Squads clash in custom battle royale rooms testing tactical communication, zone rotation, recoil mastery, and high-pressure squad strategy.",
    objectives: [
      "Master battle royale squad rotations, map positioning, and tactical firefights.",
      "Maximize match placement points (Booyah) and confirmed team eliminations.",
      "Execute flawless communication and squad synergy under tournament room pressure.",
      "Compete on the stadium big screen for the official NIRMIT 2.0 Esports Championship.",
    ],
    targetAudience: "Esports gamers, mobile gaming squads, Free Fire competitive teams.",
    inPersonFormat: "24 participating squads are split into Room A (12 teams) and Room B (12 teams) for Round 1 qualifier matches. The top 3 squads from each room advance to Room C (Grand Final). The top 6 finalist squads battle live on the auditorium big screen for Booyah glory.",
    stages: [
      {
        title: "STAGE 1: SQUAD CHECK-IN & DEVICE AUDIT",
        subtitle: "Lobby Room Assignment",
        duration: "02:15 PM – 02:45 PM",
        description: "Verification of player IDs, mobile devices (smartphones only), Wi-Fi connection, and custom room password distribution.",
        deliverables: ["Squad ID Verification", "Room Password Pass", "Device Check"],
      },
      {
        title: "STAGE 2: QUALIFIER MATCHES — ROOM A & B",
        subtitle: "Top 3 per Pool Advance",
        duration: "03:00 PM – 04:15 PM",
        description: "24 squads divided into Pool A (12 teams) and Pool B (12 teams). Top 3 squads from each pool advance to the Grand Final.",
        deliverables: ["Pool A & B Leaderboards", "Top 6 Finalist Squad Lock"],
      },
      {
        title: "STAGE 3: GRAND FINAL — ROOM C SHOWDOWN",
        subtitle: "Big Screen Live Stream & Booyah Battle",
        duration: "04:15 PM – 05:00 PM",
        description: "Top 6 finalist squads battle live in a custom room match streamed on the auditorium big screen for the championship trophy.",
        deliverables: ["Booyah Champion Winner", "Esports Leaderboard Scores"],
      },
    ],
    date: "13 October 2026",
    time: "3:00 PM – 5:00 PM",
    reporting: "2:15 PM",
    venue: "Auditorium, MBA Block",
    teamSize: "Squad (4 Players + 1 Substitute)",
    capacity: "24 Teams Maximum",
    fee: "₹400 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Esports Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. Direct custom room tournament matches.",
    },
    facultyLeads: ["Rashmi Ranjan Rath", "Om Prakash Narayan Kar", "Prabir Das"],
    studentLeadsList: [
      { name: "Sukdev Suna", role: "Student Lead", streamBranch: "B.Tech ECE (7th Sem)", phone: "+91 89849 41510" },
      { name: "Subham Sing", role: "Student Lead", streamBranch: "B.Tech CSE (7th Sem)", phone: "+91 63729 20799" },
    ],
    studentLeads: ["Sukdev Suna", "Subham Sing"],
    leads: ["Rashmi Ranjan Rath", "Om Prakash Narayan Kar", "Prabir Das"],
    points: [
      "24 teams split across Room A (12 teams) and Room B (12 teams); top 3 from each advance to Grand Final Room C.",
      "Stadium big-screen stream, live shoutcasting, and low-latency Wi-Fi gaming arena.",
      "Point table scoring based on placement points and kill multipliers.",
      "Strict prohibition of PC emulators, tablets, hacks, or hardware triggers.",
    ],
    rules: [
      "All matches are played on standard mobile devices in official Free Fire custom rooms.",
      "Emulators, tablets, hacks, or third-party game modifications result in instant team ban and disqualification.",
      "Teams must report to their assigned room lobby 15 minutes before match start.",
      "Scoring follows official esports point format: Placement Points + 1 Point per confirmed Kill.",
      "Sharing custom room password to non-registered players results in squad disqualification.",
    ],
    technicalRequirements: [
      "Dedicated low-latency esports Wi-Fi access points",
      "High-amp phone charging station strips for every squad table",
      "HDMI big-screen observer stream feed for spectator viewing",
      "Stadium shoutcasting PA sound system",
    ],
    venueRequirements: [
      "Air-conditioned MBA Auditorium with squad seating setups",
      "Referee & match administrator desk",
      "Live digital leaderboard screen",
    ],
    evaluationCriteria: [
      { name: "Booyah & Placement Points", weight: "50%", description: "Official tournament ranking points based on match placement." },
      { name: "Confirmed Squad Kills", weight: "50%", description: "1 point awarded per confirmed opponent elimination." },
    ],
    bgImage: "/civil-wars-bg.webp",
    heroLeft: "/captain-right.webp",
    heroRight: "/ironman-left.webp",
  },

  "groove": {
    id: "groove",
    name: "GUARDIANS OF GROOVE",
    category: "TECHNO DANCE BATTLE",
    domain: "Cultural / Dance",
    description: "High-octane dance competition fusing robotics choreography, synth techno music, and sci-fi aesthetic.",
    longDescription: "Guardians of the Groove is NIRMIT's premier techno dance showdown. Dance crews perform high-energy group routines fusing futuristic robotics choreography, synth techno beats, laser sync lighting, and sci-fi aesthetic.",
    objectives: [
      "Choreograph group routines integrating technology, robotics, or futuristic sci-fi themes.",
      "Execute precise group synchronization, formations, rhythm, and stage energy retention.",
      "Design futuristic costumes, LED props, and visual aesthetic elements.",
      "Complete full performance within the strict 10-minute stage time window.",
    ],
    targetAudience: "Inter-college dance crews, hip-hop/techno groups, cultural performers.",
    inPersonFormat: "Crews submit audio tracks 2 hours prior to start. Each team gets up to 10 minutes total on stage (including setup, performance, and stage exit). Judged by acclaimed choreographers on synchronization, rhythm, costume, and tech-theme integration.",
    stages: [
      {
        title: "STAGE 1: AUDIO SUBMISSION & PREVIEW AUDIT",
        subtitle: "Preview Video & MP3 Track Load",
        duration: "2 Hours Prior",
        description: "Mandatory dance preview video submission in form; MP3 audio track handed to sound console 2 hours prior.",
        deliverables: ["MP3 Audio Track", "Preview Video Link"],
      },
      {
        title: "STAGE 2: GREEN ROOM PREP & STAGE DRAW",
        subtitle: "Costume & Prop Check",
        duration: "09:00 AM – 10:00 AM",
        description: "Team check-in, costume changing, prop safety verification, and stage entry sequence draw.",
        deliverables: ["Green Room Access Pass", "Stage Sequence Draw"],
      },
      {
        title: "STAGE 3: LIVE MAIN STAGE PERFORMANCE",
        subtitle: "10 Mins Max Allocation",
        duration: "10:00 AM – 08:00 PM",
        description: "Live stage performances before acclaimed dance choreographers; 10 mins max allocation per team.",
        deliverables: ["Live Stage Performance", "Jury Scorecard"],
      },
    ],
    date: "12 October 2026",
    time: "10:00 AM – 8:00 PM",
    reporting: "9:00 AM",
    venue: "Auditorium, MBA Block",
    teamSize: "5 – 10 Members per Team",
    capacity: "15 Teams Maximum",
    fee: "₹1,000 per Team (Inter-college; no cross-college teams)",
    prizePool: {
      total: "₹18,000",
      first: "₹10,000 + Groove Trophy",
      second: "₹5,000 + Merit Certificate",
      third: "₹3,000 + Merit Certificate",
    },
    midEvaluation: {
      required: true,
      details: "Mandatory submission of dance performance preview video link in the registration form.",
    },
    facultyLeads: ["Saroj Sir", "Sushree Sucharita Kar"],
    studentLeadsList: [
      { name: "Rachita Das", role: "Student Lead", streamBranch: "B.Tech CSE (3rd Yr)", phone: "+91 89843 91077" },
      { name: "Subhranshu Sekhar Jena", role: "Student Lead", streamBranch: "MBA (2nd Sem)", phone: "+91 80935 69907" },
    ],
    studentLeads: ["Rachita Das", "Subhranshu Sekhar Jena"],
    leads: ["Saroj Sir", "Sushree Sucharita Kar"],
    points: [
      "Group dance performance incorporating tech/sci-fi themes.",
      "Concert-grade audio, dynamic stadium lighting, and green room support.",
      "Judged on synchronization, rhythm, costume, energy, and theme integration.",
      "Inter-college rules apply; no cross-college team formations permitted.",
    ],
    rules: [
      "All team members must belong to the same institute (No cross-college team formations permitted).",
      "Maximum stage performance duration is 10 minutes (including setup and clearance).",
      "Audio tracks must be submitted in MP3 format to the sound desk at least 2 hours prior to commencement.",
      "Props involving fire, water, or hazardous items are strictly prohibited on stage.",
    ],
    technicalRequirements: [
      "Concert-grade PA sound system with subwoofers",
      "DMX programmable stage lighting & strobe effects",
      "Wireless handheld mics for team introduction",
      "Digital stage countdown timer",
    ],
    venueRequirements: [
      "MBA Auditorium main stage with proscenium floor",
      "Green rooms with mirrors & costume changing facilities",
      "Elevated judges table with score sheets",
    ],
    evaluationCriteria: [
      { name: "Choreography & Synchronization", weight: "30%", description: "Precision movement, formations, timing, and group unity." },
      { name: "Theme & Sci-Fi Integration", weight: "25%", description: "Incorporation of futuristic, robotic, or technology themes in dance story." },
      { name: "Rhythm & Stage Energy", weight: "25%", description: "Musicality, execution difficulty, energy retention, and stamina." },
      { name: "Costume & Visual Aesthetics", weight: "20%", description: "Futuristic attire, props, facial expressions, and stage presence." },
    ],
    bgImage: "/groove-bg.webp",
    heroLeft: "/groove-bottom-left.webp",
    heroRight: "/groove-top-right.webp",
  },

  "quantumania": {
    id: "quantumania",
    name: "QUANTUMANIA",
    category: "TECH QUIZ CHAMPIONSHIP",
    domain: "CS & Science Quiz",
    description: "Multi-stage rapid-fire tech trivia battle testing knowledge on CS history, AI models, emerging hardware, and computing founders.",
    longDescription: "Quantumania is an intense multi-stage technical quiz competition testing computing history, AI models, cybersecurity, programming languages, tech titans, and emerging hardware breakthroughs.",
    objectives: [
      "Test deep knowledge across computer science history, AI algorithms, IT logos, and tech innovations.",
      "Qualify through speed-written MCQ prelims under tight time constraints.",
      "Master rapid-fire buzzer responses and strategic point risk management.",
      "Dominate the real-time digital leaderboard in front of live spectators.",
    ],
    targetAudience: "Tech enthusiasts, quiz champions, CS & engineering students.",
    inPersonFormat: "30 teams undergo Stage 1 Preliminary Written/Digital MCQ Test. The top 8 scoring teams advance to Stage 2 Rapid-Fire Speed Round and Stage 3 Grand Final Electronic Buzzer Battle on stage.",
    stages: [
      {
        title: "STAGE 1: WRITTEN MCQ PRELIMINARY TEST",
        subtitle: "25 Questions • 30 Mins",
        duration: "10:00 AM – 10:30 AM",
        description: "All 30 teams complete a 25-question written/digital preliminary elimination test. Top 8 teams advance.",
        deliverables: ["Prelim OMR/Digital Answer Sheet", "Top 8 Leaderboard Announcement"],
      },
      {
        title: "STAGE 2: RAPID-FIRE SPEED ROUND",
        subtitle: "60-Sec Question Bursts",
        duration: "10:35 AM – 11:15 AM",
        description: "Qualified teams face 60-second rapid-fire question bursts covering tech history and code snippets.",
        deliverables: ["Rapid-Fire Scorecard", "Top 4 Finalist Lock"],
      },
      {
        title: "STAGE 3: GRAND FINAL BUZZER BATTLE",
        subtitle: "Electronic Buzzer Battle",
        duration: "11:20 AM – 12:00 PM",
        description: "Top 4 finalist teams clash on electronic buzzers with positive/negative scoring for the championship trophy.",
        deliverables: ["Quiz Master Trophy Winner", "Final Score Log"],
      },
    ],
    date: "12 October 2026",
    time: "10:00 AM – 12:00 PM",
    reporting: "9:30 AM",
    venue: "Reading Room, Central Library",
    teamSize: "1 – 2 Members per Team (Duo/Solo)",
    capacity: "30 Teams Maximum",
    fee: "₹200 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Quiz Master Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. Multi-stage on-spot quiz competition.",
    },
    facultyLeads: ["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"],
    studentLeadsList: [
      { name: "Dibyanshu Nayak", role: "Student Lead", streamBranch: "B.Tech Mech (4th Sem)", phone: "+91 70771 88155" },
      { name: "Tapaswini Mishra", role: "Student Lead", streamBranch: "B.Tech CSE (3rd Sem)", phone: "+91 98612 96488" },
      { name: "Prabhudutta Mohanty", role: "Student Lead", streamBranch: "MBA", phone: "+91 82609 48235" },
    ],
    studentLeads: ["Dibyanshu Nayak", "Tapaswini Mishra", "Prabhudutta Mohanty"],
    leads: ["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"],
    points: [
      "3 competitive stages: Preliminary written MCQ, Rapid-fire buzzer round, and Grand Final.",
      "Live digital leaderboard tracking team scores in real-time.",
      "Questions cover AI, computing history, cyber security, and tech titans.",
      "Smartphones and smartwatches forbidden during quiz rounds.",
    ],
    rules: [
      "Stage 1 consists of a written/digital preliminary elimination test for all 30 teams.",
      "Top scoring teams advance to the stage buzzer and rapid-fire final rounds.",
      "Use of smartphones or smartwatch devices during quiz rounds is strictly forbidden.",
      "Quizmaster's decisions regarding answers and scoring are absolute.",
    ],
    technicalRequirements: [
      "Electronic 8-channel quiz buzzer system with response indicators",
      "High-resolution projector for displaying question slides & timers",
      "Live digital leaderboard scoring software",
      "Quizmaster microphone setup",
    ],
    venueRequirements: [
      "Central Library Reading Room with finalist stage setup",
      "Audience seating for non-qualifying teams and spectators",
      "Central scoring desk",
    ],
    evaluationCriteria: [
      { name: "Preliminary Round Score", weight: "30%", description: "Accuracy in 25-question written MCQ qualification test." },
      { name: "Rapid-Fire & Buzzer Final Score", weight: "70%", description: "Points earned in live speed buzzer rounds minus negative penalty points." },
    ],
    bgImage: "/quantumania-bg.webp",
    heroLeft: "/quantumania-bottom-left.webp",
    heroRight: "/quantumania-top-right.webp",
  },

  "infinity-canvas": {
    id: "infinity-canvas",
    name: "INFINITY CANVAS",
    category: "CANVAS PAINTING",
    domain: "Art & Cyber Creativity",
    description: "On-spot canvas painting competition where artists translate futuristic sci-fi visions, cyber themes, and Marvel concepts onto canvas.",
    longDescription: "Infinity Canvas is an on-spot fine arts competition where student artists translate futuristic sci-fi visions, cyber themes, AI futures, and Marvel concepts onto 16x24 canvas sheets.",
    objectives: [
      "Conceptualize and paint an original artwork based on an unannounced on-spot technology theme.",
      "Demonstrate mastery in color theory, brushwork technique, shading, and canvas composition.",
      "Complete fine artwork on a 16x24 canvas within the 3-hour session window.",
    ],
    targetAudience: "Student painters, fine arts enthusiasts, creative visual artists.",
    inPersonFormat: "Participants report at 9:30 AM for registration and canvas distribution. The competition theme is revealed strictly on-spot at 10:00 AM. Artists have 3 hours to create their masterpiece using acrylics, oils, or mixed media.",
    stages: [
      {
        title: "STAGE 1: CANVAS DISTRIBUTION & CHECK-IN",
        subtitle: "16x24 Sheet Distribution",
        duration: "09:30 AM – 10:00 AM",
        description: "Reporting, ID check, desk allocation, and distribution of official 16x24 canvas boards.",
        deliverables: ["Official 16x24 Stamped Canvas Board", "Artist Desk Number"],
      },
      {
        title: "STAGE 2: ON-SPOT THEME REVEAL & PAINTING SPRINT",
        subtitle: "3-Hour Unassisted Creation",
        duration: "10:00 AM – 01:00 PM",
        description: "Theme revealed live on board. Artists paint non-stop without digital reference aids.",
        deliverables: ["Completed Original Canvas Painting"],
      },
      {
        title: "STAGE 3: GALLERY EXHIBITION & JURY SCORING",
        subtitle: "Easel Display Evaluation",
        duration: "01:00 PM – 01:30 PM",
        description: "Artworks displayed on gallery easels for jury scoring on creativity, depth, and technique.",
        deliverables: ["Art Gallery Easel Display", "Jury Marksheet"],
      },
    ],
    date: "11 October 2026",
    time: "10:00 AM – 1:00 PM",
    reporting: "9:30 AM",
    venue: "Reading Room, Central Library",
    teamSize: "Solo (1 Participant)",
    capacity: "Open (100 Participants Max)",
    fee: "₹200 per Participant",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Art Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. On-spot theme reveal during reporting.",
    },
    facultyLeads: ["Madhubrata Dash", "Sambit Sethy", "Swarnaprava Sahoo"],
    studentLeadsList: [
      { name: "Sanjeevani Panda", role: "Student Lead", streamBranch: "B.Tech CSE (3rd Sem)", phone: "+91 96921 96970" },
      { name: "Shyan", role: "Student Lead", streamBranch: "Diploma CSE", phone: "+91 93373 16813" },
    ],
    studentLeads: ["Sanjeevani Panda", "Shyan"],
    leads: ["Madhubrata Dash", "Sambit Sethy", "Swarnaprava Sahoo"],
    points: [
      "16x24 Canvas sheet provided on venue; participants bring paints & art tools.",
      "On-spot theme reveal centered around sci-fi & futuristic technology.",
      "Evaluated on visual composition, theme depth, neatness, and artistic technique.",
    ],
    rules: [
      "16x24 canvas sheets will be provided at the venue; participants must bring their own paints, brushes, and palettes.",
      "The painting theme will be disclosed strictly on-spot at the start of the event.",
      "Use of smartphones, reference prints, or digital tools during the competition is strictly prohibited.",
      "Artwork must be completed within the 3-hour allocated window.",
    ],
    technicalRequirements: ["Standard art display lighting & water supply access"],
    venueRequirements: [
      "Central Library Reading Room with individual work tables",
      "Easel stands & 16x24 canvas board sheets provided by organizers",
      "Water cleanup & palette stations",
    ],
    evaluationCriteria: [
      { name: "Creativity & Originality", weight: "35%", description: "Uniqueness of visual concept and artistic imagination." },
      { name: "Theme Interpretation & Sci-Fi Depth", weight: "35%", description: "Relevance to the announced on-spot technology theme." },
      { name: "Technique, Composition & Neatness", weight: "30%", description: "Color harmony, brushwork skill, balance, and presentation." },
    ],
    bgImage: "/infinity-canvas-bg.webp",
    topOverlay: "/screen-top-layer.webp",
  },

  "council-heroes": {
    id: "council-heroes",
    name: "COUNCIL OF HEROES",
    category: "PANEL DISCUSSION",
    domain: "Discussion / Symposium",
    description: "Executive panel discussion featuring CTOs, academic directors, and founders discussing autonomous systems, enterprise AI, and tech workforce dynamics.",
    longDescription: "Council of Heroes is an executive symposium bringing together industry CTOs, AI researchers, and academic directors to discuss enterprise AI adoption, quantum tech, and career roadmaps for engineering graduates.",
    objectives: [
      "Gain direct insights from industry CTOs and technology executives on AI workforce shifts.",
      "Understand real-world enterprise adoption of generative models, automation, and cloud security.",
      "Engage in interactive Q&A sessions with founding leaders and academic convenors.",
    ],
    targetAudience: "All NIRMIT 2.0 registered delegates, engineering students, faculty members.",
    inPersonFormat: "Keynote panel debate moderated by senior faculty followed by an open floor Q&A session where delegates pose questions directly to technology leaders.",
    stages: [
      {
        title: "STAGE 1: DELEGATE CHECK-IN & SEATING",
        subtitle: "First-Come First-Seated Entry",
        duration: "02:30 PM – 03:00 PM",
        description: "Open entry for all valid NIRMIT pass holders on a first-come, first-seated basis.",
        deliverables: ["Delegate Entry Pass", "Question Queue Pass"],
      },
      {
        title: "STAGE 2: EXECUTIVE PANEL DEBATE",
        subtitle: "Enterprise AI & Future Tech Trends",
        duration: "03:00 PM – 04:30 PM",
        description: "Moderated round-table debate on artificial intelligence trends, deep tech careers, and industry skill demands.",
        deliverables: ["Keynote Address", "Panelist Round Table"],
      },
      {
        title: "STAGE 3: AUDIENCE Q&A & KEYNOTE NETWORKING",
        subtitle: "Open Floor Delegate Q&A",
        duration: "04:30 PM – 05:00 PM",
        description: "Open floor Q&A where student delegates interact directly with panel speakers.",
        deliverables: ["Interactive Q&A Session", "E-Certificate Issuance"],
      },
    ],
    date: "11 October 2026",
    time: "3:00 PM – 5:00 PM",
    reporting: "2:30 PM",
    venue: "Auditorium, MBA Block",
    teamSize: "Open Attendance",
    capacity: "Open to all NIRMIT Delegates",
    fee: "FREE",
    prizePool: {
      total: "N/A",
      first: "N/A",
      second: "N/A",
      third: "N/A",
    },
    midEvaluation: {
      required: false,
      details: "No Mid-Evaluation. Open attendance for all registered delegates.",
    },
    facultyLeads: ["Kashinath Pati", "Sambit Sethi", "Barsha Priyadarshinee"],
    studentLeadsList: [
      { name: "Sagar Nayak", role: "Student Lead", streamBranch: "BCA (4th Sem)", phone: "+91 93379 32696" },
      { name: "Sanjay Sahu", role: "Student Lead", streamBranch: "MBA (2nd Sem)", phone: "+91 78490 18797" },
    ],
    studentLeads: ["Sagar Nayak", "Sanjay Sahu"],
    leads: ["Kashinath Pati", "Sambit Sethi", "Barsha Priyadarshinee"],
    points: [
      "Interactive keynote speeches and round-table debate by industry leaders.",
      "Open floor Q&A session for delegates and student attendees.",
      "Direct networking opportunity with technology executives.",
    ],
    rules: [
      "Entry permitted for all valid NIRMIT 2.0 pass holders on a first-come, first-seated basis.",
      "Attendees must maintain session decorum and keep mobile devices on silent mode.",
      "Questions during the Q&A segment must be brief, relevant, and submitted via moderator queues.",
    ],
    technicalRequirements: [
      "Multi-channel wireless microphones for panelists & floor Q&A",
      "PA sound system",
      "Stage projection screen for speaker slides",
    ],
    venueRequirements: [
      "MBA Auditorium stage setup with sofa seating for 5 panelists",
      "Podium for moderator",
      "Audience seating",
    ],
    evaluationCriteria: [
      { name: "Attendance & Participation", weight: "100%", description: "Open knowledge exchange; e-certificates issued to registered delegates." },
    ],
    bgImage: "/council-heroes-bg.webp",
  },

  "marvel-minds": {
    id: "marvel-minds",
    name: "MARVEL OF MINDS",
    category: "EXPERT TALK & MASTERCLASS",
    domain: "Seminar / Masterclass",
    description: "In-depth masterclass delivered by distinguished industry experts covering Deep Tech, Quantum AI, and Next-Gen Robotics.",
    longDescription: "Marvel of Minds is an intensive masterclass delivered by distinguished industry experts covering Deep Learning architectures, Large Language Models, Edge AI, and Robotics.",
    objectives: [
      "Explore cutting-edge deep learning frameworks, neural network optimization, and LLM fine-tuning.",
      "Observe live technical architectural breakdowns and deployment walkthroughs.",
      "Participate in one-on-one student mentoring and career guidance discussions.",
    ],
    targetAudience: "All engineering students, CS research scholars, and technology delegates.",
    inPersonFormat: "2-hour interactive keynote session followed by live code walkthroughs, architectural breakdowns, and one-on-one student mentoring.",
    stages: [
      {
        title: "STAGE 1: MASTERCLASS CHECK-IN & NOTEBOOK SETUP",
        subtitle: "Delegate Desk Check-In",
        duration: "02:30 PM – 03:00 PM",
        description: "Delegate check-in and notebook/device setup.",
        deliverables: ["Masterclass Resource Folder", "Delegate Pass"],
      },
      {
        title: "STAGE 2: TECHNICAL KEYNOTE & LIVE CODE WALKTHROUGH",
        subtitle: "Deep Tech Masterclass",
        duration: "03:00 PM – 04:30 PM",
        description: "Expert presentation covering deep tech architectures, real-world case studies, and engineering roadmaps.",
        deliverables: ["Architecture Presentation", "Live Code Demo"],
      },
      {
        title: "STAGE 3: MENTORING & E-CERTIFICATE ISSUANCE",
        subtitle: "Q&A & Career Guidance",
        duration: "04:30 PM – 05:00 PM",
        description: "Interactive student Q&A and issuing of participation e-certificates.",
        deliverables: ["Participation E-Certificate", "Q&A Session"],
      },
    ],
    date: "12 October 2026",
    time: "3:00 PM – 5:00 PM",
    reporting: "2:30 PM",
    venue: "Conference Hall, Academic Block",
    teamSize: "Open Entry",
    capacity: "Open to all NIRMIT Delegates",
    fee: "FREE",
    prizePool: {
      total: "N/A",
      first: "N/A",
      second: "N/A",
      third: "N/A",
    },
    midEvaluation: {
      required: false,
      details: "No Mid-Evaluation. Open attendance for registered delegates.",
    },
    facultyLeads: ["Prajnadipta Sahu", "Bijaya Gouda", "Gopabandhu Sahu"],
    studentLeadsList: [
      { name: "Dibyajit Rout", role: "Student Lead", streamBranch: "MBA (4th Sem)", phone: "+91 80937 95416" },
      { name: "Aditya Mohanty", role: "Student Lead", streamBranch: "Diploma EE (3rd Sem)" },
    ],
    studentLeads: ["Dibyajit Rout", "Aditya Mohanty"],
    leads: ["Prajnadipta Sahu", "Bijaya Gouda", "Gopabandhu Sahu"],
    points: [
      "Keynote masterclass on deep tech trends and AI adoption.",
      "Interactive mentoring & student career guidance session.",
      "Participation e-certificates for registered delegates.",
    ],
    rules: [
      "Seating allocated on a first-come, first-served basis; reporting 15 mins prior is recommended.",
      "Laptops and note-taking devices are permitted.",
      "Q&A participants must state name and institute before posing questions to speakers.",
    ],
    technicalRequirements: [
      "HD projector & screen",
      "Wireless presentation clicker & lapel mic",
      "HDMI/USB-C workstation connectivity",
    ],
    venueRequirements: [
      "Academic Block Conference Hall with lecture seating",
      "Podium & presentation display desk",
    ],
    evaluationCriteria: [
      { name: "Masterclass Engagement", weight: "100%", description: "Open educational session; e-certificates issued to attendees." },
    ],
    bgImage: "/marvel-minds-bg.webp",
  },

  "tech-poster": {
    id: "tech-poster",
    name: "STARK EXPO",
    category: "TECHNICAL POSTER PRESENTATION",
    domain: "Branding & Designing / Engineering Research",
    description: "Technical poster presentation where students showcase engineering research, renewable energy concepts, algorithm infographics, and tech designs.",
    longDescription: "Stark Expo is NIRMIT's technical poster exhibition where engineering students showcase research papers, infographic technical breakdowns, renewable energy concepts, and emerging tech designs.",
    objectives: [
      "Translate complex engineering research, algorithm workflows, or renewable tech into clear infographics.",
      "Design A1/16x24 technical posters emphasizing methodology, diagrams, results, and conclusions.",
      "Deliver concise 5-minute oral research presentations to evaluation judges.",
    ],
    targetAudience: "Undergraduate & postgraduate research students, engineering designers, tech analysts.",
    inPersonFormat: "Shortlisted teams display printed posters (A1/16x24 size) or digital screens in the Academic Block Hallway. Each team gets 5 minutes to present their research to the jury followed by 3 minutes of Q&A.",
    stages: [
      {
        title: "STAGE 1: ONLINE ABSTRACT SCREENING",
        subtitle: "Pre-Selection Review",
        duration: "Prior to Event",
        description: "Teams submit poster PDF abstract and 2-min explanation in registration form.",
        deliverables: ["Poster PDF Abstract", "2-Min Video Summary"],
      },
      {
        title: "STAGE 2: POSTER MOUNTING & DISPLAY SETUP",
        subtitle: "Hallway Display Setup",
        duration: "09:30 AM – 10:00 AM",
        description: "Shortlisted teams mount printed posters on assigned display boards in Academic Block Hallway.",
        deliverables: ["Mounted A1 Poster Board", "Display Desk Setup"],
      },
      {
        title: "STAGE 3: ORAL PITCH & JURY EVALUATION",
        subtitle: "5 Mins Pitch + 3 Mins Q&A",
        duration: "10:00 AM – 01:00 PM",
        description: "Each team receives 5 minutes to present research followed by 3 minutes of jury Q&A.",
        deliverables: ["Live Oral Defense", "Jury Scorecard"],
      },
    ],
    date: "11 October 2026",
    time: "10:00 AM – 1:00 PM",
    reporting: "9:30 AM",
    venue: "Academic Block Hallway",
    teamSize: "1 – 3 Members per Team",
    capacity: "20 Teams Maximum",
    fee: "₹200 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Stark Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: true,
      details: "Mandatory online submission of poster abstract & video explanation via registration form.",
    },
    facultyLeads: ["Ankeeta Mohanty (Advisor)", "Priyabrata Muduli (Advisor)"],
    studentLeadsList: [
      { name: "Ankeeta Mohanty", role: "Student Lead", streamBranch: "B.Tech CSE (3rd Yr)", phone: "+91 98278 69350" },
      { name: "Priyabrata Muduli", role: "Student Lead", streamBranch: "MBA (2nd Sem)", phone: "+91 90191 25127" },
    ],
    studentLeads: ["Ankeeta Mohanty", "Priyabrata Muduli"],
    leads: ["Ankeeta Mohanty", "Priyabrata Muduli"],
    points: [
      "Poster display on allocated display boards (Standard 16x24 or A1 format).",
      "Live presentation & Q&A session with expert evaluation jury.",
      "Judged on topic innovation, visual infographic aesthetics, and oral defense.",
    ],
    rules: [
      "Poster content must be original and based on the topic confirmed during online mid-evaluation.",
      "Selected teams must bring printed posters or display monitors as approved by event leads.",
      "Each team receives 5 minutes for pitch presentation followed by 3 minutes of jury Q&A.",
      "Plagiarized content or unauthorized digital aids during presentation result in disqualification.",
    ],
    technicalRequirements: [
      "Monitors/screens for digital poster display (if requested)",
      "Wireless handheld mics for hall evaluation",
    ],
    venueRequirements: [
      "Academic Block Hallway display boards & mounting pins",
      "Lighting & display table setups",
    ],
    evaluationCriteria: [
      { name: "Research Depth & Technical Content", weight: "35%", description: "Scientific rigor, technical accuracy, and methodology." },
      { name: "Infographic Visual Design", weight: "35%", description: "Layout clarity, chart aesthetics, readability, and visual appeal." },
      { name: "Oral Presentation & Q&A Defense", weight: "30%", description: "Communication clarity and quality of responses during jury evaluation." },
    ],
    bgImage: "/about-section-bg.webp",
  },

  "ad-mad": {
    id: "ad-mad",
    name: "THUNDERBOLTS",
    category: "AD MAD SHOW",
    domain: "Branding & Dramatics",
    description: "Quirky creative advertising competition where teams improvise live humorous commercials for given futuristic tech products.",
    longDescription: "Thunderbolts is NIRMIT's high-energy Ad Mad competition. Teams receive a random futuristic tech product or quirky service concept on-spot, get 15 minutes to script an ad, and perform a live 3–5 minute commercial on stage.",
    objectives: [
      "Improvise creative, humorous advertisement scripts for unexpected futuristic products.",
      "Formulate catchy brand taglines, jingles, and comedic character roles on-spot.",
      "Execute flawless stage performance, voice modulation, and team synergy within 3–5 minutes.",
    ],
    targetAudience: "Creative thinkers, drama performers, marketing enthusiasts, comedic teams.",
    inPersonFormat: "On-spot product allocation at 2:00 PM. Teams get 15 minutes in holding rooms to brainstorm jingles, roles, and taglines. Teams perform live on stage evaluated on humor, creativity, and brand pitch.",
    stages: [
      {
        title: "STAGE 1: RANDOM DRAW & PRODUCT CHIT ALLOCATION",
        subtitle: "On-Spot Product Assignment",
        duration: "01:30 PM – 02:00 PM",
        description: "Team check-in and random draw selection of product/service assignment chits.",
        deliverables: ["Product Chit Assignment", "Team Stage Number"],
      },
      {
        title: "STAGE 2: 15-MINUTE HOLDING ROOM PREP SPRINT",
        subtitle: "15 Mins Closed-Door Scripting",
        duration: "02:00 PM – 02:30 PM",
        description: "Teams get 15 minutes closed-door prep time to script ads and assign roles.",
        deliverables: ["Ad Script & Roles Locked", "Stage Prop Check"],
      },
      {
        title: "STAGE 3: LIVE STAGE COMMERCIAL PERFORMANCE",
        subtitle: "3 to 5 Mins Stage Time",
        duration: "02:30 PM – 05:00 PM",
        description: "Teams perform 3–5 minute live commercials on stage before the jury panel.",
        deliverables: ["Live Stage Performance", "Jury Scorecard"],
      },
    ],
    date: "11 October 2026",
    time: "2:00 PM – 5:00 PM",
    reporting: "1:30 PM",
    venue: "MBA Seminar Hall",
    teamSize: "Trio (3 Members per Team)",
    capacity: "15 Teams Maximum",
    fee: "₹500 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Ad Mad Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. On-spot product assignment.",
    },
    facultyLeads: ["Subhasmita Mam", "Nilima Mam"],
    studentLeadsList: [
      { name: "Asutosh Ranjan Sethy", role: "Student Lead", streamBranch: "MBA", phone: "+91 63729 55246" },
    ],
    studentLeads: ["Asutosh Ranjan Sethy"],
    leads: ["Subhasmita Mam", "Nilima Mam"],
    points: [
      "On-spot product allocation with a 15-minute preparation window.",
      "Live stage performance evaluated on humor, creativity, tagline, & punch.",
      "Use of stage props, jingles, and team coordination highly encouraged.",
    ],
    rules: [
      "Products or brand concepts will be allocated via random draw on-spot.",
      "Teams are given exactly 15 minutes of preparation time prior to stage call.",
      "Performance length on stage is strictly limited to 3 to 5 minutes.",
      "Content must adhere to ethical guidelines; vulgarity or offensive humor results in instant disqualification.",
    ],
    technicalRequirements: [
      "Stage audio system with background sound effects desk",
      "Handheld wireless microphones",
    ],
    venueRequirements: [
      "MBA Seminar Hall stage area",
      "Holding rooms for 15-minute team prep",
      "Audience seating",
    ],
    evaluationCriteria: [
      { name: "Humor & Entertainment Quotient", weight: "35%", description: "Stage energy, comedic timing, and audience engagement." },
      { name: "Concept Creativity & Brand Tagline", weight: "35%", description: "Originality of ad script, product integration, and catchy slogan." },
      { name: "Team Coordination & Execution", weight: "30%", description: "Equal role participation, smooth transitions, and stage presence." },
    ],
    bgImage: "/thunderbolts-bg.webp",
    heroLeft: "/thunderbolts-left.webp",
    heroRight: "/thunderbolts-right.webp",
  },

  "marketing-showdown": {
    id: "marketing-showdown",
    name: "BATTLE OF BRANDS",
    category: "MARKETING CASE PITCH",
    domain: "Marketing & Business",
    description: "Corporate marketing challenge where teams analyze real-world case briefs, build go-to-market (GTM) strategies, and pitch live to judges.",
    longDescription: "Battle of Brands is a corporate marketing challenge. Teams analyze real-world case briefs, build data-driven go-to-market (GTM) strategies, and present live pitch decks before senior marketing executives.",
    objectives: [
      "Analyze corporate consulting briefs, target demographics, and market competition.",
      "Formulate data-driven GTM strategy slide decks detailing positioning, digital campaigns, and ROI.",
      "Deliver a 10-minute executive presentation followed by a 5-minute jury Q&A defense.",
    ],
    targetAudience: "MBA students, marketing strategists, brand managers, business analysts.",
    inPersonFormat: "Teams receive a case brief detailing product positioning and market hurdles. Teams present a structured 10-minute presentation covering target segmentation, GTM strategy, and ROI metrics, followed by 5 minutes of jury Q&A.",
    stages: [
      {
        title: "STAGE 1: BRIEF RELEASE & CONSOLE DESK LOAD",
        subtitle: "Consulting Brief & Slide Check",
        duration: "09:30 AM – 10:00 AM",
        description: "Teams receive case brief materials and load presentation decks at the media desk.",
        deliverables: ["GTM Presentation Deck", "Case Brief Packet"],
      },
      {
        title: "STAGE 2: LIVE GTM PITCH PRESENTATIONS",
        subtitle: "10 Mins Live Presentation",
        duration: "10:00 AM – 12:30 PM",
        description: "Each finalist team delivers a 10-minute presentation covering market research, brand positioning, and financial ROI.",
        deliverables: ["Live Stage Pitch", "Financial ROI Model"],
      },
      {
        title: "STAGE 3: EXECUTIVE JURY CROSS-EXAMINATION",
        subtitle: "5 Mins Q&A Defense",
        duration: "12:30 PM – 01:00 PM",
        description: "5-minute cross-examination per team by marketing directors followed by winner announcements.",
        deliverables: ["Jury Q&A Defense", "Brand Trophy Winner"],
      },
    ],
    date: "13 October 2026",
    time: "10:00 AM – 1:00 PM",
    reporting: "9:30 AM",
    venue: "Conference Hall, Academic Block",
    teamSize: "Quartet (4 Members per Team)",
    capacity: "20 Teams Maximum",
    fee: "₹500 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Brand Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. On-spot GTM strategy pitch.",
    },
    facultyLeads: ["Nitin Sir", "Subhasmita Mam"],
    studentLeadsList: [
      { name: "Ritu Pragyan Priyadarshini", role: "Student Lead", streamBranch: "MBA (3rd Sem)", phone: "+91 96927 27534" },
      { name: "Debjit Malick", role: "Student Lead", streamBranch: "B.Tech CSE (5th Sem)", phone: "+91 86587 36591" },
    ],
    studentLeads: ["Ritu Pragyan Priyadarshini", "Debjit Malick"],
    leads: ["Nitin Sir", "Subhasmita Mam"],
    points: [
      "Analyze real-world business briefs and deliver data-driven GTM pitch decks.",
      "10-minute presentation followed by executive jury Q&A.",
      "Evaluated on market research, target positioning, ROI metrics, and presentation style.",
    ],
    rules: [
      "Teams will receive a consulting case brief detailing product positioning and market challenges.",
      "Submissions must include a structured presentation deck (PPT/PDF) covering target demographic and GTM tactics.",
      "Final presentations are limited to 10 minutes, strictly followed by 5 minutes of jury Q&A.",
      "Judging criteria: Strategic vision (30%), Feasibility & ROI (30%), Creative positioning (20%), Defense (20%).",
    ],
    technicalRequirements: [
      "HD projector & presentation clicker",
      "Wireless microphones",
      "Jury timer display",
    ],
    venueRequirements: [
      "Academic Block Conference Hall stage",
      "Executive jury panel table",
      "Audience seating",
    ],
    evaluationCriteria: [
      { name: "Strategic GTM Vision & Research", weight: "30%", description: "Market analysis accuracy, competitor positioning, and target audience alignment." },
      { name: "Financial Viability & Projected ROI", weight: "30%", description: "Budgeting realism, revenue channels, and marketing ROI calculation." },
      { name: "Creative Brand Positioning", weight: "20%", description: "Unique campaign messaging, digital channels strategy, and brand narrative." },
      { name: "Jury Q&A Defense & Presentation", weight: "20%", description: "Slide design quality, team eloquence, and defense under cross-examination." },
    ],
    bgImage: "/battle-of-brands-bg.webp",
  },

  "cxo-summit": {
    id: "cxo-summit",
    name: "SHIELD BOARDROOM",
    category: "CXO ROUNDTABLE SUMMIT",
    domain: "Business & Strategy",
    description: "Strategic corporate simulation where team members step into C-suite roles (CEO, CTO, CMO, CFO) to analyze case briefs and defend growth strategies.",
    longDescription: "Shield Boardroom is a strategic C-suite simulation where team members assume executive titles (CEO, CTO, CMO, CFO, COO) to resolve high-stakes corporate crisis briefs and present unified boardroom growth strategies.",
    objectives: [
      "Assign distinct C-suite roles (CEO, CTO, CMO, CFO, COO) and analyze real-world corporate crisis briefs.",
      "Develop multi-disciplinary strategies balancing technical viability, financial budgeting, and brand reputation.",
      "Deliver a 5-minute executive boardroom presentation where every executive member speaks for their domain.",
    ],
    targetAudience: "Management delegates, aspiring C-suite leaders, business strategists.",
    inPersonFormat: "Teams assign C-suite roles prior to case release. Teams get 15 minutes closed-door analysis time to formulate strategy. Teams deliver a 5-minute boardroom pitch; every executive must speak for their domain.",
    stages: [
      {
        title: "STAGE 1: C-SUITE ROLE REGISTRATION & CASE RELEASE",
        subtitle: "Title Assignment & Brief Handout",
        duration: "01:30 PM – 02:00 PM",
        description: "Teams confirm C-suite title assignments and receive confidential case study packets.",
        deliverables: ["Executive Title Badges", "Case Packet"],
      },
      {
        title: "STAGE 2: 15-MINUTE CLOSED-DOOR BOARDROOM SPRINT",
        subtitle: "Strategy Formulation Sprint",
        duration: "02:00 PM – 02:30 PM",
        description: "Teams analyze case briefs in private holding rooms to formulate unified strategy.",
        deliverables: ["Boardroom Strategy Brief"],
      },
      {
        title: "STAGE 3: 5-MINUTE BOARDROOM STRATEGY PITCH & DEFENSE",
        subtitle: "Domain Executive Defense",
        duration: "02:30 PM – 04:30 PM",
        description: "Teams present strategy in the executive boardroom; every executive speaks for 1 minute followed by jury Q&A.",
        deliverables: ["5-Min Executive Pitch", "CXO Trophy Winner"],
      },
    ],
    date: "12 October 2026",
    time: "2:00 PM – 4:30 PM",
    reporting: "1:30 PM",
    venue: "Executive Boardroom, MBA Block",
    teamSize: "4 – 5 Members (C-suite Roles)",
    capacity: "15 – 20 Teams",
    fee: "₹500 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + CXO Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. On-spot corporate case allocation.",
    },
    facultyLeads: ["Akankhya Mam"],
    studentLeadsList: [
      { name: "Tushar Dhal", role: "Student Lead", streamBranch: "MBA (4th Sem)", phone: "+91 90786 34571" },
    ],
    studentLeads: ["Tushar Dhal"],
    leads: ["Akankhya Mam"],
    points: [
      "Each member assumes a distinct executive role (CEO, CTO, CMO, CFO, COO).",
      "15-minute intensive case study analysis followed by a 5-minute executive pitch.",
      "Evaluated on strategic foresight, cross-functional synergy, and ROI defense.",
      "Every member must speak for 1 minute representing their C-suite title.",
    ],
    rules: [
      "Each team must assign distinct executive titles (CEO, CTO, CMO, CFO) prior to case release.",
      "15 minutes allocated for closed-door case analysis; no external communication permitted.",
      "Each team gets 5 minutes to present strategy; every executive member must speak for their domain.",
      "Jury evaluation is based on business viability, analytical rigor, and executive communication.",
    ],
    technicalRequirements: [
      "Boardroom presentation monitor screen",
      "Conference microphones",
      "Session timer",
    ],
    venueRequirements: [
      "MBA Block Executive Boardroom with round table seating",
      "Executive jury panel",
      "Moderator desk",
    ],
    evaluationCriteria: [
      { name: "C-Suite Role Integration", weight: "30%", description: "Equal contribution and domain alignment across CEO, CTO, CMO, and CFO roles." },
      { name: "Strategic Decision Quality", weight: "30%", description: "Analytical depth of crisis resolution, risk mitigation, and growth strategy." },
      { name: "Financial & Tech Risk Defense", weight: "20%", description: "Feasibility of technical execution and financial budgeting." },
      { name: "Executive Communication & Poise", weight: "20%", description: "Professional boardroom demeanor, time discipline, and confidence." },
    ],
    bgImage: "/shield-boardroom-bg.webp",
  },

  "face-painting": {
    id: "face-painting",
    name: "INFINITY FACES",
    category: "FACE PAINTING COMPETITION",
    domain: "Art & Creativity",
    description: "Creative face painting competition where participants depict futuristic tech concepts, cyber alter-egos, and Marvel superhero themes on human canvases.",
    longDescription: "Infinity Faces is a creative body & face art challenge where artist-model duos transform human faces into futuristic cyber alter-egos, robotic androids, and iconic Marvel superheroes using skin-safe cosmetic paints.",
    objectives: [
      "Transform a human canvas into a striking futuristic cyber alter-ego or Marvel superhero character.",
      "Utilize skin-safe, non-toxic cosmetic paints with high precision, blending, and detail.",
      "Deliver a confident 2-minute runway walk showcasing character expression and visual impact.",
    ],
    targetAudience: "Makeup artists, face painters, creative visual artists, model duos.",
    inPersonFormat: "Duos report at 9:30 AM. On-spot theme is announced at 10:00 AM. Artists get 2 hours to paint their model. Followed by a 2-minute runway inspection where models walk before the jury.",
    stages: [
      {
        title: "STAGE 1: DUO REGISTRATION & COSMETIC INSPECTION",
        subtitle: "Skin-Safe Paint Check",
        duration: "09:30 AM – 10:00 AM",
        description: "Registration, workstation assignment, and inspection of skin-safe cosmetic paints.",
        deliverables: ["Cosmetic Paint Pass", "Model Station Number"],
      },
      {
        title: "STAGE 2: 2-HOUR LIVE PAINTING SPRINT",
        subtitle: "2 Hours Unassisted Painting",
        duration: "10:00 AM – 12:00 PM",
        description: "Artists paint their model models under live supervision without pre-made stencils.",
        deliverables: ["Completed Face & Neck Artwork"],
      },
      {
        title: "STAGE 3: RUNWAY WALK & JURY INSPECTION",
        subtitle: "Model Character Runway Walk",
        duration: "12:00 PM – 12:30 PM",
        description: "Models walk the inspection runway presenting the completed artwork to jury judges.",
        deliverables: ["Runway Walk Presentation", "Jury Scorecard"],
      },
    ],
    date: "13 October 2026",
    time: "10:00 AM – 12:00 PM",
    reporting: "9:30 AM",
    venue: "Conference Hall, Academic Block",
    teamSize: "Duo (2 Members: 1 Artist + 1 Model)",
    capacity: "20 Teams Maximum",
    fee: "₹200 per Team",
    prizePool: {
      total: "₹10,000",
      first: "₹5,000 + Art Trophy",
      second: "₹3,000 + Merit Certificate",
      third: "₹2,000 + Merit Certificate",
    },
    midEvaluation: {
      required: false,
      details: "No Online Mid-Evaluation. On-spot theme artwork.",
    },
    facultyLeads: ["Barsha Priyadarshini", "Gopabandhu Sahu", "Bhagyalaxmi Devi"],
    studentLeadsList: [
      { name: "Swati Pragnya Parida", role: "Student Lead", streamBranch: "B.Tech Mech (5th Sem)", phone: "+91 70080 02456" },
      { name: "Subhransu Nayak", role: "Student Lead", streamBranch: "B.Tech CSE (5th Sem)", phone: "+91 81446 96447" },
    ],
    studentLeads: ["Swati Pragnya Parida", "Subhransu Nayak"],
    leads: ["Barsha Priyadarshini", "Gopabandhu Sahu", "Bhagyalaxmi Devi"],
    points: [
      "Express futuristic themes and Marvel alter-egos on a human canvas model.",
      "Participants must bring skin-safe face paints, sponges, and brushes.",
      "Evaluated on artistic quality, theme depth, neatness, and visual impact.",
    ],
    rules: [
      "Each team consists of exactly 2 participants (one artist and one model canvas).",
      "Only skin-safe, non-toxic, cosmetic-grade paints and makeup materials are allowed.",
      "All artwork must be painted entirely during the allocated 2-hour event duration.",
      "Pre-painted stencils or transfer tattoos are strictly prohibited.",
    ],
    technicalRequirements: ["Skin-safe makeup lighting stations"],
    venueRequirements: [
      "Academic Block Conference Hall with mirror tables and ring lights",
      "Artist seating & model chairs",
      "Jury inspection runway",
    ],
    evaluationCriteria: [
      { name: "Artistic Detail & Brushwork", weight: "35%", description: "Precision lines, shading, color blending, and intricate detail." },
      { name: "Theme Concept & Character Depth", weight: "35%", description: "Alignment with cyber, futuristic, or Marvel alter-ego themes." },
      { name: "Model Runway Presentation", weight: "30%", description: "Overall visual impact, model expression, and confidence." },
    ],
    bgImage: "/infinity-faces-bg.webp",
  },
};

// Map aliases to dictionary keys
eventsDictionary["poster-presentation"] = eventsDictionary["tech-poster"];
eventsDictionary["stark-expo"] = eventsDictionary["tech-poster"];
eventsDictionary["cxo-roundtable"] = eventsDictionary["cxo-summit"];
eventsDictionary["shield-boardroom"] = eventsDictionary["cxo-summit"];
eventsDictionary["thunderbolts"] = eventsDictionary["ad-mad"];
eventsDictionary["battle-of-brands"] = eventsDictionary["marketing-showdown"];
eventsDictionary["marketing-maverick"] = eventsDictionary["marketing-showdown"];
eventsDictionary["guardians-of-groove"] = eventsDictionary["groove"];
eventsDictionary["multiverse-of-ideas"] = eventsDictionary["multiverse"];
eventsDictionary["infinity-faces"] = eventsDictionary["face-painting"];
eventsDictionary["alter-ego"] = eventsDictionary["face-painting"];
eventsDictionary["nextech-2.0"] = eventsDictionary["nextech"];

export default function DynamicEventPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const eventId = resolvedParams.id;
  const [activeTab, setActiveTab] = useState<"overview" | "format" | "setup" | "rules" | "coordinators">("overview");
  const { openModal } = useRegistrationModal();

  const eventData = eventsDictionary[eventId] || {
    id: eventId,
    name: eventId.toUpperCase().replace(/-/g, " "),
    category: "NIRMIT 2.0 EVENT",
    domain: "Technology / Competition",
    description: "Official NIRMIT 2.0 technical event hosted at NMIET Campus, Bhubaneswar.",
    longDescription: "Official competition hosted as part of NIRMIT 2.0 at NMIET Campus. Participants compete against top talent across Odisha and regional institutions under standardized rules and expert jury evaluation.",
    objectives: [
      "Demonstrate technical proficiency and domain knowledge.",
      "Build scalable, real-world engineering and business solutions.",
      "Engage in peer networking and jury mentoring.",
    ],
    targetAudience: "Open to enrolled undergraduate and postgraduate students.",
    inPersonFormat: "Registered delegates report at the designated venue for check-in, preliminary briefings, and live competitive evaluation before expert judges.",
    stages: [
      {
        title: "STAGE 1: CHECK-IN & DESK BRIEFING",
        subtitle: "Registration & Pass Verification",
        duration: "09:30 AM – 10:00 AM",
        description: "Verification of digital QR passes, student ID cards, and seat assignment.",
        deliverables: ["Participant Pass", "Desk Number"],
      },
      {
        title: "STAGE 2: MAIN COMPETITION SESSION",
        subtitle: "Live Evaluation & Judging",
        duration: "10:00 AM – 04:00 PM",
        description: "Main event execution and live judging rounds before designated mentors.",
        deliverables: ["Submission MVP/Demo", "Jury Scorecard"],
      },
    ],
    date: "11 – 15 October 2026",
    time: "10:00 AM – 5:00 PM",
    reporting: "9:30 AM",
    venue: "NMIET Campus Auditorium",
    teamSize: "1 – 3 Members",
    capacity: "Open",
    fee: "₹200 per Team",
    prizePool: { total: "₹10,000", first: "₹5,000", second: "₹3,000", third: "₹2,000" },
    midEvaluation: { required: false, details: "No Online Mid-Evaluation." },
    facultyLeads: ["Faculty Convenor"],
    studentLeadsList: [{ name: "Student Coordinator", role: "Student Lead" }],
    studentLeads: ["Student Coordinator"],
    leads: ["Faculty Convenor", "Student Coordinator"],
    points: [
      "Open to all registered undergraduate & postgraduate students.",
      "FCFS registration slot allocation policy.",
      "Certificate of participation for all registered teams.",
    ],
    rules: [
      "Valid College ID Card & NIRMIT 2.0 Pass required for entry.",
      "Punctuality: Late arrival past reporting window leads to forfeiture of slot.",
      "Zero tolerance for property damage, unauthorized hardware tampering, or misconduct.",
    ],
    technicalRequirements: ["Standard event venue infrastructure"],
    venueRequirements: ["NMIET Campus Event Space"],
    evaluationCriteria: [
      { name: "Technical Execution", weight: "50%", description: "Quality of performance and adherence to standards." },
      { name: "Presentation & Defense", weight: "50%", description: "Clarity of demonstration and answers to jury." },
    ],
    bgImage: "/events-bg.webp",
  };

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff", paddingTop: "80px", position: "relative" }}>
      {/* Background Image & Overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", opacity: 0.35 }}>
        <Image
          src={eventData.bgImage}
          alt={eventData.name}
          fill
          priority
          unoptimized
          style={{ objectFit: "cover" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, transparent 20%, rgba(4,5,7,0.9) 100%)" }} />
      </div>

      {/* Top Layer Overlay if available */}
      {eventData.topOverlay && (
        <div style={{ position: "fixed", inset: 0, zIndex: 15, pointerEvents: "none" }}>
          <Image
            src={eventData.topOverlay}
            alt="Event Top Overlay"
            fill
            priority
            unoptimized
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      )}

      {/* Hero Characters if available */}
      {eventData.heroLeft && (
        <div style={{
          position: "fixed",
          bottom: eventId === "ad-mad" ? "-280px" : eventId === "groove" ? "-100px" : "0px",
          left: eventId === "quantumania" ? "-60px" : eventId === "multiverse" ? "-20px" : eventId === "ad-mad" ? "-10px" : "0px",
          zIndex: 2,
          pointerEvents: "none",
          width: eventId === "quantumania" ? "clamp(120px, 13vw, 200px)" : eventId === "multiverse" ? "clamp(220px, 24vw, 360px)" : eventId === "ad-mad" ? "clamp(28px, 3.5vw, 50px)" : "400px",
          height: eventId === "quantumania" ? "clamp(120px, 13vw, 200px)" : eventId === "multiverse" ? "clamp(220px, 24vw, 360px)" : eventId === "ad-mad" ? "clamp(28px, 3.5vw, 50px)" : "400px",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))"
        }}>
          <Image src={eventData.heroLeft} alt="Hero Left" fill unoptimized style={{ objectFit: "contain", objectPosition: "bottom left" }} />
        </div>
      )}
      {eventData.heroRight && (
        <div style={{
          position: "fixed",
          top: eventId === "quantumania" ? "70px" : eventId === "multiverse" ? "80px" : eventId === "ad-mad" ? "130px" : undefined,
          bottom: eventId === "quantumania" || eventId === "multiverse" || eventId === "ad-mad" ? undefined : "0px",
          right: eventId === "quantumania" ? "40px" : eventId === "multiverse" ? "20px" : eventId === "ad-mad" ? "360px" : "0px",
          zIndex: 2,
          pointerEvents: "none",
          width: eventId === "quantumania" ? "420px" : eventId === "multiverse" ? "clamp(240px, 26vw, 380px)" : eventId === "ad-mad" ? "clamp(14px, 1.8vw, 24px)" : "400px",
          height: eventId === "quantumania" ? "420px" : eventId === "multiverse" ? "clamp(240px, 26vw, 380px)" : eventId === "ad-mad" ? "clamp(14px, 1.8vw, 24px)" : "400px",
          filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.9))"
        }}>
          <Image src={eventData.heroRight} alt="Hero Right" fill unoptimized style={{ objectFit: "contain", objectPosition: "top right" }} />
        </div>
      )}

      {/* Main Content Layout */}
      <div className="section-container" style={{ position: "relative", zIndex: 10, paddingBottom: "100px" }}>
        
        {/* Navigation Breadcrumb */}
        <Link href="/events" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#e2e8f0", textDecoration: "none", fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, background: "linear-gradient(135deg, rgba(30,41,59,0.8) 0%, rgba(15,23,42,0.9) 100%)", padding: "10px 20px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.2)", borderLeft: "3px solid #cbd5e1", marginBottom: "28px", boxShadow: "0 6px 20px rgba(0,0,0,0.5)" }}>
          ← BACK TO ALL EVENTS
        </Link>

        {/* Header Title Banner */}
        <div style={{ marginBottom: "36px" }}>
          <div style={{ display: "inline-flex", gap: "10px", alignItems: "center", marginBottom: "12px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 800, color: "#e2e8f0", letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(255,255,255,0.08)", padding: "4px 12px", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.2)" }}>
              {eventData.category}
            </span>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>•</span>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#94a3b8", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              {eventData.domain}
            </span>
          </div>

          <h1 style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(3.2rem, 8.5vw, 6.5rem)",
            letterSpacing: "0.04em",
            margin: "6px 0 16px 0",
            lineHeight: 1.05,
            padding: "8px 0",
            display: "block",
            transform: "scaleY(1.05)",
            transformOrigin: "left center",
            background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 45%, #64748B 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            filter: "drop-shadow(0 4px 20px rgba(0, 0, 0, 0.9))"
          }}>
            {eventData.name}
          </h1>

          <p style={{ fontSize: "1.2rem", color: "rgba(241,245,249,0.9)", maxWidth: "850px", lineHeight: "1.6" }}>
            {eventData.description}
          </p>
        </div>

        {/* Sci-Fi Chamfered 4-Card Parameter Bar */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: "16px", marginBottom: "40px" }}>
          {/* Card 1: Entry Fee & Prize Pool */}
          <div className="chamfer-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span className="chamfer-box-date">ENTRY FEE & PRIZE POOL</span>
              <span style={{ fontSize: "1.1rem" }}>💰</span>
            </div>
            <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.01em" }}>{eventData.prizePool.total}</div>
            <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "4px", fontWeight: 600 }}>Fee: {eventData.fee}</div>
          </div>

          {/* Card 2: Event Date & Timing */}
          <div className="chamfer-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span className="chamfer-box-date">EVENT DATE & TIME</span>
              <span style={{ fontSize: "1.1rem" }}>📅</span>
            </div>
            <div style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>{eventData.date}</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(241,245,249,0.85)", marginTop: "4px" }}>Report: {eventData.reporting} | {eventData.time}</div>
          </div>

          {/* Card 3: Venue Location */}
          <div className="chamfer-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span className="chamfer-box-date">VENUE LOCATION</span>
              <span style={{ fontSize: "1.1rem" }}>📍</span>
            </div>
            <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#ffffff" }}>{eventData.venue}</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(241,245,249,0.85)", marginTop: "4px" }}>NMIET Campus, Bhubaneswar</div>
          </div>

          {/* Card 4: Team Format & Evaluation */}
          <div className="chamfer-box">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
              <span className="chamfer-box-date">FORMAT & CAP</span>
              <span style={{ fontSize: "1.1rem" }}>👥</span>
            </div>
            <div style={{ fontSize: "1.02rem", fontWeight: 700, color: "#ffffff" }}>{eventData.teamSize}</div>
            <div style={{ fontSize: "0.85rem", color: "#cbd5e1", marginTop: "4px", fontWeight: 600 }}>
              {eventData.capacity} • {eventData.midEvaluation.required ? "Mid-Eval Required" : "No Mid-Eval"}
            </div>
          </div>
        </div>

        {/* Tab Navigation Bar */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "28px", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "16px" }}>
          {[
            { id: "overview", label: "OVERVIEW & VISION" },
            { id: "format", label: "STAGES & SPECIFICATIONS" },
            { id: "setup", label: "SETUP & EVALUATION" },
            { id: "rules", label: "RULES & DIRECTIVES" },
            { id: "coordinators", label: "LEADS & CONVENORS" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              style={{
                padding: "12px 22px",
                borderRadius: "8px",
                border: activeTab === tab.id ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.18)",
                background: activeTab === tab.id ? "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(148,163,184,0.15) 100%)" : "rgba(15,23,42,0.6)",
                color: activeTab === tab.id ? "#ffffff" : "rgba(241,245,249,0.75)",
                fontFamily: "var(--font-geist-mono), monospace",
                fontSize: "0.83rem",
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline-Shaped Tab Content Box */}
        <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderLeft: "4px solid #cbd5e1", borderRadius: "8px", padding: "36px", marginBottom: "44px", boxShadow: "0 20px 50px rgba(0,0,0,0.7)" }}>
          
          {/* TAB 1: OVERVIEW & VISION */}
          {activeTab === "overview" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 60%, #94A3B8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "14px", letterSpacing: "0.04em", transform: "scaleY(1.15)", transformOrigin: "left center" }}>
                ABOUT {eventData.name}
              </h2>
              <p style={{ color: "rgba(241,245,249,0.92)", fontSize: "1.05rem", lineHeight: "1.75", marginBottom: "28px" }}>
                {eventData.longDescription}
              </p>

              {/* Objectives Section */}
              <h3 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.92rem", color: "#e2e8f0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                🎯 KEY OBJECTIVES & LEARNING OUTCOMES
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "14px", marginBottom: "32px" }}>
                {eventData.objectives.map((obj, idx) => (
                  <div key={idx} style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.65) 0%, rgba(15,23,42,0.85) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "16px 20px", display: "flex", gap: "12px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "1.1rem", color: "#cbd5e1" }}>⚡</span>
                    <span style={{ color: "rgba(241,245,249,0.9)", fontSize: "0.94rem", lineHeight: "1.5" }}>{obj}</span>
                  </div>
                ))}
              </div>

              {/* Target Audience Banner */}
              <div style={{ background: "rgba(255,255,255,0.06)", borderLeft: "4px solid #ffffff", padding: "16px 20px", borderRadius: "0 8px 8px 0", marginBottom: "32px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.78rem", color: "#ffffff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "block" }}>TARGET ELIGIBILITY & PREREQUISITES</span>
                <p style={{ margin: "4px 0 0 0", color: "rgba(241,245,249,0.88)", fontSize: "0.95rem" }}>{eventData.targetAudience}</p>
              </div>

              {/* Prize Breakdown Cards */}
              <h3 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.92rem", color: "#e2e8f0", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                🏆 PRIZE POOL BREAKDOWN ({eventData.prizePool.total} TOTAL)
              </h3>
              
              {eventData.prizePool.total !== "N/A" ? (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "32px" }}>
                  <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderLeft: "3px solid #ffffff", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "#ffffff", fontWeight: 700, fontFamily: "var(--font-geist-mono), monospace" }}>🥇 1ST PRIZE WINNER</span>
                    <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#ffffff", marginTop: "6px" }}>{eventData.prizePool.first}</div>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "#cbd5e1", fontWeight: 700, fontFamily: "var(--font-geist-mono), monospace" }}>🥈 2ND RUNNER-UP</span>
                    <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#ffffff", marginTop: "6px" }}>{eventData.prizePool.second}</div>
                  </div>
                  <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "3px solid #94a3b8", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontWeight: 700, fontFamily: "var(--font-geist-mono), monospace" }}>🥉 3RD RUNNER-UP</span>
                    <div style={{ fontSize: "1.45rem", fontWeight: 800, color: "#ffffff", marginTop: "6px" }}>{eventData.prizePool.third}</div>
                  </div>
                </div>
              ) : (
                <div style={{ background: "rgba(255,255,255,0.06)", padding: "16px 20px", borderRadius: "8px", marginBottom: "28px", color: "rgba(241,245,249,0.85)" }}>
                  Informational & mentorship event. Participation E-Certificates issued to all delegates.
                </div>
              )}
            </div>
          )}

          {/* TAB 2: STAGES & SPECIFICATIONS */}
          {activeTab === "format" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 60%, #94A3B8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "14px", letterSpacing: "0.04em", transform: "scaleY(1.15)", transformOrigin: "left center" }}>
                IN-PERSON STAGE FLOW & FORMAT SPECIFICATIONS
              </h2>
              <p style={{ color: "rgba(241,245,249,0.92)", fontSize: "1.05rem", lineHeight: "1.7", marginBottom: "28px" }}>
                {eventData.inPersonFormat}
              </p>

              {/* Mid-Evaluation Requirement Banner */}
              <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.7) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.2)", borderLeft: "4px solid #ffffff", borderRadius: "8px", padding: "22px", marginBottom: "32px" }}>
                <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", color: "#ffffff", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {eventData.midEvaluation.required ? "STAGE 1: MANDATORY MID-EVALUATION SUBMISSION REQUIREMENT" : "DIRECT ON-SITE COMPETITION (NO MID-EVALUATION)"}
                </span>
                <p style={{ margin: "8px 0 0 0", color: "rgba(241,245,249,0.9)", fontSize: "0.98rem", lineHeight: "1.65" }}>
                  {eventData.midEvaluation.details}
                </p>
              </div>

              {/* Detailed Stage Cards (Styled like Timeline Items) */}
              <h3 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.92rem", color: "#e2e8f0", marginBottom: "18px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                📌 DETAILED ROUND-BY-ROUND STAGE SPECIFICATIONS
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {eventData.stages.map((stg, idx) => (
                  <div key={idx} style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "4px solid #cbd5e1", borderRadius: "8px", padding: "24px", boxShadow: "0 8px 30px rgba(0,0,0,0.5)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "10px", marginBottom: "10px" }}>
                      <div>
                        <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.75rem", color: "#cbd5e1", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                          {stg.title}
                        </span>
                        <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", margin: "2px 0 0 0" }}>{stg.subtitle}</h4>
                      </div>
                      <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.78rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", border: "1px solid rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: "6px" }}>
                        ⏱ {stg.duration}
                      </span>
                    </div>

                    <p style={{ color: "rgba(241,245,249,0.88)", fontSize: "0.95rem", lineHeight: "1.65", margin: "0 0 14px 0" }}>
                      {stg.description}
                    </p>

                    <div>
                      <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: "6px" }}>
                        KEY STAGE DELIVERABLES & OUTCOMES:
                      </span>
                      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        {stg.deliverables.map((item, dIdx) => (
                          <span key={dIdx} style={{ fontSize: "0.8rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", padding: "4px 12px", borderRadius: "4px", color: "#e2e8f0" }}>
                            ✔ {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: SETUP & EVALUATION MATRIX */}
          {activeTab === "setup" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 60%, #94A3B8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "18px", letterSpacing: "0.04em", transform: "scaleY(1.15)", transformOrigin: "left center" }}>
                TECHNICAL INFRASTRUCTURE & EVALUATION MATRIX
              </h2>

              {/* Evaluation Matrix Table */}
              <h3 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.92rem", color: "#e2e8f0", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                📊 OFFICIAL JURY SCORING WEIGHTAGES
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "36px" }}>
                {eventData.evaluationCriteria.map((criterion, idx) => (
                  <div key={idx} style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "20px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "1.3rem", fontWeight: 800, color: "#ffffff" }}>{criterion.weight}</span>
                      <span style={{ fontSize: "0.72rem", fontFamily: "var(--font-geist-mono), monospace", color: "rgba(255,255,255,0.5)" }}>METRIC {idx + 1}</span>
                    </div>
                    <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "1rem", marginTop: "6px" }}>{criterion.name}</div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(241,245,249,0.75)", marginTop: "4px", margin: 0, lineHeight: "1.5" }}>{criterion.description}</p>
                  </div>
                ))}
              </div>

              {/* Hardware & Technical Requirements */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
                <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "22px" }}>
                  <h4 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.88rem", color: "#ffffff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    🛠️ TECHNICAL & HARDWARE SETUP
                  </h4>
                  <ul style={{ paddingLeft: "20px", color: "rgba(241,245,249,0.88)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>
                    {eventData.technicalRequirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "22px" }}>
                  <h4 style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.88rem", color: "#ffffff", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    🏛️ VENUE & ARENA SPECIFICATIONS
                  </h4>
                  <ul style={{ paddingLeft: "20px", color: "rgba(241,245,249,0.88)", fontSize: "0.92rem", lineHeight: "1.7", margin: 0 }}>
                    {eventData.venueRequirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: RULES & DIRECTIVES */}
          {activeTab === "rules" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 60%, #94A3B8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "16px", letterSpacing: "0.04em", transform: "scaleY(1.15)", transformOrigin: "left center" }}>
                COMPREHENSIVE RULES & ELIGIBILITY DIRECTIVES
              </h2>
              <ul style={{ paddingLeft: "24px", color: "rgba(241,245,249,0.92)", fontSize: "0.98rem", lineHeight: "1.85", marginBottom: "28px" }}>
                {eventData.rules.map((rule, idx) => (
                  <li key={idx} style={{ marginBottom: "12px" }}>{rule}</li>
                ))}
                <li style={{ marginBottom: "12px" }}>All team members must carry physical College Student ID cards and digital NIRMIT 2.0 QR Passes for campus gate entry.</li>
                <li style={{ marginBottom: "12px" }}>Strict adherence to allocated stage/presentation timings. Overtime performance will incur point penalties.</li>
                <li>Decisions rendered by the official NIRMIT 2.0 evaluation jury panel are absolute, final, and non-negotiable.</li>
              </ul>
            </div>
          )}

          {/* TAB 5: LEADS & CONVENORS */}
          {activeTab === "coordinators" && (
            <div>
              <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.2rem", background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 60%, #94A3B8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "20px", letterSpacing: "0.04em", transform: "scaleY(1.15)", transformOrigin: "left center" }}>
                FACULTY CONVENORS & STUDENT LEADS
              </h2>
              
              {/* Faculty Convenors Section */}
              {eventData.facultyLeads && eventData.facultyLeads.length > 0 && (
                <div style={{ marginBottom: "32px" }}>
                  <h3 style={{ fontSize: "0.92rem", fontFamily: "var(--font-geist-mono), monospace", color: "#e2e8f0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    FACULTY INCHARGE & CONVENORS
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px" }}>
                    {eventData.facultyLeads.map((faculty, idx) => (
                      <div key={idx} style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "20px" }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>👨‍🏫</div>
                        <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "1.05rem" }}>{faculty}</div>
                        <div style={{ fontSize: "0.78rem", color: "#cbd5e1", marginTop: "4px", fontWeight: 600 }}>Faculty Convenor</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Student Leads Section */}
              {eventData.studentLeadsList && eventData.studentLeadsList.length > 0 && (
                <div>
                  <h3 style={{ fontSize: "0.92rem", fontFamily: "var(--font-geist-mono), monospace", color: "#e2e8f0", marginBottom: "14px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    STUDENT LEADS & COORDINATORS (FROM VOLUNTEER ROSTER)
                  </h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
                    {eventData.studentLeadsList.map((student, idx) => (
                      <div key={idx} style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.9) 100%)", border: "1px solid rgba(255,255,255,0.18)", borderLeft: "3px solid #cbd5e1", borderRadius: "8px", padding: "20px" }}>
                        <div style={{ fontSize: "1.5rem", marginBottom: "4px" }}>🎓</div>
                        <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "1.05rem" }}>{student.name}</div>
                        {student.streamBranch && (
                          <div style={{ fontSize: "0.82rem", color: "rgba(241,245,249,0.75)", marginTop: "2px" }}>
                            {student.streamBranch}
                          </div>
                        )}
                        {student.phone && (
                          <a href={`tel:${student.phone.replace(/[^0-9+]/g, '')}`} style={{ display: "inline-block", fontSize: "0.85rem", color: "#ffffff", marginTop: "6px", fontFamily: "var(--font-geist-mono), monospace", fontWeight: 700, textDecoration: "none" }}>
                            📞 {student.phone}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA Registration Banner */}
        <div style={{ background: "linear-gradient(135deg, rgba(30,41,59,0.85) 0%, rgba(15,23,42,0.95) 100%)", border: "1px solid rgba(255,255,255,0.25)", borderLeft: "4px solid #ffffff", borderRadius: "10px", padding: "36px", textAlign: "center", boxShadow: "0 10px 40px rgba(0,0,0,0.6)" }}>
          <h3 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.4rem", background: "linear-gradient(180deg, #FFFFFF 0%, #CBD5E1 60%, #94A3B8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", margin: "0 0 8px 0", letterSpacing: "0.04em", transform: "scaleY(1.15)", transformOrigin: "center" }}>
            READY TO CLAIM YOUR SLOT IN {eventData.name}?
          </h3>
          <p style={{ color: "rgba(241,245,249,0.85)", fontSize: "1rem", marginBottom: "24px" }}>
            Registration fee: {eventData.fee} • Total Prize Pool: {eventData.prizePool.total} • Venue: {eventData.venue}
          </p>
          <button
            onClick={() => openModal(eventData.id)}
            className="fast-assemble-btn"
            style={{ display: "inline-flex", margin: "0 auto", cursor: "pointer", border: "none" }}
          >
            REGISTRATION OPENS 5TH SEPT 🔒
          </button>
        </div>
      </div>

      <Footer />
    </main>
  );
}
