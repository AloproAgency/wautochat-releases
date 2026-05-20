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
    hero_docker_hint: 'VPS / Server:',
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
    inst_tab_docker: 'Server / VPS',

    inst_mac_title: 'Download for macOS',
    inst_mac_desc: 'Universal binary — runs natively on both Apple Silicon (M1/M2/M3) and Intel Macs.',
    inst_mac_arm: 'Apple Silicon (arm64)',
    inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Download the .dmg file',
    inst_mac_s2: 'Open it and drag WAutoChat to Applications',
    inst_mac_s3: 'Launch the app — scan your WhatsApp QR',

    inst_win_title: 'Download for Windows',
    inst_win_desc: 'NSIS installer — Windows 10 and Windows 11, x64 and arm64.',
    inst_win_btn: 'Download .exe installer',
    inst_win_s1: 'Download and run the',
    inst_win_s1_tail: 'installer',
    inst_win_s2: 'If Windows SmartScreen appears, click "More info → Run anyway"',
    inst_win_s3: 'Launch WAutoChat from the Start menu and scan your WhatsApp QR code',
    inst_win_winget_label: 'Via Windows Package Manager (winget):',

    inst_linux_title: 'Install on Linux',
    inst_linux_desc: 'Debian/Ubuntu — installs system-wide with icon in your application launcher and automatic updates via APT.',
    inst_linux_btn: 'Download .deb (amd64)',
    inst_linux_btn_arm64: 'Download .deb (arm64)',
    inst_linux_btn_appimage: 'Other Linux (.AppImage)',
    inst_linux_s1: 'Run the commands above to add the repository and install WAutoChat',
    inst_linux_s2: 'Future updates:',
    inst_linux_s3: 'Launch WAutoChat from your application menu and scan your WhatsApp QR code',
    inst_linux_note: 'Requires a graphical desktop environment. For headless VPS deployment, use the Server / VPS tab.',
    inst_linux_deb_alt: 'Or download the .deb package manually:',

    inst_docker_title: 'Deploy on your VPS',
    inst_docker_desc: 'One command installs Docker, configures HTTPS and starts WAutoChat on any Ubuntu or Debian server.',
    inst_docker_s1: 'Run the command above on a fresh Ubuntu or Debian VPS',
    inst_docker_s2: 'Enter your admin email and password when prompted',
    inst_docker_s3: 'Optionally enter a domain name — the script configures HTTPS automatically via Caddy',
    inst_docker_s4: 'Open your domain (or',
    inst_docker_s4b: ') and log in',
    inst_docker_advanced: 'Advanced — manual Docker Compose',
    inst_docker_deploy: 'Start WAutoChat',
    inst_docker_note: 'To update: re-run the install command — it detects an existing installation and pulls the latest image automatically.',

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
    hero_docker_hint: 'VPS / Serveur :',
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
    inst_tab_docker: 'Serveur / VPS',

    inst_mac_title: 'Télécharger pour macOS',
    inst_mac_desc: 'Binaire universel — fonctionne nativement sur Apple Silicon (M1/M2/M3) et Intel Mac.',
    inst_mac_arm: 'Apple Silicon (arm64)',
    inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Télécharger le fichier .dmg',
    inst_mac_s2: 'Ouvrez-le et glissez WAutoChat dans Applications',
    inst_mac_s3: 'Lancez l\'app — scannez votre QR WhatsApp',

    inst_win_title: 'Télécharger pour Windows',
    inst_win_desc: 'Installeur NSIS — Windows 10 et Windows 11, x64 et arm64.',
    inst_win_btn: 'Télécharger l\'installeur .exe',
    inst_win_s1: 'Téléchargez et lancez l\'',
    inst_win_s1_tail: 'installeur',
    inst_win_s2: 'Si Windows SmartScreen apparaît, cliquez "Plus d\'infos → Exécuter quand même"',
    inst_win_s3: 'Lancez WAutoChat depuis le menu Démarrer et scannez votre QR WhatsApp',
    inst_win_winget_label: 'Via Windows Package Manager (winget) :',

    inst_linux_title: 'Installer sur Linux',
    inst_linux_desc: 'Debian/Ubuntu — installation système avec icône dans le lanceur d\'applications et mises à jour automatiques via APT.',
    inst_linux_btn: 'Télécharger .deb (amd64)',
    inst_linux_btn_arm64: 'Télécharger .deb (arm64)',
    inst_linux_btn_appimage: 'Autre Linux (.AppImage)',
    inst_linux_s1: 'Exécutez les commandes ci-dessus pour ajouter le dépôt et installer WAutoChat',
    inst_linux_s2: 'Mises à jour futures :',
    inst_linux_s3: 'Lancez WAutoChat depuis le menu des applications et scannez votre QR WhatsApp',
    inst_linux_note: 'Nécessite un environnement de bureau graphique. Pour un VPS sans interface, utilisez l\'onglet Serveur / VPS.',
    inst_linux_deb_alt: 'Ou téléchargez le paquet .deb manuellement :',

    inst_docker_title: 'Déployer sur votre VPS',
    inst_docker_desc: 'Une commande installe Docker, configure le HTTPS et démarre WAutoChat sur n\'importe quel serveur Ubuntu ou Debian.',
    inst_docker_s1: 'Exécutez la commande ci-dessus sur un nouveau VPS Ubuntu ou Debian',
    inst_docker_s2: 'Entrez votre email et mot de passe admin à l\'invite',
    inst_docker_s3: 'Entrez un nom de domaine — le script configure le HTTPS automatiquement via Caddy',
    inst_docker_s4: 'Ouvrez votre domaine (ou',
    inst_docker_s4b: ') et connectez-vous',
    inst_docker_advanced: 'Avancé — Docker Compose manuel',
    inst_docker_deploy: 'Démarrer WAutoChat',
    inst_docker_note: 'Mise à jour : relancez la commande d\'installation — elle détecte une installation existante et tire la dernière image automatiquement.',

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
    hero_docker_hint: 'VPS / Servidor:',
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
    inst_tab_mac: 'macOS', inst_tab_win: 'Windows', inst_tab_linux: 'Linux', inst_tab_docker: 'Servidor / VPS',

    inst_mac_title: 'Descargar para macOS',
    inst_mac_desc: 'Binario universal — funciona nativamente en Apple Silicon (M1/M2/M3) y Mac Intel.',
    inst_mac_arm: 'Apple Silicon (arm64)', inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Descarga el archivo .dmg',
    inst_mac_s2: 'Ábrelo y arrastra WAutoChat a Aplicaciones',
    inst_mac_s3: 'Lanza la app — escanea tu QR de WhatsApp',

    inst_win_title: 'Descargar para Windows',
    inst_win_desc: 'Instalador NSIS — Windows 10 y Windows 11, x64 y arm64.',
    inst_win_btn: 'Descargar instalador .exe',
    inst_win_s1: 'Descarga y ejecuta el',
    inst_win_s1_tail: 'instalador',
    inst_win_s2: 'Si aparece Windows SmartScreen, haz clic en "Más información → Ejecutar de todas formas"',
    inst_win_s3: 'Lanza WAutoChat desde el menú de inicio y escanea tu QR de WhatsApp',
    inst_win_winget_label: 'Via Windows Package Manager (winget):',

    inst_linux_title: 'Instalar en Linux',
    inst_linux_desc: 'Debian/Ubuntu — instalación en todo el sistema con icono en el lanzador de aplicaciones y actualizaciones automáticas vía APT.',
    inst_linux_btn: 'Descargar .deb (amd64)',
    inst_linux_btn_arm64: 'Descargar .deb (arm64)',
    inst_linux_btn_appimage: 'Otro Linux (.AppImage)',
    inst_linux_s1: 'Ejecuta los comandos anteriores para añadir el repositorio e instalar WAutoChat',
    inst_linux_s2: 'Actualizaciones futuras:',
    inst_linux_s3: 'Abre WAutoChat desde el menú de aplicaciones y escanea tu QR de WhatsApp',
    inst_linux_note: 'Requiere un entorno de escritorio gráfico. Para VPS sin pantalla, usa la pestaña Servidor / VPS.',
    inst_linux_deb_alt: 'O descarga el paquete .deb manualmente:',

    inst_docker_title: 'Desplegar en tu VPS',
    inst_docker_desc: 'Un solo comando instala Docker, configura HTTPS e inicia WAutoChat en cualquier servidor Ubuntu o Debian.',
    inst_docker_s1: 'Ejecuta el comando anterior en un VPS Ubuntu o Debian nuevo',
    inst_docker_s2: 'Introduce tu email y contraseña de administrador cuando se solicite',
    inst_docker_s3: 'Opcionalmente, introduce un dominio — el script configura HTTPS automáticamente vía Caddy',
    inst_docker_s4: 'Abre tu dominio (o',
    inst_docker_s4b: ') e inicia sesión',
    inst_docker_advanced: 'Avanzado — Docker Compose manual',
    inst_docker_deploy: 'Iniciar WAutoChat',
    inst_docker_note: 'Para actualizar: vuelve a ejecutar el comando de instalación — detecta una instalación existente y descarga la última imagen automáticamente.',

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
    hero_docker_hint: 'VPS / Servidor:',
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
    inst_tab_mac: 'macOS', inst_tab_win: 'Windows', inst_tab_linux: 'Linux', inst_tab_docker: 'Servidor / VPS',

    inst_mac_title: 'Baixar para macOS',
    inst_mac_desc: 'Binário universal — funciona nativamente no Apple Silicon (M1/M2/M3) e Mac Intel.',
    inst_mac_arm: 'Apple Silicon (arm64)', inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: 'Baixe o arquivo .dmg',
    inst_mac_s2: 'Abra e arraste WAutoChat para Aplicativos',
    inst_mac_s3: 'Abra o app — escaneie o QR do WhatsApp',

    inst_win_title: 'Baixar para Windows',
    inst_win_desc: 'Instalador NSIS — Windows 10 e Windows 11, x64 e arm64.',
    inst_win_btn: 'Baixar instalador .exe',
    inst_win_s1: 'Baixe e execute o',
    inst_win_s1_tail: 'instalador',
    inst_win_s2: 'Se o Windows SmartScreen aparecer, clique em "Mais informações → Executar assim mesmo"',
    inst_win_s3: 'Abra o WAutoChat pelo menu Iniciar e escaneie o QR do WhatsApp',
    inst_win_winget_label: 'Via Windows Package Manager (winget):',

    inst_linux_title: 'Instalar no Linux',
    inst_linux_desc: 'Debian/Ubuntu — instalação no sistema com ícone no lançador de aplicativos e atualizações automáticas via APT.',
    inst_linux_btn: 'Baixar .deb (amd64)',
    inst_linux_btn_arm64: 'Baixar .deb (arm64)',
    inst_linux_btn_appimage: 'Outro Linux (.AppImage)',
    inst_linux_s1: 'Execute os comandos acima para adicionar o repositório e instalar o WAutoChat',
    inst_linux_s2: 'Atualizações futuras:',
    inst_linux_s3: 'Abra o WAutoChat pelo menu de aplicativos e escaneie o QR do WhatsApp',
    inst_linux_note: 'Requer um ambiente de desktop gráfico. Para VPS sem interface, use a aba Servidor / VPS.',
    inst_linux_deb_alt: 'Ou baixe o pacote .deb manualmente:',

    inst_docker_title: 'Implantar no seu VPS',
    inst_docker_desc: 'Um comando instala o Docker, configura o HTTPS e inicia o WAutoChat em qualquer servidor Ubuntu ou Debian.',
    inst_docker_s1: 'Execute o comando acima em um VPS Ubuntu ou Debian novo',
    inst_docker_s2: 'Insira seu email e senha de administrador quando solicitado',
    inst_docker_s3: 'Opcionalmente, insira um domínio — o script configura o HTTPS automaticamente via Caddy',
    inst_docker_s4: 'Abra seu domínio (ou',
    inst_docker_s4b: ') e faça login',
    inst_docker_advanced: 'Avançado — Docker Compose manual',
    inst_docker_deploy: 'Iniciar WAutoChat',
    inst_docker_note: 'Para atualizar: execute novamente o comando de instalação — ele detecta uma instalação existente e baixa a imagem mais recente automaticamente.',

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
    hero_docker_hint: 'VPS / Sunucu:',
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
    inst_tab_mac: 'macOS', inst_tab_win: 'Windows', inst_tab_linux: 'Linux', inst_tab_docker: 'Sunucu / VPS',

    inst_mac_title: 'macOS için İndir',
    inst_mac_desc: 'Evrensel ikili — Apple Silicon (M1/M2/M3) ve Intel Mac\'lerde doğal olarak çalışır.',
    inst_mac_arm: 'Apple Silicon (arm64)', inst_mac_x64: 'Intel (x64)',
    inst_mac_s1: '.dmg dosyasını indirin',
    inst_mac_s2: 'Açın ve WAutoChat\'ı Uygulamalar\'a sürükleyin',
    inst_mac_s3: 'Uygulamayı başlatın — WhatsApp QR\'ınızı tarayın',

    inst_win_title: 'Windows için İndir',
    inst_win_desc: 'NSIS yükleyici — Windows 10 ve Windows 11, x64 ve arm64.',
    inst_win_btn: '.exe yükleyiciyi indir',
    inst_win_s1: 'İndirin ve çalıştırın:',
    inst_win_s1_tail: 'yükleyici',
    inst_win_s2: 'Windows SmartScreen görünürse, "Daha fazla bilgi → Yine de çalıştır"a tıklayın',
    inst_win_s3: 'WAutoChat\'ı Başlat menüsünden başlatın ve WhatsApp QR kodunuzu tarayın',
    inst_win_winget_label: 'Windows Paket Yöneticisi (winget) ile:',

    inst_linux_title: 'Linux\'a Kur',
    inst_linux_desc: 'Debian/Ubuntu — uygulama başlatıcınızda simgesiyle birlikte sistem genelinde kurulur ve APT aracılığıyla otomatik güncelleme alır.',
    inst_linux_btn: '.deb İndir (amd64)',
    inst_linux_btn_arm64: '.deb İndir (arm64)',
    inst_linux_btn_appimage: 'Diğer Linux (.AppImage)',
    inst_linux_s1: 'Depoyu eklemek ve WAutoChat\'ı kurmak için yukarıdaki komutları çalıştırın',
    inst_linux_s2: 'Gelecek güncellemeler:',
    inst_linux_s3: 'WAutoChat\'ı uygulama menüsünden başlatın ve WhatsApp QR kodunuzu tarayın',
    inst_linux_note: 'Grafik masaüstü ortamı gerektirir. Arayüzsüz VPS için Sunucu / VPS sekmesini kullanın.',
    inst_linux_deb_alt: 'Veya .deb paketini manuel olarak indirin:',

    inst_docker_title: 'VPS\'inize Kurun',
    inst_docker_desc: 'Tek bir komut Docker\'ı kurar, HTTPS\'i yapılandırır ve herhangi bir Ubuntu veya Debian sunucusunda WAutoChat\'ı başlatır.',
    inst_docker_s1: 'Yukarıdaki komutu yeni bir Ubuntu veya Debian VPS\'te çalıştırın',
    inst_docker_s2: 'İstendiğinde yönetici e-posta ve şifrenizi girin',
    inst_docker_s3: 'İsteğe bağlı olarak bir alan adı girin — komut Caddy aracılığıyla HTTPS\'i otomatik yapılandırır',
    inst_docker_s4: 'Alan adınızı (veya',
    inst_docker_s4b: ') açın ve giriş yapın',
    inst_docker_advanced: 'Gelişmiş — manuel Docker Compose',
    inst_docker_deploy: 'WAutoChat\'ı Başlat',
    inst_docker_note: 'Güncelleme için: komutu yeniden çalıştırın — mevcut kurumu tespit eder ve en son imajı otomatik olarak indirir.',

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
