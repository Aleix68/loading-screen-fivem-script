const loadingScreenConfig = {
    defaultLocale: "es",
    locales: {
        es: {
            connection: {
                connecting: "CONECTANDO AL SERVIDOR",
                syncing: "SINCRONIZANDO SERVIDOR",
                online: "SERVIDOR ONLINE"
            },
            hero: {
                ariaLabel: "Estado de carga",
                eyebrow: "GO ROLEPLAY / LOS SANTOS",
                title: "Tu vida<br><em>empieza aquí.</em>",
                intro: "Una ciudad abierta. Tu personaje, tus reglas, tu legado.<br>Prepárate para entrar en GO Roleplay."
            },
            loading: {
                starting: "INICIANDO EXPERIENCIA",
                resources: "CARGANDO RECURSOS",
                ready: "EXPERIENCIA LISTA",
                syncing: "Sincronizando recursos del servidor...",
                initializing: "Inicializando entorno...",
                welcome: "Todo preparado. Bienvenido a la ciudad.",
                radioPrompt: "Pulsa reproducir para activar la radio."
            },
            visual: { ariaLabel: "Seleccionar imagen", archives: "GO ARCHIVES", imageAlt: "Escena de GO Roleplay" },
            footer: { tip: "TIP", nowPlaying: "REPRODUCIENDO", volume: "Volumen" },
            controls: { previous: "Canción anterior", play: "Reproducir música", pause: "Pausar música", next: "Siguiente canción" },
            tips: ["La ciudad se mueve contigo. Explora cada rincón.", "Las mejores historias empiezan con una decisión.", "Respeta la ciudad y la ciudad te respetará."]
        },
        en: {
            connection: { connecting: "CONNECTING TO SERVER", syncing: "SYNCING SERVER", online: "SERVER ONLINE" },
            hero: { ariaLabel: "Loading status", eyebrow: "GO ROLEPLAY / LOS SANTOS", title: "Your life<br><em>starts here.</em>", intro: "An open city. Your character, your rules, your legacy.<br>Get ready to enter GO Roleplay." },
            loading: { starting: "STARTING EXPERIENCE", resources: "LOADING RESOURCES", ready: "EXPERIENCE READY", syncing: "Synchronizing server resources...", initializing: "Initializing environment...", welcome: "All set. Welcome to the city.", radioPrompt: "Press play to activate the radio." },
            visual: { ariaLabel: "Select image", archives: "GO ARCHIVES", imageAlt: "GO Roleplay scene" },
            footer: { tip: "TIP", nowPlaying: "NOW PLAYING", volume: "Volume" },
            controls: { previous: "Previous song", play: "Play music", pause: "Pause music", next: "Next song" },
            tips: ["The city moves with you. Explore every corner.", "The best stories begin with a decision.", "Respect the city and the city will respect you."]
        },
        fr: {
            connection: { connecting: "CONNEXION AU SERVEUR", syncing: "SYNCHRONISATION DU SERVEUR", online: "SERVEUR EN LIGNE" },
            hero: { ariaLabel: "État du chargement", eyebrow: "GO ROLEPLAY / LOS SANTOS", title: "Votre vie<br><em>commence ici.</em>", intro: "Une ville ouverte. Votre personnage, vos règles, votre héritage.<br>Préparez-vous à entrer dans GO Roleplay." },
            loading: { starting: "DÉMARRAGE DE L'EXPÉRIENCE", resources: "CHARGEMENT DES RESSOURCES", ready: "EXPÉRIENCE PRÊTE", syncing: "Synchronisation des ressources du serveur...", initializing: "Initialisation de l'environnement...", welcome: "Tout est prêt. Bienvenue en ville.", radioPrompt: "Appuyez sur lecture pour activer la radio." },
            visual: { ariaLabel: "Sélectionner une image", archives: "GO ARCHIVES", imageAlt: "Scène de GO Roleplay" },
            footer: { tip: "ASTUCE", nowPlaying: "EN LECTURE", volume: "Volume" },
            controls: { previous: "Chanson précédente", play: "Lire la musique", pause: "Mettre en pause", next: "Chanson suivante" },
            tips: ["La ville avance avec vous. Explorez chaque recoin.", "Les meilleures histoires commencent par une décision.", "Respectez la ville et la ville vous respectera."]
        }
    },
    songs: [
        { title: "GO RADIO / AMBIENT 01", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "GO RADIO / NIGHT DRIVE", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "GO RADIO / SUNRISE FM", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ],
    images: [
        { title: "NIGHT SHIFT", url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=80" },
        { title: "CITY LIMITS", url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80" },
        { title: "AFTER HOURS", url: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80" }
    ]
};