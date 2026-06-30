export interface ProjectSection {
  title: string;
  content: string;
  imagePlaceholder?: string;
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
    role: "Personal/client project",
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
    sections: [
      {
        title: "System Architecture",
        content: "The system follows a multi-layered architecture consisting of a Hardware Layer (ESP32, RFID MFRC522 reader, QR scanner), an Application Layer (Django REST API server + MySQL database), and a Presentation Layer (React TS dashboard). This setup ensures seamless real-time synchronization between physical inventory scans and digital database records.",
        imagePlaceholder: "Architecture Diagram (Hardware Layer, Application Layer, Presentation Layer)"
      },
      {
        title: "Hardware Integration & Synchronization",
        content: "The ESP32 microcontroller acts as the central hub, reading RFID tags attached to incoming medicine packages via the MFRC522 module. Data is transmitted securely over Wi-Fi to the Django backend. The system achieves a typical delay of under 2 seconds between a physical scan and the dashboard update, ensuring highly accurate real-time inventory tracking.",
        imagePlaceholder: "ESP32 + RFID Scanner Hardware Setup"
      },
      {
        title: "AI Demand Forecasting",
        content: "Integrated with Facebook Prophet, the system analyzes historical sales data to predict future stock requirements. By forecasting trends and detecting seasonality spikes, the AI model generates automated alerts for upcoming low-stock scenarios, reducing medicine wastage by an estimated 40%.",
        imagePlaceholder: "AI Forecast Chart for Medicine Stock Trends"
      },
      {
        title: "Testing & Results",
        content: "The platform underwent extensive performance and security testing. It maintained an average API response time of under 200ms and frontend load times under 3 seconds. The hardware achieved a 95%+ data transmission success rate, successfully mitigating stockouts and effectively tracking expiration dates.",
        imagePlaceholder: "Dashboard Analytics & Reports Overview"
      }
    ]
  },
  {
    id: "university-management-system",
    name: "University Management System",
    role: "React Native Integration Lead",
    category: "fullstack",
    status: "Completed",
    short: "Large-scale academic management app for students, faculty, admins.",
    about: "The University Management System (UMS) is a comprehensive full-stack web and mobile application developed using Spring Boot for the backend and React/React Native for the frontend, aimed at digitizing and streamlining key academic and administrative operations within a university. It supports role-based access for students, faculty, and administrators, enabling secure and efficient management of profiles, course catalogs, enrollments, attendance, exams, assignments, and authentication.",
    stack: ["React Native", "Spring Boot", "React", "MongoDB", "GridFS", "JWT Auth", "Role-based access"],
    rating: null,
    icon: "🎓",
    color: "#5F6368",
    sections: [
      {
        title: "My Role & Contributions",
        content: "I served as the Team Lead and React Native Integration Lead. My core responsibilities included full mobile app architecture design, React Native integration with the Spring Boot backend, and developing the Mobile Exam Timetable feature. I ensured seamless cross-platform experiences and secure REST API consumption for mobile workflows.",
        imagePlaceholder: "Mobile App Architecture Diagram & Screenshots"
      },
      {
        title: "Team & Collaboration",
        content: "UMS is a Tech Mahindra COE (Center of Excellence) project carried out by 10 specialized teams (5 Backend Teams and 5 Frontend Teams) across the organization. The module teams included:\n• Authentication & Authorization\n• Profile & Enrollment\n• Course Catalog & Search\n• Attendance & Exams (My Team)\n• Assignments & Gradings\n\nGitHub Organization: https://github.com/techMKce",
        imagePlaceholder: "Tech Mahindra COE Collaboration / GitHub Org"
      },
      {
        title: "Key Objectives & Outcomes",
        content: "1. Centralized Academic Management: Unified student and faculty operations.\n2. Role-Based Access Control: Secured the system using JWT-based authentication for Student, Faculty, and Admin roles.\n3. Smart Course Catalog: Implemented full-text search, live suggestions, and filtering mechanisms.\n4. Automated Attendance & Exam Scheduling: Facilitated attendance tracking and automated exam timetable generation with CSV/ICS exports.\n5. Assignment & Grading Workflow: Digital assignment creation, file submission using GridFS, grading, and report generation.",
        imagePlaceholder: "Course Catalog & Exam Timetable UI"
      },
      {
        title: "Module Deep-Dive: Authentication & Profiles",
        content: "The Authentication Module uses Spring Boot and JWT to secure routes based on user roles. It features Admin CRUD operations for user management, role-based conditional rendering in React, and an email notification system (SendGrid/JavaMailSender) for password resets. The Profile & Enrollment module allows real-time course enrollments, profile picture multipart file uploads, and tracking of enrolled courses.",
        imagePlaceholder: "Authentication Flow & Profile Management Dashboard"
      },
      {
        title: "Module Deep-Dive: Assignments & Gradings",
        content: "Built using Spring Boot and MongoDB/GridFS, this module handles multipart file uploads for assignments and submissions. Faculty can create assignments, accept/reject submissions (triggering email notifications), and assign grades. Students can track their progress percentage and average grade via real-time dashboard visualizers. Data can be exported as CSV reports.",
        imagePlaceholder: "Grading Dashboard & GridFS File Upload Flow"
      }
    ]
  }
];
