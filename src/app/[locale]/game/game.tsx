"use client";
import React, { useRef, useEffect, useState } from "react";
import { HeaderText } from "../components/common/text/header-text";
import { BigText } from "../components/common/text/big-text";

interface ImageRefs {
  bearRight: HTMLImageElement | null;
  bearLeft: HTMLImageElement | null;
  dildo: HTMLImageElement | null;
  sig: HTMLImageElement | null;
  xan: HTMLImageElement | null;
  background: HTMLImageElement | null;
  start: HTMLImageElement | null;
  over: HTMLImageElement | null;
}

interface AudioRefs {
  sig: HTMLAudioElement | null;
  puke: HTMLAudioElement | null;
  xan: HTMLAudioElement | null;
  fuck: HTMLAudioElement | null;
}

const STARTING_POINT = -50;
const BEAR_SPEED = 11;
const FRAME_RATE = 1000 / 75;
const MAX_HEALTH = 12.5;
const ACCELERATION = 0.1;
const CIG_HEALTH = 0.5;
const XAN_HEALTH = 1;
var HIGH_SCORE = 0;

var itemSpeed = 5;
var lastFrameTime = 0;
var health = MAX_HEALTH;
var score = 0;
var dead = false;
var keyPressed: Record<number, boolean> = {};
var ctx: CanvasRenderingContext2D | null;

var bear = {
  source: null,
  total_frames: 2,
  state: true,
  posX: 40,
  posY: 360,
  disWidth: 200,
  disHeight: 300,
};

var sig = {
  posX: 150,
  posY: STARTING_POINT,
  disWidth: 80,
  disHeight: 50,
};

var dildo = {
  posX: 330,
  posY: STARTING_POINT,
  disWidth: 60,
  disHeight: 60,
};

var xan = {
  posX: 80,
  posY: STARTING_POINT,
  disWidth: 60,
  disHeight: 30,
  isOnScreen: false,
};

export const Game = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const leftRef = useRef<HTMLImageElement>(null);
  const rightRef = useRef<HTMLImageElement>(null);
  const [replay, setReplay] = useState(false);
  const [resized, setResized] = useState(false);
  const images = useRef<ImageRefs>({
    bearRight: null,
    bearLeft: null,
    dildo: null,
    xan: null,
    sig: null,
    background: null,
    start: null,
    over: null,
  });

  const sounds = useRef<AudioRefs>({
    sig: null,
    puke: null,
    xan: null,
    fuck: null,
  });

  useEffect(() => {
    const savedHighScore = parseInt(
      localStorage.getItem("highscore") || "0",
      10
    );
    HIGH_SCORE = savedHighScore;
  }, []);

  const resizeCanvas = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas) {
      var dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      if (!ctx) return;
      ctx.scale(dpr, dpr);
      setResized(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  const loadImage = (src: string) => {
    const img = new Image();
    img.src = src;
    return img;
  };

  const loadSound = (src: string) => {
    const audio = new Audio();
    audio.volume = 0.1;
    audio.src = src;
    return audio;
  };

  useEffect(() => {
    images.current = {
      bearRight: loadImage("/game/bear-right.webp"),
      bearLeft: loadImage("/game/bear-left.webp"),
      dildo: loadImage("/game/dick2.webp"),
      xan: loadImage("/game/xan.webp"),
      sig: loadImage("/game/sig.webp"),
      background: loadImage("/game/bg.webp"),
      start: loadImage("/game/start.webp"),
      over: loadImage("/game/over.webp"),
    };

    sounds.current = {
      sig: loadSound("/game/sounds/sig.mp3"),
      puke: loadSound("/game/sounds/puke.mp3"),
      xan: loadSound("/game/sounds/xan.mp3"),
      fuck: loadSound("/game/sounds/fuck.mp3"),
    };

    const handleKeyDown = (e: { keyCode: any }) => {
      keyPressed = { ...keyPressed, [e.keyCode]: true };
    };
    const handleKeyUp = (e: { keyCode: any }) => {
      keyPressed = { ...keyPressed, [e.keyCode]: false };
    };
    const handleLeftDown = () => (keyPressed = { ...keyPressed, [37]: true });
    const handleLeftUp = () => (keyPressed = { ...keyPressed, [37]: false });
    const handleRightDown = () => (keyPressed = { ...keyPressed, [39]: true });
    const handleRightUp = () => (keyPressed = { ...keyPressed, [39]: false });

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    if (leftRef.current) {
      leftRef.current.addEventListener("mousedown", handleLeftDown);
      leftRef.current.addEventListener("mouseup", handleLeftUp);
      leftRef.current.addEventListener("mouseleave", handleLeftUp);
      leftRef.current.addEventListener("touchstart", handleLeftDown, {
        passive: false,
      });
      leftRef.current.addEventListener("touchend", handleLeftUp);
      leftRef.current.addEventListener("touchcancel", handleLeftUp);
    }

    if (rightRef.current) {
      rightRef.current.addEventListener("mousedown", handleRightDown);
      rightRef.current.addEventListener("mouseup", handleRightUp);
      rightRef.current.addEventListener("mouseleave", handleRightUp);
      rightRef.current.addEventListener("touchstart", handleRightDown, {
        passive: false,
      });
      rightRef.current.addEventListener("touchend", handleRightUp);
      rightRef.current.addEventListener("touchcancel", handleRightUp);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);

      if (leftRef.current) {
        leftRef.current.removeEventListener("mousedown", handleLeftDown);
        leftRef.current.removeEventListener("mouseup", handleLeftUp);
        leftRef.current.removeEventListener("mouseleave", handleLeftUp);
        leftRef.current.removeEventListener("touchstart", handleLeftDown);
        leftRef.current.removeEventListener("touchend", handleLeftUp);
        leftRef.current.removeEventListener("touchcancel", handleLeftUp);
      }
      if (rightRef.current) {
        rightRef.current.removeEventListener("mousedown", handleRightDown);
        rightRef.current.removeEventListener("mouseup", handleRightUp);
        rightRef.current.removeEventListener("mouseleave", handleRightUp);
        rightRef.current.removeEventListener("touchstart", handleRightDown);
        rightRef.current.removeEventListener("touchend", handleRightUp);
        rightRef.current.removeEventListener("touchcancel", handleRightUp);
      }
    };
  });

  function gameLoop(timestamp: number) {
    const delta = timestamp - lastFrameTime;
    if (delta >= FRAME_RATE) {
      lastFrameTime = timestamp - (delta % FRAME_RATE);
      updateGameArea();
    }
    requestAnimationFrame(gameLoop);
  }

  useEffect(() => {
    const startGame = (canvas: HTMLCanvasElement) => {
      canvas.removeEventListener(
        "mousedown",
        () => {
          startGame(canvas);
        },
        false
      );
      requestAnimationFrame(gameLoop);
    };

    const canvas = canvasRef.current;
    canvas?.removeEventListener("mousedown", () => setReplay(!replay));
    dead = false;
    health = MAX_HEALTH;
    score = 0;
    setResized(false);
    setReplay(false);
    xan.posY = STARTING_POINT;
    sig.posY = STARTING_POINT;
    dildo.posY = STARTING_POINT;
    itemSpeed = 5;
    lastFrameTime = 0;
    health = MAX_HEALTH;
    bear.posX = 40;

    if (canvas) {
      ctx = canvas.getContext("2d");
      if (!ctx) return;

      bear.disHeight = canvas.height / 2.2;
      bear.posY = canvas.height - bear.disHeight;

      var dpr = window.devicePixelRatio || 1;
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const startImage = images.current.start;
      if (startImage && !startImage.src) {
        startImage.onload = () =>
          ctx?.drawImage(startImage, 0, 0, canvas.width, canvas.height);
        startImage.src = "/game/start.webp";
      } else if (startImage && startImage.complete) {
        ctx.drawImage(startImage, 0, 0, canvas.width, canvas.height);
      } else {
        if (!startImage) return;
        startImage.onload = () =>
          ctx?.drawImage(startImage, 0, 0, canvas.width, canvas.height);
      }
      canvas.addEventListener(
        "mousedown",
        () => {
          startGame(canvas);
        },
        false
      );
    }
  }, [replay, resized]);

  function getXan(chanse: number) {
    if (Math.floor(Math.random() * chanse) == 1) {
      xan.isOnScreen = true;
      xan.posY = STARTING_POINT;
    }
  }

  const CheckCollision = (canvas: HTMLCanvasElement) => {
    if (bear.posX + bear.disWidth >= canvas.width) {
      bear.posX = bear.posX - 5;
    }
    if (bear.posX <= 0) {
      bear.posX = bear.posX + 5;
    }
    if (
      sig.posY + sig.disHeight >= bear.posY + 50 &&
      bear.posX <= sig.posX + sig.disWidth &&
      sig.posX <= bear.posX + bear.disWidth
    ) {
      var randVegX = Math.floor(Math.random() * 600 + 1);
      sig.posX = randVegX;
      sig.posY = STARTING_POINT;
      health += health < MAX_HEALTH ? CIG_HEALTH : 0;
      score++;
      itemSpeed = itemSpeed + ACCELERATION;
      if (sounds.current.sig) sounds.current.sig.play();
    }

    if (sig.posY + sig.disHeight >= canvas.height) {
      var randVegX = Math.floor(Math.random() * 600 + 1);
      sig.posX = randVegX;
      sig.posY = STARTING_POINT;
      health--;
      getXan(3);
      if (sounds.current.fuck) sounds.current.fuck.play();
      if (health < 0) {
        dead = true;
        gameOver(score);
      }
    }

    if (
      dildo.posY + dildo.disHeight >= bear.posY + 50 &&
      bear.posX < dildo.posX &&
      dildo.posX + dildo.disWidth < bear.posX + bear.disWidth
    ) {
      var randCanX = Math.floor(Math.random() * 600 + 1);
      dildo.posX = randCanX;
      dildo.posY = STARTING_POINT;
      health--;
      getXan(3);

      if (sounds.current.puke) sounds.current.puke.play();
      if (health < 0) {
        dead = true;
        gameOver(score);
      }
    }

    if (dildo.posY + dildo.disHeight >= canvas.height) {
      var randCanX = Math.floor(Math.random() * 440 + 1);
      dildo.posX = randCanX;
      dildo.posY = STARTING_POINT;
      getXan(10);
    }

    if (
      xan.posY + xan.disHeight >= bear.posY + 50 &&
      bear.posX < xan.posX &&
      xan.posX + xan.disWidth < bear.posX + bear.disWidth
    ) {
      var randCanX3 = Math.floor(Math.random() * 440 + 1);
      xan.posX = randCanX3;
      xan.posY = STARTING_POINT;
      if (xan.isOnScreen && health <= 4) {
        health += health < MAX_HEALTH ? XAN_HEALTH : 0;
        if (sounds.current.xan) sounds.current.xan.play();
      }
      xan.isOnScreen = false;
    }
    if (xan.posY + xan.disHeight >= canvas.height) {
      var randCanX3 = Math.floor(Math.random() * 440 + 1);
      xan.posX = randCanX3;
      xan.posY = STARTING_POINT;
      if (xan.isOnScreen) {
        if (sounds.current.fuck) sounds.current.fuck.play();
      }
      xan.isOnScreen = false;
    }
  };

  const gameOver = (score: number) => {
    const canvas = canvasRef.current;
    if (canvas) {
      ctx = canvas.getContext("2d");
      if (!ctx) return;
      if (!images.current.over) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        images.current.over,
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
      var text = "Final Score: " + score;
      ctx.font = "1.6rem '__Permanent_Marker_03f989'";
      ctx.fillStyle = "black";
      var textWidth = ctx.measureText(text).width;
      var x = canvas.width / 2 - textWidth / 2;
      var y = canvas.width * 0.5;
      ctx.fillText(text, x, y);
      if (score > HIGH_SCORE) {
        HIGH_SCORE = score;
        localStorage.setItem("highscore", HIGH_SCORE.toString());
      }
      text = "High Score: " + HIGH_SCORE;
      var textWidth = ctx.measureText(text).width;
      var x = canvas.width / 2 - textWidth / 2;
      var y = canvas.width * 0.55;
      ctx.fillText(text, x, y);
      canvas.addEventListener("mousedown", () => setReplay(!replay), false);
    }
  };

  const updateGameArea = () => {
    const canvas = canvasRef.current;
    if (!dead && ctx && canvas) {
      if (!images.current.background) return;
      if (!images.current.bearRight) return;
      if (!images.current.bearLeft) return;
      if (!images.current.sig) return;
      if (!images.current.dildo) return;
      if (!images.current.xan) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        images.current.background,
        0,
        0,
        canvas.width,
        canvas.height
      );

      const bearImage = bear.state
        ? images.current.bearRight
        : images.current.bearLeft;
      ctx.drawImage(
        bearImage,
        bear.posX,
        bear.posY,
        bear.disWidth,
        bear.disHeight
      );

      ctx.drawImage(
        images.current.sig,
        sig.posX,
        sig.posY,
        sig.disWidth,
        sig.disHeight
      );

      ctx.drawImage(
        images.current.dildo,
        dildo.posX,
        dildo.posY,
        dildo.disWidth,
        dildo.disHeight
      );

      if (xan.isOnScreen) {
        ctx.drawImage(
          images.current.xan,
          xan.posX,
          xan.posY,
          xan.disWidth,
          xan.disHeight
        );
      }
      ctx.font = "1.5rem '__Permanent_Marker_03f989'";
      ctx.fillStyle = "red";
      ctx.beginPath();
      ctx.fillRect(20, 20, ((canvas.width - 40) / MAX_HEALTH) * health, 20);
      ctx.fillStyle = "red";
      ctx.rect(20, 20, canvas.width - 40, 20);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fillText("Score: " + score, 20, 80);

      sig.posY = sig.posY + itemSpeed;
      dildo.posY = dildo.posY + itemSpeed;
      xan.posY = xan.posY + itemSpeed;

      if (keyPressed[39]) {
        bear.state = true;
        bear.posX = bear.posX + BEAR_SPEED;
      }
      if (keyPressed[37]) {
        bear.state = false;
        bear.posX = bear.posX - BEAR_SPEED;
      }

      CheckCollision(canvas);
    }
  };

  return (
    <div className="z-0 min-h-screen w-full flex flex-col justify-center align-center items-center content-center bg-black">
      <HeaderText
        text={props.t1}
        customClass="text-white text-4xl md:text-6xl text-center"
      />
      <BigText
        text={props.t2}
        customClass="text-white text-2xl md:text-4xl text-center"
      />
      <canvas
        ref={canvasRef}
        // width="690"
        // height="690"
        className="bg-transparent rounded-xl shadow-xl mt-12 w-[99%] md:w-[60%] xl:w-[35%] h-auto aspect-square"
      />
      <div className="xl:hidden flex flex-row gap-24 justify-center items-center mt-24 mb-12">
        <img
          ref={leftRef}
          src="/game/left.webp"
          alt="Arrow Left"
          className="w-[27%] md:w-[20%] select-none"
        />
        <img
          ref={rightRef}
          src="/game/right.webp"
          alt="Arrow Right"
          className="w-[27%] md:w-[20%] select-none"
        />
      </div>
    </div>
  );
};
