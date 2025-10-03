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

  return <ProjectTemplate project={photogramData} />;
};

export default PhotoGramProject;
