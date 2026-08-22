# 🚀 GO Loading Screen – FiveM

A modern and customizable loading screen for FiveM servers.  
Includes **music controls**, **dynamic images**, and a clean UI that enhances the player’s loading experience.

## ✨ Features

- Custom music playlist (play, pause, next, previous).  
- Volume control slider.  
- Dynamic images.  
- Clean and responsive UI.  
- Easy configuration through JavaScript arrays.  
- Lightweight and optimized for fast loading.

## 📦 Installation

1. **Download the resource.**  
2. Place the folder inside your server resources:  
   ```
   resources/[scripts]/go_loadingscreen
   ```
3. Add the script to your `server.cfg`:  
   ```
   ensure go_loadingscreen
   ```
   
## 🧩 Requirements

This loading screen does **not** require ESX, QBCore, or any framework.  
It works on **any FiveM server**.

## ⚙️ Configuration

### 🎵 Music Playlist  
Edit the `songs` array inside `config.js`:

```js
songs: [
        { title: "GO RADIO / AMBIENT 01", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "GO RADIO / NIGHT DRIVE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "GO RADIO / SUNRISE FM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
];
```

### 🖼️ Images  
You can use image links.

**Example of an image link:**

```js
images: [
        { title: "NIGHT SHIFT", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80" },
        { title: "CITY LIMITS", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80" },
        { title: "AFTER HOURS", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80" }
    ]
```

## 📁 File Structure

```
go_loadingscreen/
│── config.js
│── fxmanifest.lua
│── index.html
│── style.css
```

# 🧪 How It Works

- The loading screen displays a main image that changes every few seconds.  
- Music starts automatically and can be controlled by the player.  
- All assets are loaded directly from your server or Discord CDN.  

---

Solo dime qué estilo quieres y te lo dejo perfecto.
