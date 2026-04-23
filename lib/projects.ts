export type Project = {
  slug: string
  title: string
  titleKo: string
  year: number
  category: 'featured' | 'space' | 'vmd'
  label: string
  description: string
  thumbnail: string
  images: string[]
  tags?: string[]
}

export const projects: Project[] = [
  {
    slug: 'node',
    title: 'NODE',
    titleKo: '서브컬처의 교차점',
    year: 2026,
    category: 'featured',
    label: 'COMMERCIAL INTERIOR',
    description: '스케이트 컬처 · 스트리트웨어 · 뮤직 · 카페가 하나의 결절점에서 교차하는 체류형 컬처 허브. 서울 중구 을지로3가.',
    thumbnail: '/images/node-main.jpg',
    images: [
      '/images/node-01.jpg',
      '/images/node-02.jpg',
      '/images/node-03.jpg',
      '/images/node-04.jpg',
      '/images/node-05.jpg',
    ],
    tags: ['INDUSTRIAL', 'Y2K REVIVAL', 'TACTILE OASIS'],
  },
  {
    slug: 'house-of-ceramist',
    title: '도예가의 하우스',
    titleKo: '도예가의 하우스',
    year: 2023,
    category: 'space',
    label: 'SPACE PLANNING',
    description: '공간 기획 · 연출',
    thumbnail: '/images/ceramist-main.png',
    images: [
      '/images/ceramist-01.jpg',
      '/images/ceramist-02.jpg',
      '/images/ceramist-03.jpg',
      '/images/ceramist-04.jpg',
      '/images/ceramist-05.jpg',
      '/images/ceramist-06.jpg',
      '/images/ceramist-07.jpg',
      '/images/ceramist-08.jpg',
    ],
  },
  {
    slug: 'atpco',
    title: 'AT.P.CO',
    titleKo: 'AT.P.CO',
    year: 2023,
    category: 'space',
    label: 'SI INTERIOR',
    description: 'VP 연출 · 쇼룸 기획',
    thumbnail: '/images/atpco-main.jpg',
    images: [
      '/images/atpco-01.jpg',
      '/images/atpco-02.jpg',
      '/images/atpco-03.jpg',
      '/images/atpco-04.jpg',
      '/images/atpco-05.jpg',
      '/images/atpco-06.jpg',
      '/images/atpco-07.jpg',
      '/images/atpco-08.jpg',
    ],
  },
  {
    slug: 'the-open-fixture',
    title: 'THE OPEN 집기 제작',
    titleKo: 'THE OPEN 집기 제작',
    year: 2023,
    category: 'space',
    label: 'FIXTURE DESIGN',
    description: '집기 설계 · 제작',
    thumbnail: '/images/the-open-fixture-main.jpg',
    images: [
      '/images/the-open-fixture-01.jpg',
      '/images/the-open-fixture-02.jpg',
      '/images/the-open-fixture-03.jpg',
      '/images/the-open-fixture-04.jpg',
    ],
  },
  {
    slug: 'sease',
    title: 'SEASE',
    titleKo: 'SEASE',
    year: 2023,
    category: 'space',
    label: 'SI INTERIOR',
    description: '쇼룸 연출',
    thumbnail: '/images/sease-main.jpg',
    images: [
      '/images/sease-01.jpg',
      '/images/sease-02.jpg',
      '/images/sease-03.jpg',
      '/images/sease-04.jpg',
      '/images/sease-05.jpg',
      '/images/sease-06.jpg',
    ],
  },
  {
    slug: 'allforyou-lady',
    title: '올포유 LADY',
    titleKo: '올포유 LADY',
    year: 2023,
    category: 'space',
    label: 'SI INTERIOR',
    description: '시즌 VMD 기획 · 연출',
    thumbnail: '/images/allforyou-lady-main.jpg',
    images: [
      '/images/allforyou-lady-01.jpg',
      '/images/allforyou-lady-02.jpg',
      '/images/allforyou-lady-03.jpg',
      '/images/allforyou-lady-04.jpg',
      '/images/allforyou-lady-05.jpg',
      '/images/allforyou-lady-06.jpg',
    ],
  },
  {
    slug: 'pop-up',
    title: 'AT.P.CO 팝업',
    titleKo: 'AT.P.CO 팝업',
    year: 2023,
    category: 'vmd',
    label: 'POP-UP',
    description: '팝업 스토어 기획 · 연출',
    thumbnail: '/images/popup-main.jpg',
    images: [
      '/images/popup-01.jpg',
      '/images/popup-02.jpg',
      '/images/popup-03.jpg',
    ],
  },
  {
    slug: 'atpco-vp',
    title: 'AT.P.CO VP연출',
    titleKo: 'AT.P.CO VP연출',
    year: 2022,
    category: 'vmd',
    label: 'VP',
    description: 'VP 공간 연출',
    thumbnail: '/images/atpco-vp-main.jpg',
    images: [
      '/images/atpco-vp-01.jpg',
      '/images/atpco-vp-02.jpg',
      '/images/atpco-vp-03.jpg',
      '/images/atpco-vp-04.jpg',
    ],
  },
  {
    slug: 'the-open-showroom',
    title: 'THE OPEN 쇼룸 연출',
    titleKo: 'THE OPEN 쇼룸 연출',
    year: 2022,
    category: 'vmd',
    label: 'SHOWROOM',
    description: '쇼룸 공간 연출',
    thumbnail: '/images/the-open-showroom-main.jpg',
    images: [
      '/images/the-open-showroom-01.jpg',
      '/images/the-open-showroom-02.jpg',
      '/images/the-open-showroom-03.jpg',
      '/images/the-open-showroom-04.jpg',
      '/images/the-open-showroom-05.jpg',
      '/images/the-open-showroom-06.jpg',
      '/images/the-open-showroom-07.jpg',
      '/images/the-open-showroom-08.jpg',
      '/images/the-open-showroom-09.jpg',

    ],
  },
  {
    slug: 'allforyou-showroom',
    title: '올포유 쇼룸 연출',
    titleKo: '올포유 쇼룸 연출',
    year: 2022,
    category: 'vmd',
    label: 'SHOWROOM',
    description: '쇼룸 공간 연출',
    thumbnail: '/images/allforyou-showroom-main.jpg',
    images: [
      '/images/allforyou-showroom-01.jpg',
      '/images/allforyou-showroom-02.jpg',
      '/images/allforyou-showroom-03.jpg',
      '/images/allforyou-showroom-04.jpg',
      '/images/allforyou-showroom-05.jpg',
      '/images/allforyou-showroom-06.jpg',
      '/images/allforyou-showroom-07.jpg',
      '/images/allforyou-showroom-08.jpg',
      '/images/allforyou-showroom-09.jpg',
      '/images/allforyou-showroom-10.jpg',
    ],
  },
  {
    slug: 'oneill-showroom',
    title: '오닐 쇼룸 연출',
    titleKo: '오닐 쇼룸 연출',
    year: 2022,
    category: 'vmd',
    label: 'SHOWROOM',
    description: '쇼룸 공간 연출',
    thumbnail: '/images/oneill-showroom-main.jpg',
    images: [
      '/images/oneill-showroom-01.jpg',
      '/images/oneill-showroom-02.jpg',
      '/images/oneill-showroom-03.jpg',
      '/images/oneill-showroom-04.jpg',
    ],
  },
  {
    slug: 'margiela-window',
    title: '마르지엘라 윈도우 디스플레이',
    titleKo: '마르지엘라 윈도우',
    year: 2021,
    category: 'vmd',
    label: 'WINDOW',
    description: '윈도우 디스플레이',
    thumbnail: '/images/margiela-main.jpg',
    images: [
      '/images/margiela-01.jpg',
      '/images/margiela-02.jpg',
      '/images/margiela-03.jpg',
      '/images/margiela-04.jpg',
      '/images/margiela-05.jpg',
    ],
  },
  {
    slug: 'cos-window',
    title: 'COS 윈도우 디스플레이',
    titleKo: 'COS 윈도우',
    year: 2020,
    category: 'vmd',
    label: 'WINDOW',
    description: '윈도우 디스플레이',
    thumbnail: '/images/cos-main.jpg',
    images: [
      '/images/cos-01.jpg',
      '/images/cos-02.jpg',
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug) ?? null
}

export function getFeaturedProject() {
  return projects.find((p) => p.category === 'featured') ?? null
}

export function getSpaceProjects() {
  return projects.filter((p) => p.category === 'space')
}

export function getVmdProjects() {
  return projects.filter((p) => p.category === 'vmd')
}
