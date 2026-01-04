const playlist = [
  {
    title: "Big Buck Bunny - Short Film",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  },
  {
    title: "Elephants Dream - Animation",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  {
    title: "For Bigger Blazes - Demo",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    title: "For Bigger Escape - Adventure",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  },
  {
    title: "For Bigger Fun - Entertainment",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  },
  {
    title: "For Bigger Joyrides - Action",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  },
  {
    title: "For Bigger Meltdowns - Drama",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  },
  {
    title: "Sintel - Fantasy Short",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  },
  {
    title: "Tears of Steel - Sci-Fi",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  },
  {
    title: "Subaru Outback - Commercial",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
  },
];

const mainVideo = document.getElementById("mainVideo");
const currentTitleEl = document.getElementById("currentTitle");
const playlistItemsContainer = document.getElementById("playlistItems");

let currentIndex = 0;

function createPlaylist() {
  playlist.forEach((video, index) => {
    const item = document.createElement("div");
    item.className = "video-item";
    item.innerHTML = `
                    <span class="video-number">${index + 1}</span>
                    <span class="video-title">${video.title}</span>
                `;

    item.addEventListener("click", () => loadVideo(index));

    playlistItemsContainer.appendChild(item);
  });
}

function loadVideo(index) {
  currentIndex = index;
  mainVideo.src = playlist[index].src;
  mainVideo.load();
  mainVideo.play();

  currentTitleEl.innerHTML = `${playlist[index].title} <span class="play-indicator">▶</span>`;

  document.querySelectorAll(".video-item").forEach((item, i) => {
    item.classList.toggle("active", i === index); // if the current video ex 1 = running video = 1 then true add active
  });
}

mainVideo.addEventListener("click", () => {
  if (mainVideo.paused) {
    mainVideo.play();
  } else {
    mainVideo.pause();
  }
});

mainVideo.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    mainVideo.requestFullscreen().catch((err) => {
      console.log("Fullscreen error:", err);
    });
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (currentIndex > 0) {
      loadVideo(currentIndex - 1);
    }
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (currentIndex < playlist.length - 1) {
      loadVideo(currentIndex + 1);
    }
  }
});

mainVideo.addEventListener("ended", () => {
  if (currentIndex < playlist.length - 1) {
    loadVideo(currentIndex + 1);
  }
});

createPlaylist();
loadVideo(0);
