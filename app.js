/**
 * CARTAGENA MÁGICA & STOPOVER ADVENTURE
 * Master Interactive Logic & Admin System
 * Desarrollado con estándares profesionales de UX/UI (+20 años exp.)
 */

// Estado global de la aplicación
const AppState = {
  destinations: [
    {
      id: "aeropuerto",
      title: "Aeropuerto Internacional Rafael Núñez (CTG)",
      subtitle: "La Puerta Dorada de Entrada al Caribe Colombiano",
      category: "Infraestructura & Punto de Encuentro",
      tag: "Punto de Partida",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Aterrizaje escénico sobre las aguas del Mar Caribe",
      description: "El Aeropuerto Internacional Rafael Núñez es la principal puerta aérea de la región Caribe. Su ubicación privilegiada, a escasos metros de la playa en el barrio Crespo y a solo 10 minutos de la histórica Ciudad Amurallada, lo convierte en una de las terminales aéreas más fascinantes y estratégicas de toda Sudamérica.",
      highlights: [
        "A solo 10-12 minutos de la Ciudad Amurallada y Castillo San Felipe.",
        "Punto de recepción VIP para escalas cortas (Stopover de 6 a 12 horas).",
        "Servicio de custodia segura de equipaje y lockers para viajeros en tránsito.",
        "Operaciones directas internacionales con EE.UU., Europa, Centro y Sudamérica."
      ],
      curiousFacts: [
        {
          title: "Honor a un ilustre cuatro veces presidente",
          text: "El aeropuerto lleva el nombre del estadista, pensador y cuatro veces presidente de Colombia, Rafael Núñez, quien además fue el autor de la letra del Himno Nacional. Su residencia de madera original todavía se conserva intacta a minutos del aeropuerto en El Cabrero."
        },
        {
          title: "Aterrizaje sobre el mar caribeño",
          text: "La cabecera de la pista está separada del Mar Caribe por solo una avenida costera. Al aterrizar, los pasajeros experimentan la ilusión óptica de tocar el agua turquesa antes de que las ruedas toquen el asfalto."
        },
        {
          title: "La escala turística más rápida de América",
          text: "A diferencia de las grandes capitales donde los aeropuertos quedan a 1 o 2 horas del centro histórico, en Cartagena puedes salir del avión, subirte a un transporte privado y estar tomándote un café frente a una muralla del siglo XVII en menos de 15 minutos."
        }
      ]
    },
    {
      id: "castillo",
      title: "Castillo de San Felipe de Barajas",
      subtitle: "El Guardián Inexpugnable de Piedra y Coral",
      category: "Monumento Histórico & Patrimonio UNESCO",
      tag: "Maravilla Militar",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      image: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "La colosal fortaleza que defendió al Nuevo Mundo",
      description: "Construido sobre la colina de San Lázaro en 1657 y expandido en 1762, el Castillo de San Felipe de Barajas es la obra militar de ingeniería española más monumental erigida en todo el continente americano. Diseñado para resistir asedios por tierra y mar, jamás fue conquistado tras su modernización.",
      highlights: [
        "Laberinto de túneles subterráneos diseñados con acústica militar.",
        "Ubicación panorámica de 360 grados sobre toda la bahía de Cartagena.",
        "Baterías de cañones originales que protegieron los tesoros de ultramar.",
        "Monumento insignia declarado Patrimonio de la Humanidad por la UNESCO."
      ],
      curiousFacts: [
        {
          title: "Túneles con acústica de alta sensibilidad",
          text: "El intricado laberinto subterráneo fue concebido acústicamente para amplificar cualquier ruido. Un soldado situado en una cámara oculta podía escuchar los pasos y susurros de los invasores enemigos a más de 50 metros de distancia."
        },
        {
          title: "La legendaria hazaña de Blas de Lezo (1741)",
          text: "En 1741, el almirante inglés Edward Vernon atacó Cartagena con una flota colosal de 186 buques y más de 27.000 hombres (más grande que la Invencible española). El comandante Blas de Lezo, tuerto, manco y cojo, los derrotó en este castillo con apenas 3.600 hombres y 6 navíos en uno de los episodios más heroicos de la historia naval."
        },
        {
          title: "Paredes inclinadas antibalas de cañón",
          text: "A diferencia de los castillos medievales con muros rectos, San Felipe fue construido con rampas y muros inclinados de forma triangular. Esto hacía que los proyectiles de los cañones británicos rebotaran hacia el cielo sin fracturar la muralla de cal y roca coralina."
        }
      ]
    },
    {
      id: "aviario",
      title: "Aviario Nacional de Colombia",
      subtitle: "El Segundo Aviario Más Grande de América",
      category: "Santuario de Vida Silvestre & Conservación",
      tag: "Biodiversidad Pura",
      badgeColor: "bg-emerald-100 text-emerald-900 border-emerald-300",
      image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Tucanes, flamencos y más de 170 especies en libertad",
      description: "Situado en el kilómetro 14.5 de la península de Barú, el Aviario Nacional de Colombia es una joya ecológica de 7 hectáreas dedicadas a la investigación, preservación y educación ambiental. Recrea con precisión científica tres ecosistemas: selva húmeda tropical, zona costera y desierto.",
      highlights: [
        "Más de 1.700 ejemplares de aves de 170 especies nativas y exóticas.",
        "Show interactivo de vuelo libre sin jaulas dos veces al día.",
        "Hogar y centro de reproducción del majestuoso Cóndor de los Andes.",
        "Laguna rosada habitada por decenas de flamencos del Caribe en cortejo."
      ],
      curiousFacts: [
        {
          title: "Colombia: El país número 1 del planeta en aves",
          text: "Colombia alberga casi el 20% de todas las especies de aves del mundo entero (más de 1.950 especies registradas). El Aviario Nacional fue creado precisamente como un tributo a este título de campeones mundiales de la ornitología."
        },
        {
          title: "El milagro del Cóndor de los Andes en el Caribe",
          text: "Aunque el majestuoso Cóndor habita en las cumbres heladas de la cordillera andina a más de 3.000 metros, el Aviario logró acondicionar un hábitat especial con microclima donde nació y creció con éxito el primer pichón de cóndor en la costa caribeña en un hito científico."
        },
        {
          title: "El secreto del color de los flamencos",
          text: "Los flamencos del aviario no nacen rosados sino grisáceos. Su intenso plumaje coralino y magenta se debe a una dieta natural rica en betacarotenos presentes en pequeños crustáceos y algas microscópicas de sus humedales protegidos."
        }
      ]
    },
    {
      id: "baru",
      title: "Playas de Barú e Islas del Rosario",
      subtitle: "Aguas Turquesas, Arenas de Coral y Sabor Auténtico",
      category: "Paraíso Tropical & Descanso Costero",
      tag: "Sol y Playa",
      badgeColor: "bg-cyan-100 text-cyan-900 border-cyan-300",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Playa Blanca y bahías de aguas transparentes y tranquilas",
      description: "Famosa mundialmente por su arena blanca reluciente y aguas cálidas de matices aguamarina y esmeralda, Barú es el destino predilecto para desconectarse bajo palmeras tropicales. Sus costas ofrecen arrecifes de coral vivos para snorkel, deportes náuticos y la gastronomía más representativa del Caribe.",
      highlights: [
        "Aguas cristalinas ideales para baño, descanso y snorkel en arrecifes.",
        "Almuerzo típico caribeño: pargo rojo o mojarra frita, arroz de coco titoté y patacones.",
        "Paseos en lancha hacia Cholón, Playa Tranquila y las Islas del Rosario.",
        "Fenómeno nocturno de bioluminiscencia en la ensenada de Portonaito."
      ],
      curiousFacts: [
        {
          title: "No es una isla real, sino una península dividida",
          text: "Geográficamente, Barú era una península unida al continente. Se convirtió en una 'isla artificial' en el siglo XVII cuando los españoles excavaron a mano el Canal del Dique para conectar el río Magdalena con Cartagena. Hoy en día cuenta con un moderno puente vehicular."
        },
        {
          title: "El brillo mágico del agua en la noche",
          text: "En las noches sin luna, en bahías protegidas de Barú como Portonaito, el agua se enciende con destellos azules de luz neón al agitarla. Esto ocurre gracias a millones de microorganismos dinoflagelados que generan bioluminiscencia natural."
        },
        {
          title: "El origen del arroz de coco 'titoté'",
          text: "El acompañamiento tradicional de las playas de Barú es el arroz con coco oscuro. No se prepara con azúcar quemada ni colorantes: se obtiene hirviendo la primera leche de coco virgen hasta que el aceite se separa y los sólidos de coco se caramelizan lentamente hasta formar el dorado 'titoté'."
        }
      ]
    },
    {
      id: "manglares",
      title: "Los Manglares y Ciénaga de La Boquilla",
      subtitle: "Túneles de la Naturaleza y Herencia Afrocaribeña",
      category: "Ecoturismo Ancestral & Santuario Biológico",
      tag: "Ecoturismo Sagrado",
      badgeColor: "bg-teal-100 text-teal-900 border-teal-300",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      imageCaption: "Navegación silenciosa en canoas de madera por túneles verdes",
      description: "En la Ciénaga de la Virgen, al norte de la ciudad, se despliega un laberinto acuático ancestral custodiado por la comunidad pesquera afrodescendiente de La Boquilla. Los manglares forman bóvedas naturales y túneles verdes donde el agua tranquila refleja el cielo como un espejo.",
      highlights: [
        "Travesía en canoas tradicionales de madera impulsadas por palancas de pescadores.",
        "Paso por túneles naturales: 'Túnel del Amor', 'Túnel de la Felicidad' y 'Los Chánchalas'.",
        "Avistamiento de más de 90 especies de aves playeras, garzas y martines pescadores.",
        "Aprendizaje tradicional sobre técnicas ancestrales de pesca artesanal con atarraya."
      ],
      curiousFacts: [
        {
          title: "El escudo biológico que salvó a Cartagena",
          text: "Las intrincadas raíces de los manglares rojos y negros actúan como un rompeolas natural gigantesco: amortiguan hasta el 70% de la energía del oleaje de huracanes y tormentas tropicales, protegiendo a Cartagena de inundaciones catastróficas."
        },
        {
          title: "Plantas que 'beben' agua de mar y transpiran sal",
          text: "El mangle negro y el mangle blanco poseen glándulas especiales en sus hojas que filtran y expulsan la sal marina. Si frotas el envés de una hoja de mangle, podrás ver y saborear auténticos granos cristalizados de sal pura producidos por el árbol."
        },
        {
          title: "Túneles bautizados con historias románticas",
          text: "Los pescadores nativos bautizaron los pasadizos verdes con nombres pintorescos. El más famoso es el 'Túnel del Amor': una bóveda donde las ramas de los manglares de ambos lados se entrelazan creando una penumbra fresca donde la tradición local dice que un deseo de amor pedido en la canoa siempre se cumple."
        }
      ]
    }
  ],

  // Almacenamiento local de reservas
  reservationsKey: "cartagena_stopover_reservations",
  adminPinKey: "cartagena_admin_pin",
  defaultPin: "2026",

  // Datos demo iniciales para que el usuario pueda ver el panel funcionando inmediatamente
  initialDemoReservations: [
    {
      id: "CTG-2026-9041",
      timestamp: "2026-10-30T14:35:00.000Z",
      status: "Confirmado",
      fullName: "Carlos Eduardo Mendoza",
      passportId: "P-88421095",
      country: "México",
      email: "carlos.mendoza@viajes.mx",
      phone: "+52 55 4912 3094",
      adults: 2,
      children: 1,
      infants: 0,
      arrivalDate: "2026-11-04",
      flightIn: "AV-0254 (Avianca)",
      arrivalTime: "09:30 AM",
      flightOut: "AA-1142 (American Airlines)",
      departureTime: "06:45 PM",
      layoverDuration: "8 a 12 horas",
      tours: [
        "Recogida en Aeropuerto CTG",
        "Castillo de San Felipe (Panorámica)",
        "Aviario Nacional de Colombia",
        "Playa Barú & Almuerzo",
        "Retorno puntual a aeropuerto"
      ],
      tourLanguage: "Bilingüe (Español / Inglés)",
      luggageOption: "Sí, necesito custodia para 3 maletas",
      luggageCount: 3,
      lunchChoice: "Pescado Frito Caribeño Tradicional con Arroz con Coco",
      dietaryNotes: "Sin mariscos con concha para el niño",
      mobilityAssistance: "Ninguna",
      paymentMethod: "Tarjeta de Crédito / Débito (Enlace Seguro)",
      termsAccepted: true,
      hasSignature: true
    },
    {
      id: "CTG-2026-8812",
      timestamp: "2026-10-29T18:10:00.000Z",
      status: "Pendiente",
      fullName: "Sarah Elizabeth Jenkins",
      passportId: "US-54190823",
      country: "Estados Unidos",
      email: "sarah.jenkins@traveler.com",
      phone: "+1 415 890 2341",
      adults: 2,
      children: 0,
      infants: 0,
      arrivalDate: "2026-11-06",
      flightIn: "DL-0678 (Delta)",
      arrivalTime: "11:15 AM",
      flightOut: "CM-0340 (Copa Airlines)",
      departureTime: "07:30 PM",
      layoverDuration: "6 a 8 horas",
      tours: [
        "Recogida en Aeropuerto CTG",
        "Castillo de San Felipe (Panorámica)",
        "Manglares de La Boquilla en canoa",
        "Retorno puntual a aeropuerto"
      ],
      tourLanguage: "Inglés",
      luggageOption: "No, solo llevamos equipaje de mano en la van",
      luggageCount: 0,
      lunchChoice: "Opción Vegetariana / Vegana",
      dietaryNotes: "Vegetariana estricta, sin lácteos",
      mobilityAssistance: "Ninguna",
      paymentMethod: "Efectivo al recibir en el aeropuerto (USD)",
      termsAccepted: true,
      hasSignature: true
    }
  ]
};

// Inicialización de la base de datos local
function initStorage() {
  if (!localStorage.getItem(AppState.reservationsKey)) {
    localStorage.setItem(AppState.reservationsKey, JSON.stringify(AppState.initialDemoReservations));
  }
  if (!localStorage.getItem(AppState.adminPinKey)) {
    localStorage.setItem(AppState.adminPinKey, AppState.defaultPin);
  }
}

// Obtener reservas
function getReservations() {
  try {
    const raw = localStorage.getItem(AppState.reservationsKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error al leer reservas:", e);
    return [];
  }
}

// Guardar reserva nueva
function saveReservation(reservation) {
  const current = getReservations();
  current.unshift(reservation);
  localStorage.setItem(AppState.reservationsKey, JSON.stringify(current));
  return reservation;
}

// Actualizar estado de reserva
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

// Eliminar reserva
function deleteReservation(id) {
  if (!confirm(`¿Estás seguro de eliminar la reserva con código ${id}? Esta acción no se puede deshacer.`)) {
    return;
  }
  const current = getReservations();
  const updated = current.filter(r => r.id !== id);
  localStorage.setItem(AppState.reservationsKey, JSON.stringify(updated));
  renderAdminTable();
  updateAdminStats();
}

// Renderizar las 5 secciones de destinos con datos curiosos enriquecidos
function renderDestinations() {
  const container = document.getElementById("destinationsContainer");
  if (!container) return;

  container.innerHTML = AppState.destinations.map((dest, index) => {
    const isEven = index % 2 === 0;
    return `
      <article id="dest-${dest.id}" class="reveal-item bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 transition-all duration-500 hover:shadow-2xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          <!-- Columna Imagen -->
          <div class="lg:col-span-5 relative min-h-[340px] lg:min-h-full overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}">
            <img 
              src="${dest.image}" 
              alt="${dest.title}" 
              loading="lazy"
              class="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onerror="this.src='https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=1200&q=80'"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/20"></div>
            
            <div class="absolute top-4 left-4">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-white/95 text-sky-900 backdrop-blur shadow-sm">
                <i class="fa-solid fa-compass text-amber-500"></i> ${dest.tag}
              </span>
            </div>

            <div class="absolute bottom-4 left-4 right-4 text-white">
              <p class="text-xs text-sky-200 uppercase tracking-widest font-semibold">${dest.category}</p>
              <p class="text-sm italic text-white/90 drop-shadow">${dest.imageCaption}</p>
            </div>
          </div>

          <!-- Columna Contenido & Datos Curiosos -->
          <div class="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? 'lg:order-2' : 'lg:order-1'}">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md ${dest.badgeColor} border">
                  Destino Clave #${index + 1}
                </span>
                <span class="text-xs text-slate-400 font-medium"><i class="fa-solid fa-clock"></i> Visita imprescindible</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-1">
                ${dest.title}
              </h3>
              <p class="text-sky-700 font-medium text-sm sm:text-base mb-4">
                ${dest.subtitle}
              </p>

              <p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                ${dest.description}
              </p>

              <!-- Aspectos Destacados -->
              <div class="mb-6">
                <h4 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-star text-amber-500"></i> Experiencias incluidas en este punto
                </h4>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  ${dest.highlights.map(item => `
                    <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <i class="fa-solid fa-circle-check text-emerald-500 mt-1 shrink-0"></i>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>

              <!-- Bloque Especial: Datos Curiosos -->
              <div class="mt-4 pt-4 border-t border-slate-100">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <span class="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs">
                      <i class="fa-solid fa-lightbulb"></i>
                    </span>
                    <span>¿Sabías qué? — Datos Curiosos & Secretos</span>
                  </h4>
                  <span class="text-xs font-medium text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    3 Secretos
                  </span>
                </div>

                <div class="space-y-2.5">
                  ${dest.curiousFacts.map((fact, fIndex) => `
                    <div class="fact-box p-3.5 rounded-xl border-l-4 border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 transition-colors">
                      <p class="text-xs font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                        <i class="fa-solid fa-quote-left text-emerald-600 text-[10px]"></i> ${fact.title}
                      </p>
                      <p class="text-xs text-slate-600 leading-relaxed pl-3.5">
                        ${fact.text}
                      </p>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <div class="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <a href="#bookingSection" onclick="selectDestinationInForm('${dest.id}')" class="inline-flex items-center gap-2 text-sm font-bold text-sky-700 hover:text-sky-900 transition-colors">
                <span>Incluir en mi Stopover Tour</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
              <span class="text-xs text-slate-400">
                <i class="fa-solid fa-shield-halved text-emerald-600"></i> Asistencia y van privada climatizada
              </span>
            </div>

          </div>

        </div>
      </article>
    `;
  }).join('');
}

// Configuración del Canvas de Firma Digital
let signatureCanvas, signatureCtx;
let isDrawing = false;
let hasDrawnSignature = false;

function initSignatureCanvas() {
  signatureCanvas = document.getElementById("signatureCanvas");
  if (!signatureCanvas) return;
  signatureCtx = signatureCanvas.getContext("2d");

  // Ajustar resolución de retina/pantallas táctiles
  const rect = signatureCanvas.getBoundingClientRect();
  signatureCanvas.width = rect.width * 2;
  signatureCanvas.height = 140 * 2;
  signatureCtx.scale(2, 2);
  signatureCtx.lineWidth = 2.5;
  signatureCtx.lineCap = "round";
  signatureCtx.lineJoin = "round";
  signatureCtx.strokeStyle = "#0a2540";

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

// Control del Formulario Paso a Paso
let currentStep = 1;
const totalSteps = 5;

function setStep(step) {
  if (step < 1 || step > totalSteps) return;

  // Validación básica del paso 1 antes de avanzar
  if (step > 1 && currentStep === 1) {
    const fullName = document.getElementById("passengerName")?.value.trim();
    const email = document.getElementById("passengerEmail")?.value.trim();
    const phone = document.getElementById("passengerPhone")?.value.trim();
    if (!fullName || !email || !phone) {
      alert("Por favor completa los campos principales de contacto (Nombre, Correo y WhatsApp) antes de continuar.");
      return;
    }
  }

  // Validación básica del paso 2
  if (step > 2 && currentStep === 2) {
    const arrivalDate = document.getElementById("arrivalDate")?.value;
    if (!arrivalDate) {
      alert("Por favor indica la fecha de llegada de tu vuelo a Cartagena.");
      return;
    }
  }

  currentStep = step;

  // Ocultar todos los pasos
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
        tabEl.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-sky-600 text-white shadow-md transition-all";
      } else if (i < currentStep) {
        tabEl.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-emerald-100 text-emerald-800 transition-all cursor-pointer";
      } else {
        tabEl.className = "flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium bg-slate-100 text-slate-500 hover:bg-slate-200 transition-all cursor-pointer";
      }
    }
  }

  // Scroll suave al inicio del formulario
  const formBox = document.getElementById("bookingSection");
  if (formBox) {
    formBox.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // Redimensionar canvas si entramos al paso 5
  if (currentStep === 5) {
    setTimeout(initSignatureCanvas, 150);
  }
}

function nextStep() {
  setStep(currentStep + 1);
}

function prevStep() {
  setStep(currentStep - 1);
}

// Preseleccionar destino desde las cards
function selectDestinationInForm(destId) {
  const formSection = document.getElementById("bookingSection");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
  setStep(3);
}

// Manejador del toggle de equipaje
function handleLuggageToggle(needsLuggage) {
  const countContainer = document.getElementById("luggageCountContainer");
  if (!countContainer) return;
  if (needsLuggage) {
    countContainer.classList.remove("hidden");
  } else {
    countContainer.classList.add("hidden");
  }
}

// Envío del Formulario
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
  const flightIn = document.getElementById("flightIn")?.value.trim() || "No especificado";
  const arrivalTime = document.getElementById("arrivalTime")?.value || "";
  const flightOut = document.getElementById("flightOut")?.value.trim() || "No especificado";
  const departureTime = document.getElementById("departureTime")?.value || "";
  const layoverDuration = document.querySelector('input[name="layoverDuration"]:checked')?.value || "6 a 8 horas";

  // Tours seleccionados
  const selectedTours = Array.from(document.querySelectorAll('input[name="tourItinerary"]:checked')).map(cb => cb.value);
  const tourLanguage = document.querySelector('input[name="tourLanguage"]:checked')?.value || "Español";

  // Servicios
  const luggageOption = document.querySelector('input[name="luggageOption"]:checked')?.value || "No";
  const luggageCount = parseInt(document.getElementById("luggageCount")?.value || "0", 10);
  const lunchChoice = document.querySelector('input[name="lunchChoice"]:checked')?.value || "Pescado Frito Caribeño Tradicional con Arroz con Coco";
  const dietaryNotes = document.getElementById("dietaryNotes")?.value.trim() || "Ninguna";
  const mobilityAssistance = document.querySelector('input[name="mobilityAssistance"]:checked')?.value || "Ninguna";

  // Pago
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "Tarjeta";
  const termsAccepted = document.getElementById("termsAccepted")?.checked;

  if (!fullName || !email || !phone) {
    alert("Por favor completa los campos principales de contacto.");
    setStep(1);
    return;
  }

  if (!termsAccepted) {
    alert("Debes aceptar los Términos y Condiciones de sincronización de escala para continuar.");
    return;
  }

  // Guardar firma como imagen DataURL
  let signatureData = "";
  if (signatureCanvas && hasDrawnSignature) {
    signatureData = signatureCanvas.toDataURL("image/png");
  }

  // Generar ID único
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const bookingId = `CTG-2026-${randomSuffix}`;

  const newReservation = {
    id: bookingId,
    timestamp: new Date().toISOString(),
    status: "Confirmado",
    fullName,
    passportId: passportId || "Pendiente en van",
    country: country || "No indicado",
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
    tours: selectedTours.length > 0 ? selectedTours : ["Recorrido Stopover Completo Cartagena"],
    tourLanguage,
    luggageOption: luggageOption.includes("Sí") ? `Sí (${luggageCount} maletas)` : "Solo equipaje de mano",
    luggageCount,
    lunchChoice,
    dietaryNotes,
    mobilityAssistance,
    paymentMethod,
    termsAccepted,
    hasSignature: !!signatureData,
    signatureImage: signatureData
  };

  // Guardar en LocalStorage
  saveReservation(newReservation);

  // Mostrar modal de confirmación con confeti
  showConfirmationModal(newReservation);

  // Resetear formulario
  document.getElementById("bookingForm").reset();
  clearSignature();
  setStep(1);
}

// Modal de Confirmación
function showConfirmationModal(res) {
  const modal = document.getElementById("confirmationModal");
  if (!modal) return;

  document.getElementById("confirmBookingId").textContent = res.id;
  document.getElementById("confirmPassengerName").textContent = res.fullName;
  document.getElementById("confirmDate").textContent = res.arrivalDate;
  document.getElementById("confirmFlightIn").textContent = res.flightIn;
  document.getElementById("confirmParty").textContent = `${res.adults} Adulto(s)` + (res.children ? `, ${res.children} Niño(s)` : '');
  document.getElementById("confirmLunch").textContent = res.lunchChoice;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  // Lanzar confeti si la librería está disponible
  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
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
// PANEL EXCLUSIVO DEL PROPIETARIO / ADMIN
// ==========================================================================

let isAdminLoggedIn = false;

// Abrir modal de login PIN
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

// Validar PIN ingresado
function verifyAdminPin() {
  const pinInput = document.getElementById("adminPinInput");
  const enteredPin = pinInput ? pinInput.value.trim() : "";
  const storedPin = localStorage.getItem(AppState.adminPinKey) || AppState.defaultPin;

  if (enteredPin === storedPin) {
    isAdminLoggedIn = true;
    closeAdminAuthModal();
    openAdminDashboard();
  } else {
    alert("PIN incorrecto. Por favor verifica e intenta de nuevo. (PIN maestro por defecto: 2026)");
    if (pinInput) pinInput.value = "";
  }
}

// Abrir Dashboard de Administración
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

function logoutAdmin() {
  isAdminLoggedIn = false;
  closeAdminDashboard();
  alert("Has cerrado sesión como administrador.");
}

// Actualizar contadores y métricas del admin
function updateAdminStats() {
  const reservations = getReservations();
  const totalBookings = reservations.length;
  
  let totalPassengers = 0;
  let pendingCount = 0;
  let confirmedCount = 0;

  reservations.forEach(r => {
    totalPassengers += (r.adults || 0) + (r.children || 0) + (r.infants || 0);
    if (r.status === "Pendiente") pendingCount++;
    if (r.status === "Confirmado") confirmedCount++;
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

// Renderizar tabla de respuestas
function renderAdminTable() {
  const tableBody = document.getElementById("adminTableBody");
  if (!tableBody) return;

  const reservations = getReservations();
  const searchTerm = (document.getElementById("adminSearchInput")?.value || "").toLowerCase();
  const statusFilter = document.getElementById("adminStatusFilter")?.value || "TODOS";

  const filtered = reservations.filter(r => {
    const matchesSearch = 
      r.id.toLowerCase().includes(searchTerm) ||
      r.fullName.toLowerCase().includes(searchTerm) ||
      r.email.toLowerCase().includes(searchTerm) ||
      (r.flightIn && r.flightIn.toLowerCase().includes(searchTerm)) ||
      (r.phone && r.phone.toLowerCase().includes(searchTerm));

    const matchesStatus = statusFilter === "TODOS" || r.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="py-12 text-center text-slate-400">
          <i class="fa-solid fa-inbox text-4xl mb-3 block text-slate-300"></i>
          <p class="font-medium text-base">No hay respuestas que coincidan con la búsqueda.</p>
          <p class="text-xs text-slate-400">Las reservas enviadas desde el formulario web aparecerán aquí en tiempo real.</p>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(r => {
    const statusClasses = {
      "Confirmado": "bg-emerald-100 text-emerald-800 border-emerald-300",
      "Pendiente": "bg-amber-100 text-amber-800 border-amber-300",
      "En Tour": "bg-sky-100 text-sky-800 border-sky-300",
      "Finalizado": "bg-slate-100 text-slate-700 border-slate-300",
      "Cancelado": "bg-rose-100 text-rose-800 border-rose-300"
    }[r.status] || "bg-slate-100 text-slate-800";

    const cleanPhone = (r.phone || "").replace(/[^0-9]/g, "");

    return `
      <tr class="border-b border-slate-100 hover:bg-sky-50/40 transition-colors">
        <!-- Código & Fecha -->
        <td class="py-3 px-4">
          <div class="font-bold text-sky-900 text-sm">${r.id}</div>
          <div class="text-[11px] text-slate-400">${new Date(r.timestamp).toLocaleDateString()} ${new Date(r.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        </td>

        <!-- Pasajero & Contacto -->
        <td class="py-3 px-4">
          <div class="font-semibold text-slate-900 text-sm">${r.fullName}</div>
          <div class="text-xs text-slate-500">${r.country} · DNI/Pas: ${r.passportId}</div>
          <div class="flex items-center gap-2 mt-1">
            <a href="mailto:${r.email}" class="text-[11px] text-sky-600 hover:underline flex items-center gap-1">
              <i class="fa-solid fa-envelope text-[10px]"></i> ${r.email}
            </a>
            ${cleanPhone ? `
              <a href="https://wa.me/${cleanPhone}?text=Hola%20${encodeURIComponent(r.fullName)},%20te%20escribimos%20de%20Cartagena%20Stopover%20Adventure%20sobre%20tu%20reserva%20${r.id}" target="_blank" class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold hover:bg-emerald-200">
                <i class="fa-brands fa-whatsapp"></i> Chat
              </a>
            ` : ''}
          </div>
        </td>

        <!-- Vuelos & Escala -->
        <td class="py-3 px-4">
          <div class="text-xs font-semibold text-slate-800"><i class="fa-solid fa-plane-arrival text-sky-600"></i> ${r.flightIn}</div>
          <div class="text-[11px] text-slate-500">Llegada: ${r.arrivalDate} (${r.arrivalTime || 'Hora no esp.'})</div>
          <div class="text-[11px] text-slate-500"><i class="fa-solid fa-plane-departure text-amber-600"></i> Salida: ${r.departureTime || 'No esp.'}</div>
          <span class="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700">
            Escala: ${r.layoverDuration}
          </span>
        </td>

        <!-- Pax & Menú -->
        <td class="py-3 px-4 text-xs">
          <div class="font-semibold text-slate-800">${r.adults} Ad + ${r.children} Niñ</div>
          <div class="text-[11px] text-slate-600 truncate max-w-[150px]" title="${r.lunchChoice}">${r.lunchChoice}</div>
          <div class="text-[10px] text-slate-400 mt-0.5"><i class="fa-solid fa-suitcase"></i> ${r.luggageOption}</div>
        </td>

        <!-- Idioma y Pago -->
        <td class="py-3 px-4 text-xs">
          <div class="font-medium text-slate-700"><i class="fa-solid fa-language text-sky-500"></i> ${r.tourLanguage}</div>
          <div class="text-[11px] text-slate-500">${r.paymentMethod}</div>
        </td>

        <!-- Estado Selector -->
        <td class="py-3 px-4">
          <select 
            onchange="updateReservationStatus('${r.id}', this.value)"
            class="text-xs font-semibold px-2 py-1 rounded-full border ${statusClasses} cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-500"
          >
            <option value="Confirmado" ${r.status === 'Confirmado' ? 'selected' : ''}>Confirmado</option>
            <option value="Pendiente" ${r.status === 'Pendiente' ? 'selected' : ''}>Pendiente</option>
            <option value="En Tour" ${r.status === 'En Tour' ? 'selected' : ''}>En Tour</option>
            <option value="Finalizado" ${r.status === 'Finalizado' ? 'selected' : ''}>Finalizado</option>
            <option value="Cancelado" ${r.status === 'Cancelado' ? 'selected' : ''}>Cancelado</option>
          </select>
        </td>

        <!-- Acciones -->
        <td class="py-3 px-4 text-right">
          <div class="flex items-center justify-end gap-1.5">
            <button 
              onclick="viewReservationDetail('${r.id}')"
              class="px-2.5 py-1.5 rounded-lg bg-sky-50 text-sky-700 hover:bg-sky-100 transition-colors text-xs font-bold"
              title="Ver expediente completo"
            >
              <i class="fa-solid fa-eye"></i> Detalle
            </button>
            <button 
              onclick="deleteReservation('${r.id}')"
              class="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50 transition-colors text-xs"
              title="Eliminar registro"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

// Ver Detalle Completo de una Reserva (Dossier Oficial)
function viewReservationDetail(id) {
  const reservations = getReservations();
  const res = reservations.find(r => r.id === id);
  if (!res) return;

  const modal = document.getElementById("reservationDetailModal");
  const content = document.getElementById("detailModalContent");
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="space-y-6">
      <!-- Encabezado del Dossier -->
      <div class="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-sky-700">Expediente Oficial de Stopover</span>
          <h4 class="text-2xl font-black text-slate-900 font-display">${res.id}</h4>
          <p class="text-xs text-slate-500">Recibido: ${new Date(res.timestamp).toLocaleString()}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide bg-sky-100 text-sky-800 border border-sky-300">
            Estado: ${res.status}
          </span>
        </div>
      </div>

      <!-- Sección 1: Pasajero -->
      <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-user text-sky-600"></i> 1. Información del Pasajero Principal
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div><strong class="text-slate-500 block">Nombre Completo:</strong> <span class="text-slate-900 font-semibold text-sm">${res.fullName}</span></div>
          <div><strong class="text-slate-500 block">Pasaporte / DNI:</strong> <span class="text-slate-900 font-medium">${res.passportId}</span></div>
          <div><strong class="text-slate-500 block">Nacionalidad / País:</strong> <span class="text-slate-900 font-medium">${res.country}</span></div>
          <div><strong class="text-slate-500 block">Correo Electrónico:</strong> <a href="mailto:${res.email}" class="text-sky-600 underline">${res.email}</a></div>
          <div><strong class="text-slate-500 block">Teléfono / WhatsApp:</strong> <span class="text-slate-900 font-medium">${res.phone}</span></div>
          <div><strong class="text-slate-500 block">Tamaño del Grupo:</strong> <span class="text-slate-900 font-bold">${res.adults} Adultos, ${res.children} Niños, ${res.infants} Infantes</span></div>
        </div>
      </div>

      <!-- Sección 2: Vuelos y Escala -->
      <div class="bg-sky-50/60 p-4 rounded-2xl border border-sky-200">
        <h5 class="text-xs font-bold uppercase tracking-wider text-sky-900 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-plane text-sky-600"></i> 2. Detalles de Vuelo & Escala en Aeropuerto Rafael Núñez (CTG)
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div><strong class="text-slate-500 block">Fecha de Llegada:</strong> <span class="text-slate-900 font-bold">${res.arrivalDate}</span></div>
          <div><strong class="text-slate-500 block">Vuelo de Llegada:</strong> <span class="text-slate-900 font-semibold">${res.flightIn}</span></div>
          <div><strong class="text-slate-500 block">Hora de Llegada (Touchdown):</strong> <span class="text-slate-900 font-medium">${res.arrivalTime || 'No especificada'}</span></div>
          <div><strong class="text-slate-500 block">Vuelo de Conexión:</strong> <span class="text-slate-900 font-semibold">${res.flightOut}</span></div>
          <div><strong class="text-slate-500 block">Hora de Salida (Boarding):</strong> <span class="text-slate-900 font-medium">${res.departureTime || 'No especificada'}</span></div>
          <div><strong class="text-slate-500 block">Duración de Escala:</strong> <span class="text-emerald-700 font-bold">${res.layoverDuration}</span></div>
        </div>
      </div>

      <!-- Sección 3: Destinos e Itinerario -->
      <div class="bg-white p-4 rounded-2xl border border-slate-200">
        <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-map-location-dot text-amber-500"></i> 3. Ruta e Itinerario Solicitado
        </h5>
        <ul class="space-y-1.5 mb-3">
          ${(res.tours || []).map(t => `
            <li class="flex items-center gap-2 text-xs text-slate-700">
              <i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>
              <span>${t}</span>
            </li>
          `).join('')}
        </ul>
        <div class="text-xs text-slate-600">
          <strong>Idioma del Guía:</strong> <span class="font-semibold text-slate-900">${res.tourLanguage}</span>
        </div>
      </div>

      <!-- Sección 4: Comodidades & Alimentación -->
      <div class="bg-slate-50 p-4 rounded-2xl border border-slate-200">
        <h5 class="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-utensils text-rose-500"></i> 4. Comodidades, Equipaje & Menú Playero
        </h5>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div><strong class="text-slate-500 block">Custodia de Equipaje:</strong> <span class="text-slate-900 font-medium">${res.luggageOption}</span></div>
          <div><strong class="text-slate-500 block">Almuerzo Seleccionado:</strong> <span class="text-slate-900 font-semibold text-emerald-800">${res.lunchChoice}</span></div>
          <div class="sm:col-span-2"><strong class="text-slate-500 block">Alergias o Restricciones:</strong> <span class="text-slate-900">${res.dietaryNotes || 'Ninguna'}</span></div>
          <div class="sm:col-span-2"><strong class="text-slate-500 block">Asistencia de Movilidad:</strong> <span class="text-slate-900">${res.mobilityAssistance || 'Ninguna'}</span></div>
        </div>
      </div>

      <!-- Sección 5: Método de Pago & Firma -->
      <div class="bg-amber-50/50 p-4 rounded-2xl border border-amber-200">
        <h5 class="text-xs font-bold uppercase tracking-wider text-amber-900 mb-3 flex items-center gap-2">
          <i class="fa-solid fa-receipt text-amber-600"></i> 5. Pago & Confirmación
        </h5>
        <div class="flex flex-wrap items-center justify-between gap-4 text-xs">
          <div>
            <strong class="text-slate-500 block">Método de Pago Elegido:</strong>
            <span class="text-slate-900 font-bold text-sm">${res.paymentMethod}</span>
          </div>
          <div>
            <strong class="text-slate-500 block">Términos de Escala Aceptados:</strong>
            <span class="text-emerald-700 font-bold">✓ Sí, sincronizado con vuelo de conexión</span>
          </div>
        </div>

        ${res.signatureImage ? `
          <div class="mt-4 pt-3 border-t border-amber-200/60">
            <strong class="text-xs text-slate-500 block mb-1">Firma Digital del Pasajero:</strong>
            <div class="bg-white p-2 rounded-lg border border-slate-200 inline-block">
              <img src="${res.signatureImage}" alt="Firma del pasajero" class="h-16 max-w-full object-contain" />
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

// Exportar respuestas a CSV para Excel
function exportReservationsToCSV() {
  const reservations = getReservations();
  if (reservations.length === 0) {
    alert("No hay reservas registradas para exportar.");
    return;
  }

  const headers = [
    "ID Reserva",
    "Fecha Creación",
    "Estado",
    "Nombre Pasajero",
    "Pasaporte/DNI",
    "País",
    "Correo",
    "Teléfono/WhatsApp",
    "Adultos",
    "Niños",
    "Infantes",
    "Fecha Llegada",
    "Vuelo Llegada",
    "Hora Llegada",
    "Vuelo Salida",
    "Hora Salida",
    "Duración Escala",
    "Idioma Guía",
    "Equipaje",
    "Opción Almuerzo",
    "Alergias",
    "Asistencia Movilidad",
    "Método Pago"
  ];

  const rows = reservations.map(r => [
    `"${r.id}"`,
    `"${r.timestamp}"`,
    `"${r.status}"`,
    `"${r.fullName.replace(/"/g, '""')}"`,
    `"${r.passportId}"`,
    `"${r.country}"`,
    `"${r.email}"`,
    `"${r.phone}"`,
    r.adults,
    r.children,
    r.infants,
    `"${r.arrivalDate}"`,
    `"${r.flightIn}"`,
    `"${r.arrivalTime}"`,
    `"${r.flightOut}"`,
    `"${r.departureTime}"`,
    `"${r.layoverDuration}"`,
    `"${r.tourLanguage}"`,
    `"${r.luggageOption}"`,
    `"${r.lunchChoice.replace(/"/g, '""')}"`,
    `"${(r.dietaryNotes || '').replace(/"/g, '""')}"`,
    `"${r.mobilityAssistance}"`,
    `"${r.paymentMethod}"`
  ]);

  const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `reservas_cartagena_stopover_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Cambiar PIN de Administrador
function promptChangeAdminPin() {
  const currentPin = localStorage.getItem(AppState.adminPinKey) || AppState.defaultPin;
  const oldPin = prompt("Por favor ingresa el PIN actual:");
  if (oldPin === null) return;

  if (oldPin !== currentPin) {
    alert("El PIN actual no coincide.");
    return;
  }

  const newPin = prompt("Ingresa el nuevo PIN de acceso (4 a 8 caracteres numéricos):");
  if (!newPin || newPin.trim().length < 4) {
    alert("PIN inválido. Debe tener al menos 4 caracteres.");
    return;
  }

  localStorage.setItem(AppState.adminPinKey, newPin.trim());
  alert("¡PIN maestro actualizado exitosamente!");
}

// Cargar datos demo de prueba
function loadDemoData() {
  if (confirm("¿Deseas restaurar las reservas de demostración en el sistema?")) {
    localStorage.setItem(AppState.reservationsKey, JSON.stringify(AppState.initialDemoReservations));
    updateAdminStats();
    renderAdminTable();
    alert("Datos de demostración cargados exitosamente.");
  }
}

// ==========================================================================
// SONIDO AMBIENTAL CARIBEÑO (Web Audio API Synthesizer)
// ==========================================================================

let audioCtx = null;
let isAudioPlaying = false;
let waveGain = null;

function toggleCaribbeanAudio() {
  const btn = document.getElementById("audioToggleBtn");
  const icon = document.getElementById("audioIcon");
  const label = document.getElementById("audioLabel");

  if (!isAudioPlaying) {
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      // Sintetizador de ruido blanco filtrado simulando olas del mar caribeño
      const bufferSize = audioCtx.sampleRate * 2;
      const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = audioCtx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, audioCtx.currentTime);

      // LFO para modular la frecuencia y simular el vaivén de las olas
      const lfo = audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime); // Ola cada ~8 segundos
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.setValueAtTime(220, audioCtx.currentTime);

      lfo.connect(lfoGain);
      lfoGain.connect(filter.frequency);

      waveGain = audioCtx.createGain();
      waveGain.gain.setValueAtTime(0.12, audioCtx.currentTime);

      whiteNoise.connect(filter);
      filter.connect(waveGain);
      waveGain.connect(audioCtx.destination);

      whiteNoise.start();
      lfo.start();

      isAudioPlaying = true;
      if (icon) icon.className = "fa-solid fa-volume-high text-amber-400";
      if (label) label.textContent = "Olas del Mar (Activo)";
      if (btn) btn.classList.add("bg-sky-800/80", "border-amber-400");
    } catch (e) {
      console.warn("No se pudo iniciar el audio ambiental:", e);
    }
  } else {
    if (audioCtx && audioCtx.state === "running") {
      audioCtx.suspend();
    }
    isAudioPlaying = false;
    if (icon) icon.className = "fa-solid fa-volume-xmark text-slate-400";
    if (label) label.textContent = "Sonido Olas";
    if (btn) btn.classList.remove("bg-sky-800/80", "border-amber-400");
  }
}

// Observador de Scroll para animaciones
function initScrollObserver() {
  const items = document.querySelectorAll(".reveal-item");
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  items.forEach(el => observer.observe(el));
}

// Atajo de teclado para administradores (Ctrl + Alt + A)
window.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.altKey && (e.key === 'a' || e.key === 'A')) {
    e.preventDefault();
    openAdminAuthModal();
  }
});

// Inicialización cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  initStorage();
  renderDestinations();
  initSignatureCanvas();
  initScrollObserver();

  // Fecha mínima para el selector de llegada: hoy
  const todayStr = new Date().toISOString().split("T")[0];
  const dateInput = document.getElementById("arrivalDate");
  if (dateInput) {
    dateInput.min = todayStr;
    dateInput.value = todayStr;
  }

  console.log("%c🌴 Cartagena Mágica & Stopover Tour Iniciado ✈️", "color: #0284c7; font-size: 16px; font-weight: bold;");
  console.log("Acceso de Propietario / Admin disponible en el botón 'Admin' o con Ctrl+Alt+A (PIN por defecto: 2026)");
});
