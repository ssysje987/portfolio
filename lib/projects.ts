export type Project = {
  slug: string;
  title: string;
  titleKo: string;
  year: number;
  category: 'featured' | 'space' | 'vmd';
  label: string;
  description: string;
  thumbnail: string;
  images: string[];
  tags?: string[];
};

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
    thumbnail: '/images/ceramist-main.jpg',
    images: [],
  },
  {
    slug: 'atpco',
    title: 'AT.P.CO',
    titleKo: 'AT.P.CO',
    year: 2023,
    category: 'space',
    label: 'VMD · SI INTERIOR',
    description: 'VP 연출 · 쇼룸 기획',
    thumbnail: '/images/atpco-main.jpg',
    images: [],
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
    images: [],
  },
  {
    slug: 'sease',
    title: 'SEASE',
    titleKo: 'SEASE',
    year: 2023,
    category: 'vmd',
    label: 'VMD · DISPLAY',
    description: '쇼룸 연출',
    thumbnail: '/images/sease-main.jpg',
    images: [],
  },
  {
    slug: 'allforyou-lady',
    title: '올포유 LADY',
    titleKo: '올포유 LADY',
    year: 2023,
    category: 'vmd',
    label: 'VMD',
    description: '시즌 VMD 기획·연출',
    thumbnail: '/images/allforyou-lady-main.jpg',
    images: [],
  },
  {
    slug: 'pop-up',
    title: 'POP UP',
    titleKo: 'POP UP',
    year: 2023,
    category: 'vmd',
    label: 'VMD · POP-UP',
    description: '팝업 스토어 기획·연출',
    thumbnail: '/images/popup-main.jpg',
    images: [],
  },
  {
    slug: 'atpco-vp',
    title: 'AT.P.CO VP연출',
    titleKo: 'AT.P.CO VP연출',
    year: 2022,
    category: 'vmd',
    label: 'VMD · VP',
    description: 'VP 공간 연출',
    thumbnail: '/images/atpco-vp-main.jpg',
    images: [],
  },
  {
    slug: 'the-open-showroom',
    title: 'THE OPEN 쇼룸 연출',
    titleKo: 'THE OPEN 쇼룸 연출',
    year: 2022,
    category: 'vmd',
    label: 'VMD · SHOWROOM',
    description: '쇼룸 공간 연출',
    thumbnail: '/images/the-open-showroom-main.jpg',
    images: [],
  },
  {
    slug: 'allforyou-showroom',
    title: '올포유 쇼룸 연출',
    titleKo: '올포유 쇼룸 연출',
    year: 2022,
    category: 'vmd',
    label: 'VMD · SHOWROOM',
    description: '쇼룸 공간 연출',
    thumbnail: '/images/allforyou-showroom-main.jpg',
    images: [],
  },
  {
    slug: 'oneill-showroom',
    title: '오닐 쇼룸 연출',
    titleKo: '오닐 쇼룸 연출',
    year: 2022,
    category: 'vmd',
    label: 'VMD · SHOWROOM',
    description: '쇼룸 공간 연출',
    thumbnail: '/images/oneill-showroom-main.jpg',
    images: [],
  },
  {
    slug: 'margiela-window',
    title: '마르지엘라 윈도우 디스플레이',
    titleKo: '마르지엘라 윈도우',
    year: 2021,
    category: 'vmd',
    label: 'VMD · WINDOW',
    description: '윈도우 디스플레이',
    thumbnail: '/images/margiela-main.jpg',
    images: [],
  },
  {
    slug: 'cos-window',
    title: 'COS 윈도우 디스플레이',
    titleKo: 'COS 윈도우',
    year: 2020,
    category: 'vmd',
    label: 'VMD · WINDOW',
    description: '윈도우 디스플레이',
    thumbnail: '/images/cos-main.jpg',
    images: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProject(): Project | undefined {
  return projects.find((p) => p.category === 'featured');
}

export function getSpaceProjects(): Project[] {
  return projects.filter((p) => p.category === 'space');
}

export function getVmdProjects(): Project[] {
  return projects.filter((p) => p.category === 'vmd');
}
