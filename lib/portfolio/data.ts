import { IPortfolioCase } from '@/types/portfolio';

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
