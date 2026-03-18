// ============================================================
//  WORKOUT DATA — l'unico file da aggiornare quando cambi scheda
//  Sostituisci questo intero file con quello che ti darà Claude
// ============================================================

const WORKOUT_CONFIG = {
  meta: {
    name: "Home Aesthetics — Fase 1",
    version: "2.0",
    startDate: "2026-03-14",
    weeks: 8,
    goal: "Definizione, spalle larghe, schiena ampia, petto atletico, addominali visibili",
    notes: "Solo manubri, kettlebell e tappetino. Progredisci aumentando il peso o aggiungendo 1-2 rip a settimana. Quando esegui tutte le rip massime pulite per 2 sessioni consecutive, aumenta il peso."
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
          name: "Press con Manubri a Terra",
          sets: 4, reps: "8-12", restSeconds: 90,
          muscles: "Petto centrale, Tricipiti, Deltoide anteriore",
          notes: "Sdraiato a terra, gomiti a 45° dal busto (non a 90°). Il pavimento limita il range ma protegge le spalle. Spingi esplosivamente verso l'alto, scendi lentamente in 3 secondi. Piedi piegati, schiena bassa che tocca il pavimento. Contrai il petto in cima come se volessi avvicinare i manubri.",
          youtubeId: "B6nNHMRqMiI"
        },
        {
          id: "mon_02",
          name: "Press Inclinato su Sedia con Manubri",
          sets: 3, reps: "10-12", restSeconds: 90,
          muscles: "Petto superiore, Deltoide anteriore",
          notes: "Appoggia la schiena su uno schienale inclinato a 30-45° (sedia reclinata, bordo del letto o divano). Abbassa i manubri con i gomiti a 45° dal busto. Questo angolo è fondamentale per il petto superiore — la parte che dà l'aspetto atletico e pieno al petto. Spingi esplosivamente, scendi in 3 secondi.",
          youtubeId: "DbFgADa2PL8"
        },
        {
          id: "mon_03",
          name: "Push-up Archer",
          sets: 3, reps: "8-10/lato", restSeconds: 75,
          muscles: "Petto (focus unilaterale), Deltoide anteriore, Core",
          notes: "Posizione push-up con le braccia molto larghe. Scendi verso un lato piegando quel gomito mentre l'altro braccio rimane quasi teso (come un arciere che tende l'arco). Alterna i lati. Molto più efficace dei push-up normali per il petto. Se troppo difficile, usa le ginocchia come appoggio.",
          youtubeId: "DcMGKwFiLqk"
        },
        {
          id: "mon_04",
          name: "Croci a Terra con Manubri",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Petto (stiramento e contrazione), Deltoide anteriore",
          notes: "Sdraiato a terra, braccia quasi distese con leggera flessione del gomito fissa. Abbassa i manubri fino a toccare quasi il pavimento. A differenza della panca, qui il range è completo. Fase eccentrica: 3-4 secondi. Concentrati sullo stiramento del petto in basso.",
          youtubeId: "eozdVDA78K0"
        },
        {
          id: "mon_05",
          name: "Kickback Tricipiti con Manubrio",
          sets: 3, reps: "12-15/lato", restSeconds: 60,
          muscles: "Tricipiti (capo laterale e lungo)",
          notes: "Appoggia il ginocchio e la mano libera su una sedia. Gomito fisso all'altezza del fianco, braccio superiore parallelo al pavimento. Estendi il gomito completamente e tieni 1 secondo in contrazione. Non oscillare con il busto. Peso moderato — la forma conta più del carico.",
          youtubeId: "6SS6K3lAwZ8"
        },
        {
          id: "mon_06",
          name: "Dip su Sedia",
          sets: 3, reps: "12-20", restSeconds: 60,
          muscles: "Tricipiti, Petto inferiore, Deltoide anteriore",
          notes: "Mani sul bordo di una sedia stabile, dita in avanti. Piedi in avanti con gambe tese per più difficoltà, piegate per facilitare. Scendi finché i gomiti formano 90°. Gomiti vicini al busto. Per aumentare l'intensità: appoggia i piedi su un'altra sedia di fronte.",
          youtubeId: "0326dy_-CzM"
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
          name: "Rematore Unilaterale con Manubrio",
          sets: 4, reps: "10-12/lato", restSeconds: 75,
          muscles: "Dorsali, Rombodi, Trapezio medio, Bicipiti",
          notes: "Appoggia il ginocchio e la mano dello stesso lato su una sedia. Schiena piatta e parallela al suolo. Tira il manubrio verso l'anca (non verso il petto) ruotando leggermente la spalla indietro. Contrai la scapola in cima. Scendi lentamente in 3 secondi. Questo è l'esercizio principale per la schiena — massima concentrazione.",
          youtubeId: "pYcpY20QaE8"
        },
        {
          id: "tue_02",
          name: "Rematore Bilaterale Chest-Supported",
          sets: 4, reps: "10-12", restSeconds: 75,
          muscles: "Dorsali, Rombodi, Trapezio medio",
          notes: "Appoggia il petto su una sedia inclinata a 45° o sul bordo di un piano alto. Braccia pendenti verso il basso con i manubri. Tira i gomiti indietro e in alto comprimendo le scapole al massimo. Questa posizione isola la schiena eliminando il contributo del busto. Fase eccentrica lenta: 3 secondi.",
          youtubeId: "T3N-TO4reLQ"
        },
        {
          id: "tue_03",
          name: "Rematore Sumo con Kettlebell",
          sets: 3, reps: "10-12", restSeconds: 90,
          muscles: "Schiena alta, Trapezio, Bicipiti, Deltoide posteriore",
          notes: "Piedi larghi in posizione sumo, kettlebell al centro. Afferra con entrambe le mani, schiena piatta. Sali tirando verso il petto con i gomiti che salgono lateralmente — come un upright row da terra. Eccellente per la schiena alta e il trapezio che danno larghezza visibile alla silhouette.",
          youtubeId: "UtSe3iyMxvk"
        },
        {
          id: "tue_04",
          name: "Superman con Manubri",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Erettori spinali, Glutei, Trapezio inferiore",
          notes: "A pancia in giù sul tappetino, manubri leggeri nelle mani con braccia in avanti. Solleva contemporaneamente braccia, petto e gambe dal pavimento. Tieni 2 secondi in cima contraendo schiena bassa e glutei. Fondamentale per la postura e la salute della colonna — non saltarlo.",
          youtubeId: "z6PJMT2y8GQ"
        },
        {
          id: "tue_05",
          name: "Curl Alternato con Manubri",
          sets: 3, reps: "10-12/lato", restSeconds: 75,
          muscles: "Bicipiti (capo lungo e corto), Brachiale",
          notes: "Gomiti fermi ai fianchi — fondamentale. Supina il polso durante il movimento (gira il mignolo verso l'esterno mentre sali). Contrazione di picco in cima, tieni 1 secondo. Scendi lentamente in 3 secondi. Non oscillare il busto: se lo fai, il peso è troppo alto.",
          youtubeId: "sAq_ocpRh_I"
        },
        {
          id: "tue_06",
          name: "Curl a Martello con Manubri",
          sets: 3, reps: "10-12/lato", restSeconds: 60,
          muscles: "Brachiale, Brachioradiale, Bicipiti capo lungo",
          notes: "Presa neutra (pollice in su) — il polso non ruota durante il movimento. Gomiti sempre fermi ai fianchi. Sviluppa lo spessore del braccio (brachiale) aggiungendo volume visibile sia frontalmente che di lato. Alterna i lati con controllo.",
          youtubeId: "TwD-YGVP4Bk"
        },
        {
          id: "tue_07",
          name: "Curl di Concentrazione",
          sets: 2, reps: "12-15/lato", restSeconds: 60,
          muscles: "Bicipiti (picco e contrazione massima)",
          notes: "Seduto su una sedia, gomito appoggiato sulla coscia interna. Isola completamente il bicipite. Contrazione massima e tienila 2 secondi in cima. Peso moderato, forma impeccabile. Perfetto per sviluppare il picco del bicipite — la parte che si vede quando tendi il braccio.",
          youtubeId: "0AUGkch3tzc"
        }
      ]
    },
    {
      id: 2,
      name: "Mercoledì",
      label: "Spalle (priorità)",
      emoji: "🎯",
      color: "#a855f7",
      isRest: false,
      exercises: [
        {
          id: "wed_01",
          name: "Arnold Press con Manubri",
          sets: 4, reps: "10-12", restSeconds: 90,
          muscles: "Tutti e 3 i capi del deltoide, Trapezio, Tricipiti",
          notes: "Inizia con i palmi verso di te all'altezza del mento (come al termine di un curl). Ruota le braccia verso l'esterno mentre spingi verso l'alto — arrivi con i palmi in avanti in cima. Questo movimento coinvolge tutti e 3 i capi del deltoide: è il miglior press per le spalle con i manubri. Movimento lento e controllato.",
          youtubeId: "6Z15_WdXmVw"
        },
        {
          id: "wed_02",
          name: "Pike Push-up su Sedia",
          sets: 3, reps: "8-12", restSeconds: 90,
          muscles: "Deltoide anteriore e mediale, Tricipiti",
          notes: "Mani sul pavimento, piedi su una sedia — corpo a forma di V rovesciata. Più i piedi sono alti, più il movimento diventa simile al military press. Abbassa la testa tra le braccia, poi spingi. Questo sostituisce il lento avanti con bilanciere. Nel tempo aumenta l'altezza della sedia.",
          youtubeId: "OPrlBHHn6fA"
        },
        {
          id: "wed_03",
          name: "Alzate Laterali con Manubri",
          sets: 5, reps: "12-20", restSeconds: 60,
          muscles: "Deltoide mediale — la larghezza delle spalle",
          notes: "5 serie: questo è l'esercizio chiave per le spalle larghe. Peso LEGGERO, forma PERFETTA. Leggera flessione del gomito fissa. Alza fino all'altezza della spalla — il mignolo più alto del pollice (come a versare acqua). Fase eccentrica 4 secondi. Non barare con le ginocchia o il busto. Il bruciore è il segnale giusto.",
          youtubeId: "3VcKaXpzqRo"
        },
        {
          id: "wed_04",
          name: "Alzate Laterali Seduto Inclinato",
          sets: 3, reps: "15-20", restSeconds: 60,
          muscles: "Deltoide mediale (isolamento massimo)",
          notes: "Seduto sul bordo di una sedia, busto inclinato in avanti a 45°. In questa posizione il deltoide mediale è isolato al massimo. Peso molto leggero. Esegui subito dopo le alzate normali come burnout. La combinazione crea uno stimolo diverso che accelera la crescita del deltoide mediale.",
          youtubeId: "3VcKaXpzqRo"
        },
        {
          id: "wed_05",
          name: "Rear Delt Fly (busto inclinato)",
          sets: 4, reps: "15-20", restSeconds: 60,
          muscles: "Deltoide posteriore, Rombodi, Trapezio medio",
          notes: "In piedi con il busto parallelo al suolo, o sdraiato a pancia in giù su una sedia inclinata per più isolamento. Apri le braccia verso l'esterno con leggera flessione del gomito fissa. Il deltoide posteriore è essenziale per la definizione della spalla vista di lato e di schiena.",
          youtubeId: "EA7u4Q_8HQ0"
        },
        {
          id: "wed_06",
          name: "Upright Row con Kettlebell",
          sets: 3, reps: "12-15", restSeconds: 60,
          muscles: "Deltoide mediale, Trapezio superiore",
          notes: "Kettlebell davanti alle cosce con presa prona. Tira verso il mento con i gomiti che salgono in alto e lateralmente. I gomiti sempre più alti delle mani. Fermati all'altezza del mento. La kettlebell è ideale per questo esercizio grazie all'impugnatura che permette un movimento naturale.",
          youtubeId: "VG67wBnF5i0"
        },
        {
          id: "wed_07",
          name: "Scrollate con Manubri (Shrugs)",
          sets: 3, reps: "15-20", restSeconds: 60,
          muscles: "Trapezio superiore",
          notes: "In piedi, manubri ai lati. Solleva le spalle verticalmente verso le orecchie il più in alto possibile. Tieni 2 secondi in cima. Scendi lentamente. Solo movimento verticale — non ruotare le spalle. Il trapezio sviluppato incornicia il collo e le spalle dando una silhouette potente.",
          youtubeId: "g6qbq4Lf1FI"
        }
      ]
    },
    {
      id: 3,
      name: "Giovedì",
      label: "Riposo attivo",
      emoji: "🧘",
      color: "#64748b",
      isRest: true,
      restTips: [
        "Tre giorni consecutivi di allenamento meritano un vero recupero. I muscoli crescono solo se riposano.",
        "Stretching 15-20 min: spalle, petto e dorsali. La mobilità migliora la tecnica e riduce il rischio di infortuni.",
        "Foam rolling o massaggio con pallina da tennis su spalle e dorsali per ridurre le tensioni muscolari.",
        "Idratazione: almeno 2.5-3 litri d'acqua. Essenziale per la sintesi proteica e il recupero.",
        "Obiettivo proteico: 1.8-2.2g per kg di peso corporeo. Se non raggiungi le proteine, i muscoli non crescono — neanche nei giorni di riposo."
      ]
    },
    {
      id: 4,
      name: "Venerdì",
      label: "Gambe + Glutei",
      emoji: "🦵",
      color: "#22c55e",
      isRest: false,
      exercises: [
        {
          id: "fri_01",
          name: "Goblet Squat con Kettlebell",
          sets: 4, reps: "12-15", restSeconds: 90,
          muscles: "Quadricipiti, Glutei, Hamstring, Core",
          notes: "Tieni la kettlebell con entrambe le mani al petto (come un calice). Piedi larghezza spalle, punte a 30-45°. Scendi profondo — cosce almeno parallele al suolo. Il peso davanti aiuta a mantenere il busto verticale. Spingi le ginocchia verso l'esterno in linea con le punte. Talloni sempre a terra.",
          youtubeId: "MxsFDhcyFyE"
        },
        {
          id: "fri_02",
          name: "Split Squat Bulgaro con Manubri",
          sets: 3, reps: "10-12/gamba", restSeconds: 90,
          muscles: "Quadricipiti, Glutei, Flessori dell'anca, Equilibrio",
          notes: "Piede posteriore su una sedia, manubri in mano. Scendi fino a sfiorare il pavimento con il ginocchio posteriore. Il ginocchio anteriore NON deve superare la punta del piede. Questo esercizio unilaterale corregge gli squilibri tra le gambe ed è estremamente efficace senza bilanciere.",
          youtubeId: "2C-uNgKwPLE"
        },
        {
          id: "fri_03",
          name: "Romanian Deadlift con Manubri",
          sets: 3, reps: "12-15", restSeconds: 90,
          muscles: "Hamstring, Glutei (focus eccentrico)",
          notes: "Piedi larghezza anche, manubri davanti alle cosce. Spingi i fianchi indietro (hip hinge) con le ginocchia leggermente flesse e fisse. Senti lo stiramento degli hamstring. Schiena sempre piatta — se si arrotola, il peso è troppo alto. Scendi fino a metà tibia o fino a sentire forte stiramento.",
          youtubeId: "JCXUYuzwNrM"
        },
        {
          id: "fri_04",
          name: "Hip Thrust con Manubrio su Sedia",
          sets: 4, reps: "15-20", restSeconds: 75,
          muscles: "Glutei (contrazione massima), Hamstring",
          notes: "Schiena appoggiata al bordo della sedia, manubrio pesante sulle anche. Piedi sul pavimento con ginocchia a 90°. Spingi i fianchi verso l'alto contraendo i glutei al massimo. Tieni 2 secondi in cima. La schiena e le spalle rimangono sulla sedia. Questo è l'esercizio più efficace per i glutei.",
          youtubeId: "xDmFkJxPzeM"
        },
        {
          id: "fri_05",
          name: "Affondi Camminati con Manubri",
          sets: 3, reps: "10/gamba", restSeconds: 75,
          muscles: "Quadricipiti, Glutei, Hamstring, Equilibrio",
          notes: "Passo lungo in avanti, abbassa il ginocchio posteriore verso il suolo senza toccarlo. Ginocchio anteriore non oltre la punta del piede. Spingi dal tallone anteriore per risalire. Esegui in un corridoio. I manubri aumentano il carico progressivamente.",
          youtubeId: "D7KaRcUTQeE"
        },
        {
          id: "fri_06",
          name: "Sumo Squat con Kettlebell",
          sets: 3, reps: "15-20", restSeconds: 60,
          muscles: "Glutei, Adduttori, Quadricipiti interni",
          notes: "Piedi molto larghi (doppia larghezza spalle), punte a 45°. Kettlebell appesa tra le gambe. Scendi profondo con le ginocchia che seguono le punte. Attiva gli adduttori e la parte interna dei glutei che gli squat normali non raggiungono.",
          youtubeId: "qEwKCR5JCog"
        }
      ]
    },
    {
      id: 5,
      name: "Sabato",
      label: "Core + Addominali",
      emoji: "🔥",
      color: "#ef4444",
      isRest: false,
      exercises: [
        {
          id: "sat_01",
          name: "Dragon Flag Progressivo",
          sets: 3, reps: "6-10", restSeconds: 90,
          muscles: "Core completo, Addominali, Flessori dell'anca",
          notes: "Sdraiato sul tappetino, afferra le gambe di una sedia salda sopra la testa. Corpo rigido come una tavola, abbassa le gambe senza toccare il suolo. Progressioni: gambe piegate → una gamba tesa → Dragon Flag completo. La fase eccentrica (scendere lentamente) costruisce la forza reale.",
          youtubeId: "njKXkuhY7_0"
        },
        {
          id: "sat_02",
          name: "L-Sit su Sedie",
          sets: 4, reps: "15-30 sec", restSeconds: 60,
          muscles: "Core, Flessori dell'anca, Tricipiti, Addominali bassi",
          notes: "Due sedie affiancate, mani sui sedili. Pressa verso il basso con le braccia (spalle abbassate, non alzate). Gambe parallele al suolo, punta i piedi. Progressioni: ginocchia piegate → una gamba tesa → L-sit completo. Uno degli esercizi più efficaci per gli addominali bassi.",
          youtubeId: "IUZJoSP66HI"
        },
        {
          id: "sat_03",
          name: "Rollout con Manubri",
          sets: 3, reps: "8-12", restSeconds: 75,
          muscles: "Core completo, Dorsali, Spalle",
          notes: "Usa due manubri con basi rotonde come ruote. Dalle ginocchia, spingi i manubri in avanti estendendo il corpo il più possibile tenendo il core contratto. Tira indietro attivando i dorsali. Se i manubri non scivolano bene, fai la versione a mani nude su pavimento liscio.",
          youtubeId: "iFgOeNHMqGg"
        },
        {
          id: "sat_04",
          name: "Russian Twist con Manubrio",
          sets: 3, reps: "20-30 totali", restSeconds: 60,
          muscles: "Obliqui, Addominali trasversi",
          notes: "Seduto a terra, ginocchia piegate, schiena a 45°. Tieni il manubrio con entrambe le mani. Ruota il busto portando il peso da un lato all'altro. Per aumentare l'intensità: solleva i piedi dal pavimento. Gli obliqui sviluppati incorniciano la tartaruga e rendono la vita più stretta visivamente.",
          youtubeId: "wkD8rjkodUI"
        },
        {
          id: "sat_05",
          name: "Hollow Body Hold",
          sets: 3, reps: "20-40 sec", restSeconds: 60,
          muscles: "Addominali (trasverso), Core stabilizzatore",
          notes: "Sdraiato, schiena bassa INCOLLATA al pavimento. Braccia tese sopra la testa, gambe tese sollevate a 30-45cm. Il segreto: schiaccia attivamente la schiena bassa a terra — questo è il vero lavoro addominale, non solo tenere le gambe su. Progressione: gambe piegate → una gamba → entrambe tese.",
          youtubeId: "1bNHYqnRENs"
        },
        {
          id: "sat_06",
          name: "Crunch Inverso con Alzata del Bacino",
          sets: 3, reps: "15-20", restSeconds: 60,
          muscles: "Addominali bassi, Flessori dell'anca",
          notes: "Sdraiato, gambe perpendicolari al suolo. Solleva il bacino dal pavimento arrotolando la colonna vertebrale dal coccige in su — non buttare le gambe in avanti. Scendi lentamente. Per aumentare: tieni un manubrio leggero tra le caviglie.",
          youtubeId: "hyv14e7QEiY"
        },
        {
          id: "sat_07",
          name: "Mountain Climbers con Twist",
          sets: 3, reps: "30 sec", restSeconds: 60,
          muscles: "Core, Obliqui, Cardio metabolico",
          notes: "Posizione plank sulle mani. Porta il ginocchio destro verso il gomito sinistro e viceversa (con la rotazione del bacino). Ritmo sostenuto. Dopo tutte le serie di forza, questo eleva il battito cardiaco, brucia calorie e migliora la definizione degli addominali — finisci sempre con questo.",
          youtubeId: "nmwgirgXLYM"
        }
      ]
    },
    {
      id: 6,
      name: "Domenica",
      label: "Riposo totale",
      emoji: "🌟",
      color: "#64748b",
      isRest: true,
      restTips: [
        "Riposo totale meritato. Cinque allenamenti settimanali sono tanti — il corpo ha bisogno di questo giorno.",
        "Non pesarti ogni giorno. Una volta a settimana al mattino, stesso orario. Il vero progresso estetico si vede in 4-6 settimane.",
        "Rifletti sulla settimana: quali esercizi hai sentito di più? Dove puoi migliorare la forma? Annota nel diario.",
        "Prepara mentalmente la settimana prossima: visualizza gli allenamenti, prepara i pesi, la musica, il tappetino.",
        "Domenica è il giorno ideale per il meal prep: proteine preparate (pollo, uova, legumi) rendono molto più facile raggiungere il target proteico in settimana."
      ]
    }
  ]
};
