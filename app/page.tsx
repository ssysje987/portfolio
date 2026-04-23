export default function Home() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFFFFF' }}>

      <section style={{
        position: 'relative',
        minHeight: 'calc(100vh - 73px)',
        overflow: 'hidden',
        borderBottom: '0.5px solid #2A2A2A',
        padding: '72px 80px 64px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: '112% auto',
          backgroundPosition: '78% center',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.86) 30%, rgba(10,10,10,0.42) 58%, rgba(10,10,10,0.08) 100%)',
          zIndex: 1,
        }} />
        <div style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 'calc(100vh - 209px)',
        }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#A5B4FC', marginBottom: '24px', fontWeight: 500,
        }}>
          ABOUT ME
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: 600, lineHeight: 1, marginBottom: '24px' }}>
          ABOUT ME
        </h1>
        <div style={{ width: '48px', height: '1px', background: '#A5B4FC', marginBottom: '72px' }} />

        <div style={{
          maxWidth: '760px',
          marginTop: 'auto',
        }}>
          <div style={{
            width: '100px', height: '130px',
            background: '#141414',
            backgroundImage: 'url("/images/profile.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            border: '0.5px solid #2A2A2A',
            marginBottom: '24px',
            borderRadius: '8px',
          }} />
          <div style={{
            fontSize: '16px', fontWeight: 500,
            letterSpacing: '0.25em', marginBottom: '12px',
          }}>
            SONG SEYOUNG
          </div>
          <div style={{ width: '30px', height: '1px', background: '#A5B4FC', marginBottom: '12px' }} />
          <div style={{ fontSize: '12px', color: '#FFFFFF', letterSpacing: '0.15em' }}>
            송세영
          </div>

          <h2 style={{
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: 1.2,
            marginTop: '64px',
            marginBottom: '32px',
            letterSpacing: '0.02em',
          }}>
            리테일 경험을 바탕으로<br />
            브랜드 공간을 설계하는 <span style={{ color: '#A5B4FC' }}>공간 디자이너</span>
          </h2>
          <p style={{
            fontSize: '14px',
            color: '#FFFFFF',
            lineHeight: 2,
            fontWeight: 300,
            marginBottom: '18px',
            maxWidth: '720px',
          }}>
            약 7년간 상업 VMD로 일하며 SI 인테리어와 VM을 함께 담당했습니다.<br />
            브랜드의 가치와 전략은 공간의 구조와 동선, 집기와 재료 등 공간 디자인을 통해<br />
            고객이 체감하는 경험으로 완성된다고 믿습니다.<br />
            이제는 상품을 담는 환경을 넘어 공간 자체를 설계하는 디자이너로 확장하고자 합니다.
          </p>
          <p style={{
            fontSize: '14px',
            color: '#FFFFFF',
            lineHeight: 2,
            fontWeight: 500,
            maxWidth: '720px',
          }}>
            VMD와 인테리어가 만나는 지점, 그 연결점으로서의 공간. 저에게 그것이 NODE입니다.
          </p>
        </div>
        </div>
      </section>

      <div style={{ padding: '80px', borderBottom: '0.5px solid #2A2A2A' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#A5B4FC', marginBottom: '48px', fontWeight: 500,
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
              <div style={{ fontSize: '13px', color: '#FFFFFF', fontWeight: 300 }}>
                {item.role}
              </div>
              <div style={{ fontSize: '12px', color: '#FFFFFF', letterSpacing: '0.05em', textAlign: 'right' }}>
                {item.period}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '80px', borderBottom: '0.5px solid #2A2A2A' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#A5B4FC', marginBottom: '48px', fontWeight: 500,
        }}>
          SKILL
        </div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['AutoCAD', 'SketchUp', 'Enscape', 'Photoshop', 'Illustrator'].map((skill) => (
            <span key={skill} style={{
              fontSize: '12px', letterSpacing: '0.2em',
              color: '#FFFFFF', border: '0.5px solid #2A2A2A',
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
          color: '#A5B4FC', marginBottom: '48px', fontWeight: 500,
        }}>
          CONTACT
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <div style={{
              fontSize: '11px', letterSpacing: '0.3em',
              color: '#FFFFFF', marginBottom: '12px', fontWeight: 500,
            }}>
              PHONE
            </div>
            <a href="tel:01024453683" style={{
              fontSize: '28px', color: '#FFFFFF',
              textDecoration: 'none', letterSpacing: '0.05em', fontWeight: 300,
            }}>
              010.2445.3683
            </a>
          </div>
          <div style={{ width: '100%', height: '0.5px', background: '#2A2A2A' }} />
          <div>
            <div style={{
              fontSize: '11px', letterSpacing: '0.3em',
              color: '#FFFFFF', marginBottom: '12px', fontWeight: 500,
            }}>
              EMAIL
            </div>
            <a href="mailto:ssysje987@gmail.com" style={{
              fontSize: '28px', color: '#FFFFFF',
              textDecoration: 'none', letterSpacing: '0.05em', fontWeight: 300,
            }}>
              ssysje987@gmail.com
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}
