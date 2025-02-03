const SocialLink = ({ icon, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-black hover:text-gray-900 transition duration-200 hover:scale-150"
    >
      {icon}
    </a>
  );
};

export default SocialLink;
