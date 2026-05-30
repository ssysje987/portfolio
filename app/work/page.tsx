'use client';

import Link from 'next/link';
import ImageWithFallback from '@/components/ImageWithFallback';
import { getSpaceProjects, getVmdProjects } from '@/lib/projects';

export default function WorkPage() {
  const spatialDesignProjects = [...getSpaceProjects(), ...getVmdProjects()];

  return (
    <div className='bg-background text-body'>
      <header className='pt-20 px-20 pb-12 border-b border-border'>
        <p className='text-[12px] tracking-[0.35em] text-accent'>WORK</p>
        <h1 className='text-5xl font-medium text-white mt-2'>ALL PROJECTS</h1>
      </header>
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
