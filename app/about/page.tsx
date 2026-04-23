export const metadata = {
  title: 'ABOUT — SONG SEYOUNG',
  description: '리테일 경험을 바탕으로 브랜드 공간을 설계하는 공간 디자이너 송세영',
}

export default function AboutPage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFFFFF' }}>

      <div style={{ padding: '80px 80px 64px', borderBottom: '0.5px solid #2A2A2A' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#1E2B7A', marginBottom: '24px', fontWeight: 500,
        }}>
          ABOUT ME
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: 600, lineHeight: 1, marginBottom: '24px' }}>
          ABOUT ME
        </h1>
        <div style={{ width: '48px', height: '1px', background: '#1E2B7A' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        padding: '80px',
        borderBottom: '0.5px solid #2A2A2A',
        gap: '0',
      }}>
        <div style={{ paddingRight: '64px' }}>
          <div style={{
            width: '100px', height: '130px',
            background: '#141414',
            border: '0.5px solid #2A2A2A',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#2A2A2A' }}>
              PHOTO
            </span>
          </div>
          <div style={{
            fontSize: '16px', fontWeight: 500,
            letterSpacing: '0.25em', marginBottom: '12px',
          }}>
            SONG SEYOUNG
          </div>
          <div style={{ width: '30px', height: '1px', background: '#1E2B7A', marginBottom: '12px' }} />
          <div style={{ fontSize: '12px', color: '#8A8A8A', letterSpacing: '0.15em' }}>
            송세영
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '22px', fontWeight: 500, lineHeight: 1.4, marginBottom: '24px' }}>
            리테일 경험을 바탕으로 브랜드 공간을 설계하는{' '}
            <span style={{ color: '#A5B4FC' }}>공간 디자이너</span>
          </h2>
          <div style={{ width: '40px', height: '1px', background: '#1E2B7A', marginBottom: '24px' }} />
          <p style={{
            fontSize: '14px', color: '#8A8A8A',
            lineHeight: 1.9, fontWeight: 300, marginBottom: '24px',
          }}>
            약 7년간 상업 VMD로 근무하며 SI 인테리어와 VM을 담당했습니다.
            그 과정에서 진열대·집기·동선이 곧 공간이라는 사실을 배웠고,
            상품이 놓이기 이전의 환경 — 공간 자체를 설계하는 일로 영역을 확장하려 합니다.
          </p>
          <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: 1.9, fontWeight: 400 }}>
            NODE는 VMD에서 쌓은 리테일 감각과 공간 디자인이
            처음 하나의 결절점에서 만난 프로젝트입니다.
          </p>
        </div>
      </div>

      <div style={{ padding: '80px', borderBottom: '0.5px solid #2A2A2A' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#1E2B7A', marginBottom: '48px', fontWeight: 500,
        }}>
          CAREER
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {[
            {
              company: '(주)한성에프아이',
              role: '대리 · VM·인테리어 담당',
              period: '2022.05 — 2026.01 · 3년 8개월',
            },
            {
              company: '(주)마미버드',
              role: '주임 · VM·인테리어 담당',
              period: '2017.09 — 2021.01 · 3년 4개월',
            },
            {
              company: '(주)지오다노',
              role: '인턴 · VMD',
              period: '2016.12 — 2017.03 · 4개월',
            },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              padding: '24px 0',
              borderBottom: '0.5px solid #2A2A2A',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF' }}>
                {item.company}
              </div>
              <div style={{ fontSize: '13px', color: '#8A8A8A', fontWeight: 300 }}>
                {item.role}
              </div>
              <div style={{ fontSize: '12px', color: '#4A4A4A', letterSpacing: '0.05em', textAlign: 'right' }}>
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '80px', borderBottom: '0.5px solid #2A2A2A' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#1E2B7A', marginBottom: '48px', fontWeight: 500,
        }}>
          SKILL
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop', 'Illustrator', 'InDesign'].map((skill) => (
            <span key={skill} style={{
              fontSize: '12px', letterSpacing: '0.2em',
              color: '#8A8A8A', border: '0.5px solid #2A2A2A',
              padding: '8px 16px',
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div style={{ padding: '80px' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#1E2B7A', marginBottom: '48px', fontWeight: 500,
        }}>
          CONTACT
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <a href="tel:01024453683" style={{
            fontSize: '28px', color: '#FFFFFF',
            textDecoration: 'none', letterSpacing: '0.05em', fontWeight: 300,
          }}>
            010.2445.3683
          </a>
          <a href="mailto:ssysje987@gmail.com" style={{
            fontSize: '28px', color: '#FFFFFF',
            textDecoration: 'none', letterSpacing: '0.05em', fontWeight: 300,
          }}>
            ssysje987@gmail.com
          </a>
        </div>
      </div>

    </div>
  )
}
