function displayVideo() {
  const card = document.querySelector(".cards");
  const arr = [
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
    "cLfSpFg6Pxg",
  ];
  card.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    var video = `<a href="https://youtu.be/cLfSpFg6Pxg"
    ><img class='video-img' src='https://i.ytimg.com/vi/cLfSpFg6Pxg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDp5q3gcyOE7viwmEDFPyPYqQ9xfw'/>
    <div class='video-title'>
    <img src='https://yt3.ggpht.com/xZbliDrv1hQJOWfLsK29iWa0pQUWTr-1AO-vluYNr_PPCcvoDUog8IMEH4nAKQFdPHdmlwoy=s48-c-k-c0x00ffffff-no-rj'/>
    <p>HIGHLIGHTS: Juventus vs Atletico Madrid - 3-0 - Ronaldo hat-trick completes comeback!</p>
    </div>
    </a>`;
    console.log(arr[i]);
    let item = document.createElement("div");
    item.classList.add("video");
    item.innerHTML = video;
    card.appendChild(item);
  }
}
displayVideo();
