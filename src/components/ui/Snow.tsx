"use client";
import React, { useEffect, useRef } from "react";

export default function Snow() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const snowflakes: Snowflake[] = [];

  function createSnowflake(): Snowflake {
    return {
      x: Math.random() * (canvasRef.current?.width || 0),
      y: -500,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    };
  }

function drawSnowflake(snowflake: Snowflake): void {
  const ctx = ctxRef.current;
  if (!ctx) return; // Skip drawing if context is not available

  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`!;
  ctx.fill();
}

  function updateSnowflake(snowflake: Snowflake): void {
    snowflake.y += snowflake.speed;

    if (snowflake.y > (canvasRef.current?.height || 0)) {
      Object.assign(snowflake, createSnowflake());
    }
  }

  function draw(): void {
    ctxRef.current?.clearRect(
      0,
      0,
      canvasRef.current?.width || 0,
      canvasRef.current?.height || 0
    );

    for (const snowflake of snowflakes) {
      drawSnowflake(snowflake);
      updateSnowflake(snowflake);
    }

    requestAnimationFrame(draw);
  }

  function init(): void {
    for (let i = 0; i < 100; i++) {
      snowflakes.push(createSnowflake());
    }

    draw();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      throw new Error("Canvas element with ID 'snowCanvas' not found");
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("2D context not supported");
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvasRef.current = canvas;
    ctxRef.current = ctx;

    init();
  }, []);

  return <canvas ref={canvasRef} id="snowCanvas" className="fixed w-full h-screen z-50 pointer-events-none"></canvas>;
}

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  opacity: number;
  
}
