'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        particlesRef.current.forEach((particle) => {
            const randomColor = `hsl(${Math.random() * 360}, 70%, 80%)`; // 랜덤한 색상
            const randomSize = Math.random() * 5 + 2; // 크기 범위 확장

            gsap.set(particle, {
                width: randomSize,
                height: randomSize,
                borderRadius: '50%', // 둥근 모양 유지
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });

            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 15 + 5, // 속도 다양화
                opacity: 0,
                repeat: -1,
                ease: 'power1.inOut', // 부드러운 움직임
            });
        });
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(100)].map((_, i) => ( // 입자 수 증가
                <div
                    key={i}
                    ref={(el) => {
                        particlesRef.current.push(el!);
                    }}
                    className="absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;