import ProjectTemplate from "../components/projectSections/ProjectTemplate";

const CygnusProject = () => {
  const cygnusData = {
    title: "Cygnus Fest Website",
    description:
      "Designed and developed the official website for our college’s cultural fest Cygnus. The project aimed to capture the festive spirit of Indian tradition with a modern, creative portfolio-style UI enhanced by animations.",
    techStack:
      "React.js for responsive UI, Tailwind CSS for styling, GSAP for animations, and Webflow for design experimentation.",
    keywords: ["Creative", "Festival Website"],
    liveLink: "https://cygnusfest.vercel.app/", // 👈 replace with actual
    video: "https://res.cloudinary.com/daoccmd1m/video/upload/v1759489032/cygnus_p3byql.mp4", // optional
    photos: [
      "/images/optimized/cygnus.avif",
      "/images/optimized/cygnus3.avif",
      "/images/optimized/cygnus4.avif",
      "/images/optimized/cygnus5.avif",
    ],
    next: {
      title: "SHWAS",
      route: "/projects/shwas",
      image: "/images/optimized/shwas.avif",
    },
  };

  return <ProjectTemplate project={cygnusData} />;
};

export default CygnusProject;
