import cinemax from "../assets/projects/cinemax.png"
import contact from "../assets/projects/contactapp.png"
import instafake from "../assets/projects/instafake.png"
import views from "../assets/projects/views.png"
import banksite from "../assets/projects/banksite.png"
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      name: "Cinemax",
      description: "This app uses the TMDB API to showcase a wide range of movies - from the classics to today's hits.",
      imageUrl: cinemax, 
      technologies: ["React", "Tailwind CSS", "TMDB API"],
      liveDemoUrl: "https://cinemax-bay.vercel.app/", 
      githubUrl: "https://github.com/hottyy/cinemax", 
    },
    {
      name: "Contact App",
      description: "This app simplifies contact management by using an API to securely store and retrieve your contacts.",
      imageUrl: contact, 
      technologies: ["HTML", "CSS", "JavaScript", "API"],
      liveDemoUrl: "https://hottyy.github.io/Contact-App/", 
      githubUrl: "https://github.com/hottyy/Contact-App", 
    },
    {
      name: "Insta-fake",
      description: "This project replicates the core features of Instagram, built with Bootstrap for responsive design and an API to dynamically fetch and display content, mimicking a real-world social media experience.",
      imageUrl: instafake, 
      technologies: ["HTML", "Bootstrap", "JavaScript", "API"],
      liveDemoUrl: "https://hottyy.github.io/Social-Media/", 
      githubUrl: "https://github.com/hottyy/Social-Media", 
    },
    {
      name: "VIEWS",
      description: "This website, offers a user-friendly platform for exploring and booking travel destinations, designed to inspire wanderlust and simplify travel planning.",
      imageUrl: views, 
      technologies: ["HTML", "CSS", "JavaScript"],
      liveDemoUrl: "https://hottyy.github.io/VIEWS/", 
      githubUrl: "https://github.com/hottyy/VIEWS", 
    },
    {
      name: "Bank-site",
      description: "This project is a modern banking website, offering a clean, responsive, and user-friendly interface for online banking services.",
      imageUrl: banksite,
      technologies: ["Tailwindcss", "React"],
      liveDemoUrl: "https://react-bank-one.vercel.app/", 
      githubUrl: "https://github.com/hottyy/React-bank", 
    },
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          My Projects
          </motion.h2>
        <div className="space-y-10">
          {projectsData.map((project, index) => (
            <div key={index} className={`md:flex md:items-center md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/2">
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="rounded-md shadow-md w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-700">Technologies:</span>
                  <ul className="flex space-x-2">
                    {project.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mr-2">
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;