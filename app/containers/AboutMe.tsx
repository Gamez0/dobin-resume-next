'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <div className="divide-y">

                    {/* 01 출시 */}
                    <div className="py-12 slide-up-and-fade">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-3xl font-thin text-muted-foreground/40">01</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">출시</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-medium leading-snug mb-3">
                                5개 서비스 출시,<br />누적 1500만 신청·최대 600만 MAU
                            </h3>
                            <p className="text-sm text-muted-foreground mb-8">
                                5개 서비스 출시 경험을 바탕으로, 누적 1500만 신청·최대 600만 MAU의 대규모 서비스를 장애 없이 출시·운영했습니다.
                            </p>
                            <div className="space-y-10">
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed"><strong>5개</strong> 서비스를 출시하며, &lsquo;내 코드가 동작하는가&rsquo;에서 &lsquo;유저가 실제로 끝까지 해내는가&rsquo;로 초점이 옮겨갔습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>초기 출시들에서 기능을 의도대로 정확히 구현하는 기본기를 다졌고, 특히 결제 같은 크리티컬 플로우가 깨지지 않게 방어했습니다(이중 결제·실패 케이스).</p>
                                        <p>그 기본기를 바탕으로 또 다른 서비스를 출시했지만, 기능은 동작해도 핵심 경험이 약해 유저가 이탈하는 걸 겪었습니다. 기능을 구현하는 데서 그치지 않고, 유저 중심으로 어떤 UI/UX를 설계해야 하나 생각하는 습관이 생겼습니다.</p>
                                        <p>그 깨달음을 적용해 상생페이백에선 신청은 최소한의 입력으로 막다른 길 없이 끝나도록, 현황은 한눈에 상태가 잡히도록 설계했고, 안정적으로 대규모 프로젝트를 출시 운영했습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">전국민 서비스로 최대 <strong>600만 MAU</strong>·<strong>1564만</strong> 신청을 장애 없이 받아내며, 실제 배포 환경을 보고 어디까지·어떻게 대응할지 정하는 설계를 하게 됐습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>프론트엔드를 리드하며, &lsquo;전국민이 몰려도 접속이 안 죽고 구형 기기·다양한 브라우저까지 들어온다&rsquo;를 출발 조건으로 두고 제약 분석부터 스택까지 주도했습니다 (NHN 인프라 고정·SSR 불가).</p>
                                        <p>트래픽이 몰리면 web 서버부터 죽는다고 보고, index.html만 web에 두고 리소스는 전부 CDN으로 돌려 부하를 구조적으로 분산했습니다. 경량 스택을 골라 진입 부담을 줄이고, PR마다 chunk 사이즈를 자동 추적해 느린 망·저사양에서도 진입되게 했습니다.</p>
                                        <p>크로스 브라우저 대응에선 &lsquo;어디까지&rsquo;를 매번 판단했습니다. 구형 브라우저·모바일은 polyfill·폰트 fallback으로 받되, iOS Safari에서 iframe 간편인증이 막히자 새 탭으로 전환했고, 새 탭까지 막은 소수는 의도적 설정이라 보고 전부 대응하기보다 안내로 선을 그었습니다.</p>
                                        <p>그 결과 600만 MAU 규모를 모니터링하며 장애 없이 안정 운영했습니다.</p>
                                        <p>이후엔 설계 전에 내 환경이 아니라 유저가 실제로 들어올 환경부터 보고, 어디까지·어떻게 대응할지를 먼저 정하게 됐습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">복잡한 문제를 단순하게 풀어 <strong>11만 원</strong> 환급과 약 <strong>18조 원</strong>의 소비 진작에 이바지하며, 요구 뒤의 진짜 의도를 읽어 가장 잘 실현하는 설계를 하게 됐습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>복잡한 정책과(시점별 소급·날짜별 지급 상태·카드사별 집계), 정부는 &ldquo;정보를 빠짐없이 노출하라&rdquo;고 요구.</p>
                                        <p>그런데 그 요구 뒤엔 두 의도가 있었습니다. 정부의 목적은 소비 진작, 유저는 자기 환급 현황을 빠르게 파악하는 게 우선이었고, 필요 이상의 정보를 한 번에 펼치면 사용성도 네트워크 비용도 나빠지는 상황이었습니다.</p>
                                        <p>그래서 정보를 다 담되, 유저가 단계적으로 파고드는 구조로 풀었습니다. 메인엔 핵심 한 줄, 월별 카드로 한 단계, 상세는 모달로 두어 평소엔 안 지치고 궁금하면 끝까지 확인되게 했습니다. 무엇을 노출할지는 정부가 정했지만, 어떻게 보여줄지는 동료들과 협업해 제안했습니다.</p>
                                        <p>그렇게 복잡한 환급 정책을 유저가 자기 현황으로 이해하도록 전달했고, 정책 자체도 평균 11만 원을 환급하며 약 18조 원의 소비 진작 효과를 거뒀습니다.</p>
                                        <p>이후엔 요구를 받으면 곧장 구현하기보다 그 뒤의 의도부터 파악하고 거기서 화면을 설계하게 됐습니다. 요구가 틀렸다고 보는 게 아니라, 요구를 가장 잘 실현하는 방법을 찾는 시각입니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 02 최적화 */}
                    <div className="py-12 slide-up-and-fade">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-3xl font-thin text-muted-foreground/40">02</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">최적화</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-medium leading-snug mb-3">
                                Lighthouse 90~100점대,<br />서버 비용 85% 절감
                            </h3>
                            <p className="text-sm text-muted-foreground mb-8">
                                성능을 최적화해 여러 서비스에서 Lighthouse 90~100점대를 확보하고, 클라이언트 경량화로 서버 비용 약 85% 절감에 기여했습니다.
                            </p>
                            <div className="space-y-10">
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">프로파일링으로 인계받은 서비스를 <strong>90점대</strong>로, 신규 서비스를 <strong>100점</strong> 근처까지 끌어올리며, 최적화는 감이 아니라 측정에서 시작한다는 원칙을 체화했습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>외부 SI가 통일된 스택 없이(jQuery·Bootstrap·styled 혼재) 만들어 인계한 음원 유통 서비스로, 체감상 느렸지만 어디가 문제인지는 불명확했음을 파악.</p>
                                        <p>추측으로 손대는 대신 프로파일링으로 병목을 측정, render-blocking 스크립트와 불필요하게 재요청되던 경로(변경된 인증 URL로 인한 304 등)를 찾아 제거하고, async/defer·reflow 개선과 레거시 정리(jQuery·Bootstrap→Tailwind)로 첫 화면이 뜨는 시간을 단축.</p>
                                        <p>이미지·폰트·CLS 등 표준 항목까지 점검해 Performance 90점대를 확보.</p>
                                        <p>이 경험으로 &ldquo;감이 아니라 측정에서 시작한다&rdquo;는 접근이 몸에 뱄고, 신규 Next.js 프로젝트는 처음부터 측정을 기준으로 설계해 Performance 100점에 근접시켰습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">서버 비용을 약 <strong>85%</strong> 절감하는 데 기여하며, &ldquo;가장 효율적인 요청은 보내지 않는 요청&rdquo;이라는 기준을 굳혔습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>600만 MAU 규모에서 web/WAS 서버 비용이 컸고, 프론트가 보내는 요청량과 정적 에셋이 그 부하의 큰 축임을 파악. (GraphQL을 공부하며 얻은 &ldquo;필요한 것만 요청한다&rdquo;는 관점을 기준 삼아 접근.)</p>
                                        <p>카드 상세를 로그인 후 전원에게 노출하지 않고 별도 페이지로 분리하자고 기획·백엔드에 제안해, 그 API 호출을 &ldquo;전원 → 실제로 확인하는 일부&rdquo;로 줄여 WAS 부하를 낮춤.</p>
                                        <p>React Query 캐싱·취소 전략으로 중복·폐기될 요청을 제거해 WAS 부하를 줄이고, 번들 경량화로 정적 에셋 자체를 줄여 web 서버 부하까지 함께 덜어냄.</p>
                                        <p>그 결과 web/WAS 서버 200여 대 → 30대 규모 감축에 기여.</p>
                                        <p>이 경험으로 설계 단계에서 &ldquo;이 데이터를 모두에게 불러올 필요가 있나&rdquo;를 먼저 따지게 됐습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">초기 진입 지연을 약 <strong>80%</strong> 단축하며, 경계 밖의 문제라도 내 일로 끌어오면 프로덕트에 실질적 가치를 만들 수 있다는 걸 경험했습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>미국 PR 중 &ldquo;음원 미리듣기가 너무 느리다&rdquo;는 피드백. 장르 → 레퍼런스 → 음원까지 여러 API를 거쳐야 했고, 느린 현지 네트워크에서 진입 지연이 특히 컸음을 파악.</p>
                                        <p>병목 상당수가 BE·기존 설계 영역이었지만 &ldquo;내 담당 아님&rdquo;으로 넘기지 않고, 호출 흐름 전체를 직접 뜯어보며 통제 가능한 지점을 찾아냄.</p>
                                        <p>레퍼런스 데이터가 주기적으로만 바뀐다는 점에 착안해, 매 진입마다 API 체인을 돌던 구조를 Next.js ISR(주기적 정적 재생성)로 전환. 진입 시 왕복을 없애 초기 진입 지연을 약 80% 단축.</p>
                                        <p>이 과정에서 &ldquo;서버 데이터도 캐싱할 대상&rdquo;이라는 시각을 얻었고, 이후 클라이언트에서 서버 상태를 캐싱해 다루는 방식으로 이어졌습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 03 생산성 */}
                    <div className="py-12 slide-up-and-fade">
                        <div className="flex items-baseline gap-4 mb-6">
                            <span className="text-3xl font-thin text-muted-foreground/40">03</span>
                            <p className="text-xs text-muted-foreground uppercase tracking-widest">생산성</p>
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl font-medium leading-snug mb-3">
                                일정 50% 단축,<br />1인 월 12.5hr 절약
                            </h3>
                            <p className="text-sm text-muted-foreground mb-8">
                                AI 도입을 포함해 개발 생산성을 다방면으로 개선해, 일정을 50% 단축하고 1인당 월 12.5시간을 절약했습니다.
                            </p>
                            <div className="space-y-10">
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed"><strong>4주</strong> 일정을 <strong>2주</strong>로 단축하며, 검증된 구조를 빠르게 적용하는 자세를 체화했습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>레거시를 React로 전면 마이그레이션하는 프로젝트에서, 상품별로 하드코딩된 Page Component가 출시를 막는 상황을 파악.</p>
                                        <p>전면 재구축 대신 기존 구현을 검토해 재사용 가능한 부분을 살리는 방향으로 동적 page component로 통합.</p>
                                        <p>4주 일정을 2주로 단축하며, 검증된 것을 다시 만들지 않는다는 판단이 실전에서 통한다는 것을 확인했습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">수정 지점을 <strong>6곳</strong>에서 <strong>1곳</strong>으로 줄이며, 좋은 코드는 변경에 맞게 수정하기 쉬운 코드라는 기준을 갖게 됐습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>오랜 운영과 잦은 비즈니스 요구사항 변경으로, 동일한 데이터가 상품마다 Y/N, boolean, null로 제각각 전달되는 타입 불일치를 파악.</p>
                                        <p>이를 6개 지점에서 각각 호출·처리하고 있어, 규제로 스키마가 바뀔 때마다 6곳을 모두 수정해야 하는 구조임을 확인.</p>
                                        <p>데이터 정규화 책임을 컴포넌트에서 React Query select 계층으로 분리(관심사 분리)하여, 정책 변경 시 한 곳만 수정하면 되는 구조로 통합.</p>
                                        <p>이러한 추상화 작업으로 수정 지점을 6곳에서 1곳으로 줄이며, 좋은 코드란 좋은 프레임워크가 아니라 변경에 맞게 수정하기 쉬운 코드라는 것을 깨달았습니다.</p>
                                        <p>이후엔 좋은 코드의 모양이 환경마다 다르다는 걸 알고, 한 번 내린 구조 결정도 환경이 바뀌면 다시 들여다보게 됐습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">개발자 월 평균 대기시간 <strong>12.5hr</strong>를 줄이며, 작은 개선도 반복되면 큰 효과를 낸다는 것을 깨달았습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>pnpm store 캐싱이 동작하지 않아 매번 의존성을 새로 다운로드하고 있었고, 빌드→CDN 배포→web 배포 단계가 이전 단계의 artifact를 재사용하지 못해 단계마다 의존성 설치와 빌드가 중복 실행되는 구조임을 파악.</p>
                                        <p>pnpm store 캐싱을 적용하고 단계 간 artifact를 전달하도록 파이프라인을 개선하여 중복 실행을 제거.</p>
                                        <p>빌드·배포 시간을 10분에서 2분 30초(1회당 7.5분)로 단축. 이 배포를 기다리던 FE·BE·PO·TPO 6명의 대기시간까지 함께 줄여, 1인당 월 평균 12.5hr를 절약.</p>
                                        <p>이후 개선 과제를 고를 때, 효과 크기뿐 아니라 얼마나 자주·여러 사람이 겪는 지점인지까지 함께 따지게 됐습니다.</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-lg mb-4 leading-relaxed">AI를 적극 활용하되 결과를 비판적으로 검증하는 방식으로, 개발 생산성을 높였습니다.</p>
                                    <div className="space-y-3 text-sm text-muted-foreground leading-relaxed pl-4 border-l">
                                        <p>상생페이백 개발 당시 Cursor를 직접 결제·도입하여, 이벤트 핸들러 내 상태 처리 같은 반복적인 보일러플레이트를 tab 자동완성으로 가속.</p>
                                        <p>shell script 기반 빌드사이즈 측정처럼 익숙하지 않은 영역은 AI 페어코딩으로 개발하고, 직접 빌드·검증하며 수정 사항을 다시 AI에 전달해 개선하는 방식으로 진행.</p>
                                        <p>다만 코드와 에러만 그대로 던지면 TanStack Query v4에서 deprecated된 onSuccess를 v3 방식으로 우회하는 잘못된 해법이 나오는 것을 목격, 해결책이 아니라 원인과 근본 문제 분석을 요청하는 프롬프팅이 결과를 가른다는 것을 체감.</p>
                                        <p>개발 속도와 PR 리뷰 부하를 함께 줄였고, 이 경험을 바탕으로 현재는 Claude Code에 CLAUDE.md로 컨텍스트를 공급하고 PR 작성·리뷰까지 맡기는 방식으로 활용 범위를 넓혀가고 있습니다.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutMe;
