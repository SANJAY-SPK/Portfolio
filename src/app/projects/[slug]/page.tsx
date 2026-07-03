import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find(p => p.id === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* ===== TOP NAV BAR ===== */}
      <header className="sticky top-0 z-50 bg-white">
        <div className="flex items-center h-16 px-4 md:px-6 max-w-[1440px] mx-auto">
          {/* Back Arrow */}
          <Link href="/" className="w-10 h-10 rounded-full hover:bg-[#f1f3f4] flex items-center justify-center transition-colors mr-2 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="#5F6368"/>
            </svg>
          </Link>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0 mr-6">
            <span className="text-[22px] text-ink-soft hidden md:block" style={{ fontFamily: "'Google Sans', sans-serif", fontWeight: 400 }}>
              Sanjay Portfolio
            </span>
          </Link>
          
        </div>
      </header>

      {/* ===== APP DETAIL CONTENT ===== */}
      <main className="max-w-[920px] mx-auto px-4 md:px-6 pt-6 pb-20">

        {/* App Header */}
        <div className="flex gap-5 md:gap-8 items-start mb-6">
          <div 
            className="w-[72px] h-[72px] md:w-[180px] md:h-[180px] rounded-[20px] md:rounded-[28px] flex items-center justify-center text-4xl md:text-8xl text-white shrink-0 shadow-[0_1px_2px_rgba(60,64,67,0.3),0_1px_3px_1px_rgba(60,64,67,0.15)]"
            style={{ backgroundColor: project.color }}
          >
            {project.icon}
          </div>
          
          <div className="flex-1 min-w-0 pt-0 md:pt-2">
            <h1 className="text-xl md:text-[34px] font-medium text-ink-main leading-tight mb-1 md:mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>
              {project.name}
            </h1>
            <p className="text-[14px] md:text-[16px] text-green-primary font-medium mb-1 md:mb-4">
              {project.role}
            </p>
            
            {/* Star rating line (Play Store style) */}
            <div className="hidden md:flex items-center gap-1 text-[14px] text-ink-soft mb-6">
              <span>{project.category === 'mobile' ? 'Mobile' : project.category === 'fullstack' ? 'Full-stack' : 'Project'}</span>
            </div>

            {/* Primary CTA Button (desktop) */}
            <div className="hidden md:block">
              {project.liveUrl ? (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#01875F] hover:bg-[#016B4B] text-white rounded-lg px-8 py-2.5 text-[14px] font-medium transition-colors shadow-sm">
                  Visit Website
                </a>
              ) : project.githubUrl ? (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#01875F] hover:bg-[#016B4B] text-white rounded-lg px-8 py-2.5 text-[14px] font-medium transition-colors shadow-sm">
                  View Source Code
                </a>
              ) : null}
            </div>
          </div>
        </div>

        {/* Primary CTA Button (mobile) */}
        <div className="md:hidden mb-6 flex flex-col gap-3">
          {project.liveUrl ? (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#01875F] hover:bg-[#016B4B] text-white rounded-lg py-2.5 text-[14px] font-medium transition-colors shadow-sm">
              Visit Website
            </a>
          ) : project.githubUrl ? (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="w-full text-center bg-[#01875F] hover:bg-[#016B4B] text-white rounded-lg py-2.5 text-[14px] font-medium transition-colors shadow-sm">
              View Source Code
            </a>
          ) : null}
        </div>

        {/* Stats Row (like Play Store: rating, downloads, etc.) */}
        <div className="flex items-center justify-around md:justify-start md:gap-12 py-4 border-y border-[#e8eaed] mb-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1">
              <span className="text-[15px] font-medium text-ink-main">
                {project.rating !== null ? project.rating.toFixed(1) : '—'}
              </span>
              <span className="text-[13px] text-ink-soft">★</span>
            </div>
            <div className="text-[12px] text-ink-soft mt-0.5">{project.rating !== null ? 'Rating' : 'No rating'}</div>
          </div>

          <div className="w-px h-6 bg-[#e8eaed] hidden md:block"></div>

          <div className="text-center md:text-left">
            <div className="text-[15px] font-medium text-ink-main">{project.status}</div>
            <div className="text-[12px] text-ink-soft mt-0.5">Status</div>
          </div>

          <div className="w-px h-6 bg-[#e8eaed] hidden md:block"></div>

          <div className="text-center md:text-left">
            <div className="text-[15px] font-medium text-ink-main">{project.stack.length}</div>
            <div className="text-[12px] text-ink-soft mt-0.5">Technologies</div>
          </div>

          <div className="w-px h-6 bg-[#e8eaed] hidden md:block"></div>

          <div className="text-center md:text-left">
            <div className="text-[15px] font-medium text-ink-main">{project.stack[0]}</div>
            <div className="text-[12px] text-ink-soft mt-0.5">Primary</div>
          </div>
        </div>

        {/* Featured Achievement Banner */}
        {project.featured && project.publicationNote && (
          <div className="mb-6 bg-[#f0fdf4] rounded-xl p-4 flex items-center gap-3 border border-[#01875F]/10">
            <span className="text-xl">🏆</span>
            <div>
              <div className="text-[13px] font-medium text-ink-main">Featured Achievement</div>
              <div className="text-[13px] text-ink-soft">{project.publicationNote}</div>
            </div>
          </div>
        )}

        {/* Organization & GitHub Banner */}
        {(project.organization || project.githubUrl) && (
          <div className="mb-6 flex flex-col sm:flex-row gap-3">
            {project.organization && (
              <div className="flex-1 bg-[#f8f9fa] rounded-xl p-4 flex items-center gap-3 border border-[#e8eaed]">
                <div>
                  <div className="text-[12px] text-ink-soft">Organization</div>
                  <div className="text-[14px] font-medium text-ink-main">{project.organization}</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Screenshots Row */}
        {project.screenshots && project.screenshots.length > 0 ? (
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 mb-6 snap-x">
            {project.screenshots.map((src, i) => (
              <div key={i} className="shrink-0 w-[240px] md:w-[320px] rounded-[12px] overflow-hidden border border-[#e8eaed] snap-center bg-[#f8f9fa]">
                <Image
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  width={640}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority={i < 2}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 mb-6 snap-x">
            {[1, 2, 3].map((s) => (
              <div key={s} className="shrink-0 w-[200px] h-[355px] rounded-[12px] bg-[#f1f3f4] flex flex-col items-center justify-center text-ink-soft text-[12px] text-center p-4 border border-[#e8eaed] snap-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mb-3 opacity-40">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
                <span className="px-2 leading-relaxed">Screenshot {s}</span>
              </div>
            ))}
          </div>
        )}

        {/* About this app */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[16px] font-medium text-ink-main" style={{ fontFamily: "'Google Sans', sans-serif" }}>About this app</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#5F6368"/>
            </svg>
          </div>
          <p className="text-[14px] text-ink-soft leading-relaxed">
            {project.about}
          </p>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.stack.map(tech => (
              <span key={tech} className="text-[12px] text-ink-soft border border-[#e8eaed] rounded-full px-3 py-1.5">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Detailed Sections */}
        {project.sections && project.sections.length > 0 && (
          <section className="mb-8 space-y-10">
            {project.sections.map((section, idx) => (
              <div key={idx}>
                {/* Real images */}
                {section.images && section.images.length > 0 ? (
                  <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-3 mb-4 snap-x">
                    {section.images.map((img, imgIdx) => (
                      <div key={imgIdx} className="shrink-0 w-[280px] md:w-[420px] rounded-xl overflow-hidden border border-[#e8eaed] bg-[#f8f9fa] snap-center">
                        <Image
                          src={img}
                          alt={`${section.title} - image ${imgIdx + 1}`}
                          width={840}
                          height={525}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : section.imagePlaceholder ? (
                  <div className="w-full h-[180px] md:h-[260px] bg-[#f8f9fa] border border-dashed border-[#dadce0] rounded-xl flex items-center justify-center text-ink-soft text-[13px] mb-4 px-4 text-center">
                    <div className="flex flex-col items-center gap-2 opacity-60">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                      {section.imagePlaceholder}
                    </div>
                  </div>
                ) : null}
                <h3 className="text-[15px] font-medium text-ink-main mb-2" style={{ fontFamily: "'Google Sans', sans-serif" }}>{section.title}</h3>
                <p className="text-[14px] text-ink-soft leading-relaxed whitespace-pre-wrap">
                  {section.content}
                </p>
              </div>
            ))}
          </section>
        )}

        {/* Data safety style tech stack */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-[16px] font-medium text-ink-main" style={{ fontFamily: "'Google Sans', sans-serif" }}>Data safety</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" fill="#5F6368"/>
            </svg>
          </div>
          <p className="text-[13px] text-ink-soft mb-4">Here&apos;s a breakdown of the technologies used to build this application.</p>
          <div className="border border-[#e8eaed] rounded-xl divide-y divide-[#e8eaed]">
            {project.stack.map((tech, index) => (
              <div key={index} className="flex gap-4 items-center px-5 py-3.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#01875F"/>
                </svg>
                <div className="text-[14px] text-ink-main">{tech}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
