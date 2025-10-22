import SEO from "../components/common/Seo";
import ProjectTemplate from "../components/projectSections/ProjectTemplate";

const PhotoGramProject = () => {
  const photogramData = {
    title: "PhotoGram",
    description:
      "PhotoGram is a social photo-sharing app built with React, TypeScript, and Firebase. It allows users to upload, share, and explore photos with friends, offering a modern, responsive design with smooth user interactions.",
    techStack:
      "React.js with TypeScript, Tailwind CSS for styling, shadcn/ui components, Uploadcare for image hosting, and Firebase for authentication & backend.",
    keywords: ["Photo Sharing", "Social Platform"],
    liveLink: "https://photogram.vercel.app/", // 👈 replace with your actual link
    video: "https://res.cloudinary.com/dnhkcqoci/video/upload/v1759454735/photogramTrimmed_jiqu54.mp4", // if you have demo video, drop URL here
    photos: [
      "/images/optimized/photogram.avif",
      "/images/optimized/photogram1.avif",
      "/images/optimized/photogram4.avif",
      "/images/optimized/photogram3.avif",
    ],
    next: {
      title: "Cygnus",
      route: "/projects/cygnus",
      image: "/images/optimized/cygnus1.avif",
    },
  };

  return (
    <>
      <SEO
        title="PhotoGram Project | React + Firebase Social Photo Sharing App | Surya Vamsi Doddi"
        description="PhotoGram is a photo-sharing web app built with React, TypeScript, and Firebase. Users can upload, share, and explore images in a clean, responsive UI using Tailwind CSS and Uploadcare."
        keywords="PhotoGram, React Project, Firebase, TypeScript, Tailwind CSS, Uploadcare, shadcn/ui, Photo Sharing App, Social Media Platform, Frontend Developer, Surya Vamsi Doddi, Web Application"
        image="https://suryavamsi.vercel.app/images/optimized/photogram.avif"
        url="https://suryavamsi.vercel.app/projects/photogram"
      />
      <ProjectTemplate project={photogramData} />
    </>
  );
};

export default PhotoGramProject;
