import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'dobinshin@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Dobin Shin, I am reaching out to you because...',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Gamez0' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/%EB%8F%84%EB%B9%88-%EC%8B%A0-431aab200/' },
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
            icon: '/logo/react-query.svg'
        },
        {
            name: 'Graphql',
            icon: '/logo/graphql.svg'
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
            icon: '/logo/radix-ui.svg'
        }
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
            icon: '/logo/figma.svg'
        },
        {
            name: 'Analytics',
            icon: '/logo/analytics.svg'
        },
        {
            name: 'Mixpanel',
            icon: '/logo/mixpanel.svg'
        },
        {
            name: 'Sentry',
            icon: '/logo/sentry.svg'
        }
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
        period: '2025.06 - 현재 (4개월)',
        description: '정부가 카드 소비를 촉진하고 소상공인을 지원하기 위해 시행하는 환급(페이백) 제도<br/>2024년 월평균 카드소비액과 비교해서, 2025년 9~11월 동안 카드 소비가 더 많아진 금액의 일부를 디지털 온누리상품권 형태로 돌려주는 사업',
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
        techStack: ['React Router', 'zustand', 'react-query', 'Tailwind CSS', 'shad-cn'],
        thumbnail: '/projects/thumbnail/sspb.png',
        images: ['/projects/images/sspb-1.png','/projects/images/sspb-2.png','/projects/images/sspb-3.png'],
    },
    {
        // 포켓로그
        title: 'PokéRogue',
        slug: 'pokerogue',
        liveUrl: 'https://pokerogue.net/',
        period: '2025.06 - 2025.07 (1개월)',
        description: '',
        role: 'Contributor',
        techStack: ['phaser', 'vite', 'vitest'],
        thumbnail: '/projects/thumbnail/pokerogue.png',
        images: [],
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
        techStack:[
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
        images: ['/projects/images/laive-1.png','/projects/images/laive-2.png','/projects/images/laive-3.png','/projects/images/laive-4.png']
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
        techStack:[
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
        images: ['/projects/images/viodio-1.png','/projects/images/viodio-2.png','/projects/images/viodio-3.png']
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
        techStack:[
            'Next.js',
            'react-query',
            'Tailwind CSS',
            'shad-cn',
            'Vercel',
            'Mixpanel',
            'Sentry',
        ],
        images: []
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
        techStack:[
            'React-Native',
            'Electron',
            'mobx',
            'Styled-Components',
            'Node JS',
        ],
        thumbnail: '/projects/thumbnail/wapl.png',
        images: ['/projects/images/wapl-1.png','/projects/images/wapl-2.png']
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
        techStack:[
            'React',
            'Electron',
            'And Design of React',
        ],
        images: []
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
        techStack:[
            'ES5',
            'jQuery',
        ],
        images: []
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Team Lead (Freelance)',
        company: 'Seeroo Info',
        duration: 'May 2025 - Present',
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
