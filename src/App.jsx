import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Settings, 
  FileText, 
  Mail, 
  ArrowLeft, 
  Layout, 
  ArrowUpRight, 
  Verified, 
  ClipboardCheck,
  Building2, 
  Rocket,
  Boxes,
  Monitor, 
  X, 
  Maximize2, 
  Award, 
  Rss, 
  Watch, 
  FlaskConical, 
  Globe, 
  Mic, 
  ChevronRight, 
  Zap, 
  Trophy 
} from 'lucide-react';

const COLORS = {
  blue:   { light: '#EFF6FF', mid: '#2563EB', text: '#1D4ED8', border: '#BFDBFE' },
  amber:  { light: '#FFFBEB', mid: '#D97706', text: '#B45309', border: '#FDE68A' },
  orange: { light: '#FFF7ED', mid: '#EA580C', text: '#C2410C', border: '#FED7AA' },
  green:  { light: '#F0FDF4', mid: '#16A34A', text: '#15803D', border: '#BBF7D0' },
};

const LOGOS = {
  jira: "https://cdn.simpleicons.org/jira/0052CC",
  confluence: "https://cdn.simpleicons.org/confluence/0052CC",
  figma: "https://cdn.simpleicons.org/figma/F24E1E",
  powerbi: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  sql: "https://cdn.simpleicons.org/mysql/4479A1",
  spiratest: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/logo-spiratest.png"
};

const projectsData = [
  {
    id: 1,
    num: '01',
    title: "Cadrage & Gestion Agile",
    sub: "JIRA & CONFLUENCE",
    platformLogos: [LOGOS.jira, LOGOS.confluence],
    color: 'blue',
    icon: Settings,
    tagline: "Alignement stratégique et priorisation du backlog — 6 User Stories documentées.",
    context: "SportDeal pilotait sa logistique via Excel. Cette étude de cas porte sur la phase de cadrage nécessaire à la migration vers un SI structuré sous méthodologie Agile Scrum.",
    mission: "Transformer les besoins métiers bruts en un backlog actionnable. J'ai animé le cadrage sur Confluence pour aligner les 3 parties prenantes clés (Logistique, Dev, Direction).",
    stats: [
      { val: '6', label: 'User Stories' },
      { val: '3', label: 'Stakeholders' },
      { val: '8', label: 'Agents formés' },
      { val: 'Agile', label: 'Méthodologie' }
    ],
    steps: [
      {
        title: "Note de cadrage — Confluence",
        desc: "Rédaction de la note de cadrage pour aligner les 3 parties prenantes clés (Responsable Logistique, Dev Lead, Direction) sur les objectifs métier, le périmètre et le planning macro.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2019-24-45%20Note%20de%20cadrage%20%E2%80%93%20Outil%20suivi%20commandes%20SportDeal%20-%20Marwan%20Mk%20-%20Confluence.png",
        points: ["3 objectifs métier : centralisation, SAV -40%, alertes", "Périmètre : IN (suivi, reporting) / OUT (stocks, CRM)", "Alignement Direction, Logistique & Technique"]
      },
      {
        title: "Product Backlog — 6 User Stories",
        desc: "Traduction des besoins des 8 agents logistiques en 6 User Stories (US) actionnables. Chaque ticket définit le 'Qui', le 'Quoi' et le 'Pourquoi'.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-28-17%20SportDeal%20%E2%80%93%20Suivi%20Commandes%20-%20Tous%20les%20tickets%20-%20Jira.png",
        points: [
          "US-01 : Consulter liste commandes (Highest)",
          "US-02 : Mettre à jour statut (Notif auto)",
          "US-03 : Recherche multi-critères (Performance < 2s)",
          "US-04 : Rapport hebdomadaire PDF/Excel",
          "US-05 : Alertes automatiques de retard",
          "US-06 : Historique SAV (12 mois glissants)"
        ]
      },
      {
        title: "Epic SCRUM-5 — Vision produit",
        desc: "L'ensemble des 6 User Stories a été regroupé sous l'Epic SCRUM-5 'Outil de suivi des commandes logistiques', reliée directement à la documentation Confluence.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-18-07%20SCRUM-5%20Outil%20de%20suivi%20des%20commandes%20logistiques%20-%20Jira.png",
        points: ["1 Epic fédératrice", "Lien bidirectionnel Jira ↔ Confluence", "Pilotage par le Product Owner"]
      },
      {
        title: "Scrum Board animé — Sprint 1",
        desc: "Lancement du premier sprint de 2 semaines. Animation du management visuel via le board à 5 colonnes pour piloter le flux de travail en temps réel.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-38-24%20SCRUM%20Sprint%200%20%E2%80%93%20SportDeal%20%E2%80%93%20Suivi%20Commandes%20%E2%80%93%20Tableau%20Scrum%20-%20Jira.png",
        points: ["Board 5 colonnes (To Do → Done)", "Simulation Sprint Planning", "Transparence totale SI"]
      },
      {
        title: "Détail User Story (US-01)",
        desc: "Zoom sur la US-01 : 'En tant qu'agent, je veux consulter la liste des commandes'. Documentation exhaustive du besoin.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-12-49%20SportDeal%20%E2%80%93%20Suivi%20Commandes%20-%20Tous%20les%20tickets%20-%20Jira.png",
        points: ["Documentation fine du besoin", "Priorité critique (Highest)", "Lien direct avec l'Epic mère"]
      },
      {
        title: "Dashboard & Reporting Direction",
        desc: "Suivi de l'avancement global via les rapports Jira (Burndown Chart). Communication transparente de la progression.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-18-07%20SCRUM-5%20Outil%20de%20suivi%20des%20commandes%20logistiques%20-%20Jira.png",
        points: ["Suivi de la vélocité", "Dashboard de pilotage Jira", "Alignement stratégique maintenu"]
      }
    ],
    results: ["Backlog 100% structuré", "Documentation complète et traçable", "Sprint 1 livré en 2 semaines"]
  },
  {
    id: 4,
    num: '02',
    title: "Gestion des Tests QA",
    sub: "SPIRATEST",
    platformLogos: [LOGOS.spiratest],
    color: 'green',
    icon: CheckCircle2,
    tagline: "Certification du module logistique — Validation des 6 US du Projet 01.",
    context: "Pour sécuriser le déploiement de SportDeal, une phase de recette fonctionnelle valide que les User Stories définies au Projet 01 sont techniquement conformes.",
    mission: "Piloter la qualité logicielle (QA) via la création d'une matrice de traçabilité et l'exécution de tests certifiant le 'Go Live' du module.",
    stats: [
      { val: '5', label: 'Exigences RQ' },
      { val: '100%', label: 'Couverture' },
      { val: 'Pass', label: 'Verdict' },
      { val: 'QA', label: 'Certifiée' }
    ],
    steps: [
      {
        title: "5 Exigences fonctionnelles — Requirements",
        desc: "Documentation des exigences fonctionnelles (Use Cases) dans SpiraTest, avec niveau de criticité métier correspondant directement au backlog Jira.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2020-27-22%20Exigences%20SpiraTest.png",
        points: ["RQ-789 Consulter commandes (Critical)", "Mapping exigences Jira ↔ SpiraTest", "Validation du périmètre par priorité"]
      },
      {
        title: "5 Cas de tests — Test Cases",
        desc: "Création des cas de tests fonctionnels (TC-290 à TC-294) liés aux exigences. Chaque test définit les étapes de vérification et résultats attendus.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2020-32-49%20Cas%20de%20test%20SpiraTest.png",
        points: ["TC-290 Affichage commandes", "TC-293 Alerte de retard", "Statut : Prêt pour le test"]
      },
      {
        title: "Matrice de traçabilité — TC ↔ RQ",
        desc: "Vérification du lien bidirectionnel entre le besoin métier et le test technique. Garantir que 100% du périmètre est couvert sans zone d'ombre.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/matrice-tracabilite-TC290.png",
        points: ["Couverture totale du backlog", "Lien Requirements ↔ Test Cases", "Zéro lacune technique identifiée"]
      },
      {
        title: "Exécution & Statut Réussi",
        desc: "Lancement du test run TC-290 (Consultation des commandes). Documentation du résultat effectif pour valider la mise en production.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2020-42-27%20Ex%C3%A9cution%20de%20cas%20de%20test%20SpiraTest.png",
        points: ["Verdict technique certifié", "PV de recette validé", "Module prêt pour production"]
      }
    ],
    results: ["Conformité SI 100% prouvée", "Risque Go-Live maîtrisé", "Certification Qualité Logicielle"]
  },
  {
    id: 3,
    num: '03',
    title: "Design de Solution UI",
    sub: "FIGMA",
    platformLogos: [LOGOS.figma],
    color: 'orange',
    icon: Layout,
    tagline: "Interface de pilotage interactive — Design orienté Action et référentiel pour la QA.",
    context: "Le projet SportDeal nécessite une interface capable de centraliser le pilotage. Ce prototype est le pont entre le cadrage et le développement.",
    mission: "Concevoir le prototype haute fidélité et le Design System pour valider l'UX et servir de référentiel visuel pour les tests SpiraTest.",
    stats: [
      { val: 'UX', label: 'Orienté Action' },
      { val: 'System', label: 'Design complet' },
      { val: 'QA', label: 'Référentiel' },
      { val: 'SI', label: 'Scalable' }
    ],
    steps: [
      {
        title: "Workspace & Design System Industriel",
        desc: "Structuration du projet via un Design System (Auto-layout, composants réutilisables) pour assurer la cohérence et la rapidité de maintenance SI.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/figma-workspace.png",
        points: [
          "Librairie de composants (Cards, Badges)", 
          "Réduction de l'ambiguïté technique pour les développeurs", 
          "Référentiel visuel pour la QA"
        ]
      },
      {
        title: "Tableau de Bord Stratégique",
        desc: "Centralisation des indicateurs clés (KPI) : Clients, Commandes et CA. Lecture instantanée de la santé du SI.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/dashboard-sportdeal.png",
        points: [
          "KPIs alignés sur le cahier des charges SportDeal",
          "Cohérence des données avec le rapport Power BI (154,36M€)",
          "Maquette validée comme référentiel de recette QA"
        ]
      }
    ],
    results: ["Validation MVP par Stakeholders", "Livrable de conception finalisé", "Réduction de l'ambiguïté technique"]
  },
  {
    id: 2,
    num: '04',
    title: "Solution de Reporting",
    sub: "POWER BI",
    platformLogos: [LOGOS.powerbi],
    color: 'amber',
    icon: BarChart3,
    tagline: "Cockpit décisionnel — Analyse de performance de 154M€ via Root Cause Analysis.",
    context: "Suite à une baisse de CA de -7,6% en 2019, SportDeal devait identifier l'origine du déclin via une analyse granulaire des données commerciales.",
    mission: "Transformer 3 ans d'historique en un cockpit décisionnel. Pilotage de l'ETL, modélisation en étoile et conception d'un outil de 'Root Cause Analysis'.",
    stats: [
      { val: '154M€', label: 'CA Analysé' },
      { val: '8', label: 'Visuels clés' },
      { val: '-7,6%', label: 'Baisse CA' },
      { val: '3', label: 'Ans Data' }
    ],
    steps: [
      {
        title: "Tableau de Bord Interactif",
        desc: "Démonstration du dashboard dynamique permettant d'explorer les indicateurs par région et canal en temps réel.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/ProjetPowerBI2026-04-0319-50-51-ezgif.com-resize.gif",
        points: ["Navigation dynamique", "Filtres interactifs", "Aperçu temps réel"]
      },
      {
        title: "Dashboard Suivi des Ventes",
        desc: "Conception d'une vue matricielle regroupant CA, Marges et Délais pour une lecture instantanée de la santé commerciale.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/jj.PNG",
        points: ["Calcul de KPIs en DAX", "Segmentation par canal", "Cartographie dynamique"]
      },
      {
        title: "Root Cause via Arbre IA",
        desc: "Isoler les facteurs de baisse fin 2019 via l'arbre de décomposition temporelle pour identifier les causes racines de la chute du CA.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/s2.PNG",
        points: ["Analyse drill-down", "Focus Q4 2019", "Aide à la décision IA"]
      }
    ],
    results: ["Diagnostic CA finalisé", "Modélisation Étoile validée", "Reporting automatisé"]
  }
];

const experiences = [
  { 
    title: 'Étude BI — Commerces de proximité', 
    period: 'Fév – Juil 2025', 
    desc: 'Modélisation de données et conception d\'un prototype de tableau de bord interactif sous Power BI pour optimiser la prise de décision stratégique.',
    metrics: '8 KPIs définis · Cadrage et stratégie pilotés en autonomie · Dashboard publié sur Power BI Service.'
  },
  { 
    title: 'Diagnostic organisationnel — UPEC', 
    period: 'Mars – Avr 2025', 
    desc: 'Analyse des résistances au changement et élaboration d\'une stratégie de digitalisation pour un système d\'apprentissage en ligne.',
    metrics: 'Plan de refonte des processus · Cartographie des parties prenantes · Livrables : note de cadrage + roadmap.'
  },
  { 
    title: 'Agent logistique — Intermarché Erbrée', 
    period: 'Déc 2022 – Jan 2026', 
    desc: 'Optimisation de la fluidité de la chaîne logistique automatisée et gestion de la traçabilité des produits via scanners en environnement haute cadence.',
    metrics: '~400 colis/jour · Missions saisonnières récurrentes · Respect strict des objectifs de productivité et qualité.'
  },
  { 
    title: 'Accompagnement pédagogique — HappySitters', 
    period: 'Sept 2024 – Avr 2025', 
    desc: 'Analyse des besoins individuels, élaboration de plans d\'action personnalisés et reporting régulier aux parties prenantes.',
    metrics: 'Gestion autonome du planning · Suivi structuré de la progression · Relation client directe.'
  },
];

const formation = [
  { 
    year: '2026–2027', 
    title: 'Master 2 Management & Transformation Digitale', 
    school: 'Faculté AEI — Université Paris XII (UPEC)', 
    note: 'Alternance Recherchée (Sept. 2026)', 
    highlight: true,
    subjects: ['Pilotage de la Transformation Digitale', 'Conduite du changement']
  },
  { 
    year: '2025–2026', 
    title: 'Master 1 Management & Transformation Digitale', 
    school: 'Faculté AEI — Université Paris XII (UPEC)', 
    note: 'En cours',
    subjects: ['Pilotage de projets SI', 'Méthodologies Agiles', 'Business Intelligence', 'Design UI/UX', 'Analyse de données', 'Sensibilité RGPD']
  },
  { 
    year: '2022–2025', 
    title: 'Licence Droit Économie Gestion', 
    school: 'Faculté AEI — Université Paris XII (UPEC)', 
    note: 'Parcours AGE — Mention',
    subjects: ['Management des SI', 'Comptabilité de gestion', 'Contrôle de gestion', 'Droit des affaires', 'Analyse financière', 'Marketing']
  }
];

const interests = [
  { title: "Veille Technologique", desc: "Suivi des tendances BI, IA et transformation digitale via podcasts et newsletters.", icon: Rss },
  { title: "Football", desc: "Passion pour la stratégie tactique, l'esprit de cohésion et l'analyse statistique des performances.", icon: Trophy },
  { title: "Parfumerie", desc: "Intérêt pour la composition olfactive et l'univers de l'industrie du luxe.", icon: FlaskConical },
  { title: "Voyages en immersion", desc: "Découverte de cultures et environnements internationaux (immersion linguistique).", icon: Globe },
  { title: "Podcasts Business", desc: "Écoute régulière de contenus sur la stratégie et la performance des organisations.", icon: Mic },
];

const SmartImage = ({ src, alt, className = "" }) => {
  const [error, setError] = useState(false);
  const fallback = "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1200";
  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group shadow-lg flex items-center justify-center ${className}`}>
      <img src={error ? fallback : src} alt={alt} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" onError={() => setError(true)} />
      {!error && (
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-2xl border border-green-400/50">
            <Verified size={14} /> Certifié
          </div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [view, setView] = useState('home');
  const [project, setProject] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [zoomImg, setZoomImg] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const goProject = (p) => { setProject(p); setView('detail'); window.scrollTo(0, 0); };
  const goHome = () => { setView('home'); window.scrollTo(0, 0); };

  const Lightbox = () => zoomImg ? (
    <div className="fixed inset-0 z-[250] bg-slate-900/98 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out" onClick={() => setZoomImg(null)}>
      <button className="absolute top-10 right-10 text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all"><X size={40} /></button>
      <div className="relative max-w-7xl w-full max-h-[85vh] flex flex-col items-center gap-8" onClick={e => e.stopPropagation()}>
        <img src={zoomImg.url} alt={zoomImg.title} className="w-full h-full object-contain rounded-2xl shadow-2xl border border-white/10" />
        <div className="flex items-center gap-4 bg-blue-600 px-10 py-4 rounded-full shadow-2xl">
          <Verified size={24} className="text-white" />
          <p className="text-white text-xl font-black uppercase tracking-widest">{zoomImg.title}</p>
        </div>
      </div>
    </div>
  ) : null;

  const Home = () => (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-28 pb-10 px-5 sm:pt-40 sm:pb-24 sm:px-10 lg:pt-48 lg:pb-32 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 sm:gap-20 lg:gap-32">
        <div className="flex-1 space-y-12">
          <div className="flex flex-col gap-4">
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest border border-blue-100 w-fit">
  <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping"></span>
  Recherche Alternance Master 2 — Septembre 2026
</div>
<div className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest w-fit">
  📅 3j Entreprise / 2j École
</div>
<div className="inline-flex items-center gap-3 bg-slate-50 text-slate-600 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest border border-slate-200 w-fit">
  <span className="w-2.5 h-2.5 bg-slate-400 rounded-full"></span>
  Sensibilité réglementaire : RGPD · RFE
</div>
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
            Business Analyst <br />
            <span className="text-blue-600 italic">& Gestion</span> <br />
            de Projet
          </h1>
          <div className="space-y-6">
            <p className="text-base sm:text-xl lg:text-2xl text-slate-900 font-black uppercase tracking-tight">Master Management et Transformation Digitale</p>
            <p className="text-sm sm:text-lg lg:text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
              Actuellement en <span className="text-blue-600 font-bold">Master 1</span> à l'UPEC, je prépare mon année de <span className="text-slate-900 font-bold">M2 en alternance</span>. Voici mon dossier de preuves techniques.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex gap-6">
              <a href="mailto:abdoulkarim.meckassouapro@gmail.com" className="bg-slate-900 text-white px-6 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-2xl font-black text-xs uppercase tracking-widest shadow-2xl hover:bg-blue-600 transition-all transform hover:-translate-y-1 flex items-center gap-4">
                <Mail size={20} /> Me Contacter
              </a>
            </div>
            <div className="pt-8 flex flex-col gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-blue-600 pl-5">
                Outils & Méthodologies (Études de cas)
              </p>
              <div className="flex flex-wrap gap-8 items-center">
                <img src={LOGOS.jira} className="h-7 w-auto opacity-70 hover:opacity-100 transition-all" alt="Jira" />
                <img src={LOGOS.confluence} className="h-7 w-auto opacity-70 hover:opacity-100 transition-all" alt="Confluence" />
                <img src={LOGOS.spiratest} className="h-7 w-auto opacity-70 hover:opacity-100 transition-all" alt="SpiraTest" />
                <img src={LOGOS.figma} className="h-7 w-auto opacity-70 hover:opacity-100 transition-all" alt="Figma" />
                <img src={LOGOS.powerbi} className="h-7 w-auto opacity-70 hover:opacity-100 transition-all" alt="Power BI" />
                <img src={LOGOS.sql} className="h-7 w-auto opacity-70 hover:opacity-100 transition-all" alt="SQL" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-12 items-end">
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl border-[8px] sm:border-[12px] border-white z-20 transform hover:scale-105 hover:rotate-1 transition-all duration-700 bg-slate-100 self-center lg:self-end">
            <img src="https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/preview.webp" alt="Meckassoua Marwan" className="w-full h-full object-cover" crossOrigin="anonymous" />
          </div><p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed text-center lg:text-right max-w-xs self-center lg:self-end italic mt-4">
  Méthodique et orienté utilisateur, je suis passionné par l'optimisation des processus et la transformation de données brutes en décisions concrètes.
</p>
          <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[3rem] lg:rounded-[4rem] shadow-2xl border border-slate-100 w-full grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-7 lg:p-8 bg-slate-900 rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] text-center text-white shadow-inner">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black">04</p>
              <p className="text-[9px] font-black uppercase tracking-widest mt-3 opacity-70">Preuves SI</p>
            </div>
            <div className="p-5 sm:p-7 lg:p-8 bg-blue-600 rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] text-center text-white shadow-inner">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black italic">154M</p>
              <p className="text-[9px] font-black uppercase tracking-widest mt-3 opacity-70">Data Analysée</p>
            </div>
            <div className="p-5 sm:p-7 lg:p-8 bg-slate-50 rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] text-center border border-slate-200">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900">100%</p>
              <p className="text-[9px] font-black text-slate-500 uppercase mt-3 opacity-70">Tests QA</p>
            </div>
            <div className="p-5 sm:p-7 lg:p-8 bg-slate-50 rounded-[1rem] sm:rounded-[2rem] lg:rounded-[3rem] text-center border border-slate-200">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 italic">M1</p>
              <p className="text-[9px] font-black text-slate-500 uppercase mt-3 opacity-70">UPEC 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 sm:py-24 lg:py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-10 sm:mb-16 lg:mb-24 space-y-4">
            <p className="text-xs font-black text-blue-600 uppercase tracking-[0.5em]">01 / DOSSIER DE PREUVES</p>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter">4 Études de cas SI</h2>
          <p className="text-slate-500 font-medium text-base sm:text-xl lg:text-2xl italic max-w-4xl leading-relaxed">
  J'ai conduit une étude de cas complète sur <span className="text-blue-600 font-bold">SportDeal</span>, une PME e-commerce en transformation digitale de son SI — du cadrage Agile aux tests QA, du prototypage UI à la solution décisionnelle Power BI.
</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {projectsData.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.id} onClick={() => goProject(p)} className="group cursor-pointer bg-white rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all duration-700 relative flex flex-col overflow-hidden shadow-sm">
                  <div className="h-3 w-full" style={{ backgroundColor: COLORS[p.color].mid }}></div>
                  <div className="p-5 sm:p-10 lg:p-16 space-y-8 sm:space-y-12 flex-grow">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="flex gap-4">
                          {p.platformLogos && p.platformLogos.map((logo, index) => (
                            <img key={index} src={logo} className="h-5 sm:h-6 w-auto opacity-70 group-hover:opacity-100 transition-all" alt="" />
                          ))}
                        </div>
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className="p-3 sm:p-4 bg-slate-50 rounded-xl sm:rounded-2xl text-slate-400 group-hover:text-blue-600 transition-colors">
                            <Icon size={24} className="sm:w-8 sm:h-8" />
                          </div>
                          <div>
                            <p className="text-[10px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest">{p.num} · {p.sub}</p>
                            <h3 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight tracking-tighter uppercase mt-1 sm:mt-2">{p.title}</h3>
                          </div>
                        </div>
                      </div>
                      <ArrowUpRight size={24} className="text-slate-300 group-hover:text-blue-600 transition-transform shrink-0" />
                    </div>
                    <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed italic border-l-4 pl-4 sm:pl-6" style={{ borderColor: COLORS[p.color].mid }}>{p.tagline}</p>
                    <div className="grid grid-cols-2 gap-3 sm:gap-6">
                      {p.stats.map((s, idx) => (
                        <div key={idx} className="p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl lg:rounded-[2.5rem] border border-slate-50 shadow-inner group-hover:bg-slate-50 transition-colors" style={{ backgroundColor: COLORS[p.color].light }}>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-black leading-none" style={{ color: COLORS[p.color].text }}>{s.val}</p>
                          <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest mt-2 sm:mt-3 opacity-60" style={{ color: COLORS[p.color].text }}>{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="px-5 sm:px-10 lg:px-16 py-6 sm:py-10 border-t border-slate-50 flex items-center justify-between group-hover:bg-slate-50">
                    <span className="text-[11px] sm:text-[12px] font-black uppercase tracking-widest" style={{ color: COLORS[p.color].mid }}>Expertiser les preuves</span>
                    <ChevronRight size={18} style={{ color: COLORS[p.color].mid }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    <section id="rgpd" className="py-16 sm:py-24 lg:py-32 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12">
            <p className="text-xs font-black text-blue-400 uppercase tracking-[0.5em] mb-4">— Sensibilité Réglementaire</p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter">RGPD</h2>
            <p className="text-slate-400 font-medium text-base sm:text-lg mt-4 max-w-2xl leading-relaxed">
              Contrainte identifiée et intégrée dès le cadrage du SI SportDeal.
            </p>
          </div>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-12">
            Le SI SportDeal collecte des données personnelles clients (noms, adresses, historiques de commandes). 
            En tant que BA, j'ai identifié le RGPD (UE 2016/679) comme contrainte réglementaire à prendre en 
            compte dans la conception du SI — intégrée dans la réflexion métier lors du cadrage du projet.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="p-6 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-2xl mb-4">🔒</div>
              <h3 className="text-white font-black text-lg uppercase tracking-tight mb-3">Accès par rôle</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Agent → ses commandes uniquement. Manager → son équipe. Admin → accès total. Aucune donnée sans habilitation.</p>
            </div>
            <div className="p-6 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-2xl mb-4">🗑️</div>
              <h3 className="text-white font-black text-lg uppercase tracking-tight mb-3">Droit à l'effacement</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Toute demande client de suppression de données doit être exécutée en moins de 72h par le SI.</p>
            </div>
            <div className="p-6 sm:p-8 bg-slate-800 rounded-2xl border border-slate-700">
              <div className="text-2xl mb-4">📅</div>
              <h3 className="text-white font-black text-lg uppercase tracking-tight mb-3">Conservation limitée</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Données conservées 3 ans maximum après la dernière commande, puis archivées ou supprimées automatiquement.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 bg-green-900/50 text-green-400 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-green-800">✅ Identifié dès le cadrage</span>
            <span className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-400 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest border border-blue-800">🔒 RGPD UE 2016/679</span>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 sm:py-24 lg:py-40 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-12 sm:gap-20 lg:gap-32">
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-10 sm:mb-16">— 04 / EXPÉRIENCES</p>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-12 sm:mb-24">Parcours</h2>
            <div className="space-y-12 sm:space-y-24 relative border-l-4 border-blue-50 ml-2">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-10 sm:pl-16 group">
                  <div className="absolute left-[-14px] top-2.5 w-6 h-6 bg-blue-600 rounded-full group-hover:scale-125 transition-transform shadow-xl z-10 border-4 border-white"></div>
                  <h3 className="text-lg sm:text-2xl lg:text-3xl font-black uppercase tracking-tight leading-none">{exp.title}</h3>
                  <p className="text-blue-600 font-black text-xs sm:text-sm uppercase tracking-widest mt-3 sm:mt-4">{exp.period}</p>
                  <p className="text-slate-500 font-medium text-sm sm:text-lg mt-4 sm:mt-6 leading-relaxed italic">"{exp.desc}"</p>
                  <div className="mt-6 sm:mt-8 bg-slate-50 border border-slate-100 px-4 sm:px-6 py-3 rounded-2xl inline-flex items-center gap-3 shadow-sm group-hover:shadow-md transition-all">
                    <Award size={16} className="text-blue-600 shrink-0" />
                    <p className="text-slate-900 font-black text-[10px] sm:text-xs uppercase tracking-widest leading-none">{exp.metrics}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-10 sm:mb-16">— 05 / FORMATION</p>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-12 sm:mb-24">Éducation</h2>
            <div className="space-y-6 sm:space-y-8">
              {formation.map((f, i) => (
                <div key={i} className={`p-5 sm:p-8 lg:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] border ${f.highlight ? 'bg-blue-50 border-blue-100 shadow-xl' : 'bg-white border-slate-100'} hover:shadow-lg transition-all`}>
                  <span className={`font-black text-xs uppercase tracking-widest ${f.highlight ? 'text-blue-600' : 'text-slate-400'}`}>{f.year}</span>
                  <h3 className="text-base sm:text-xl lg:text-2xl font-black mt-4 sm:mt-6 uppercase tracking-tight leading-tight">{f.title}</h3>
                  <p className="text-slate-500 font-bold mt-2 sm:mt-3 uppercase text-xs tracking-widest">{f.school}</p>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-4 sm:px-5 py-2 rounded-xl uppercase tracking-widest">{f.note}</span>
                  </div>
                  {f.subjects && (
                    <div className="mt-5 sm:mt-8 flex flex-wrap gap-2">
                      {f.subjects.map((sub, idx) => (
                        <span key={idx} className="bg-white/50 border border-slate-200 text-slate-500 text-[10px] px-3 py-1.5 rounded-lg font-bold shadow-sm">{sub}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="interests" className="py-16 sm:py-24 lg:py-40 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="mb-12 sm:mb-24">
            <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-4 sm:mb-6">— 06 / PERSONNALITÉ</p>
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-slate-900 uppercase tracking-tighter">Centres d'intérêt</h2>
            <p className="text-slate-500 font-medium text-base sm:text-xl lg:text-2xl mt-4 sm:mt-6 max-w-4xl italic">Exploration, stratégie et veille stratégique au quotidien</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {interests.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-6 sm:p-10 lg:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] bg-white border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-slate-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all mb-6 sm:mb-8">
                    <Icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight mb-3 sm:mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <footer className="py-16 sm:py-32 lg:py-48 bg-[#0a1121] text-white relative overflow-hidden text-center">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 space-y-10 sm:space-y-16 relative z-10">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85]">Discutons de <br /><span className="text-blue-500 italic">votre projet</span></h2>
          <p className="text-sm sm:text-xl lg:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Disponible pour une alternance Master 2 à partir de septembre 2026 — Île-de-France & remote
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 pt-8 sm:pt-16">
            <a href="mailto:abdoulkarim.meckassouapro@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 sm:px-10 sm:py-6 lg:px-14 lg:py-8 rounded-[1.5rem] sm:rounded-[2rem] font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl transition-all transform hover:-translate-y-3">
              abdoulkarim.meckassouapro@gmail.com
            </a>
            <div className="bg-[#1a2335] border border-white/5 text-white px-6 py-4 sm:px-10 sm:py-6 lg:px-14 lg:py-8 rounded-[1.5rem] sm:rounded-[2rem] font-black text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center gap-4">
              <Monitor size={18} className="text-blue-500" /> Business Analyst & Projet SI
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-blue-600/10 rounded-full blur-[140px]"></div>
      </footer>
    </div>
  );

  const Detail = () => (
    <div className="animate-in slide-in-from-bottom duration-1000">
      <header className="pt-20 sm:pt-36 lg:pt-48 pb-10 sm:pb-20 lg:pb-24 px-5 sm:px-8 lg:px-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <button onClick={goHome} className="flex items-center gap-3 sm:gap-4 text-slate-400 hover:text-blue-600 font-black uppercase text-[11px] sm:text-[12px] tracking-widest mb-10 sm:mb-20 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-3 transition-transform" /> Revenir au portfolio
          </button>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 sm:mb-12 font-black text-[11px] sm:text-[12px] uppercase tracking-widest">
            <span className="px-5 sm:px-7 py-2 sm:py-3 bg-blue-50 text-blue-700 rounded-xl sm:rounded-2xl border border-blue-100 shadow-sm">{project.sub}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400 italic font-bold uppercase tracking-widest">Dossier de Preuve SI</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-slate-900 mb-10 sm:mb-16 leading-[0.8] tracking-tighter uppercase">{project.title}</h1>
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-20 mb-16 sm:mb-32 items-start">
            <div className="space-y-6 sm:space-y-12">
              <div className="flex items-center gap-4 sm:gap-5 text-blue-600 font-black uppercase text-xs sm:text-sm tracking-widest">
                <Building2 size={24} /> Contexte SI
              </div>
              <p className="text-base sm:text-xl lg:text-2xl text-slate-500 leading-relaxed font-medium">{project.context}</p>
            </div>
            <div className="bg-slate-900 text-white p-6 sm:p-10 lg:p-16 rounded-[2rem] sm:rounded-[3.5rem] lg:rounded-[4.5rem] shadow-2xl relative overflow-hidden border border-white/10">
              <div className="flex items-center gap-4 sm:gap-5 text-blue-400 font-black uppercase text-xs sm:text-sm tracking-widest mb-6 sm:mb-10">
                <Rocket size={24} /> Objectif Pédagogique / Étude de cas
              </div>
              <p className="text-sm sm:text-lg lg:text-xl leading-relaxed font-medium relative z-10">{project.mission}</p>
              <Boxes className="absolute bottom-[-50px] right-[-50px] w-48 sm:w-72 h-48 sm:h-72 text-white/5 rotate-12" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {project.stats.map((k, i) => (
              <div key={i} className="bg-slate-50 p-5 sm:p-10 lg:p-12 rounded-[1.5rem] sm:rounded-[3rem] lg:rounded-[4rem] border border-slate-100 text-center shadow-inner hover:bg-white hover:shadow-2xl transition-all group">
                <div className="text-blue-600 mb-4 sm:mb-8 flex justify-center group-hover:scale-110 transition-transform"><Monitor size={28} className="sm:w-10 sm:h-10" /></div>
                <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-none">{k.val}</p>
                <p className="text-[10px] sm:text-[12px] font-black text-slate-400 uppercase mt-3 sm:mt-5 tracking-widest leading-tight px-1 sm:px-2">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="py-10 sm:py-16 px-5 sm:px-8 lg:px-12 max-w-6xl mx-auto space-y-16 sm:space-y-24">
        {project.steps.map((step, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 sm:gap-12 lg:items-center`}>
            <div className="lg:w-1/2 space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-slate-900 text-white rounded-xl font-black text-lg sm:text-xl shadow-lg shrink-0">0{idx + 1}</span>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-black text-slate-900 leading-tight uppercase tracking-tighter">{step.title}</h2>
                </div>
                <p className="text-sm sm:text-lg lg:text-xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-blue-600 pl-4 sm:pl-6">{step.desc}</p>
              </div>
              <div className="space-y-3 sm:space-y-4 bg-slate-50 p-5 sm:p-6 lg:p-8 rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] border border-slate-100 shadow-inner">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-3">
                  <ClipboardCheck className="w-4 h-4 text-blue-500 shrink-0" /> Analyse de fiabilité du livrable
                </p>
                <ul className="space-y-2">
                  {step.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-800 font-bold leading-tight">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 shrink-0 shadow-lg shadow-blue-200"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col items-center">
              <div className="relative cursor-zoom-in group/zoom transition-all duration-700 w-full" onClick={() => setZoomImg({ url: step.img, title: step.title })}>
                <SmartImage src={step.img} alt={step.title} className="w-full h-auto" />
                <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover/zoom:opacity-100 transition-all duration-500 flex items-center justify-center rounded-2xl backdrop-blur-[1px]">
                  <div className="bg-white text-slate-900 p-3 sm:p-4 rounded-full shadow-2xl transform scale-50 group-hover/zoom:scale-100 transition-all duration-500">
                    <Maximize2 size={28} className="sm:w-8 sm:h-8" />
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-center gap-3 text-[9px] text-gray-400 font-black uppercase tracking-widest bg-slate-50 py-3 rounded-full border border-slate-100 px-6 text-center shadow-inner w-fit">
                <FileText className="w-3 h-3 text-blue-500 flex-shrink-0" />
                <span>Expertiser la preuve</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-16 sm:py-32 lg:py-64 bg-slate-900 text-white rounded-t-[3rem] sm:rounded-t-[8rem] lg:rounded-t-[14rem] shadow-inner relative overflow-hidden text-center">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-12 space-y-16 sm:space-y-32 lg:space-y-40 relative z-10">
          <div className="space-y-6 sm:space-y-12">
            <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.8]">Impact Final <br /><span className="text-blue-500 italic">& Valeur SI</span></h2>
            <div className="h-3 sm:h-4 w-32 sm:w-64 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-10 lg:gap-16">
            {project.results.map((res, i) => (
              <div key={i} className="p-8 sm:p-12 lg:p-16 bg-white/5 rounded-[2rem] sm:rounded-[4rem] lg:rounded-[6rem] border border-white/10 backdrop-blur-3xl hover:border-blue-600 transition-all duration-700 group hover:-translate-y-4 shadow-2xl">
                <Zap className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-400 mx-auto mb-6 sm:mb-10 lg:mb-12 group-hover:scale-125 transition-all" />
                <p className="font-black text-base sm:text-xl lg:text-2xl leading-tight uppercase tracking-tight italic">{res}</p>
              </div>
            ))}
          </div>
         <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
  {projectsData.findIndex(p => p.id === project.id) > 0 && (
    <button 
      onClick={() => { 
        const idx = projectsData.findIndex(p => p.id === project.id);
        goProject(projectsData[idx - 1]); 
      }} 
      className="flex items-center gap-4 px-8 py-5 sm:px-12 sm:py-8 bg-white/10 border border-white/20 text-white rounded-[2rem] font-black uppercase text-sm tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl">
      <ArrowLeft size={20} />
      <div className="text-left">
        <p className="text-[10px] opacity-60 mb-1">Projet précédent</p>
        <p>{projectsData[projectsData.findIndex(p => p.id === project.id) - 1].title}</p>
      </div>
    </button>
  )}
  {projectsData.findIndex(p => p.id === project.id) < projectsData.length - 1 && (
    <button 
      onClick={() => { 
        const idx = projectsData.findIndex(p => p.id === project.id);
        goProject(projectsData[idx + 1]); 
      }} 
      className="flex items-center gap-4 px-8 py-5 sm:px-12 sm:py-8 bg-blue-600 text-white rounded-[2rem] font-black uppercase text-sm tracking-widest hover:bg-blue-500 transition-all shadow-2xl">
      <div className="text-right">
        <p className="text-[10px] opacity-60 mb-1">Projet suivant</p>
        <p>{projectsData[projectsData.findIndex(p => p.id === project.id) + 1].title}</p>
      </div>
      <ArrowUpRight size={20} />
    </button>
  )}
</div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Lightbox />
      <nav className={`fixed w-full z-50 transition-all duration-1000 ${scrolled || view !== 'home' ? 'bg-white/95 backdrop-blur-3xl shadow-xl py-3 sm:py-4' : 'bg-transparent py-8 sm:py-12'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 flex justify-between items-center">
          <div onClick={goHome} className="flex items-center gap-3 sm:gap-6 cursor-pointer group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-slate-900 rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-black text-xl sm:text-2xl lg:text-3xl group-hover:rotate-12 transition-all shadow-lg">M</div>
            <div className="flex flex-col">
              <span className="font-black text-sm sm:text-lg lg:text-2xl tracking-tighter uppercase italic leading-none">Meckassoua</span>
              <span className="font-black text-[9px] sm:text-[10px] text-blue-600 tracking-[0.6em] sm:tracking-[0.8em] uppercase leading-none mt-1 sm:mt-2 ml-1">Marwan</span>
            </div>
          </div>
          <a href="mailto:abdoulkarim.meckassouapro@gmail.com" className="px-4 py-2 sm:px-7 sm:py-4 lg:px-10 lg:py-5 bg-slate-900 text-white rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-xl">
            Me Contacter
          </a>
        </div>
      </nav>
      {view === 'home' ? <Home /> : <Detail />}
      <footer className="py-12 sm:py-24 bg-[#f8fafc] text-slate-400 text-center text-[10px] font-black uppercase tracking-[0.8em] italic">
        © 2026 — Marwan Meckassoua — Business Analyst & Gestion de Projet SI — Dossier de Preuves M1 UPEC
      </footer>
    </div>
  );
}
