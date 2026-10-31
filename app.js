/**
 * CARTAGENA STOPOVER EXPEDITION — CORE APPLICATION LOGIC
 * Master Controller & Executive Response Portal
 * Engineered to Senior Architectural Standards (20+ Years Exp.)
 */

// Application State & Curated Curiosities
const AppState = {
  destinations: [
    {
      id: "aeropuerto",
      num: "01",
      title: "Rafael Núñez International Airport (CTG)",
      subtitle: "Gateway to the Colombian Caribbean & Strategic Layover Hub",
      category: "Aviation & Meeting Point",
      tag: "Point of Entry",
      badgeColor: "text-slate-800 bg-slate-100 border-slate-200",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=85",
      imageCaption: "Coastal runway approach directly over the turquoise waters of Crespo Beach",
      description: "Rafael Núñez International Airport serves as the premier aerial gateway to northern Colombia. Positioned mere meters from the Caribbean shoreline in Crespo and barely a 10-minute private drive from the 17th-century UNESCO Walled City, it ranks among the most strategically positioned stopover terminals across the Americas.",
      highlights: [
        "Direct 10 to 12-minute transit to the historic Walled Center & Fortress.",
        "Designated VIP greeting area for streamlined 6 to 12-hour layovers.",
        "Secure climate-controlled luggage storage & locker facility.",
        "Direct flight corridors connecting North America, Europe, and Latin America."
      ],
      curiousFacts: [
        {
          title: "Honoring a Four-Time Statesman & Poet",
          text: "The airport honors Rafael Núñez, a seminal 19th-century intellectual, four-time President of Colombia, and composer of the Colombian National Anthem. His original wooden mansion remains meticulously preserved minutes from the airfield in El Cabrero."
        },
        {
          title: "Runway Kissing the Caribbean Waves",
          text: "Separated from the open sea by only a coastal avenue, incoming aircraft conduct a dramatic final approach directly over the surf, creating an optical impression of touching turquoise waters seconds prior to touchdown."
        },
        {
          title: "The Most Accessible Historical Center in the Americas",
          text: "Unlike major metropolitan airports situated one to two hours outside city centers, Cartagena allows transit travelers to disembark, clear customs, and sip single-origin Colombian coffee atop colonial ramparts within twenty minutes."
        }
      ]
    },
    {
      id: "castillo",
      num: "02",
      title: "San Felipe de Barajas Castle",
      subtitle: "The Impregnable Citadel of Spanish Colonial Military Engineering",
      category: "UNESCO World Heritage & Military Fortress",
      tag: "Colonial Marvel",
      badgeColor: "text-amber-900 bg-amber-50 border-amber-200",
      image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1400&q=85",
      imageCaption: "The stone fortress commanding 360-degree surveillance across the bay",
      description: "Erected in 1657 atop San Lázaro hill and expanded in 1762, the Castle of San Felipe de Barajas stands as the most monumental fortification constructed by the Spanish Crown anywhere in the New World. Engineered to endure combined naval and overland sieges, it was never breached following its modernization.",
      highlights: [
        "Subterranean acoustic tunnel labyrinth engineered for stealth warfare.",
        "Unrivaled 360-degree panoramic vantage point across Cartagena Bay.",
        "Authentic bronze and iron artillery batteries preserved on higher bastions.",
        "Cornerstone monument of Cartagena's UNESCO World Heritage designation."
      ],
      curiousFacts: [
        {
          title: "Acoustically Amplified Tunnel Networks",
          text: "The fortress features an elaborate subterranean labyrinth engineered with parabolic acoustics. Sentries positioned deep inside blind chambers could detect enemy footsteps, whispers, and spade strikes over 50 meters away in pitch darkness."
        },
        {
          title: "The Impossible Defense of Blas de Lezo (1741)",
          text: "During the Battle of Cartagena de Indias, British Admiral Vernon assaulted the citadel with 186 warships and 27,000 troops. Spanish Commander Blas de Lezo—blind in one eye, one-armed, and one-legged—routed the assault force with merely 3,600 defenders and 6 ships."
        },
        {
          title: "Triangular Incline Defense Architecture",
          text: "Instead of vertical castle walls vulnerable to kinetic pulverization, San Felipe was built with sloping, triangular limestone and coral ramparts designed to deflect inbound naval cannon fire harmlessly into the sky."
        }
      ]
    },
    {
      id: "aviario",
      num: "03",
      title: "National Aviary of Colombia",
      subtitle: "Continental Wildlife Sanctuary & Avian Conservation Center",
      category: "Ecological Reserve & Biodiversity",
      tag: "Wildlife Sanctuary",
      badgeColor: "text-emerald-900 bg-emerald-50 border-emerald-200",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1400&q=85",
      imageCaption: "Over 170 tropical species thriving in scientifically recreated microclimates",
      description: "Located on the Barú Peninsula across seven hectares of pristine ecological landscape, the National Aviary of Colombia is the second-largest aviary in the Americas. It faithfully recreates three critical biomes: humid tropical rainforest, coastal littoral, and desert, promoting preservation and environmental science.",
      highlights: [
        "1,700+ individual specimens representing 170 indigenous and migratory species.",
        "Twice-daily educational free-flight presentation with uncaged raptors.",
        "Reproduction and rehabilitation habitat for the endangered Andean Condor.",
        "Naturalized pink flamingo lagoon demonstrating communal courtship rituals."
      ],
      curiousFacts: [
        {
          title: "Colombia: The Undisputed Global Capital of Birds",
          text: "Colombia ranks first on Earth in avian diversity, hosting nearly 20% of all known bird species worldwide (over 1,950 cataloged taxa). The National Aviary was established as a living testament to this planetary ecological supremacy."
        },
        {
          title: "Breeding the Andean Condor at Sea Level",
          text: "Although the Andean Condor's native range is restricted to freezing mountain crags exceeding 3,500 meters, conservation biologists successfully created an adapted microclimate in Barú, producing the first chick born in coastal Colombia."
        },
        {
          title: "The Biological Chemistry of Flamingo Feathers",
          text: "Flamingos are born dull gray. Their luminous coral-pink hue is synthesized entirely from their diet: micro-crustaceans and blue-green algae rich in carotenoid pigments thriving in the Aviary's carefully filtered salt marshes."
        }
      ]
    },
    {
      id: "baru",
      num: "04",
      title: "Barú Peninsula & Rosario Reefs",
      subtitle: "Pristine Coral Sands, Turquoise Swells & Coastal Gastronomy",
      category: "Coastal Haven & Marine Sanctuary",
      tag: "Island Sanctuary",
      badgeColor: "text-cyan-900 bg-cyan-50 border-cyan-200",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
      imageCaption: "Playa Blanca's luminous white coral sands and tranquil Caribbean waters",
      description: "Renowned globally for flour-soft bleached coral sands and crystalline waters shifting between jade and sapphire, Barú represents the quintessential Caribbean sanctuary. The coastline features vibrant fringing reefs, coastal breeze cabanas, and authentic Afro-Caribbean culinary traditions.",
      highlights: [
        "Crystal-clear shallow waters ideal for ocean swimming, relaxation, and reef snorkeling.",
        "Traditional coastal banquet: whole fried red snapper, coconut titoté rice, and plantains.",
        "Exclusive seaside lounge access away from congested public sectors.",
        "Nocturnal bioluminescent phenomena in protected inland lagoons."
      ],
      curiousFacts: [
        {
          title: "An Artificial Island Carved by Hand",
          text: "Barú was not born an island. Historically connected to the South American continent, it became an island in the 17th century when thousands of colonial laborers dug the 118-kilometer Canal del Dique to link the Magdalena River with Cartagena Bay."
        },
        {
          title: "The Bioluminescent Portonaito Phenomenon",
          text: "On moonless nights, protected estuaries in Barú ignite with bioluminescent dinoflagellates. Agitating the warm seawater triggers enzymatic luciferean reactions, turning every movement into shimmering turquoise starlight."
        },
        {
          title: "The Slow Alchemy of 'Titoté' Coconut Rice",
          text: "Authentic coastal coconut rice contains zero artificial sugar or colorants. Freshly extracted coconut milk is reduced over open heat until the oils separate and the rich solids caramelize into microscopic hazel-golden curds called 'titoté'."
        }
      ]
    },
    {
      id: "manglares",
      num: "05",
      title: "La Boquilla Mangroves & Ciénaga de la Virgen",
      subtitle: "Ancestral Waterways & Afro-Caribbean Ecological Heritage",
      category: "Ecological Preserve & Cultural Heritage",
      tag: "Ecological Sanctuary",
      badgeColor: "text-teal-900 bg-teal-50 border-teal-200",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=85",
      imageCaption: "Silent passage through natural cathedral tunnels aboard native wooden canoes",
      description: "In the brackish estuary of Ciénaga de la Virgen, north of the city, lies an ancestral marine ecosystem protected by the Afro-descendant artisanal fishing village of La Boquilla. Red and black mangroves intertwine overhead to create serene cathedral corridors explored solely by wooden canoes.",
      highlights: [
        "Silent journey propelled by native fishermen using traditional wooden push poles.",
        "Voyage through iconic natural arched passages: 'Tunnel of Love' and 'Chánchalas'.",
        "Birding habitat with over 90 migratory species from across the Americas.",
        "Cultural immersion in pre-Columbian cast-net fishing techniques."
      ],
      curiousFacts: [
        {
          title: "The Living Storm Shield of Cartagena",
          text: "Intricate aerial roots of red mangroves serve as an ecological shock absorber, dissipating up to 70% of offshore wave and storm-surge energy, guarding Cartagena's low-lying coastline against hurricane damage."
        },
        {
          title: "Trees That Drink Saltwater and Sweat Pure Crystals",
          text: "Black and white mangroves thrive in hyper-saline waters via specialized root ultrafiltration and leaf glands that actively exude salt. Rubbing the underside of a leaf reveals pure edible salt crystals produced by the plant."
        },
        {
          title: "The Legend of the 'Tunnel of Love'",
          text: "Local boatmen gave romantic monikers to each watery tunnel. The most legendary is the 'Tunnel of Love,' where dense interlaced branches filter tropical sunlight into cool emerald shadows; local lore holds that silent vows made inside always come true."
        }
      ]
    }
  ],

  reservationsKey: "cartagena_stopover_reservations",
  adminPinKey: "cartagena_admin_pin",
  defaultPin: "2026",

  // Initial Demo Data
  initialDemoReservations: [
    {
      id: "CTG-EXP-9041",
      timestamp: "2026-10-30T14:35:00.000Z",
      status: "Confirmed",
      fullName: "Alexander Sterling",
      passportId: "US-88421095",
      country: "United States",
      email: "sterling.travels@globe.org",
      phone: "+1 415 890 2341",
      adults: 2,
      children: 1,
      infants: 0,
      arrivalDate: "2026-11-04",
      flightIn: "AV-0254 (Avianca)",
      arrivalTime: "09:30 AM",
      flightOut: "AA-1142 (American Airlines)",
      departureTime: "06:45 PM",
      layoverDuration: "8 to 12 hours",
      tours: [
        "Airport Pick-up (Meet & Greet at CTG Arrivals)",
        "San Felipe Castle Panoramic Drive-by",
        "National Aviary of Colombia (Guided Ecological Walk)",
        "Beach Break & Relaxation in Barú (Coastal Lunch)",
        "Direct Airport Return & Drop-off"
      ],
      tourLanguage: "English",
      luggageOption: "Yes, secure storage for 3 bags",
      luggageCount: 3,
      lunchChoice: "Traditional Caribbean Fried Fish & Coconut Rice",
      dietaryNotes: "No shellfish for the child",
      mobilityAssistance: "None",
      paymentMethod: "Credit / Debit Card (Secure Online Link)",
      termsAccepted: true,
      hasSignature: true
    },
    {
      id: "CTG-EXP-8812",
      timestamp: "2026-10-29T18:10:00.000Z",
      status: "Pending",
      fullName: "Elena Rostova",
      passportId: "GB-54190823",
      country: "United Kingdom",
      email: "elena.rostova@voyages.co.uk",
      phone: "+44 20 7946 0912",
      adults: 2,
      children: 0,
      infants: 0,
      arrivalDate: "2026-11-06",
      flightIn: "DL-0678 (Delta Air Lines)",
      arrivalTime: "11:15 AM",
      flightOut: "CM-0340 (Copa Airlines)",
      departureTime: "07:30 PM",
      layoverDuration: "6 to 8 hours",
      tours: [
        "Airport Pick-up (Meet & Greet at CTG Arrivals)",
        "San Felipe Castle Panoramic Drive-by",
        "Mangrove Ecosystem Scenic View & Boat Passage",
        "Direct Airport Return & Drop-off"
      ],
      tourLanguage: "Bilingual (English / Spanish)",
      luggageOption: "No, carry-on only in the private van",
      luggageCount: 0,
      lunchChoice: "Vegetarian / Vegan option",
      dietaryNotes: "Strict vegan, dairy free",
      mobilityAssistance: "None",
      paymentMethod: "Cash upon airport greeting (USD)",
      termsAccepted: true,
      hasSignature: true
    }
  ]
};

// ==========================================================================
// PRELOADER & SCROLL REVEAL CONTROLLER
// ==========================================================================

function initPreloader() {
  const preloader = document.getElementById("preloader");
  const bar = document.getElementById("preloaderBar");
  
  if (bar) {
    setTimeout(() => { bar.style.width = "45%"; }, 150);
    setTimeout(() => { bar.style.width = "85%"; }, 500);
    setTimeout(() => { bar.style.width = "100%"; }, 950);
  }

  const dismissPreloader = () => {
    if (!preloader || preloader.classList.contains("loaded")) return;
    setTimeout(() => {
      preloader.classList.add("loaded");
      initScrollAnimations();
    }, 1100);
  };

  if (document.readyState === "complete") {
    dismissPreloader();
  } else {
    window.addEventListener("load", dismissPreloader);
    setTimeout(dismissPreloader, 2200); // Fallback guarantee
  }
}

function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll, .reveal-fade-in, .reveal-slide-left, .reveal-slide-right");
  
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("is-revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: "0px 0px -60px 0px",
    threshold: 0.12
  });

  revealElements.forEach(el => observer.observe(el));
}

// Storage initializations
function initStorage() {
  if (!localStorage.getItem(AppState.reservationsKey)) {
    localStorage.setItem(AppState.reservationsKey, JSON.stringify(AppState.initialDemoReservations));
  }
  if (!localStorage.getItem(AppState.adminPinKey)) {
    localStorage.setItem(AppState.adminPinKey, AppState.defaultPin);
  }
}

function getReservations() {
  try {
    const raw = localStorage.getItem(AppState.reservationsKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Storage read error:", e);
    return [];
  }
}

function saveReservation(reservation) {
  const current = getReservations();
  current.unshift(reservation);
  localStorage.setItem(AppState.reservationsKey, JSON.stringify(current));
  return reservation;
}

function updateReservationStatus(id, newStatus) {
  const current = getReservations();
  const index = current.findIndex(r => r.id === id);
  if (index !== -1) {
    current[index].status = newStatus;
    localStorage.setItem(AppState.reservationsKey, JSON.stringify(current));
    renderAdminTable();
    updateAdminStats();
  }
}

function deleteReservation(id) {
  if (!confirm(`Are you certain you wish to delete reservation record ${id}?`)) {
    return;
  }
  const current = getReservations();
  const updated = current.filter(r => r.id !== id);
  localStorage.setItem(AppState.reservationsKey, JSON.stringify(updated));
  renderAdminTable();
  updateAdminStats();
}

// Render Destinations (Editorial Aesthetic)
function renderDestinations() {
  const container = document.getElementById("destinationsContainer");
  if (!container) return;

  container.innerHTML = AppState.destinations.map((dest, index) => {
    const isEven = index % 2 === 0;
    return `
      <article id="dest-${dest.id}" class="reveal-on-scroll editorial-card rounded-2xl overflow-hidden mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          <!-- Image Column -->
          <div class="lg:col-span-5 relative min-h-[360px] lg:min-h-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}">
            <img 
              src="${dest.image}" 
              alt="${dest.title}" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              onerror="this.src='https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-[#08131F]/85 via-[#08131F]/20 to-transparent"></div>
            
            <div class="absolute top-5 left-5">
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-mono-accent uppercase tracking-widest bg-white/95 text-slate-900 shadow-sm border border-slate-200">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C5A880]"></span>
                ${dest.tag}
              </span>
            </div>

            <div class="absolute bottom-5 left-5 right-5 text-white">
              <span class="text-[10px] font-mono-accent uppercase tracking-[0.25em] text-[#C5A880] block mb-1">${dest.category}</span>
              <p class="text-xs font-light text-slate-200 italic leading-snug">${dest.imageCaption}</p>
            </div>
          </div>

          <!-- Content & Curiosities Column -->
          <div class="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}">
            <div>
              <div class="flex items-center justify-between mb-3 border-b border-slate-100 pb-3">
                <span class="font-mono-accent text-xs font-semibold text-[#9F825B] tracking-widest uppercase">
                  Destination Index · ${dest.num} / 05
                </span>
                <span class="text-xs text-slate-400 font-mono-accent">
                  Stopover Certified Route
                </span>
              </div>

              <h3 class="text-3xl sm:text-4xl font-normal text-slate-900 font-editorial-serif mb-1 leading-tight tracking-tight">
                ${dest.title}
              </h3>
              <p class="font-calligraphy text-2xl sm:text-3xl text-[#9F825B] mb-5 leading-relaxed tracking-normal font-normal">
                ${dest.subtitle}
              </p>

              <p class="text-slate-700 text-base sm:text-lg leading-relaxed mb-8 font-chronicle">
                ${dest.description}
              </p>

              <!-- Inclusions -->
              <div class="mb-8">
                <h4 class="text-[11px] font-mono-accent font-bold uppercase tracking-widest text-slate-400 mb-3">
                  Key Itinerary Elements
                </h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  ${dest.highlights.map(item => `
                    <li class="flex items-start gap-2.5 text-sm text-slate-700 font-chronicle">
                      <span class="text-[#C5A880] mt-0.5 shrink-0 font-bold">—</span>
                      <span class="font-normal">${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Interactive Archival Monograph Viewer (Non-AI Editorial Format) -->
              <div class="pt-6 border-t border-slate-200/80">
                <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h4 class="text-xs font-mono-accent uppercase tracking-widest text-slate-900 font-bold flex items-center gap-2">
                    <span class="w-1.5 h-1.5 bg-[#C5A880] rotate-45"></span>
                    Historical Chronicles & Untold Lore
                  </h4>

                  <!-- Roman Numeral Chronicle Selectors -->
                  <div class="flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-slate-50/80">
                    <button type="button" onclick="selectFact('${dest.id}', 0)" id="fact-tab-${dest.id}-0" class="fact-tab-btn active px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all">
                      I
                    </button>
                    <button type="button" onclick="selectFact('${dest.id}', 1)" id="fact-tab-${dest.id}-1" class="fact-tab-btn px-2.5 py-1 rounded text-[10px] font-bold uppercase text-slate-500 hover:text-slate-900 transition-all">
                      II
                    </button>
                    <button type="button" onclick="selectFact('${dest.id}', 2)" id="fact-tab-${dest.id}-2" class="fact-tab-btn px-2.5 py-1 rounded text-[10px] font-bold uppercase text-slate-500 hover:text-slate-900 transition-all">
                      III
                    </button>
                  </div>
                </div>

                <!-- Single Editorial Monograph Panel -->
                <div class="archival-monograph p-6 rounded-xl relative transition-all duration-300">
                  <div id="fact-watermark-${dest.id}" class="fact-watermark absolute top-2 right-5">
                    I
                  </div>

                  <span id="fact-meta-${dest.id}" class="text-[10px] font-mono-accent uppercase tracking-[0.25em] text-[#9F825B] block mb-1">
                    Archival Dispatch · Entry 01 of 03
                  </span>

                  <h5 id="fact-title-${dest.id}" class="text-lg sm:text-xl font-bold text-slate-900 mb-2 font-editorial-serif tracking-normal pr-12 transition-opacity duration-200">
                    ${dest.curiousFacts[0].title}
                  </h5>

                  <p id="fact-text-${dest.id}" class="text-sm sm:text-base text-slate-700 leading-relaxed font-chronicle transition-opacity duration-200">
                    ${dest.curiousFacts[0].text}
                  </p>

                  <div class="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-[11px] font-mono-accent text-slate-400">
                    <span class="text-[10px] uppercase tracking-wider text-slate-400">Documented Oral & Military History</span>
                    <button type="button" onclick="nextFact('${dest.id}')" class="text-xs font-mono-accent uppercase tracking-wider text-[#08131F] font-bold hover:text-[#9F825B] flex items-center gap-1.5 transition-colors">
                      <span>Next Chronicle</span>
                      <i class="fa-solid fa-arrow-right text-[9px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <a href="#bookingSection" onclick="selectDestinationInForm('${dest.id}')" class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#08131F] hover:text-[#9F825B] transition-colors border-b border-[#08131F] pb-0.5">
                <span>Select for Stopover Itinerary</span>
                <i class="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
              <span class="text-[11px] font-mono-accent text-slate-400">
                Private Van Transfer Included
              </span>
            </div>

          </div>

        </div>
      </article>
    `;
  }).join('');
}

// Interactive Archival Monograph Fact Controller
const activeFactIndices = {};

function selectFact(destId, factIndex) {
  const dest = AppState.destinations.find(d => d.id === destId);
  if (!dest || !dest.curiousFacts || !dest.curiousFacts[factIndex]) return;

  activeFactIndices[destId] = factIndex;
  const fact = dest.curiousFacts[factIndex];
  const romanNumerals = ["I", "II", "III"];

  // Update tabs
  for (let i = 0; i < 3; i++) {
    const tabBtn = document.getElementById(`fact-tab-${destId}-${i}`);
    if (tabBtn) {
      if (i === factIndex) {
        tabBtn.className = "fact-tab-btn active px-2.5 py-1 rounded text-[10px] font-bold uppercase transition-all";
      } else {
        tabBtn.className = "fact-tab-btn px-2.5 py-1 rounded text-[10px] font-bold uppercase text-slate-500 hover:text-slate-900 transition-all";
      }
    }
  }

  // Update monograph elements
  const titleEl = document.getElementById(`fact-title-${destId}`);
  const textEl = document.getElementById(`fact-text-${destId}`);
  const metaEl = document.getElementById(`fact-meta-${destId}`);
  const watermarkEl = document.getElementById(`fact-watermark-${destId}`);

  if (titleEl && textEl) {
    titleEl.style.opacity = "0";
    textEl.style.opacity = "0";
    setTimeout(() => {
      titleEl.textContent = fact.title;
      textEl.textContent = fact.text;
      if (metaEl) metaEl.textContent = `Archival Dispatch · Entry 0${factIndex + 1} of 03`;
      if (watermarkEl) watermarkEl.textContent = romanNumerals[factIndex] || "I";
      titleEl.style.opacity = "1";
      textEl.style.opacity = "1";
    }, 150);
  }
}

function nextFact(destId) {
  const currentIdx = activeFactIndices[destId] !== undefined ? activeFactIndices[destId] : 0;
  const nextIdx = (currentIdx + 1) % 3;
  selectFact(destId, nextIdx);
}

// Canvas Signature
let signatureCanvas, signatureCtx;
let isDrawing = false;
let hasDrawnSignature = false;

function initSignatureCanvas() {
  signatureCanvas = document.getElementById("signatureCanvas");
  if (!signatureCanvas) return;
  signatureCtx = signatureCanvas.getContext("2d");

  const rect = signatureCanvas.getBoundingClientRect();
  signatureCanvas.width = rect.width * 2;
  signatureCanvas.height = 140 * 2;
  signatureCtx.scale(2, 2);
  signatureCtx.lineWidth = 2;
  signatureCtx.lineCap = "round";
  signatureCtx.lineJoin = "round";
  signatureCtx.strokeStyle = "#08131F";

  function getPos(e) {
    const r = signatureCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - r.left,
      y: clientY - r.top
    };
  }

  function startDraw(e) {
    isDrawing = true;
    hasDrawnSignature = true;
    const pos = getPos(e);
    signatureCtx.beginPath();
    signatureCtx.moveTo(pos.x, pos.y);
    if (e.cancelable && e.type !== "mousedown") e.preventDefault();
  }

  function draw(e) {
    if (!isDrawing) return;
    const pos = getPos(e);
    signatureCtx.lineTo(pos.x, pos.y);
    signatureCtx.stroke();
    if (e.cancelable && e.type !== "mousemove") e.preventDefault();
  }

  function stopDraw() {
    isDrawing = false;
  }

  signatureCanvas.addEventListener("mousedown", startDraw);
  signatureCanvas.addEventListener("mousemove", draw);
  window.addEventListener("mouseup", stopDraw);

  signatureCanvas.addEventListener("touchstart", startDraw, { passive: false });
  signatureCanvas.addEventListener("touchmove", draw, { passive: false });
  signatureCanvas.addEventListener("touchend", stopDraw);
}

function clearSignature() {
  if (!signatureCanvas || !signatureCtx) return;
  const rect = signatureCanvas.getBoundingClientRect();
  signatureCtx.clearRect(0, 0, rect.width * 2, 140 * 2);
  hasDrawnSignature = false;
}

// Form Step Controller
let currentStep = 1;
const totalSteps = 5;

function setStep(step) {
  if (step < 1 || step > totalSteps) return;

  if (step > 1 && currentStep === 1) {
    const fullName = document.getElementById("passengerName")?.value.trim();
    const email = document.getElementById("passengerEmail")?.value.trim();
    const phone = document.getElementById("passengerPhone")?.value.trim();
    if (!fullName || !email || !phone) {
      alert("Please provide the lead passenger contact information (Full Name, Email, and WhatsApp) to proceed.");
      return;
    }
  }

  if (step > 2 && currentStep === 2) {
    const arrivalDate = document.getElementById("arrivalDate")?.value;
    if (!arrivalDate) {
      alert("Please specify the scheduled flight arrival date in Cartagena.");
      return;
    }
  }

  currentStep = step;

  for (let i = 1; i <= totalSteps; i++) {
    const stepEl = document.getElementById(`formStep${i}`);
    const tabEl = document.getElementById(`tabStep${i}`);
    if (stepEl) {
      if (i === currentStep) {
        stepEl.classList.remove("hidden");
        stepEl.classList.add("block");
      } else {
        stepEl.classList.remove("block");
        stepEl.classList.add("hidden");
      }
    }
    if (tabEl) {
      if (i === currentStep) {
        tabEl.className = "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono-accent font-bold uppercase tracking-wider bg-[#08131F] text-white shadow-sm";
      } else if (i < currentStep) {
        tabEl.className = "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono-accent font-medium uppercase tracking-wider bg-emerald-50 text-emerald-900 border border-emerald-200 cursor-pointer";
      } else {
        tabEl.className = "flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono-accent font-medium uppercase tracking-wider bg-slate-100 text-slate-500 hover:bg-slate-200 cursor-pointer";
      }
    }
  }

  const formBox = document.getElementById("bookingSection");
  if (formBox) {
    formBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (currentStep === 5) {
    setTimeout(initSignatureCanvas, 150);
  }
}

function nextStep() { setStep(currentStep + 1); }
function prevStep() { setStep(currentStep - 1); }

function selectDestinationInForm(destId) {
  const formSection = document.getElementById("bookingSection");
  if (formSection) formSection.scrollIntoView({ behavior: "smooth" });
  setStep(3);
}

function handleLuggageToggle(needsLuggage) {
  const countContainer = document.getElementById("luggageCountContainer");
  if (!countContainer) return;
  countContainer.classList.toggle("hidden", !needsLuggage);
}

// Form Submission
function handleBookingSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById("passengerName")?.value.trim();
  const passportId = document.getElementById("passengerId")?.value.trim();
  const country = document.getElementById("passengerCountry")?.value.trim();
  const email = document.getElementById("passengerEmail")?.value.trim();
  const phone = document.getElementById("passengerPhone")?.value.trim();

  const adults = parseInt(document.getElementById("partyAdults")?.value || "1", 10);
  const children = parseInt(document.getElementById("partyChildren")?.value || "0", 10);
  const infants = parseInt(document.getElementById("partyInfants")?.value || "0", 10);

  const arrivalDate = document.getElementById("arrivalDate")?.value || "";
  const flightIn = document.getElementById("flightIn")?.value.trim() || "Unspecified";
  const arrivalTime = document.getElementById("arrivalTime")?.value || "";
  const flightOut = document.getElementById("flightOut")?.value.trim() || "Unspecified";
  const departureTime = document.getElementById("departureTime")?.value || "";
  const layoverDuration = document.querySelector('input[name="layoverDuration"]:checked')?.value || "6 to 8 hours";

  const selectedTours = Array.from(document.querySelectorAll('input[name="tourItinerary"]:checked')).map(cb => cb.value);
  const tourLanguage = document.querySelector('input[name="tourLanguage"]:checked')?.value || "English";

  const luggageOption = document.querySelector('input[name="luggageOption"]:checked')?.value || "No";
  const luggageCount = parseInt(document.getElementById("luggageCount")?.value || "0", 10);
  const lunchChoice = document.querySelector('input[name="lunchChoice"]:checked')?.value || "Traditional Caribbean Fried Fish & Coconut Rice";
  const dietaryNotes = document.getElementById("dietaryNotes")?.value.trim() || "None";
  const mobilityAssistance = document.querySelector('input[name="mobilityAssistance"]:checked')?.value || "None";

  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "Credit Card";
  const termsAccepted = document.getElementById("termsAccepted")?.checked;

  if (!fullName || !email || !phone) {
    alert("Please fill in lead passenger contact details.");
    setStep(1);
    return;
  }

  if (!termsAccepted) {
    alert("Please accept the Layover Flight Synchronization Terms to confirm.");
    return;
  }

  let signatureData = "";
  if (signatureCanvas && hasDrawnSignature) {
    signatureData = signatureCanvas.toDataURL("image/png");
  }

  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const bookingId = `CTG-EXP-${randomSuffix}`;

  const newReservation = {
    id: bookingId,
    timestamp: new Date().toISOString(),
    status: "Confirmed",
    fullName,
    passportId: passportId || "To be confirmed on arrival",
    country: country || "Unspecified",
    email,
    phone,
    adults,
    children,
    infants,
    arrivalDate,
    flightIn,
    arrivalTime,
    flightOut,
    departureTime,
    layoverDuration,
    tours: selectedTours.length > 0 ? selectedTours : ["Comprehensive Stopover Route"],
    tourLanguage,
    luggageOption: luggageOption.includes("Yes") ? `Yes (${luggageCount} bags)` : "Carry-on in vehicle",
    luggageCount,
    lunchChoice,
    dietaryNotes,
    mobilityAssistance,
    paymentMethod,
    termsAccepted,
    hasSignature: !!signatureData,
    signatureImage: signatureData
  };

  saveReservation(newReservation);
  showConfirmationModal(newReservation);

  document.getElementById("bookingForm").reset();
  clearSignature();
  setStep(1);
}

function showConfirmationModal(res) {
  const modal = document.getElementById("confirmationModal");
  if (!modal) return;

  document.getElementById("confirmBookingId").textContent = res.id;
  document.getElementById("confirmPassengerName").textContent = res.fullName;
  document.getElementById("confirmDate").textContent = res.arrivalDate;
  document.getElementById("confirmFlightIn").textContent = res.flightIn;
  document.getElementById("confirmParty").textContent = `${res.adults} Adult(s)` + (res.children ? `, ${res.children} Child(ren)` : '');
  document.getElementById("confirmLunch").textContent = res.lunchChoice;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  if (typeof confetti === "function") {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 }
    });
  }
}

function closeConfirmationModal() {
  const modal = document.getElementById("confirmationModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

// ==========================================================================
// PRIVATE OWNER / ADMINISTRATIVE RESPONSES PORTAL
// ==========================================================================

let isAdminLoggedIn = false;

function openAdminAuthModal() {
  if (isAdminLoggedIn) {
    openAdminDashboard();
    return;
  }
  const modal = document.getElementById("adminAuthModal");
  const pinInput = document.getElementById("adminPinInput");
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    if (pinInput) {
      pinInput.value = "";
      setTimeout(() => pinInput.focus(), 200);
    }
  }
}

function closeAdminAuthModal() {
  const modal = document.getElementById("adminAuthModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function verifyAdminPin() {
  const pinInput = document.getElementById("adminPinInput");
  const enteredPin = pinInput ? pinInput.value.trim() : "";
  const storedPin = localStorage.getItem(AppState.adminPinKey) || AppState.defaultPin;

  if (enteredPin === storedPin) {
    isAdminLoggedIn = true;
    closeAdminAuthModal();
    openAdminDashboard();
  } else {
    alert("Incorrect Security PIN. (Master PIN default: 2026)");
    if (pinInput) pinInput.value = "";
  }
}

function openAdminDashboard() {
  const panel = document.getElementById("adminDashboardModal");
  if (!panel) return;
  panel.classList.remove("hidden");
  panel.classList.add("flex");
  updateAdminStats();
  renderAdminTable();
}

function closeAdminDashboard() {
  const panel = document.getElementById("adminDashboardModal");
  if (panel) {
    panel.classList.add("hidden");
    panel.classList.remove("flex");
  }
}

function updateAdminStats() {
  const reservations = getReservations();
  const totalBookings = reservations.length;
  let totalPassengers = 0;
  let pendingCount = 0;
  let confirmedCount = 0;

  reservations.forEach(r => {
    totalPassengers += (r.adults || 0) + (r.children || 0) + (r.infants || 0);
    if (r.status === "Pending") pendingCount++;
    if (r.status === "Confirmed") confirmedCount++;
  });

  const totalEl = document.getElementById("adminStatTotal");
  const paxEl = document.getElementById("adminStatPax");
  const pendingEl = document.getElementById("adminStatPending");
  const confirmedEl = document.getElementById("adminStatConfirmed");

  if (totalEl) totalEl.textContent = totalBookings;
  if (paxEl) paxEl.textContent = totalPassengers;
  if (pendingEl) pendingEl.textContent = pendingCount;
  if (confirmedEl) confirmedEl.textContent = confirmedCount;
}

function renderAdminTable() {
  const tableBody = document.getElementById("adminTableBody");
  if (!tableBody) return;

  const reservations = getReservations();
  const searchTerm = (document.getElementById("adminSearchInput")?.value || "").toLowerCase();
  const statusFilter = document.getElementById("adminStatusFilter")?.value || "ALL";

  const filtered = reservations.filter(r => {
    const matchesSearch = 
      r.id.toLowerCase().includes(searchTerm) ||
      r.fullName.toLowerCase().includes(searchTerm) ||
      r.email.toLowerCase().includes(searchTerm) ||
      (r.flightIn && r.flightIn.toLowerCase().includes(searchTerm)) ||
      (r.phone && r.phone.toLowerCase().includes(searchTerm));

    const matchesStatus = statusFilter === "ALL" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-slate-400">
          <p class="font-mono-accent text-xs uppercase tracking-widest mb-1">No Matching Expeditions Found</p>
          <p class="text-xs text-slate-400">Reservations completed on the web portal synchronize here in real time.</p>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(r => {
    const statusClasses = {
      "Confirmed": "bg-emerald-50 text-emerald-900 border-emerald-300",
      "Pending": "bg-amber-50 text-amber-900 border-amber-300",
      "In Tour": "bg-sky-50 text-sky-900 border-sky-300",
      "Completed": "bg-slate-100 text-slate-700 border-slate-300",
      "Cancelled": "bg-rose-50 text-rose-900 border-rose-300"
    }[r.status] || "bg-slate-100 text-slate-800 border-slate-200";

    const cleanPhone = (r.phone || "").replace(/[^0-9]/g, "");

    return `
      <tr class="border-b border-slate-100 hover:bg-slate-50/70 transition-colors">
        <td class="py-3 px-4 font-mono-accent text-xs">
          <div class="font-bold text-[#08131F]">${r.id}</div>
          <div class="text-[10px] text-slate-400">${new Date(r.timestamp).toLocaleDateString()}</div>
        </td>

        <td class="py-3 px-4 text-xs">
          <div class="font-bold text-slate-900 font-serif">${r.fullName}</div>
          <div class="text-[11px] text-slate-500">${r.country} · ID: ${r.passportId}</div>
          <div class="flex items-center gap-2 mt-1">
            <a href="mailto:${r.email}" class="text-[10px] text-sky-700 hover:underline">
              ${r.email}
            </a>
            ${cleanPhone ? `
              <a href="https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(r.fullName)},%20we%20are%20contacting%20you%20from%20Cartagena%20Stopover%20Adventure%20regarding%20reservation%20${r.id}" target="_blank" class="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 text-[10px] font-bold hover:bg-emerald-200">
                WhatsApp
              </a>
            ` : ''}
          </div>
        </td>

        <td class="py-3 px-4 text-xs font-mono-accent">
          <div class="font-semibold text-slate-800">${r.flightIn}</div>
          <div class="text-[11px] text-slate-500">In: ${r.arrivalDate} (${r.arrivalTime || 'TBD'})</div>
          <div class="text-[11px] text-slate-500">Out: ${r.departureTime || 'TBD'}</div>
          <span class="inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] bg-slate-100 text-slate-700">
            ${r.layoverDuration}
          </span>
        </td>

        <td class="py-3 px-4 text-xs">
          <div class="font-bold text-slate-800">${r.adults} Ad + ${r.children} Ch</div>
          <div class="text-[11px] text-slate-600 truncate max-w-[150px]" title="${r.lunchChoice}">${r.lunchChoice}</div>
          <div class="text-[10px] font-mono-accent text-slate-400 mt-0.5">${r.luggageOption}</div>
        </td>

        <td class="py-3 px-4 text-xs font-mono-accent">
          <div class="font-medium text-slate-700">${r.tourLanguage}</div>
          <div class="text-[10px] text-slate-400">${r.paymentMethod}</div>
        </td>

        <td class="py-3 px-4">
          <select 
            onchange="updateReservationStatus('${r.id}', this.value)"
            class="text-[11px] font-mono-accent font-bold px-2 py-1 rounded-full border ${statusClasses} cursor-pointer focus:outline-none"
          >
            <option value="Confirmed" ${r.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
            <option value="Pending" ${r.status === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="In Tour" ${r.status === 'In Tour' ? 'selected' : ''}>In Tour</option>
            <option value="Completed" ${r.status === 'Completed' ? 'selected' : ''}>Completed</option>
            <option value="Cancelled" ${r.status === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
          </select>
        </td>

        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button 
              onclick="viewReservationDetail('${r.id}')"
              class="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 text-xs font-bold font-mono-accent"
              title="Inspect Dossier"
            >
              View
            </button>
            <button 
              onclick="deleteReservation('${r.id}')"
              class="p-1 rounded-lg text-rose-500 hover:bg-rose-50 text-xs"
              title="Delete Record"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

function viewReservationDetail(id) {
  const reservations = getReservations();
  const res = reservations.find(r => r.id === id);
  if (!res) return;

  const modal = document.getElementById("reservationDetailModal");
  const content = document.getElementById("detailModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span class="text-[10px] font-mono-accent uppercase tracking-widest text-[#9F825B]">Official Dossier</span>
          <h4 class="text-2xl font-normal text-slate-900 font-editorial-serif">${res.id}</h4>
          <p class="text-xs text-slate-400 font-mono-accent">Received: ${new Date(res.timestamp).toLocaleString()}</p>
        </div>
        <span class="px-3 py-1 rounded-full text-xs font-mono-accent font-bold uppercase tracking-wider bg-slate-100 text-slate-800 border border-slate-200">
          Status: ${res.status}
        </span>
      </div>

      <!-- Section 1 -->
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h5 class="text-[11px] font-mono-accent uppercase tracking-widest text-slate-500 mb-3 font-bold">
          1. Lead Passenger Information
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div><strong class="text-slate-500 block">Full Name:</strong> <span class="text-slate-900 font-bold">${res.fullName}</span></div>
          <div><strong class="text-slate-500 block">Passport / ID:</strong> <span class="text-slate-900 font-medium">${res.passportId}</span></div>
          <div><strong class="text-slate-500 block">Nationality / Country:</strong> <span class="text-slate-900 font-medium">${res.country}</span></div>
          <div><strong class="text-slate-500 block">Email Address:</strong> <a href="mailto:${res.email}" class="text-sky-700 underline">${res.email}</a></div>
          <div><strong class="text-slate-500 block">Mobile / WhatsApp:</strong> <span class="text-slate-900 font-medium">${res.phone}</span></div>
          <div><strong class="text-slate-500 block">Party Breakdown:</strong> <span class="text-slate-900 font-bold">${res.adults} Adults, ${res.children} Children, ${res.infants} Infants</span></div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h5 class="text-[11px] font-mono-accent uppercase tracking-widest text-slate-500 mb-3 font-bold">
          2. Flight & Layover Synchronization (CTG)
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono-accent">
          <div><strong class="text-slate-500 block">Arrival Date:</strong> <span class="text-slate-900 font-bold">${res.arrivalDate}</span></div>
          <div><strong class="text-slate-500 block">Inbound Flight:</strong> <span class="text-slate-900 font-semibold">${res.flightIn}</span></div>
          <div><strong class="text-slate-500 block">Touchdown:</strong> <span class="text-slate-900">${res.arrivalTime || 'TBD'}</span></div>
          <div><strong class="text-slate-500 block">Connecting Flight:</strong> <span class="text-slate-900 font-semibold">${res.flightOut}</span></div>
          <div><strong class="text-slate-500 block">Boarding Time:</strong> <span class="text-slate-900">${res.departureTime || 'TBD'}</span></div>
          <div><strong class="text-slate-500 block">Total Layover:</strong> <span class="text-slate-900 font-bold">${res.layoverDuration}</span></div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="bg-white p-4 rounded-xl border border-slate-200">
        <h5 class="text-[11px] font-mono-accent uppercase tracking-widest text-slate-500 mb-3 font-bold">
          3. Requested Route & Languages
        </h5>
        <ul class="space-y-1.5 mb-3">
          ${(res.tours || []).map(t => `
            <li class="flex items-center gap-2 text-xs text-slate-700">
              <span class="text-[#C5A880] font-bold">—</span>
              <span>${t}</span>
            </li>
          `).join('')}
        </ul>
        <div class="text-xs font-mono-accent text-slate-600">
          Guide Language: <span class="font-bold text-slate-900">${res.tourLanguage}</span>
        </div>
      </div>

      <!-- Section 4 -->
      <div class="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs">
        <h5 class="text-[11px] font-mono-accent uppercase tracking-widest text-slate-500 mb-3 font-bold">
          4. Amenities, Luggage & Coastal Lunch
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div><strong class="text-slate-500 block">Luggage Storage:</strong> <span class="text-slate-900">${res.luggageOption}</span></div>
          <div><strong class="text-slate-500 block">Lunch Menu Selected:</strong> <span class="text-slate-900 font-bold">${res.lunchChoice}</span></div>
          <div class="sm:col-span-2"><strong class="text-slate-500 block">Allergies / Special Requests:</strong> <span class="text-slate-900">${res.dietaryNotes || 'None'}</span></div>
          <div class="sm:col-span-2"><strong class="text-slate-500 block">Mobility Assistance:</strong> <span class="text-slate-900">${res.mobilityAssistance || 'None'}</span></div>
        </div>
      </div>

      <!-- Section 5 -->
      <div class="bg-amber-50/50 p-4 rounded-xl border border-amber-200 text-xs">
        <h5 class="text-[11px] font-mono-accent uppercase tracking-widest text-amber-900 mb-3 font-bold">
          5. Payment & Digital Signature
        </h5>
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div><strong class="text-slate-500 block">Payment Method:</strong> <span class="text-slate-900 font-bold">${res.paymentMethod}</span></div>
          <div><strong class="text-slate-500 block">Flight Sync Guarantee:</strong> <span class="text-emerald-800 font-bold">Accepted</span></div>
        </div>

        ${res.signatureImage ? `
          <div class="mt-4 pt-3 border-t border-amber-200">
            <strong class="text-[10px] font-mono-accent text-slate-500 block mb-1">Passenger Digital Signature:</strong>
            <div class="bg-white p-2 rounded-lg border border-slate-200 inline-block">
              <img src="${res.signatureImage}" alt="Signature" class="h-14 max-w-full object-contain" />
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeReservationDetailModal() {
  const modal = document.getElementById("reservationDetailModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}

function exportReservationsToCSV() {
  const reservations = getReservations();
  if (reservations.length === 0) {
    alert("No records available to export.");
    return;
  }

  const headers = [
    "Booking ID", "Timestamp", "Status", "Full Name", "Passport ID", "Country", "Email", "Phone",
    "Adults", "Children", "Infants", "Arrival Date", "Flight In", "Arrival Time", "Flight Out",
    "Departure Time", "Layover Duration", "Language", "Luggage", "Lunch Choice", "Dietary Notes", "Mobility", "Payment"
  ];

  const rows = reservations.map(r => [
    `"${r.id}"`, `"${r.timestamp}"`, `"${r.status}"`, `"${r.fullName.replace(/"/g, '""')}"`,
    `"${r.passportId}"`, `"${r.country}"`, `"${r.email}"`, `"${r.phone}"`,
    r.adults, r.children, r.infants, `"${r.arrivalDate}"`, `"${r.flightIn}"`, `"${r.arrivalTime}"`,
    `"${r.flightOut}"`, `"${r.departureTime}"`, `"${r.layoverDuration}"`, `"${r.tourLanguage}"`,
    `"${r.luggageOption}"`, `"${r.lunchChoice.replace(/"/g, '""')}"`, `"${(r.dietaryNotes || '').replace(/"/g, '""')}"`,
    `"${r.mobilityAssistance}"`, `"${r.paymentMethod}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `cartagena_stopover_expedition_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function promptChangeAdminPin() {
  const currentPin = localStorage.getItem(AppState.adminPinKey) || AppState.defaultPin;
  const oldPin = prompt("Enter current Master PIN:");
  if (oldPin === null) return;
  if (oldPin !== currentPin) {
    alert("Incorrect current PIN.");
    return;
  }
  const newPin = prompt("Enter new Security PIN (min 4 characters):");
  if (!newPin || newPin.trim().length < 4) {
    alert("Invalid PIN format.");
    return;
  }
  localStorage.setItem(AppState.adminPinKey, newPin.trim());
  alert("Master PIN successfully updated.");
}

function loadDemoData() {
  if (confirm("Restore demo layover expeditions?")) {
    localStorage.setItem(AppState.reservationsKey, JSON.stringify(AppState.initialDemoReservations));
    updateAdminStats();
    renderAdminTable();
  }
}

// ==========================================================================
// AMBIENT OCEAN BREEZE (Web Audio API Synthesizer)
// ==========================================================================

let audioCtx = null;
let isAudioPlaying = false;

function toggleCaribbeanAudio() {
  const icon = document.getElementById("audioIcon");
  const label = document.getElementById("audioLabel");

  if (!isAudioPlaying) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (audioCtx.state === "suspended") audioCtx.resume();

      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) output[i] = Math.random() * 2 - 1;

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(300, audioCtx.currentTime);

      const lfo = audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime);
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.setValueAtTime(200, audioCtx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      const waveGain = audioCtx.createGain();
      waveGain.gain.setValueAtTime(0.1, audioCtx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(waveGain);
      waveGain.connect(audioCtx.destination);

      whiteNoise.start();
      lfo.start();

      isAudioPlaying = true;
      if (icon) icon.className = "fa-solid fa-volume-high text-[#C5A880]";
      if (label) label.textContent = "Ocean Sound (Active)";
    } catch (e) {
      console.warn("Audio unavailable:", e);
    }
  } else {
    if (audioCtx && audioCtx.state === "running") audioCtx.suspend();
    isAudioPlaying = false;
    if (icon) icon.className = "fa-solid fa-volume-xmark text-slate-400";
    if (label) label.textContent = "Ocean Ambience";
  }
}

// Global Keyboard Shortcut (Ctrl + Alt + A)
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    openAdminAuthModal();
  }
});

// App Startup
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  initPreloader();
  renderDestinations();
  initSignatureCanvas();

  const todayStr = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("arrivalDate");
  if (dateInput) {
    dateInput.min = todayStr;
    dateInput.value = todayStr;
  }
});
