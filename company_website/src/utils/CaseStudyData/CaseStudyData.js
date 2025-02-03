import IMAGES from "@/constants/images";

const caseStudyData = [
  {
    id: 1,
    title: "ClubHub",
    category: "Mobile Application",
    images: [IMAGES.clupapp, IMAGES.CaseStudy.club1, IMAGES.CaseStudy.club3],
    aboutProject:
      "Club Hub 365 simplifies communication, fee collection,RSVPs for training, and announcements for sports clubs.It supports administrators, coaches, players, and parents by integrating essential features into one platform. Users can join clubs, register for teams, and manage subscriptions easily.",

    platform: ["iOS", "Android"],
    problemStatement: `
    Achieving a user base of over 8,000 clubs on ClubHub365
was not without its challenges. Clubs often struggle with
fragmented communication, inefficient fee collection
processes, and disorganized scheduling of training
sessions and games. ClubHub365 had to provide a
unified and efficient solution to these problems.
    `,
    solution: `
    Webrange Solutions implemented a multifaceted
strategy to propel ClubHub365 to its current success.
Recognizing the initial challenge of user acquisition, they
employed targeted marketing campaigns across digital
platforms and leveraged social media to create
awareness. They also engaged with the community by
actively seeking feedback, addressing concerns, and
fostering a sense of belonging among users. This
collaborative approach not only attracted new users but
also retained existing ones, laying the foundation for a
vibrant community of over 8,000 clubs.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.django,
      IMAGES.icons.aws,
      IMAGES.icons.mongodb,
    ],
  },

  {
    id: 2,
    title: "SwapIt",
    category: "Mobile Application",
    images: [IMAGES.swapit, IMAGES.CaseStudy.swap1, IMAGES.CaseStudy.club2],
    aboutProject:
      "Welcome to Swap It! Easily trade your items with others through our fun and simple platform. Snap a picture, upload your items, and start receiving swap proposals.Enjoy effortless exchanges!",

    platform: ["iOS", "Android"],

    problemStatement: `
Achieving a user base of over 15,000 on Swap It was not
without its challenges. Traditional marketplaces often lack
the ﬂexibility for direct exchanges, leading to inefﬁciencies
and missed opportunities for users who prefer bartering.
Swap It had to differentiate itself by providing a seamless
and user-friendly bartering platform.
    `,
    solution: `
Webrange Solutions implemented a multifaceted
strategy to propel Swap It to its current success.
Recognizing the initial challenge of user acquisition, they
employed targeted marketing campaigns across digital
platforms and leveraged social media to create
awareness. They also engaged with the community by
actively seeking feedback, addressing concerns, and
fostering a sense of belonging among users. This
collaborative approach not only attracted new users but
also retained existing ones, laying the foundation for a
vibrant community of over 15,000 users.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.django,
      IMAGES.icons.aws,
      IMAGES.icons.mongodb,
    ],
  },

  {
    id: 3,
    title: "Vupop",
    category: "Mobile Application",
    images: [IMAGES.vupop, IMAGES.CaseStudy.vupop1, IMAGES.CaseStudy.vupop2],
    aboutProject:
      "VuPop is a social media platform designed for sports fans, broadcasters, and clubs. It enables real-time engagement, integrates social content into broadcasts, and rewards fans for their participation.",

    platform: ["iOS", "Android", "Web"],

    problemStatement: `
Broadcasters lack an efficient way to integrate fan-generated social content into their broadcasts. Fans spend heavily on sports but receive little value in return for their engagement.
    `,
    solution: `
VuPop creates a seamless platform where broadcasters can utilize social content effectively, fans can engage meaningfully, and participation is rewarded, enhancing the overall sports experience.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.flutter,
      IMAGES.icons.aws,
      IMAGES.icons.mongodb,
      IMAGES.icons.dart,
    ],
  },

  {
    id: 4,
    title: "Star Student",
    category: "Mobile Application",
    images: [
      IMAGES.starstudent,
      IMAGES.CaseStudy.starstudent1,
      IMAGES.CaseStudy.starstudent2,
    ],
    aboutProject:
      "Star Student is an innovative app designed to connect university and college students with local household job opportunities. It provides an affordable solution for the general public and small businesses to find reliable student workers for tasks such as cleaning, gardening, and dog walking. ",

    platform: ["iOS", "Android"],

    problemStatement: `
Existing platforms lacked engagement and security for students and employers seeking household job opportunities.
    `,
    solution: `
Star Student provides an intuitive interface with distinct sections for employers and students, incorporating security measures and rewarding students for completed tasks.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.flutter,
      IMAGES.icons.aws,
      IMAGES.icons.mongodb,
      IMAGES.icons.dart,
    ],
  },

  {
    id: 5,
    title: "Wod Pro",
    category: "Web and Mobile Application",
    images: [IMAGES.wodpro, IMAGES.CaseStudy.wodpro1, IMAGES.CaseStudy.wodpro2],
    aboutProject:
      "WodPro is a fitness app that allows users to record and upload workout videos, track progress, and compete in rankings based on categories. Admins verify user performance to ensure accurate ranking. ",

    platform: ["iOS", "Android", "web"],

    problemStatement: `
Fitness enthusiasts often struggle to track their progress and compare their performance against others in a structured and verified manner.
    `,
    solution: `
WodPro enables users to record their workouts, upload progress videos, and participate in a verified ranking system, ensuring accurate and fair comparisons within their fitness category.
    `,
    technologyIcons: [
      IMAGES.icons.reactnative,
      IMAGES.icons.flutter,
      IMAGES.icons.aws,
      IMAGES.icons.mongodb,
      IMAGES.icons.dart,
    ],
  },
];

export default caseStudyData;
