/* ============================================================
   GUIDE DES FAMILLES - BERRY LOIRE PUISAYE
   Script JS unifié - Septembre 2026
   Inclut Pagefind (recherche interne) + injection de la navigation
   ============================================================ */

(function () {
    'use strict';

    /* ============================================================
       1. INJECTION DU HEADER COMMUN + RECHERCHE PAGEFIND
       ============================================================ */
    function initHeader() {
        const header = document.getElementById('siteHeader');
        if (!header) return;

        // ✅ Charger les ressources Pagefind (une seule fois)
        if (!document.querySelector('link[href*="pagefind-component-ui.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'pagefind/pagefind-component-ui.css';
            document.head.appendChild(link);
        }
        if (!document.querySelector('script[src*="pagefind-component-ui.js"]')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'pagefind/pagefind-component-ui.js';
            document.head.appendChild(script);
        }

        header.innerHTML =
            '<div class="container">' +
                '<div class="header-content">' +
                    '<div class="logo">' +
                        '<img src="Logo_berryloirepuisaye-removebg-preview.png" alt="Logo" onerror="this.style.display=\'none\'">' +
                        '<h1><a href="index.html">Guide des Familles</a></h1>' +
                    '</div>' +
                    '<div class="header-info">' +
                        '<div class="header-search">' +
                            '<pagefind-modal-trigger></pagefind-modal-trigger>' +
                        '</div>' +
                        '<div class="header-date-info">' +
                            '<strong>Dernière mise à jour :</strong> <span class="header-date"></span>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<pagefind-config bundle-path="/guide-des-familles-ccblp/pagefind/"></pagefind-config>' +
            '<pagefind-modal></pagefind-modal>';
    }

    /* ============================================================
       2. INJECTION DE LA NAVIGATION COMMUNE
       ============================================================ */
    function initNav() {
        const nav = document.getElementById('mainNav');
        if (!nav) return;

        nav.innerHTML =
            '<button class="menu-toggle" id="menuToggle" aria-label="Menu" aria-expanded="false" aria-controls="navList">☰ Menu</button>' +
            '<ul class="nav-list" id="navList">' +

                '<li><a href="index.html" class="nav-link-accueil">Accueil</a></li>' +

                '<li class="nav-dropdown dropdown-interlocuteurs">' +
                    '<a href="interlocuteurs.html" class="nav-link-interlocuteurs">Interlocuteurs</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="interlocuteurs.html" class="nav-dropdown-main-link">Voir la page Interlocuteurs</a></li>' +
                        '<li><a href="interlocuteurs.html#mairies">Mairies</a></li>' +
                        '<li><a href="interlocuteurs.html#communaute-communes">Communauté de communes</a></li>' +
                        '<li><a href="interlocuteurs.html#caf">CAF du Loiret</a></li>' +
                        '<li><a href="interlocuteurs.html#msa">MSA Beauce Cœur de Loire</a></li>' +
                        '<li><a href="interlocuteurs.html#ads">Agence Départementale des Solidarités</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-arrivee-enfant">' +
                    '<a href="arrivee-enfant.html" class="nav-link-arrivee-enfant">Arrivée d\'un enfant</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="arrivee-enfant.html" class="nav-dropdown-main-link">Voir la page Arrivée d\'un enfant</a></li>' +
                        '<li><a href="arrivee-enfant.html#demarches">Démarches avant l\'arrivée</a></li>' +
                        '<li><a href="arrivee-enfant.html#accompagnement-perinatal">Accompagnement périnatal</a></li>' +
                        '<li><a href="arrivee-enfant.html#mode-de-garde">Recherche d\'un mode de garde</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-petite-enfance">' +
                    '<a href="petite-enfance.html" class="nav-link-petite-enfance">Petite enfance</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="petite-enfance.html" class="nav-dropdown-main-link">Voir la page Petite enfance</a></li>' +
                        '<li><a href="petite-enfance.html#guichet-unique">Guichet Unique de la Petite Enfance (RPE)</a></li>' +
                        '<li><a href="petite-enfance.html#accueil-collectif">Accueil collectif</a></li>' +
                        '<li><a href="petite-enfance.html#mam">Maison d\'Assistantes Maternelles (MAM)</a></li>' +
                        '<li><a href="petite-enfance.html#accueil-individuel">Accueil individuel avec le RPE</a></li>' +
                        '<li><a href="petite-enfance.html#la-marelle">La Marelle - LAEP</a></li>' +
                        '<li><a href="petite-enfance.html#pmi">PMI - Consultations et ateliers</a></li>' +
                        '<li><a href="petite-enfance.html#bulle-musicale">Focus sur La Bulle Musicale</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-enfance">' +
                    '<a href="enfance.html" class="nav-link-enfance">Enfance</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="enfance.html" class="nav-dropdown-main-link">Voir la page Enfance</a></li>' +
                        '<li><a href="enfance.html#scolarite">Scolarité</a></li>' +
                        '<li><a href="enfance.html#clas">CLAS</a></li>' +
                        '<li><a href="enfance.html#accueils-loisirs">Accueils de loisirs</a></li>' +
                        '<li><a href="enfance.html#accueils-periscolaires">Accueil périscolaire</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-jeunesse">' +
                    '<a href="jeunesse.html" class="nav-link-jeunesse">Jeunesse</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="jeunesse.html" class="nav-dropdown-main-link">Voir la page Jeunesse</a></li>' +
                        '<li><a href="jeunesse.html#colleges">Collèges</a></li>' +
                        '<li><a href="jeunesse.html#ter">Focus sur le Territoire Éducatif Rural</a></li>' +
                        '<li><a href="jeunesse.html#structures-loisirs">Structures d\'accueil et de loisirs</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-parentalite">' +
                    '<a href="parentalite.html" class="nav-link-parentalite">Parentalité</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="parentalite.html" class="nav-dropdown-main-link">Voir la page Parentalité</a></li>' +
                        '<li><a href="parentalite.html#aed">Aide Éducative à Domicile (AED)</a></li>' +
                        '<li><a href="parentalite.html#sdaep">Service d\'Accompagnement Éducatif à la Parentalité (SDAEP)</a></li>' +
                        '<li><a href="parentalite.html#allo-parents-crise">Allo, Parents en crise</a></li>' +
                        '<li><a href="parentalite.html#a-domicile-45">A domicile 45</a></li>' +
                        '<li><a href="parentalite.html#bee-mobile">Espace de vie sociale Bee\'Mobile</a></li>' +
                        '<li><a href="parentalite.html#paf">Programme d\'Animations Familiales (PAF)</a></li>' +
                        '<li><a href="parentalite.html#groupe-echanges">Groupe d\'échanges entre parents</a></li>' +
                        '<li><a href="parentalite.html#nid-fleuri">Relais Parental "Le Nid fleuri"</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-loisirs">' +
                    '<a href="loisirs.html" class="nav-link-loisirs">Loisirs</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="loisirs.html" class="nav-dropdown-main-link">Voir la page Loisirs</a></li>' +
                        '<li><a href="loisirs.html#bibliotheques">Bibliothèques</a></li>' +
                        '<li><a href="loisirs.html#saison-culturelle">Saison Culturelle</a></li>' +
                        '<li><a href="loisirs.html#associations">Associations</a></li>' +
                        '<li><a href="loisirs.html#ludotheques">Ludothèques</a></li>' +
                        '<li><a href="loisirs.html#microfolie">Micro-Folie</a></li>' +
                        '<li><a href="loisirs.html#tourisme">Office de Tourisme</a></li>' +
                        '<li><a href="loisirs.html#patrimoine">Patrimoine</a></li>' +
                        '<li><a href="loisirs.html#squares">Squares</a></li>' +
                        '<li><a href="loisirs.html#city-skate">City-stades</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-vivre-ensemble">' +
                    '<a href="vivre-ensemble.html" class="nav-link-vivre-ensemble">Vivre ensemble</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="vivre-ensemble.html" class="nav-dropdown-main-link">Voir la page Vivre ensemble</a></li>' +
                        '<li><a href="vivre-ensemble.html#guidasso">Guid\'Asso</a></li>' +
                        '<li><a href="vivre-ensemble.html#espace-initiatives">Espace Initiatives Habitants</a></li>' +
                        '<li><a href="vivre-ensemble.html#permanence-numerique">Permanence numérique</a></li>' +
                    '</ul>' +
                '</li>' +

                '<li class="nav-dropdown dropdown-acces-droits">' +
                    '<a href="acces-droits.html" class="nav-link-acces-droits">Accès aux droits</a>' +
                    '<ul class="nav-dropdown-menu">' +
                        '<li><a href="acces-droits.html" class="nav-dropdown-main-link">Voir la page Accès aux droits</a></li>' +
                        '<li><a href="acces-droits.html#franceservice">Réseau France Services</a></li>' +
                        '<li><a href="acces-droits.html#ads">Agence Départementale des Solidarités (ADS)</a></li>' +
                        '<li><a href="acces-droits.html#sis">Service d\'Intervention Sociale de la CAF</a></li>' +
                        '<li><a href="acces-droits.html#msa">Adhérents MSA</a></li>' +
                        '<li><a href="acces-droits.html#cidff">CIDFF</a></li>' +
                        '<li><a href="acces-droits.html#prh45">Pôle Ressources Handicap 45 (PRH45)</a></li>' +
                    '</ul>' +
                '</li>' +

            '</ul>';

        // ✅ Détecter la page courante et ajouter la classe .active
        marquerPageActive();
    }

    /* ============================================================
       3. MARQUER LA PAGE COURANTE COMME ACTIVE
       ============================================================ */
    function marquerPageActive() {
        const nav = document.getElementById('mainNav');
        if (!nav) return;

        // Récupérer le nom du fichier courant (ex: "enfance.html")
        let currentPage = window.location.pathname.split('/').pop();
        if (currentPage === '' || currentPage === '/') {
            currentPage = 'index.html';
        }
        // Supprimer une éventuelle ancre ou query string
        currentPage = currentPage.split('#')[0].split('?')[0];

        // Accueil
        if (currentPage === 'index.html') {
            const accueil = nav.querySelector('.nav-link-accueil');
            if (accueil) accueil.classList.add('active');
            return;
        }

        // Rubriques principales
        const rubriques = [
            { page: 'interlocuteurs.html', selector: '.nav-link-interlocuteurs' },
            { page: 'arrivee-enfant.html', selector: '.nav-link-arrivee-enfant' },
            { page: 'petite-enfance.html', selector: '.nav-link-petite-enfance' },
            { page: 'enfance.html', selector: '.nav-link-enfance' },
            { page: 'jeunesse.html', selector: '.nav-link-jeunesse' },
            { page: 'parentalite.html', selector: '.nav-link-parentalite' },
            { page: 'loisirs.html', selector: '.nav-link-loisirs' },
            { page: 'vivre-ensemble.html', selector: '.nav-link-vivre-ensemble' },
            { page: 'acces-droits.html', selector: '.nav-link-acces-droits' }
        ];

        for (let i = 0; i < rubriques.length; i++) {
            if (rubriques[i].page === currentPage) {
                const link = nav.querySelector(rubriques[i].selector);
                if (link) link.classList.add('active');
                break;
            }
        }
    }

    /* ============================================================
       4. INJECTION DU FOOTER COMMUN
       ============================================================ */
    function initFooter() {
        const footer = document.getElementById('siteFooter');
        if (!footer) return;

        footer.innerHTML =
            '<div class="container">' +
                '<div class="footer-content-accueil">' +
                    '<div class="footer-section">' +
                        '<h3>Communauté de Communes Berry Loire Puisaye</h3>' +
                        '<p>42 rue des Prés Gris<br>45250 BRIARE</p>' +
                        '<p>📞 <a href="tel:0238370384">02 38 37 03 84</a><br>' +
                        '📧 <a href="mailto:contact@cc-berryloirepuisaye.fr">contact@cc-berryloirepuisaye.fr</a></p>' +
                    '</div>' +
                    '<div class="footer-section">' +
                        '<h3>Liens utiles</h3>' +
                        '<ul>' +
                            '<li><a href="mentions-legales.html">Mentions légales</a></li>' +
                            '<li><a href="https://www.cc-berryloirepuisaye.fr" target="_blank" rel="noopener">Site de la Communauté de Communes</a></li>' +
                            '<li><a href="https://www.caf.fr" target="_blank" rel="noopener">CAF du Loiret</a></li>' +
                            '<li><a href="https://www.service-public.fr" target="_blank" rel="noopener">Service Public</a></li>' +
                        '</ul>' +
                    '</div>' +
                '</div>' +
                '<div class="footer-bottom">' +
                    '<p>&copy; 2026 Communauté de Communes Berry Loire Puisaye - Tous droits réservés</p>' +
                '</div>' +
            '</div>';
    }

    /* ============================================================
       5. INJECTION DE LA LIGHTBOX
       ============================================================ */
    function initLightboxInjection() {
        if (document.getElementById('lightbox')) return;

        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.id = 'lightbox';
        lightbox.innerHTML =
            '<div class="lightbox-content">' +
                '<button class="lightbox-close" id="lightboxClose" aria-label="Fermer">&times;</button>' +
                '<img id="lightboxImg" class="lightbox-image" src="" alt="">' +
            '</div>';
        document.body.appendChild(lightbox);
    }

    /* ============================================================
       6. INJECTION DU BOUTON D'IMPRESSION FLOTTANT
       ============================================================ */
    function initPrintFloatBtn() {
        if (document.getElementById('printFloatBtn')) return;
        if (!document.querySelector('.print-checkbox')) return;

        const btn = document.createElement('div');
        btn.className = 'print-float-btn';
        btn.id = 'printFloatBtn';
        btn.setAttribute('data-pagefind-ignore', 'all');
        btn.innerHTML =
            '<div class="print-hint">' +
                '<i class="fas fa-lightbulb"></i>' +
                '<span>Ouvrez une section et cochez la case pour l\'imprimer</span>' +
            '</div>' +
            '<button class="print-select-all" id="printSelectAll">' +
                '<i class="fas fa-check-square"></i>' +
                '<span>Tout sélectionner</span>' +
                '<span class="print-count" id="printCount" style="display: none;">0</span>' +
            '</button>' +
            '<button id="printBtn">' +
                '<i class="fas fa-print"></i>' +
                '<span class="print-label-long">Imprimer la sélection</span>' +
                '<span class="print-label-short">Imprimer</span>' +
            '</button>';
        document.body.appendChild(btn);
    }

    /* ============================================================
       7. INJECTION DU BOUTON SCROLL TOP
       ============================================================ */
    function initScrollTopBtn() {
        if (document.getElementById('scrollTop')) return;

        const btn = document.createElement('button');
        btn.className = 'scroll-top';
        btn.id = 'scrollTop';
        btn.title = 'Retour en haut';
        btn.setAttribute('aria-label', 'Retour en haut');
        btn.textContent = '↑';
        document.body.appendChild(btn);
    }

    /* ============================================================
       8. INJECTION DE L'EN-TÊTE ET DU PIED D'IMPRESSION
       ============================================================ */
    function initPrintHeader() {
        if (document.querySelector('.print-header')) return;

        const pageTitle = document.title.split(' - ')[0] || 'Guide des Familles';

        const printHeader = document.createElement('div');
        printHeader.className = 'print-header';
        printHeader.style.display = 'none';
        printHeader.setAttribute('data-pagefind-ignore', 'all');
        printHeader.innerHTML =
            '<h1>Guide des Familles - ' + pageTitle + '</h1>' +
            '<p>Communauté de Communes Berry Loire Puisaye</p>' +
            '<p>Imprimé le <span id="print-date"></span></p>';
        document.body.insertBefore(printHeader, document.body.firstChild);

        const printFooter = document.createElement('div');
        printFooter.className = 'print-footer';
        printFooter.style.display = 'none';
        printFooter.setAttribute('data-pagefind-ignore', 'all');
        printFooter.innerHTML =
            '<p>Guide des Familles - Communauté de Communes Berry Loire Puisaye</p>' +
            '<p>42 rue des Prés Gris, 45250 BRIARE - 02 38 37 03 84 - contact@cc-berryloirepuisaye.fr</p>' +
            '<p>www.cc-berryloirepuisaye.fr</p>';
        document.body.appendChild(printFooter);
    }

    /* ============================================================
       9. MENU MOBILE + SOUS-MENUS DÉROULANTS
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
       10. BOUTON "RETOUR EN HAUT"
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
       11. LIGHTBOX
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
       12. ACCORDÉON PRINCIPAL
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
                setTimeout(function () {
                    window.__carteEcoles.invalidateSize();
                    if (window.__epciLayer) {
                        window.__carteEcoles.fitBounds(window.__epciLayer.getBounds(), { padding: [20, 20] });
                    }
                }, 350);
            }
        }
    }

    function initAccordions() {
        document.querySelectorAll('.accordion-header').forEach(function (header) {
            header.addEventListener('click', function () { toggleAccordion(this); });
        });
    }

    /* ============================================================
       13. SOUS-ACCORDÉONS
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
       14. "LIRE LA SUITE"
       ============================================================ */
    function initReadMore() {
        document.querySelectorAll('.read-more-btn').forEach(function (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();

                let fullText = null;
                let sibling = this.nextElementSibling;
                while (sibling) {
                    if (sibling.classList && sibling.classList.contains('full-text')) {
                        fullText = sibling;
                        break;
                    }
                    sibling = sibling.nextElementSibling;
                }

                if (!fullText) {
                    const conteneurs = [
                        '.bulle-musicale',
                        '.ter-section',
                        '.text-wrapper',
                        '.text-col',
                        '.sous-accordion-body',
                        '.accordion-body',
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

                    fullText = conteneur.querySelector('.full-text');
                }

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
       15. OUVERTURE PAR ANCRE
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
       16. VIDÉO YOUTUBE
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
       17. IMPRESSION SÉLECTIVE
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

                            const parentAccordion = target.closest('.accordion-item');
                            if (parentAccordion) parentAccordion.classList.add('print-selected');

                            const parentContentBox = target.closest('.content-box');
                            if (parentContentBox) parentContentBox.classList.add('print-selected');

                            const parentGrid = target.closest('.accordion-card-grid');
                            if (parentGrid) parentGrid.classList.add('print-selected');

                            const parentSousAccordion = target.closest('.sous-accordion-wrapper');
                            if (parentSousAccordion) parentSousAccordion.classList.add('print-selected');
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
            document.querySelectorAll('.mairie-card').forEach(function (mc) { mc.classList.add('open'); });
            setTimeout(function () { window.print(); }, 200);
        });

        updateSelection();
    }

    /* ============================================================
       18. CARTES ÉCOLES DÉPLIABLES (mobile)
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
       19. BOUTON HERO (page accueil)
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
       20. CARTES MAIRIES REPLIABLES
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
       21. AUTOMATISATION DES DATES
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
       22. INITIALISATION
       ============================================================ */
    function init() {
        // 1. Injection des éléments communs
        initHeader();
        initNav();
        initFooter();
        initLightboxInjection();
        initPrintFloatBtn();
        initScrollTopBtn();
        initPrintHeader();

        // 2. Initialisation des comportements
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
