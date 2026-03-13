import { useEffect, useRef } from 'react';

interface AnimatedGridProps {
    numSquares?: number;
    maxOpacity?: number;
    duration?: number;
    repeatDelay?: number;
    strokeColor?: string;
    fillColor?: string;
    width?: number;
    height?: number;
}

export function AnimatedGrid({
    numSquares = 30,
    maxOpacity = 0.15,
    duration = 3000,
    repeatDelay = 500,
    strokeColor = 'rgba(34, 34, 34, 0.08)',
    fillColor = 'rgba(255, 183, 1, 0.1)',
    width = 40,
    height = 40,
}: AnimatedGridProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const patternId = useRef(`grid-pattern-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        if (!containerRef.current || !svgRef.current) return;

        const container = containerRef.current;
        const squareContainer = svgRef.current.querySelector('.squares-container');
        if (!squareContainer) return;

        let dimensions = { width: 0, height: 0 };
        let squares: any[] = [];

        const getDimensions = () => {
            const rect = container.getBoundingClientRect();
            dimensions = { width: rect.width, height: rect.height };
        };

        const getRandomPosition = () => [
            Math.floor((Math.random() * dimensions.width) / width),
            Math.floor((Math.random() * dimensions.height) / height),
        ];

        const createSquareElement = (pos: number[]) => {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            const [x, y] = pos;
            rect.setAttribute('width', (width - 1).toString());
            rect.setAttribute('height', (height - 1).toString());
            rect.setAttribute('x', (x * width + 1).toString());
            rect.setAttribute('y', (y * height + 1).toString());
            rect.setAttribute('fill', fillColor);
            rect.setAttribute('stroke-width', '0');
            rect.style.opacity = '0';
            return rect;
        };

        const animateSquare = (square: any, delay = 0) => {
            if (square.animating) return;
            square.animating = true;

            setTimeout(() => {
                square.element.style.transition = `opacity ${duration / 2}ms ease-in-out`;
                square.element.style.opacity = maxOpacity.toString();

                setTimeout(() => {
                    square.element.style.opacity = '0';

                    setTimeout(() => {
                        const newPos = getRandomPosition();
                        square.element.setAttribute('x', (newPos[0] * width + 1).toString());
                        square.element.setAttribute('y', (newPos[1] * height + 1).toString());
                        square.animating = false;
                        animateSquare(square, Math.random() * repeatDelay);
                    }, duration / 4);
                }, duration / 2);
            }, delay);
        };

        const generateSquares = () => {
            getDimensions();
            if (!dimensions.width || !dimensions.height) return;

            squareContainer.innerHTML = '';
            squares = [];

            for (let i = 0; i < numSquares; i++) {
                const pos = getRandomPosition();
                const element = createSquareElement(pos);
                const square = { id: i, pos, element, animating: false };
                squares.push(square);
                squareContainer.appendChild(element);
                animateSquare(square, i * 100);
            }
        };

        const resizeObserver = new ResizeObserver(() => {
            generateSquares();
        });

        resizeObserver.observe(container);
        generateSquares();

        return () => {
            resizeObserver.disconnect();
        };
    }, [numSquares, maxOpacity, duration, repeatDelay, strokeColor, fillColor, width, height]);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
            <svg
                ref={svgRef}
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern
                        id={patternId.current}
                        width={width}
                        height={height}
                        patternUnits="userSpaceOnUse"
                        x="-1"
                        y="-1"
                    >
                        <path
                            d={`M.5 ${height}V.5H${width}`}
                            fill="none"
                            stroke={strokeColor}
                            strokeDasharray="0"
                        />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#${patternId.current})`} />
                <g className="squares-container" />
            </svg>
        </div>
    );
}
