import SEO from "../components/common/Seo";
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

  return (
    <>
    <SEO
        title="Cygnus Fest Website | Creative College Festival UI | Surya Vamsi Doddi"
        description="Cygnus Fest official website developed with React, Tailwind CSS, and GSAP. Showcasing creative animations, modern UI design, and an engaging portfolio-style layout for a college cultural festival."
        keywords="Cygnus Fest, College Festival Website, React, Tailwind CSS, GSAP, Creative UI, Portfolio Style, Animations, Frontend Developer, Surya Vamsi Doddi, Web Application"
        image="https://yourdomain.vercel.app/images/optimized/cygnus.avif"
        url="https://yourdomain.vercel.app/projects/cygnus"
      />
    <ProjectTemplate project={cygnusData} />
    </>
  );
};

export default CygnusProject;
