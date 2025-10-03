
import ProjectTemplate from "../components/projectSections/ProjectTemplate";
const MojitoProject = () => {
  const mojitoData = {
    title: "Mojito",
    description:
      "Mojito is a creative, animation-focused website built with React and GSAP to highlight modern frontend skills. It features smooth transitions, scroll-triggered effects, and elegant motion, offering an engaging browsing experience while exploring advanced UI animation techniques.",
    techStack:
      "Built with React.js for component-based UI, GSAP for smooth animations, and Tailwind CSS for responsive styling. Deployed using AWS S3 & CloudFront for fast and scalable delivery.",
    keywords: ["Interactive", "Animation-rich"],
    liveLink: "https://mojito-cocktailes.vercel.app/",
    video:
      "https://res.cloudinary.com/dnhkcqoci/video/upload/v1759400171/trimmed_video_vpkxml.mp4",
    photos: [
      "/images/optimized/mojito.avif",
      "/images/optimized/mojitoweb7.avif",
      "/images/optimized/mojitoweb3.avif",
      "/images/optimized/mojitoweb4.avif",
    ],
    next: {
      title: "PhotoGram",       // 👈 update this with whichever project comes next
      route: "/projects/photogram",
      image: "/images/optimized/photo.avif"
    },
  };

  return <ProjectTemplate project={mojitoData} />;
};

export default MojitoProject;
