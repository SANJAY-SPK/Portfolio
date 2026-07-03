export interface ProjectSection {
  title: string;
  content: string;
  imagePlaceholder?: string;
  images?: string[];
}

export interface Project {
  id: string;
  name: string;
  role: string;
  category: string;
  status: string;
  short: string;
  about: string;
  stack: string[];
  rating: number | null;
  featured?: boolean;
  publicationNote?: string;
  icon: string;
  color: string;
  sections?: ProjectSection[];
  screenshots?: string[];
  githubUrl?: string;
  liveUrl?: string;
  organization?: string;
}

export const projects: Project[] = [
  {
    id: "tugo-eats",
    name: "TUGO EATS",
    role: "Contributed to — Entugo (UK)",
    category: "mobile",
    status: "Live",
    short: "Cross-platform React Native food app for Entugo.",
    about: "Worked on key modules of TUGO EATS as part of the Entugo team, focusing on consistent UI behavior and smooth navigation flow across Android and iOS. Performed feature testing and bug fixes, and collaborated with backend and design teams to integrate REST APIs across mobile workflows.",
    stack: ["React Native (Expo)", "REST API integration", "Cross-platform iOS/Android", "Navigation"],
    rating: null,
    icon: "🍛",
    color: "#01875F"
  },
  {
    id: "power-house",
    name: "Power House Fitness Studio",
    role: "Client project",
    category: "fullstack",
    status: "In Development",
    short: "Full-stack gym management app with member and admin flows.",
    about: "PowerHouse Fitness Studio is a complete real-world gym management system designed for fitness studio owners and admins to efficiently manage members, track attendance, monitor revenue, and get proactive alerts from their mobile device. The app replaces manual record-keeping with a clean, dark-themed interface connecting to a live, secure REST API.",
    stack: ["React Native (Expo)", "Spring Boot 3.3", "PostgreSQL", "JWT auth", "Zustand v5"],
    rating: null,
    icon: "💪",
    color: "#FFB300",
    sections: [
      {
        title: "Project Overview & Core Features",
        content: "Built completely from scratch, the system provides full data persistence and role-based access control. Key features include a real-time dashboard with stat cards and priority alerts, comprehensive member management (search, multi-filter tabs, payment history), session-based check-in (auto-detecting Morning/Evening slots), and custom-built revenue bar charts. The app intelligently aggregates alerts for expiring plans, overdue payments, and inactive members.",
        imagePlaceholder: "PowerHouse Dashboard & Member List Screens"
      },
      {
        title: "Tech Stack & Mobile Frontend",
        content: "The frontend is a cross-platform app built on React Native 0.85 and Expo SDK 56 with strict TypeScript safety. It leverages Expo Router for file-based routing and deep linking, Zustand v5 for lightweight global state, and React Native Reanimated 4 for smooth transitions. UI elements use React Native Paper (Material Design) and the data layer is handled by Axios with tokens securely saved via Expo Secure Store (AES encryption).",
        imagePlaceholder: "Mobile Frontend Architecture & State Flow"
      },
      {
        title: "Spring Boot Backend & Architecture",
        content: "The backend is a production-grade REST API powered by Spring Boot 3.3 (Java 21) and PostgreSQL. It uses Spring Data JPA + Hibernate for ORM, Spring Security + JJWT for stateless authentication, and Spring Validation. Automated scheduled tasks handle status updates (ACTIVE → EXPIRING → EXPIRED). The architecture is highly structured across controllers, services, repositories, DTOs, and security layers, with auto-generated SpringDoc OpenAPI documentation.",
        imagePlaceholder: "Backend REST API Architecture & Database Schema"
      },
      {
        title: "Security & Role Management",
        content: "Security is enforced at every layer. The system uses BCrypt for password hashing and stateless JWT tokens with configurable expiration. A custom JwtAuthFilter validates tokens on every protected request. Role-based rendering controls admin versus regular user workflows. On the client side, unauthorized 401 responses auto-trigger logout routines to instantly clean up sessions and local storage.",
        imagePlaceholder: "JWT Authentication Flow & Secure Token Storage"
      }
    ]
  },
  {
    id: "meditrack-plus",
    name: "MediTrack+",
    role: "IEEE ICICT 2025 — Published",
    category: "fullstack",
    status: "Published",
    short: "Smart medicine inventory monitoring with RFID/QR + AI forecasting.",
    about: "An end-to-end smart inventory management system addressing medicine expiry, stock tracking, and manual inventory errors. Implemented RFID and QR-based scanning using ESP32-RFID for real-time tracking, with a MySQL backend managing inventory, suppliers, expiry alerts and reporting. Applied AI-based demand forecasting to reduce expiry-related losses by 30-40%.",
    stack: ["ESP32-RFID", "QR scanning", "MySQL", "AI demand forecasting", "IEEE Published"],
    rating: null,
    featured: true,
    publicationNote: "Published at IEEE ICICT 2025",
    icon: "💊",
    color: "#016B4B",
    screenshots: [
      "/assets/Meditrack/Home Screen.png",
      "/assets/Meditrack/Inventory Screen.png",
      "/assets/Meditrack/Product Specification Screen.png",
      "/assets/Meditrack/Order Listing Screen.png",
      "/assets/Meditrack/Order Suppliers Screen.png",
      "/assets/Meditrack/Transaction Screen.png",
      "/assets/Meditrack/Report Screen.png",
    ],
    sections: [
      {
        title: "System Architecture",
        content: "The system follows a multi-layered architecture consisting of a Hardware Layer (ESP32, RFID MFRC522 reader, QR scanner), an Application Layer (Django REST API server + MySQL database), and a Presentation Layer (React TS dashboard). This setup ensures seamless real-time synchronization between physical inventory scans and digital database records.",
        images: ["/assets/Meditrack/System Architecture.png"]
      },
      {
        title: "Database Design",
        content: "The ER diagram captures the relational structure of the system, including entities for medicines, suppliers, transactions, orders, and inventory logs. The schema is normalized to minimize redundancy and supports efficient querying for real-time dashboard analytics.",
        images: ["/assets/Meditrack/ER - Diagram.png"]
      },
      {
        title: "Dashboard & Inventory Management",
        content: "The home dashboard provides a high-level overview of stock levels, expiry alerts, and recent activity. The inventory screen enables full CRUD operations on medicine records with filtering, search, and batch actions. Product specification screens show detailed views including stock history and supplier info.",
        images: [
          "/assets/Meditrack/Home Screen.png",
          "/assets/Meditrack/Inventory Screen.png",
          "/assets/Meditrack/Product Specification Screen.png"
        ]
      },
      {
        title: "Orders, Transactions & Reporting",
        content: "The order management module handles supplier procurement with status tracking. The transaction screen logs all stock movements (inbound/outbound). The reporting module generates analytics on stock turnover, expiry rates, and demand patterns to support data-driven decision making.",
        images: [
          "/assets/Meditrack/Order Listing Screen.png",
          "/assets/Meditrack/Order Suppliers Screen.png",
          "/assets/Meditrack/Transaction Screen.png",
          "/assets/Meditrack/Report Screen.png"
        ]
      },
      {
        title: "Data Flow Diagram",
        content: "The data flow diagram illustrates how information moves between the hardware layer, backend services, and the frontend dashboard — from RFID/QR scans through the Django API to the React TS interface.",
        images: ["/assets/Meditrack/Data flow diagram.png"]
      },
      {
        title: "AI Demand Forecasting",
        content: "Integrated with Facebook Prophet, the system analyzes historical sales data to predict future stock requirements. By forecasting trends and detecting seasonality spikes, the AI model generates automated alerts for upcoming low-stock scenarios, reducing medicine wastage by an estimated 40%.",
        images: [
          "/assets/Meditrack/AI forecast Sample 1.png",
          "/assets/Meditrack/AI forecast Sample 2.png",
          "/assets/Meditrack/AI Forecast Sample 3.png"
        ]
      }
    ]
  },
  {
    id: "university-management-system",
    name: "University Management System",
    role: "React Native Integration Lead — Tech Mahindra COE",
    category: "fullstack",
    status: "Completed",
    short: "Tech Mahindra COE project — large-scale academic management app for students, faculty, admins.",
    about: "The University Management System (UMS) is a Tech Mahindra Center of Excellence (COE) project — a comprehensive full-stack web and mobile application developed using Spring Boot for the backend and React/React Native for the frontend. Carried out by 10 specialized teams (5 Backend + 5 Frontend), the system digitizes and streamlines key academic and administrative operations within a university. It supports role-based access for students, faculty, and administrators, enabling secure and efficient management of profiles, course catalogs, enrollments, attendance, exams, assignments, and authentication.",
    stack: ["React Native", "Spring Boot", "React", "MongoDB", "GridFS", "JWT Auth", "Role-based access"],
    rating: null,
    icon: "🎓",
    color: "#5F6368",
    githubUrl: "https://github.com/techMKce",
    organization: "Tech Mahindra COE",
    screenshots: [
      "/assets/UMS/Admin Profile.png",
      "/assets/UMS/Course Management.png",
      "/assets/UMS/Faculty Profile.png",
      "/assets/UMS/Time Table.png",
      "/assets/UMS/Faculty management.png",
    ],
    sections: [
      {
        title: "System Architecture & Database Design",
        content: "The UMS uses a microservice-inspired architecture with Spring Boot powering multiple backend modules. The ER diagram captures entities for Users, Courses, Enrollments, Attendance, Exams, Assignments, and Submissions across relational (MySQL) and document (MongoDB) stores.",
        images: [
          "/assets/UMS/Architecture Diagram.png",
        ]
      },
      {
        title: "My Role & Contributions",
        content: "I served as the Team Lead and React Native Integration Lead. My core responsibilities included full mobile app architecture design, React Native integration with the Spring Boot backend, and developing the Mobile Exam Timetable feature. I ensured seamless cross-platform experiences and secure REST API consumption for mobile workflows.",
        images: [
          "/assets/UMS/Time Table.png",
          "/assets/UMS/Student Screen.png",
          "/assets/UMS/Time Table Schedule.png"
        ]
      },
      {
        title: "Team & Collaboration",
        content: "UMS is a Tech Mahindra COE (Center of Excellence) project carried out by 10 specialized teams (5 Backend Teams and 5 Frontend Teams) across the organization. The module teams included:\n• Authentication & Authorization\n• Profile & Enrollment\n• Course Catalog & Search\n• Attendance & Exams (My Team)\n• Assignments & Gradings\n\nGitHub Organization: https://github.com/techMKce",
        images: ["/assets/UMS/ER Diagram.png"]
      },
      {
        title: "Admin & Profile Management",
        content: "The Authentication Module uses Spring Boot and JWT to secure routes based on user roles. It features Admin CRUD operations for user management, role-based conditional rendering in React, and an email notification system for password resets. The Profile & Enrollment module allows real-time course enrollments, profile picture multipart file uploads, and tracking of enrolled courses.",
        images: [
          "/assets/UMS/Admin Profile.png",
          "/assets/UMS/Student Screen.png",
          "/assets/UMS/Profile Update.png",
          "/assets/UMS/Faculty Profile.png",
          "/assets/UMS/Faculty Profile Update.png"
        ]
      },
      {
        title: "Course & Faculty Management",
        content: "The course catalog supports full CRUD, section management, content uploads (PDF/URL), and search with live suggestions. Faculty management includes form-based creation, assignment to students, and department-wise filtering.",
        images: [
          "/assets/UMS/Course Management.png",
          "/assets/UMS/Faculty management.png",
          "/assets/UMS/Faculty Form.png",
          "/assets/UMS/Assign Student to Faculty.png",
          "/assets/UMS/Picture2.png"
        ]
      }
    ]
  },
  {
    id: "food-explore-25",
    name: "ICSSS-FoodXplore'25",
    role: "Freelance / Developer",
    category: "frontend",
    status: "Live",
    short: "Responsive conference website for Tamil Nadu Agricultural University.",
    about: "Developed the official conference website for ICSSS-FoodXplore'25, an international conference hosted by Tamil Nadu Agricultural University (TNAU). The site provides information on themes, registration, events, and committees, featuring a responsive, modern design with an announcement ticker and downloadable resources.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Vercel"],
    rating: null,
    icon: "🌾",
    color: "#2e7d32",
    githubUrl: "https://github.com/SANJAY-SPK/Food-Explore-25",
    liveUrl: "https://food-explore-25.vercel.app/",
    organization: "TNAU (Freelance)",
    screenshots: [
      "/assets/FoodXplore/HomePage.png",
      "/assets/FoodXplore/registration.png",
      "/assets/FoodXplore/location.png",
      "/assets/FoodXplore/themes.png",
      "/assets/FoodXplore/event.png",
    ],
    sections: [
      {
        title: "Project Scope",
        content: "Built a fully responsive, multi-page website from scratch to handle information dissemination for the International Conference on Safe, Standard and Sustainable Food Processing for a Healthier Tomorrow. The site was built to be fast, accessible, and easily navigable across mobile and desktop devices.",
      }
    ]
  }
];
