/* ================================================================
   LUXMAN KUMAR — PREMIUM PORTFOLIO SCRIPT
   Custom cursor · Particles · Typing · GitHub API · Counters
   Skill bars · Contribution graph · Certificate filter · Forms
   ================================================================ */

const GITHUB_USERNAME = 'mraadrsh45';

/* ── 1. LOADING SCREEN ───────────────────────────────────────── */
function dismissLoader() {
    const loader = document.getElementById('loading-screen');
    if (loader && !loader.classList.contains('done')) {
        loader.classList.add('done');
        setTimeout(() => { loader.style.display = 'none'; }, 500);
    }
    document.body.classList.add('loaded');
    animateHeroText();
}

window.addEventListener('load', () => setTimeout(dismissLoader, 300));
document.addEventListener('DOMContentLoaded', () => setTimeout(dismissLoader, 600));
setTimeout(dismissLoader, 1200); // Safety fallback

/* ── 2. CUSTOM CURSOR ────────────────────────────────────────── */
const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    }
});

// Smooth follower animation
function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    if (cursorFollower) {
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }
    requestAnimationFrame(animateFollower);
}
animateFollower();

// Cursor interactions
document.querySelectorAll('a, button, .skill-card, .proj-card, .cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
        if (cursor) {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'var(--secondary)';
        }
        if (cursorFollower) {
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.borderColor = 'rgba(123, 97, 255, 0.5)';
        }
    });
    el.addEventListener('mouseleave', () => {
        if (cursor) {
            cursor.style.width = '10px';
            cursor.style.height = '10px';
            cursor.style.background = 'var(--primary)';
        }
        if (cursorFollower) {
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = 'rgba(0, 229, 255, 0.5)';
        }
    });
});

/* ── 3. PARTICLE CANVAS ──────────────────────────────────────── */
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });

    const particles = [];
    const NUM = 60;

    for (let i = 0; i < NUM; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.2,
        });
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 229, 255, ${p.opacity})`;
            ctx.fill();

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        });
        requestAnimationFrame(drawParticles);
    }
    drawParticles();
}

/* ── 4. NETWORK CANVAS (Background Lines) ────────────────────── */
function initNetwork() {
    const canvas = document.getElementById('network-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    });

    const nodes = [];
    const NUM = 35;
    let mouse = { x: -999, y: -999 };

    document.addEventListener('mousemove', e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    for (let i = 0; i < NUM; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
        });
    }

    function drawNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        nodes.forEach(n => {
            n.x += n.vx;
            n.y += n.vy;
            if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
            if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        });

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 140) {
                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = `rgba(0, 229, 255, ${0.15 * (1 - dist / 140)})`;
                    ctx.lineWidth = 0.7;
                    ctx.stroke();
                }
            }

            // Mouse interaction
            const dx = nodes[i].x - mouse.x;
            const dy = nodes[i].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].x, nodes[i].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(123, 97, 255, ${0.3 * (1 - dist / 120)})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            ctx.beginPath();
            ctx.arc(nodes[i].x, nodes[i].y, 2, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 229, 255, 0.3)';
            ctx.fill();
        }

        requestAnimationFrame(drawNetwork);
    }
    drawNetwork();
}

/* ── 5. HERO IMAGE TILT (Mouse Follow) ───────────────────────── */
function initHeroTilt() {
    const imgWrap = document.getElementById('hero-img-wrap');
    const tiltEl = document.getElementById('hero-img-tilt');
    if (!imgWrap || !tiltEl) return;

    const hero = document.getElementById('hero');
    hero.addEventListener('mousemove', (e) => {
        const rect = imgWrap.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) / (rect.width / 2);
        const dy = (e.clientY - cy) / (rect.height / 2);
        const maxAngle = 12;
        tiltEl.style.transform = `rotateY(${dx * maxAngle}deg) rotateX(${-dy * maxAngle}deg)`;
    });

    hero.addEventListener('mouseleave', () => {
        tiltEl.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });

    tiltEl.style.transition = 'transform 0.15s ease';
    tiltEl.style.transformStyle = 'preserve-3d';
}

/* ── 6. TYPING ANIMATION ─────────────────────────────────────── */
function initTyping() {
    const phrases = [
        'Software Developer',
        'Full Stack Engineer (MERN)',
        'AI & Robotics Engineer',
        'VAPT & Security Specialist',
        'Robotics Trainer & Mentor',
    ];

    const el = document.getElementById('typed-text');
    if (!el) return;

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let pause = false;

    function type() {
        const current = phrases[phraseIdx];

        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        el.textContent = current.substring(0, charIdx);

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIdx === current.length) {
            speed = 2000; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            phraseIdx = (phraseIdx + 1) % phrases.length;
            speed = 400;
        }

        setTimeout(type, speed);
    }

    // Start after loading screen
    setTimeout(type, 600);
}

/* ── 7. HERO NAME ANIMATION ──────────────────────────────────── */
function animateHeroText() {
    const lines = document.querySelectorAll('.name-line');
    lines.forEach((line, i) => {
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transform = 'translateY(0)';
        }, i * 200);
    });
}

/* ── 8. SCROLL PROGRESS ──────────────────────────────────────── */
function initScrollProgress() {
    const bar = document.getElementById('scroll-bar');
    const scrollTop = document.getElementById('scroll-to-top');
    const nav = document.getElementById('main-nav');

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = ((scrolled / max) * 100) + '%';
        if (scrollTop) scrollTop.classList.toggle('show', scrolled > 600);
        if (nav) nav.classList.toggle('scrolled', scrolled > 60);
    }, { passive: true });

    if (scrollTop) {
        scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }
}

/* ── 9. ACTIVE NAV LINK ──────────────────────────────────────── */
function initNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[data-section]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));
}

/* ── 10. MOBILE NAV ──────────────────────────────────────────── */
function initMobileNav() {
    const toggle = document.getElementById('nav-toggle');
    const links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const open = links.classList.toggle('open');
        const spans = toggle.querySelectorAll('span');
        spans[0].style.transform = open ? 'rotate(45deg) translateY(6.5px)' : '';
        spans[1].style.opacity = open ? '0' : '1';
        spans[2].style.transform = open ? 'rotate(-45deg) translateY(-6.5px)' : '';
    });

    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.querySelectorAll('span').forEach(s => {
                s.style.transform = '';
                s.style.opacity = '1';
            });
        });
    });
}

/* ── 11. REVEAL ON SCROLL ────────────────────────────────────── */
function initReveal() {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger siblings
                const siblings = Array.from(entry.target.parentElement?.children || []);
                const sibIdx = siblings.filter(s => s.classList.contains('reveal')).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, sibIdx * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.05 });

    els.forEach(el => observer.observe(el));
}

/* ── 12. ACHIEVEMENT COUNTERS ────────────────────────────────── */
function initCounters() {
    const counters = document.querySelectorAll('.counter-num');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const duration = 2000;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

/* ── 13. SKILL BAR ANIMATIONS ────────────────────────────────── */
function initSkillBars() {
    const bars = document.querySelectorAll('.skill-fill');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const w = entry.target.dataset.w;
                setTimeout(() => {
                    entry.target.style.width = w + '%';
                }, 300);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    bars.forEach(b => observer.observe(b));
}

/* ── 14. GITHUB API INTEGRATION ──────────────────────────────── */
async function loadGitHubData() {
    try {
        // Fetch user data
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userRes.ok) throw new Error('GitHub API failed');
        const user = await userRes.json();

        // Update profile card
        const avatar = document.getElementById('gh-avatar');
        const name = document.getElementById('gh-name');
        const bio = document.getElementById('gh-bio');
        const repos = document.getElementById('gh-repos');
        const followers = document.getElementById('gh-followers');
        const following = document.getElementById('gh-following');

        if (avatar) avatar.src = user.avatar_url;
        if (name) name.textContent = user.name || 'Luxman Kumar';
        if (bio) bio.textContent = user.bio || '@' + GITHUB_USERNAME + ' · Cyber Security & AI Developer';
        if (repos) repos.textContent = user.public_repos;
        if (followers) followers.textContent = user.followers;
        if (following) following.textContent = user.following;

        // Fetch repos for stars and language analysis
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        if (reposRes.ok) {
            const reposData = await reposRes.json();
            let totalStars = 0;
            const langCount = {};

            reposData.forEach(r => {
                totalStars += r.stargazers_count;
                if (r.language) {
                    langCount[r.language] = (langCount[r.language] || 0) + 1;
                }
            });

            const starsEl = document.getElementById('gh-stars');
            if (starsEl) starsEl.textContent = totalStars;

            // Build language chart
            buildLangChart(langCount, reposData.length);

            // Build repos list
            buildReposList(reposData.slice(0, 5));
        }

    } catch (err) {
        console.warn('GitHub API unavailable, showing demo data:', err);
        showDemoGitHubData();
    }

    // Always generate contribution graph (simulated — API requires auth for real data)
    buildContribGraph();
}

function showDemoGitHubData() {
    const ids = {
        'gh-name': 'Luxman Kumar',
        'gh-bio': '@mraadrsh45 · Cyber Security & AI Developer',
        'gh-repos': '18',
        'gh-followers': '12',
        'gh-following': '25',
        'gh-stars': '34',
    };
    Object.entries(ids).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    });

    const demoLangs = { 'Python': 8, 'JavaScript': 5, 'C++': 4, 'Java': 2, 'HTML': 2 };
    buildLangChart(demoLangs, 18);
    buildReposList([
        { name: 'FraudGuard-AI', description: 'AI-powered fraud detection system', stargazers_count: 12, language: 'Python', html_url: 'https://github.com/' + GITHUB_USERNAME },
        { name: 'CloudVMX', description: 'Browser-based cloud virtualization', stargazers_count: 8, language: 'JavaScript', html_url: 'https://github.com/' + GITHUB_USERNAME },
        { name: 'Grocery-Robot', description: 'Autonomous grocery picking robot', stargazers_count: 7, language: 'C++', html_url: 'https://github.com/' + GITHUB_USERNAME },
        { name: 'FitZone-AI', description: 'AI fitness tracker with pose estimation', stargazers_count: 5, language: 'Python', html_url: 'https://github.com/' + GITHUB_USERNAME },
        { name: 'Romora', description: 'CPU thread load balancing framework', stargazers_count: 2, language: 'Python', html_url: 'https://github.com/' + GITHUB_USERNAME },
    ]);
}

function buildLangChart(langCount, total) {
    const chart = document.getElementById('langs-chart');
    if (!chart) return;
    chart.innerHTML = '';

    const colors = ['#00E5FF', '#7B61FF', '#00FF88', '#FF6B6B', '#FEBC2E', '#FF9F43'];
    const sorted = Object.entries(langCount).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const max = Math.max(...sorted.map(([, v]) => v));

    sorted.forEach(([lang, count], i) => {
        const pct = Math.round((count / max) * 100);
        const displayPct = Math.round((count / total) * 100);
        const div = document.createElement('div');
        div.className = 'lang-item';
        div.innerHTML = `
            <span class="lang-name">${lang}</span>
            <div class="lang-bar-wrap">
                <div class="lang-bar-fill" style="width:0%; background:${colors[i % colors.length]}" data-w="${pct}"></div>
            </div>
            <span class="lang-pct">${displayPct}%</span>
        `;
        chart.appendChild(div);
    });

    // Animate bars
    setTimeout(() => {
        chart.querySelectorAll('.lang-bar-fill').forEach(b => {
            b.style.width = b.dataset.w + '%';
        });
    }, 400);
}

function buildReposList(repos) {
    const list = document.getElementById('repos-list');
    if (!list) return;
    list.innerHTML = '';

    repos.forEach(r => {
        const div = document.createElement('a');
        div.className = 'repo-item';
        div.href = r.html_url;
        div.target = '_blank';
        div.rel = 'noopener';
        div.innerHTML = `
            <div>
                <div class="repo-name">${r.name}</div>
                <div class="repo-desc">${r.description || 'No description'}</div>
            </div>
            <div class="repo-meta">
                ${r.language ? `<span><i class="bi bi-circle-fill" style="font-size:0.5rem; color:var(--primary)"></i> ${r.language}</span>` : ''}
                <span><i class="bi bi-star"></i> ${r.stargazers_count}</span>
            </div>
        `;
        list.appendChild(div);
    });
}

function buildContribGraph() {
    const graph = document.getElementById('contrib-graph');
    if (!graph) return;
    graph.innerHTML = '';

    const weeks = 26;
    const days = 7;

    for (let w = 0; w < weeks; w++) {
        const week = document.createElement('div');
        week.className = 'contrib-week';
        for (let d = 0; d < days; d++) {
            const day = document.createElement('div');
            day.className = 'contrib-day';
            // Simulate activity pattern (more activity on weekdays)
            const rand = Math.random();
            let level;
            if (d === 5 || d === 6) {
                // Weekends — less activity
                level = rand < 0.5 ? 'l0' : rand < 0.7 ? 'l1' : rand < 0.85 ? 'l2' : 'l3';
            } else {
                level = rand < 0.2 ? 'l0' : rand < 0.45 ? 'l1' : rand < 0.65 ? 'l2' : rand < 0.85 ? 'l3' : 'l4';
            }
            day.classList.add(level);
            day.title = `${Math.floor(Math.random() * 8)} contributions`;
            week.appendChild(day);
        }
        graph.appendChild(week);
    }
}

/* ── 15. CERTIFICATE FILTER ──────────────────────────────────── */
function initCertFilter() {
    const btns = document.querySelectorAll('.cert-btn');
    const cards = document.querySelectorAll('.cert-card');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const cats = card.dataset.cat || '';
                if (filter === 'all' || cats.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.display = '';
                } else {
                    card.classList.add('hidden');
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ── 15B. PROJECT FILTER ─────────────────────────────────────── */
function initProjectFilter() {
    const btns = document.querySelectorAll('.proj-btn');
    const cards = document.querySelectorAll('.proj-card');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                const cats = card.dataset.cat || '';
                if (filter === 'all' || cats.includes(filter)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ── 15C. RESUME MODAL HANDLER ───────────────────────────────── */
function initResumeModal() {
    const openBtns = document.querySelectorAll('.btn-view-resume');
    const modal = document.getElementById('resume-modal');
    const closeBtn = document.getElementById('btn-close-resume');
    const printBtn = document.getElementById('btn-print-resume');

    if (!modal) return;

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeModal = () => {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

/* ── 16. 3D CARD PHYSICS & SPECULAR LIGHTING ─────────────────── */
function initProjectTilt() {
    const cards = document.querySelectorAll('.proj-card, .skill-category-card, .ea-card, .cert-card, .terminal-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 1024) return;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Set dynamic CSS properties for 3D specular glare
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const dx = (x - cx) / cx;
            const dy = (y - cy) / cy;
            const maxTilt = 7;
            
            card.style.transform = `perspective(1000px) translateY(-8px) rotateX(${-dy * maxTilt}deg) rotateY(${dx * maxTilt}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
            card.style.removeProperty('--mouse-x');
            card.style.removeProperty('--mouse-y');
        });
    });
}

/* ── 17. CONTACT FORM ────────────────────────────────────────── */
function initContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('contact-success');
    const resetBtn = document.getElementById('btn-reset-form');
    const successName = document.getElementById('success-name');

    if (!form) return;

    const validators = {
        'contact-name':    { fn: v => v.trim().length >= 3,  fieldId: 'field-name' },
        'contact-email':   { fn: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), fieldId: 'field-email' },
        'contact-subject': { fn: v => v.trim().length >= 5,  fieldId: 'field-subject' },
        'contact-message': { fn: v => v.trim().length >= 15, fieldId: 'field-message' },
    };

    // Real-time validation
    Object.keys(validators).forEach(id => {
        const input = document.getElementById(id);
        const { fn, fieldId } = validators[id];
        const field = document.getElementById(fieldId);
        if (!input || !field) return;

        const validate = () => {
            const val = input.value;
            if (!val) { field.classList.remove('valid', 'invalid'); return; }
            if (fn(val)) { field.classList.add('valid'); field.classList.remove('invalid'); }
            else { field.classList.add('invalid'); field.classList.remove('valid'); }
        };

        input.addEventListener('input', validate);
        input.addEventListener('blur', () => { if (input.value) validate(); });
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        let allValid = true;

        Object.keys(validators).forEach(id => {
            const input = document.getElementById(id);
            const { fn, fieldId } = validators[id];
            const field = document.getElementById(fieldId);
            if (!input || !field) return;
            if (!fn(input.value)) {
                field.classList.add('invalid');
                field.classList.remove('valid');
                allValid = false;
            }
        });

        if (allValid) {
            const name = document.getElementById('contact-name').value.trim().split(' ')[0];
            if (successName) successName.textContent = name;
            form.style.display = 'none';
            if (success) success.style.display = 'block';
        } else {
            shakeButton(document.getElementById('btn-submit'));
        }
    });

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            form.reset();
            form.style.display = 'flex';
            form.style.flexDirection = 'column';
            if (success) success.style.display = 'none';
            Object.values(validators).forEach(({ fieldId }) => {
                const f = document.getElementById(fieldId);
                if (f) f.classList.remove('valid', 'invalid');
            });
        });
    }
}

function shakeButton(btn) {
    if (!btn) return;
    btn.style.transition = 'transform 0.08s ease';
    const shakes = [[-6, 0], [6, 0], [-4, 80], [4, 160], [0, 240]];
    shakes.forEach(([x, delay]) => {
        setTimeout(() => { btn.style.transform = `translateX(${x}px)`; }, delay);
    });
}

/* ── 18. SMOOTH SECTION TRANSITIONS ──────────────────────────── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ── 19. TECH WALL PAUSE ON HOVER ────────────────────────────── */
function initTechWall() {
    const track = document.getElementById('tech-track-1');
    if (!track) return;

    track.addEventListener('mouseenter', () => {
        track.style.animationPlayState = 'paused';
    });
    track.addEventListener('mouseleave', () => {
        track.style.animationPlayState = 'running';
    });
}

/* ── 20. GITHUB SECTION LAZY LOAD ────────────────────────────── */
function initGitHubLazyLoad() {
    const section = document.getElementById('github');
    if (!section) return;

    let loaded = false;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !loaded) {
                loaded = true;
                loadGitHubData();
                observer.unobserve(section);
            }
        });
    }, { rootMargin: '200px 0px 0px 0px' });

    observer.observe(section);
}

/* ── 21. FLOATING ANIMATION FOR SKILLS ───────────────────────── */
function addRandomFloatDelays() {
    document.querySelectorAll('.skill-card').forEach((card, i) => {
        card.style.animationDelay = (i * 0.1) + 's';
    });
}

/* ── 22. GLOWING BORDERS ON SCROLL ───────────────────────────── */
function initGlowOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.boxShadow = '0 0 30px rgba(0,229,255,0.08)';
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.tl-content, .gh-stat-card, .cert-card, .ea-card').forEach(el => {
        observer.observe(el);
    });
}

/* ── 23. 3D WEBGL CYBER SCENE (Three.js) ────────────────────────── */
function init3DScene() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    const hero = document.getElementById('hero');
    if (!hero) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, hero.offsetWidth / hero.offsetHeight, 0.1, 1000);
    camera.position.z = 26;

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch (e) {
        return; // WebGL not supported
    }

    renderer.setSize(hero.offsetWidth, hero.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 1. Central 3D Cyber Polyhedron (Icosahedron in #c2a4ff Lavender)
    const icosaGeometry = new THREE.IcosahedronGeometry(7.5, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
        color: 0xc2a4ff,
        wireframe: true,
        transparent: true,
        opacity: 0.32,
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    scene.add(icosahedron);

    // Glowing vertex points
    const pointsMaterial = new THREE.PointsMaterial({
        color: 0xeae5ec,
        size: 0.35,
        transparent: true,
        opacity: 0.9,
    });
    const icosaPoints = new THREE.Points(icosaGeometry, pointsMaterial);
    icosahedron.add(icosaPoints);

    // 2. 3D Orbital Rings (Torus in #c2a4ff & #00e5ff)
    const torusGeom1 = new THREE.TorusGeometry(10.5, 0.05, 16, 100);
    const torusMat1 = new THREE.MeshBasicMaterial({
        color: 0xc2a4ff,
        transparent: true,
        opacity: 0.45,
    });
    const torus1 = new THREE.Mesh(torusGeom1, torusMat1);
    torus1.rotation.x = Math.PI / 3;
    scene.add(torus1);

    const torusGeom2 = new THREE.TorusGeometry(12.5, 0.04, 16, 100);
    const torusMat2 = new THREE.MeshBasicMaterial({
        color: 0x00e5ff,
        transparent: true,
        opacity: 0.35,
    });
    const torus2 = new THREE.Mesh(torusGeom2, torusMat2);
    torus2.rotation.x = -Math.PI / 4;
    torus2.rotation.y = Math.PI / 6;
    scene.add(torus2);

    // 3. 3D Stardust Floating Particles Field (#c2a4ff and #eae5ec)
    const particleCount = 200;
    const starGeom = new THREE.BufferGeometry();
    const starPositions = new Float32Array(particleCount * 3);
    const starColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        starPositions[i] = (Math.random() - 0.5) * 60;
        starPositions[i + 1] = (Math.random() - 0.5) * 40;
        starPositions[i + 2] = (Math.random() - 0.5) * 30;

        if (Math.random() > 0.5) {
            starColors[i] = 0.76; starColors[i + 1] = 0.64; starColors[i + 2] = 1.0; // #c2a4ff
        } else {
            starColors[i] = 0.92; starColors[i + 1] = 0.90; starColors[i + 2] = 0.93; // #eae5ec
        }
    }

    starGeom.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMaterial = new THREE.PointsMaterial({
        size: 0.25,
        vertexColors: true,
        transparent: true,
        opacity: 0.75,
    });
    const stars = new THREE.Points(starGeom, starMaterial);
    scene.add(stars);

    // Mouse Parallax Physics
    let targetX = 0, targetY = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    window.addEventListener('mousemove', (e) => {
        targetX = (e.clientX - windowHalfX) * 0.0006;
        targetY = (e.clientY - windowHalfY) * 0.0006;
    });

    window.addEventListener('resize', () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        if (!hero) return;
        camera.aspect = hero.offsetWidth / hero.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(hero.offsetWidth, hero.offsetHeight);
    });

    let isHeroVisible = true;
    const observer = new IntersectionObserver((entries) => {
        isHeroVisible = entries[0].isIntersecting;
    }, { threshold: 0.05 });
    observer.observe(hero);

    // Animation Loop
    let clock = new THREE.Clock();
    function animate() {
        requestAnimationFrame(animate);
        if (!isHeroVisible) return;

        const elapsedTime = clock.getElapsedTime();

        // Continuous smooth 3D rotation
        icosahedron.rotation.x += 0.0025;
        icosahedron.rotation.y += 0.0035;

        torus1.rotation.z += 0.0018;
        torus2.rotation.z -= 0.0024;

        // Floating wave motion
        icosahedron.position.y = Math.sin(elapsedTime * 0.7) * 0.7;
        torus1.position.y = Math.sin(elapsedTime * 0.7 + 0.5) * 0.5;
        torus2.position.y = Math.sin(elapsedTime * 0.7 + 1.0) * 0.5;

        // Smooth Mouse Parallax Ease
        scene.rotation.y += (targetX - scene.rotation.y) * 0.05;
        scene.rotation.x += (targetY - scene.rotation.x) * 0.05;

        renderer.render(scene, camera);
    }
    animate();
}

/* ── INIT ALL ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
    initScrollProgress();
    initNavHighlight();
    initMobileNav();
    initReveal();
    initCounters();
    initCertFilter();
    initProjectFilter();
    initResumeModal();
    initProjectTilt();
    initContactForm();
    initSmoothScroll();
    initTechWall();
    initGitHubLazyLoad();
    addRandomFloatDelays();
    initGlowOnScroll();
    initTyping();

    // 3D Three.js Scene
    init3DScene();

    // Canvas effects (only on hero)
    if (document.getElementById('particle-canvas')) {
        initParticles();
        initNetwork();
        initHeroTilt();
    }
});

/* ── PERFORMANCE: Reduce animations on low-end devices ─────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
    document.documentElement.style.setProperty('--duration', '0.01ms');
}
