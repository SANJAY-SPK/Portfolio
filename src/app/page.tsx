"use client";

import { useState } from 'react';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import { SearchIcon, XIcon, Mail, FileText, Code, Zap, Database, Wrench, Layers, Cpu, GraduationCap, Award } from 'lucide-react';
const navTabs = [
  { id: 'for-you', label: 'For you' },
  { id: 'top-charts', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
];

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.5 5.5 0 0 0-1.5-3.8 5.2 5.2 0 0 0-.15-3.7s-1.2-.38-3.9 1.4a13.38 13.38 0 0 0-7 0c-2.7-1.78-3.9-1.4-3.9-1.4a5.2 5.2 0 0 0-.15 3.7A5.5 5.5 0 0 0 3 8.2c0 5.23 3 6.42 6 6.76a4.8 4.8 0 0 0-1 3.24v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('for-you');

  const filteredProjects = projects.filter(p => {
    if (!searchQuery) return true;
    return p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.stack.join(' ').toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.short.toLowerCase().includes(searchQuery.toLowerCase());
  });


  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP NAV BAR (exact Play Store) ===== */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-center h-16 px-4 md:px-6 max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 mr-6">
            <span className="text-[22px] text-ink-soft hidden md:block" style={{ fontFamily: "'Google Sans', sans-serif", fontWeight: 400 }}>
              Sanjay Portfolio
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 w-full relative mx-auto">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F6368] pointer-events-none z-10">
              <SearchIcon className="w-[18px] h-[18px]" />
            </div>
            <input
              style={{ fontFamily: "'Google Sans', sans-serif", fontWeight: 500 }}
              type="text"
              placeholder="Search projects, skills, and more"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-12 pr-12 rounded-full bg-[#F1F3F4] text-[15px] text-[#1A1C1E]
               placeholder:text-[#5F6368] placeholder:font-normal
               border-none outline-none
               transition-all duration-200 ease-out
               focus:bg-white focus:shadow-[0_1px_6px_1px_rgba(0,0,0,0.12),0_1px_2px_rgba(0,0,0,0.08)]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full
                 flex items-center justify-center text-[#5F6368]
                 hover:bg-[#E8EAED] transition-colors"
              >
                <XIcon className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-2 ml-4 shrink-0">
            {/* Profile Avatar */}
            <button className="w-8 h-8 rounded-full bg-[#01875F] text-white flex items-center justify-center text-sm font-medium shrink-0">
              S
            </button>
          </div>
        </div>
      </header>

      {/* ===== SECONDARY NAV (Category tabs) ===== */}
      <nav className="border-b border-[#e8eaed] bg-white sticky top-16 z-40">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 flex items-center gap-0 overflow-x-auto scrollbar-hide">
          {navTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-link px-4 py-3 ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-[1440px] mx-auto">

        {/* Tab: For You */}
        {activeTab === 'for-you' && (
          <div>
            {/* Featured Banner Removed */}

            {/* Developer Profile Section (like "Suggested for you") */}
            <section className="px-4 md:px-6 pt-8 pb-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-medium text-ink-main" style={{ fontFamily: "'Google Sans', sans-serif" }}>Developer Profile</h2>
              </div>
              <div className="bg-white border border-[#e8eaed] rounded-xl p-5 md:p-6">
                <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#01875F] flex items-center justify-center text-white text-2xl md:text-3xl font-medium shrink-0">
                    S
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-medium text-ink-main mb-1" style={{ fontFamily: "'Google Sans', sans-serif" }}>Sanjay S</h3>
                    <p className="text-[14px] text-green-primary font-medium mb-3">UI Developer</p>
                    <p className="text-[14px] text-ink-soft leading-relaxed max-w-2xl">
                      React Native & Spring Boot developer — currently building TUGO EATS at Entugo (UK), published IEEE researcher. B.E ECE (2025).
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3 mt-3">
                      <a href="https://github.com/SANJAY-SPK" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-[#f1f3f4] text-[#5F6368] transition-colors" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="https://www.linkedin.com/in/sanjays2261" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-[#f1f3f4] text-[#5F6368] transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href="mailto:sanjaysivakumar2261@gmail.com" className="p-2 rounded-full hover:bg-[#f1f3f4] text-[#5F6368] transition-colors" aria-label="Email">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 rounded-full hover:bg-[#f1f3f4] text-[#5F6368] transition-colors" aria-label="Resume">
                        <FileText className="w-5 h-5" />
                      </a>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center gap-3 mt-4 pt-4 border-t border-[#e8eaed]">
                      <div>
                        <div className="text-[13px] font-medium text-ink-main">Entugo (UK) — Remote</div>
                        <div className="text-[12px] text-ink-soft">UI Developer Intern · Sep 2025 – Present</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Suggested Projects (horizontal scroll like Play Store) */}
            <section className="pt-8 pb-2">
              <div className="px-4 md:px-6 flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-medium text-ink-main" style={{ fontFamily: "'Google Sans', sans-serif" }}>Suggested for you</h2>
                <button className="text-[14px] text-green-primary font-medium hover:underline">→</button>
              </div>
              <div className="px-4 md:px-6 flex gap-4 overflow-x-auto scrollbar-hide pb-4">
                {filteredProjects.map(project => (
                  <Link key={project.id} href={`/projects/${project.id}`} className="block shrink-0 w-[140px] md:w-[160px]">
                    <div className="app-card p-2">
                      <div
                        className="w-full aspect-square rounded-[20px] flex items-center justify-center text-4xl md:text-5xl text-white mb-2 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
                        style={{ backgroundColor: project.color }}
                      >
                        {project.icon}
                      </div>
                      <div className="mt-1">
                        <div className="text-[13px] font-medium text-ink-main leading-tight line-clamp-2">{project.name}</div>
                        <div className="text-[12px] text-ink-soft line-clamp-1 mt-0.5">{project.role}</div>
                        <div className="flex items-center gap-0.5 mt-1">
                          <span className="text-[12px] text-ink-soft">{project.status}</span>
                          <span className="text-[12px] text-ink-soft"> · </span>
                          <span className="text-[12px] text-ink-soft">{project.stack[0]}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* All Projects Grid (like Top Charts numbered list) */}
            <section className="px-4 md:px-6 pt-6 pb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-medium text-ink-main" style={{ fontFamily: "'Google Sans', sans-serif" }}>All projects</h2>
              </div>
              {filteredProjects.length === 0 ? (
                <div className="text-center py-16 text-ink-soft text-[14px]">
                  No results found for &ldquo;{searchQuery}&rdquo;
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
                  {filteredProjects.map((project, i) => (
                    <Link key={project.id} href={`/projects/${project.id}`}>
                      <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-[#f1f3f4] transition-colors cursor-pointer">
                        {/* Rank Number */}
                        <span className="text-[16px] font-medium text-ink-soft w-6 text-center shrink-0">{i + 1}</span>
                        {/* Icon */}
                        <div
                          className="w-16 h-16 rounded-[16px] flex items-center justify-center text-2xl text-white shrink-0 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
                          style={{ backgroundColor: project.color }}
                        >
                          {project.icon}
                        </div>
                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-medium text-ink-main line-clamp-1">{project.name}</div>
                          <div className="text-[13px] text-ink-soft line-clamp-1 mt-0.5">{project.short}</div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <span className="text-[12px] text-ink-soft">{project.status}</span>
                            {project.featured && (
                              <>
                                <span className="text-[12px] text-ink-soft">·</span>
                                <span className="text-[12px] text-green-primary font-medium">Featured</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          </div>
        )}

        {/* Tab: Top Charts (shows projects in list style) */}
        {activeTab === 'top-charts' && (
          <div className="px-4 md:px-6 pt-6 pb-8">
            <h2 className="text-[22px] font-medium text-ink-main mb-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>Top projects</h2>
            <div className="space-y-0">
              {projects.map((project, i) => (
                <Link key={project.id} href={`/projects/${project.id}`}>
                  <div className="flex items-center gap-4 py-4 px-3 rounded-xl hover:bg-[#f1f3f4] transition-colors cursor-pointer border-b border-[#e8eaed] last:border-0">
                    <span className="text-[20px] font-medium text-ink-soft w-8 text-center shrink-0">{i + 1}</span>
                    <div
                      className="w-20 h-20 rounded-[20px] flex items-center justify-center text-4xl text-white shrink-0 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
                      style={{ backgroundColor: project.color }}
                    >
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[16px] font-medium text-ink-main line-clamp-1">{project.name}</div>
                      <div className="text-[14px] text-ink-soft line-clamp-1 mt-0.5">{project.role}</div>
                      <div className="text-[13px] text-ink-soft mt-1 line-clamp-1">{project.short}</div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {project.stack.slice(0, 3).map(tech => (
                          <span key={tech} className="text-[11px] text-ink-soft border border-[#e8eaed] rounded-full px-2.5 py-0.5">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Tab: Skills */}
        {activeTab === 'skills' && (
          <div className="px-4 md:px-6 pt-6 pb-8">
            <h2 className="text-[22px] font-medium text-ink-main mb-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>Skills & tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Languages',
                    icon: <Code className="w-5 h-5" />,
                    items: ['Java', 'JavaScript', 'TypeScript', 'Python'],
                    color: '#4285F4'
                  },
                {
                  title: 'Frameworks',
                  icon: <Zap className="w-5 h-5" />,
                  items: ['React Native (Expo)', 'Spring Boot', 'React', 'Django'],
                  color: '#EA4335'
                },
                {
                  title: 'Databases',
                  icon: <Database className="w-5 h-5" />,
                  items: ['PostgreSQL', 'MySQL', 'MongoDB'],
                  color: '#34A853'
                },
                {
                  title: 'Tools & Platforms',
                  icon: <Wrench className="w-5 h-5" />,
                  items: ['Git / GitHub', 'Postman', 'Expo CLI', 'Docker'],
                  color: '#FBBC04'
                },
                {
                  title: 'Architecture',
                  icon: <Layers className="w-5 h-5" />,
                  items: ['REST APIs', 'JWT Auth', 'MVC', 'Zustand / State Mgmt'],
                  color: '#01875F'
                },
                {
                  title: 'Hardware & IoT',
                  icon: <Cpu className="w-5 h-5" />,
                  items: ['ESP32', 'RFID (MFRC522)', 'QR Scanning'],
                  color: '#5F6368'
                },
              ].map(category => (
                <div key={category.title} className="border border-[#e8eaed] rounded-xl p-5 hover:shadow-[0_1px_3px_0_rgba(60,64,67,0.3),0_4px_8px_3px_rgba(60,64,67,0.15)] transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                      style={{ backgroundColor: category.color + '15' }}
                    >
                      {category.icon}
                    </div>
                    <h3 className="text-[15px] font-medium text-ink-main">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span key={item} className="text-[13px] text-ink-soft border border-[#e8eaed] rounded-full px-3 py-1.5 hover:bg-[#f1f3f4] transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mt-10">
              <h2 className="text-[16px] font-medium text-ink-main mb-4" style={{ fontFamily: "'Google Sans', sans-serif" }}>Education</h2>
              <div className="border border-[#e8eaed] rounded-xl p-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f1f3f4] flex items-center justify-center text-[#5F6368] shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-ink-main">B.E Electronics and Communication Engineering</h3>
                    <p className="text-[14px] text-ink-soft mt-0.5">Karpagam Institute of Technology, Coimbatore</p>
                    <div className="flex items-center gap-4 mt-2 text-[13px] text-ink-soft">
                      <span>2021 – 2025</span>
                      <span className="font-medium text-ink-main">CGPA: 7.64</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab: Certifications */}
        {activeTab === 'certifications' && (
          <div className="px-4 md:px-6 pt-6 pb-8">
            <h2 className="text-[22px] font-medium text-ink-main mb-6" style={{ fontFamily: "'Google Sans', sans-serif" }}>Certifications</h2>
            <div className="space-y-0">
              {[
                { name: 'React Native', issuer: 'Meta / Coursera', year: '2023', icon: <Award className="w-6 h-6" />, color: '#61DAFB' },
                { name: 'Java Full Stack Development', issuer: 'Wipro Talent Next', year: '2024', icon: <Award className="w-6 h-6" />, color: '#F89820' },
                { name: 'OOPs in Java', issuer: 'Coding Ninjas', year: '2024', icon: <Award className="w-6 h-6" />, color: '#F5A623' },
                { name: 'AEM Sites for Developer', issuer: 'Adobe', year: '', icon: <Award className="w-6 h-6" />, color: '#FF0000' },
              ].map(cert => (
                <div key={cert.name} className="flex items-center gap-4 py-4 px-3 rounded-xl hover:bg-[#f1f3f4] transition-colors border-b border-[#e8eaed] last:border-0">
                  <div
                    className="w-14 h-14 rounded-[14px] flex items-center justify-center text-2xl text-white shrink-0"
                    style={{ backgroundColor: cert.color }}
                  >
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[15px] font-medium text-ink-main">{cert.name}</div>
                    <div className="text-[13px] text-ink-soft mt-0.5">{cert.issuer}</div>
                  </div>
                  {cert.year && (
                    <div className="text-[13px] text-ink-soft shrink-0">{cert.year}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* ===== FOOTER (Play Store style) ===== */}
      <footer className="border-t border-[#e8eaed] mt-8">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
            <a href="https://github.com/SANJAY-SPK" target="_blank" rel="noopener noreferrer" className="text-[13px] text-ink-soft hover:text-ink-main transition-colors font-medium">GitHub</a>
            <a href="https://www.linkedin.com/in/sanjays2261" target="_blank" rel="noopener noreferrer" className="text-[13px] text-ink-soft hover:text-ink-main transition-colors font-medium">LinkedIn</a>
            <a href="mailto:sanjaysivakumar2261@gmail.com" className="text-[13px] text-ink-soft hover:text-ink-main transition-colors font-medium">Email</a>
            <a href="#" className="text-[13px] text-ink-soft hover:text-ink-main transition-colors font-medium">Resume (PDF)</a>
          </div>
          <p className="text-[12px] text-ink-soft">© {new Date().getFullYear()} Sanjay S · Portfolio</p>
        </div>
      </footer>
    </div>
  );
}
