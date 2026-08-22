const { songs, images } = loadingScreenConfig;
let locale = loadingScreenConfig.defaultLocale;
let translations = loadingScreenConfig.locales[locale];
let currentSong = 0;
let currentImage = 0;
let displayedProgress = 0;
const audio = document.getElementById("audioPlayer");
const image = document.getElementById("mainImage");
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");
const loadingLabel = document.getElementById("loadingLabel");
const loadingDetail = document.getElementById("loadingDetail");
const connectionText = document.getElementById("connectionText");
const playButton = document.getElementById("playButton");

function applyLocale(nextLocale) {
    locale = loadingScreenConfig.locales[nextLocale] ? nextLocale : loadingScreenConfig.defaultLocale;
    translations = loadingScreenConfig.locales[locale];
    document.documentElement.lang = locale;
    document.getElementById("connectionText").textContent = displayedProgress >= 100 ? translations.connection.online : displayedProgress > 0 ? translations.connection.syncing : translations.connection.connecting;
    document.getElementById("heroSection").setAttribute("aria-label", translations.hero.ariaLabel);
    document.getElementById("eyebrowText").textContent = translations.hero.eyebrow;
    document.getElementById("heroTitle").innerHTML = translations.hero.title;
    document.getElementById("heroIntro").innerHTML = translations.hero.intro;
    document.getElementById("archivesLabel").textContent = translations.visual.archives;
    document.getElementById("mainImage").alt = translations.visual.imageAlt;
    document.getElementById("tipLabel").textContent = `${translations.footer.tip}_${String(currentImage + 7).padStart(2, "0")}`;
    document.getElementById("nowPlayingLabel").textContent = translations.footer.nowPlaying;
    document.getElementById("volumeLabel").textContent = translations.footer.volume;
    document.getElementById("prevButton").setAttribute("aria-label", translations.controls.previous);
    document.getElementById("nextButton").setAttribute("aria-label", translations.controls.next);
    updatePlayButtonLabel();
    updateProgress(displayedProgress / 100);
    setImage(currentImage);
}

function updatePlayButtonLabel() {
    playButton.setAttribute("aria-label", audio.paused ? translations.controls.play : translations.controls.pause);
}

function updateProgress(value) {
    const percent = Math.max(0, Math.min(100, Math.round(value * 100)));
    displayedProgress = percent;
    progressBar.style.width = `${percent}%`;
    progressValue.textContent = `${percent}%`;
    if (percent >= 100) { loadingLabel.textContent = translations.loading.ready; loadingDetail.textContent = translations.loading.welcome; connectionText.textContent = translations.connection.online; }
    else if (percent > 0) { loadingLabel.textContent = translations.loading.resources; loadingDetail.textContent = `${translations.loading.initializing} ${percent}%`; connectionText.textContent = translations.connection.syncing; }
    else { loadingLabel.textContent = translations.loading.starting; loadingDetail.textContent = translations.loading.syncing; connectionText.textContent = translations.connection.connecting; }
}
function setImage(index) {
    currentImage = (index + images.length) % images.length;
    image.style.opacity = "0";
    window.setTimeout(() => { image.src = images[currentImage].url; document.getElementById("imageTitle").textContent = images[currentImage].title; document.getElementById("imageIndex").textContent = String(currentImage + 1).padStart(2, "0"); document.getElementById("tipText").textContent = translations.tips[currentImage]; document.getElementById("tipLabel").textContent = `${translations.footer.tip}_${String(currentImage + 7).padStart(2, "0")}`; image.style.opacity = "0.82"; }, 180);
    document.querySelectorAll(".image-dots button").forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === currentImage));
}
function createImageDots() {
    const dots = document.getElementById("imageDots");
    images.forEach((entry, index) => { const dot = document.createElement("button"); dot.type = "button"; dot.addEventListener("click", () => setImage(index)); dots.appendChild(dot); });
}
function loadSong(shouldPlay = false) {
    audio.src = songs[currentSong].url;
    document.getElementById("songTitle").textContent = songs[currentSong].title;
    if (shouldPlay) audio.play().then(() => { playButton.innerHTML = "&#10074;&#10074;"; updatePlayButtonLabel(); }).catch(() => { playButton.innerHTML = "&#9654;"; updatePlayButtonLabel(); });
}
function nextSong() { currentSong = (currentSong + 1) % songs.length; loadSong(true); }
function prevSong() { currentSong = (currentSong - 1 + songs.length) % songs.length; loadSong(true); }
function togglePlay() { if (audio.paused) audio.play().then(() => { playButton.innerHTML = "&#10074;&#10074;"; updatePlayButtonLabel(); }).catch(() => { loadingDetail.textContent = translations.loading.radioPrompt; }); else { audio.pause(); playButton.innerHTML = "&#9654;"; updatePlayButtonLabel(); } }
function setVolume(value) { audio.volume = Number(value); }

document.getElementById("prevButton").addEventListener("click", prevSong);
document.getElementById("nextButton").addEventListener("click", nextSong);
playButton.addEventListener("click", togglePlay);
document.getElementById("volume").addEventListener("input", (event) => setVolume(event.target.value));
audio.addEventListener("ended", nextSong);
image.addEventListener("error", () => { image.style.opacity = "0"; });
window.addEventListener("message", (event) => { if (event.data?.eventName === "loadProgress") updateProgress(event.data.loadFraction || 0); });
document.addEventListener("keydown", (event) => { if (event.code === "Space") { event.preventDefault(); togglePlay(); } if (event.code === "ArrowRight") nextSong(); if (event.code === "ArrowLeft") prevSong(); });

createImageDots();
applyLocale(locale);
loadSong();
setVolume(0.45);
if (typeof window.invokeNative !== "function") {
    const demoTimer = window.setInterval(() => { if (displayedProgress >= 100) return window.clearInterval(demoTimer); updateProgress(Math.min(1, (displayedProgress + 2) / 100)); }, 140);
}
window.setInterval(() => setImage(currentImage + 1), 7000);
