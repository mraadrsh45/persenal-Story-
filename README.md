# Premium Developer Portfolio & Resume | Luxman Kumar

A state-of-the-art, interactive, and dark-futuristic personal portfolio and resume website built for **Luxman Kumar** — **Software Developer | Full Stack Engineer (MERN) | AI & Robotics**.

This website features modern web design paradigms, including glassmorphism, vibrant neon gradients, smooth micro-animations, custom terminal-inspired interactive widgets, real-time project filtering, and an interactive on-screen resume viewer.

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
- **Typewriter Console**: Multiline animated typewriter cycling through professional titles (`Software Developer`, `Full Stack Engineer (MERN)`, `AI & Robotics Engineer`, `VAPT & Security Specialist`, `Robotics Trainer & Mentor`).
- **Interactive Particle Background**: Multi-layered canvas-based physics background representing network nodes.
- **Interactive Resume Modal**: Quick on-screen resume inspection modal with print & PDF download triggers.

### 2. Executive Summary (Interactive Dev Terminal)
- Simulated macOS terminal shell styled window.
- Interactive lines executing commands revealing professional summary parameters.

### 3. Comprehensive Skills Arsenal & Tech Wall
- **Categorized Skills Matrix**: 8 dedicated skill groups covering Programming Languages, Frontend, Backend, Databases, Tools & DevOps, AI & Integrations, Robotics & Embedded, and Professional Leadership.
- **Tech Wall**: An infinite-scroll horizontal marquee displaying mastered technologies, pausing on mouse hover.

### 4. Interactive Projects Showcase
- Categorized filter tabs (`All Projects`, `Full Stack & Web`, `AI & Cloud Systems`, `Robotics & IoT`).
- Projects include **FitZone AI (MERN & OpenAI)**, **CloudVMX (Docker Multi-OS Virtualization)**, **Grocery Barcode Scanner (Flask & OpenCV)**, **AI-Security Finance Manager**, **Roomora Property Listing**, and **Autonomous Grocery Picking Robot**.

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
