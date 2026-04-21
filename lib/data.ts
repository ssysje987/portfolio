export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "상업공간" | "VMD";
  year: string;
  client: string;
  description: string;
  concept: string;
  tags: string[];
  featured: boolean;
  size: "large" | "small";
  accentColor?: string;
}

export const projects: Project[] = [
  {
    slug: "node",
    title: "NODE",
    subtitle: "공간과 브랜드의 교차점",
    category: "상업공간",
    year: "2024",
    client: "NODE Seoul",
    description:
      "도시 속 복합문화공간 NODE의 공간 디자인. 브랜드 아이덴티티를 물리적 공간으로 번역하는 작업으로, 빛과 소재의 레이어링을 통해 다층적인 경험을 구성했습니다.",
    concept:
      "NODE는 연결이라는 개념을 공간적으로 해석합니다. 동선의 교차, 시선의 연결, 소재의 조합—모든 요소가 하나의 유기적인 네트워크를 형성합니다.",
    tags: ["공간 디자인", "브랜딩", "인테리어", "조명 계획"],
    featured: true,
    size: "large",
    accentColor: "#A5B4FC",
  },
  {
    slug: "maison-k",
    title: "MAISON K",
    subtitle: "럭셔리 플래그십 스토어",
    category: "상업공간",
    year: "2024",
    client: "Maison K",
    description:
      "패션 브랜드 Maison K의 플래그십 스토어. 브랜드의 절제된 미학을 공간 언어로 전환했습니다.",
    concept:
      "최소한의 요소로 최대한의 인상을 만드는 것. 비움을 통해 제품이 돋보이는 공간을 설계했습니다.",
    tags: ["리테일 디자인", "플래그십", "공간 브랜딩"],
    featured: false,
    size: "small",
  },
  {
    slug: "arc-vmd",
    title: "ARC VMD",
    subtitle: "시즌 VM 디렉션",
    category: "VMD",
    year: "2024",
    client: "ARC Studio",
    description:
      "아크 스튜디오의 F/W 시즌 VMD 프로젝트. 쇼윈도우부터 매장 내부 디스플레이까지 통합적 VM 전략을 수립했습니다.",
    concept:
      "계절의 전환을 시각적 내러티브로 표현. 소재의 질감과 레이어링으로 시즌의 무게감을 담았습니다.",
    tags: ["VMD", "쇼윈도우", "디스플레이", "시즌 기획"],
    featured: false,
    size: "small",
  },
  {
    slug: "oblique",
    title: "OBLIQUE",
    subtitle: "복합문화공간 리뉴얼",
    category: "상업공간",
    year: "2023",
    client: "Oblique Group",
    description:
      "성수동 복합문화공간 Oblique의 리뉴얼 프로젝트. F&B와 리테일이 공존하는 공간의 새로운 정체성을 수립했습니다.",
    concept:
      "비스듬한 시선. 정면이 아닌 비틀린 각도에서 바라보는 공간 경험을 설계했습니다.",
    tags: ["공간 리뉴얼", "복합공간", "브랜딩"],
    featured: false,
    size: "large",
  },
  {
    slug: "forma-vmd",
    title: "FORMA VMD",
    subtitle: "연간 VM 프로그램",
    category: "VMD",
    year: "2023",
    client: "Forma Brand",
    description:
      "포르마 브랜드의 연간 VMD 프로그램 수립. 4시즌 연속성 있는 VM 아이덴티티를 구축했습니다.",
    concept:
      "형태의 반복과 변주. 동일한 구조적 언어를 유지하면서도 시즌마다 새로운 표정을 갖도록 설계했습니다.",
    tags: ["연간 VMD", "VM 전략", "디스플레이 시스템"],
    featured: false,
    size: "small",
  },
  {
    slug: "studio-blanc",
    title: "STUDIO BLANC",
    subtitle: "웨딩 스튜디오 공간 설계",
    category: "상업공간",
    year: "2023",
    client: "Studio Blanc",
    description:
      "웨딩 전문 스튜디오의 공간 설계. 촬영 효율과 고객 경험을 동시에 고려한 다기능 공간을 구성했습니다.",
    concept:
      "백색의 다양한 층위. 빛의 방향과 소재의 마감에 따라 변화하는 흰색의 스펙트럼으로 공간을 채웠습니다.",
    tags: ["스튜디오 설계", "조명 계획", "인테리어"],
    featured: false,
    size: "small",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = projects.findIndex((p) => p.slug === slug);
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
