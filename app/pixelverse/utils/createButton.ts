// app/pixelverse/utils/createButton.ts
import { Container, Graphics, Text } from "pixi.js";

export function createButton(
  label: string,
  x: number,
  y: number,
  onClick: () => void
): Container {
  const button = new Container();
  button.x = x;
  button.y = y;

  const bg = new Graphics();
  bg.beginFill(0x333333);
  bg.drawRoundedRect(0, 0, 100, 40, 8);
  bg.endFill();
  button.addChild(bg);

  const text = new Text(label, {
    fill: "white",
    fontSize: 16,
  });
  text.anchor.set(0.5);
  text.x = 50;
  text.y = 20;
  button.addChild(text);

  // Add interactivity
  button.interactive = true;
  button.buttonMode = true;
  button.on("pointerdown", onClick);

  return button;
}
