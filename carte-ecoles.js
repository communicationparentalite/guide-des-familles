<script>
        (function() {
            const etablissementsData = [
                { type: "college", commune: "Briare", nom: "Collège Albert Camus", adresse: "Rue du Port à Belleau, 45250 Briare", telephone: "02 38 37 02 83", email: "ce0450008p@ac-orleans-tours.fr", dispositifs: "SEGPA + ULIS", lat: 47.6378, lng: 2.7373 },
                { type: "college", commune: "Châtillon-sur-Loire", nom: "Collège Pierre Dézarnaulds", adresse: "2 allée du Paradis, 45360 Châtillon-sur-Loire", telephone: "02 38 31 42 49", email: "ce0450017z@ac-orleans-tours.fr", dispositifs: "ULIS", lat: 47.5905, lng: 2.7485 },
                { type: "ecole", rpiId: "rpi-chatillon", commune: "Châtillon-sur-Loire", nom: "École maternelle et élémentaire", adresse: "place du Champ de Foire, 45360 Châtillon-sur-Loire", telephone: "02 38 31 40 74", email: "ce.0450881N@ac-orleans-tours.fr", lat: 47.591146, lng: 2.748100 },
                { type: "ecole", rpiId: "rpi-bonny", commune: "Bonny-sur-Loire", nom: "École maternelle et élémentaire", adresse: "2 avenue de la Gare, 45420 Bonny-sur-Loire", telephone: "02 38 31 63 57", email: "ce.0450182D@ac-orleans-tours.fr", lat: 47.559345, lng: 2.842596 },
                { type: "ecole", commune: "Autry-le-Châtel", nom: "École maternelle et élémentaire", adresse: "14 rue de l'École, 45500 Autry-le-Châtel", telephone: "02 38 36 82 62 / 02 38 36 81 88", email: "ce.0450195T@ac-orleans-tours.fr", lat: 47.598875, lng: 2.604867 },
                { type: "ecole", commune: "Beaulieu-sur-Loire", nom: "École maternelle et élémentaire", adresse: "15 rue de Châtillon, 45630 Beaulieu-sur-Loire", telephone: "02.19.00.49.86 / 02.38.35.85.35", email: "ce.0451398A@ac-orleans-tours.fr", lat: 47.544626, lng: 2.812810 },
                { type: "ecole", commune: "Ousson-sur-Loire", nom: "École élémentaire George Sand", adresse: "11 rue de l'Abreuvoir, 45250 Ousson-sur-Loire", telephone: "02 38 31 00 51", email: "ce.0450189L@ac-orleans-tours.fr", lat: 47.588507, lng: 2.786550 },
                { type: "ecole", commune: "Briare", nom: "École Marcel Gaime (maternelle)", adresse: "place Saint Roch, 45250 Briare", telephone: "02 38 31 25 85", email: "ce.0450167M@ac-orleans-tours.fr", lat: 47.637205, lng: 2.738436 },
                { type: "ecole", commune: "Briare", nom: "École du Centre (élémentaire)", adresse: "3 square Foch, 45250 Briare", telephone: "02 38 31 26 49", email: "ce.0450869A@ac-orleans-tours.fr", lat: 47.640598, lng: 2.737694 },
                { type: "ecole", commune: "Briare", nom: "École Gustave Eiffel (maternelle et élémentaire)", adresse: "7 rue de l'Espérance, 45250 Briare", telephone: "02 38 31 25 34", email: "ce.0450178Z@ac-orleans-tours.fr", lat: 47.631652, lng: 2.743530 },
                { type: "ecole-privee", commune: "Briare", nom: "École Sainte-Anne (privée)", adresse: "5 rue des Grands Jardins, 45250 Briare", telephone: "02 38 31 26 48", email: "ce.0451522K@ac-orleans-tours.fr", lat: 47.637611, lng: 2.736503 },
                { type: "ecole", commune: "Ouzouër-sur-Trézée", nom: "École Jacques Prévert", adresse: "14 rue de la Flamandière, 45250 Ouzouër-sur-Trézée", telephone: "02 38 31 97 47 / 02 38 31 92 89", email: "ce.0451269K@ac-orleans-tours.fr", lat: 47.670537, lng: 2.807115 },
                { type: "rpi", rpiId: "rpi-cernoy-pierrefitte", commune: "Cernoy-en-Berry", nom: "École maternelle (RPI Cernoy / Pierrefitte)", adresse: "5 rue d'Autry, 45360 Cernoy-en-Berry", telephone: "02 38 31 01 00", email: "ec-cernoy-en-berry@ac-orleans-tours.fr", rpiInfo: "RPI Cernoy / Pierrefitte — Maternelle à Cernoy, élémentaire à Pierrefitte", lat: 47.541448, lng: 2.660588 },
                { type: "rpi", rpiId: "rpi-cernoy-pierrefitte", commune: "Pierrefitte-ès-Bois", nom: "École élémentaire (RPI Cernoy / Pierrefitte)", adresse: "7 rue de la Mairie, 45360 Pierrefitte-ès-Bois", telephone: "02 38 31 08 13", email: "ec-pierrefitte-es-bois@ac-orleans-tours.fr", rpiInfo: "RPI Cernoy / Pierrefitte — Maternelle à Cernoy, élémentaire à Pierrefitte", lat: 47.507527, lng: 2.717887 },
                { type: "rpi", rpiId: "rpi-adon-bussiere", commune: "Adon", nom: "École élémentaire (SIIS Adon / La Bussière)", adresse: "13 route de la Bussière, 45230 Adon", telephone: "02 38 35 94 69", email: "ce.0450175W@ac-orleans-tours.fr", rpiInfo: "SIIS Adon / La Bussière — Élémentaire à Adon, maternelle à La Bussière", lat: 47.763036, lng: 2.795527 },
                { type: "rpi", rpiId: "rpi-adon-bussiere", commune: "La Bussière", nom: "École primaire (SIIS Adon / La Bussière)", adresse: "rue d'Ouzouer, 45230 La Bussière", telephone: "02 38 35 90 68", email: "ce.0450184F@ac-orleans-tours.fr", rpiInfo: "SIIS Adon / La Bussière — Élémentaire à Adon, maternelle à La Bussière", lat: 47.744547, lng: 2.749711 }
            ];

            const communesRattachees = [
                { rpiId: "rpi-chatillon", commune: "Saint-Firmin-sur-Loire", nom: "Commune rattachée au RPI de Châtillon-sur-Loire", info: "Les élèves de Saint-Firmin-sur-Loire sont scolarisés à l'école de Châtillon-sur-Loire.", adresseRecherche: "mairie 45360 Saint-Firmin-sur-Loire", lat: 47.5972, lng: 2.6972 },
                { rpiId: "rpi-bonny", commune: "Dammarie-en-Puisaye", nom: "Commune rattachée au RPI de Bonny-sur-Loire", info: "Les élèves de Dammarie-en-Puisaye sont scolarisés à l'école de Bonny-sur-Loire.", adresseRecherche: "mairie 45420 Dammarie-en-Puisaye", lat: 47.5906, lng: 2.8969 },
                { rpiId: "rpi-bonny", commune: "Batilly-en-Puisaye", nom: "Commune rattachée au RPI de Bonny-sur-Loire", info: "Les élèves de Batilly-en-Puisaye sont scolarisés à l'école de Bonny-sur-Loire.", adresseRecherche: "mairie 45420 Batilly-en-Puisaye", lat: 47.5911, lng: 2.9361 },
                { rpiId: "rpi-bonny", commune: "Thou", nom: "Commune rattachée au RPI de Bonny-sur-Loire", info: "Les élèves de Thou sont scolarisés à l'école de Bonny-sur-Loire.", adresseRecherche: null, lat: 47.58117028224872, lng: 2.9113765058614773 },
                { rpiId: "rpi-bonny", commune: "Faverelles", nom: "Commune rattachée au RPI de Bonny-sur-Loire", info: "Les élèves de Faverelles sont scolarisés à l'école de Bonny-sur-Loire.", adresseRecherche: "mairie 45420 Faverelles", lat: 47.6167, lng: 2.9167 }
            ];

            const mapEcolesEl = document.getElementById('carte-ecoles');
            if (mapEcolesEl && typeof L !== 'undefined') {
                try {
                    const mapEcoles = L.map('carte-ecoles').setView([47.63, 2.79], 11);
                    window.__carteEcoles = mapEcoles;

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        maxZoom: 19,
                        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    }).addTo(mapEcoles);

                    let epciLayer = null;
                    window.__epciLayer = null;

                    var styleEPCI = { color: "#4A4DBD", weight: 3, opacity: 0.9, fillColor: "#686be7", fillOpacity: 0.03, dashArray: "8, 5" };
                    fetch('epci-ccblp.geojson')
                        .then(function(r) { if (!r.ok) throw new Error('EPCI non trouvé'); return r.json(); })
                        .then(function(data) {
                            epciLayer = L.geoJSON(data, { style: styleEPCI, interactive: false }).addTo(mapEcoles);
                            window.__epciLayer = epciLayer;
                            mapEcoles.invalidateSize();
                            mapEcoles.fitBounds(epciLayer.getBounds(), { padding: [20, 20] });
                        })
                        .catch(function(err) { console.warn('⚠️ EPCI :', err); });

                    var styleCommunes = { color: "#8B8DEF", weight: 1.2, opacity: 0.6, fillColor: "#686be7", fillOpacity: 0.02 };
                    fetch('communes-berry.geojson')
                        .then(function(r) { if (!r.ok) throw new Error('Communes non trouvées'); return r.json(); })
                        .then(function(data) { L.geoJSON(data, { style: styleCommunes, interactive: false }).addTo(mapEcoles); })
                        .catch(function(err) { console.warn('⚠️ Communes :', err); });

                    const styleParType = {
                        "college":      { couleur: "#e85d2c", rayon: 11, bordure: "#fff" },
                        "ecole":        { couleur: "#686be7", rayon: 8,  bordure: "#fff" },
                        "ecole-privee": { couleur: "#888888", rayon: 8,  bordure: "#fff" },
                        "rpi":          { couleur: "#8B8DEF", rayon: 8,  bordure: "#4A4DBD" },
                        "commune-rpi":  { couleur: "#ffffff", rayon: 5,  bordure: "#4A4DBD" }
                    };

                    const rpiGroupes = {};
                    etablissementsData.forEach(function(etab) {
                        if (etab.rpiId) {
                            if (!rpiGroupes[etab.rpiId]) rpiGroupes[etab.rpiId] = [];
                            rpiGroupes[etab.rpiId].push(etab);
                        }
                    });
                    communesRattachees.forEach(function(c) {
                        if (!rpiGroupes[c.rpiId]) rpiGroupes[c.rpiId] = [];
                        rpiGroupes[c.rpiId].push(c);
                    });

                    const markersByEtabId = {};
                    const rpiLines = {};

                    const markersByEtab = [];
                    const markersCommunes = [];
                    const allMarkers = [];

                    etablissementsData.forEach(function(etab, index) {
                        const etabId = 'etab-' + index;
                        etab._id = etabId;

                        const style = styleParType[etab.type] || styleParType["ecole"];
                        const marker = L.circleMarker([etab.lat, etab.lng], {
                            radius: style.rayon, fillColor: style.couleur, color: style.bordure,
                            weight: etab.type === "rpi" ? 3 : 2,
                            dashArray: etab.type === "rpi" ? "4, 3" : null,
                            opacity: 1, fillOpacity: 0.9
                        }).addTo(mapEcoles);

                        let badge = "";
                        if (etab.type === "college") badge = '<span class="ecole-badge college">Collège' + (etab.dispositifs ? ' • ' + etab.dispositifs : '') + '</span>';
                        else if (etab.type === "rpi") badge = '<span class="ecole-badge rpi">RPI — Regroupement Pédagogique Intercommunal</span>';
                        else if (etab.type === "ecole-privee") badge = '<span class="ecole-badge privee">Privée</span>';

                        const contenu = '<div class="ecole-tooltip">' + badge +
                            '<span class="ecole-commune">' + etab.commune + '</span>' +
                            '<span class="ecole-nom">' + etab.nom + '</span>' +
                            '<span class="ecole-detail">📍 ' + etab.adresse + '</span>' +
                            '<span class="ecole-detail">📞 ' + etab.telephone + '</span>' +
                            (etab.email ? '<span class="ecole-detail">✉️ ' + etab.email + '</span>' : '') +
                            (etab.rpiInfo ? '<span class="ecole-rpi-info">' + etab.rpiInfo + '</span>' : '') +
                            '</div>';

                        marker.bindTooltip(contenu, { direction: 'top', offset: [0, -10], className: 'ecole-tooltip-wrapper', opacity: 1 });
                        markersByEtab.push({ etab: etab, marker: marker });
                        markersByEtabId[etabId] = marker;
                        allMarkers.push(marker);
                    });

                    communesRattachees.forEach(function(c, index) {
                        const etabId = 'commune-' + index;
                        c._id = etabId;

                        const style = styleParType["commune-rpi"];
                        const marker = L.circleMarker([c.lat, c.lng], {
                            radius: style.rayon, fillColor: style.couleur, color: style.bordure,
                            weight: 2, dashArray: "2, 2", opacity: 1, fillOpacity: 1
                        }).addTo(mapEcoles);

                        const contenu = '<div class="ecole-tooltip">' +
                            '<span class="ecole-badge commune-rpi">Commune du RPI</span>' +
                            '<span class="ecole-commune">' + c.commune + '</span>' +
                            '<span class="ecole-nom">' + c.nom + '</span>' +
                            '<span class="ecole-rpi-info">' + c.info + '</span>' +
                            '</div>';

                        marker.bindTooltip(contenu, { direction: 'top', offset: [0, -10], className: 'ecole-tooltip-wrapper', opacity: 1 });
                        markersCommunes.push({ etab: c, marker: marker });
                        markersByEtabId[etabId] = marker;
                        allMarkers.push(marker);
                    });

                    Object.keys(rpiGroupes).forEach(function(rpiId) {
                        const entites = rpiGroupes[rpiId];
                        const ecolesCentrales = entites.filter(function(e) { return e.type === "ecole" || e.type === "rpi"; });
                        const communesDuRPI = entites.filter(function(e) { return !e.type; });

                        if (entites.length >= 2) {
                            const lignes = [];
                            if (ecolesCentrales.length > 0) {
                                const ecole = ecolesCentrales[0];
                                communesDuRPI.forEach(function(commune) {
                                    const ligne = L.polyline([[ecole.lat, ecole.lng], [commune.lat, commune.lng]],
                                        { color: "#4A4DBD", weight: 2, dashArray: "4, 6", opacity: 0.55 }).addTo(mapEcoles);
                                    lignes.push({
                                        ligne: ligne,
                                        etabId1: ecole._id,
                                        etabId2: commune._id
                                    });
                                });
                                if (ecolesCentrales.length > 1) {
                                    for (let i = 0; i < ecolesCentrales.length - 1; i++) {
                                        const ligne = L.polyline([
                                            [ecolesCentrales[i].lat, ecolesCentrales[i].lng],
                                            [ecolesCentrales[i + 1].lat, ecolesCentrales[i + 1].lng]
                                        ], { color: "#4A4DBD", weight: 2, dashArray: "4, 6", opacity: 0.55 }).addTo(mapEcoles);
                                        lignes.push({
                                            ligne: ligne,
                                            etabId1: ecolesCentrales[i]._id,
                                            etabId2: ecolesCentrales[i + 1]._id
                                        });
                                    }
                                }
                            }
                            rpiLines[rpiId] = lignes;
                        }
                    });

                    function redessinerLignesRPI() {
                        Object.keys(rpiLines).forEach(function(rpiId) {
                            rpiLines[rpiId].forEach(function(ligneInfo) {
                                const marker1 = markersByEtabId[ligneInfo.etabId1];
                                const marker2 = markersByEtabId[ligneInfo.etabId2];
                                if (marker1 && marker2) {
                                    const latLng1 = marker1.getLatLng();
                                    const latLng2 = marker2.getLatLng();
                                    ligneInfo.ligne.setLatLngs([latLng1, latLng2]);
                                }
                            });
                        });
                    }
                    window.__redessinerLignesRPI = redessinerLignesRPI;

                    (function geocodage() {
                        const API_URL = 'https://api-adresse.data.gouv.fr/search/';
                        const cache = new Map();
                        const DELAI = 300;
                        const SCORE_MIN = 0.5;

                        const file = markersByEtab.map(function(item) {
                            return { etab: item.etab, marker: item.marker, requete: item.etab.adresse };
                        }).concat(markersCommunes.filter(function(item) {
                            return item.etab.adresseRecherche != null;
                        }).map(function(item) {
                            return { etab: item.etab, marker: item.marker, requete: item.etab.adresseRecherche };
                        }));

                        function normaliser(texte) {
                            return texte.replace(/\s+/g, ' ').replace(/,\s*/g, ' ').trim();
                        }

                        function fetchAdresse(texte) {
                            const cpMatch = texte.match(/\b\d{5}\b/);
                            const postcode = cpMatch ? cpMatch[0] : '';
                            const url = API_URL + '?q=' + encodeURIComponent(normaliser(texte)) + '&limit=1' + (postcode ? '&postcode=' + postcode : '');

                            return new Promise(function(resolve) {
                                const controller = new AbortController();
                                const timeoutId = setTimeout(function() { controller.abort(); }, 5000);
                                fetch(url, { signal: controller.signal })
                                    .then(function(r) { clearTimeout(timeoutId); if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); })
                                    .then(function(data) {
                                        if (data.features && data.features.length > 0) {
                                            const f = data.features[0];
                                            resolve({ lat: f.geometry.coordinates[1], lng: f.geometry.coordinates[0], score: f.properties.score });
                                        } else { resolve(null); }
                                    })
                                    .catch(function() { clearTimeout(timeoutId); resolve(null); });
                            });
                        }

                        let index = 0;
                        function traiterSuivant() {
                            if (index >= file.length) {
                                redessinerLignesRPI();
                                setTimeout(function() {
                                    if (window.__epciLayer) {
                                        mapEcoles.invalidateSize();
                                        mapEcoles.fitBounds(window.__epciLayer.getBounds(), { padding: [20, 20] });
                                    }
                                }, 200);
                                return;
                            }
                            const item = file[index++];
                            const requete = item.requete;

                            if (cache.has(requete)) {
                                const coords = cache.get(requete);
                                if (coords && coords.score >= SCORE_MIN) {
                                    item.marker.setLatLng([coords.lat, coords.lng]);
                                    item.etab.lat = coords.lat;
                                    item.etab.lng = coords.lng;
                                    redessinerLignesRPI();
                                }
                                traiterSuivant();
                                return;
                            }

                            fetchAdresse(requete).then(function(coords) {
                                cache.set(requete, coords);
                                if (coords && coords.score >= SCORE_MIN) {
                                    item.marker.setLatLng([coords.lat, coords.lng]);
                                    item.etab.lat = coords.lat;
                                    item.etab.lng = coords.lng;
                                    redessinerLignesRPI();
                                }
                                setTimeout(traiterSuivant, DELAI);
                            });
                        }
                        setTimeout(traiterSuivant, 800);
                    })();

                } catch (err) {
                    console.error('Erreur Leaflet :', err);
                    mapEcolesEl.innerHTML = '<p style="padding:1rem; text-align:center; color:#777;">La carte n\'a pas pu être chargée.</p>';
                }
            }
        })();
    </script>
