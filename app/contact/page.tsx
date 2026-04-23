export const metadata = {
  title: 'CONTACT — SONG SEYOUNG',
}

export default function ContactPage() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh', color: '#FFFFFF' }}>
      <div style={{ padding: '80px 80px 64px', borderBottom: '0.5px solid #2A2A2A' }}>
        <div style={{
          fontSize: '12px', letterSpacing: '0.35em',
          color: '#1E2B7A', marginBottom: '24px', fontWeight: 500,
        }}>
          CONTACT
        </div>
        <h1 style={{ fontSize: '52px', fontWeight: 600, lineHeight: 1, marginBottom: '24px' }}>
          GET IN TOUCH
        </h1>
        <div style={{ width: '48px', height: '1px', background: '#1E2B7A' }} />
      </div>
      <div style={{ padding: '80px' }}>
        <p style={{
          fontSize: '16px', color: '#8A8A8A', lineHeight: 1.9,
          fontWeight: 300, marginBottom: '64px', maxWidth: '480px',
        }}>
          공간 디자인 · VMD · 브랜드 공간 기획 관련 문의는
          아래 연락처로 연락해주세요.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div>
            <div style={{
              fontSize: '11px', letterSpacing: '0.3em',
              color: '#4A4A4A', marginBottom: '12px', fontWeight: 500,
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
              color: '#4A4A4A', marginBottom: '12px', fontWeight: 500,
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
