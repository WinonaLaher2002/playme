# 💝 Valentine's Day Music Player

A beautiful, interactive music player created as a special Valentine's Day gift. Features a glassmorphism design, custom cursors, and a curated playlist of romantic songs.

## 🎯 Project Overview

This project uses **HTML**, **CSS**, and **Vanilla JavaScript** to create an elegant music player experience. It includes a welcoming start page that leads to a fully functional audio player with album art, playback controls, and a responsive design.

---

## 📁 Project Structure

```
hvdmp/
├── index.html           # Main music player page
├── startpage.html       # Welcome/start page
├── style.css            # Global styling (shared CSS)
├── script.js            # JavaScript functionality (shared logic)
├── asset/
│   ├── imgs/            # Images and icons
│   │   ├── bg.jpg                   # Heart-shaped background
│   │   ├── flower.png               # Start button image
│   │   ├── flower.ico               # Favicon
│   │   ├── cursor.png               # Custom cursor
│   │   ├── pointer.png              # Custom pointer
│   │   └── [3 album art JPGs]       # Album artwork
│   └── song/            # Audio files
│       ├── Himig ng Pag-ibig - Asin (Lyrics).mp3
│       ├── APO Hiking Society - Panalangin.mp3
│       ├── I'd Rather.mp3
│       └── universfield-computer-mouse-click-351398.mp3
└── README.md            # This file
```

---

## 🎵 Features

### 🎨 **Design**
- **Glassmorphism Effect**: Frosted glass aesthetic with backdrop blur
- **Custom Cursors**: Themed cursor and pointer icons throughout the site
- **Responsive Layout**: Mobile-friendly design that adapts to all screen sizes
- **Heart Background**: Centered heart-shaped background image (Valentine's themed)

### 🎼 **Music Player**
- **Play/Pause Control**: Toggle music playback with visual feedback
- **Previous/Next Buttons**: Navigate through the playlist
- **Album Art Display**: Beautiful album artwork with fade-in animations
- **Progress Bar**: Interactive seek bar to jump to any part of the song
- **Time Display**: Shows current time and total duration
- **Playlist Selector**: Three clickable dots to jump directly to songs

### 📋 **Playlist**
1. **Himig ng Pagibig** - Asin
2. **Panalangin** - APO Hiking Society
3. **I'd Rather** - Luther Vandross

### 🎬 **Start Page**
- Welcoming introduction with "Happy Valentines Day" message
- Flower button to enter the music player
- **Info Button** (ℹ️): Display information about the gift with modal popup
- **Exit Button** (✕): Leave the start page with confirmation
- Click sound effect when entering

### 🎵 **Player Page**
- **Info Button** (ℹ️): Display information about the music player
- **Exit Button** (✕): Return to the start page with confirmation
- Background heart image focused at center
- All playback controls fully functional
- Modal popups for information

### 📱 **Mobile Support**
- Touch swipe gestures (left/right) for next/previous songs
- Responsive button sizes and layouts
- Mobile-optimized UI

---

## 🚀 How to Use

### **Opening the Project**
1. Open `startpage.html` in your web browser (this is the entry point)
2. You'll see a welcome message with a tulip flower button
3. Click the flower to enter the music player

### **On the Start Page**
- **Click the Flower**: Navigate to the music player
- **Click the Info (ℹ️) Button**: View information about the gift
- **Click the Exit (✕) Button**: Close the browser (with confirmation)
- **Click Outside the Modal**: Close any open information popup

### **On the Music Player Page**
- **Play/Pause Button (▶/⏸)**: Start or pause the current song
- **Previous Button (⏮)**: Go to the previous song
- **Next Button (⏭)**: Go to the next song (auto-advances when song ends)
- **Playlist Dots**: Click any dot to jump to that song directly
- **Progress Bar**: Click anywhere to seek to that position
- **Info Button (ℹ️)**: View music player information
- **Exit Button (✕)**: Return to the start page
- **Time Display**: Track song progress in real-time

---

## 🛠️ Technical Stack

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure and semantic markup |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (Vanilla)** | Audio control, interactivity, state management |
| **Web Audio API** | Built-in audio element handling |

---

## 🎨 Design Features

### Color Palette
- **Primary**: Gradient from `#E2BCB7` to `#B67162` (rose/mauve tones)
- **Secondary**: `#FFDDD2`, `#B67162` (progress bar colors)
- **Background**: Transparent white overlays with 0.18 opacity
- **Text**: White on dark backgrounds

### Typography
- **Font Family**: "Gaegu" (handwritten style)
- **Font Weights**: 300 (regular), 700 (bold)
- **Responsive Sizing**: Uses `clamp()` for fluid scaling

### Effects
- **Backdrop Filter**: `blur(2.7px)` for glassmorphism
- **Text Shadow**: Subtle shadows for readability
- **Animations**: Fade-in effects, scale transforms, slide-in modals
- **Transitions**: 0.3s ease for smooth interactions

---

## 📋 File Descriptions

### `index.html`
Main music player page with:
- Album art carousel (3 images, stack-positioned)
- Song info display
- Playback controls
- Progress bar and time display
- Playlist selector
- Info and exit buttons with modals

### `startpage.html`
Welcome page with:
- Valentine's Day greeting
- Main flower button to enter
- Info button with popup
- Exit button with confirmation

### `style.css`
Global styling covering:
- Body and background setup
- Player container and layout
- Album art stacking
- Button styles (glassmorphism)
- Progress bar styling
- Modal styles
- Responsive breakpoints
- Custom cursor styling
- Animations and keyframes

### `script.js`
JavaScript logic handling:
- **Startpage**: Button click sound, navigation, modal toggle, exit confirmation
- **Music Player**: Audio playback, song management, UI updates, event listeners
- **Conditional Loading**: Code only runs where needed (startpage vs. player)

---

## ⚙️ How It Works

### 1. **Audio Playback**
- Uses HTML5 `<audio>` element
- Stores 3 MP3 files with metadata
- Loads and plays based on user interaction

### 2. **Song Management**
- Songs stored as objects with title, artist, image index, and file path
- `loadSong()` function updates UI based on current song
- Global `currentSong` variable tracks playback position

### 3. **Progress Tracking**
- `timeupdate` event updates progress bar in real-time
- Click bar to seek to position
- Time display formatted as MM:SS

### 4. **Image Rotation**
- 3 album images absolutely positioned (stacked)
- Only `.active` image visible (opacity: 1)
- Smooth fade-in animation on switch

### 5. **Modal System**
- Click button to toggle `.active` class
- Modal shows with semi-transparent overlay
- Click outside content to close
- Works independently on both pages

---

## 🎯 Browser Compatibility

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ✅ Full support
- **Safari**: ✅ Full support
- **Mobile Browsers**: ✅ Touch support, responsive layout

---

## 💡 Tips for Customization

### Adding More Songs
1. Add MP3 file to `asset/song/`
2. Add object to `songs` array in `script.js`:
   ```javascript
   {
       title: "Song Name",
       artist: "Artist Name",
       image: 0, // index of album art (0-2)
       src: "asset/song/filename.mp3"
   }
   ```
3. Update playlist dots in HTML if needed

### Changing Colors
- Edit CSS variables in `style.css`
- Main colors defined in `.player`, `.play-btn`, `.exit-btn` classes
- Background colors in `body` and glassmorphism elements

### Changing Background
- Replace `bg.jpg` in `asset/imgs/`
- Ensure image is wide enough for `background-size: cover`

### Custom Cursors
- Replace `cursor.png` and `pointer.png` in `asset/imgs/`
- Adjust hotspot values in CSS (currently `8 8`)

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| No sound playing | Check file paths match exactly, ensure MP3 files exist |
| Images not showing | Verify all JPG files in `asset/imgs/` with correct names |
| Buttons not working | Check browser console for errors, ensure script.js loaded |
| Modal not appearing | Check z-index values, ensure no CSS conflicts |
| Mobile swipe not working | Verify touchstart/touchend event listeners in script.js |

---

## 📝 Notes

- This is a **static site** (no backend required)
- All functionality runs **client-side** in the browser
- Audio playback requires **CORS** compliance (works locally)
- Custom cursors may not work on all systems/browsers
- Mobile responsiveness tested on devices 320px-1920px wide

---

## 🎁 Special Features

✨ **Valentine's Theme**: Heart background, rose/mauve color palette, romantic music selection

🎨 **Modern Design**: Glassmorphism, custom cursors, smooth animations, responsive layout

🎵 **Full Playback Control**: Play, pause, seek, next, previous with full UI feedback

📱 **Mobile First**: Touch gestures, responsive breakpoints, optimized performance

💬 **User Feedback**: Info modals, confirmation dialogs, click sounds, visual state changes

---

## 📄 License

This project is created as a personal Valentine's Day gift. Feel free to customize and enjoy! ❤️

---

**Created with ❤️ on February 14, 2026**
