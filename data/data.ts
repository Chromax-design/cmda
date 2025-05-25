import { Event, Speaker, Tab } from "./types";

export const speakers: Speaker[] = [
  {
    id: 1,
    name: "Dr. Tunde Adebayo",
    image: "/speakers/speaker_1.jpg",
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
    id: 2,
    name: "Prof. Amina Musa",
    image: "/speakers/speaker_2.jpg",
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
    id: 3,
    name: "Dr. Emeka Okonkwo",
    image: "/speakers/speaker_3.jpg",
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
    id: 4,
    name: "Dr. Adesuwa Omoregbe",
    image: "/speakers/speaker_4.jpg",
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
    id: 5,
    name: "Dr. Segun Adeyemi",
    image: "/speakers/speaker_5.jpg",
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
    id: 6,
    name: "Dr. Zainab Bako",
    image: "/speakers/speaker_6.jpg",
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
    id: 7,
    name: "Dr. Femi Johnson",
    image: "/speakers/speaker_7.jpg",
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
    id: 8,
    name: "Dr. Ifeoma Nwachukwu",
    image: "/speakers/speaker_8.jpg",
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
    id: 9,
    name: "Dr. Ibrahim Danladi",
    image: "/speakers/speaker_9.jpg",
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
  {
    id: 10,
    name: "Prof. Clara Edet",
    image: "/speakers/speaker_10.jpg",
    dob: "1965-05-20",
    profession: "Professor of Pathology",
    mobile: "+2348023456789",
    address: "15 Medical School Road, Calabar",
    biography:
      "Prof. Clara Edet is a veteran pathologist with more than 30 years of academic and diagnostic experience. She is a pioneer in infectious disease pathology and her research contributed significantly to understanding Lassa Fever transmission. Prof. Edet has trained hundreds of pathologists and holds several fellowships, including one from the Royal College of Pathologists, UK. She chairs the National Medical Research Council and serves on several international advisory boards.",
    gender: "Female",
    nationality: "Nigerian",
    affiliation: "University of Calabar",
    hobbies: ["Bird watching", "Historical research"],
  },
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

export const eventSchedule: Event[] = [
  {
    id: 1,
    title: "Opening Keynote: Igniting Innovation",
    date: "2025-07-01",
    time: "09:00 AM",
    description:
      "Join us as we kick off the event with an inspiring keynote focused on the role of innovation in shaping the future of technology. Learn how startups and industry giants are pushing boundaries, and gain insights into how you can innovate within your field.",
    speakers: [
      {
        name: "Alice Johnson",
        image: "/speakers/speaker_1.jpg",
      },
      {
        name: "Michael Chen",
        image: "/speakers/speaker_2.jpg",
      },
    ],
    day: "day 1",
    picture: "https://source.unsplash.com/random/800x600?conference",
  },
  {
    id: 2,
    title: "Design Thinking Workshop",
    date: "2025-07-01",
    time: "11:00 AM",
    description:
      "This interactive workshop walks you through the entire design thinking process—from empathy mapping to prototyping and testing. Whether you’re a beginner or seasoned designer, you’ll leave with practical tools to solve real-world problems creatively.",
    speakers: [
      {
        name: "Sophia Martinez",
        image: "/speakers/speaker_3.jpg",
      },
      {
        name: "David Lee",
        image: "/speakers/speaker_4.jpg",
      },
    ],
    day: "day 1",
    picture: "https://source.unsplash.com/random/800x600?workshop",
  },
  {
    id: 3,
    title: "Building Scalable Web Apps",
    date: "2025-07-02",
    time: "10:00 AM",
    description:
      "Learn the architectural decisions, performance tricks, and modern stack tools necessary to build web applications that scale efficiently. This session will cover both frontend and backend considerations with real-life case studies.",
    speakers: [
      {
        name: "Emily Zhang",
        image: "/speakers/speaker_5.jpg",
      },
      {
        name: "Daniel Kim",
        image: "/speakers/speaker_6.jpg",
      },
    ],
    day: "day 2",
    picture: "https://source.unsplash.com/random/800x600?coding",
  },
  {
    id: 4,
    title: "Future of Artificial Intelligence",
    date: "2025-07-02",
    time: "01:00 PM",
    description:
      "Explore current AI breakthroughs and discuss the ethical, social, and practical implications of artificial intelligence in everyday life. Experts will present their research and predictions about AI’s influence in the next decade.",
    speakers: [
      {
        name: "Lara Thompson",
        image: "/speakers/speaker_7.jpg",
      },
      {
        name: "Henry Davis",
        image: "/speakers/speaker_8.jpg",
      },
    ],
    day: "day 2",
    picture: "https://source.unsplash.com/random/800x600?ai",
  },
  {
    id: 5,
    title: "Cybersecurity Trends in 2025",
    date: "2025-07-03",
    time: "09:30 AM",
    description:
      "This session provides an overview of the current threats in the digital space and how cybersecurity professionals are adapting. Topics include ransomware, zero trust models, and strategies for securing remote workforces.",
    speakers: [
      {
        name: "Natalie Reed",
        image: "/speakers/speaker_9.jpg",
      },
      {
        name: "Omar Malik",
        image: "/speakers/speaker_10.jpg",
      },
    ],
    day: "day 3",
    picture: "https://source.unsplash.com/random/800x600?cybersecurity",
  },
  {
    id: 6,
    title: "Lunch & Networking",
    date: "2025-07-03",
    time: "12:00 PM",
    description:
      "A great opportunity to connect with fellow attendees, speakers, and partners. Enjoy lunch while engaging in meaningful conversations and exploring potential collaborations with peers from around the world.",
    speakers: [
      {
        name: "Networking Host 1",
        image: "/speakers/speaker_1.jpg",
      },
      {
        name: "Networking Host 2",
        image: "/speakers/speaker_2.jpg",
      },
    ],
    day: "day 3",
    picture: "https://source.unsplash.com/random/800x600?networking",
  },
  {
    id: 7,
    title: "Panel: Women in Tech",
    date: "2025-07-03",
    time: "02:00 PM",
    description:
      "Join a powerful panel of women leaders as they discuss their journeys, challenges, and wins in the tech industry. This session aims to inspire and empower the next generation of women in STEM.",
    speakers: [
      {
        name: "Rachel Morgan",
        image: "/speakers/speaker_3.jpg",
      },
      {
        name: "Tina Brooks",
        image: "/speakers/speaker_4.jpg",
      },
    ],
    day: "day 4",
    picture: "https://source.unsplash.com/random/800x600?women-tech",
  },
  {
    id: 8,
    title: "Intro to Cloud Computing",
    date: "2025-07-04",
    time: "10:30 AM",
    description:
      "Understand the fundamentals of cloud computing, the different service models (IaaS, PaaS, SaaS), and how businesses are using cloud platforms like AWS, Azure, and GCP to scale rapidly.",
    speakers: [
      {
        name: "Greg Patterson",
        image: "/speakers/speaker_5.jpg",
      },
      {
        name: "Michelle Osei",
        image: "/speakers/speaker_6.jpg",
      },
    ],
    day: "day 4",
    picture: "https://source.unsplash.com/random/800x600?cloud",
  },
  {
    id: 9,
    title: "Data Science for Everyone",
    date: "2025-07-04",
    time: "01:00 PM",
    description:
      "Demystify data science concepts with real-world examples. Whether you’re a beginner or non-technical stakeholder, this session makes data science approachable and practical for everyday decisions.",
    speakers: [
      {
        name: "Andrew Parker",
        image: "/speakers/speaker_7.jpg",
      },
      {
        name: "Chloe Adams",
        image: "/speakers/speaker_8.jpg",
      },
    ],
    day: "day 4",
    picture: "https://source.unsplash.com/random/800x600?data",
  },
  {
    id: 10,
    title: "Closing Ceremony & Awards",
    date: "2025-07-04",
    time: "04:00 PM",
    description:
      "Celebrate the achievements of our speakers, attendees, and organizers. The closing ceremony will feature a highlight reel of the event, special awards, and a farewell note from the organizing committee.",
    speakers: [
      {
        name: "Final Speaker 1",
        image: "/speakers/speaker_9.jpg",
      },
      {
        name: "Final Speaker 2",
        image: "/speakers/speaker_10.jpg",
      },
    ],
    day: "day 4",
    picture: "https://source.unsplash.com/random/800x600?award",
  },
];
