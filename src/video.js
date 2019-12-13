const open = require('opencv4nodejs');
const fs = require('fs');
const path = require('path');

const cam = new open.VideoWriter(
  'test.mp4', 
  open.CAP_PROP_FOURCC, 
  30, 
  new open.Size(720, 720), 
  true
)

const getVideo = () => {
  const mat = new open.Mat({ sizes: [5] });

  setTimeout(() => {
    // const frame = cam.write(mat);
    console.log('mat: ', mat);
  }, 2000)
}

getVideo()

// const getPhoto = () => {
//   const frame = cam.write();
//   const imageBuffer = open.imencode('.jpg', frame);
//   const imageName = `${new Date().valueOf()}-photo.jpg`;

//   fs.writeFileSync(path.resolve(__dirname, 'images', imageName), imageBuffer)
// };

// getPhoto()

// const fps = 30

// setInterval(getPhoto, 1000 / fps)