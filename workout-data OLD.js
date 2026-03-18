// ============================================================
//  WORKOUT DATA — l'unico file da aggiornare quando cambi scheda
//  Sostituisci questo intero file con quello che ti darà Claude
// ============================================================

const WORKOUT_CONFIG = {
  meta: {
    name: "Scheda Ipertrofia — Fase 1",
    version: "1.0",
    startDate: "2025-03-13",
    weeks: 8,
    goal: "Ipertrofia muscolare, forza di base",
    notes: "Progressione lineare: aumenta il peso quando raggiungi il limite superiore delle rip per tutte le serie."
  },

  // 0=Lun, 1=Mar, 2=Mer, 3=Gio, 4=Ven, 5=Sab, 6=Dom
  days: [
    {
      id: 0,
      name: "Lunedì",
      label: "Petto + Tricipiti",
      emoji: "💪",
      color: "#f97316",
      isRest: false,
      exercises: [
        {
          id: "mon_01",
          name: "Panca Piana con Bilanciere",
          sets: 4, reps: "6-8", restSeconds: 120,
          muscles: "Petto centrale, Tricipiti, Deltoide anteriore",
          notes: "Presa leggermente più larga delle spalle. Abbassa il bilanciere verso il basso del petto. Piedi piatti a terra. Arco lombare naturale, non esagerato. Spingi esplosivamente nella fase concentrica.",
          youtubeId: "vcBig73ojpE"
        },
        {
          id: "mon_02",
          name: "Panca Inclinata con Manubri",
          sets: 3, reps: "8-10", restSeconds: 90,
          muscles: "Petto superiore, Deltoide anteriore",
          notes: "Inclinazione 30-45°. Non andare oltre i 45° per evitare di caricare troppo le spalle. Ruota i polsi verso l'interno in cima al movimento. Contrazione isometrica di 1 secondo in alto.",
          youtubeId: "8iPEnn-ltC8"
        },
        {
          id: "mon_03",
          name: "Croci con Manubri",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Petto, focus sullo stiramento",
          notes: "Leggera flessione del gomito fissa durante tutto il movimento. Scendi fino a sentire lo stiramento, non oltre. Immagina di abbracciare un albero. Fase eccentrica lenta (3 secondi).",
          youtubeId: "eozdVDA78K0"
        },
        {
          id: "mon_04",
          name: "Push-up a Presa Stretta",
          sets: 3, reps: "10-15", restSeconds: 60,
          muscles: "Tricipiti, Petto interno",
          notes: "Mani sotto le spalle, pollici a contatto. Gomiti vicini al busto durante la discesa. Corpo rigido come una tavola. Ottimo come esercizio di burnout finale.",
          youtubeId: "vMF4HQFNTvE"
        },
        {
          id: "mon_05",
          name: "French Press (EZ Bar)",
          sets: 3, reps: "10-12", restSeconds: 75,
          muscles: "Tricipiti (capo lungo)",
          notes: "Usa il bilanciere EZ per ridurre lo stress sui polsi. Abbassa verso la fronte o dietro la testa. Gomiti fissi, non allargarli. Estensione completa in cima senza bloccare i gomiti.",
          youtubeId: "d_KZxkY_0cM"
        },
        {
          id: "mon_06",
          name: "Push-down ai Cavi (corda)",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Tricipiti (capo laterale e mediale)",
          notes: "Apri la corda in basso per massimizzare la contrazione. Gomiti fissi ai lati del busto. Contrazione di 1-2 secondi in fondo. Non usare il peso del corpo per spingere.",
          youtubeId: "vB5OHsJ3EME"
        }
      ]
    },
    {
      id: 1,
      name: "Martedì",
      label: "Schiena + Bicipiti",
      emoji: "🏋️",
      color: "#3b82f6",
      isRest: false,
      exercises: [
        {
          id: "tue_01",
          name: "Stacco da Terra",
          sets: 4, reps: "5-6", restSeconds: 180,
          muscles: "Schiena, Glutei, Hamstring, Trapezio",
          notes: "ESERCIZIO RE — eseguilo fresco. Piedi larghezza anche, bilanciere sopra i lacci. Schiena piatta, petto aperto. Spingi il pavimento via da te, non tirare il bilanciere. Bloccaggio delle scapole in cima. Mai arrotondare la schiena bassa.",
          youtubeId: "op9kVnSso6Q"
        },
        {
          id: "tue_02",
          name: "Trazioni alla Sbarra (pronazione)",
          sets: 4, reps: "6-10", restSeconds: 120,
          muscles: "Dorsali, Bicipiti, Rombodi",
          notes: "Presa larga prona. Petto verso la sbarra, non mento. Depressione e retrazione delle scapole prima di tirare. Scendi lentamente (3 secondi). Se non arrivi alle rip, usa l'elastico di assistenza.",
          youtubeId: "eGo4IYlbE5g"
        },
        {
          id: "tue_03",
          name: "Rematore con Bilanciere",
          sets: 4, reps: "8-10", restSeconds: 90,
          muscles: "Dorsali, Rombodi, Trapezio medio, Bicipiti",
          notes: "Busto a 45° o parallelo al pavimento. Presa supina per più bicipiti, prona per più dorsali. Tira verso l'ombelico, non al petto. Spremi le scapole in cima. Controllo eccentrico fondamentale.",
          youtubeId: "T3N-TO4reLQ"
        },
        {
          id: "tue_04",
          name: "Lat Machine (presa larga)",
          sets: 3, reps: "10-12", restSeconds: 75,
          muscles: "Dorsali (focus laterale)",
          notes: "Petto inclinato leggermente all'indietro. Punta i gomiti verso le tasche posteriori dei pantaloni. Tira fino a toccare il petto con la sbarra. Non oscillare con il busto.",
          youtubeId: "CAwf7n6Luuc"
        },
        {
          id: "tue_05",
          name: "Curl con Bilanciere",
          sets: 3, reps: "8-10", restSeconds: 75,
          muscles: "Bicipiti (capo lungo e corto)",
          notes: "Gomiti fermi ai fianchi. Non oscillare il busto. Presa supina, larghezza spalle. Contrazione di picco in cima. Scendi lentamente (2-3 secondi). Usa EZ bar se i polsi danno fastidio.",
          youtubeId: "kwG2ipFRgfo"
        },
        {
          id: "tue_06",
          name: "Curl con Manubri (alternato)",
          sets: 3, reps: "10-12/lato", restSeconds: 60,
          muscles: "Bicipiti, Brachiale, Brachioradiale",
          notes: "Supina il polso durante il movimento (gira il mignolo verso l'esterno). Busto stabile, non ruotarlo. Concentrati sulla connessione mente-muscolo.",
          youtubeId: "sAq_ocpRh_I"
        }
      ]
    },
    {
      id: 2,
      name: "Mercoledì",
      label: "Spalle",
      emoji: "🎯",
      color: "#a855f7",
      isRest: false,
      exercises: [
        {
          id: "wed_01",
          name: "Lento Avanti con Bilanciere",
          sets: 4, reps: "6-8", restSeconds: 120,
          muscles: "Deltoide anteriore e mediale, Trapezio, Tricipiti",
          notes: "Eseguibile in piedi o seduto. In piedi attiva di più il core. Bilanciere davanti al viso (non dietro la testa — rischio cervicale). Spingi il bilanciere verso l'interno in cima. Non inarcare la schiena.",
          youtubeId: "2yjwXTZQDDI"
        },
        {
          id: "wed_02",
          name: "Arnold Press",
          sets: 3, reps: "10-12", restSeconds: 90,
          muscles: "Tutti e 3 i capi del deltoide",
          notes: "Inizia con i palmi verso di te come un curl, ruota verso l'esterno mentre spingi. Coinvolge tutti i capi del deltoide. Movimento controllato, non veloce.",
          youtubeId: "6Z15_WdXmVw"
        },
        {
          id: "wed_03",
          name: "Alzate Laterali con Manubri",
          sets: 4, reps: "12-15", restSeconds: 60,
          muscles: "Deltoide mediale (fondamentale per la larghezza)",
          notes: "Leggerissima flessione del gomito. Alza fino ad altezza spalla, non oltre. Il mignolo deve essere più alto del pollice (come a versare acqua). Fase eccentrica lenta: 3-4 secondi. Peso basso, forma perfetta.",
          youtubeId: "3VcKaXpzqRo"
        },
        {
          id: "wed_04",
          name: "Face Pull al Cavo",
          sets: 3, reps: "15-20", restSeconds: 60,
          muscles: "Deltoide posteriore, Rombodi, Rotatori esterni",
          notes: "ESSENZIALE per la salute delle spalle e la postura. Cavo all'altezza della testa. Tira verso il viso, aprendo i gomiti verso l'esterno e in alto. Rotazione esterna massima. Fallo sempre!",
          youtubeId: "rep-qVOkqgk"
        },
        {
          id: "wed_05",
          name: "Scrollate con Manubri (Shrugs)",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Trapezio superiore",
          notes: "Solo movimento verticale: su e giù. Non ruotare le spalle. Contrazione di 1-2 secondi in cima. Peso moderato-alto. Tieni la testa neutra.",
          youtubeId: "g6qbq4Lf1FI"
        }
      ]
    },
    {
      id: 3,
      name: "Giovedì",
      label: "Riposo",
      emoji: "😴",
      color: "#64748b",
      isRest: true,
      restTips: [
        "I muscoli crescono durante il recupero, non durante l'allenamento. Il riposo è parte del programma.",
        "Priorità al sonno: punta a 7-9 ore. Il GH (ormone della crescita) viene rilasciato durante il sonno profondo.",
        "Idratazione: almeno 2-3 litri d'acqua. Essenziale per la sintesi proteica e il trasporto di nutrienti.",
        "Considera mobilità leggera, yoga, o una camminata — attività che promuovono il recupero attivo.",
        "Mantieni l'apporto proteico elevato (1.6-2.2g per kg di peso) anche nei giorni di riposo."
      ]
    },
    {
      id: 4,
      name: "Venerdì",
      label: "Gambe + Core",
      emoji: "🦵",
      color: "#22c55e",
      isRest: false,
      exercises: [
        {
          id: "fri_01",
          name: "Squat con Bilanciere",
          sets: 4, reps: "6-8", restSeconds: 180,
          muscles: "Quadricipiti, Glutei, Hamstring, Core",
          notes: "ESERCIZIO FONDAMENTALE. Piedi larghezza spalle, punte leggermente aperte. Scendi finché le cosce sono parallele al suolo. Ginocchia in linea con le punte. Schiena neutra, petto aperto. Spingi i piedi nel pavimento in risalita.",
          youtubeId: "ultWZbUMPL8"
        },
        {
          id: "fri_02",
          name: "Leg Press",
          sets: 3, reps: "10-12", restSeconds: 90,
          muscles: "Quadricipiti, Glutei, Hamstring",
          notes: "Piedi alti sulla pedana = più glutei/hamstring. Piedi bassi = più quadricipiti. Non bloccare le ginocchia in estensione. Abbassa fino a 90°. Non sollevare i glutei dalla seduta.",
          youtubeId: "IZxyjW7MPJQ"
        },
        {
          id: "fri_03",
          name: "Romanian Deadlift",
          sets: 3, reps: "10-12", restSeconds: 90,
          muscles: "Hamstring, Glutei (focus eccentrico)",
          notes: "Ginocchia leggermente flesse e fisse. Spingi i fianchi indietro (hip hinge), non piegare le ginocchia. Senti lo stiramento degli hamstring. Schiena piatta per tutta la durata. Scendi fino a metà tibia.",
          youtubeId: "JCXUYuzwNrM"
        },
        {
          id: "fri_04",
          name: "Leg Curl alla Macchina",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Hamstring isolati",
          notes: "Contrazione di picco in posizione flessa. Scendi lentamente (3 secondi). Piedi in dorsiflessione per massimizzare l'attivazione. Non usare il momentum.",
          youtubeId: "1Tq3QdYUuHs"
        },
        {
          id: "fri_05",
          name: "Plank (varianti)",
          sets: 3, reps: "45-60 sec", restSeconds: 60,
          muscles: "Core completo, Trasverso addominale",
          notes: "Corpo dritto come una tavola. Contrai glutei e addominali attivamente. Non lasciare cadere i fianchi. Variazioni: plank frontale, laterale, con sollevamento gamba. Respira normalmente.",
          youtubeId: "ASdvN_XEl_c"
        },
        {
          id: "fri_06",
          name: "Crunch Inverso",
          sets: 3, reps: "15-20", restSeconds: 60,
          muscles: "Addominali bassi, Flessori dell'anca",
          notes: "Solleva il bacino dal pavimento, non le gambe. Immagina di arrotolare la colonna vertebrale partendo dal coccige. Gambe perpendicolari al suolo. Movimento controllato. Espirazione durante la contrazione.",
          youtubeId: "hyv14e7QEiY"
        }
      ]
    },
    {
      id: 5,
      name: "Sabato",
      label: "Full Body Calisthenics",
      emoji: "🤸",
      color: "#f59e0b",
      isRest: false,
      exercises: [
        {
          id: "sat_01",
          name: "Muscle-Up (o progressione)",
          sets: 3, reps: "3-6", restSeconds: 120,
          muscles: "Dorsali, Petto, Tricipiti, Core, Spalle",
          notes: "Usa la falsa presa (false grip) alla sbarra. Fase di pull esplosiva, poi transizione rapida sopra la sbarra. Se non riesci ancora: lavora su trazioni esplosive (chest-to-bar) e dip profondi separatamente.",
          youtubeId: "Oe4NKzxMrA4"
        },
        {
          id: "sat_02",
          name: "Handstand Push-up (o pike push-up)",
          sets: 3, reps: "5-10", restSeconds: 90,
          muscles: "Spalle, Tricipiti, Core",
          notes: "Contro il muro: talloni al muro, corpo dritto. Abbassa la testa verso il suolo. Progressione: pike push-up → HSPU assistito → HSPU libero. Riscalda bene le spalle prima.",
          youtubeId: "OPrlBHHn6fA"
        },
        {
          id: "sat_03",
          name: "Pistol Squat (o progressione)",
          sets: 3, reps: "5-8/gamba", restSeconds: 90,
          muscles: "Quadricipiti, Glutei, Equilibrio, Core",
          notes: "Richiede forza e mobilità. Progressioni: squat al muro → squat su rialzo → pistol assistito (TRX o palo) → pistol libero. Tieni il busto il più verticale possibile.",
          youtubeId: "vq5-vdgJc0I"
        },
        {
          id: "sat_04",
          name: "L-Sit (su parallele o maniglie)",
          sets: 4, reps: "15-30 sec", restSeconds: 60,
          muscles: "Core, Flessori dell'anca, Tricipiti, Petto",
          notes: "Pressa verso il basso, spalle depresse. Gambe parallele al suolo, punta i piedi. Progressioni: gambe piegate → una gamba tesa → L-sit completo.",
          youtubeId: "IUZJoSP66HI"
        },
        {
          id: "sat_05",
          name: "Ring Dip (o parallele)",
          sets: 3, reps: "8-12", restSeconds: 75,
          muscles: "Petto, Tricipiti, Deltoide anteriore",
          notes: "Sugli anelli: molto più instabile rispetto alle parallele. Anelli paralleli in basso, perpendicolari al corpo in alto per più petto. Busto leggermente inclinato in avanti. Range completo.",
          youtubeId: "q_Z18bFwZr0"
        },
        {
          id: "sat_06",
          name: "Dragon Flag",
          sets: 3, reps: "6-10", restSeconds: 90,
          muscles: "Core completo, Lats, Flessori dell'anca",
          notes: "Esercizio di Bruce Lee. Tieni la sbarra sopra la testa. Corpo rigido come una tavola, abbassa le gambe senza toccare il suolo. La fase eccentrica è la più importante. Progressioni: gambe piegate → una tesa → dragon flag completo.",
          youtubeId: "njKXkuhY7_0"
        }
      ]
    },
    {
      id: 6,
      name: "Domenica",
      label: "Riposo",
      emoji: "🌟",
      color: "#64748b",
      isRest: true,
      restTips: [
        "Recupero attivo: considera stretching, foam rolling o una passeggiata leggera per migliorare la circolazione.",
        "Revisiona i progressi della settimana. Hai aumentato i pesi o le ripetizioni? Annotalo nel diario!",
        "Prepara i pasti della settimana (meal prep) per supportare gli obiettivi di allenamento.",
        "Mantieni l'apporto proteico elevato anche oggi — la sintesi proteica continua per 24-48 ore dopo l'allenamento.",
        "Visualizzazione: immagina gli allenamenti della settimana prossima con tecnica perfetta."
      ]
    }
  ]
};
