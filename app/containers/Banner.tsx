'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container min-h-[50svh] py-16 md:py-20 flex flex-col gap-8"
                ref={containerRef}
            >
                <div className="flex items-center gap-6">
                    <div className="  shrink-0 max-md:hidden">
                        <Image
                            src="/profile/me.jpg"
                            alt="신도빈"
                            width={160}
                            height={160}
                            className="w-40 h-40 rounded-full object-cover border border-border"
                        />
                    </div>
                    <h1 className="banner-title   leading-snug text-4xl sm:text-5xl font-medium">
                        안녕하세요,
                        <br />
                        프론트엔드 개발자 신도빈입니다.
                    </h1>
                </div>

                <div className="  space-y-5">
                    <div>
                        <h2 className="text-base font-semibold mb-1.5">
                            코드가 동작하는 것과 문제를 푸는 것은 다르다고
                            봅니다.
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            기능을 구현하기 전에{' '}
                            <strong className="text-foreground">
                                유저가 끝까지 해내는지
                            </strong>
                            ,{' '}
                            <strong className="text-foreground">
                                요구 뒤의 진짜 의도가 뭔지
                            </strong>
                            ,{' '}
                            <strong className="text-foreground">
                                실제 환경에서 버티는지
                            </strong>
                            부터 확인하고, 그걸 가장 효율적이고 변경에 강한
                            방법으로 풀어왔습니다.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold mb-1.5">
                            이상이 아니라 현실을 보고 판단합니다.
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">
                                측정값, 실제 배포 환경, 요구 뒤의 의도
                            </strong>
                            를 직접 확인하고, 거기서 가장 효율적인 길을
                            고릅니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
