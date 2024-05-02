"use client";
import React, { useRef, useEffect, useState } from "react";
import { start } from "repl";
import { HeaderText } from "../components/common/text/header-text";
import { BigText } from "../components/common/text/big-text";

const startingPoint = -50;
const bearSpeed = 11;
const frameRate = 1000 / 75;

var itemSpeed = 5;
var lastFrameTime = 0;
var health = 6.5;
var score = 0;
var dead = false;
var keyPressed: Record<number, boolean> = {};
var context: CanvasRenderingContext2D | null;
var highScore = parseInt(localStorage.getItem("highscore") || "0", 10) || 0;

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
  posY: startingPoint,
  disWidth: 80,
  disHeight: 50,
};

var dildo = {
  posX: 330,
  posY: startingPoint,
  disWidth: 60,
  disHeight: 60,
};

var xan = {
  posX: 80,
  posY: startingPoint,
  disWidth: 60,
  disHeight: 30,
  isOnScreen: false,
};

export const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [replay, setReplay] = useState(false);

  const images = useRef({
    bearRight: new Image(),
    bearLeft: new Image(),
    dildo: new Image(),
    xan: new Image(),
    sig: new Image(),
    background: new Image(),
    start: new Image(),
    over: new Image(),
  });

  const sounds = useRef({
    sig: new Audio(),
    puke: new Audio(),
    xan: new Audio(),
    fuck: new Audio(),
  });

  const loadImage = (src: string) => {
    const img = new Image();
    img.src = src;
    return img;
  };

  const loadSound = (src: string) => {
    const audio = new Audio();
    audio.volume = 0.1;
    return audio;
  };

  useEffect(() => {
    console.log("images");
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

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  function gameLoop(timestamp: number) {
    const delta = timestamp - lastFrameTime;
    if (delta >= frameRate) {
      lastFrameTime = timestamp - (delta % frameRate);
      updateGameArea();
    }
    requestAnimationFrame(gameLoop);
  }

  useEffect(() => {
    console.log("start");
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
    dead = false;
    if (canvas) {
      context = canvas.getContext("2d");
      if (!context) return;
      context.beginPath();
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "white";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current.start, 0, 0, 690, 690);
      canvas.addEventListener(
        "mousedown",
        () => {
          startGame(canvas);
        },
        false
      );
    }
  }, [replay]);

  function getXan(chanse: number) {
    if (Math.floor(Math.random() * chanse) == 1) {
      xan.isOnScreen = true;
      xan.posY = startingPoint;
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
      sig.posY = startingPoint;
      health += 0.5;
      score++;
      itemSpeed = itemSpeed + 0.5;
      sounds.current.sig.play();
    }

    if (sig.posY + sig.disHeight >= canvas.height) {
      var randVegX = Math.floor(Math.random() * 600 + 1);
      sig.posX = randVegX;
      sig.posY = startingPoint;
      health--;
      getXan(3);
      sounds.current.fuck.play();
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
      dildo.posY = startingPoint;
      health--;
      getXan(3);

      sounds.current.puke.play();
      if (health < 0) {
        dead = true;
        gameOver(score);
      }
    }

    if (dildo.posY + dildo.disHeight >= canvas.height) {
      var randCanX = Math.floor(Math.random() * 440 + 1);
      dildo.posX = randCanX;
      dildo.posY = startingPoint;
      getXan(10);
    }

    if (
      xan.posY + xan.disHeight >= bear.posY + 50 &&
      bear.posX < xan.posX &&
      xan.posX + xan.disWidth < bear.posX + bear.disWidth
    ) {
      var randCanX3 = Math.floor(Math.random() * 440 + 1);
      xan.posX = randCanX3;
      xan.posY = startingPoint;
      if (xan.isOnScreen && health <= 4) {
        health++;
        sounds.current.xan.play();
      }
      xan.isOnScreen = false;
    }
    if (xan.posY + xan.disHeight >= canvas.height) {
      var randCanX3 = Math.floor(Math.random() * 440 + 1);
      xan.posX = randCanX3;
      xan.posY = startingPoint;
      if (xan.isOnScreen) {
        sounds.current.fuck.play();
      }
      xan.isOnScreen = false;
    }
  };

  const gameOver = (score: number) => {
    const canvas = canvasRef.current;
    if (canvas) {
      context = canvas.getContext("2d");
      if (!context) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      context.fillStyle = "transparent";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current.over, 0, 0, 690, 690);
      var text = "Final Score: " + score;
      context.font = "40px '__Permanent_Marker_03f989'";
      context.fillStyle = "black";
      var textWidth = context.measureText(text).width;
      var x = canvas.width / 2 - textWidth / 2;
      var y = 400;
      context.fillText(text, x, y);
      if (score > highScore) {
        highScore = score;
        localStorage.setItem("highscore", highScore.toString());
      }
      text = "High Score: " + highScore;
      var textWidth = context.measureText(text).width;
      var x = canvas.width / 2 - textWidth / 2;
      var y = 350;
      context.fillText(text, x, 350);
      canvas.addEventListener("mousedown", () => setReplay(!replay), false);
    }
  };

  const updateGameArea = () => {
    const canvas = canvasRef.current;
    if (!dead && context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images.current.background, 0, 0, 690, 690);

      const bearImage = bear.state
        ? images.current.bearRight
        : images.current.bearLeft;
      context.drawImage(
        bearImage,
        bear.posX,
        bear.posY,
        bear.disWidth,
        bear.disHeight
      );

      context.drawImage(
        images.current.sig,
        sig.posX,
        sig.posY,
        sig.disWidth,
        sig.disHeight
      );

      context.drawImage(
        images.current.dildo,
        dildo.posX,
        dildo.posY,
        dildo.disWidth,
        dildo.disHeight
      );

      if (xan.isOnScreen) {
        context.drawImage(
          images.current.xan,
          xan.posX,
          xan.posY,
          xan.disWidth,
          xan.disHeight
        );
      }
      context.font = "1.5rem '__Permanent_Marker_03f989'";
      context.fillStyle = "red";
      context.beginPath();
      context.fillRect(20, 20, (650 / 6.5) * health, 20);
      context.fillStyle = "red";
      context.rect(20, 20, 650, 20);
      context.stroke();
      context.fillStyle = "white";
      context.fillText("Score: " + score, 80, 80);

      sig.posY = sig.posY + itemSpeed;
      dildo.posY = dildo.posY + itemSpeed;
      xan.posY = xan.posY + itemSpeed;

      if (keyPressed[39]) {
        bear.state = true;
        bear.posX = bear.posX + bearSpeed;
      }
      if (keyPressed[37]) {
        bear.state = false;
        bear.posX = bear.posX - bearSpeed;
      }

      CheckCollision(canvas);
    }
  };

  return (
    <div className="z-0 min-h-screen w-full flex flex-col justify-center align-center items-center content-center bg-black">
      <HeaderText text="Bear Game" customClass="text-white text-6xl" />
      <BigText
        text="Use arrows for controls"
        customClass="text-white text-4xl"
      />
      <canvas
        ref={canvasRef}
        width="690"
        height="690"
        className="bg-transparent rounded-xl shadow-xl mt-2"
      />
    </div>
  );
};
