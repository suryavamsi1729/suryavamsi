import ProjectTemplate from "../components/projectSections/ProjectTemplate";

const ScorifyProject = () => {
  const scorifyData = {
    title: "Scorify",
    description:
      "Scorify is a property management platform connecting landlords, tenants, and agents. It simplifies property rental and management with a clean, responsive UI and real-time features for smoother collaboration.",
    techStack:
      "React.js, Tailwind CSS for responsive design, and Firebase for authentication and real-time database integration.",
    keywords: ["Property", "Management"],
    liveLink: "https://scorify.vercel.app/", // 👈 replace with actual
    video: "", // optional
    photos: [
      "/images/optimized/scorify.avif",
      "/images/optimized/scorify1.avif",
      "/images/optimized/scorify2.avif",
      "/images/optimized/scorify3.avif",
    ],
    next: {
      title: "Mojito",
      route: "/projects/mojito",
      image: "/images/optimized/mojito.avif",
    },
  };

  return <ProjectTemplate project={scorifyData} />;
};

export default ScorifyProject;
