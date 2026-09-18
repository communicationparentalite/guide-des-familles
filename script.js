/* ============================================================
   GUIDE DES FAMILLES - BERRY LOIRE PUISAYE
   Script JS unifié - Septembre 2026
   ------------------------------------------------------------
   Ce fichier remplace TOUT le JavaScript inline des 9 pages.
   Il gère : menu, sous-menus, scroll-top, lightbox, accordéons,
   sous-accordéons, "Lire la suite", ouverture par ancre,
   vidéo YouTube, impression sélective, cartes école et mairies
   dépliables, bouton hero de l'accueil.
   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       1. MENU MOBILE + SOUS-MENUS DÉROULANTS
       ============================================================ */
    function initNavigation() {
        const menuToggle = document.getElementById('menuToggle');
        const navList = document.getElementById('navList');

        // Bouton hamburger (mobile)
        if (menuToggle && navList) {
            menuToggle.addEventListener('click', function (e) {
                e.stopPropagation();
                navList.classList.toggle('active');
                menuToggle.classList.toggle('active');
            });
        }

        // Double-clic sur mobile pour ouvrir un sous-menu
        document.querySelectorAll('.nav-dropdown > a').forEach(function (link) {
            let clickTimer = null;

            link.addEventListener('click', function (e) {
                if (window.innerWidth > 768) return;

                if (clickTimer) {
                    clearTimeout(clickTimer);
                    clickTimer = null;
                    return;
                }

                e.preventDefault();
                const parent = this.parentElement;
                const wasOpen = parent.classList.contains('open');

                document.querySelectorAll('.nav-dropdown.open').forEach(function (item) {
                    item.classList.remove('open');
                });

                if (!wasOpen) parent.classList.add('open');

                clickTimer = setTimeout(function () { clickTimer = null; }, 300);
            });
        });

        // Fermer le menu au clic sur un lien du sous-menu (mobile)
        document.querySelectorAll('.nav-dropdown-menu a').forEach(function (link) {
            link.addEventListener('click', function () {
                if (window.innerWidth > 768) return;
                const parentDropdown = this.closest('.nav-dropdown');
                if (parentDropdown) parentDropdown.classList.remove('open');
                if (navList) navList.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
            });
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
       3. LIGHTBOX (agrandissement des images)
       ============================================================ */
    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightboxImg');
        const closeBtn = document.getElementById('lightboxClose');
        if (!lightbox || !lightboxImg) return;

        // Fonction globale (utilisée par onclick="openLightbox(...)" dans le HTML)
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

        // Clic sur les images : on exclut hero, vidéo, carte Leaflet
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

            // Si la carte Leaflet est dans cette section, on la rafraîchit
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
       5. SOUS-ACCORDÉONS (petite-enfance et jeunesse)
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

    // Alias (certaines pages utilisent toggleSousAccordion)
    window.toggleSousAccordion = window.toggleSubAccordion;

    /* ============================================================
       6. "LIRE LA SUITE" — VERSION UNIFIÉE ET CORRIGÉE
       ============================================================ */
    function initReadMore() {
        document.querySelectorAll('.read-more-btn').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();

                // Conteneurs possibles, du plus spécifique au plus générique
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

                // Rafraîchir Leaflet si nécessaire
                if (!isVisible && window.__carteEcoles) {
                    setTimeout(function () { window.__carteEcoles.invalidateSize(); }, 350);
                }
            });
        });
    }

    /* ============================================================
       7. OUVERTURE PAR ANCRE (#section)
       ============================================================ */
    function openAccordionFromHash() {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (!target) return;

        // Cas 1 : content-box → ouvrir le premier accordéon qu'il contient
        if (target.classList.contains('content-box')) {
            const firstAccordion = target.querySelector('.accordion-item');
            if (firstAccordion) {
                const header = firstAccordion.querySelector('.accordion-header');
                if (header && !header.classList.contains('open')) {
                    document.querySelectorAll('.accordion-header').forEach(function (h) {
                        h.classList.remove('open');
                        h.setAttribute('aria-expanded', 'false');
                        if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
                    });
                    header.classList.add('open');
                    header.setAttribute('aria-expanded', 'true');
                    if (header.nextElementSibling) header.nextElementSibling.classList.add('open');
                    setTimeout(function () {
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }, 200);
                }
                return;
            }
        }

        // Cas 2 : accordion-item → ouvrir cet accordéon
        if (target.classList.contains('accordion-item')) {
            const header = target.querySelector('.accordion-header');
            if (header && !header.classList.contains('open')) {
                document.querySelectorAll('.accordion-header').forEach(function (h) {
                    h.classList.remove('open');
                    h.setAttribute('aria-expanded', 'false');
                    if (h.nextElementSibling) h.nextElementSibling.classList.remove('open');
                });
                header.classList.add('open');
                header.setAttribute('aria-expanded', 'true');
                if (header.nextElementSibling) header.nextElementSibling.classList.add('open');
                setTimeout(function () {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (window.__carteEcoles) window.__carteEcoles.invalidateSize();
                }, 250);
            }
        }
    }

    /* ============================================================
       8. VIDÉO YOUTUBE — Chargement au clic (miniature cliquable)
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
        const printDate = document.getElementById('print-date');

        if (!printBtn) return; // pas de bouton impression sur cette page

        // Date du jour dans l'en-tête d'impression
        if (printDate) {
            const now = new Date();
            printDate.textContent = now.toLocaleDateString('fr-FR', {
                day: '2-digit', month: 'long', year: 'numeric'
            });
        }

        function updateSelection() {
            const checkboxes = document.querySelectorAll('.print-checkbox');
            let count = 0;

            // Nettoyer les marquages
            document.querySelectorAll('.print-selected').forEach(function (el) {
                el.classList.remove('print-selected');
            });

            // Compter et marquer
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
            // Tout ouvrir avant impression
            document.querySelectorAll('.accordion-body').forEach(function (b) { b.classList.add('open'); });
            document.querySelectorAll('.full-text').forEach(function (ft) { ft.classList.add('visible'); });
            document.querySelectorAll('.sous-accordion-body').forEach(function (sab) { sab.classList.add('open'); });
            setTimeout(function () { window.print(); }, 200);
        });

        updateSelection();
    }

    /* ============================================================
       10. CARTES ÉCOLES DÉPLIABLES SUR MOBILE (page enfance)
       ============================================================ */
    function initCartesDepliables() {
        if (window.innerWidth > 768) return;

        document.querySelectorAll('.ecole-card').forEach(function (carte) {
            if (carte.dataset.depliable === 'true') return;
            carte.dataset.depliable = 'true';

            carte.addEventListener('click', function (e) {
                e.stopPropagation(); // Empêche la fermeture de l'accordéon parent
                if (e.target.closest('a')) return;
                this.classList.toggle('open');
            });
        });
    }

    /* ============================================================
       11. BOUTON "LIRE LA SUITE" DU HERO (page accueil)
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
       12. CARTES MAIRIES REPLIABLES (page interlocuteurs)
       ============================================================ */
    function initMairiesDepliables() {
        document.querySelectorAll('.mairie-card-header').forEach(function (header) {
            header.addEventListener('click', function (e) {
                e.stopPropagation(); // Empêche la fermeture de l'accordéon parent
                if (e.target.closest('a')) return;
                const card = this.closest('.mairie-card');
                if (card) card.classList.toggle('open');
            });
        });
    }

    /* ============================================================
       13. INITIALISATION AU CHARGEMENT
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

        // Ouverture par ancre (au chargement + au changement d'ancre)
        openAccordionFromHash();
        window.addEventListener('hashchange', openAccordionFromHash);

        // Redimensionnement : refermer les cartes école en desktop
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

    // Lancer dès que le DOM est prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
