export const projects = [
  {
    id: '1',
    title: 'CRM',
    description:
      'Full-stack CRM platform with React frontend and Node.js backend for lead management, sales tracking, and business operations.',
    image:
      'https://www.cio.com/wp-content/uploads/2025/01/272365-0-30946200-1738104780-CRM-Software.jpg?quality=50&strip=all',
    technologies: [
      'React.js',
      'Node.js',
      'Redux',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'Material UI'
    ],
    category: 'FullStack',
    liveUrl: 'https://crm-main-7s81.vercel.app',
    githubUrl: 'https://github.com/shkumar156/CRM-Final-Year-Project'
  },
  {
    id: '2',
    title: 'Apex Shopping',
    description:
      'Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, JWT, Google Auth, and admin dashboard.',
    image:
      'https://yt3.googleusercontent.com/S_GzdetfVzD2E21lnQ8OEV5S6qkh9Cg6JvzKO_qg48W-bFqM01JzQ3GH9Lj07KU9RDOV2N-4bw=s900-c-k-c0x00ffffff-no-rj',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
    category: 'FullStack',
    liveUrl: 'https://web-technologies-7twf.vercel.app/signup',
    githubUrl: 'https://github.com/shkumar156/Apex-Shopping-WebApp-Semester-Project'
  },
  {
    id: '3',
    title: 'Cat Breed Classifier',
    description:
      'A deep learning project to classify cat breeds using TensorFlow and Keras. Trained on a filtered subset of the Oxford-IIIT Pet dataset containing 12 cat breeds, and fine-tuned using transfer learning on Google Colab.',
    image:
      'https://repository-images.githubusercontent.com/78960087/e08d0380-3538-11ea-8100-3c74cc52a2d8',
    technologies: ['Python', 'TensorFlow', 'Keras', 'Colab'],
    category: 'AI',
    liveUrl: 'https://huggingface.co/spaces/shkumar156/Cats-Classifier',
    githubUrl:
      'https://github.com/shkumar156/Cat-Breed-Prediction-Using-Kaggle-Dataset'
  },
  {
    id: '4',
    title: 'Image Object Detection',
    description:
      'A web application for real-time object detection using YOLOv5, featuring a modern React frontend with drag-and-drop image upload and an Express.js backend that processes images through the YOLOv5 model.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/3/38/Detected-with-YOLO--Schreibtisch-mit-Objekten.jpg',
    technologies: ['React', 'JavaScript', 'Python', 'Node.js', 'YOLOv5'],
    category: 'AI',
    liveUrl: 'https://image-object-detection-using-yolov8.vercel.app/',
    githubUrl:
      'https://github.com/shkumar156/Image-Object-Detection-Using-Yolov5'
  },
  {
    id: '5',
    title: 'Dubai Medical Research Forum (DMRF)',
    description:
      'Developed the official website in collaboration with Dubai Health Authority for Dubai Medical Research Forum (DMRF).' ,
    image:
      'https://www.dmrf.ae/static/media/DMRFlogo.0fc2f01cc04c8cb208d1.png--Schreibtisch-mit-Objekten.jpg',
    technologies: ['React.js', 'Express.js', 'Node.js', 'MongoDB'],
    category: 'FullStack',
    liveUrl: 'https://www.dmrf.ae'
    
  }
];

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', level: 95, icon: 'code' },
      { name: 'CSS3', level: 90, icon: 'palette' },
      { name: 'JavaScript', level: 92, icon: 'zap' },
      { name: 'React', level: 88, icon: 'components' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, icon: 'server' },
      { name: 'Express', level: 82, icon: 'route' },
      { name: 'MongoDB', level: 78, icon: 'database' }
    ]
  },
  {
    title: 'DevTools',
    skills: [
      { name: 'Git', level: 90, icon: 'git-branch' },
      { name: 'VS Code', level: 95, icon: 'code2' },
      { name: 'Cursor', level: 85, icon: 'code' }
    ]
  },
  {
    title: 'AI/ML',
    skills: [
      { name: 'Python', level: 80, icon: 'brain' },
      { name: 'TensorFlow', level: 75, icon: 'cpu' },
      { name: 'Keras', level: 70, icon: 'layers' }
    ]
  }
];

export const personalInfo = {
  name: 'Muhammad Umar',
  title: 'Software Developer | ML Engineer',
  tagline: "Hi, I'm Umar — a Developer building scalable web & AI solutions",
  email: 'muhammadumar8741@gmail.com',
  phone: '+92 3407652100',
  location: '🇵🇰 Pakistan',
  avatar: '/PFP.jpg',
  resumeUrl: '/resume.pdf',
  social: {
    github: 'https://github.com/shkumar156',
    linkedin: 'https://www.linkedin.com/in/muhammadumar126',
    email: 'mailto:muhammadumar8741@gmail.com'
  }
};
