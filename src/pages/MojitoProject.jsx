
import SEO from "../components/common/Seo";
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

  return (
    <>
      <SEO
        title="Mojito Project | React + GSAP Animated Website | Surya Vamsi Doddi"
        description="Mojito is a visually engaging, animation-rich website built with React.js, Tailwind CSS, and GSAP. It showcases modern frontend development and creative UI animations."
        keywords="Mojito, React Project, GSAP, Tailwind CSS, Animation Website, Frontend Developer, Surya Vamsi Doddi, Creative Web Design, Smooth Animations, AWS S3, CloudFront"
        image="https://suryavamsi.vercel.app/images/optimized/mojito.avif"
        url="https://suryavamsi.vercel.app/projects/mojito"
      />
      <ProjectTemplate project={mojitoData} />
    </>
  );
};

export default MojitoProject;
