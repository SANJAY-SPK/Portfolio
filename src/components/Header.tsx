export default function Header() {
  return (
    <div className="mb-6">
      {/* Play Store Dev Profile Style */}
      <div className="w-full h-32 md:h-48 bg-gradient-to-r from-green-primary to-green-dark rounded-t-[14px]"></div>
      
      <div className="px-4 md:px-8 relative -mt-10 md:-mt-12 mb-6">
        <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full p-1 shadow-md">
          <div className="w-full h-full bg-green-light rounded-full flex items-center justify-center text-green-dark font-display font-bold text-3xl">
            S
          </div>
        </div>
        
        <div className="mt-4">
          <h1 className="text-2xl md:text-3xl font-display font-medium text-ink-main mb-1">
            Sanjay S
          </h1>
          <p className="text-[14px] text-green-primary font-medium mb-3">Application Developer</p>
          <p className="text-[14px] text-ink-soft max-w-2xl leading-relaxed">
            React Native & Spring Boot developer — currently building TUGO EATS at Entugo (UK), published IEEE researcher. B.E ECE (2025).
          </p>
        </div>
      </div>

      <div className="px-4 md:px-8">
        <div className="border border-border-main rounded-xl p-5">
          <h2 className="font-display font-medium text-[16px] text-ink-main mb-3">Experience</h2>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-1 mb-2">
            <div>
              <h3 className="font-medium text-[15px] text-ink-main">Entugo (UK) — Remote</h3>
              <p className="text-[14px] text-ink-soft">Application Developer Intern</p>
            </div>
            <div className="text-[13px] text-ink-soft">
              Sep 2025 – Present
            </div>
          </div>
          <ul className="space-y-2 m-0 p-0 list-none mt-3">
            <li className="text-[14px] text-ink-main leading-relaxed flex gap-3 items-start">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green-primary mt-2"></span>
              <span>Worked on key modules of TUGO EATS as part of the Entugo team, focusing on consistent UI behavior and smooth navigation flow across Android and iOS.</span>
            </li>
            <li className="text-[14px] text-ink-main leading-relaxed flex gap-3 items-start">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green-primary mt-2"></span>
              <span>Performed feature testing, bug identification, and fixes to improve application stability and user experience.</span>
            </li>
            <li className="text-[14px] text-ink-main leading-relaxed flex gap-3 items-start">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-green-primary mt-2"></span>
              <span>Collaborated with backend and design teams to integrate REST APIs and ensure end-to-end feature correctness across mobile workflows.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
