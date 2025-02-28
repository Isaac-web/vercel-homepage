import { useState, useEffect } from 'react';

const Triangle = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for subtle interaction
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Triangle dimensions
  const width = 500;
  const height = 450;
  const numberOfLines = 60;

  // Calculate the gradient background
  const gradientBackground = `
    radial-gradient(circle at ${50 + mousePosition.x * 10}% ${
    50 + mousePosition.y * 10
  }%, 
      rgba(0, 128, 128, 0.8) 0%, 
      rgba(0, 200, 0, 0.6) 25%, 
      rgba(255, 200, 0, 0.6) 50%, 
      rgba(255, 100, 0, 0.6) 75%, 
      rgba(255, 0, 0, 0.8) 100%)
  `;

  // Generate concentric triangles
  const generateTrianglePaths = () => {
    const paths = [];
    const centerX = width / 2;
    const baseY = height * 0.9;

    for (let i = 0; i < numberOfLines; i++) {
      const ratio = i / numberOfLines;
      const currentWidth = width * (1 - ratio);
      const currentHeight = height * (1 - ratio);

      // Calculate vertices
      const topX = centerX;
      const topY = baseY - currentHeight;
      const leftX = centerX - currentWidth / 2;
      const leftY = baseY;
      const rightX = centerX + currentWidth / 2;
      const rightY = baseY;

      const path = `M ${topX} ${topY} L ${leftX} ${leftY} L ${rightX} ${rightY} Z`;

      // Calculate opacity based on depth
      const opacity = 0.2 + (1 - ratio) * 0.8;

      paths.push(
        <path
          key={i}
          d={path}
          fill="none"
          stroke="#000"
          strokeWidth="0.5"
          opacity={opacity}
        />
      );
    }

    return paths;
  };

  // Create subtle 3D tilt effect based on mouse position
  const transform = `
    perspective(1000px) 
    rotateX(${mousePosition.y * 5}deg) 
    rotateY(${mousePosition.x * 5}deg)
  `;

  return (
    <div
      className="w-full flex items-center justify-center overflow-hidden"
      //   style={{ background: gradientBackground }}
    >
      <div
        className="relative"
        style={{
          transform,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
          {generateTrianglePaths()}
        </svg>
      </div>
    </div>
  );
};

export default Triangle;
