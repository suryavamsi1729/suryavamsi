import SEO from "../components/common/Seo";
import ProjectTemplate from "../components/projectSections/ProjectTemplate";

const ShwasProject = () => {
  const shwasData = {
    title: "SHWAS",
    description:
      "Shwas is an AI-powered surveillance system that combines gesture recognition and abnormal behavior detection using CNN, LSTM, and YOLO. It analyzes live video feeds, triggers automated alerts, and uses Hugging Face models for real-time video captioning to enhance home and community security.",
    techStack:
      "Built intuitive dashboards with React.js and Tailwind CSS, enabling real-time video monitoring, alert visualization, and seamless user interaction",
    keywords: ["AI Surveillance", "Automated Alerts"],
    liveLink: "https://shwas.vercel.app/", 
    video: "https://res.cloudinary.com/daoccmd1m/video/upload/v1759489187/shwas_owetiy.mp4", // optional
    photos: [
      "/images/optimized/shwas.avif",
      "/images/optimized/shwas2.avif",
      "/images/optimized/shwas3.avif",
      "/images/optimized/shwas4.avif",
    ],
    next: {
      title: "Mojito",
      route: "/projects/mojito",
      image: "/images/optimized/drink4.avif",
    },
  };

  return (
    <>
    <SEO
        title="SHWAS Project | AI-Powered Surveillance System | Surya Vamsi Doddi"
        description="SHWAS is an AI-powered surveillance system using gesture recognition, CNN, LSTM, and YOLO. It provides real-time alerts, video captioning with Hugging Face models, and an intuitive React + Tailwind UI for secure monitoring."
        keywords="SHWAS, AI Surveillance, Gesture Recognition, Abnormal Behavior Detection, CNN, LSTM, YOLO, React, Tailwind CSS, Real-time Alerts, Hugging Face, Security System, Surya Vamsi Doddi, Web Application"
        image="https://suryavamsi.vercel.app/images/optimized/shwas.avif"
        url="https://suryavamsi.vercel.app/projects/shwas"
      />
    <ProjectTemplate project={shwasData} />
    </>
  );
};

export default ShwasProject;
