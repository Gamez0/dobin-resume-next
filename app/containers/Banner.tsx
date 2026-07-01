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

                <div className="space-y-5">
                    <div>
                        <h2 className="text-base font-semibold mb-1.5">
                            데이터 기반으로 판단하고 개선합니다.
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            <strong className="text-foreground">측정값</strong>·
                            <strong className="text-foreground">
                                실제 배포 환경
                            </strong>
                            ·
                            <strong className="text-foreground">
                                요구 뒤의 의도
                            </strong>
                            를 직접 확인하고, 거기서 가장 나은 길을 고릅니다.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold mb-1.5">
                            변경에 강한 구조를 설계합니다.
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            비즈니스 요구는 계속 바뀝니다. 그걸 전제로,{' '}
                            <strong className="text-foreground">
                                유지보수하기 쉽고 확장 가능한 구조
                            </strong>
                            를 처음부터 설계합니다.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold mb-1.5">
                            대규모 트래픽을 안정적으로 운영합니다.
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            전국민 서비스에서 누적{' '}
                            <strong className="text-foreground">
                                1,564만 신청
                            </strong>
                            ·최대{' '}
                            <strong className="text-foreground">
                                600만 MAU
                            </strong>
                            를{' '}
                            <strong className="text-foreground">무중단</strong>
                            으로 받아냈습니다.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-base font-semibold mb-1.5">
                            요구 뒤의 의도를 읽고 가장 잘 실현합니다.
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            받은 요구를 그대로 구현하기보다,{' '}
                            <strong className="text-foreground">
                                그 뒤의 진짜 목적
                            </strong>
                            을 파악해 가장 잘 실현하는 방법을 찾습니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
