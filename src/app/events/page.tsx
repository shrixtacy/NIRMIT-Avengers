"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EventsDial from "../components/EventsDial";
import Footer from "../components/Footer";

import { useRegistrationModal } from "../components/RegistrationModal";
import { getRegistrationUrl } from "../data/registrationLinks";

interface StudentLeadDetail {
  name: string;
  streamBranch?: string;
  phone?: string;
}

interface TrumpEvent {
  id: string;
  name: string;
  tier: "gold" | "silver" | "bronze";
  frameImg: string;
  bgImg: string;
  tag: string;
  domain: string;
  description: string;
  formatSpec: string;
  points: string[];
  stages: { title: string; duration: string; desc: string }[];
  date: string;
  time: string;
  reporting: string;
  venue: string;
  teamCap: string;
  fee: string;
  prizeTotal: string;
  midEval: string;
  facultyLeads: string[];
  studentLeads: StudentLeadDetail[];
}

const trumpEvents: TrumpEvent[] = [
  {
    id: "falcon-strike",
    name: "Falcon Strike",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/events/falcon-bg.webp",
    tag: "FALCON STRIKE • DRONE OBSTACLE COURSE",
    domain: "Drone / Robotics",
    description: "High-speed FPV drone obstacle course navigation testing precision flight control, elevation maneuvers, tactical reaction time, and drone telemetry stability.",
    formatSpec: "Timed outdoor flight runs navigating through 8 illuminated hoop rings, elevation tunnels, and high-speed slalom pylons at Football Ground Arena.",
    points: [
      "Timed FPV drone obstacle course circuit.",
      "Pre-flight telemetry & battery safety audit.",
      "High-speed slalom pylons & hoop air finale.",
    ],
    stages: [
      { title: "Stage 1: Pre-Flight Audit & Calibration", duration: "07:30 AM - 08:30 AM", desc: "Mandatory telemetry audit, LiPo battery containment check, and RF channel lock." },
      { title: "Stage 2: Obstacle Hoop & Gate Timed Run", duration: "08:30 AM - 10:45 AM", desc: "Timed navigation through 8 illuminated hoop rings and elevation gates." },
      { title: "Stage 3: Championship Slalom & Air Finale", duration: "11:00 AM - 01:00 PM", desc: "Top qualified pilots contest high-speed slalom pylons for Air Master title." },
    ],
    date: "11 October 2026",
    time: "8:00 AM - 1:00 PM",
    reporting: "7:30 AM",
    venue: "Football Ground Arena",
    teamCap: "1 – 3 Members (Cap: 20 Teams)",
    fee: "₹500 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Santosh Sahu", "J. Binita", "Sanjay Ray"],
    studentLeads: [
      { name: "Partha Sarathi Nayak", streamBranch: "MBA 3rd Yr", phone: "+91 9692767042" },
      { name: "Adisakti Sahoo", streamBranch: "B.Tech CSE 3rd Yr", phone: "+91 6370656719" },
    ],
  },
  {
    id: "nextech",
    name: "Nextech 2.0",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/thanos-bg.webp",
    tag: "NEXTECH 2.0 • AGENTIC AI HACKATHON",
    domain: "Software / AI / Innovation",
    description: "Flagship 24-hour continuous build hackathon creating autonomous LLM agents, multi-agent orchestrators, regional language models, and accessibility tools.",
    formatSpec: "50 shortlisted teams gather in MBA Auditorium for 24-hr sprint. Day 1 In-Person Mid-Eval (30% weightage, 4-7 PM) eliminates bottom 50% teams before overnight sprint.",
    points: [
      "Build autonomous LLM agents & multi-agent systems.",
      "Mid evaluation checkpoint on Day 1 (4 PM – 7 PM).",
      "Main jury demo on Day 2 (10 AM – 3 PM).",
    ],
    stages: [
      { title: "Stage 1: Online Abstract & Architecture Selection", duration: "Prior to Event", desc: "PPT deck, system architecture diagram, and intro video screening." },
      { title: "Stage 2: Day 1 In-Person Mid-Evaluation Audit", duration: "04:00 PM - 07:00 PM (Day 1)", desc: "GitHub commit audit & prototype test; bottom 50% teams eliminated." },
      { title: "Stage 3: Overnight Sprint & CTO Jury Grand Pitch", duration: "10:00 AM - 03:00 PM (Day 2)", desc: "7-minute live product MVP demonstration & 5-minute CTO jury Q&A." },
    ],
    date: "14 – 15 October 2026",
    time: "Day 1 8:00 AM – Day 2 3:00 PM",
    reporting: "Day 1 7:30 AM",
    venue: "Auditorium, MBA Block",
    teamCap: "3 – 5 Members (Cap: 50 Teams)",
    fee: "₹500 / Team (Post-Selection)",
    prizeTotal: "₹45,000 (20K / 15K / 10K)",
    midEval: "YES (Online Pre-Selection + Day 1 In-Person Elimination)",
    facultyLeads: ["Pragyan Srichandan", "Sanjay Dash", "Maneesh Yadav", "SK Saffruddin"],
    studentLeads: [
      { name: "Shriyansh Dash", streamBranch: "B.Tech CSE 4th Yr", phone: "+91 8249673948" },
      { name: "Om Prakash Nahak", streamBranch: "B.Tech CSE 4th Yr", phone: "+91 7854930192" },
      { name: "Aman Singh", streamBranch: "B.Tech CSE 4th Yr", phone: "+91 9337482910" },
    ],
  },
  {
    id: "multiverse",
    name: "Multiverse of Ideas",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/multiverse-bg.webp",
    tag: "MULTIVERSE OF IDEAS • IDEATHON 2026",
    domain: "Innovation / Ideation",
    description: "Startup pitch deck competition for tech solutions, business models, UVP frameworks, and sustainable engineering innovations.",
    formatSpec: "Top 20 pre-selected teams deliver a 12-minute stage pitch (5-7 min presentation + 5 min jury Q&A) covering problem statement, tech architecture, and GTM model.",
    points: [
      "Startup pitch deck defense & business model.",
      "12-minute stage presentation & investor Q&A.",
      "Evaluated on tech feasibility & market strategy.",
    ],
    stages: [
      { title: "Stage 1: Online Abstract & Video Screening", duration: "Prior to Event", desc: "Pre-selection based on 10-slide deck, problem abstract, and founder intro video." },
      { title: "Stage 2: Media Console Load & Briefing", duration: "12:30 PM - 01:00 PM", desc: "Slide verification and sequence draw at media console desk." },
      { title: "Stage 3: Live Pitch Deck & Investor Q&A", duration: "01:00 PM - 05:00 PM", desc: "12-minute total stage allocation per team before investor jury." },
    ],
    date: "12 October 2026",
    time: "1:00 PM - 5:00 PM",
    reporting: "12:30 PM",
    venue: "Seminar Hall, MBA Block",
    teamCap: "2 – 5 Members (Cap: 20 Teams)",
    fee: "₹300 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "YES (Mandatory PPT + Abstract + Video in Form)",
    facultyLeads: ["Jaswant Patro", "J. Binita", "Santosh Sahu"],
    studentLeads: [
      { name: "Gayatri Rout", streamBranch: "B.Tech CSE 5th Sem", phone: "+91 9337088946" },
      { name: "Dhananjaya Sathpathy", streamBranch: "MBA 3rd Sem", phone: "+91 9114784837" },
    ],
  },
  {
    id: "ultron",
    name: "Project Ultron",
    tier: "gold",
    frameImg: "/cards/gold-card.webp",
    bgImg: "/ultron-bg.webp",
    tag: "PROJECT ULTRON • IOT EXHIBITION",
    domain: "IoT / Hardware Exhibition",
    description: "Exhibition showcasing connected microcontrollers, smart sensor networks, embedded automation, and real-world IoT hardware prototypes.",
    formatSpec: "Interactive booth displays in Electrical Block Hallway featuring working microcontrollers (ESP32/Arduino/RPi), sensors, and A1/A2 schematic posters.",
    points: [
      "IoT hardware booth exhibition & prototype display.",
      "Working microcontrollers & sensor automation.",
      "Rotational jury inspection & schematic evaluation.",
    ],
    stages: [
      { title: "Stage 1: Online Schematic & Video Selection", duration: "Prior to Event", desc: "Shortlisting based on PPT, circuit diagram, and working hardware video." },
      { title: "Stage 2: Booth Setup & Sensor Calibration", duration: "01:30 PM - 02:00 PM", desc: "Hardware assembly, power connections, poster mounting, and live sensor tests." },
      { title: "Stage 3: Rotational Jury Inspection & Demo", duration: "02:00 PM - 05:00 PM", desc: "Rotational judging panel audits hardware telemetry, schematic, and live utility." },
    ],
    date: "11 October 2026",
    time: "2:00 PM - 5:00 PM",
    reporting: "1:30 PM",
    venue: "Electrical Block Hallway",
    teamCap: "1 – 3 Members (Cap: 20 Teams)",
    fee: "₹300 / Participant",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "YES (Mandatory Schematic + Demo Video in Form)",
    facultyLeads: ["Jitendra Padhi", "Bhagyalaxmi Devi", "Pranaya Rout"],
    studentLeads: [
      { name: "Subhasree Panda", streamBranch: "B.Tech CSE 7th Sem", phone: "+91 9123987837" },
      { name: "Vaswati P. Mohanty", streamBranch: "B.Tech CSE 7th Sem", phone: "+91 7608911996" },
      { name: "Jaga Das", streamBranch: "BCA 4th Sem", phone: "+91 8984726731" },
    ],
  },
  {
    id: "civil-wars",
    name: "Civil Wars",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/civil-wars-bg.webp",
    tag: "CIVIL WARS • FREE FIRE GAMING",
    domain: "Gaming / Esports",
    description: "Competitive Free Fire mobile battle royale squad tournament hosted across custom room elimination brackets with live auditorium shoutcasting.",
    formatSpec: "24 participating squads split into Room A (12) & Room B (12). Top 3 from each room advance to Room C Grand Final live on the auditorium big screen.",
    points: [
      "Mobile Free Fire custom room battle royale squad elimination.",
      "Qualifiers split across custom elimination rooms.",
      "Grand Final Booyah showdown live on auditorium big screen.",
    ],
    stages: [
      { title: "Stage 1: Squad Check-In & Device Audit", duration: "02:15 PM - 02:45 PM", desc: "Player ID verification, mobile device check, Wi-Fi pairing, and room password distribution." },
      { title: "Stage 2: Qualifiers — Room A & Room B", duration: "03:00 PM - 04:15 PM", desc: "24 squads split in Room A & B; top 3 squads per room (6 total) qualify." },
      { title: "Stage 3: Grand Final — Room C Showdown", duration: "04:15 PM - 05:00 PM", desc: "Top 6 finalist squads clash live on auditorium big screen for Booyah trophy." },
    ],
    date: "13 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "2:15 PM",
    venue: "Auditorium, MBA Block",
    teamCap: "Squad (4 Players + 1 Sub)",
    fee: "₹400 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Rashmi Ranjan Rath", "Om Prakash Narayan Kar", "Prabir Das"],
    studentLeads: [
      { name: "Sukdev Suna", streamBranch: "B.Tech ECE 7th Sem", phone: "+91 8984941510" },
      { name: "Subham Sing", streamBranch: "B.Tech CSE 7th Sem", phone: "+91 6372920799" },
    ],
  },
  {
    id: "groove",
    name: "Guardians of Groove",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/groove-bg.webp",
    tag: "GUARDIANS OF GROOVE • TECHNO DANCE",
    domain: "Cultural / Dance",
    description: "High-octane group dance battle fusing futuristic robotics choreography, synth techno beats, laser sync lighting, and sci-fi aesthetic.",
    formatSpec: "Dance crews perform up to 10 minutes on main auditorium stage. Audio track (MP3) submitted 2 hrs prior. Judged on synchronization, theme, rhythm, and costume.",
    points: [
      "Techno group dance battle on MBA Auditorium stage.",
      "Solo & group choreography featuring sci-fi aesthetic.",
      "Judged on synchronization, rhythm, costume & concept.",
    ],
    stages: [
      { title: "Stage 1: Preview Audit & Audio Track Load", duration: "2 Hours Prior", desc: "Dance preview link check in form; MP3 track handed to sound console." },
      { title: "Stage 2: Green Room Prep & Sequence Draw", duration: "09:00 AM - 10:00 AM", desc: "Team check-in, costume changing, prop verification, and sequence draw." },
      { title: "Stage 3: Live Main Stage Performance", duration: "10:00 AM - 08:00 PM", desc: "Live 10-min stage performances before acclaimed dance choreographers." },
    ],
    date: "12 October 2026",
    time: "10:00 AM - 8:00 PM",
    reporting: "9:00 AM",
    venue: "Auditorium, MBA Block",
    teamCap: "5 – 10 Members (Cap: 15 Teams)",
    fee: "₹1,000 / Team",
    prizeTotal: "₹18,000 (10K / 5K / 3K)",
    midEval: "YES (Mandatory Video Preview Link in Form)",
    facultyLeads: ["Saroj Sir", "Sushree Sucharita Kar"],
    studentLeads: [
      { name: "Rachita Das", streamBranch: "B.Tech CSE 3rd Yr", phone: "+91 8984391077" },
      { name: "Subhranshu Sekhar Jena", streamBranch: "MBA 2nd Sem", phone: "+91 8093569907" },
    ],
  },
  {
    id: "quantumania",
    name: "Quantumania",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/quantumania-bg.webp",
    tag: "QUANTUMANIA • TECH QUIZ",
    domain: "CS & Science Quiz",
    description: "Multi-stage rapid-fire tech trivia battle testing knowledge on computing history, AI algorithms, IT titans, and emerging hardware.",
    formatSpec: "Stage 1: 25-question written/digital preliminary elimination test. Top 8 teams advance to Stage 2 Rapid-Fire and Stage 3 Electronic Buzzer Battle.",
    points: [
      "3-stage tech quiz & MCU Avengers trivia battle.",
      "Written preliminary test followed by rapid-fire round.",
      "Grand final electronic buzzer showdown for top teams.",
    ],
    stages: [
      { title: "Stage 1: Written MCQ Preliminary Test", duration: "10:00 AM - 10:30 AM", desc: "25-question preliminary elimination test for all 30 teams; top 8 advance." },
      { title: "Stage 2: Rapid-Fire Speed Round", duration: "10:35 AM - 11:15 AM", desc: "60-second rapid question bursts covering tech history & algorithms." },
      { title: "Stage 3: Grand Final Electronic Buzzer Battle", duration: "11:20 AM - 12:00 PM", desc: "Top 4 finalist teams clash on electronic buzzers for Quiz Master trophy." },
    ],
    date: "12 October 2026",
    time: "10:00 AM - 12:00 PM",
    reporting: "9:30 AM",
    venue: "Reading Room, Central Library",
    teamCap: "1 – 2 Members (Cap: 30 Teams)",
    fee: "₹200 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Chanchal Mukherjee", "Neeha Pradhani", "Sangram Behera"],
    studentLeads: [
      { name: "Dibyanshu Nayak", streamBranch: "B.Tech Mech 4th Sem", phone: "+91 7077188155" },
      { name: "Tapaswini Mishra", streamBranch: "B.Tech CSE 3rd Sem", phone: "+91 9861296488" },
      { name: "Prabhudutta Mohanty", streamBranch: "MBA", phone: "+91 8260948235" },
    ],
  },
  {
    id: "infinity-canvas",
    name: "Infinity Canvas",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/infinity-canvas-bg.webp",
    tag: "INFINITY CANVAS • PAINTING",
    domain: "Art & Cyber Creativity",
    description: "On-spot canvas painting competition where fine artists translate futuristic sci-fi visions, cyber themes, and Marvel concepts onto canvas.",
    formatSpec: "On-spot fine arts painting. Unannounced theme revealed live at 10 AM. Artists paint on official 16x24 canvas sheets during a 3-hour session.",
    points: [
      "Live canvas painting & digital art competition.",
      "Original artistic interpretation & visual composition.",
      "3-hour timed creative art marathon in Central Library.",
    ],
    stages: [
      { title: "Stage 1: Desk Allocation & Canvas Handout", duration: "09:30 AM - 10:00 AM", desc: "ID check, desk allocation, and handout of official 16x24 canvas sheets." },
      { title: "Stage 2: On-Spot Theme Reveal & 3-Hour Sprint", duration: "10:00 AM - 01:00 PM", desc: "Theme revealed live; artists paint non-stop without digital reference aids." },
      { title: "Stage 3: Gallery Easel Display & Jury Judging", duration: "01:00 PM - 01:30 PM", desc: "Artworks displayed on gallery easels for jury scoring on creativity & technique." },
    ],
    date: "11 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "9:30 AM",
    venue: "Reading Room, Central Library",
    teamCap: "Solo (1 Participant)",
    fee: "₹200 / Participant",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Madhubrata Dash", "Sambit Sethy", "Swarnaprava Sahoo"],
    studentLeads: [
      { name: "Sanjeevani Panda", streamBranch: "B.Tech CSE 3rd Yr", phone: "+91 9692196970" },
      { name: "Shyan", streamBranch: "Diploma CSE", phone: "+91 9337316813" },
    ],
  },
  {
    id: "face-painting",
    name: "Infinity Faces",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/infinity-faces-bg.webp",
    tag: "INFINITY FACES • FACE PAINTING",
    domain: "Art & Creativity",
    description: "Creative face painting competition depicting futuristic technology, cyber art, and Marvel superhero alter-egos on human canvases.",
    formatSpec: "Duo format (1 artist + 1 human canvas model). Theme revealed live on spot at 10:00 AM. 2-hour painting window using skin-safe organic paints.",
    points: [
      "Avengers tribal art & comic character face painting.",
      "Live 2-hour brush & detail artwork competition.",
      "Judged on artistic skill, detail & theme execution.",
    ],
    stages: [
      { title: "Stage 1: Model Registration & Desk Check-In", duration: "09:30 AM - 10:00 AM", desc: "Duo check-in, skin sensitivity safety audit, and desk assignment." },
      { title: "Stage 2: On-Spot Theme Reveal & 2-Hour Sprint", duration: "10:00 AM - 12:00 PM", desc: "Live theme reveal; 2-hour face painting execution on human canvas." },
      { title: "Stage 3: Model Ramp Walk & Jury Scoring", duration: "12:00 PM - 12:30 PM", desc: "Models present painted artwork on stage for jury scoring." },
    ],
    date: "13 October 2026",
    time: "10:00 AM - 12:00 PM",
    reporting: "9:30 AM",
    venue: "Conference Hall, Academic Block",
    teamCap: "Duo (1 Artist + 1 Model)",
    fee: "₹200 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Barsha Priyadarshini", "Gopabandhu Sahu", "Bhagyalaxmi Devi"],
    studentLeads: [
      { name: "Swati Pragnya Parida", streamBranch: "B.Tech Mech 5th Sem", phone: "+91 7008002456" },
      { name: "Subhransu Nayak", streamBranch: "B.Tech CSE 5th Sem", phone: "+91 8144696447" },
    ],
  },
  {
    id: "council-heroes",
    name: "Council of Heroes",
    tier: "bronze",
    frameImg: "/cards/bronze-card.webp",
    bgImg: "/council-heroes-bg.webp",
    tag: "COUNCIL OF HEROES • PANEL DISCUSSION",
    domain: "Discussion / Symposium",
    description: "Executive panel discussion featuring CTOs, tech founders, and senior engineers debating the future of AI, quantum computing, and tech careers.",
    formatSpec: "2-hour interactive keynote symposium in MBA Auditorium featuring guest industry leaders followed by open student audience Q&A.",
    points: [
      "Avengers cosplay & panel debate presentation.",
      "Character embodiment, dialogue & stage presence.",
      "Live audience & jury Q&A stage interaction.",
    ],
    stages: [
      { title: "Stage 1: Delegate Check-in & Keynote Address", duration: "02:30 PM - 03:15 PM", desc: "Seating, opening address by guest CTOs, and panelist intros." },
      { title: "Stage 2: Panel Debate & Future Tech Discussion", duration: "03:15 PM - 04:30 PM", desc: "Structured debate on AI agentic frameworks, quantum tech, and industry skills." },
      { title: "Stage 3: Open Student Q&A & Keynote Conclusion", duration: "04:30 PM - 05:00 PM", desc: "Interactive student Q&A session and panelist felicitation." },
    ],
    date: "11 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "2:30 PM",
    venue: "Auditorium, MBA Block",
    teamCap: "Open Delegate Entry",
    fee: "FREE",
    prizeTotal: "Keynote & Delegate Certification",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Kashinath Pati", "Sambit Sethi", "Barsha Priyadarshinee"],
    studentLeads: [
      { name: "Sagar Nayak", streamBranch: "BCA 4th Sem", phone: "+91 9337932696" },
      { name: "Sanjay Sahu", streamBranch: "MBA 2nd Sem", phone: "+91 7849018797" },
    ],
  },
  {
    id: "marvel-minds",
    name: "Marvel of Minds",
    tier: "bronze",
    frameImg: "/cards/bronze-card.webp",
    bgImg: "/marvel-minds-bg.webp",
    tag: "MARVEL OF MINDS • MASTERCLASS",
    domain: "Seminar / Masterclass",
    description: "In-depth masterclass and technical seminar delivered by industry domain experts covering Deep Tech, Quantum AI, and Robotics engineering.",
    formatSpec: "2-hour immersive masterclass with live code/architecture walkthroughs, industry career guidance, and interactive Q&A.",
    points: [
      "Tech trivia & engineering innovation quiz battle.",
      "Multi-stage tech elimination & logic puzzles.",
      "Testing core computing concepts & analytical speed.",
    ],
    stages: [
      { title: "Stage 1: Masterclass Welcome & Tech Intro", duration: "02:30 PM - 03:00 PM", desc: "Delegate seating, resource link sharing, and speaker introduction." },
      { title: "Stage 2: Deep Tech Architecture & Code Sprint", duration: "03:00 PM - 04:30 PM", desc: "Live walkthrough of AI agentic frameworks, quantum paradigms, and robotics." },
      { title: "Stage 3: Q&A & Masterclass Certification", duration: "04:30 PM - 05:00 PM", desc: "Interactive student Q&A session and certificate issuance." },
    ],
    date: "12 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "2:30 PM",
    venue: "Conference Hall, Academic Block",
    teamCap: "Open Delegate Entry",
    fee: "FREE",
    prizeTotal: "Masterclass Certificate of Completion",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Prajnadipta Sahu", "Bijaya Gouda", "Gopabandhu Sahu"],
    studentLeads: [
      { name: "Dibyajit Rout", streamBranch: "MBA 4th Sem", phone: "+91 8093795416" },
      { name: "Aditya Mohanty", streamBranch: "Diploma EE 3rd Yr", phone: "N/A" },
    ],
  },
  {
    id: "tech-poster",
    name: "Stark Expo",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/about-section-bg.webp",
    tag: "STARK EXPO • TECHNICAL POSTER",
    domain: "Branding & Designing",
    description: "Infographic technical poster exhibition where engineering students present research innovations, system block diagrams, and technical case studies.",
    formatSpec: "Exhibition stall display of A1/A2 infographic posters. Mandatory online pre-selection (poster draft + video explanation in form). On-site presentation to judges.",
    points: [
      "Technical poster display & engineering concept presentation.",
      "A1 poster layout with live stage defense.",
      "Judged on research depth, innovation & visual clarity.",
    ],
    stages: [
      { title: "Stage 1: Online Poster & Video Screening", duration: "Prior to Event", desc: "Shortlisting based on poster design PDF and 2-min explanation video." },
      { title: "Stage 2: Poster Mounting & Display Setup", duration: "08:00 AM - 09:00 AM", desc: "Reporting, poster board mounting, and desk check-in." },
      { title: "Stage 3: Rotational Jury Defense & Presentation", duration: "10:00 AM - 01:00 PM", desc: "Rotational judging panel audits infographic clarity, research depth, and Q&A." },
    ],
    date: "11 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Academic Block Hallway",
    teamCap: "1 – 3 Members (Cap: 20 Teams)",
    fee: "₹200 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "YES (Mandatory Poster PDF + Explanation Video in Form)",
    facultyLeads: ["Ankeeta Mohanty", "Priyabrata Muduli"],
    studentLeads: [
      { name: "Ankeeta Mohanty", streamBranch: "B.Tech CSE 3rd Yr", phone: "+91 9827869350" },
      { name: "Priyabrata Muduli", streamBranch: "MBA 2nd Sem", phone: "+91 9019125127" },
    ],
  },
  {
    id: "ad-mad",
    name: "Thunderbolts",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/thunderbolts-bg.webp",
    tag: "THUNDERBOLTS • AD MAD SHOW",
    domain: "Branding & Dramatics",
    description: "Quirky advertising competition where teams receive a futuristic product topic unexpectedly, get a short preparation window, and perform a live ad on stage.",
    formatSpec: "On-spot product/topic reveal. Teams get a 15-minute preparation burst followed by a 5-minute live humorous stage ad performance.",
    points: [
      "Creative product advertisement & spoof acting show.",
      "On-stage team performance & humorous script delivery.",
      "Evaluated on originality, brand messaging & audience impact.",
    ],
    stages: [
      { title: "Stage 1: Topic Handout & Secret Box Draw", duration: "01:00 PM - 02:00 PM", desc: "Reporting, team briefing, and random product topic draw." },
      { title: "Stage 2: 15-Minute Closed Prep Burst", duration: "02:00 PM - 02:30 PM", desc: "15-min closed-door brainstorming, script writing, and prop prep." },
      { title: "Stage 3: Live Stage Ad Performance & Pitch", duration: "03:00 PM - 05:00 PM", desc: "5-minute live stage performance before jury panel and audience." },
    ],
    date: "11 October 2026",
    time: "3:00 PM - 5:00 PM",
    reporting: "1:00 PM - 2:00 PM",
    venue: "Seminar Hall, MBA Block",
    teamCap: "Trio (3 Members per Team)",
    fee: "₹500 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Subhasmita Mam", "Nilima Mam"],
    studentLeads: [
      { name: "Asutosh Ranjan Sethy", streamBranch: "MBA", phone: "+91 6372955246" },
    ],
  },
  {
    id: "marketing-showdown",
    name: "Battle of Brands",
    tier: "silver",
    frameImg: "/cards/silver-card.webp",
    bgImg: "/battle-of-brands-bg.webp",
    tag: "BATTLE OF BRANDS • MARKETING PITCH",
    domain: "Marketing & Business",
    description: "Corporate business case pitch and go-to-market strategy challenge testing brand positioning, customer acquisition, pricing, and campaign planning.",
    formatSpec: "Shortlisted teams deliver a 10-minute corporate pitch presentation covering brand strategy, customer segmentation, GTM channels, and ROI before executive judges.",
    points: [
      "Case study strategy & brand marketing battle.",
      "Market positioning & campaign pitch presentation.",
      "Judged on GTM execution & strategic innovation.",
    ],
    stages: [
      { title: "Stage 1: Online Marketing Plan Screening", duration: "Prior to Event", desc: "Shortlisting based on marketing slide deck and case abstract." },
      { title: "Stage 2: Pitch Deck Load & Briefing", duration: "09:00 AM - 10:00 AM", desc: "Presentation slide verification at console and sequence draw." },
      { title: "Stage 3: Live Corporate Pitch & Jury Q&A", duration: "10:00 AM - 01:00 PM", desc: "10-minute live presentation followed by executive jury Q&A." },
    ],
    date: "13 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "9:00 AM - 10:00 AM",
    venue: "Conference Hall, Academic Block",
    teamCap: "2 – 4 Members (Cap: 20 Teams)",
    fee: "₹500 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "YES (Mandatory Marketing PPT + Abstract in Form)",
    facultyLeads: ["Nitin Sir", "Subhasmita Mam"],
    studentLeads: [
      { name: "Ritu Pragyan Priyadarshini", streamBranch: "MBA 3rd Sem", phone: "+91 9692727534" },
      { name: "Debjit Malick", streamBranch: "B.Tech CSE 5th Sem", phone: "+91 8658736591" },
    ],
  },
  {
    id: "cxo-summit",
    name: "Shield Boardroom",
    tier: "bronze",
    frameImg: "/cards/bronze-card.webp",
    bgImg: "/shield-boardroom-bg.webp",
    tag: "SHIELD BOARDROOM • CXO SUMMIT",
    domain: "Business & Strategy",
    description: "Strategic C-suite simulation where team members adopt executive roles (CEO, CTO, CMO, CFO, COO) to analyze corporate crisis cases and pitch growth strategy.",
    formatSpec: "Each team assigns distinct C-suite roles. 15 minutes closed-door case analysis followed by a 5-minute live executive presentation where EVERY member speaks for their domain.",
    points: [
      "Corporate leadership & executive round table.",
      "Strategic crisis resolution & executive simulation.",
      "Evaluated on leadership, strategy & vision.",
    ],
    stages: [
      { title: "Stage 1: Executive Role Assignment & Briefing", duration: "08:00 AM - 09:00 AM", desc: "Team check-in, role confirmation (CEO/CTO/CMO/CFO), and case brief release." },
      { title: "Stage 2: 15-Minute Closed Boardroom Analysis", duration: "10:00 AM - 10:30 AM", desc: "15 mins closed prep to formulate turnaround strategy; no external communication." },
      { title: "Stage 3: 5-Minute Executive Board Pitch", duration: "10:30 AM - 01:00 PM", desc: "5-min pitch where every executive member speaks for their domain followed by jury Q&A." },
    ],
    date: "12 October 2026",
    time: "10:00 AM - 1:00 PM",
    reporting: "8:00 AM - 9:00 AM",
    venue: "Seminar Hall, MBA Block",
    teamCap: "4 – 5 Executive Members",
    fee: "₹500 / Team",
    prizeTotal: "₹10,000 (5K / 3K / 2K)",
    midEval: "NO Online Mid-Evaluation",
    facultyLeads: ["Akankhya Mam"],
    studentLeads: [
      { name: "Tushar Dhal", streamBranch: "MBA 4th Sem", phone: "+91 9078634571" },
    ],
  },
];

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "gold" | "silver" | "bronze">("all");
  const [selectedEvent, setSelectedEvent] = useState<TrumpEvent | null>(null);
  const [modalTab, setModalTab] = useState<"overview" | "stages" | "leads">("overview");
  const { openModal } = useRegistrationModal();

  const filteredEvents = filter === "all"
    ? trumpEvents
    : trumpEvents.filter((ev) => ev.tier === filter);

  return (
    <main style={{ minHeight: "100vh", background: "#040507", color: "#ffffff" }}>
      {/* Interactive Events Dial Hero Section from Home Page */}
      <EventsDial />

      {/* Events Trump Cards Section */}
      <section className="section-container" style={{ padding: "80px 0 120px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <div style={{ display: "inline-block", background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(148,163,184,0.1) 100%)", border: "1px solid rgba(255,255,255,0.25)", padding: "6px 20px", borderRadius: "999px", marginBottom: "16px" }}>
            <span style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.82rem", fontWeight: 700, color: "#ffffff", letterSpacing: "0.12em" }}>
              FESTIVAL DATES: 11 - 15 OCTOBER 2026
            </span>
          </div>

          <h2 className="section-title" style={{ display: "block" }}>MARVEL TRUMP CARDS ARENA</h2>
          <p className="section-subtitle" style={{ margin: "16px auto 0 auto", maxWidth: "800px" }}>
            Categorized into Gold, Silver, and Bronze Tiers. Click any Trump Card for full event parameters, round breakdowns, student lead contacts & registration protocols.
          </p>

          {/* Filter Pills */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "32px", flexWrap: "wrap" }}>
            {(["all", "gold", "silver", "bronze"] as const).map((tierKey) => (
              <button
                key={tierKey}
                onClick={() => setFilter(tierKey)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "999px",
                  border: filter === tierKey ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.2)",
                  background: filter === tierKey ? "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(148,163,184,0.2) 100%)" : "rgba(15,23,42,0.6)",
                  color: filter === tierKey ? "#ffffff" : "rgba(241,245,249,0.7)",
                  fontFamily: "var(--font-geist-mono), monospace",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  textTransform: "uppercase",
                  transition: "all 0.3s ease",
                  boxShadow: filter === tierKey ? "0 0 20px rgba(255,255,255,0.2)" : "none",
                }}
              >
                {tierKey === "all" ? `All Trump Cards (${trumpEvents.length})` : `${tierKey} Tier (${trumpEvents.filter(e => e.tier === tierKey).length})`}
              </button>
            ))}
          </div>
        </div>

        {/* Marvel Trump Cards Grid */}
        <div className="events-trump-grid">
          {filteredEvents.map((ev) => (
            <Link
              key={ev.id}
              href={`/events/${ev.id}`}
              className="trump-card-wrapper"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              {/* Outer Card Frame PNG Overlay */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ev.frameImg}
                alt={`${ev.name} Trump Frame`}
                className="trump-card-frame"
              />

              {/* Internal Card Contents */}
              <div className="trump-card-content">
                {/* Upper 16:9 Image Slot */}
                <div className="trump-card-img-slot">
                  <Image
                    src={ev.bgImg}
                    alt={ev.name}
                    fill
                    unoptimized
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>

                {/* Bottom Content Area */}
                <div className="trump-card-body">
                  <div>
                    <div className="trump-card-tag">{ev.tag}</div>
                    <h3 className="trump-card-title">{ev.name}</h3>
                    <ul style={{ paddingLeft: "14px", margin: "6px 0 0 0", fontSize: "0.74rem", color: "rgba(241,245,249,0.88)", lineHeight: "1.38" }}>
                      {ev.points.map((pt, idx) => (
                        <li key={idx} style={{ marginBottom: "3px" }}>{pt}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Extreme Bottom Dates Slot */}
                  <div className="trump-card-footer">
                    <div className="trump-card-date">{ev.date}</div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trump Card Details Modal */}
      {selectedEvent && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "rgba(4,5,7,0.88)",
            backdropFilter: "blur(16px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={() => setSelectedEvent(null)}
        >
          <div
            style={{
              position: "relative",
              maxWidth: "720px",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              background: "linear-gradient(135deg, rgba(30,41,59,0.95) 0%, rgba(15,23,42,0.98) 100%)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "16px",
              padding: "36px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.9), 0 0 30px rgba(255,255,255,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ✕
            </button>

            <div style={{ fontFamily: "var(--font-geist-mono), monospace", fontSize: "0.8rem", color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "6px" }}>
              {selectedEvent.tier.toUpperCase()} TIER EVENT • {selectedEvent.domain}
            </div>

            <h2 style={{ fontFamily: "var(--font-bebas-neue), sans-serif", fontSize: "2.8rem", letterSpacing: "0.04em", color: "#ffffff", margin: "0 0 16px 0" }}>
              {selectedEvent.name}
            </h2>

            {/* Quick Specs Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", background: "rgba(15,23,42,0.6)", padding: "16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "20px" }}>
              <div>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", display: "block" }}>DATE & TIME</span>
                <strong style={{ fontSize: "0.88rem", color: "#ffffff" }}>{selectedEvent.date} ({selectedEvent.time})</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", display: "block" }}>REPORTING TIME</span>
                <strong style={{ fontSize: "0.88rem", color: "#ffffff" }}>{selectedEvent.reporting}</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", display: "block" }}>OFFICIAL VENUE</span>
                <strong style={{ fontSize: "0.88rem", color: "#ffffff" }}>{selectedEvent.venue}</strong>
              </div>
              <div>
                <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.5)", display: "block" }}>FEE & PRIZE POOL</span>
                <strong style={{ fontSize: "0.88rem", color: "#ffffff" }}>{selectedEvent.fee} • {selectedEvent.prizeTotal}</strong>
              </div>
            </div>

            {/* Sub-Tabs Navigation in Modal */}
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "12px" }}>
              {[
                { id: "overview", label: "OVERVIEW & SPECS" },
                { id: "stages", label: "ROUND FORMAT & STAGES" },
                { id: "leads", label: "TEACHER INCHARGE & LEADS" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setModalTab(t.id as typeof modalTab)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "6px",
                    border: modalTab === t.id ? "1.5px solid #ffffff" : "1px solid rgba(255,255,255,0.15)",
                    background: modalTab === t.id ? "rgba(255,255,255,0.12)" : "transparent",
                    color: modalTab === t.id ? "#ffffff" : "rgba(241,245,249,0.7)",
                    fontSize: "0.8rem",
                    fontFamily: "var(--font-geist-mono), monospace",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Modal Content Panels */}
            {modalTab === "overview" && (
              <div>
                <p style={{ fontSize: "0.92rem", color: "rgba(241,245,249,0.9)", lineHeight: "1.6", marginBottom: "16px" }}>
                  {selectedEvent.description}
                </p>
                <div style={{ background: "rgba(255,255,255,0.05)", borderLeft: "3px solid #cbd5e1", padding: "12px", borderRadius: "0 6px 6px 0", marginBottom: "16px", fontSize: "0.88rem", color: "rgba(241,245,249,0.9)" }}>
                  🎯 <strong>In-Person Format Specification:</strong> {selectedEvent.formatSpec}
                </div>
                <h4 style={{ color: "#ffffff", fontSize: "0.9rem", marginBottom: "8px" }}>Key Event Points & Directives:</h4>
                <ul style={{ paddingLeft: "20px", color: "rgba(241,245,249,0.85)", fontSize: "0.85rem", lineHeight: "1.6", marginBottom: "20px" }}>
                  {selectedEvent.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            )}

            {modalTab === "stages" && (
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                {selectedEvent.stages.map((st, idx) => (
                  <div key={idx} style={{ background: "rgba(15,23,42,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderLeft: "3px solid #cbd5e1", padding: "14px", borderRadius: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <strong style={{ fontSize: "0.9rem", color: "#ffffff" }}>{st.title}</strong>
                      <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "#cbd5e1" }}>{st.duration}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "rgba(241,245,249,0.85)", lineHeight: "1.5" }}>{st.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {modalTab === "leads" && (
              <div style={{ marginBottom: "20px" }}>
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                    FACULTY INCHARGE & CONVENORS
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {selectedEvent.facultyLeads.map((fLead, idx) => (
                      <span key={idx} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px 12px", borderRadius: "6px", fontSize: "0.85rem", color: "#ffffff" }}>
                        👔 {fLead}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-geist-mono), monospace", color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
                    STUDENT LEADS & CONTACT NUMBERS
                  </span>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px" }}>
                    {selectedEvent.studentLeads.map((sLead, idx) => (
                      <div key={idx} style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.2)", padding: "12px", borderRadius: "8px" }}>
                        <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.88rem" }}>{sLead.name}</div>
                        {sLead.streamBranch && <div style={{ fontSize: "0.75rem", color: "rgba(241,245,249,0.6)", marginTop: "2px" }}>{sLead.streamBranch}</div>}
                        {sLead.phone && (
                          <a href={`tel:${sLead.phone.replace(/[^0-9+]/g, '')}`} style={{ display: "inline-block", marginTop: "6px", fontSize: "0.8rem", color: "#ffffff", textDecoration: "none", fontWeight: 700 }}>
                            📞 {sLead.phone}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <Link
                href={`/events/${selectedEvent.id}`}
                className="fast-assemble-btn"
                style={{ flex: 1, justifyContent: "center", background: "transparent", border: "1px solid rgba(255,255,255,0.3)", color: "#ffffff", textDecoration: "none" }}
              >
                OPEN DEDICATED EVENT PAGE →
              </Link>
              <button
                onClick={() => openModal(selectedEvent.id)}
                className="fast-assemble-btn"
                style={{ flex: 1, justifyContent: "center", cursor: "pointer", border: "none" }}
              >
                REGISTRATION OPENS 5TH SEPT 🔒
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
