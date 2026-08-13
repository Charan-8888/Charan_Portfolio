import aparnaAuraImg from '../assets/images/image.png';

export const projects = [
  {
    id: "aparna-aura",
    title: "Aparna Aura",
    category: "Full-Stack E-Commerce Platform",
    shortDescription: "A modern jewellery e-commerce platform built with React and Django.",
    description: "A modern jewellery e-commerce platform built with React and Django. The platform includes authentication, product management, categories, cart, wishlist, orders, payment integration, and an admin system.",
    technologies: ["React", "Django", "Django REST Framework", "PostgreSQL", "Tailwind CSS", "JWT Authentication", "Vercel", "Render", "Supabase"],
    features: ["User Authentication", "Google Login", "Product Management", "Categories", "Cart System", "Wishlist", "Order Management", "Payment Integration", "Address Management", "Responsive Design", "Admin Dashboard"],
    challenges: ["CSP restrictions", "Google OAuth origin mismatch", "CORS configuration", "JWT authentication flow", "PostgreSQL connectivity"],
    image: aparnaAuraImg,
    githubUrl: "#",
    liveUrl: "https://aparna-aura.vercel.app/",
    status: "completed"
  },
  {
    id: "securenova",
    title: "SecureNova",
    category: "Cybersecurity Desktop Application",
    shortDescription: "A Python-based security suite designed to provide multiple system and malware analysis capabilities.",
    description: "A Python-based security suite designed to provide multiple system and malware analysis capabilities through a desktop interface.",
    technologies: ["Python", "PyQt6", "SQLite", "YARA", "psutil", "watchdog", "Scapy"],
    features: ["File scanning", "Malware analysis", "Process monitoring", "YARA rule support", "System monitoring", "Security-focused desktop interface", "76 automated tests passed"],
    challenges: [],
    image: "",
    githubUrl: "#",
    liveUrl: "#",
    status: "completed"
  },
  {
    id: "placement-predict",
    title: "Placement Predict",
    category: "Machine Learning / Data Analysis",
    shortDescription: "A placement prediction system designed to analyze student-related parameters.",
    description: "A placement prediction system designed to analyze student-related parameters and predict placement outcomes using machine learning techniques. Processed dataset with 100,000 samples and 26 different metrics.",
    technologies: ["Python", "Pandas", "Machine Learning", "Data Processing"],
    features: ["Dataset processing", "Outcome prediction", "Feature analysis"],
    challenges: [],
    image: "",
    githubUrl: "#",
    liveUrl: "#",
    status: "completed"
  },
  {
    id: "shellforge",
    title: "ShellForge",
    category: "Operating Systems / Systems Programming",
    shortDescription: "A custom shell built to understand how command-line interfaces interact with the operating system.",
    description: "A custom shell built to understand how command-line interfaces interact with the operating system. The project focuses on process creation, command execution, tokenization, and built-in shell commands.",
    technologies: ["C", "Linux", "fork()", "execvp()", "waitpid()", "Process Management"],
    features: ["REPL loop", "Command parsing", "Argument tokenization", "Process execution", "Built-in commands", "File redirection", "Pipes", "Background processes"],
    challenges: [],
    image: "",
    githubUrl: "#",
    liveUrl: "#",
    status: "building"
  },
  {
    id: "iot-water-quality-monitoring",
    title: "IoT Water Quality Monitoring",
    category: "IoT Project",
    shortDescription: "An IoT-based system designed to monitor water quality parameters using sensors.",
    description: "An IoT-based system designed to monitor water quality parameters using sensors and provide real-time data for analysis and monitoring.",
    technologies: ["Arduino", "Microcontroller", "IoT Sensors", "Water Quality Monitoring", "Data Collection"],
    features: ["Real-time monitoring", "Sensor integration", "Data transmission"],
    challenges: [],
    image: "",
    githubUrl: "#",
    liveUrl: "#",
    status: "completed"
  }
];
