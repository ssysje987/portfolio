'use client';
import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';
import { getFeaturedProject, getSpaceProjects, getVmdProjects } from '@/lib/projects';

export default function WorkPage() {
  const featured = getFeaturedProject();
  const spaceProjects = getSpaceProjects();
  const vmdProjects = getVmdProjects();
  const spatialDesignProjects = [...spaceProjects, ...vmdProjects];
  return (
    <div className='bg-background text-body'>
      <header className='pt-20 px-20 pb-12 border-b border-border'>
        <p className='text-[12px] tracking-[0.35em] text-accent'>WORK</p>
        <h1 className='text-5xl font-medium text-white mt-2'>ALL PROJECTS</h1>
      </header>
      <section className='px-20 py-16 border-b border-border'>
        {featured && (
          <div className='grid md:grid-cols-5 gap-0'>
            <div className='md:col-span-3'>
              <Link href={'/work/' + featured.slug}>
                <ImageWithFallback
                  src={featured.thumbnail}
                  alt={featured.title}
                  width={1280}
                  height={800}
                  className='w-full h-full object-cover aspect-[16/10]'
                />
              </Link>
            </div>
            <div className='md:col-span-2 border-l border-border p-10 flex flex-col'>
              <p className='text-[11px] text-muted tracking-[0.3em] uppercase mb-2'>
                {featured.label}
              </p>
              <h2 className='text-3xl font-semibold text-white mb-2'>{featured.title}</h2>
              <p className='text-[13px] text-accent mb-4 tracking-[0.2em]'>{featured.titleKo}</p>
              <div className='w-10 h-px bg-accent mb-4'></div>
              <p className='text-[13px] text-white leading-relaxed mb-4 whitespace-pre-line'>{featured.description}</p>
              <div className='flex flex-wrap gap-2 mb-6'>
                {featured.tags?.map((tag) => (
                  <span key={tag} className='border border-border text-[12px] text-muted px-2 py-1'>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={'/work/' + featured.slug} className='text-[11px] text-accent tracking-[0.25em] uppercase'>
                VIEW PROJECT →
              </Link>
            </div>
          </div>
        )}
      </section>
      <section className='px-20 py-16'>
        <div className='flex items-baseline justify-between mb-6'>
          <p className='text-[12px] tracking-[0.3em] text-accent'>SPATIAL DESIGN</p>
        </div>
        <div className='grid md:grid-cols-3 border border-border'>
          {spatialDesignProjects.map((p) => (
            <Link href={'/work/' + p.slug} key={p.slug} className='border-r border-b border-border last:border-r-0 hover:border-accent hover:bg-[#141414] flex flex-col'>
              <ImageWithFallback
                src={p.thumbnail}
                alt={p.title}
                width={600}
                height={400}
                className='w-full object-cover aspect-[4/3]'
              />
              <div className='p-5 flex-1 flex flex-col'>
                <p className='text-[10px] text-muted tracking-[0.3em] uppercase mb-1'>{p.label}</p>
                <h3 className='text-[14px] font-medium text-white mb-1'>{p.title}</h3>
                <p className='text-[11px] text-white mb-4'>{p.description}</p>
                <div className='mt-auto flex justify-end items-center text-[11px] text-muted'>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
