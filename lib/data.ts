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
        title: 'Generative AI Service, LAIVE',
        slug: 'laive',
        liveUrl: 'https://www.laive.io/',
        year: 2024,
        description: `음악적 지식이 없는 일반인도 AI를 통해 자신이 원하는 음악을 제작할 수 있는 서비스
        `,
        role: `
        Frontend-developer (Project Manager) <br/>
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
        longThumbnail: '',
        images: ['/projects/images/laive-1.png','/projects/images/laive-2.png','/projects/images/laive-3.png','/projects/images/laive-4.png']
    },
    {
        title: 'MTI Electronics',
        slug: 'mti-electronics',
        liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Engineer',
        company: '',
        duration: 'Oct 2024 - Present',
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
