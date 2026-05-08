const TRANSLATIONS = {
  en: {
    nav_features: 'Features',
    nav_screenshots: 'Screenshots',
    nav_install: 'Install',
    nav_download: 'Download',
    hero_badge: 'Latest release',
    hero_title_1: 'Automate every WhatsApp conversation.',
    hero_title_2: 'At any scale.',
    hero_sub: 'WAutoChat centralizes your sessions, orchestrates AI-powered conversation flows, runs broadcast campaigns and keeps your data on your own infrastructure.',
    hero_dl_mac: 'Download for macOS',
    hero_dl_win: 'Download for Windows',
    hero_dl_linux: 'Download for Linux',
    hero_all: 'All platforms →',
    hero_docker_hint: 'Or deploy with Docker:',
    hero_screenshot_alt: 'App screenshot coming soon',

    stat_1_val: 'Multi-session',
    stat_1_lbl: 'Run several WhatsApp accounts simultaneously',
    stat_2_val: 'AI-powered',
    stat_2_lbl: 'GPT-4, Claude, Gemini — your choice',
    stat_3_val: 'Self-hosted',
    stat_3_lbl: 'Your data, your server, full control',
    stat_4_val: 'Open source',
    stat_4_lbl: 'Inspect, extend, contribute',

    feat_label: 'Features',
    feat_title: 'Everything you need to automate WhatsApp',
    feat_sub: 'Built for teams, solopreneurs and developers who need reliable WhatsApp automation without complexity.',
    feat_1_title: 'Multi-session management',
    feat_1_desc: 'Connect and manage multiple WhatsApp accounts from a single interface. Switch between sessions instantly without logging out.',
    feat_2_title: 'Visual Flow Builder',
    feat_2_desc: 'Design conversation flows with a drag-and-drop editor. Build chatbots, lead funnels and support trees without writing code.',
    feat_3_title: 'AI Integration',
    feat_3_desc: 'Connect GPT-4, Claude, Gemini or any OpenAI-compatible API. Let AI handle conversations, classify intents and generate replies.',
    feat_4_title: 'Broadcast Campaigns',
    feat_4_desc: 'Send personalized messages to thousands of contacts with smart delays to avoid bans. Track delivery and read rates in real time.',
    feat_5_title: 'Contact & CRM',
    feat_5_desc: 'Sync contacts, assign labels, track conversations and manage your customer base — all in one place without third-party tools.',
    feat_6_title: 'Desktop app + Self-hosted Docker',
    feat_6_desc: 'Run as a native desktop app on macOS, Windows and Linux — or deploy as a Docker container on your own VPS with one command. Your data never leaves your infrastructure.',

    ss_label: 'Screenshots',
    ss_title: 'See it in action',
    ss_cap_1: 'Main dashboard with full session overview',
    ss_cap_2: 'Visual flow builder for automation',
    ss_cap_3: 'Broadcast campaign manager',
    ss_cap_4: 'Multi-account WhatsApp sessions',
    ss_cap_5: 'Detailed node configuration',
    ss_cap_6: 'Built-in product catalogue',
    ss_cap_7: 'Unified business workspace — products & collections',
    ss_cap_8: 'No-code customisable database',
    ss_cap_9: 'Settings and license at a glance',

    inst_label: 'Installation',
    inst_title: 'Get started in minutes',
    inst_sub: 'Choose the installation method that fits your workflow.',
    inst_tab_mac: 'macOS',
    inst_tab_win: 'Windows',
    inst_tab_linux: 'Linux',
    inst_tab_docker: 'Docker',

    inst_mac_title: 'Download for macOS',
    inst_mac_desc: 'Universal binary — runs natively on both Apple Silicon (M1/M2/M3) and Intel Macs.',
    inst_mac_arm: 'Apple Silicon (arm64)',
    inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Download the .dmg file',
    inst_mac_s2: 'Open it and drag WAutoChat to Applications',
    inst_mac_s3: 'Launch the app — scan your WhatsApp QR',

    inst_win_title: 'Download for Windows',
    inst_win_desc: 'NSIS installer — supports Windows 10 and Windows 11 (x64).',
    inst_win_btn: 'Download .exe',
    inst_win_s1: 'Download and run the .exe installer',
    inst_win_s2: 'If Windows SmartScreen appears, click "More info → Run anyway"',
    inst_win_s3: 'Launch WAutoChat and connect your WhatsApp',

    inst_linux_title: 'Download for Linux',
    inst_linux_desc: 'Debian package (.deb) — recommended for Ubuntu and Debian. Installs system-wide with icon in your application launcher.',
    inst_linux_btn: 'Download .deb (amd64)',
    inst_linux_btn_arm64: 'Download .deb (arm64)',
    inst_linux_btn_appimage: 'Other Linux (.AppImage)',
    inst_linux_s1: 'Download the .deb package',
    inst_linux_s3: 'Launch WAutoChat from your application menu and scan your WhatsApp QR code',

    inst_docker_title: 'Self-host with Docker',
    inst_docker_desc: 'Deploy WAutoChat on your own server in one command. Includes automatic updates via Watchtower.',
    inst_docker_deploy: 'Deploy WAutoChat in one command',
    inst_docker_note: 'Watchtower checks for a new image every hour and restarts the container automatically.',

    cta_title: 'Ready to automate?',
    cta_sub: 'Download WAutoChat and connect your first WhatsApp session in under 2 minutes.',
    cta_btn: 'Get started for free',
    cta_releases: 'View all releases →',
    cta_version: 'Current release:',

    footer_releases: 'Releases',
    footer_issues: 'Issues',
  },

  fr: {
    nav_features: 'Fonctionnalités',
    nav_screenshots: 'Captures',
    nav_install: 'Installer',
    nav_download: 'Télécharger',
    hero_badge: 'Dernière version',
    hero_title_1: 'Automatisez chaque conversation WhatsApp.',
    hero_title_2: 'À toute échelle.',
    hero_sub: 'WAutoChat centralise vos sessions, orchestre des flux de conversation alimentés par l\'IA, pilote vos campagnes de diffusion et garde vos données sur votre propre infrastructure.',
    hero_dl_mac: 'Télécharger pour macOS',
    hero_dl_win: 'Télécharger pour Windows',
    hero_dl_linux: 'Télécharger pour Linux',
    hero_all: 'Toutes les plateformes →',
    hero_docker_hint: 'Ou déployer avec Docker :',
    hero_screenshot_alt: 'Capture d\'écran à venir',

    stat_1_val: 'Multi-session',
    stat_1_lbl: 'Gérez plusieurs comptes WhatsApp simultanément',
    stat_2_val: 'Propulsé par l\'IA',
    stat_2_lbl: 'GPT-4, Claude, Gemini — à votre choix',
    stat_3_val: 'Auto-hébergé',
    stat_3_lbl: 'Vos données, votre serveur, contrôle total',
    stat_4_val: 'Open source',
    stat_4_lbl: 'Inspectez, étendez, contribuez',

    feat_label: 'Fonctionnalités',
    feat_title: 'Tout ce dont vous avez besoin pour automatiser WhatsApp',
    feat_sub: 'Conçu pour les équipes, les solopreneurs et les développeurs qui ont besoin d\'une automatisation WhatsApp fiable sans complexité.',
    feat_1_title: 'Gestion multi-session',
    feat_1_desc: 'Connectez et gérez plusieurs comptes WhatsApp depuis une interface unique. Changez de session instantanément sans vous déconnecter.',
    feat_2_title: 'Éditeur de flux visuel',
    feat_2_desc: 'Concevez des flux de conversation avec un éditeur drag-and-drop. Créez des chatbots, entonnoirs de leads et arbres de support sans écrire de code.',
    feat_3_title: 'Intégration IA',
    feat_3_desc: 'Connectez GPT-4, Claude, Gemini ou toute API compatible OpenAI. Laissez l\'IA gérer les conversations, classer les intentions et générer des réponses.',
    feat_4_title: 'Campagnes de diffusion',
    feat_4_desc: 'Envoyez des messages personnalisés à des milliers de contacts avec des délais intelligents pour éviter les bannissements. Suivez les taux de livraison en temps réel.',
    feat_5_title: 'Contacts & CRM',
    feat_5_desc: 'Synchronisez les contacts, assignez des étiquettes, suivez les conversations et gérez votre base clients — le tout au même endroit.',
    feat_6_title: 'App desktop + Docker auto-hébergé',
    feat_6_desc: 'Lancez comme une app native sur macOS, Windows et Linux — ou déployez en tant que conteneur Docker sur votre propre VPS en une commande.',

    ss_label: 'Captures d\'écran',
    ss_title: 'Voyez-le en action',
    ss_cap_1: 'Tableau de bord principal avec vue des sessions',
    ss_cap_2: 'Éditeur de flux visuel pour l\'automatisation',
    ss_cap_3: 'Gestionnaire de campagnes de diffusion',
    ss_cap_4: 'Sessions WhatsApp multi-comptes',
    ss_cap_5: 'Configuration détaillée des nœuds du flux',
    ss_cap_6: 'Catalogue produits intégré',
    ss_cap_7: 'Espace business unifié — produits & collections',
    ss_cap_8: 'Base de données no-code personnalisable',
    ss_cap_9: 'Paramètres et licence en un coup d\'œil',

    inst_label: 'Installation',
    inst_title: 'Démarrez en quelques minutes',
    inst_sub: 'Choisissez la méthode d\'installation qui correspond à votre workflow.',
    inst_tab_mac: 'macOS',
    inst_tab_win: 'Windows',
    inst_tab_linux: 'Linux',
    inst_tab_docker: 'Docker',

    inst_mac_title: 'Télécharger pour macOS',
    inst_mac_desc: 'Binaire universel — fonctionne nativement sur Apple Silicon (M1/M2/M3) et Intel Mac.',
    inst_mac_arm: 'Apple Silicon (arm64)',
    inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Télécharger le fichier .dmg',
    inst_mac_s2: 'Ouvrez-le et glissez WAutoChat dans Applications',
    inst_mac_s3: 'Lancez l\'app — scannez votre QR WhatsApp',

    inst_win_title: 'Télécharger pour Windows',
    inst_win_desc: 'Installeur NSIS — supporte Windows 10 et Windows 11 (x64).',
    inst_win_btn: 'Télécharger .exe',
    inst_win_s1: 'Téléchargez et lancez l\'installeur .exe',
    inst_win_s2: 'Si Windows SmartScreen apparaît, cliquez "Plus d\'infos → Exécuter quand même"',
    inst_win_s3: 'Lancez WAutoChat et connectez votre WhatsApp',

    inst_linux_title: 'Télécharger pour Linux',
    inst_linux_desc: 'Paquet Debian (.deb) — recommandé pour Ubuntu et Debian. S\'installe avec icône dans le menu des applications.',
    inst_linux_btn: 'Télécharger .deb (amd64)',
    inst_linux_btn_arm64: 'Télécharger .deb (arm64)',
    inst_linux_btn_appimage: 'Autre Linux (.AppImage)',
    inst_linux_s1: 'Télécharger le paquet .deb',
    inst_linux_s3: 'Lancez WAutoChat depuis le menu des applications et scannez votre QR WhatsApp',

    inst_docker_title: 'Auto-hébergement avec Docker',
    inst_docker_desc: 'Déployez WAutoChat sur votre propre serveur en une commande. Inclut les mises à jour automatiques via Watchtower.',
    inst_docker_deploy: 'Déployez WAutoChat en une commande',
    inst_docker_note: 'Watchtower vérifie une nouvelle image toutes les heures et redémarre le conteneur automatiquement.',

    cta_title: 'Prêt à automatiser ?',
    cta_sub: 'Téléchargez WAutoChat et connectez votre première session WhatsApp en moins de 2 minutes.',
    cta_btn: 'Commencer gratuitement',
    cta_releases: 'Voir toutes les versions →',
    cta_version: 'Version actuelle :',

    footer_releases: 'Versions',
    footer_issues: 'Problèmes',
  },

  es: {
    nav_features: 'Funciones',
    nav_screenshots: 'Capturas',
    nav_install: 'Instalar',
    nav_download: 'Descargar',
    hero_badge: 'Última versión',
    hero_title_1: 'Automatiza cada conversación de WhatsApp.',
    hero_title_2: 'A cualquier escala.',
    hero_sub: 'WAutoChat centraliza tus sesiones, orquesta flujos de conversación con IA, gestiona tus campañas de difusión y mantiene tus datos en tu propia infraestructura.',
    hero_dl_mac: 'Descargar para macOS',
    hero_dl_win: 'Descargar para Windows',
    hero_dl_linux: 'Descargar para Linux',
    hero_all: 'Todas las plataformas →',
    hero_docker_hint: 'O desplegar con Docker:',
    hero_screenshot_alt: 'Captura de pantalla próximamente',

    stat_1_val: 'Multi-sesión',
    stat_1_lbl: 'Gestiona varias cuentas de WhatsApp simultáneamente',
    stat_2_val: 'Con IA',
    stat_2_lbl: 'GPT-4, Claude, Gemini — tú eliges',
    stat_3_val: 'Auto-alojado',
    stat_3_lbl: 'Tus datos, tu servidor, control total',
    stat_4_val: 'Código abierto',
    stat_4_lbl: 'Inspecciona, amplía, contribuye',

    feat_label: 'Funciones',
    feat_title: 'Todo lo que necesitas para automatizar WhatsApp',
    feat_sub: 'Diseñado para equipos, solopreneurs y desarrolladores que necesitan automatización de WhatsApp confiable sin complejidad.',
    feat_1_title: 'Gestión multi-sesión',
    feat_1_desc: 'Conecta y gestiona múltiples cuentas de WhatsApp desde una sola interfaz. Cambia entre sesiones al instante sin cerrar sesión.',
    feat_2_title: 'Constructor de flujos visual',
    feat_2_desc: 'Diseña flujos de conversación con un editor drag-and-drop. Crea chatbots, embudos de ventas y árboles de soporte sin escribir código.',
    feat_3_title: 'Integración de IA',
    feat_3_desc: 'Conecta GPT-4, Claude, Gemini o cualquier API compatible con OpenAI. Deja que la IA gestione conversaciones, clasifique intenciones y genere respuestas.',
    feat_4_title: 'Campañas de difusión',
    feat_4_desc: 'Envía mensajes personalizados a miles de contactos con retrasos inteligentes para evitar bloqueos. Monitorea las tasas de entrega en tiempo real.',
    feat_5_title: 'Contactos & CRM',
    feat_5_desc: 'Sincroniza contactos, asigna etiquetas, rastrea conversaciones y gestiona tu base de clientes — todo en un solo lugar.',
    feat_6_title: 'App de escritorio + Docker auto-alojado',
    feat_6_desc: 'Ejecuta como app nativa en macOS, Windows y Linux — o despliega como contenedor Docker en tu propio VPS con un comando.',

    ss_label: 'Capturas de pantalla',
    ss_title: 'Míralo en acción',
    ss_cap_1: 'Panel principal con resumen de sesiones',
    ss_cap_2: 'Constructor de flujos visual para automatización',
    ss_cap_3: 'Gestor de campañas de difusión',
    ss_cap_4: 'Sesiones de WhatsApp multi-cuenta',
    ss_cap_5: 'Configuración detallada de los nodos',
    ss_cap_6: 'Catálogo de productos integrado',
    ss_cap_7: 'Espacio business unificado — productos y colecciones',
    ss_cap_8: 'Base de datos no-code personalizable',
    ss_cap_9: 'Ajustes y licencia de un vistazo',

    inst_label: 'Instalación',
    inst_title: 'Empieza en minutos',
    inst_sub: 'Elige el método de instalación que se adapte a tu flujo de trabajo.',
    inst_tab_mac: 'macOS', inst_tab_win: 'Windows', inst_tab_linux: 'Linux', inst_tab_docker: 'Docker',

    inst_mac_title: 'Descargar para macOS',
    inst_mac_desc: 'Binario universal — funciona nativamente en Apple Silicon (M1/M2/M3) y Mac Intel.',
    inst_mac_arm: 'Apple Silicon (arm64)', inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Descarga el archivo .dmg',
    inst_mac_s2: 'Ábrelo y arrastra WAutoChat a Aplicaciones',
    inst_mac_s3: 'Lanza la app — escanea tu QR de WhatsApp',

    inst_win_title: 'Descargar para Windows',
    inst_win_desc: 'Instalador NSIS — compatible con Windows 10 y Windows 11 (x64).',
    inst_win_btn: 'Descargar .exe',
    inst_win_s1: 'Descarga y ejecuta el instalador .exe',
    inst_win_s2: 'Si aparece Windows SmartScreen, haz clic en "Más información → Ejecutar de todas formas"',
    inst_win_s3: 'Lanza WAutoChat y conecta tu WhatsApp',

    inst_linux_title: 'Descargar para Linux',
    inst_linux_desc: 'Paquete Debian (.deb) — recomendado para Ubuntu y Debian. Se instala con icono en el lanzador de aplicaciones.',
    inst_linux_btn: 'Descargar .deb (amd64)',
    inst_linux_btn_arm64: 'Descargar .deb (arm64)',
    inst_linux_btn_appimage: 'Otro Linux (.AppImage)',
    inst_linux_s1: 'Descarga el paquete .deb',
    inst_linux_s3: 'Abre WAutoChat desde el menú de aplicaciones y escanea tu QR de WhatsApp',

    inst_docker_title: 'Auto-alojar con Docker',
    inst_docker_desc: 'Despliega WAutoChat en tu propio servidor con un comando. Incluye actualizaciones automáticas vía Watchtower.',
    inst_docker_deploy: 'Despliega WAutoChat en un comando',
    inst_docker_note: 'Watchtower comprueba una nueva imagen cada hora y reinicia el contenedor automáticamente.',

    cta_title: '¿Listo para automatizar?',
    cta_sub: 'Descarga WAutoChat y conecta tu primera sesión de WhatsApp en menos de 2 minutos.',
    cta_btn: 'Empezar gratis',
    cta_releases: 'Ver todas las versiones →',
    cta_version: 'Versión actual:',

    footer_releases: 'Versiones',
    footer_issues: 'Problemas',
  },

  pt: {
    nav_features: 'Funcionalidades',
    nav_screenshots: 'Capturas',
    nav_install: 'Instalar',
    nav_download: 'Baixar',
    hero_badge: 'Última versão',
    hero_title_1: 'Automatize cada conversa no WhatsApp.',
    hero_title_2: 'Em qualquer escala.',
    hero_sub: 'WAutoChat centraliza suas sessões, orquestra fluxos de conversa com IA, executa suas campanhas de transmissão e mantém seus dados na sua própria infraestrutura.',
    hero_dl_mac: 'Baixar para macOS',
    hero_dl_win: 'Baixar para Windows',
    hero_dl_linux: 'Baixar para Linux',
    hero_all: 'Todas as plataformas →',
    hero_docker_hint: 'Ou implante com Docker:',
    hero_screenshot_alt: 'Captura de tela em breve',

    stat_1_val: 'Multi-sessão',
    stat_1_lbl: 'Execute várias contas do WhatsApp simultaneamente',
    stat_2_val: 'Com IA',
    stat_2_lbl: 'GPT-4, Claude, Gemini — sua escolha',
    stat_3_val: 'Auto-hospedado',
    stat_3_lbl: 'Seus dados, seu servidor, controle total',
    stat_4_val: 'Código aberto',
    stat_4_lbl: 'Inspecione, estenda, contribua',

    feat_label: 'Funcionalidades',
    feat_title: 'Tudo o que você precisa para automatizar o WhatsApp',
    feat_sub: 'Criado para equipes, solopreneurs e desenvolvedores que precisam de automação confiável do WhatsApp sem complexidade.',
    feat_1_title: 'Gestão multi-sessão',
    feat_1_desc: 'Conecte e gerencie múltiplas contas do WhatsApp em uma única interface. Troque de sessão instantaneamente sem sair.',
    feat_2_title: 'Construtor de fluxos visual',
    feat_2_desc: 'Projete fluxos de conversa com um editor drag-and-drop. Crie chatbots, funis de vendas e árvores de suporte sem escrever código.',
    feat_3_title: 'Integração de IA',
    feat_3_desc: 'Conecte GPT-4, Claude, Gemini ou qualquer API compatível com OpenAI. Deixe a IA gerenciar conversas, classificar intenções e gerar respostas.',
    feat_4_title: 'Campanhas de transmissão',
    feat_4_desc: 'Envie mensagens personalizadas para milhares de contatos com atrasos inteligentes para evitar banimentos. Acompanhe as taxas de entrega em tempo real.',
    feat_5_title: 'Contatos & CRM',
    feat_5_desc: 'Sincronize contatos, atribua etiquetas, acompanhe conversas e gerencie sua base de clientes — tudo em um só lugar.',
    feat_6_title: 'App desktop + Docker auto-hospedado',
    feat_6_desc: 'Execute como app nativo no macOS, Windows e Linux — ou implante como contêiner Docker no seu próprio VPS com um comando.',

    ss_label: 'Capturas de tela',
    ss_title: 'Veja em ação',
    ss_cap_1: 'Painel principal com visão geral das sessões',
    ss_cap_2: 'Construtor de fluxos visual para automação',
    ss_cap_3: 'Gerenciador de campanhas de transmissão',
    ss_cap_4: 'Sessões WhatsApp multi-contas',
    ss_cap_5: 'Configuração detalhada dos nós do fluxo',
    ss_cap_6: 'Catálogo de produtos integrado',
    ss_cap_7: 'Espaço business unificado — produtos e coleções',
    ss_cap_8: 'Base de dados no-code personalizável',
    ss_cap_9: 'Definições e licença num relance',

    inst_label: 'Instalação',
    inst_title: 'Comece em minutos',
    inst_sub: 'Escolha o método de instalação que se adapta ao seu fluxo de trabalho.',
    inst_tab_mac: 'macOS', inst_tab_win: 'Windows', inst_tab_linux: 'Linux', inst_tab_docker: 'Docker',

    inst_mac_title: 'Baixar para macOS',
    inst_mac_desc: 'Binário universal — funciona nativamente no Apple Silicon (M1/M2/M3) e Mac Intel.',
    inst_mac_arm: 'Apple Silicon (arm64)', inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Baixe o arquivo .dmg',
    inst_mac_s2: 'Abra e arraste WAutoChat para Aplicativos',
    inst_mac_s3: 'Abra o app — escaneie o QR do WhatsApp',

    inst_win_title: 'Baixar para Windows',
    inst_win_desc: 'Instalador NSIS — compatível com Windows 10 e Windows 11 (x64).',
    inst_win_btn: 'Baixar .exe',
    inst_win_s1: 'Baixe e execute o instalador .exe',
    inst_win_s2: 'Se o Windows SmartScreen aparecer, clique em "Mais informações → Executar assim mesmo"',
    inst_win_s3: 'Abra o WAutoChat e conecte seu WhatsApp',

    inst_linux_title: 'Baixar para Linux',
    inst_linux_desc: 'Pacote Debian (.deb) — recomendado para Ubuntu e Debian. Instala com ícone no lançador de aplicativos.',
    inst_linux_btn: 'Baixar .deb (amd64)',
    inst_linux_btn_arm64: 'Baixar .deb (arm64)',
    inst_linux_btn_appimage: 'Outro Linux (.AppImage)',
    inst_linux_s1: 'Baixe o pacote .deb',
    inst_linux_s3: 'Abra o WAutoChat pelo menu de aplicativos e escaneie o QR do WhatsApp',

    inst_docker_title: 'Auto-hospedar com Docker',
    inst_docker_desc: 'Implante o WAutoChat no seu próprio servidor com um comando. Inclui atualizações automáticas via Watchtower.',
    inst_docker_deploy: 'Implante o WAutoChat com um comando',
    inst_docker_note: 'O Watchtower verifica uma nova imagem a cada hora e reinicia o contêiner automaticamente.',

    cta_title: 'Pronto para automatizar?',
    cta_sub: 'Baixe o WAutoChat e conecte sua primeira sessão do WhatsApp em menos de 2 minutos.',
    cta_btn: 'Começar gratuitamente',
    cta_releases: 'Ver todas as versões →',
    cta_version: 'Versão atual:',

    footer_releases: 'Versões',
    footer_issues: 'Problemas',
  },

  tr: {
    nav_features: 'Özellikler',
    nav_screenshots: 'Ekran Görüntüleri',
    nav_install: 'Kur',
    nav_download: 'İndir',
    hero_badge: 'Son sürüm',
    hero_title_1: 'Her WhatsApp konuşmasını otomatikleştirin.',
    hero_title_2: 'Her ölçekte.',
    hero_sub: 'WAutoChat oturumlarınızı merkezi olarak yönetir, yapay zeka destekli konuşma akışları düzenler, yayın kampanyaları yürütür ve verilerinizi kendi altyapınızda güvende tutar.',
    hero_dl_mac: 'macOS için İndir',
    hero_dl_win: 'Windows için İndir',
    hero_dl_linux: 'Linux için İndir',
    hero_all: 'Tüm platformlar →',
    hero_docker_hint: 'Ya da Docker ile dağıtın:',
    hero_screenshot_alt: 'Ekran görüntüsü yakında',

    stat_1_val: 'Çoklu oturum',
    stat_1_lbl: 'Birden fazla WhatsApp hesabını aynı anda yönetin',
    stat_2_val: 'Yapay zeka destekli',
    stat_2_lbl: 'GPT-4, Claude, Gemini — sizin seçiminiz',
    stat_3_val: 'Kendi sunucunuzda',
    stat_3_lbl: 'Verileriniz, sunucunuz, tam kontrol',
    stat_4_val: 'Açık kaynak',
    stat_4_lbl: 'İnceleyin, genişletin, katkıda bulunun',

    feat_label: 'Özellikler',
    feat_title: 'WhatsApp\'ı otomatikleştirmek için ihtiyacınız olan her şey',
    feat_sub: 'Karmaşıklık olmadan güvenilir WhatsApp otomasyonuna ihtiyaç duyan ekipler, soloprenörler ve geliştiriciler için tasarlandı.',
    feat_1_title: 'Çoklu oturum yönetimi',
    feat_1_desc: 'Tek bir arayüzden birden fazla WhatsApp hesabını bağlayın ve yönetin. Oturumu kapatmadan anında geçiş yapın.',
    feat_2_title: 'Görsel akış oluşturucu',
    feat_2_desc: 'Sürükle-bırak editörüyle konuşma akışları tasarlayın. Kod yazmadan chatbot, satış hunisi ve destek ağaçları oluşturun.',
    feat_3_title: 'Yapay Zeka Entegrasyonu',
    feat_3_desc: 'GPT-4, Claude, Gemini veya herhangi bir OpenAI uyumlu API\'ye bağlanın. Yapay zekanın konuşmaları yönetmesine, niyetleri sınıflandırmasına ve yanıtlar üretmesine izin verin.',
    feat_4_title: 'Yayın kampanyaları',
    feat_4_desc: 'Yasaklanmayı önlemek için akıllı gecikmelerle binlerce kişiye kişiselleştirilmiş mesajlar gönderin. Teslimat oranlarını gerçek zamanlı takip edin.',
    feat_5_title: 'Kişiler & CRM',
    feat_5_desc: 'Kişileri senkronize edin, etiketler atayın, konuşmaları takip edin ve müşteri tabanınızı yönetin — hepsi tek bir yerde.',
    feat_6_title: 'Masaüstü uygulama + Kendi sunucunuzda Docker',
    feat_6_desc: 'macOS, Windows ve Linux\'ta yerel uygulama olarak çalıştırın — veya tek komutla kendi VPS\'inizde Docker konteyneri olarak dağıtın.',

    ss_label: 'Ekran Görüntüleri',
    ss_title: 'Çalışırken görün',
    ss_cap_1: 'Oturum genel bakışlı ana panel',
    ss_cap_2: 'Otomasyon için görsel akış oluşturucu',
    ss_cap_3: 'Yayın kampanyası yöneticisi',
    ss_cap_4: 'Çoklu hesap WhatsApp oturumları',
    ss_cap_5: 'Akış düğümlerinin detaylı yapılandırması',
    ss_cap_6: 'Entegre ürün kataloğu',
    ss_cap_7: 'Birleşik iş alanı — ürünler ve koleksiyonlar',
    ss_cap_8: 'Özelleştirilebilir no-code veritabanı',
    ss_cap_9: 'Ayarlar ve lisans tek bakışta',

    inst_label: 'Kurulum',
    inst_title: 'Dakikalar içinde başlayın',
    inst_sub: 'İş akışınıza uygun kurulum yöntemini seçin.',
    inst_tab_mac: 'macOS', inst_tab_win: 'Windows', inst_tab_linux: 'Linux', inst_tab_docker: 'Docker',

    inst_mac_title: 'macOS için İndir',
    inst_mac_desc: 'Evrensel ikili — Apple Silicon (M1/M2/M3) ve Intel Mac\'lerde doğal olarak çalışır.',
    inst_mac_arm: 'Apple Silicon (arm64)', inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: '.dmg dosyasını indirin',
    inst_mac_s2: 'Açın ve WAutoChat\'ı Uygulamalar\'a sürükleyin',
    inst_mac_s3: 'Uygulamayı başlatın — WhatsApp QR\'ınızı tarayın',

    inst_win_title: 'Windows için İndir',
    inst_win_desc: 'NSIS yükleyici — Windows 10 ve Windows 11 (x64) destekler.',
    inst_win_btn: '.exe İndir',
    inst_win_s1: '.exe yükleyicisini indirin ve çalıştırın',
    inst_win_s2: 'Windows SmartScreen görünürse, "Daha fazla bilgi → Yine de çalıştır"a tıklayın',
    inst_win_s3: 'WAutoChat\'ı başlatın ve WhatsApp\'ınızı bağlayın',

    inst_linux_title: 'Linux için İndir',
    inst_linux_desc: 'Debian paketi (.deb) — Ubuntu ve Debian için önerilir. Uygulama başlatıcınızda simgesiyle birlikte sistem genelinde kurulur.',
    inst_linux_btn: '.deb İndir (amd64)',
    inst_linux_btn_arm64: '.deb İndir (arm64)',
    inst_linux_btn_appimage: 'Diğer Linux (.AppImage)',
    inst_linux_s1: '.deb paketini indirin',
    inst_linux_s3: 'WAutoChat\'ı uygulama menüsünden başlatın ve WhatsApp QR kodunuzu tarayın',

    inst_docker_title: 'Docker ile kendi sunucunuzda barındırın',
    inst_docker_desc: 'WAutoChat\'ı tek komutla kendi sunucunuza dağıtın. Watchtower aracılığıyla otomatik güncellemeler içerir.',
    inst_docker_deploy: 'WAutoChat\'ı tek komutla dağıtın',
    inst_docker_note: 'Watchtower her saat yeni bir imaj olup olmadığını kontrol eder ve konteyneri otomatik olarak yeniden başlatır.',

    cta_title: 'Otomatikleştirmeye hazır mısınız?',
    cta_sub: 'WAutoChat\'ı indirin ve ilk WhatsApp oturumunuzu 2 dakikadan kısa sürede bağlayın.',
    cta_btn: 'Ücretsiz başlayın',
    cta_releases: 'Tüm sürümleri görün →',
    cta_version: 'Mevcut sürüm:',

    footer_releases: 'Sürümler',
    footer_issues: 'Sorunlar',
  },
};

const LANG_NAMES  = { en: 'English', fr: 'Français', es: 'Español', pt: 'Português', tr: 'Türkçe' };
// flag-icons country codes (fi fi-XX)
const LANG_FLAGS  = { en: 'gb', fr: 'fr', es: 'es', pt: 'br', tr: 'tr' };

function flagHTML(lang) {
  return `<span class="fi fi-${LANG_FLAGS[lang]}"></span>`;
}

function detectLang() {
  const stored = localStorage.getItem('wac-lang');
  if (stored && TRANSLATIONS[stored]) return stored;
  const browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
  return TRANSLATIONS[browser] ? browser : 'en';
}

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  // Update OS download button label
  const os = (window._detectedOS) || 'mac';
  const dlLabel = document.getElementById('hero-download-label');
  if (dlLabel) {
    const map = { mac: t.hero_dl_mac, windows: t.hero_dl_win, linux: t.hero_dl_linux };
    dlLabel.textContent = map[os] || t.hero_dl_mac;
  }
  localStorage.setItem('wac-lang', lang);
}

function buildLangSwitcher() {
  const nav = document.querySelector('.nav-inner');
  if (!nav) return;

  const current = detectLang();
  const wrapper = document.createElement('div');
  wrapper.className = 'lang-switcher';

  const btn = document.createElement('button');
  btn.className = 'lang-btn';
  btn.innerHTML = `${flagHTML(current)} <span>${LANG_NAMES[current]}</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;

  const dropdown = document.createElement('div');
  dropdown.className = 'lang-dropdown';

  Object.keys(TRANSLATIONS).forEach(lang => {
    const item = document.createElement('button');
    item.className = 'lang-item' + (lang === current ? ' active' : '');
    item.innerHTML = `${flagHTML(lang)} ${LANG_NAMES[lang]}`;
    item.addEventListener('click', () => {
      applyTranslations(lang);
      btn.innerHTML = `${flagHTML(lang)} <span>${LANG_NAMES[lang]}</span> <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>`;
      dropdown.querySelectorAll('.lang-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      dropdown.classList.remove('open');
    });
    dropdown.appendChild(item);
  });

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });
  document.addEventListener('click', () => dropdown.classList.remove('open'));

  wrapper.appendChild(btn);
  wrapper.appendChild(dropdown);

  // Insert before the download button
  const dlBtn = nav.querySelector('#nav-download');
  nav.insertBefore(wrapper, dlBtn);
}

function initI18n() {
  buildLangSwitcher();
  applyTranslations(detectLang());
}
