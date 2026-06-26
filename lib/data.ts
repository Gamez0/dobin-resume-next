import { IProject } from '@/types';
import type { IPortfolioCase } from '@/types';

export const GENERAL_INFO = {
    email: 'dobinshin@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Dobin Shin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Gamez0' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/%EB%8F%84%EB%B9%88-%EC%8B%A0-431aab200/',
    },
    // { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'React Router',
            icon: '/logo/react-router.svg',
        },
        {
            name: 'Zustand',
            icon: '/logo/zustand.svg',
        },
        {
            name: 'React Query',
            icon: '/logo/react-query.svg',
        },
        {
            name: 'Graphql',
            icon: '/logo/graphql.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Radix UI',
            icon: '/logo/radix-ui.svg',
        },
        {
            name: 'Phaser',
            icon: '/logo/phaser.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'Analytics',
            icon: '/logo/analytics.svg',
        },
        {
            name: 'Mixpanel',
            icon: '/logo/mixpanel.svg',
        },
        {
            name: 'Sentry',
            icon: '/logo/sentry.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Java',
            icon: '/logo/java.svg',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
        // 상생패이벡
        title: '상생페이백',
        slug: 'sspb',
        liveUrl: 'https://xn--3h3bl7foc243a8lq.kr/',
        period: '2025.06 - 2025.11 (6개월)',
        description:
            '정부가 카드 소비를 촉진하고 소상공인을 지원하기 위해 시행하는 환급(페이백) 제도<br/>2024년 월평균 카드소비액과 비교해서, 2025년 9~11월 동안 카드 소비가 더 많아진 금액의 일부를 디지털 온누리상품권 형태로 돌려주는 사업',
        role: `Frontend Team Lead<br/>
        <ul>
            <li>정부 지원 소비 환급 서비스 「상생페이백」 프론트엔드 총괄</li>
            <li>오픈 첫 주, 일 평균 80만 명 신청 및 동시 수십만 명 접속 트래픽을 무중단 서비스로 안정적으로 처리</li>
            <li>React 기반 대규모 사용자 대상 서비스 개발 및 출시 (수백만 사용자 동시 접속 대응)</li>
            <li>대규모 트래픽(동시 수십만 명 접속)에 대응하기 위해 CDN·캐싱·Lazy Loading·코드 스플리팅 등 성능 최적화 전략</li>
            <li>프론트엔드 아키텍처 설계, 공통 모듈/컴포넌트 관리, 성능 최적화</li>
            <li>2025년 9월 25일 기준, 누적 신청자 837만 명 돌파</li>
        </ul>
        `,
        techStack: [
            'React Router',
            'zustand',
            'react-query',
            'Tailwind CSS',
            'shad-cn',
        ],
        thumbnail: '/projects/thumbnail/sspb.png',
        images: [
            '/projects/images/sspb-1.png',
            '/projects/images/sspb-2.png',
            '/projects/images/sspb-3.png',
        ],
    },
    {
        // 포켓로그
        title: 'PokéRogue',
        slug: 'pokerogue',
        liveUrl: 'https://pokerogue.net/',
        period: '2025.06 - 2025.07 (1개월)',
        description: `
        <ul>
            <li>오픈소스 로그라이크 게임 프로젝트. 포켓몬 컨셉을 기반으로, 무작위 던전과 전략적 전투를 결합한 브라우저 게임.</li>
            <li>게임 메커니즘과 UI 개선에 기여하며 플레이어 경험 향상과 안정성 개선에 참여.</li>
        </ul>
        <br/>
        게임 내 UI/UX 개선
        <ul>
            <li>플레이어가 새로운 기술을 배우지 않으려 할 때 default 선택 값을 NO로 수정</li>
            <li><a href="https://github.com/pagefaultgames/pokerogue/pull/5924" target="_blank" style="text-decoration: underline;">PR Link</a></li>
        </ul>
        <br/>
        버그 수정
        <ul>
            <li>특수 효과가 정해진 순서에 맞게 진행되지 않는 현상 수정</li>
            <li><a href="https://github.com/pagefaultgames/pokerogue/pull/5936" target="_blank" style="text-decoration: underline;">PR Link</a></li>
        </ul>
        `,
        role: 'Contributor',
        techStack: ['phaser', 'vite', 'vitest'],
        thumbnail: '/projects/thumbnail/pokerogue.png',
        images: [
            '/projects/images/pokerogue-1.png',
            '/projects/images/pokerogue-2.png',
        ],
    },
    {
        // 신한 모바일 리뉴얼
        title: '신한은행 모바일 리뉴얼',
        slug: 'shinhan-renewal',
        liveUrl: 'https://m.shinhan.com/',
        period: '2025.05 - 2025.06 (1개월)',
        description: '',
        role: 'Frontend Developer',
        techStack: ['Next.js', 'react-query', 'Tailwind CSS', 'Mono Repo'],
        thumbnail: '/projects/thumbnail/shinhan-renewal.png',
        images: [''],
    },
    {
        title: 'Generative AI, LAIVE',
        slug: 'laive',
        liveUrl: 'https://www.laive.io/',
        period: '2023.08 - 2024.09 (13개월)',
        description: `음악적 지식이 없는 일반인도 AI를 통해 자신이 원하는 음악을 제작할 수 있는 서비스
        `,
        role: `
        Frontend-developer<br/>
        <ul>
            <li>AI 음원을 제작 하는 서비스의 프론트 개발 및 PM 담당</li>
            <li>UI/UX 기획에도 참여하여 빠른 개발 및 협업 진행</li>
            <li>디자이너 및 개발자간 협업을 위해 Atomic Design 원칙 도입하여 디자인 소요 시간 2배 이상 감축</li>
            <li>tailwind, clsx 등으로 모바일 친화적 UI를 구현하여 60%이상 모바일 유저 확보</li>
            <li>sentry, CI/CD 등을 이용하여 error pipeline 구축, 1분 이내 reporting 구현해 장애율 감소</li>
            <li>사용자 경험을 떨어뜨리는 장애 대응을 위해 vercel env 사용해 식별 후 5분 이내 대응 수단 구축</li>
            <li>마케팅 팀 요구 사항에 능동적으로 대처해 mixpanel, funnel 기능을 통해 CTR(click through ratio) 4.03배 증가</li>
            <li>next js의 ISR rendering 으로 스트리밍 속도 이슈 개선을 통해 83% 지연 감소</li>
            <li>리뷰를 통해 동료를 도와 성능 문제를 O(n^3)에서 O(mn^2)로 해결</li>
        </ul>
        `,
        techStack: [
            'Next.js',
            'react-query',
            'zustand',
            'Tailwind CSS',
            'shad-cn',
            'Vercel',
            'Mixpanel',
            'Sentry',
        ],
        thumbnail: '/projects/thumbnail/laive.png',
        images: [
            '/projects/images/laive-1.png',
            '/projects/images/laive-2.png',
            '/projects/images/laive-3.png',
            '/projects/images/laive-4.png',
        ],
    },
    {
        title: 'Music Streaming, VIODIO',
        slug: 'viodio',
        liveUrl: 'https://www.viodio.io/main',
        period: '2022.08 - 2023.07 (11개월)',
        description: `AI를 사용해 작곡된 음원을 유통하는 서비스 <br/>외주사에서 기술 스택 선정하지 않고 개발해, 서비스 확장이 불가능했습니다.<br/>
        각 기술 스택을 하나의 스택으로 전환해 추가 기능 개발이 가능하도록 하였습니다.`,
        role: `
        Frontend-developer<br/>
        <ul>
            <li>기존 redux 상태 관리 체계에서 recoil로 전환하여 상태 관리 간소화</li>
            <li>redirection 및 async 문제를 개선해 lighthouse 점수를 대폭 향상</li>
            <li>복수의 스타일 시스템을 tailwind css로 통합하여 모바일 반응형 UI를 성공적으로 출시</li>
            <li>redux thunk를 통해 처리하던 REST API 요청을 react-query로 전환하여 데이터 요청 효율성 증대</li>
            <li>컨텐츠 제작자인 고객에게 저작권 걱정 없는 음원을 제공하는 기능을 개발하여 b2b 계약 수주에 기여</li>
        </ul>
        `,
        techStack: [
            'Next.js',
            'react-query',
            'redux',
            'recoil',
            'Tailwind CSS',
            'Custom Component Library',
            'Vercel',
            'Mixpanel',
            'Sentry',
        ],
        thumbnail: '/projects/thumbnail/viodio.png',
        images: [
            '/projects/images/viodio-1.png',
            '/projects/images/viodio-2.png',
            '/projects/images/viodio-3.png',
        ],
    },
    {
        title: 'Generative AI Solution for CJ ENM',
        slug: 'sound-pace',
        period: '2024.05 - 2024.09 (4개월)',
        description: `CJ ENM 전용의 음원 생성 AI 서비스<br/>B2B 수주 프로젝트(규모 대외비)`,
        role: `
        Frontend-developer<br/>
        <ul>
            <li>일관된 디자인을 위해 Radix, ShadCN을 사용해 UI/UX 구현</li>
            <li>web hook을 이용해 사용자 피드백 수집, 디자인 리뉴얼 진행</li>
            <li>B2B 추가 요구 사항인 관리자 페이지 및 유저 통제 시스템 개발</li>
            <li>빠른 운영 및 장애 대응을 위해 CI/CD, Vercel 등을 통한 배포 자동화</li>
        </ul>
        `,
        techStack: [
            'Next.js',
            'react-query',
            'Tailwind CSS',
            'shad-cn',
            'Vercel',
            'Mixpanel',
            'Sentry',
        ],
        images: [],
    },
    {
        title: 'Pay & Shop, WAPL',
        slug: 'wapl',
        period: '2021.07 - 2022.07 (12개월)',
        description: `간편 결제(Pay)와 매장 POS 시스템(Shop)을 제공하는 서비스`,
        role: `
        Frontend-researcher<br/>
        <br/>
        Wapl Pay:<br/>
        <ul>
            <li>React Native와 Typescript 기반 매장 POS 화면 개발</li>
            <li>MobX state 관리 라이브러리 사용하여 매장/주문 state 관리</li>
            <li>jest config 작업, 스냅샷 및 테스트 코드 작성</li>
            <li>Figma를 통해 UI/UX 소통</li>
            
        </ul>
        <br/>
        Wapl Shop:<br/>
        <ul>
            <li>ElectronJS, React 기반 사내 카페 POS 화면 개발 및 유지 보수</li>
            <li>MobX state 관리 라이브러리 사용하여 장바구니 state 관리</li>
            <li>MobX 패턴에 적합하게 컴포넌트 분리하는 리팩토링 작업</li>
            <li>Node JS를 이용한 DB 쿼리 요청문 작성 및 영수증 출력 구현</li>
        </ul>
        `,
        techStack: [
            'React-Native',
            'Electron',
            'mobx',
            'Styled-Components',
            'Node JS',
        ],
        thumbnail: '/projects/thumbnail/wapl.png',
        images: ['/projects/images/wapl-1.png', '/projects/images/wapl-2.png'],
    },
    {
        title: 'Shin-han teller',
        slug: 'shinhan',
        period: '2021.02 - 2021.02 (1개월)',
        description: `신한 텔러뱅킹 홈페이지 개발`,
        role: `
        Frontend-researcher<br/>
        <ul>
            <li>Home 화면 및 대출 심사 팝업 화면 개발</li>
        </ul>
        `,
        techStack: ['React', 'Electron', 'And Design of React'],
        images: [],
    },
    {
        title: 'TOP Web Studio',
        slug: 'top',
        period: '2021.01 - 2021.06 (6개월)',
        description: `ES5 기반 웹앱 프레임워크 유지 보수`,
        role: `
        Frontend-researcher<br/>
        <ul>
            <li>ES5 기반 웹 개발 플랫폼 유지 보수</li>
            <li>크로스브라우징 작업</li>
            <li>DatePicker, TableView, TextField Chrome에서 오작동 버그 수정</li>
            <li>ES5를 이용하여 inputmask 기능 구현</li>
        </ul>
        `,
        techStack: ['ES5', 'jQuery'],
        images: [],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Team Lead (Freelance)',
        company: 'Seeroo Info',
        duration: 'May 2025 - Nov 2025',
    },
    {
        title: 'Frontend Developer',
        company: 'Pozalabs',
        duration: 'Apr 2022 - Sep 2024',
    },
    {
        title: 'Frontend Researcher',
        company: 'Tmax',
        duration: 'Jan 2021 - Jul 2022',
    },
];

export const SKILL_MATRIX_LEVELS = {
    achieved: { label: '실적 있음', color: '#22c55e', bg: '#22c55e18' },
    experienced: { label: '실무 경험', color: '#3b82f6', bg: '#3b82f618' },
    learning: { label: '학습', color: '#a78bfa', bg: '#a78bfa18' },
};

export interface SkillMatrixCategory {
    id: 'efficiency' | 'launch' | 'optimization';
    tab: '개발 효율화' | '출시 경험' | '최적화 경험';
    description: string;
    categories: {
        name: string;
        detail: string;
        level: 'achieved' | 'experienced' | 'learning';
    }[];
}

export const SKILL_MATRIX_DATA: SkillMatrixCategory[] = [
    {
        id: 'efficiency',
        tab: '개발 효율화',
        description: '더 나은 개발 환경과 코드 품질을 만드는 경험',
        categories: [
            {
                name: '코드 품질',
                level: 'achieved',
                detail: '컨벤션, 코드 리뷰 체계, 아키텍처 설계',
            },
            {
                name: '테스트',
                level: 'experienced',
                detail: '유닛 테스트, 통합 테스트, E2E, 자동화',
            },
            {
                name: '빌드 / 배포',
                level: 'achieved',
                detail: 'CI/CD 파이프라인, 빌드 최적화, 모노레포',
            },
            {
                name: '개발자 경험 (DX)',
                level: 'experienced',
                detail: '내부 도구, 보일러플레이트, 환경 세팅 자동화',
            },
            {
                name: '공통화 / 시스템화',
                level: 'experienced',
                detail: '디자인 시스템, 공통 컴포넌트, 유틸 패키지',
            },
            {
                name: '성능',
                level: 'achieved',
                detail: '번들 사이즈, 로딩 속도, 렌더링 최적화',
            },
            {
                name: '모니터링 / 안정성',
                level: 'learning',
                detail: '에러 트래킹, 로깅, 장애 대응 체계',
            },
            {
                name: '문서화 / 온보딩',
                level: 'experienced',
                detail: '기술 문서, 온보딩 가이드, ADR',
            },
        ],
    },
    {
        id: 'launch',
        tab: '출시 경험',
        description: '제품을 처음부터 만들어 세상에 내놓는 경험',
        categories: [
            {
                name: '0→1 구축',
                level: 'achieved',
                detail: '없는 서비스를 처음부터 만들어 런칭',
            },
            {
                name: 'MVP / 빠른 검증',
                level: 'experienced',
                detail: '최소 기능으로 시장 반응 확인',
            },
            {
                name: '기술 선정',
                level: 'achieved',
                detail: '프로젝트 초기 스택/아키텍처 결정',
            },
            {
                name: '크로스펑셔널 협업',
                level: 'achieved',
                detail: '디자이너, PM, 백엔드와 제품 개발',
            },
            {
                name: '일정 관리 / 딜리버리',
                level: 'achieved',
                detail: '스코프 조절하며 제때 출시',
            },
        ],
    },
    {
        id: 'optimization',
        tab: '최적화 경험',
        description: '이미 운영 중인 서비스를 더 좋게 만드는 경험',
        categories: [
            {
                name: '지표 기반 개선',
                level: 'achieved',
                detail: 'DAU, 전환율, 리텐션 등 수치 기반 개선',
            },
            {
                name: 'A/B 테스트',
                level: 'learning',
                detail: '실험 설계 및 결과 기반 의사결정',
            },
            {
                name: 'UX 개선',
                level: 'achieved',
                detail: '피드백/데이터 기반 인터페이스 개선',
            },
            {
                name: '성능 최적화',
                level: 'achieved',
                detail: '로딩 속도, Core Web Vitals 개선',
            },
            {
                name: '레거시 개선 / 마이그레이션',
                level: 'achieved',
                detail: '기존 코드베이스 점진적 개선',
            },
            {
                name: '확장성 대응',
                level: 'achieved',
                detail: '트래픽 증가, 기능 확장 대응 구조 변경',
            },
        ],
    },
];

/**
 * /portfolio 케이스 단일 소스.
 * 배열 순서가 _01/_02/_03 과 이전·다음 네비 순서를 정함.
 * - 신한: 실제 내용 채움.
 * - 상생/포자: 헤더(실제 숫자)만. 본문은 draft → 추후 작성.
 */
export const PORTFOLIO_CASES: IPortfolioCase[] = [
    {
        slug: 'sspb',
        no: '_01.',
        name: '상생페이백',
        impact: '전국민이 한 번에 몰리는 트래픽을, 서버 증설이 아니라 구조로 흡수했습니다.',
        meta: 'FE Tech Lead (4인 리드) · 2025.06–11 · React · React Router · zustand · react-query · GitLab CI',
        theme: '전국민이 한 번에 몰리는 트래픽을, 서버 증설이 아니라 구조로 흡수했습니다.',
        tags: ['React Router', 'zustand', 'react-query', 'CDN 분산'],
        stats: [
            { v: '1,564만', k: '누적 신청' },
            { v: '600만', k: 'MAU' },
            { v: '10분 → 2분 30초', k: '빌드' },
            { v: '0', k: '다운타임' },
        ],
        background: [],
        decisions: [],
        results: [],
        metric: { big: '무중단 운영', sub: '1,564만 신청 · 600만 MAU' },
        draft: true,
    },

    {
        slug: 'shinhan-renewal',
        no: '_02.',
        name: '신한은행',
        impact: '표현이 제각각이던 플래그를, 화면이 몰라도 되게 한 곳에서 정규화했습니다.',
        meta: '프론트엔드 (프리랜서) · 2025.05 · 1개월 · React · react-query · TypeScript · Next.js · pnpm 모노레포',
        theme: '같은 상품군 안에서도 제각각이던 플래그를, 화면이 몰라도 되게 정규화 계층으로 끊어냈습니다.',
        tags: ['react-query', 'select', 'TypeScript'],
        stats: [{ v: '6곳 → 1곳', k: '정규화 지점' }],
        background: [
            `신한은행의 100여 종 금융상품 조회 서비스가 오래 운영되며 규제가 바뀌고 신·구 상품이 누적된 탓에, 같은 의미의 플래그조차 상품마다 'Y' · '1' · boolean · undefined로 제각각 들어왔습니다. 정작 이를 받아주는 정규화 계층은 없어, 값이 필요한 곳마다 직접 비교했고 — 상품이 늘수록 그 비교도 늘어 분기가 곳곳에 쌓였습니다. 결국 규제나 상품이 하나 바뀔 때마다 흩어진 여러 곳을 함께 고쳐야 했습니다. 상품과 규제가 계속 느는 금융 도메인에선, 이렇게 흩어진 분기는 새 상품·규제마다 수정 누락 위험으로 쌓입니다. 금융 데이터라 계산 오차는 0이어야 했습니다.`,
        ],
        decisions: [
            {
                n: '접근',
                title: 'untyped(stringly-typed) 플래그를 정규화로',
                rows: [
                    {
                        label: '해결',
                        content:
                            '각 쿼리의 select에서 값을 boolean으로 정규화. 화면은 값을 직접 비교하지 않고 정규화된 값만 소비하고, 새 상품·규제가 와도 수정은 select 한 곳',
                    },
                ],
                code: {
                    tag: '회사 코드 아님 · 핵심 패턴 재현',
                    panes: [
                        {
                            label: 'before · 형식 비교가 흩어진 상태',
                            note: `같은 의미의 플래그인데 상품마다 'Y' · '1' · boolean으로 제각각이고, 이걸 받아줄 정규화 계층도 없어 묻는 곳마다 값을 직접 비교하고 있었어요. 그러다 보니 'y' 하나에도 조용히 어긋나고 — 금융에선 곧 계산 오차예요 — 상품이 추가·삭제될 때마다 흩어진 비교문도 여러 곳에서 고쳐야 했고요.`,
                            code: `if (raw.인터넷가입여부 === 'Y') { /* 외화 */ }
if (raw.상품신규방법_인터넷 === '1') { /* 예금 */ }
if (flag === 'Y' || flag === '1') { /* 또 다른 곳 */ }`,
                        },
                        {
                            label: 'after · react-query select로 정규화',
                            highlight: true,
                            note: '그래서 react-query의 select에서 untyped(stringly-typed) 플래그를 boolean으로 정규화해요. 정규화 책임을 select로 분리하면, 화면은 받아온 data를 가공하지 않고 정규화된 값만 소비해요.',
                            accent: 'toBool',
                            code: `const toBool = (v: unknown): boolean =>
  v === 'Y' || v === '1' || v === true   // 'N'·'0'·undefined → false

select: (raw): ForexData => ({
  ...raw,
  canJoinOnline: toBool(raw.인터넷가입여부),
})`,
                        },
                        {
                            label: '화면 · 좁혀서 소비',
                            note: '화면은 상품구분으로 쓸 data만 좁히고(displayData), 표현은 몰라도 정규화된 값을 그대로 소비해요.',
                            accent: 'displayData',
                            code: `const displayData =
  isS01 ? s01Data :
  isS02 ? depositData :
  isFX  ? forexData : etcData

if (displayData?.canJoinOnline) { /* 비교문 없이 소비 */ }`,
                        },
                    ],
                },
            },
        ],
        results: [{ v: '6곳 → 1곳', k: '정규화 지점' }],
        learning: {
            quote: '좋은 코드는 좋은 도구가 아니라, 변경에 강한 구조에서 나온다.',
            notes: [
                {
                    tag: '구조 > 도구',
                    text: '이 정규화가 버틴 건 react-query라서가 아니라, 값을 받는 길목 한 곳에 책임을 모은 구조 때문이었어요. 레거시 프레임워크였어도 정규화하고 화면에서 직접 비교만 안 했다면 변경에 강했을 거고, 반대로 React를 써도 정규화 없이 화면이 다 떠안았다면 고치기 어렵고 버그도 잦았을 거예요.',
                },
                {
                    tag: '어떻게 미리 알았나',
                    text: '그렇게 미리 구조를 잡을 수 있던 건 도메인을 이해한 덕이었어요. 그 코드를 짜던 순간엔 당장 바뀌는 게 없었고 문서도 없었지만, 금융 규제가 바뀔 때마다 요건이 변하고 그에 따라 API 응답 구조도 누적되며 바뀌어 왔다는 걸 읽을 수 있었거든요. 그래서 앞으로의 변경을 미리 대비해 정규화 계층을 둔 거예요.',
                },
            ],
        },
        metric: { big: '6곳 → 1곳', sub: '계산 오차율 0%' },
    },

    {
        slug: 'pozalabs',
        no: '_03.',
        name: '포자랩스',
        impact: '감이 아니라 측정으로 최적화하고, 외주 레거시를 핵심 흐름부터 점진 이관했습니다.',
        meta: '프론트엔드 · 2022.08–2024.08 · Next.js · react-query · 디자인 시스템 · Mixpanel',
        theme: '감이 아니라 측정으로 최적화하고, 외주 레거시를 핵심 흐름부터 점진 이관했습니다.',
        tags: ['Next.js', 'ISR', '디자인 시스템', 'Mixpanel'],
        stats: [
            { v: '80%↓', k: '초기 진입' },
            { v: '4배', k: 'CTR' },
            { v: '90–100', k: 'Lighthouse' },
        ],
        background: [],
        decisions: [],
        results: [],
        metric: { big: '진입 80%↓', sub: 'CTR 4배 · Lighthouse 90–100' },
        draft: true,
    },
];
