export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  icon: string;
  accent: string;
};

export type Doctor = {
  slug: string;
  name: string;
  specialization: string;
  experience: string;
  availability: string;
  image: string;
  summary: string;
  qualifications: string[];
  languages: string[];
  timeline: Array<{ year: string; title: string }>;
  reviewCount: number;
  rating: number;
  services: string[];
};

export type Testimonial = {
  id: number;
  name: string;
  condition: string;
  rating: number;
  feedback: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  date: string;
  category: string;
  readingTime: string;
  content: string[];
};

export const services: Service[] = [
  {
    slug: 'cardiology',
    title: 'Cardiology',
    shortDescription: 'Advanced heart screening, preventive cardiology, and critical intervention support.',
    description:
      'Our cardiology department provides comprehensive heart care, including non-invasive diagnostics, interventional treatment planning, and long-term rehabilitation support for high-risk patients.',
    benefits: [
      'ECG, Echo, TMT, and preventive cardiac screening',
      'Chest pain assessment and hypertension management',
      'Lifestyle counselling for long-term heart health'
    ],
    icon: 'HeartPulse',
    accent: 'from-brand-400 to-brand-700'
  },
  {
    slug: 'orthopedics',
    title: 'Orthopedics',
    shortDescription: 'Joint, spine, sports injury, and bone care with precise recovery planning.',
    description:
      'The orthopedic team supports trauma care, mobility restoration, pain relief, and post-operative recovery through evidence-based treatment and patient-first rehabilitation.',
    benefits: [
      'Bone, joint, and fracture management',
      'Sports injury diagnosis and rehab planning',
      'Personalized recovery protocols for faster mobility'
    ],
    icon: 'Bone',
    accent: 'from-emerald-400 to-brand-700'
  },
  {
    slug: 'dental',
    title: 'Dental Care',
    shortDescription: 'Routine, cosmetic, and restorative dentistry in a safe modern setting.',
    description:
      'We offer preventive dental care, smile restoration, oral hygiene support, and painless consultations designed for adults, children, and senior patients.',
    benefits: [
      'Routine checkups and deep cleaning',
      'Tooth restoration and cosmetic smile treatment',
      'Child-friendly consultations and oral health guidance'
    ],
    icon: 'Smile',
    accent: 'from-teal-400 to-brand-700'
  },
  {
    slug: 'neurology',
    title: 'Neurology',
    shortDescription: 'Expert evaluation for brain, nerve, and spine-related conditions.',
    description:
      'Our neurology unit handles headaches, seizures, stroke follow-up, nerve disorders, and neurological assessment with careful clinical monitoring and multidisciplinary support.',
    benefits: [
      'Headache, vertigo, and seizure assessment',
      'Stroke recovery monitoring and counselling',
      'Neurological testing with compassionate follow-up'
    ],
    icon: 'Brain',
    accent: 'from-brand-300 to-brand-800'
  },
  {
    slug: 'emergency',
    title: 'Emergency Care',
    shortDescription: 'Rapid-response emergency support with round-the-clock medical readiness.',
    description:
      'Our emergency unit is built for critical cases that require timely intervention, immediate stabilization, and coordinated care in a safe and reliable environment.',
    benefits: [
      '24/7 triage and emergency stabilization',
      'Fast access to senior doctors and diagnostics',
      'Coordinated referrals for critical admission cases'
    ],
    icon: 'Ambulance',
    accent: 'from-emerald-500 to-brand-800'
  }
];

export const doctors: Doctor[] = [
  {
    slug: 'dr-ashok-suthar',
    name: 'Dr. Ashok Suthar',
    specialization: 'Maxillofacial and Facial cosmetic Surgeon',
    experience: '10+ years',
    availability: 'Tue - Sun, 9:30 AM - 3:30 PM',
    image: '/images/doctors/dr-ashok-suthar.jpg',
    summary:
      'Provides comprehensive dental care, including preventive checkups, restorative treatments, and cosmetic smile enhancement in a patient-friendly environment.',
    qualifications: ['BDS', 'MDS (Prosthodontics)'],
    languages: ['English', 'Hindi'],
    timeline: [
      { year: '2015', title: 'Completed MDS in Prosthodontics' },
      { year: '2018', title: 'Expanded hospital restorative dental unit' },
      { year: '2023', title: 'Launched preventive school dental camps' }
    ],
    reviewCount: 84,
    rating: 4.7,
    services: ['dental']
  },
  {
    slug: 'dr-ananya-sharma',
    name: 'Dr. Ananya Sharma',
    specialization: 'Consultant Cardiologist',
    experience: '14+ years',
    availability: 'Mon - Sat, 10:00 AM - 4:00 PM',
    image: 'https://images.pexels.com/photos/15752232/pexels-photo-15752232.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary:
      'Specializes in preventive cardiology, heart failure management, and long-term cardiac wellness planning.',
    qualifications: ['MBBS', 'MD (Medicine)', 'DM (Cardiology)'],
    languages: ['English', 'Hindi'],
    timeline: [
      { year: '2012', title: 'Completed DM in Cardiology' },
      { year: '2014', title: 'Joined tertiary cardiac care center as consultant' },
      { year: '2021', title: 'Led preventive heart health outreach program' }
    ],
    reviewCount: 127,
    rating: 4.9,
    services: ['cardiology', 'emergency']
  },
  {
    slug: 'dr-vikram-mehta',
    name: 'Dr. Vikram Mehta',
    specialization: 'Senior Orthopedic Surgeon',
    experience: '17+ years',
    availability: 'Mon - Fri, 11:00 AM - 6:00 PM',
    image: 'https://images.pexels.com/photos/17686823/pexels-photo-17686823.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary:
      'Focused on fracture care, sports injuries, chronic joint pain, and mobility restoration.',
    qualifications: ['MBBS', 'MS (Orthopedics)', 'Fellowship in Arthroscopy'],
    languages: ['English', 'Hindi', 'Punjabi'],
    timeline: [
      { year: '2009', title: 'Completed MS in Orthopedics' },
      { year: '2013', title: 'Advanced arthroscopy fellowship training' },
      { year: '2022', title: 'Introduced early mobility rehab care pathway' }
    ],
    reviewCount: 98,
    rating: 4.8,
    services: ['orthopedics', 'emergency']
  },  
  {
    slug: 'dr-arjun-iyer',
    name: 'Dr. Arjun Iyer',
    specialization: 'Consultant Neurologist',
    experience: '12+ years',
    availability: 'Mon - Sat, 12:00 PM - 5:00 PM',
    image: 'https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary:
      'Supports patients with headache disorders, stroke recovery, neuropathy, and seizure management.',
    qualifications: ['MBBS', 'MD (Medicine)', 'DM (Neurology)'],
    languages: ['English', 'Hindi', 'Tamil'],
    timeline: [
      { year: '2013', title: 'Completed DM in Neurology' },
      { year: '2017', title: 'Built integrated neuro follow-up clinic' },
      { year: '2024', title: 'Expanded tele-follow-up stroke counselling' }
    ],
    reviewCount: 102,
    rating: 4.9,
    services: ['neurology', 'emergency']
  },
  {
    slug: 'dr-rhea-kapoor',
    name: 'Dr. Rhea Kapoor',
    specialization: 'Internal Medicine Specialist',
    experience: '11+ years',
    availability: 'Daily, 8:30 AM - 1:30 PM',
    image: 'https://images.pexels.com/photos/19963126/pexels-photo-19963126.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary:
      'Coordinates adult preventive care, diagnostics, chronic disease monitoring, and wellness consultations.',
    qualifications: ['MBBS', 'MD (Internal Medicine)'],
    languages: ['English', 'Hindi'],
    timeline: [
      { year: '2014', title: 'Completed MD in Internal Medicine' },
      { year: '2019', title: 'Started preventive health check program' },
      { year: '2025', title: 'Integrated chronic care review clinics' }
    ],
    reviewCount: 65,
    rating: 4.8,
    services: ['cardiology', 'neurology', 'emergency']
  },
  {
    slug: 'dr-karan-singh',
    name: 'Dr. Karan Singh',
    specialization: 'Emergency & Critical Care',
    experience: '9+ years',
    availability: '24/7 Emergency Roster',
    image: 'https://images.pexels.com/photos/17686818/pexels-photo-17686818.jpeg?auto=compress&cs=tinysrgb&w=1200',
    summary:
      'Leads emergency stabilization, critical triage, and inpatient acute care coordination.',
    qualifications: ['MBBS', 'MD (Emergency Medicine)'],
    languages: ['English', 'Hindi'],
    timeline: [
      { year: '2016', title: 'Completed residency in emergency medicine' },
      { year: '2020', title: 'Managed high-volume emergency response unit' },
      { year: '2024', title: 'Improved rapid triage and escalation workflow' }
    ],
    reviewCount: 73,
    rating: 4.9,
    services: ['emergency']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya N.',
    condition: 'Cardiology patient',
    rating: 5,
    feedback:
      'The consultation was calm, clear, and reassuring. I felt informed at every step and the staff handled everything with compassion.'
  },
  {
    id: 2,
    name: 'Rohit S.',
    condition: 'Orthopedic recovery',
    rating: 5,
    feedback:
      'My surgery recovery plan was explained in simple terms and I was walking confidently much earlier than expected.'
  },
  {
    id: 3,
    name: 'Asha M.',
    condition: 'Dental care',
    rating: 4,
    feedback:
      'Very clean facility and a gentle doctor. The dental treatment was smooth and the team made me feel comfortable throughout.'
  },
  {
    id: 4,
    name: 'Nitin R.',
    condition: 'Neurology follow-up',
    rating: 5,
    feedback:
      'Detailed guidance, no rushed conversation, and great follow-up. It helped my family understand the treatment plan clearly.'
  }
];

export const blogPosts: BlogPost[] = [
  {
    slug: 'preventive-heart-health-tips',
    title: '7 Preventive Heart Health Habits Every Family Should Follow',
    excerpt:
      'Small everyday habits can significantly reduce long-term cardiac risk when practiced consistently.',
    cover: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2026-03-10',
    category: 'Cardiology',
    readingTime: '5 min read',
    content: [
      'Heart care is not only about treatment after symptoms appear. It begins with lifestyle patterns that support healthy circulation, stable blood pressure, and better stress control.',
      'Simple routines such as regular walking, limiting high-salt processed foods, sleeping adequately, and scheduling timely health checks help families detect early warning signs before they become emergencies.',
      'Patients with diabetes, high blood pressure, or a family history of heart disease should be especially proactive about annual screening and medical follow-up.'
    ]
  },
  {
    slug: 'when-to-see-an-orthopedic-specialist',
    title: 'When Should You Visit an Orthopedic Specialist?',
    excerpt:
      'Recurring joint pain, injury-related swelling, and reduced mobility are signs that should not be ignored.',
    cover: 'https://images.pexels.com/photos/12149118/pexels-photo-12149118.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2026-02-25',
    category: 'Orthopedics',
    readingTime: '4 min read',
    content: [
      'Many bone and joint concerns begin subtly. Pain after climbing stairs, stiffness on waking up, or swelling after physical activity can all point to deeper orthopedic issues.',
      'Early evaluation improves both pain relief and long-term mobility. Ignoring symptoms often delays recovery and may worsen inflammation or strain-related damage.',
      'A specialist can guide imaging, medication, physiotherapy, or procedural care depending on the severity and cause of discomfort.'
    ]
  },
  {
    slug: 'daily-oral-care-guide',
    title: 'A Practical Daily Oral Care Guide for Children and Adults',
    excerpt:
      'Strong oral health routines are the foundation of confident smiles and fewer emergency dental visits.',
    cover: 'https://images.pexels.com/photos/3845683/pexels-photo-3845683.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2026-01-18',
    category: 'Dental',
    readingTime: '3 min read',
    content: [
      'Twice-daily brushing, regular flossing, hydration, and limited sugary snacking remain some of the most effective oral health habits across all age groups.',
      'Children benefit from supervised brushing and routine dental visits, while adults should stay alert for sensitivity, bleeding gums, and jaw discomfort.',
      'Preventive care is easier and more affordable than delaying treatment until pain becomes severe.'
    ]
  }
];

export const faqs = [
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book through the appointment form on the website, call our reception desk, or use the WhatsApp quick-connect button for guidance.'
  },
  {
    question: 'Do you offer emergency support?',
    answer:
      'Yes. Our emergency unit is available around the clock for urgent medical needs and rapid triage support.'
  },
  {
    question: 'Can I choose a specific doctor while booking?',
    answer:
      'Yes. The appointment page allows patients to select a department first and then choose a relevant doctor based on availability.'
  },
  {
    question: 'Are health check packages available?',
    answer:
      'Yes. Preventive health screening and consultation support can be coordinated through our reception and internal medicine team.'
  },
  {
    question: 'Is the hospital suitable for senior citizens?',
    answer:
      'The facility is designed with accessibility, guided support, and clear wayfinding to help senior patients navigate care comfortably.'
  },
  {
    question: 'Do you support online reports and dashboard access?',
    answer:
      'The patient dashboard section is prepared for appointment history, downloadable reports, and profile management as part of the digital care experience.'
  }
];

export const siteConfig = {
  name: 'Vrinda Superspeciality Hospital',
  siteUrl: 'https://vrinda-hospital.vercel.app',
  description:
    'Vrinda Face & Superspeciality Hospital provides advanced medical care with modern facilities and experienced doctors. We are committed to offering accurate diagnosis, quality treatment, and compassionate patient care in a safe and comfortable environment.',
  phone: '+91 76651 71546',
  emergencyPhone: '+91 76651 71546',
  whatsappPhone: '+91 76651 71546',
  email: 'care@vrindahospital.com',
  address: {
    street: '9-A, Main Pal Road, Opp. Hanwant School, Dalle Khan Chakki Circle, Baldev Nagar',
    city: 'Jodhpur',
    state: 'Rajasthan',
    postalCode: '342001'
  },
  workingHours: [
    { days: 'Mon - Sat', hours: '08:00 AM - 08:00 PM' },
    { days: 'Sunday', hours: '09:00 AM - 02:00 PM' },
    { days: 'Emergency', hours: '24/7' }
  ],
  stats: [
    { label: 'Years of service', value: '18+' },
    { label: 'Patients served', value: '85k+' },
    { label: 'Expert doctors', value: '32+' },
  ],
  services,
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://www.instagram.com/vrinda_hospital/',
    linkedin: 'https://linkedin.com'
  }
};

export const quickHighlights = [
  {
    title: 'Same-day appointments',
    description: 'Fast booking support for consultations, diagnostics, and follow-up care.'
  },
  {
    title: 'Modern diagnostics',
    description: 'Accurate assessment supported by reliable equipment and trained staff.'
  },
  {
    title: 'Compassionate nursing',
    description: 'Patient-centered assistance that prioritizes comfort and confidence.'
  },
  {
    title: '24/7 emergency care',
    description: 'Rapid response readiness for urgent and time-sensitive medical needs.'
  }
];

export const infrastructureImages = [
  'https://images.pexels.com/photos/11288653/pexels-photo-11288653.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/11660581/pexels-photo-11660581.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/6234630/pexels-photo-6234630.jpeg?auto=compress&cs=tinysrgb&w=1200'
];

export const pageHeroBackgrounds = {
  about: 'https://images.pexels.com/photos/6234630/pexels-photo-6234630.jpeg?auto=compress&cs=tinysrgb&w=1600',
  doctors: 'https://images.pexels.com/photos/15752232/pexels-photo-15752232.jpeg?auto=compress&cs=tinysrgb&w=1600',
  services: 'https://images.pexels.com/photos/11288653/pexels-photo-11288653.jpeg?auto=compress&cs=tinysrgb&w=1600',
  appointment: 'https://images.pexels.com/photos/19963126/pexels-photo-19963126.jpeg?auto=compress&cs=tinysrgb&w=1600',
  blog: 'https://images.pexels.com/photos/3845129/pexels-photo-3845129.jpeg?auto=compress&cs=tinysrgb&w=1600',
  contact: 'https://images.pexels.com/photos/11660581/pexels-photo-11660581.jpeg?auto=compress&cs=tinysrgb&w=1600',
  faq: 'https://images.pexels.com/photos/21073473/pexels-photo-21073473.jpeg?auto=compress&cs=tinysrgb&w=1600',
  testimonials: 'https://images.pexels.com/photos/17686818/pexels-photo-17686818.jpeg?auto=compress&cs=tinysrgb&w=1600',
  dashboard: 'https://images.pexels.com/photos/5722163/pexels-photo-5722163.jpeg?auto=compress&cs=tinysrgb&w=1600',
  admin: 'https://images.pexels.com/photos/17686823/pexels-photo-17686823.jpeg?auto=compress&cs=tinysrgb&w=1600'
};
