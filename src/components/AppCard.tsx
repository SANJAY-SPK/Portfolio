import Link from 'next/link';
import { Project } from '@/lib/projects';

export default function AppCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.id}`} className="block group">
      <div className="flex flex-col gap-2 p-2 rounded-xl transition-all group-hover:bg-gray-50 h-full">
        <div 
          className="w-full aspect-square rounded-[22px] flex items-center justify-center text-4xl text-white shadow-[0_1px_4px_rgba(0,0,0,0.15)] overflow-hidden"
          style={{ backgroundColor: project.color }}
        >
          {project.icon}
        </div>
        
        <div className="mt-1 px-1">
          <h3 className="font-display font-medium text-[14px] text-ink-main m-0 leading-tight line-clamp-1">{project.name}</h3>
          <p className="text-[12px] text-ink-soft m-0 mt-0.5 line-clamp-1">{project.role}</p>
          
          <div className="flex items-center gap-1 mt-1">
            {project.rating === null ? (
              <span className="text-[12px] text-ink-soft italic">No rating</span>
            ) : (
              <>
                <span className="text-[12px] text-ink-soft font-medium">{project.rating.toFixed(1)}</span>
                <span className="text-[10px] text-ink-soft">★</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
