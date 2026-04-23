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

      <div className="project-detail-intro">
        <div className="project-detail-intro-grid">
          <div>
            <Link href="/work" style={{
              display: 'inline-block', fontSize: '11px',
              letterSpacing: '0.25em', color: '#FFFFFF',
              textDecoration: 'none', marginBottom: '40px',
            }}>
              ← BACK TO WORK
            </Link>
            <div style={{
              fontSize: '12px', letterSpacing: '0.35em',
              color: '#1a499d', marginBottom: '20px', fontWeight: 500,
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
            {project.contribution && (
              <div style={{
                display: 'inline-block',
                fontSize: '13px',
                color: '#FFFFFF',
                fontWeight: 600,
                marginTop: '6px',
              }}>
                {project.contribution}
              </div>
            )}
          </div>

          <div className="project-overview-panel">
            <div style={{
              fontSize: '12px', letterSpacing: '0.35em',
              color: '#1a499d', marginBottom: '12px', fontWeight: 500,
            }}>
              PROJECT OVERVIEW
            </div>
            <p style={{
              fontSize: '15px',
              color: '#FFFFFF',
              lineHeight: 1.8,
              fontWeight: 300,
              whiteSpace: 'pre-line',
              margin: 0,
            }}>
              {project.description}
            </p>
          </div>
        </div>

        {project.detail && (
          <div className="project-detail-body-grid">
            <div />
            <div className="project-detail-body">
              <p style={{
                fontSize: '15px',
                color: '#FFFFFF',
                lineHeight: 1.95,
                fontWeight: 300,
                whiteSpace: 'pre-line',
                margin: 0,
              }}>
                {project.detail}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="project-detail-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      display: 'inline-block',
                      fontSize: '11px',
                      letterSpacing: '0.2em',
                      color: '#FFFFFF',
                      border: '0.5px solid #2A2A2A',
                      padding: '6px 12px',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
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
