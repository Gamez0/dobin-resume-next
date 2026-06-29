import { IPortfolioCase } from '@/types/portfolio';

/**
 * /portfolio 케이스 단일 소스.
 * 배열 순서가 _01/_02/_03 과 이전·다음 네비 순서를 정함.
 * - 신한: 실제 내용 채움.
 * - 상생/포자: 헤더(실제 숫자)만. 본문은 draft → 추후 작성.
 */
export const PORTFOLIO_CASES: IPortfolioCase[] = [
    // (배경 + ① 까지 반영 / ②③·결과·배움은 추후 — draft 는 풀되 본문 일부만 채운 상태)
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
            { v: '200대 → 30대', k: '서버' },
            { v: '0', k: '다운타임' },
        ],
        background: [
            `상생페이백은 전국민이 대상이라, 오픈과 동시에 수천만이 한 번에 몰리는 서비스였어요. 그런데 인프라는 NHN 계약으로 서버를 마음대로 늘릴 수도, SSR을 쓸 수도 없었어요. 게다가 정책이 3일마다 바뀌었고, 그 변경을 여러 팀원이 동시에 쳐내야 했어요. 그래서 우선순위가 분명했어요. 체감 속도를 끌어올리는 교과서적 최적화보다, 사용자가 한꺼번에 쏟아져도 전부에게 실패 없이 deliver하는 것. 그래서 무겁게 다듬기보다 가볍게 만드는 데 초점을 뒀어요. 대규모는 트래픽만이 아니라, 변경과 협업의 규모이기도 했어요.`,
        ],
        decisions: [
            {
                n: '①',
                title: '접속이 안 죽게 · web을 비우고 CDN으로',
                rows: [
                    {
                        label: '해결',
                        content:
                            'web 서버엔 index.html 한 장만, 정적 리소스는 전부 CDN으로. 첫 화면 속도(LCP/FCP)를 일부 양보하는 대신, 트래픽이 몰려도 web 서버가 죽지 않는 구조를 택함',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: 'CDN / web 분리 구조',
                            note: '트래픽이 몰리면 web 서버부터 죽어요. 그래서 web엔 index.html 한 장만 두고, js·css·이미지·폰트는 전부 CDN으로 내보냈어요. CDN은 사용자와 가까운 엣지에 여러 대로 분산돼 있어, 수천만이 몰려도 그 부하를 나눠 받아내요. web 서버는 "파일 한 장 던지는" 역할만 남죠.',
                            code: `사용자
  │
  ▼
[ web ]  index.html 한 장만
  │
  │  js · css · 이미지 · 폰트
  ▼
[ CDN ]  사용자 가까운 엣지 · 여러 대로 분산
         ◀ 몰리는 트래픽을 나눠서 흡수`,
                        },
                        {
                            label: '왜 LCP를 양보했나',
                            highlight: true,
                            note: '보통 Next.js+Vercel처럼 SSR로 완성된 HTML을 내려주면 첫 화면이 빨라요(LCP↑). 하지만 그건 서버가 매 요청마다 렌더링을 떠안는 모델이라, 트래픽이 몰리면 서버가 부하를 받아요. 우리는 인프라가 고정이라 증설로 못 풀었어요. 그래서 반대로 갔어요 — 첫 화면 속도를 일부 내주고, 서버가 트래픽을 아예 안 떠안는 CSR+CDN. 인프라를 못 늘리는 환경에선, 속도를 내주고 안정성을 사는 게 맞았어요. 이 경량 구조가 기반이 돼, 인프라팀과 함께 서버를 200대→30대 규모로 줄여 운영했어요.',
                            code: `                SSR (Next+Vercel)    상생 (CSR + CDN)
 ──────────────────────────────────────────────────
 첫 화면 LCP     빠름                 불리 (JS 받고 렌더)
 서버 부하       매 요청 렌더          없음 (파일 한 장)
 트래픽 폭주     증설로 대응           web이 죽지 않음`,
                        },
                    ],
                },
            },
            // lib/portfolio/data.ts — sspb.decisions 배열에서 ① 객체 다음에 아래 ② 객체를 추가하세요.

            {
                n: '②',
                title: '잦은 변경을 감당하게 · 이른 공통화를 미루다',
                rows: [
                    {
                        label: '해결',
                        content:
                            '정책이 3일마다 바뀌고 정책 로직 대부분이 한 곳에서만 쓰이는 환경. 이른 공통화는 결합도만 높인다고 보고, 로직과 화면을 한 컴포넌트에 모아 변경이 와도 한 곳만 보게 함',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: '공통화 (안 택함)',
                            note: '비슷해 보이는 영역을 잘게 분리하고 정책 로직을 공통 훅으로 빼면 깔끔해 보여요. 하지만 결합도가 생겨요. 예를 들어 "환급액 표시를 Title에서 Card로 옮겨라"는 변경이 오면 — Title에서 빼고, Card에 넣고, 공통 훅 인터페이스까지 세 곳을 맞춰 고쳐야 해요. 정책이 자주 바뀌는 환경에선 이런 변경이 계속 번져요.',
                            code: `// 영역은 잘게 나누고, 정책 로직은 공통 훅으로


const HomeDashboard = () => {
    const {policy} = useDashboardPolicy();  // 정책 계산 공통화
    return(
        <>
            <HomeDashboardTitle />    {/* 환급액 표시 */}
            <HomeDashboardCard />     {/* 신청 현황 */}
            <HomeDashboardNotice />   {/* 안내 문구 */}
        </>
    )
};

// "환급액을 Title → Card로" 변경이 오면
const HomeDashboardTitle = () => {
  // - 환급액 표시            (빼고)
};
const HomeDashboardCard = () => {
  // + 환급액 표시            (넣고)
};
const useDashboardPolicy = () => {
  // 환급액 계산 위치도 조정   (맞추고)
};`,
                        },
                        {
                            label: '중복 허용 · 한 곳에 모으기 (택함)',
                            highlight: true,
                            note: '그래서 로직과 화면을 한 컴포넌트에 모아 뒀어요. 같은 변경("환급액을 제목 옆에서 카드로")이 와도 이 안에서 위치만 옮기면 끝이에요. 게다가 홈 대시보드 정보는 다른 화면에서 다시 쓰는 게 아니라, 공통화로 얻을 재사용 이득도 없었어요. 재사용은 없고 결합도만 생기는 공통화라면, 차라리 중복을 감수하고 한 곳에 모으는 게 변경에 유리했어요.',
                            code: `const HomeDashboard = () => {
  const { policy } = usePolicy();
  const amount = policy.isExtra ? calcExtra() : calcBase();

  return (
    <>
      <h2>{policy.title}</h2>
      {/* 환급액 · 신청 현황 · 안내를 한 곳에서 */}
    </>
  );
};`,
                        },
                        {
                            label: '그 대가',
                            note: '이 판단으로 1564만 신청을 큰 장애 없이 쳐냈어요 — 변경이 와도 손댈 곳이 명확했거든요. 하지만 대가도 있었어요. 시간이 지나며 HomeDashboard가 비대해졌고, 신규 팀원이 이해하는 데 오래 걸렸어요. 더 아쉬운 건 타이밍이었어요. 어느 순간부터 "이 영역은 이제 안 바뀌는구나" 하는 패턴이 보였는데, 그때 분리를 시작했어야 했어요. 마음먹었을 땐 이미 너무 커져서 분리 자체가 부담이 됐거든요.',
                        },
                    ],
                },
            },
        ],
        results: [],
        metric: { big: '무중단 운영', sub: '1,564만 신청 · 600만 MAU' },
        draft: false,
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
