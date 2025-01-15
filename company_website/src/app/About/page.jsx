import AnimatedPage from "@/components/Animation/PageAnimated";
import Landing from "../../components/global/FocusSection/Landing";
import FocusSection from "@/components/global/FocusSection/FocusSection";
import SuperPower from "@/components/global/SuperPower";
import PartnersSection from "@/components/global/PartnersSection";
import FooterSection from "@/components/global/FooterSection";

import ProfileCard from "./_components/Profile";
import IMAGES from "@/constants/images";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const profileData = {
  profileImage: IMAGES.profile,
  yearsOfExperience: 10,
  name: "Saim Rehdari",
  title: "CEO",
  description:
    "Founder and lead designer at UXIS, specializes in deep UX/UI design for complex product interfaces. Achieving an 88% success rate in planned KPIs after redesigns.",
  additionalInfo:
    'The author of the course "UX Thinking and Structuring Before Creating UI" and the winner of the Telegram competition for redesigning the Android app.',
  expertise: [
    "Finance",
    "Graphics",
    "Design",
    "Cloud Platform",
    "Testing",
    "AI Chats",
    "Big Data",
  ],
  socialLinks: [
    { href: "https://linkedin.com", icon: <FaLinkedin size={24} /> },
    { href: "https://instagram.com", icon: <FaInstagram size={24} /> },
    { href: "https://facebook.com", icon: <FaFacebook size={24} /> },
  ],
};
export default function About() {
  return (
    <AnimatedPage title="About">
      <div>
        <div>
          <Landing
            title="Who we are"
            subtitle="We are a remote design team with strong experience in creating UX/UI solutions"
            description="Creating meaningful digital experiences."
            buttonText="Leadership Team"
            imageSrc={IMAGES.About}
          />
        </div>
        <div className="p-10 px-16 flex  ">
          <div className=" ">
            <ProfileCard {...profileData} />
          </div>
          <div className="">
            <ProfileCard {...profileData} />
          </div>
        </div>

        <div>
          <FocusSection />
        </div>

        <div>
          <SuperPower />
        </div>

        <div>
          <PartnersSection />
        </div>

        <div>
          <FooterSection />
        </div>
      </div>
    </AnimatedPage>
  );
}
