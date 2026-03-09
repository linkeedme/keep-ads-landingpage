/* ═══════════════════════════════════════════════════════════
   KEEP ADS — Interactive Layer
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initScrollProgress();
    initRevealAnimations();
    initStatCounters();
    initFAQ();
    initMobileNav();
    initFormHandling();
    initSmoothScroll();
    initActiveNav();
    initBackToTop();
});


/* ─── Navbar scroll effect ─── */
function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    let ticking = false;
    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                navbar.classList.toggle('scrolled', window.scrollY > 40);
                ticking = false;
            });
            ticking = true;
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}


/* ─── Scroll progress bar ─── */
function initScrollProgress() {
    const bar = document.getElementById('scrollProgress');
    if (!bar) return;

    const update = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    };

    window.addEventListener('scroll', update, { passive: true });
    update();
}


/* ─── Reveal on scroll ─── */
function initRevealAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}


/* ─── Stat counters ─── */
function initStatCounters() {
    const stats = document.querySelectorAll('.stat-number[data-target]');
    if (!stats.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Quartic ease-out
        const eased = 1 - Math.pow(1 - progress, 4);
        const current = Math.round(eased * target);

        el.textContent = prefix + current + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}


/* ─── FAQ accordion ─── */
function initFAQ() {
    const items = document.querySelectorAll('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (!question || !answer) return;

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            items.forEach(i => {
                i.classList.remove('active');
                const a = i.querySelector('.faq-answer');
                if (a) { a.style.maxHeight = '0'; a.setAttribute('aria-hidden', 'true'); }
                const q = i.querySelector('.faq-question');
                if (q) q.setAttribute('aria-expanded', 'false');
            });

            // Open clicked (if wasn't active)
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.setAttribute('aria-hidden', 'false');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });
}


/* ─── Mobile navigation ─── */
function initMobileNav() {
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (!toggle || !links) return;

    toggle.addEventListener('click', () => {
        const isOpen = links.classList.contains('open');
        links.classList.toggle('open');
        toggle.classList.toggle('active');
        toggle.setAttribute('aria-expanded', !isOpen);
        document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            links.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (links.classList.contains('open') &&
            !links.contains(e.target) &&
            !toggle.contains(e.target)) {
            links.classList.remove('open');
            toggle.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        }
    });
}


/* ─── Form handling ─── */
function initFormHandling() {
    const form = document.getElementById('leadForm');
    const success = document.getElementById('formSuccess');
    const submitBtn = document.getElementById('formSubmitBtn');
    const errorMsg = document.getElementById('formError');
    if (!form || !success || !submitBtn) return;

    const btnText = submitBtn.querySelector('.btn-text');
    const btnIcon = submitBtn.querySelector('.btn-icon');
    const btnSpinner = submitBtn.querySelector('.btn-spinner');

    function setLoading(loading) {
        submitBtn.disabled = loading;
        form.setAttribute('aria-busy', loading);
        if (btnText) btnText.hidden = loading;
        if (btnIcon) btnIcon.style.display = loading ? 'none' : '';
        if (btnSpinner) btnSpinner.hidden = !loading;
    }

    function showError() {
        if (errorMsg) errorMsg.hidden = false;
    }

    function hideError() {
        if (errorMsg) errorMsg.hidden = true;
    }

    function showSuccess() {
        form.hidden = true;
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        hideError();

        // Validate required fields
        let valid = true;
        form.querySelectorAll('[required]').forEach(field => {
            const errorEl = document.getElementById(field.id + '-error');
            if (!field.value.trim()) {
                valid = false;
                field.classList.add('error');
                field.setAttribute('aria-invalid', 'true');
                if (errorEl) errorEl.hidden = false;
                const clearError = () => {
                    field.classList.remove('error');
                    field.removeAttribute('aria-invalid');
                    if (errorEl) errorEl.hidden = true;
                };
                field.addEventListener('input', clearError, { once: true });
                field.addEventListener('change', clearError, { once: true });
            } else {
                field.classList.remove('error');
                field.removeAttribute('aria-invalid');
                if (errorEl) errorEl.hidden = true;
            }
        });

        if (!valid) return;

        // Collect data
        const data = Object.fromEntries(new FormData(form));
        setLoading(true);

        // Send to webhook (uncomment and replace URL)
        /*
        try {
            const response = await fetch('YOUR_WEBHOOK_URL', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            if (!response.ok) throw new Error('Server error');
        } catch (err) {
            setLoading(false);
            showError();
            console.error('Form submission error:', err);
            return;
        }
        */

        // Simulate network delay for demo (remove when webhook is active)
        await new Promise(resolve => setTimeout(resolve, 800));

        setLoading(false);

        // Track conversion
        if (typeof fbq === 'function') {
            fbq('track', 'Lead', {
                content_name: 'diagnostico_crescimento',
                content_category: 'lead_form'
            });
        }
        if (typeof gtag === 'function') {
            gtag('event', 'generate_lead', {
                event_category: 'form',
                event_label: 'diagnostico_crescimento'
            });
        }

        // Show success
        showSuccess();
        console.log('Lead captured:', data);
    });
}


/* ─── Smooth scroll ─── */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const id = anchor.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}


/* ─── Active navigation section indicator ─── */
function initActiveNav() {
    const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
    if (!navLinks.length) return;

    // Map section IDs to their nav links
    const sectionMap = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) {
                sectionMap.push({ section, link, id: href.slice(1) });
            }
        }
    });
    if (!sectionMap.length) return;

    let currentActive = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const match = sectionMap.find(s => s.section === entry.target);
                if (match && currentActive !== match.id) {
                    // Remove active from all
                    navLinks.forEach(l => {
                        l.classList.remove('active');
                        l.removeAttribute('aria-current');
                    });
                    // Also check mobile menu duplicates
                    document.querySelectorAll('.nav-links a[href="#' + match.id + '"]').forEach(l => {
                        l.classList.add('active');
                        l.setAttribute('aria-current', 'true');
                    });
                    currentActive = match.id;
                }
            }
        });
    }, {
        threshold: 0,
        rootMargin: '-20% 0px -60% 0px'
    });

    sectionMap.forEach(s => observer.observe(s.section));
}


/* ─── Back to top button ─── */
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    const hero = document.getElementById('hero');
    if (!btn || !hero) return;

    let ticking = false;
    const onScroll = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const heroBottom = hero.offsetTop + hero.offsetHeight;
                btn.classList.toggle('visible', window.scrollY > heroBottom);
                ticking = false;
            });
            ticking = true;
        }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
