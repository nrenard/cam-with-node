const open = require('opencv4nodejs');
const fs = require('fs');
const path = require('path');

const cam = new open.VideoCapture(0);

console.log('que pora')

cam.set(open.CAP_PROP_FRAME_HEIGHT, 300);
cam.set(open.CAP_PROP_FRAME_WIDTH, 300);

const getPhoto = () => {

  const frame = cam.read();
  const imageBuffer = open.imencode('.jpg', frame);
  const imageName = `${new Date().valueOf()}-photo.jpg`;
  
  fs.writeFileSync(path.resolve(__dirname, '..', 'images', imageName), imageBuffer)
};

getPhoto()

// const fps = 30

// setInterval(getPhoto, 1000 / fps)