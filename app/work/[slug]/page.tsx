import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjectBySlug, projects } from '@/lib/projects'
import ImageWithFallback from '@/components/ImageWithFallback'
import ProjectImageLightbox from '@/components/project/ProjectImageLightbox'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — SONG SEYOUNG`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const currentIndex = projects.findIndex((p) => p.slug === params.slug)
  const nextProject = projects[currentIndex + 1] ?? null

  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFFFFF' }}>

      <div style={{ padding: '80px 80px 48px', borderBottom: '0.5px solid #2A2A2A' }}>
        <Link href="/work" style={{
          display: 'inline-block', fontSize: '11px',
          letterSpacing: '0.25em', color: '#FFFFFF',
          textDecoration: 'none', marginBottom: '32px',
        }}>
          ← BACK TO WORK
        </Link>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#A5B4FC', marginBottom: '16px', fontWeight: 500,
        }}>
          {project.label}
        </div>
        <h1 style={{
          fontSize: '52px', fontWeight: 600,
          lineHeight: 1, marginBottom: '12px',
        }}>
          {project.title}
        </h1>
        {project.titleKo !== project.title && (
          <div style={{ fontSize: '16px', color: '#FFFFFF', marginBottom: '8px' }}>
            {project.titleKo}
          </div>
        )}
      </div>

      <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', background: '#141414' }}>
        <ImageWithFallback
          src={project.thumbnail}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          fallbackText={project.title}
        />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: project.tags && project.tags.length > 0 ? '3fr 2fr' : '1fr',
        padding: '80px',
        borderBottom: '0.5px solid #2A2A2A',
      }}>
        <div style={{ paddingRight: project.tags && project.tags.length > 0 ? '48px' : '0' }}>
          <div style={{
            fontSize: '12px', letterSpacing: '0.35em',
            color: '#A5B4FC', marginBottom: '24px', fontWeight: 500,
          }}>
            PROJECT OVERVIEW
          </div>
          <p style={{ fontSize: '16px', color: '#FFFFFF', lineHeight: 1.9, fontWeight: 300 }}>
            {project.description}
          </p>
        </div>
        {project.tags && project.tags.length > 0 && (
          <div style={{ borderLeft: '0.5px solid #2A2A2A', paddingLeft: '48px' }}>
            <div style={{
              fontSize: '12px', letterSpacing: '0.35em',
              color: '#A5B4FC', marginBottom: '24px', fontWeight: 500,
            }}>
              DESIGN LANGUAGE
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {project.tags.map((tag) => (
                <span key={tag} style={{
                  display: 'inline-block', fontSize: '12px',
                  letterSpacing: '0.2em', color: '#FFFFFF',
                  border: '0.5px solid #2A2A2A', padding: '6px 12px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <ProjectImageLightbox images={project.images} title={project.title} />

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '48px 80px',
        borderTop: '0.5px solid #2A2A2A',
      }}>
        <Link href="/work" style={{
          fontSize: '11px', letterSpacing: '0.25em',
          color: '#FFFFFF', textDecoration: 'none',
        }}>
          ← BACK TO WORK
        </Link>
        {nextProject && (
          <Link href={`/work/${nextProject.slug}`} style={{
            fontSize: '11px', letterSpacing: '0.25em',
            color: '#FFFFFF', textDecoration: 'none', textAlign: 'right',
          }}>
            <div style={{ fontSize: '10px', marginBottom: '4px', letterSpacing: '0.2em' }}>
              NEXT PROJECT
            </div>
            <div style={{ color: '#FFFFFF' }}>{nextProject.title} →</div>
          </Link>
        )}
      </div>

    </div>
  )
}
