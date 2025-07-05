// Define the shape of a team member's data
export type TeamMember = {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
  };
};

// This leadership data array is correct and remains unchanged.
export const leadership: TeamMember[] = [
  {
    id: 'christopher-mason',
    name: 'Dr. Christopher P. Mason',
    title: 'Founder & CEO',
    image: '/team/christopher.jpg',
    bio: `Dr. Christopher P. Mason is a board-certified lifestyle and emergency medicine physician. He pursued opening his own practice after attending to people in the emergency room setting whom he thought could be healthier and stay out of the ER with lifestyle changes and functional medicine. His experiences in pharmaceuticals, construction, and law enforcement have transformed his practice of medicine today, offering telehealth services for advanced medical treatments to optimize client health, wellness, and longevity. Dr. Mason specializes in emergency medical services, lifestyle medicine, hormone optimization, medical aesthetics, and IV nutrition and therapy.`,
    socials: { 
      linkedin: '#', 
      twitter: '#' 
    }
  },
  {
    id: 'dana-cusick',
    name: 'Dana Cusick',
    title: 'National Business and Practice Manager',
    image: '/team/dana.jpg',
    bio: `Dana Cusick has over 25 years of experience in business administration, with the majority of her career in healthcare. She gained much of her experience working within physician practices and in provider contracting for a large national PPO network, as well as a legal background in medical malpractice defense and business. When she’s not working, she loves spending time with her husband, Bill, and her two children, Raegan and TJ. It’s exciting to be a part of a team that continually works to expand and improve services for the betterment of our team and clients.`,
    socials: { linkedin: '#'}
  },
  {
    id: 'colin-zaporski',
    name: 'Colin Zaporski',
    title: 'Chief Clinical Director',
    image: '/team/colin.jpg',
    bio: `Colin Zaporski brings over a decade of experience in Orthopedics, having worked extensively in both surgical and outpatient settings. As Chief Clinical Director, he leverages his clinical background and leadership experience to drive organizational success. Colin lives in Linden, Michigan, where he enjoys spending quality time with his wife, Ashley, and their newborn daughter, Elowyn. A lover of the outdoors, he is passionate about health and fitness, with a focus on weight training, bodybuilding, and cross training.`,
    socials: { linkedin: '#'}
  },
  {
    id: 'jeffrey-swisshelm',
    name: 'Jeffrey Swisshelm',
    title: 'Business Development & Marketing Manager',
    image: '/team/jeffrey.jpg',
    bio: `Jeffrey brings over 7 years of experience in the digital marketing field, specializing in content strategy and SEO. He is passionate about leveraging analytics to drive measurable results. Jeffrey calls the Pacific Northwest home, where he prioritizes family time with his son, Theron. A passionate reader and dedicated marathon runner, he is thrilled to contribute his skills and dedication to a team committed to consistently enhancing and expanding services.`,
    socials: { linkedin: '#'}
  }
];

// NEW: The team array populated with the data you provided.
export const team: TeamMember[] = [
  {
    id: 'jackie-fiegel',
    name: 'Jackie Fiegel',
    title: 'Certified Pilates, Yoga & Meditation Teacher',
    image: '/team/jackie.jpg',
    bio: `Jackie has been working with clients as a Certified Pilates Instructor since 2010. Additionally, she has become a certified Yoga and Meditation Teacher and has most recently received her certification as a Chopra Life Coach. She is passionate about staying healthy in mind, body and spirit and guides others to do the same. This is deep, transformative work, loaded with self discovery that will help you feel more authentic and alive in your daily life.`
  },
  {
    id: 'dan-matha',
    name: 'Dan Matha',
    title: 'Strength & Transformation Coach',
    image: '/team/dan.jpg',
    bio: `Dan Matha isn’t just a trainer; he’s a catalyst for transformation, blending the intensity of strength and conditioning with the art of muscle building. His blend of professional athleticism, aesthetic focus, and dedicated coaching creates a training environment where goals are not just met but exceeded. He is thrilled to begin his journey with Old Mission Lifestyle Medicine, a place where his passion for holistic health and peak performance aligns perfectly with their cutting-edge approach to lifestyle, functional, and anti-aging medicine.`
  },
  {
    id: 'jeri-davis',
    name: 'Jeri Davis, MSW',
    title: 'Life Coach',
    image: '/team/jeri.jpg',
    bio: `Jeri Davis is a licensed Master’s Social Worker and a licensed Oncology Social Worker. She has spent a wonderful 34-year career at The Beaumont Cancer Center and is thrilled to be a valued member of the Old Mission Lifestyle Medicine team. Her strengths are listening, empathy, and an ability to help you focus on your strengths, and empower you to be your best self. “I am looking forward to joining you on your journey to wellness.”`
  },
  {
    id: 'melissa-welch',
    name: 'Melissa Welch, FNP-C, RN',
    title: 'Health Coach',
    image: '/team/melissa.jpg',
    bio: `Melissa Welch is a board certified Family and Emergency Nurse Practitioner. She has been a registered nurse since 2005 and is very passionate about health promotion and preventative medicine. She enjoys helping and supporting patients with their lifestyle goals through nurse coaching. In her free time, she enjoys horsebacking and outdoor activities.`
  },
  {
    id: 'michel-akl',
    name: 'Michel Akl, MD',
    title: 'East Regional Medical Aesthetics Trainer',
    image: '/team/michel.jpg',
    bio: `Dr. Michel Akl is board certified in general surgery, asthma/allergy and immunology, pediatrics and Aesthetic medicine. He is a world renowned trainer and certifier in Medical Aesthetics and Anti-Aging Medicine with the American Academy of Aesthetic Medicine. Old Mission Aesthetics and IV Nutrition are privileged to have Dr. Akl on our regional in-person training team.`
  },
  {
    id: 'eddie-turner',
    name: 'Dr. Eddie Turner',
    title: 'Family Medicine Physician',
    image: '/team/eddie.jpg',
    bio: `Dr. Eddie Turner received his Medical Degree from the University of Tennessee College of Medicine and completed a Family Medicine Residency at Baylor College of Medicine. He has received numerous awards including the Outstanding Resident Award from Baylor College of Medicine and the American Medical Association Foundation Leadership Award.`
  },
  {
    id: 'jami-bryant',
    name: 'Jami Bryant, PhD, MBA, MPH, RN, NPD-BC',
    title: 'Business Consultant',
    image: '/team/jami.jpg',
    bio: `Dr. Jami Bryant is an accomplished business strategist and business visionary. With a remarkable track record of success, Jami has established an award-winning program to help business owners strive toward multi-million-dollar revenue. Old Mission Aesthetics and IV Nutrition are proud to have Dr. Bryant on our Business Strategy and Development team.`
  },
  {
    id: 'mustafa-alsaid',
    name: 'Mustafa Alsaid, MD',
    title: 'West Regional Associate Supervising Physician',
    image: '/team/mustafa.jpg',
    bio: `Dr. Mustafa Alsaid is Board Certified in Internal Medicine and received his M.D. at Jordan University of Science and Technology. He is also a member of the American Academy of Aesthetic Medicine. Dr. Alsaid has 13 years of clinical experience and specializes in dermal fillers, neurotoxin, hormone optimization and medical weight loss.`
  },
  {
    id: 'micah-craig',
    name: 'Micah Craig, MD',
    title: 'West Regional Associate Supervising Physician',
    image: '/team/micah.jpg',
    bio: `Dr. Micah Craig is Board Certified in Internal Medicine and received his M.D. at St Georges University, School of Medicine. He is also a member of the American Academy of Aesthetic Medicine and the American Academy of Anti-Aging Medicine. He became passionate about nutrition and anti-aging during residency when he saw that a lot of traditional medicine fails to actually be preventative.`
  },
  {
    id: 'farah-fatima',
    name: 'Farah Fatima, MD, DO',
    title: 'Northeast Regional Associate Supervising Physician',
    image: '/team/farah.jpg',
    bio: `Dr. Farah Fatima is board certified in Internal Medicine and provides a wide variety of medical services at her office. She has also achieved board certification from American Academy of Aesthetic Medicine (AAAM). Dr. Fatima has more than 10 years of experience in direct patient care and has been working as hospitalist as well.`
  },
  {
    id: 'sarah-schuller',
    name: 'Sarah Schuller, PA',
    title: 'Northeast Regional Advanced Practice Clinician',
    image: '/team/sarah-s.jpg',
    bio: `Sarah Schuller is a Physician Assistant with over 7 years of experience in Emergency Medicine. Based out of Pittsburgh, PA, with her husband and three dogs- Sarah is excited to join the Old Mission Aesthetics team to provide quality client services with a commitment to the wellness of all our patients.`
  },
  {
    id: 'jonathan-snipes',
    name: 'Jonathan Snipes, MD',
    title: 'Southeast Regional Associate Supervising & Lifestyle Physician',
    image: '/team/jonathan.jpg',
    bio: `Dr. Snipes attended medical school at the Medical University of South Carolina (MUSC) and was chief resident in his psychiatry residency. In 2020 he discovered the world of IV nutrition and bioidentical hormone optimization therapy (BHRT), which naturally led him to Medical Aesthetics. He has completed extensive training in neurotoxin, dermal fillers, and weight loss medication.`
  },
  {
    id: 'francine-ortiz',
    name: 'Francine Ortiz, RN',
    title: 'West Regional Aesthetics Trainer',
    image: '/team/francine.jpg',
    bio: `Francine has earned a sterling reputation as an aesthetic nurse injector over the past fourteen years, after honing her skills in a long career as a critical care ER nurse. Since 2016, she has owned a successful medical aesthetic practice, whose loyal clientele swears by her dramatic, natural-looking results.`
  },
  {
    id: 'lori-shemek',
    name: 'Lori Shemek, PhD, CNC',
    title: 'Health, Weight Loss & Inflammation Expert',
    image: '/team/lori.jpg',
    bio: `Dr. Lori Shemek is a leading fat cell researcher, health expert, weight loss expert, keynote speaker, and award-winning author. She is a recognized authority on inflammation and its role in weight loss, preventing disease and optimizing health. Dr. Shemek is well known as a pioneer in creating global awareness of low-level inflammation and how it is the core cause of most illness, disease, and weight gain.`
  },
  {
    id: 'keith-bandli',
    name: 'Keith Bandli, MS, ATC/L',
    title: 'Fellow of Applied Functional Science',
    image: '/team/keith.jpg',
    bio: `During his 20 years of clinical experience, Keith has developed a passion to help people move better, build strength and endurance, and enhance their quality of life. His education is extensive, with degrees in Athletic Training and Exercise Science, and a fellowship at the Gray Institute studying Applied Functional Science. Keith’s tag line is "Better Movement Matters" and he couldn’t be more correct.`
  },
  {
    id: 'isaac-velarde',
    name: 'Isaac Velarde',
    title: 'Nutritionist and Personal Trainer',
    image: '/team/isaac.jpg',
    bio: `Isaac is a certified Nutritionist and Personal Trainer whose passion is to help others reach their fitness goals. He embarked on a journey which led him to lose over 160 pounds and has since been a competitive bodybuilder. If you’re trying to lose weight, gain lean muscle, or improve your habits, Isaac’s structured program will help you achieve your goals.`
  }
];
