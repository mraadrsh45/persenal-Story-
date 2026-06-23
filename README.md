# Premium Developer Portfolio | Luxman Kumar

A state-of-the-art, interactive, and dark-futuristic personal portfolio website built for **Luxman Kumar**, a B.Tech Computer Science Engineering student specializing in **Cyber Security and AI**.

This website features modern web design paradigms, including glassmorphism, vibrant neon gradients, smooth micro-animations, custom terminal-inspired interactive widgets, and dynamic API integrations.

---

## 🎨 Design & Theme

- **Futuristic Dark Aesthetic**: Optimized color scheme with high contrast (`#0A0A0A` background) and deep cyan, neon green, and purple neon glow effects.
- **Glassmorphism**: UI cards and overlays styled with semi-transparent backdrops, subtle borders, and backdrop filters.
- **Micro-Animations & Interactive Physics**:
  - Parallax 3D tilt effects on profile image hover and project showcase panels.
  - Interactive cursor and particle canvas backgrounds that react smoothly to cursor coordinates.
  - Smooth timeline tracking, reveal-on-scroll animations, and tab-filtered credentials gallery.

---

## 🚀 Key Features

### 1. Hero Area (Dynamic Split Screen)
- **Interactive Portrait**: Glowing rings float around a circular profile photo, shifting perspective according to mouse movement.
- **Typewriter Console**: Multiline animated typewriter cycles through professional titles.
- **Interactive Particle Background**: Multi-layered canvas-based physics background representing network nodes.

### 2. About Me (Interactive Dev Terminal)
- Simulated macOS terminal shell styled window.
- Interactive lines executing Linux-style commands (`whoami`, `cat specialization.txt`, `ls experience/`) revealing professional summary parameters.

### 3. Skills Arsenal & Tech Wall
- **Grid Layout**: Real technology icons powered by JSdelivr Devicons (no abstract emojis, no flat percentage bars).
- **Tech Wall**: An infinite-scroll horizontal marquee displaying mastered technologies, pausing gracefully on mouse hover.

### 4. Interactive Projects Showcase
- Features fully detailed mockup blocks:
  - **AI Grocery Picking Robot**: Includes a custom simulated code terminal block displaying real-time pathfinding logs.
  - **FitZone AI**: Features multi-tech badges.
  - **CloudVMX**: Web-based sandboxing simulator layout.
  - **FraudGuard AI**, **Cyber Security Toolkit**, and **Romora CPU Scheduler**.

### 5. GitHub Integration Dashboard
- Uses standard JavaScript Fetch API to retrieve profile metadata from the GitHub REST API (`mraadrsh45`).
- Displays live statistics: repository counts, followers, stars.
- Renders a visually simulated contribution graph and dynamically calculates a top languages chart based on API payloads.

### 6. Interactive Contact Desk
- Fully validated custom submission engine featuring:
  - Real-time field evaluation indicators (valid/invalid outlines).
  - Button-shake feedback loops when trying to submit incomplete parameters.
  - Sleek visual transition into a confirmation screen upon successful message submission.

---

## 🛠️ Technology Stack

- **Core Structure**: HTML5 (Semantic Structure)
- **Styling**: Vanilla CSS3 (Custom properties, grid systems, custom animations, keyframes, fluid variables)
- **Logic & Interactions**: Modern Vanilla JavaScript (ES6+, DOM Manipulation, Canvas API, Fetch API, IntersectionObserver API)
- **Icons**: [Bootstrap Icons](https://icons.getbootstrap.com/), [Devicon Integration](https://devicon.dev/)
- **Typography**: Google Fonts (Inter, JetBrains Mono)

---

## 📦 Directory Structure

```text
task1/
├── index.html        # Main HTML content structure
├── style.css         # Custom layout, design tokens, and keyframe animations
├── script.js        # DOM logic, API calls, particle canvas, and form validation
├── my photo.png     # Circular portrait avatar image
├── luxman2.0.pdf    # Downloadable resume document
└── README.md        # Documentation file
```

---

## ⚙️ How to Run Locally

1. Clone or download this project folder onto your local disk.
2. Ensure you have the following assets placed in the root directory:
   - Your profile picture saved as `my photo.png`
   - Your resume saved as `luxman2.0.pdf`
3. Launch the project using any local web server:
   - **VS Code**: Install the **Live Server** extension, right-click `index.html`, and select *Open with Live Server*.
   - **Python**: Run `python -m http.server 5500` in the directory, then navigate to `http://localhost:5500`.
   - **Node.js**: Install `serve` globally via `npm install -g serve` and run `serve .`.

---

## 🛡️ License

Developed by **Luxman Kumar** © 2026. Built with precision and passion.
