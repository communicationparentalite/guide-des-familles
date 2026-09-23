/* ============================================================
   GUIDE DES FAMILLES - BERRY LOIRE PUISAYE
   Script JS unifié - Septembre 2026
   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       1. MENU MOBILE + SOUS-MENUS DÉROULANTS
       ============================================================ */
    function initNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const navList = document.getElementById('navList');
        const navCloseBtn = document.getElementById('navCloseBtn');

        if (menuToggle && navList) {
            menuToggle.addEventListener('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = navList.classList.toggle('active');
                menuToggle.classList.toggle('active', isOpen);
                menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                menuToggle.textContent = isOpen ? '✕ Fermer' : '☰ Menu';
            });
        }

        if (navCloseBtn && navList && menuToggle) {
            navCloseBtn.addEventListener('click', function () {
                navList.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰ Menu';
            });
        }

        document.querySelectorAll('.nav-dropdown > a').forEach(function (link) {
            link.addEventListener('click', function (e) {
                if (window.innerWidth > 768) return;
                e.preventDefault();
                e.stopPropagation();
                const parent = this.parentElement;
                const wasOpen = parent.classList.contains('open');
                document.querySelectorAll('.nav-dropdown.open').forEach(function (item) {
                    if (item !== parent) item.classList.remove('open');
                });
                parent.classList.toggle('open', !wasOpen);
            });
        });

        document.querySelectorAll('.nav-dropdown-menu a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth > 768) return;
                document.querySelectorAll('.nav-dropdown.open').forEach(function (item) {
                    item.classList.remove('open');
                });
                if (navList) navList.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                    menuToggle.setAttribute('aria-expanded', 'false');
                    menuToggle.textContent = '☰ Menu';
                }
            });
        });

        if (navList) {
            navList.addEventListener('contextmenu', function (e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    return false;
                }
            });
        }

        document.addEventListener('click', function (e) {
            if (window.innerWidth > 768) return;
            if (!navList || !navList.classList.contains('active')) return;
            if (navList.contains(e.target)) return;
            if (menuToggle && menuToggle.contains(e.target)) return;
            navList.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰ Menu';
            }
        });

        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (window.innerWidth > 768 && navList) {
                    navList.classList.remove('active');
                    if (menuToggle) {
                        menuToggle.classList.remove('active');
                        menuToggle.setAttribute('aria-expanded', 'false');
                        menuToggle.textContent = '☰ Menu';
                    }
                    document.querySelectorAll('.nav-dropdown.open').forEach(function (item) {
                        item.classList.remove('open');
                    });
                }
            }, 200);
        });
    }

    /* ============================================================
       2. BOUTON "RETOUR EN HAUT"
       ============================================================ */
    function initScrollTop() {
        const scrollBtn = document.getElementById('scrollTop');
        if (!scrollBtn) return;

        window.addEventListener('scroll', function () {
            scrollBtn.classList.toggle('visible', window.scrollY > 300);
        });

        scrollBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ============================================================
       3. LIGHTBOX
       ============================================================ */
    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const closeBtn = document.getElementById('lightboxClose');
        if (!lightbox || !lightboxImg) return;

        window.openLightbox = function (src) {
            if (!src) return;
            lightboxImg.src = src;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        document.querySelectorAll(
            '.section img:not(.hero-bg):not(.video-thumb img):not(#carte-ecoles img), ' +
            '.accordion-card img, .inline-image, .accordion-image, ' +
            '.subsection-with-image img, .full-text img, .cc-image-wrapper img'
        ).forEach(function (img) {
            img.addEventListener('click', function (e) {
                if (this.closest('.hero')) return;
                if (this.closest('.video-wrapper')) return;
                if (this.closest('.video-thumb')) return;
                if (this.closest('#carte-ecoles')) return;
                e.stopPropagation();
                const src = this.getAttribute('src');
                if (src) window.openLightbox(src);
            });
        });

        if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeLightbox();
        });
    }

    /* ============================================================
       4. ACCORDÉON PRINCIPAL
       ============================================================ */
    function toggleAccordion(header) {
        const isOpen = header.classList.contains('open');
        const body = header.nextElementSibling;
        if (!body) return;

        if (isOpen) {
            header.classList.remove('open');
            header.setAttribute('aria-expanded', 'false');
            body.classList.remove('open');
        } else {
            document.querySelectorAll('.accordion-header').forEach(function (h) {
                h.classList.remove('open');
                h.setAttribute('aria-expanded', 'false');
                if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
            });
            header.classList.add('open');
            header.setAttribute('aria-expanded', 'true');
            body.classList.add('open');

            if (window.__carteEcoles && header.parentElement.id === 'scolarite') {
                setTimeout(function () { window.__carteEcoles.invalidateSize(); }, 350);
            }
        }
    }

    function initAccordions() {
        document.querySelectorAll('.accordion-header').forEach(function (header) {
            header.addEventListener('click', function () { toggleAccordion(this); });
        });
    }

    /* ============================================================
       5. SOUS-ACCORDÉONS
       ============================================================ */
    window.toggleSubAccordion = function (id) {
        const content = document.getElementById(id + '-content');
        if (!content) return;
        const header = content.previousElementSibling;
        const icon = document.getElementById(id + '-icon');

        if (content.classList.contains('open')) {
            content.classList.remove('open');
            header.classList.remove('open');
            if (icon) { icon.textContent = '+'; icon.style.transform = 'rotate(0deg)'; }
        } else {
            content.classList.add('open');
            header.classList.add('open');
            if (icon) { icon.textContent = '−'; icon.style.transform = 'rotate(0deg)'; }
        }
    };

    window.toggleSousAccordion = window.toggleSubAccordion;

    /* ============================================================
       6. "LIRE LA SUITE"
       ============================================================ */
    function initReadMore() {
        document.querySelectorAll('.read-more-btn').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();

                const conteneurs = [
                    '.bulle-musicale',
                    '.ter-section',
                    '.text-wrapper',
                    '.text-col',
                    '.accordion-body',
                    '.sous-accordion-body',
                    '.sub-section',
                    '.card',
                    '.text-content'
                ];

                let conteneur = null;
                for (let i = 0; i < conteneurs.length; i++) {
                    conteneur = this.closest(conteneurs[i]);
                    if (conteneur) break;
                }
                if (!conteneur) conteneur = this.parentElement;
                if (!conteneur) return;

                const fullText = conteneur.querySelector('.full-text');
                if (!fullText) return;

                const isVisible = fullText.classList.contains('visible');
                fullText.classList.toggle('visible');
                this.textContent = isVisible ? 'Lire la suite' : 'Réduire';

                if (!isVisible && window.__carteEcoles) {
                    setTimeout(function () { window.__carteEcoles.invalidateSize(); }, 350);
                }
            });
        });
    }

    /* ============================================================
       7. OUVERTURE PAR ANCRE
       ============================================================ */
    function openAccordionItem(item) {
        if (!item) return;
        const header = item.querySelector(':scope > .accordion-header');
        if (!header || header.classList.contains('open')) return;

        document.querySelectorAll('.accordion-header').forEach(function (h) {
            h.classList.remove('open');
            h.setAttribute('aria-expanded', 'false');
            const body = h.nextElementSibling;
            if (body) body.classList.remove('open');
        });

        header.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
        const body = header.nextElementSibling;
        if (body) body.classList.add('open');
    }

    function openAccordionFromHash() {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (!target) return;

        if (target.classList.contains('accordion-item')) {
            openAccordionItem(target);
            setTimeout(function () {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (window.__carteEcoles) window.__carteEcoles.invalidateSize();
            }, 250);
            return;
        }

        if (target.classList.contains('content-box')) {
            const firstAccordion = target.querySelector('.accordion-item');
            if (firstAccordion) openAccordionItem(firstAccordion);
            setTimeout(function () {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (window.__carteEcoles) window.__carteEcoles.invalidateSize();
            }, 250);
            return;
        }

        const parentSousAccordion = target.closest('.sous-accordion-body');
        if (parentSousAccordion) {
            const subId = parentSousAccordion.id.replace('-content', '');
            if (typeof window.toggleSubAccordion === 'function') {
                if (!parentSousAccordion.classList.contains('open')) {
                    window.toggleSubAccordion(subId);
                }
            }
            const parentAccordion = parentSousAccordion.closest('.accordion-item');
            if (parentAccordion) openAccordionItem(parentAccordion);
            setTimeout(function () {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
            return;
        }

        const parentAccordionItem = target.closest('.accordion-item');
        if (parentAccordionItem) {
            openAccordionItem(parentAccordionItem);
            setTimeout(function () {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (window.__carteEcoles) window.__carteEcoles.invalidateSize();
            }, 250);
        }
    }

    /* ============================================================
       8. VIDÉO YOUTUBE
       ============================================================ */
    window.loadVideo = function (wrapperId, videoId, title) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper) return;
        wrapper.classList.add('video-loaded');
        wrapper.innerHTML =
            '<iframe src="https://www.youtube.com/embed/' + videoId +
            '?rel=0&modestbranding=1&autoplay=1" ' +
            'title="' + title + '" ' +
            'frameborder="0" ' +
            'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
            'referrerpolicy="strict-origin-when-cross-origin" ' +
            'allowfullscreen></iframe>';
    };

    /* ============================================================
       9. IMPRESSION SÉLECTIVE
       ============================================================ */
    function initPrintSelective() {
        const printBtn = document.getElementById('printBtn');
        const printSelectAll = document.getElementById('printSelectAll');
        const printCount = document.getElementById('printCount');

        if (!printBtn) return;

        function updateSelection() {
            const checkboxes = document.querySelectorAll('.print-checkbox');
            let count = 0;

            document.querySelectorAll('.print-selected').forEach(function (el) {
                el.classList.remove('print-selected');
            });

            checkboxes.forEach(function (cb) {
                if (cb.checked) {
                    count++;
                    const targetId = cb.dataset.printTarget;
                    if (targetId) {
                        const target = document.getElementById(targetId);
                        if (target) {
                            target.classList.add('print-selected');
                            const parentBox = target.closest('.content-box');
                            if (parentBox) parentBox.classList.add('print-selected');
                        }
                    }
                }
            });

            document.body.classList.toggle('print-has-selection', count > 0);

            if (printCount) {
                printCount.textContent = count;
                printCount.style.display = count > 0 ? 'inline-block' : 'none';
            }

            if (printSelectAll) {
                const label = printSelectAll.querySelector('span:not(.print-count)');
                if (label) {
                    const allChecked = checkboxes.length > 0 &&
                        Array.from(checkboxes).every(function (cb) { return cb.checked; });
                    label.textContent = allChecked ? 'Tout désélectionner' : 'Tout sélectionner';
                }
            }
        }

        document.querySelectorAll('.print-checkbox').forEach(function (cb) {
            cb.addEventListener('change', updateSelection);
        });

        if (printSelectAll) {
            printSelectAll.addEventListener('click', function (e) {
                e.preventDefault();
                const checkboxes = document.querySelectorAll('.print-checkbox');
                const allChecked = Array.from(checkboxes).every(function (cb) { return cb.checked; });
                checkboxes.forEach(function (cb) { cb.checked = !allChecked; });
                updateSelection();
            });
        }

        printBtn.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelectorAll('.accordion-body').forEach(function (b) { b.classList.add('open'); });
            document.querySelectorAll('.full-text').forEach(function (ft) { ft.classList.add('visible'); });
            document.querySelectorAll('.sous-accordion-body').forEach(function (sab) { sab.classList.add('open'); });
            setTimeout(function () { window.print(); }, 200);
        });

        updateSelection();
    }

    /* ============================================================
       10. CARTES ÉCOLES DÉPLIABLES (avec support impression)
       ============================================================ */
    function initCartesDepliables() {
        if (window.innerWidth > 768) return;

        document.querySelectorAll('.ecole-card').forEach(function (carte) {
            if (carte.dataset.depliable === 'true') return;
            carte.dataset.depliable = 'true';

            carte.addEventListener('click', function (e) {
                e.stopPropagation();
                if (e.target.closest('a')) return;
                if (e.target.closest('.ecole-print-row')) return;
                if (e.target.closest('input[type="checkbox"]')) return;
                if (e.target.closest('label')) return;
                this.classList.toggle('open');
            });
        });
    }

    /* ============================================================
       11. BOUTON HERO (page accueil)
       ============================================================ */
    function initHeroToggle() {
        const heroFullText = document.querySelector('.hero .full-text');
        const heroToggleBtn = document.getElementById('togglePresidentBtn');
        const heroSection = document.getElementById('heroSection');

        if (heroToggleBtn && heroFullText) {
            heroToggleBtn.addEventListener('click', function (e) {
                e.stopPropagation();
                const isVisible = heroFullText.classList.contains('visible');
                heroFullText.classList.toggle('visible');
                heroToggleBtn.textContent = isVisible ? 'Lire la suite' : 'Réduire';
                if (heroSection) heroSection.classList.toggle('expanded');
            });
        }
    }

    /* ============================================================
       12. CARTES MAIRIES REPLIABLES
       ============================================================ */
    function initMairiesDepliables() {
        document.querySelectorAll('.mairie-card-header').forEach(function (header) {
            header.addEventListener('click', function (e) {
                e.stopPropagation();
                if (e.target.closest('a')) return;
                const card = this.closest('.mairie-card');
                if (card) card.classList.toggle('open');
            });
        });
    }

    /* ============================================================
       13. AUTOMATISATION DES DATES DE MISE À JOUR
       ============================================================ */
    function initDates() {
        const dateElements = document.querySelectorAll('.header-date, #print-date');
        if (dateElements.length === 0) return;

        const now = new Date();
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('fr-FR', options);

        dateElements.forEach(function (el) {
            el.textContent = formattedDate;
        });
    }

    /* ============================================================
       14. INITIALISATION
       ============================================================ */
    function init() {
        initNavigation();
        initScrollTop();
        initLightbox();
        initAccordions();
        initReadMore();
        initHeroToggle();
        initPrintSelective();
        initCartesDepliables();
        initMairiesDepliables();
        initDates();

        setTimeout(openAccordionFromHash, 100);
        window.addEventListener('hashchange', openAccordionFromHash);

        let resizeTimer;
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                if (window.innerWidth > 768) {
                    document.querySelectorAll('.ecole-card.open').forEach(function (c) {
                        c.classList.remove('open');
                    });
                } else {
                    initCartesDepliables();
                }
            }, 200);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
