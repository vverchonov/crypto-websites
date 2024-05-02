"use client";
import React, { useRef, useEffect, useState } from "react";

const startingPoint = -50;
const itemSpeed = 3;
const bearSpeed = 5;

let health = 7;
let score = 0;
let dead = false;
let keyPressed: Record<number, boolean> = {};

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

var broccoli = {
  posX: 330,
  posY: startingPoint,
  disWidth: 60,
  disHeight: 60,
};

var xan = {
  posX: 80,
  posY: startingPoint,
  disWidth: 60,
  disHeight: 90,
  isOnScreen: false,
};

export const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [highScore, setHighScore] = useState(0);

  const images = useRef({
    bearRight: new Image(),
    bearLeft: new Image(),
    broccoli: new Image(),
    xan: new Image(),
    sig: new Image(),
    background: new Image(),
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
    audio.volume = 0.2;
    audio.src = src;
    return audio;
  };

  useEffect(() => {
    images.current = {
      bearRight: loadImage("/game/bear-right.webp"),
      bearLeft: loadImage("/game/bear-left.webp"),
      broccoli: loadImage("/game/broccoli.webp"),
      xan: loadImage("/game/xan.webp"),
      sig: loadImage("/game/sig.webp"),
      background: loadImage("/game/bg.webp"),
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
  }, []);

  useEffect(() => {
    const storedHighScore = localStorage.getItem("highscore");
    if (storedHighScore) {
      setHighScore(parseInt(storedHighScore, 10));
    }
  }, []);

  useEffect(() => {
    const startGame = (
      canvas: HTMLCanvasElement,
      context: CanvasRenderingContext2D | null
    ) => {
      canvas.removeEventListener(
        "mousedown",
        () => {
          startGame(canvas, context);
        },
        false
      );
      updateGameArea(context);
    };

    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (!context) return;
      var x = canvas.width / 2;
      var y = canvas.height / 2;
      context.font = "2rem '__Permanent_Marker_03f989'";
      context.fillStyle = "black";
      context.textAlign = "center";
      context.fillText("Catch Cigarettes and Xans", x, 290);
      context.fillText("Avoid fucking Dildos", x, 320);
      context.fillText("Use the arrow keys to move the bear", x, 376);
      context.fillText("Click anywhere to start.", x, 440);
      canvas.addEventListener(
        "mousedown",
        () => {
          startGame(canvas, context);
        },
        false
      );
    }
  }, [dead]);

  function getXan(chanse: number) {
    if (Math.floor(Math.random() * chanse) == 1) {
      xan.isOnScreen = true;
      xan.posY = startingPoint;
    }
  }

  const CheckCollision = (canvas: HTMLCanvasElement) => {
    if (bear.posX + bear.disWidth == canvas.width) {
      bear.posX = bear.posX - 5;
    }
    if (bear.posX == 0) {
      bear.posX = bear.posX + 5;
    }
    if (
      sig.posY + sig.disHeight == bear.posY + 100 &&
      bear.posX < sig.posX + sig.disWidth &&
      sig.posX < bear.posX + bear.disWidth
    ) {
      var randVegX = Math.floor(Math.random() * 600 + 1);
      sig.posX = randVegX;
      sig.posY = startingPoint;
      sounds.current.sig.play();
      score++;
      //   movingSpeed-;
    }

    if (sig.posY + sig.disHeight == canvas.height) {
      var randVegX = Math.floor(Math.random() * 600 + 1);
      sig.posX = randVegX;
      sig.posY = startingPoint;
      health--;
      getXan(3);
      sounds.current.fuck.play();
      if (health == -1) {
        // dead = true;
        // gameOver();
      }
    }

    if (
      broccoli.posY + broccoli.disHeight == bear.posY + 100 &&
      bear.posX < broccoli.posX &&
      broccoli.posX + broccoli.disWidth < bear.posX + bear.disWidth
    ) {
      var randCanX = Math.floor(Math.random() * 600 + 1);
      broccoli.posX = randCanX;
      broccoli.posY = startingPoint;
      health--;
      getXan(3);

      sounds.current.puke.play();
      if (health == -1) {
        // dead = true;
        // gameOver();
      }
    }

    if (broccoli.posY + broccoli.disHeight == canvas.height) {
      var randCanX = Math.floor(Math.random() * 440 + 1);
      broccoli.posX = randCanX;
      broccoli.posY = startingPoint;
      getXan(10);
    }

    if (
      xan.posY + xan.disHeight == bear.posY + 100 &&
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
    if (xan.posY + xan.disHeight == canvas.height) {
      var randCanX3 = Math.floor(Math.random() * 440 + 1);
      xan.posX = randCanX3;
      xan.posY = startingPoint;
      if (xan.isOnScreen) {
        sounds.current.fuck.play();
      }
      xan.isOnScreen = false;
    }
  };

  const updateGameArea = (context: CanvasRenderingContext2D | null) => {
    const canvas = canvasRef.current;
    if (!dead && context && canvas) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        images.current.background,
        0,
        0,
        canvas.width,
        canvas.height
      );

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
        images.current.broccoli,
        broccoli.posX,
        broccoli.posY,
        broccoli.disWidth,
        broccoli.disHeight
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
      context.fillRect(20, 20, (650 / 5) * health, 20);
      context.fillStyle = "red";
      context.rect(20, 20, 650, 20);
      context.stroke();
      context.fillStyle = "white";
      context.fillText("Score: " + score, 80, 80);

      sig.posY = sig.posY + itemSpeed;
      broccoli.posY = broccoli.posY + itemSpeed;
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
      requestAnimationFrame(() => updateGameArea(context));
    }
  };

  return (
    <div className="z-50">
      <canvas
        ref={canvasRef}
        width="690"
        height="690"
        className="bg-white rounded-xl shadow-xl"
      />
    </div>
  );
};
