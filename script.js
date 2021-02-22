const videoElem = document.getElementById("video");
const button = document.getElementById("button");

//async func, prompt user to select a media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElem.srcObject = mediaStream;
    videoElem.onloadedmetadata = () => {
      videoElem.play();
    };
  } catch (error) {
    console.log("caught error in selectMediaStream function", error);
  }
}

button.addEventListener("click", async () => {
  //disable button
  button.disabled = true;
  //start picture in picture
  await videoElem.requestPictureInPicture();
  //reset button
  button.disabled = false;
});

//on load
selectMediaStream();
