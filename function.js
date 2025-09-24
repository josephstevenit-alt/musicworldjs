 
    // Redirect to home page after login
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      window.location.href = "home.html";
    });
    
    // Redirect to home after register
    document.getElementById("registerForm").addEventListener("submit", function(e) {
      e.preventDefault();
      window.location.href = "home.html";
    });

    
  
    let audio = document.getElementById("audioPlayer");
let progress = document.getElementById("progressBar");
let playBtn = document.querySelector(".controls button:nth-child(2)");
let currentTimeEl = document.getElementById("currentTime");
let durationEl = document.getElementById("duration");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶";
  }
}

function prevSong() {
  alert("Previous song logic here");
}

function nextSong() {
  alert("Next song logic here");
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100 || 0;
  currentTimeEl.textContent = formatTime(audio.currentTime);
  durationEl.textContent = formatTime(audio.duration);
});

// Seek
progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Format time helper
function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

(function(){
  const cards = Array.from(document.querySelectorAll('.track-card'));
  const mainPlayer = document.getElementById('mainPlayer');
  const source = mainPlayer.querySelector('source');

  function loadAndSet(card){
    const src = card.dataset.src;
    const poster = card.dataset.poster;
    if(!src) return;

    source.src = src;
    mainPlayer.poster = poster;
    mainPlayer.load();   // ✅ just load video
    // ❌ no autoplay here
    document.querySelectorAll('.track-card.active')
            .forEach(n=>n.classList.remove('active'));
    card.classList.add('active');
  }

  cards.forEach(card=>{
    card.addEventListener('click', ()=> loadAndSet(card));
    card.addEventListener('keydown', (ev)=>{
      if(ev.key === 'Enter' || ev.key === ' '){
        ev.preventDefault(); loadAndSet(card);
      }
    });
  });

  // Optional: load first video but don’t autoplay
  const initial = document.querySelector('.track-card.featured') || cards[0];
  if(initial) loadAndSet(initial);
})();

  const video = document.getElementById("mainPlayer");
  const playBtn = document.getElementById("playBtn");
  const muteBtn = document.getElementById("muteBtn");

  // Play when play button clicked
  playBtn.addEventListener("click", () => {
    video.play();
  });

  // Stop video when muted
  muteBtn.addEventListener("click", () => {
    if (!video.muted) {
      video.muted = true;
      video.pause(); // stop when muted
      muteBtn.textContent = "Unmute";
    } else {
      video.muted = false;
      muteBtn.textContent = "Mute";
    }
  });

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("mainPlayer");
  const playBtn = document.getElementById("playBtn");
  const muteBtn = document.getElementById("muteBtn");

  playBtn.addEventListener("click", () => {
    video.play();
  });

  muteBtn.addEventListener("click", () => {
    if (!video.muted) {
      video.muted = true;
      video.pause();
      muteBtn.textContent = "Unmute";
    } else {
      video.muted = false;
      muteBtn.textContent = "Mute";
    }
  });
});


  
  