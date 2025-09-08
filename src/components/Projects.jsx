import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon,
  EyeIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  FireIcon
} from '@heroicons/react/24/outline'
import ThreeDBackground from './ThreeDBackground'
import AnimatedBackground from './AnimatedBackground'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: "Fire & Smoke Detection System",
      description: "Developed an advanced computer vision system using YOLOv8 for real-time fire and smoke detection. Implemented early warning capabilities for enhanced safety monitoring with high accuracy object detection and alert mechanisms.",
      techStack: ["Python", "YOLOv8", "OpenCV", "PyTorch", "Computer Vision", "AI/ML"],
      icon: <FireIcon className="w-8 h-8" />,
      gradient: "from-red-500 to-orange-400",
      features: [
        "Real-time Fire Detection",
        "Smoke Pattern Recognition",
        "YOLOv8 Object Detection",
        "Early Warning System",
        "High Accuracy Models",
        "Safety Alert Integration"
      ],
      githubUrl: "https://github.com/sajith-070106/fire-smoke-detection",
      liveUrl: "#", // Add your demo link if available
      status: "Completed"
    },
    {
      title: "VerseVault – AI Powered Library",
      description: "Developed an AI-powered Smart Library with intelligent search, personalized recommendations, and spam review detection. Integrated face detection, offline voice search, and user analytics for enhanced user experience.",
      techStack: ["Python", "Streamlit", "AI/ML", "Face Detection", "NLP"],
      icon: <BookOpenIcon className="w-8 h-8" />,
      gradient: "from-orange-400 to-red-400",
      features: [
        "Intelligent Search System",
        "Personalized Recommendations",
        "Spam Review Detection",
        "Face Detection Integration",
        "Offline Voice Search",
        "User Analytics Dashboard"
      ],
      githubUrl: "https://github.com/sajith-070106/versevault-ai-library",
      liveUrl: "#", // Add your demo link if available
      status: "Completed"
    },
    {
      title: "Cipher-Chase",
      description: "Built a website-based game for a college event, showcasing full-stack implementation with programming and Morse-code puzzle integration. Created an engaging interactive experience combining web development with game design.",
      techStack: ["Django", "Python", "JavaScript", "HTML", "Tailwind CSS", "Unity"],
      icon: <CpuChipIcon className="w-8 h-8" />,
      gradient: "from-red-400 to-orange-400",
      features: [
        "Interactive Game Interface",
        "Morse Code Puzzles",
        "Real-time Scoring",
        "Event Management System",
        "Responsive Design",
        "Unity Integration"
      ],
      githubUrl: "https://github.com/sajith-070106/cipher-chase",
      liveUrl: "#", // Add your demo link if available
      status: "Completed"
    },
    {
      title: "MythSnare – Misinformation Detection",
      description: "Created a comprehensive system to detect and flag misinformation using advanced NLP and machine learning techniques. Ensures information integrity through sophisticated content analysis and verification mechanisms.",
      techStack: ["Python", "Django", "HTML", "CSS", "JavaScript", "RAG", "NLP"],
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      gradient: "from-yellow-400 to-orange-400",
      features: [
        "Advanced NLP Processing",
        "ML-based Detection",
        "Real-time Analysis",
        "Content Verification",
        "RAG Implementation",
        "User-friendly Dashboard"
      ],
      githubUrl: "https://github.com/sajith-070106/mythsnare-misinformation-detection",
      liveUrl: "#", // Add your demo link if available
      status: "Completed"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  return (
    <section id="projects" className="relative py-20 bg-black dark:bg-black overflow-hidden">
      {/* 3D Background */}
      <ThreeDBackground 
        showParticles={true} 
        showShapes={false} 
        showWaveGrid={true}
        className="opacity-15 dark:opacity-10" 
      />
      
      {/* Animated Background Pattern */}
      <AnimatedBackground 
        pattern="lines" 
        intensity="medium" 
        color="orange" 
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white dark:text-white mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: '4rem' } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 dark:text-gray-300 mt-6 max-w-2xl mx-auto"
            >
              Innovative solutions that showcase my passion for AI, Machine Learning, and Full-Stack Development
            </motion.p>
          </div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                        >
                          <EyeIcon className="w-5 h-5" />
                          View Demo
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 border-2 border-orange-400 text-orange-500 dark:text-orange-300 hover:bg-orange-400 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                        >
                          <CodeBracketIcon className="w-5 h-5" />
                          Source Code
                        </motion.a>
                      )}
                      {project.status && (
                        <div className="flex items-center gap-2 px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === 'Completed' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                              : project.status === 'In Progress'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Project Features/Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${project.gradient} rounded-2xl p-8 text-white h-full`}
                  >
                    <h4 className="text-xl font-semibold mb-6">Key Features</h4>
                    <div className="space-y-4">
                      {project.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: 0.5 + (index * 0.2) + (featureIndex * 0.1) 
                          }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          <span className="text-white/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="mt-8 relative">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full"></div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Want to see more of my work?
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              View All Projects on GitHub
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
