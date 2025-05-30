import Dashboard from "@/components/dashboard/Dashboard";
import { DashboardLinkTypes, Event, NavLink, Speaker, Tab } from "./types";
import Speakers from "@/components/dashboard/Speakers";
import LocMembers from "@/components/dashboard/LocMembers";
import EventSchedule from "@/components/dashboard/EventSchedule";
import Profile from "@/components/dashboard/Profile";
import Subscribers from "@/components/dashboard/Subscribers";

export const speakers: Speaker[] = [
  {
    id: "1",
    name: "Dr. Tunde Adebayo",
    images: ["/speakers/speaker_1.jpg", "/speakers/speaker_2.jpg"],
    dob: "1972-03-14",
    profession: "Consultant Cardiologist",
    mobile: "+2348012345678",
    address: "12 Unity Crescent, Lekki, Lagos",
    biography:
      "Dr. Tunde Adebayo is a seasoned Consultant Cardiologist with over two decades of experience in diagnosing and managing complex cardiovascular diseases. He is a graduate of the University of Ibadan and completed his fellowship in the UK. Known for his pioneering work in minimally invasive cardiac surgery in Nigeria, Dr. Adebayo has trained numerous cardiology fellows and regularly conducts outreach programs in underserved communities. He is also the founder of the Heart4All Foundation, which provides subsidized heart care to low-income patients.",
    gender: "Male",
    nationality: "Nigerian",
    affiliation: "Lagos University Teaching Hospital",
    hobbies: ["Golf", "Reading biographies"],
  },
  {
    id: " 2",
    name: "Prof. Amina Musa",
    images: ["/speakers/speaker_2.jpg", "/speakers/speaker_3.jpg"],
    dob: "1968-09-29",
    profession: "Professor of Public Health",
    mobile: "+2348076543210",
    address: "Plot 5, Independence Layout, Enugu",
    biography:
      "Prof. Amina Musa is a globally recognized public health expert and epidemiologist with over 30 years of experience in public health policy, disease surveillance, and health systems strengthening. She holds a PhD in Epidemiology from Johns Hopkins University and has worked with the WHO, UNICEF, and various African governments on disease prevention programs. During the Ebola crisis, she coordinated Nigeria's rapid response strategy, which was praised internationally. She has authored over 80 scientific publications and continues to mentor the next generation of public health professionals.",
    gender: "Female",
    nationality: "Nigerian",
    affiliation: "University of Nigeria, Nsukka",
    hobbies: ["Gardening", "Volunteering in rural health camps"],
  },
  {
    id: "3",
    name: "Dr. Emeka Okonkwo",
    images: ["/speakers/speaker_5.jpg", "/speakers/speaker_6.jpg"],
    dob: "1980-06-22",
    profession: "Neurosurgeon",
    mobile: "+2348098765432",
    address: "23 Ibusa Road, Asaba, Delta State",
    biography:
      "Dr. Emeka Okonkwo is a leading neurosurgeon with a strong reputation for handling high-risk brain and spinal surgeries in Nigeria. Trained in South Africa and Germany, he returned home to develop neurosurgical services in underserved regions. Dr. Okonkwo has performed over 1,000 successful brain surgeries and established the BrainTrust Initiative, a non-profit that supports children with congenital neurological disorders. He is passionate about education and frequently speaks at medical conferences, advocating for better neurosurgical training in West Africa.",
    gender: "Male",
    nationality: "Nigerian",
    affiliation: "Federal Medical Centre, Asaba",
    hobbies: ["Classical music", "Sketching anatomy"],
  },
  {
    id: "4",
    name: "Dr. Adesuwa Omoregbe",
    images: ["/speakers/speaker_7.jpg", "/speakers/speaker_8.jpg"],
    dob: "1985-11-17",
    profession: "Consultant Paediatrician",
    mobile: "+2348082233445",
    address: "9 Osasogie Street, GRA, Benin City",
    biography:
      "Dr. Adesuwa Omoregbe is a Consultant Paediatrician with a focus on child nutrition and preventive care. She has worked in both urban and rural health facilities, providing holistic care to thousands of children. Dr. Omoregbe initiated the 'Bright Kids' campaign to reduce child malnutrition in Edo State, which has seen impressive results. Her research on childhood immunization has informed local health policies, and she runs parenting workshops to help new mothers and fathers navigate child health challenges.",
    gender: "Female",
    nationality: "Nigerian",
    affiliation: "UBTH, Benin City",
    hobbies: ["Cooking", "Children’s book writing"],
  },
  {
    id: "5",
    name: "Dr. Segun Adeyemi",
    images: ["/speakers/speaker_9.jpg", "/speakers/speaker_10.jpg"],
    dob: "1976-01-04",
    profession: "Orthopaedic Surgeon",
    mobile: "+2348029876543",
    address: "31 Freedom Avenue, Ibadan",
    biography:
      "Dr. Segun Adeyemi is a prominent orthopaedic surgeon specializing in trauma and joint replacement surgeries. With over 18 years of experience, he has restored mobility to thousands of patients and pioneered advanced bone grafting techniques. He regularly volunteers on surgical missions in conflict zones and remote areas, offering free procedures to accident victims. He lectures medical students and is a strong advocate for local manufacturing of orthopaedic implants in Africa.",
    gender: "Male",
    nationality: "Nigerian",
    affiliation: "UCH, Ibadan",
    hobbies: ["Cycling", "Medical innovation"],
  },
  {
    id: "6",
    name: "Dr. Zainab Bako",
    images: ["/speakers/speaker_1.jpg", "/speakers/speaker_2.jpg"],
    dob: "1982-04-08",
    profession: "Consultant Dermatologist",
    mobile: "+2348095566778",
    address: "7 Crescent Drive, Wuse II, Abuja",
    biography:
      "Dr. Zainab Bako is a Consultant Dermatologist and skincare advocate known for her work in tropical dermatology and cosmetic skin treatments. She runs a popular dermatology clinic in Abuja and uses social media to educate Nigerians on skin health. Her 'Glow Naturally' project promotes safe skincare practices and combats dangerous skin bleaching habits. She speaks regularly at health and beauty conferences across Africa and was recently featured in Forbes Africa's 'Top 50 Health Voices'.",
    gender: "Female",
    nationality: "Nigerian",
    affiliation: "National Hospital, Abuja",
    hobbies: ["Photography", "Podcasting"],
  },
  {
    id: "7",
    name: "Dr. Femi Johnson",
    images: ["/speakers/speaker_3.jpg", "/speakers/speaker_4.jpg"],
    dob: "1979-12-01",
    profession: "Psychiatrist & Mental Health Advocate",
    mobile: "+2348034455667",
    address: "2A Adeola Odeku, Victoria Island, Lagos",
    biography:
      "Dr. Femi Johnson is a renowned psychiatrist and mental health advocate. With more than 15 years of experience, he specializes in youth mental health and addiction recovery. He founded MindMatters, an NGO focused on promoting mental wellness through school clubs, community dialogues, and digital therapy. He is often invited to speak on national TV and radio about mental health policy. Dr. Johnson’s work has significantly contributed to reducing stigma and increasing mental health service uptake in Nigeria.",
    gender: "Male",
    nationality: "Nigerian",
    affiliation: "PsychNG Clinic, Lagos",
    hobbies: ["Spoken word", "Urban farming"],
  },
  {
    id: "8",
    name: "Dr. Ifeoma Nwachukwu",
    images: ["/speakers/speaker_5.jpg", "/speakers/speaker_6.jpg"],
    dob: "1988-07-15",
    profession: "Obstetrician & Gynaecologist",
    mobile: "+2348078899000",
    address: "10 Olumide Lane, Onitsha, Anambra State",
    biography:
      "Dr. Ifeoma Nwachukwu is an Obstetrician and Gynaecologist with a passion for maternal and neonatal care. She has managed thousands of safe deliveries and is an expert in high-risk pregnancies. Dr. Nwachukwu is the co-founder of 'Safe Mother, Safe Baby,' an NGO that trains traditional birth attendants and equips rural clinics. Her voice is widely respected in women's health circles, and she has published impactful research on maternal mortality reduction strategies in West Africa.",
    gender: "Female",
    nationality: "Nigerian",
    affiliation: "NAUTH, Nnewi",
    hobbies: ["Singing", "Mentoring medical students"],
  },
  {
    id: "9",
    name: "Dr. Ibrahim Danladi",
    images: ["/speakers/speaker_7.jpg", "/speakers/speaker_8.jpg"],
    dob: "1983-10-09",
    profession: "Emergency Medicine Specialist",
    mobile: "+2348066677889",
    address: "Block B, Garki Hospital Staff Quarters, Abuja",
    biography:
      "Dr. Ibrahim Danladi is an emergency physician with deep expertise in disaster medicine and first response systems. He has been instrumental in training emergency teams across Nigeria and establishing mobile trauma units in high-risk areas. He has led responses during natural disasters and major road accidents, saving hundreds of lives. A certified Red Cross trainer, Dr. Danladi also speaks internationally on emergency preparedness in resource-constrained environments.",
    gender: "Male",
    nationality: "Nigerian",
    affiliation: "Garki General Hospital, Abuja",
    hobbies: ["Rescue simulation games", "Blogging"],
  },
  // {
  //   id: "10",
  //   name: "Prof. Clara Edet",
  //   images: ["/speakers/speaker_9.jpg", "/speakers/speaker_10.jpg"],
  //   dob: "1965-05-20",
  //   profession: "Professor of Pathology",
  //   mobile: "+2348023456789",
  //   address: "15 Medical School Road, Calabar",
  //   biography:
  //     "Prof. Clara Edet is a veteran pathologist with more than 30 years of academic and diagnostic experience. She is a pioneer in infectious disease pathology and her research contributed significantly to understanding Lassa Fever transmission. Prof. Edet has trained hundreds of pathologists and holds several fellowships, including one from the Royal College of Pathologists, UK. She chairs the National Medical Research Council and serves on several international advisory boards.",
  //   gender: "Female",
  //   nationality: "Nigerian",
  //   affiliation: "University of Calabar",
  //   hobbies: ["Bird watching", "Historical research"],
  // },
];

export const tabs: Tab[] = [
  {
    id: 1,
    day: "day 1",
    date: "26 august 2026",
  },
  {
    id: 2,
    day: "day 2",
    date: "27 august 2026",
  },
  {
    id: 3,
    day: "day 3",
    date: "28 august 2026",
  },
  {
    id: 4,
    day: "day 4",
    date: "29 august 2026",
  },
];

export const navLinks: NavLink[] = [
  {
    id: 1,
    link: "schedule",
  },
  {
    id: 2,
    link: "speakers",
  },
  {
    id: 3,
    link: "contact us",
  },
  {
    id: 4,
    link: "subscribe",
  },
];

export const eventSchedule: Event[] = [
  {
    id: 1,
    title: "Opening Session: The Christian Doctor’s Mandate",
    date: "2025-07-01",
    time: "09:00 AM",
    description:
      "This session opens the conference with a heartfelt call to remember the spiritual foundation of the medical profession. Participants will be reminded that healing goes beyond prescriptions—it is a ministry of compassion and purpose. Dr. Grace Nwankwo will explore how Christian doctors can integrate faith into their work without compromising excellence. She'll share personal stories from the field and scriptures that anchor her calling.",
    speakers: {
      id: "1",
      name: "Dr. Grace Nwankwo",
      profession: "Public Health Physician",
      images: ["/speakers/speaker_1.jpg", "/speakers/speaker_2.jpg"],
    },
    day: "day 1",
    picture:
      "https://images.pexels.com/photos/8460154/pexels-photo-8460154.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Medical Ethics and Christian Values",
    date: "2025-07-01",
    time: "11:00 AM",
    description:
      "As medicine continues to evolve, Christian professionals must be grounded in unwavering moral values. This session explores current ethical dilemmas—such as end-of-life decisions, abortion, and confidentiality—through the lens of biblical truth. Dr. Samuel Odion brings years of bioethical practice into sharp focus, blending theology with healthcare realities. Attendees will leave equipped to stand firm when faith and medicine intersect.",
    speakers: {
      id: "2",
      name: "Dr. Samuel Odion",
      profession: "Bioethicist",
      images: ["/speakers/speaker_3.jpg", "/speakers/speaker_4.jpg"],
    },
    day: "day 1",
    picture:
      "https://images.pexels.com/photos/8460030/pexels-photo-8460030.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Medical Missions: Reaching the Unreached",
    date: "2025-07-02",
    time: "10:00 AM",
    description:
      "The gospel and healthcare go hand in hand in rural and underserved communities. This session focuses on practical ways doctors and students can get involved in medical missions locally and globally. Dr. Chinyere Ogbu shares stories from her work in Northern Nigeria, where medicine has opened hearts to Christ. This session includes insights on funding, preparation, and long-term sustainability of mission projects.",
    speakers: {
      id: "3",
      name: "Dr. Chinyere Ogbu",
      profession: "Missionary Doctor",
      images: ["/speakers/speaker_5.jpg", "/speakers/speaker_6.jpg"],
    },
    day: "day 2",
    picture:
      "https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "Faith in the Midst of Medical Training",
    date: "2025-07-02",
    time: "01:00 PM",
    description:
      "Being a Christian student in a demanding academic environment is a battle of focus, discipline, and faith. Dr. Paul Abiola shares his own struggles through medical school and how he overcame burnout, fear, and spiritual dryness. This session will offer strategies to maintain devotion, manage time effectively, and cultivate a God-centered mindset throughout your journey. It’s a lifeline for any student feeling overwhelmed or spiritually dry.",
    speakers: {
      id: "4",
      name: "Dr. Paul Abiola",
      profession: "Consultant Surgeon",
      images: ["/speakers/speaker_7.jpg", "/speakers/speaker_8.jpg"],
    },
    day: "day 2",
    picture:
      "https://images.pexels.com/photos/7580258/pexels-photo-7580258.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Burnout in Healthcare: A Christian Response",
    date: "2025-07-03",
    time: "09:30 AM",
    description:
      "Burnout among healthcare workers is at an all-time high, but God offers rest and renewal even in demanding seasons. Dr. Esther Idowu unpacks the signs of emotional, spiritual, and physical fatigue. Attendees will learn coping mechanisms rooted in Scripture, Sabbath principles, and fellowship. This session promises both comfort and tools for long-term resilience in your career and spiritual walk.",
    speakers: {
      id: "5",
      name: "Dr. Esther Idowu",
      profession: "Clinical Psychologist",
      images: ["/speakers/speaker_9.jpg", "/speakers/speaker_10.jpg"],
    },
    day: "day 3",
    picture:
      "https://images.pexels.com/photos/8460120/pexels-photo-8460120.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 6,
    title: "Medical Leadership and Christian Integrity",
    date: "2025-07-03",
    time: "12:00 PM",
    description:
      "Leadership in the medical field comes with influence—and temptations. Dr. Emmanuel Iroegbu speaks on how to lead teams, clinics, and departments with godly character and integrity. This session will guide aspiring leaders to stand for truth, justice, and service while refusing compromise. Expect wisdom for dealing with power, politics, and peer pressure in health institutions.",
    speakers: {
      id: "6",
      name: "Dr. Emmanuel Iroegbu",
      profession: "Health Administrator",
      images: ["/speakers/speaker_1.jpg", "/speakers/speaker_2.jpg"],
    },
    day: "day 3",
    picture:
      "https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 7,
    title: "CMDA Vision Night",
    date: "2025-07-04",
    time: "06:00 PM",
    description:
      "The CMDA vision night is a prophetic, prayerful gathering for future healthcare revivalists. With worship, the Word, and a charge to impact nations, this closing session leaves no heart untouched. Dr. Blessing Odiase leads with stories of transformation and a reminder that medicine is a God-given platform for kingdom influence. Come ready to be filled and fired up for your next season.",
    speakers: {
      id: "7",
      name: "Dr. Blessing Odiase",
      profession: "CMDA Zonal Coordinator",
      images: ["/speakers/speaker_3.jpg", "/speakers/speaker_4.jpg"],
    },
    day: "day 4",
    picture:
      "https://images.pexels.com/photos/8460116/pexels-photo-8460116.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 8,
    title: "Christian Healthcare in a Secular World",
    date: "2025-07-04",
    time: "10:00 AM",
    description:
      "How can Christian values shine in secular hospitals and global health institutions? Dr. Tobi Ajayi shares real-world experiences of faith under pressure in international hospitals. This session equips believers with courage to speak up, live boldly, and remain unashamed in professional spaces that often reject biblical truth. Expect apologetics, workplace strategies, and encouragement for spiritual stamina.",
    speakers: {
      id: "8",
      name: "Dr. Tobi Ajayi",
      profession: "Internal Medicine Specialist",
      images: ["/speakers/speaker_5.jpg", "/speakers/speaker_6.jpg"],
    },
    day: "day 4",
    picture:
      "https://images.pexels.com/photos/8460062/pexels-photo-8460062.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 9,
    title: "The Role of Prayer in Patient Care",
    date: "2025-07-05",
    time: "09:00 AM",
    description:
      "Can prayer make a clinical difference? Dr. Deborah Fola shares research-backed and personal stories on the power of intercession in medicine. From praying silently over patients to building a prayer culture in hospital teams, this session will open your heart to the supernatural dimension of healing. Come learn how to intercede in love, faith, and confidentiality.",
    speakers: {
      id: "9",
      name: "Dr. Deborah Fola",
      profession: "Family Physician",
      images: ["/speakers/speaker_7.jpg", "/speakers/speaker_8.jpg"],
    },
    day: "day 3",
    picture:
      "https://images.pexels.com/photos/11421186/pexels-photo-11421186.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 10,
    title: "Dating, Marriage, and Ministry in Medicine",
    date: "2025-07-05",
    time: "01:00 PM",
    description:
      "Christian medical professionals often struggle to balance love, ministry, and their medical calling. This session dives deep into building godly relationships and marriages while staying committed to purpose. Drs. Charles and Lydia Oche, a medical couple, will share how they’ve handled dating, raising kids, and serving in missions together. It’s fun, real, and full of wisdom for singles and couples alike.",
    speakers: {
      id: "10",
      name: "Dr. Charles & Dr. Lydia Oche",
      profession: "Medical Missionaries",
      images: ["/speakers/speaker_9.jpg", "/speakers/speaker_10.jpg"],
    },
    day: "day 1",
    picture:
      "https://images.pexels.com/photos/8460107/pexels-photo-8460107.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const dashboardLinks: DashboardLinkTypes[] = [
  {
    id: 1,
    link: "dashboard",
    component: Dashboard,
  },
  {
    id: 2,
    link: "speakers",
    component: Speakers,
  },
  {
    id: 3,
    link: "LOC members",
    component: LocMembers,
  },
  {
    id: 4,
    link: "event schedule",
    component: EventSchedule,
  },
  {
    id: 6,
    link: "profile",
    component: Profile,
  },
];
