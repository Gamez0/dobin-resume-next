'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                defaults: {
                    ease: 'power1.inOut',
                },
            });

            // 텍스트 애니메이션: 회전하며 나타나고 사라짐
            tl.to('.name-text span', {
                y: 0,
                rotation: 360,
                opacity: 1,
                stagger: 0.1,
                duration: 0.5,
            })
            .to('.name-text span', {
                opacity: 0,
                scale: 0.5,
                duration: 0.3,
            });

            // 막대 애니메이션: 아래로 사라짐
            tl.to('.preloader-item', {
                y: '100%',
                duration: 0.5,
                stagger: 0.1,
            })
                .to('.name-text span', { autoAlpha: 0 }, '<0.5')
                .to(
                    preloaderRef.current,
                    {
                        autoAlpha: 0,
                    },
                    '<1',
                );
        },
        { scope: preloaderRef },
    );

    return (
        <div className="fixed inset-0 z-[6] flex" ref={preloaderRef}>
            {[...Array(10)].map((_, i) => (
                <div key={i} className="preloader-item h-full w-[10%] bg-black" ></div>
            ))}

            <p className="name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden">
                <span className="inline-block translate-y-full">D</span>
                <span className="inline-block translate-y-full">O</span>
                <span className="inline-block translate-y-full">B</span>
                <span className="inline-block translate-y-full">I</span>
                <span className="inline-block translate-y-full">N</span>
                <span className="inline-block translate-y-full">&nbsp;</span>
                <span className="inline-block translate-y-full">S</span>
                <span className="inline-block translate-y-full">H</span>
                <span className="inline-block translate-y-full">I</span>
                <span className="inline-block translate-y-full">N</span>
            </p>
        </div>
    );
};

export default Preloader;
