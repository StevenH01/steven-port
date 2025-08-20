// app/pixelverse/scenes/LandingRoom.ts
import { Container, Graphics, Text } from 'pixi.js'
import { createButton } from '../utils/createButton'

export function createLandingRoom(app: PIXI.Application, onExit: () => void): Container {
  const room = new Container()

  // Background wall
  const background = new Graphics()
  background.beginFill(0x1e1e1e)
  background.drawRect(0, 0, app.screen.width, app.screen.height)
  background.endFill()
  room.addChild(background)

  // Placeholder object - table
  const table = new Graphics()
  table.beginFill(0x5533aa)
  table.drawRect(100, app.screen.height - 150, 200, 40)
  table.endFill()
  room.addChild(table)

  // Placeholder object - bookshelf
  const bookshelf = new Graphics()
  bookshelf.beginFill(0xaa3333)
  bookshelf.drawRect(app.screen.width - 180, 100, 60, 200)
  bookshelf.endFill()
  room.addChild(bookshelf)

  // Exit button (front door at bottom center)
  const exitButton = createButton("Exit", app.screen.width / 2 - 50, app.screen.height - 60, onExit)
  room.addChild(exitButton)

  // Room title
  const label = new Text('Pixelverse Landing Room', {
    fill: 'white',
    fontSize: 26,
  })
  label.x = 30
  label.y = 30
  room.addChild(label)

  return room
}
