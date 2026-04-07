import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  CheckCircle2, 
  Settings, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Zap, 
  ArrowLeft, 
  Layout, 
  ArrowUpRight, 
  GraduationCap, 
  Briefcase, 
  TrendingDown, 
  Target, 
  Verified, 
  Info,
  ShieldCheck,
  Search, 
  Activity,
  ClipboardCheck,
  Building2, 
  Rocket,
  ShieldAlert,
  BarChart,
  Boxes,
  Monitor,
  X,
  Maximize2,
  Database,
  Award,
  User,
  Rss,
  Watch,
  FlaskConical,
  Globe,
  Mic
} from 'lucide-react';

const COLORS = {
  blue:   { light: '#EFF6FF', mid: '#2563EB', text: '#1D4ED8', border: '#BFDBFE' },
  amber:  { light: '#FFFBEB', mid: '#D97706', text: '#B45309', border: '#FDE68A' },
  orange: { light: '#FFF7ED', mid: '#EA580C', text: '#C2410C', border: '#FED7AA' },
  green:  { light: '#F0FDF4', mid: '#16A34A', text: '#15803D', border: '#BBF7D0' },
};

const projectsData = [
  {
    id: 1,
    num: '01',
    title: "Pilotage Agile Scrum",
    sub: "JIRA & CONFLUENCE",
    color: 'blue',
    icon: Settings,
    tagline: "Du besoin métier au sprint livré — 6 User Stories, 1 Epic, 1 board Scrum animé.",
    context: "SportDeal pilotait sa logistique via Excel, générant des erreurs de saisie et une absence de visibilité en temps réel. Le projet visait à migrer vers un environnement Scrum industriel.",
    mission: "J'ai conçu et piloté la migration SI. Du cadrage stratégique sur Confluence à la structuration du backlog Jira, j'ai garanti l'alignement des équipes techniques et métier.",
    stats: [
      { val: '6', label: 'User Stories' },
      { val: '4', label: 'Stakeholders' },
      { val: '40%', label: 'Gain temps SAV' },
      { val: '3', label: 'Sprints' }
    ],
    steps: [
      {
        title: "Note de cadrage — Confluence",
        desc: "Avant toute ligne de code, j'ai rédigé sur Confluence la note de cadrage du projet SportDeal. Ce document a permis d'aligner les 4 parties prenantes (Responsable Logistique, Dev Lead, Direction, BA) sur les objectifs métier, le périmètre IN/OUT SCOPE et le planning macro 3 sprints.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2019-24-45%20Note%20de%20cadrage%20%E2%80%93%20Outil%20suivi%20commandes%20SportDeal%20-%20Marwan%20Mk%20-%20Confluence.png",
        points: ["3 objectifs métier définis : centralisation, réduction SAV 40%, alertes automatiques", "Périmètre délimité : IN (suivi, alertes, reporting) / OUT (stocks, facturation, CRM)", "2 risques identifiés : résistance au changement + données Excel incohérentes"]
      },
      {
        title: "Backlog Jira — 6 User Stories",
        desc: "J'ai traduit les besoins des 8 agents logistiques en 6 User Stories actionnables au format 'En tant que… je veux… afin de…'. Chaque story est accompagnée de critères d'acceptance précis et de story points pour le sprint planning.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-28-17%20SportDeal%20%E2%80%93%20Suivi%20Commandes%20-%20Tous%20les%20tickets%20-%20Jira.png",
        points: ["US-01 Consulter la liste des commandes (Highest) — données rafraîchies toutes les 15 min", "US-05 Recevoir une alerte en cas de retard (High) — seuil paramétrable +24h/+48h", "US-04 Générer un rapport hebdomadaire PDF/Excel (Medium) — taux de livraison à temps inclus"]
      },
      {
        title: "Epic SCRUM-5 — Vision produit",
        desc: "L'ensemble des 6 User Stories a été regroupé sous l'Epic SCRUM-5 'Outil de suivi des commandes logistiques', reliée directement à la documentation Confluence. Cette structure garantit la cohérence entre la vision produit et les tickets de développement.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-18-07%20SCRUM-5%20Outil%20de%20suivi%20des%20commandes%20logistiques%20-%20Jira.png",
        points: ["1 Epic fédérant 6 User Stories — vue macro de l'avancement produit", "Lien bidirectionnel Jira ↔ Confluence — traçabilité totale des décisions", "Assignation directe à Marwan Mk — Product Owner identifié"]
      },
      {
        title: "Board Scrum animé — Sprint 1",
        desc: "Le Sprint 1 a été lancé avec les 3 User Stories prioritaires (US-01, US-02, US-03). J'ai simulé un avancement réaliste pour illustrer la dynamique Agile : SCRUM-6 passé 'En cours', SCRUM-8 marqué 'Terminé', 4 tickets restants 'À faire'.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2018-38-24%20SCRUM%20Sprint%200%20%E2%80%93%20SportDeal%20%E2%80%93%20Suivi%20Commandes%20%E2%80%93%20Tableau%20Scrum%20-%20Jira.png",
        points: ["5 colonnes de workflow : Idée / À faire / En cours / En cours de revue / Terminé", "Sprint actif 2 semaines — 3 US en cours d'exécution", "Simulation réaliste : 1 US terminée, 1 en cours, 4 en backlog"]
      }
    ],
    results: ["Backlog 100% structuré et priorisé — zéro écart besoin ↔ ticket", "Documentation Agile complète et traçable sur Confluence", "Réduction estimée de 40% du temps de traitement des réclamations SAV"]
  },
  {
    id: 2,
    num: '02',
    title: "Reporting Décisionnel",
    sub: "POWER BI",
    color: 'amber',
    icon: BarChart3,
    tagline: "154,36M€ de CA analysés sur 3 ans — 8 visuels, décomposition en arbre, publié sur Power BI Service.",
    context: "Suite à une baisse de -7,6% du CA en 2019, SportDeal devait identifier l'origine du déclin. Les données commerciales dispersées empêchaient toute analyse granulaire.",
    mission: "Mon mandat consistait à transformer 3 ans d'historique en un cockpit décisionnel. J'ai piloté l'ETL et conçu un outil de 'Root Cause Analysis' pour isoler la chute critique de décembre 2019.",
    stats: [
      { val: '154M€', label: 'CA Analysé' },
      { val: '8', label: 'Visuels clés' },
      { val: '-7,6%', label: 'Baisse CA' },
      { val: '3', label: 'Ans Data' }
    ],
    steps: [
      {
        title: "Tableau de Bord Interactif",
        desc: "Démonstration du dashboard dynamique. L'interactivité permet d'explorer les indicateurs par région et canal en temps réel.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/ProjetPowerBI2026-04-0319-50-51-ezgif.com-resize.gif",
        points: ["Navigation dynamique", "Filtres interactifs", "Aperçu temps réel"]
      },
      {
        title: "Dashboard Suivi des Ventes",
        desc: "Conception du dashboard regroupant CA, Marges et Délais. Lecture instantanée de la santé commerciale.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/jj.PNG",
        points: ["Calcul de KPIs en DAX", "Segmentation par canal", "Cartographie dynamique"]
      },
      {
        title: "Root Cause via Arbre IA",
        desc: "Isoler les facteurs de baisse fin 2019 via l'arbre de décomposition temporelle.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/s2.PNG",
        points: ["Analyse drill-down", "Focus Q4 2019", "Aide à la décision IA"]
      }
    ],
    results: ["Diagnostic CA finalisé", "Modélisation Étoile validée", "Reporting automatisé"]
  },
  {
    id: 3,
    num: '03',
    title: "Prototypage UI",
    sub: "FIGMA",
    color: 'orange',
    icon: Layout,
    tagline: "Interface métier complète pour 8 agents logistiques — 4 KPIs temps réel, tableau des commandes.",
    context: "Validation ergonomique avant développement pour un outil logistique intuitif.",
    mission: "Design du dashboard complet sur Figma, traduisant 6 User Stories en écrans cliquables.",
    stats: [
      { val: '4', label: 'KPIs temps réel' },
      { val: '5', label: 'Sections Nav' },
      { val: '142', label: 'Cmd/Jour' },
      { val: '6', label: 'US' }
    ],
    steps: [
      {
        title: "Conception du Dashboard Métier",
        desc: "Design de l'interface principale intégrant les métriques critiques de transit et livraisons.",
        img: "https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?auto=format&fit=crop&q=80&w=1200",
        points: ["Navbar SportDeal intégrée", "Sidebar 5 sections", "Hiérarchie visuelle"]
      }
    ],
    results: ["Validation UX avant dev", "Réduction risque adoption", "Specs UI certifiées"]
  },
  {
    id: 4,
    num: '04',
    title: "Gestion des Tests QA",
    sub: "SPIRATEST",
    color: 'green',
    icon: CheckCircle2,
    tagline: "5 exigences, 5 cas de tests, matrice de traçabilité 100% — TC-290 exécuté avec statut Réussi.",
    context: "Le lancement du module logistique SportDeal. Recette certifiée impérative pour sécuriser la production.",
    mission: "Pilotage QA sur SpiraTest : mapping exigences ↔ tests et exécution des campagnes de recette.",
    stats: [
      { val: '5', label: 'Exigences RQ' },
      { val: '100%', label: 'Couverture' },
      { val: '5/5', label: 'Tests' },
      { val: 'Pass', label: 'Statut' }
    ],
    steps: [
      {
        title: "5 Exigences fonctionnelles — Module Requirements",
        desc: "J'ai documenté 5 exigences fonctionnelles (Use Cases) dans SpiraTest, en leur attribuant un niveau de criticité métier : 3 Critical et 2 High. Ces exigences correspondent directement aux User Stories Jira — garantissant la cohérence bout en bout du projet SportDeal.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2020-27-22%20Exigences%20SpiraTest.png",
        points: ["RQ-789 Consulter la liste des commandes (Critical) — couverture de test : Non couvert", "RQ-791 Rechercher une commande par numéro ou client (Critical)", "RQ-792 Recevoir une alerte en cas de retard (High) — statut : En cours"]
      },
      {
        title: "5 Cas de tests — Module Test Cases",
        desc: "5 cas de tests fonctionnels (TC-290 à TC-294) ont été créés et liés directement aux exigences correspondantes. Chaque cas de test est de type Functional, au statut 'Prêt pour le test', garantissant une couverture complète du périmètre avant exécution.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2020-32-49%20Cas%20de%20test%20SpiraTest.png",
        points: ["TC-290 Vérifier l'affichage de la liste des commandes", "TC-293 Vérifier le déclenchement d'une alerte de retard", "TC-294 Vérifier la génération du rapport hebdomadaire"]
      },
      {
        title: "Matrice de traçabilité — TC ↔ Exigences",
        desc: "L'onglet Couverture d'exigence du TC-290 affiche les 5 associations RQ ↔ TC — soit une couverture de 100% du périmètre. Cet outil est le pilier de la recette fonctionnelle en QA BA : aucun besoin métier ne peut être livré sans sa validation technique correspondante.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/matrice-tracabilite-TC290.png",
        points: ["5/5 exigences couvertes — taux de couverture 100%", "Importance : 3 Critical (RQ-789, 790, 791) + 2 High (RQ-792, 793)", "Lien bidirectionnel : modification d'une exigence → impact visible sur le test"]
      },
      {
        title: "Exécution TC-290 — Statut : Réussi ✓",
        desc: "L'exécution du test TC-290 'Vérifier l'affichage de la liste des commandes' a été conduite avec documentation du résultat effectif. La barre de progression affiche 1/1 étapes complétées avec le statut final Réussi — le module logistique SportDeal est validé pour mise en production.",
        img: "https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/Screenshot%202026-04-02%20at%2020-42-27%20Ex%C3%A9cution%20de%20cas%20de%20test%20SpiraTest.png",
        points: ["Résultat effectif documenté : 'Le tableau de bord affiche bien toutes les commandes en cours, filtrables par date et statut'", "Progression : 1/1 étapes — barre verte 100%", "Statut final : Réussi — Go Live module logistique validé"]
      }
    ],
    results: ["100% des exigences fonctionnelles couvertes et validées", "Zéro bug bloquant identifié sur le module logistique", "Module validé et prêt pour déploiement en production"]
  }
];

const experiences = [
  { 
    title: 'Projet BI — Commerces de proximité', 
    period: 'Fév – Juil 2025', 
    desc: 'Analyse des besoins opérationnels de gérants indépendants (ventes, stocks, performance financière).',
    metrics: 'Projet BI → 5 commerces analysés, 8 KPIs définis, 1 prototype, 16 semaines'
  },
  { 
    title: 'Diagnostic organisationnel — UPEC', 
    period: 'Mars – Avr 2025', 
    desc: 'Conduite d\'un diagnostic d\'un projet de transformation digitale (système d\'apprentissage en ligne).',
    metrics: 'Projet académique → 4 parties prenantes, 5 recommandations'
  },
  { 
    title: 'Agent logistique — Intermarché Erbrée', 
    period: 'Déc 2022 – Août 2025', 
    desc: 'Gestion de la traçabilité des produits via outils digitaux dans un environnement mécanisé.',
    metrics: 'Intermarché → ~400 colis/jour, taux de fiabilité 100% sur 6 mois'
  },
  { 
    title: 'Accompagnement pédagogique — HappySitters Antony', 
    period: 'Sept 2024 – Avr 2025', 
    desc: 'Analyse des besoins individuels, élaboration de plans d\'action personnalisés et reporting régulier aux parties prenantes (parents).',
    metrics: 'Relation client & reporting structuré'
  },
];

const formation = [
  { year: '2026–2027', title: 'Master 2 Management & Transformation Digitale', school: 'UPEC — Université Paris XII', note: 'En alternance (recherché)', highlight: true },
  { year: '2025–2026', title: 'Master 1 Management & Transformation Digitale', school: 'UPEC — Université Paris XII', note: 'En cours' },
  { year: 'Juil. 2025', title: 'Programme Marketing International', school: 'Université de Ciudad Real, Espagne', note: '1 mois' },
  { year: '2022–2025', title: 'Licence AEI — Management & Transformation Digitale', school: 'UPEC — Parcours International Business', note: 'Mention' },
];

const interests = [
  { title: "Veille Technologique", desc: "Suivi des tendances BI, IA et transformation digitale via podcasts et newsletters.", icon: Rss },
  { title: "Horlogerie", desc: "Passion pour la mécanique de précision et l’ingénierie du détail.", icon: Watch },
  { title: "Parfumerie", desc: "Intérêt pour la composition olfactive et l’univers du luxe.", icon: FlaskConical },
  { title: "Voyages en immersion", desc: "Découverte de cultures et environnements internationaux.", icon: Globe },
  { title: "Podcasts Business", desc: "Écoute régulière de contenus sur la stratégie et la performance des organisations.", icon: Mic },
];

const SmartImage = ({ src, alt, className = "" }) => {
  const [error, setError] = useState(false);
  const fallback = "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 group shadow-lg transition-all duration-500 flex items-center justify-center ${className}`}>
      <img 
        src={error ? fallback : src} 
        alt={alt} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        onError={() => setError(true)}
      />
      {!error && !src.includes("preview.webp") && (
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
    <div 
      className="fixed inset-0 z-[250] bg-slate-900/98 backdrop-blur-xl flex items-center justify-center p-6 cursor-zoom-out animate-in fade-in duration-300"
      onClick={() => setZoomImg(null)}
    >
      <button className="absolute top-10 right-10 text-white hover:rotate-90 transition-transform p-3 bg-white/10 rounded-full">
        <X size={40} />
      </button>
      <div className="relative max-w-7xl w-full max-h-[85vh] flex flex-col items-center gap-8" onClick={e => e.stopPropagation()}>
        <img 
          src={zoomImg.url} 
          alt={zoomImg.title} 
          className="w-full h-full object-contain rounded-2xl shadow-[0_0_100px_rgba(0,0,0,0.6)] border border-white/10" 
        />
        <div className="flex items-center gap-4 bg-blue-600 px-10 py-4 rounded-full shadow-2xl">
          <Verified size={24} className="text-white" />
          <p className="text-white text-xl font-black uppercase tracking-[0.2em]">
            {zoomImg.title}
          </p>
        </div>
      </div>
    </div>
  ) : null;

  const Home = () => (
    <div className="animate-in fade-in duration-1000">
      <section className="pt-48 pb-32 px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
        <div className="flex-1 space-y-12">
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] border border-blue-100">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-full animate-ping"></span>
            Recherche Alternance Master 2 — Septembre 2026
          </div>
          <h1 className="text-8xl font-black text-slate-900 leading-[0.85] tracking-tighter uppercase">
            Business Analyst <br />
            <span className="text-blue-600 italic">& Gestion</span> <br />
            de Projet
          </h1>
          <div className="space-y-6">
            <p className="text-2xl text-slate-900 font-black uppercase tracking-tight leading-tight">
              Master Management et Transformation Digitale
            </p>
            <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed">
              Actuellement en <span className="text-blue-600 font-bold">Master 1</span> à l'UPEC, je prépare mon année de <span className="text-slate-900 font-bold">M2 en alternance</span>.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="mailto:abdoulkarim.meckassouapro@gmail.com" className="bg-slate-900 text-white px-12 py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:bg-blue-600 transition-all transform hover:-translate-y-1 flex items-center gap-4">
              <Mail size={20} /> Me Contacter
            </a>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-12 items-end">
           {/* Profile Photo - preview.webp */}
           <div className="w-[320px] h-[320px] rounded-[3.5rem] overflow-hidden shadow-3xl border-[12px] border-white z-20 transform hover:scale-105 hover:rotate-1 transition-all duration-700 bg-slate-100 self-center lg:self-end">  <img    src="https://raw.githubusercontent.com/marwan236meckassoua-eng/portfolio-assets/main/preview.webp"    alt="Meckassoua Marwan"    className="w-full h-full object-cover"    crossOrigin="anonymous"  /></div>

           <div className="bg-white p-10 rounded-[4rem] shadow-2xl border border-slate-100 group overflow-hidden w-full">
              <div className="grid grid-cols-2 gap-6">
                  <div className="p-8 bg-slate-900 rounded-[3rem] text-center text-white group-hover:scale-105 transition-transform duration-700 shadow-inner">
                    <p className="text-5xl font-black">04</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] mt-3 opacity-70">Projets livrés</p>
                  </div>
                  <div className="p-8 bg-blue-600 rounded-[3rem] text-center text-white group-hover:scale-105 transition-transform duration-700 shadow-inner">
                    <p className="text-5xl font-black italic leading-none">154M€</p>
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] mt-3 opacity-70">CA analysé</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[3rem] text-center border border-slate-200 group-hover:scale-105 transition-transform duration-700 shadow-inner">
                    <p className="text-5xl font-black text-slate-900 leading-none">100%</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mt-3 opacity-70">Couverture tests</p>
                  </div>
                  <div className="p-8 bg-slate-50 rounded-[3rem] text-center border border-slate-200 group-hover:scale-105 transition-transform duration-700 shadow-inner">
                    <p className="text-5xl font-black text-slate-900 leading-none italic">M1</p>
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-[0.2em] mt-3 opacity-70">UPEC 2026</p>
                  </div>
              </div>
           </div>
        </div>
      </section>

      <section id="projects" className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-24 space-y-4">
             <p className="text-xs font-black text-blue-600 uppercase tracking-[0.5em]">01 / PORTFOLIO</p>
             <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter">4 Projets Business Analyst</h2>
             <p className="text-slate-500 font-medium text-2xl italic max-w-4xl leading-relaxed">Cas fil rouge : SportDeal — PME e-commerce, outil de suivi des commandes logistiques</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {projectsData.map((p) => (
              <div key={p.id} onClick={() => goProject(p)} className="group cursor-pointer bg-white rounded-[3.5rem] border border-slate-200 hover:shadow-2xl transition-all duration-700 relative flex flex-col overflow-hidden shadow-sm">
                <div className="h-3 w-full" style={{ backgroundColor: COLORS[p.color].mid }}></div>
                <div className="p-16 space-y-12 flex-grow">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-6">
                      <div className="p-5 rounded-2xl border border-slate-100 group-hover:bg-slate-50 transition-colors shadow-sm" style={{ color: COLORS[p.color].mid }}>
                        <p.icon size={32} />
                      </div>
                      <div>
                        <p className="text-[11px] font-black text-slate-400 uppercase tracking-[0.3em]">{p.num} · {p.sub}</p>
                        <h3 className="text-4xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase mt-2">{p.title}</h3>
                      </div>
                    </div>
                    <ArrowUpRight size={32} className="text-slate-300 group-hover:text-blue-600 transition-transform" />
                  </div>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed italic border-l-4 pl-6" style={{ borderColor: COLORS[p.color].mid }}>{p.tagline}</p>
                  <div className="grid grid-cols-2 gap-6">
                    {p.stats.map((s, idx) => (
                      <div key={idx} className="p-8 rounded-[2.5rem] border border-slate-50 transition-all group-hover:border-blue-100 shadow-inner" style={{ backgroundColor: COLORS[p.color].light }}>
                        <p className="text-4xl font-black leading-none" style={{ color: COLORS[p.color].text }}>{s.val}</p>
                        <p className="text-[10px] font-black uppercase tracking-widest mt-3 opacity-60" style={{ color: COLORS[p.color].text }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-16 py-10 border-t border-slate-50 flex items-center justify-between group-hover:bg-slate-50">
                  <span className="text-[12px] font-black uppercase tracking-[0.4em]" style={{ color: COLORS[p.color].mid }}>Voir le projet complet</span>
                  <ChevronRight size={20} style={{ color: COLORS[p.color].mid }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="regulatory" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-12">
           <div className="mb-24">
             <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-6">— 03 / RÉGLEMENTAIRE</p>
             <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter">Sensibilité RGPD & RFE</h2>
             <p className="text-slate-500 font-medium text-2xl mt-6 max-w-4xl">Sensibilité aux enjeux réglementaires impactant les projets SI</p>
           </div>
           <div className="grid md:grid-cols-2 gap-16">
             {[
               {
                 badge: 'RGPD',
                 title: 'Protection des données personnelles',
                 intro: 'Sensibilité aux enjeux liés au traitement des données personnelles dans les projets SI.',
                 items: [
                   'Identification des données personnelles (noms clients, adresses, historiques commandes)',
                   'Bases légales du traitement : consentement, intérêt légitime, contrat',
                   'Principes de minimisation des données et droit à l\'effacement',
                   'Rôle du DPO et articulation avec l\'équipe projet'
                 ],
                 color: 'blue'
               },
               {
                 badge: 'RFE',
                 title: 'Réforme Facturation Électronique',
                 intro: 'Sensibilité aux enjeux de la RFE impactant toutes les PME françaises dès septembre 2026.',
                 items: [
                   'Distinction e-invoicing B2B vs e-reporting (transmission données à la DGFiP)',
                   'Formats réglementaires : Factur-X, UBL, CII',
                   'Rôle des PDP vs PPF (Portail Public de Facturation)',
                   'Calendrier de déploiement : réception obligatoire septembre 2026'
                 ],
                 color: 'green'
               }
             ].map((reg, i) => (
               <div key={i} className="bg-slate-50/50 p-16 rounded-[4.5rem] border border-slate-100 hover:shadow-2xl transition-all group flex flex-col">
                 <div className="w-fit">
                    <span className={`px-6 py-2 bg-${reg.color === 'blue' ? 'blue-50 text-blue-600 border-blue-100' : 'emerald-50 text-emerald-600 border-emerald-100'} rounded-full text-[11px] font-black tracking-[0.3em] border uppercase`}>{reg.badge}</span>
                 </div>
                 <h3 className="text-4xl font-black mt-10 mb-6 uppercase tracking-tighter leading-none">{reg.title}</h3>
                 <p className="text-slate-500 font-medium text-lg mb-12 leading-relaxed flex-grow">{reg.intro}</p>
                 <ul className="space-y-6">
                   {reg.items.map((item, idx) => (
                     <li key={idx} className="flex items-start gap-5 text-base font-bold text-slate-700">
                       <span className={`text-${reg.color === 'blue' ? 'blue-600' : 'emerald-600'} mt-1 font-black`}>→</span> {item}
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section id="experience" className="py-40 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-32">
          <div>
             <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-16">— 04 / EXPÉRIENCES</p>
             <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter mb-24 leading-none">Parcours <br />professionnel</h2>
             <div className="space-y-24 relative">
               <div className="absolute left-0 top-3 bottom-3 w-1 bg-blue-100 ml-1.5 opacity-50"></div>
               {experiences.map((exp, i) => (
                 <div key={i} className="relative pl-16 group">
                   <div className="absolute left-0 top-2.5 w-4 h-4 bg-blue-600 rounded-full group-hover:scale-150 transition-transform shadow-[0_0_20px_rgba(37,99,235,0.4)] z-10"></div>
                   <h3 className="text-3xl font-black uppercase tracking-tight leading-none">{exp.title}</h3>
                   <p className="text-blue-600 font-black text-sm uppercase tracking-widest mt-4">{exp.period}</p>
                   <p className="text-slate-500 font-medium text-lg mt-6 leading-relaxed italic border-l-2 pl-6">"{exp.desc}"</p>
                   <div className="mt-8 bg-white border border-slate-100 px-6 py-3 rounded-2xl inline-flex items-center gap-3 shadow-sm group-hover:shadow-md transition-shadow">
                      <Award size={16} className="text-blue-600" />
                      <p className="text-slate-900 font-black text-xs uppercase tracking-widest leading-none">{exp.metrics}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          <div>
             <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-16">— 05 / FORMATION</p>
             <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter mb-24 leading-none">Éducation</h2>
             <div className="space-y-8">
               {formation.map((f, i) => (
                 <div key={i} className={`p-10 rounded-[3.5rem] border ${f.highlight ? 'bg-blue-50 border-blue-100 shadow-xl' : 'bg-white border-slate-100 shadow-sm'} hover:shadow-lg transition-all`}>
                   <div className="flex justify-between items-start">
                     <span className={`font-black text-xs uppercase tracking-[0.4em] ${f.highlight ? 'text-blue-600' : 'text-slate-400'}`}>{f.year}</span>
                   </div>
                   <h3 className="text-2xl font-black mt-6 uppercase tracking-tight leading-tight">{f.title}</h3>
                   <p className="text-slate-500 font-bold mt-3 uppercase text-xs tracking-widest">{f.school}</p>
                   <div className="mt-6 flex gap-3">
                     <span className="bg-slate-100 text-slate-600 text-[10px] font-black px-5 py-2 rounded-xl uppercase tracking-widest leading-none">{f.note}</span>
                   </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      <section id="interests" className="py-40 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-12">
           <div className="mb-24">
             <p className="text-xs font-black text-slate-400 uppercase tracking-[0.6em] mb-6">— 06 / PERSONNALITÉ</p>
             <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter">Centres d'intérêt</h2>
             <p className="text-slate-500 font-medium text-2xl mt-6 max-w-4xl italic">Ingénierie, exploration et veille stratégique au quotidien</p>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
             {interests.map((item, idx) => (
               <div key={idx} className="p-12 rounded-[3.5rem] bg-slate-50/50 border border-slate-100 hover:shadow-xl transition-all group hover:-translate-y-2">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all mb-8">
                     <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-500 font-medium text-base leading-relaxed leading-snug">{item.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <section className="py-48 bg-[#0a1121] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-12 text-center space-y-16 relative z-10">
          <h2 className="text-8xl font-black uppercase tracking-tighter leading-[0.85]">Discutons de <br /><span className="text-blue-500 italic">votre projet</span></h2>
          <p className="text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Disponible pour une alternance Master 2 à partir de septembre 2026 — Île-de-France & remote
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-16">
             <a href="mailto:abdoulkarim.meckassouapro@gmail.com" className="bg-blue-600 hover:bg-blue-700 text-white px-14 py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-3">
               abdoulkarim.meckassouapro@gmail.com
             </a>
             <div className="bg-[#1a2335] border border-white/5 text-white px-14 py-8 rounded-[2rem] font-black text-sm uppercase tracking-[0.3em] shadow-2xl flex items-center">
               07.69.70.53.83
             </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px]"></div>
      </section>
    </div>
  );

  const Detail = () => (
    <div className="animate-in slide-in-from-bottom duration-1000">
      <header className="pt-48 pb-24 px-12 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <button onClick={goHome} className="flex items-center gap-4 text-slate-400 hover:text-blue-600 font-black uppercase text-[12px] tracking-[0.3em] mb-20 transition-all group">
            <ArrowLeft size={22} className="group-hover:-translate-x-3 transition-transform" /> Revenir au portfolio
          </button>
          
          <div className="flex flex-wrap items-center gap-6 mb-12 font-black text-[12px] uppercase tracking-[0.5em]">
            <span className="px-7 py-3 bg-blue-50 text-blue-700 rounded-2xl border border-blue-100 shadow-sm">{project.sub}</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-400 italic font-bold uppercase tracking-widest">Dossier de Preuve SI</span>
          </div>

          <h1 className="text-9xl font-black text-slate-900 mb-16 leading-[0.8] tracking-tighter uppercase">{project.title}</h1>
          
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-start">
             <div className="space-y-12">
                <div className="flex items-center gap-5 text-blue-600 font-black uppercase text-sm tracking-[0.5em]">
                  <Building2 size={28} /> Contexte Business
                </div>
                <p className="text-3xl text-slate-500 leading-relaxed font-medium">{project.context}</p>
             </div>
             <div className="bg-slate-900 text-white p-16 rounded-[4.5rem] shadow-2xl relative overflow-hidden border border-white/10">
                <div className="flex items-center gap-5 text-blue-400 font-black uppercase text-sm tracking-[0.5em] mb-10">
                  <Rocket size={28} /> Ma Mission Stratégique
                </div>
                <p className="text-2xl leading-relaxed font-medium relative z-10">{project.mission}</p>
                <Boxes className="absolute bottom-[-50px] right-[-50px] w-72 h-72 text-white/5 rotate-12" />
             </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {project.stats.map((k, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[4rem] border border-slate-100 text-center hover:bg-white hover:shadow-2xl transition-all duration-500 group shadow-inner">
                <div className="text-blue-600 mb-8 flex justify-center group-hover:scale-125 transition-transform"><Monitor size={40} /></div>
                <p className="text-6xl font-black text-slate-900 tracking-tighter leading-none">{k.val}</p>
                <p className="text-[12px] font-black text-slate-400 uppercase mt-5 tracking-[0.4em] leading-tight px-2">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <section className="py-24 px-12 max-w-6xl mx-auto space-y-32">
        {project.steps.map((step, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:items-center`}>
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <span className="flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-2xl font-black text-2xl shadow-xl shrink-0">0{idx + 1}</span>
                  <h2 className="text-4xl font-black text-slate-900 leading-[1.1] uppercase tracking-tighter">{step.title}</h2>
                </div>
                <p className="text-2xl text-slate-500 leading-relaxed font-medium italic border-l-8 border-blue-600 pl-8">
                  {step.desc}
                </p>
              </div>
              <div className="space-y-4 bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 shadow-inner">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.6em] flex items-center gap-4">
                  <ClipboardCheck className="w-5 h-5 text-blue-500" /> Analyse de fiabilité du livrable
                </p>
                <ul className="space-y-3">
                  {step.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-4 text-lg text-slate-800 font-bold leading-tight">
                      <div className="w-2.5 h-2.5 bg-blue-600 rounded-full mt-1.5 shrink-0 shadow-lg shadow-blue-200"></div>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex flex-col items-center">
               <div 
                 className="relative cursor-zoom-in group/zoom transition-all duration-700 w-full" 
                 onClick={() => setZoomImg({ url: step.img, title: step.title })}
                >
                 <SmartImage src={step.img} alt={step.title} className="w-full h-auto" />
                 <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover/zoom:opacity-100 transition-all duration-500 flex items-center justify-center rounded-2xl backdrop-blur-[1px]">
                    <div className="bg-white text-slate-900 p-4 rounded-full shadow-2xl transform scale-50 group-hover/zoom:scale-100 transition-all duration-500">
                      <Maximize2 size={32} />
                    </div>
                 </div>
               </div>
               <div className="mt-6 flex items-center justify-center gap-4 text-[9px] text-gray-400 font-black uppercase tracking-[0.6em] bg-slate-50 py-4 rounded-full border border-slate-100 px-8 text-center shadow-inner w-fit">
                 <FileText className="w-4 h-4 text-blue-500 flex-shrink-0" />
                 <span>Cliquer pour expertiser la preuve</span>
               </div>
            </div>
          </div>
        ))}
      </section>

      <section className="py-64 bg-slate-900 text-white rounded-t-[14rem] shadow-inner relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-12 text-center space-y-40 relative z-10">
          <div className="space-y-12">
            <h2 className="text-9xl font-black uppercase tracking-tighter leading-[0.8]">Impact Final <br /><span className="text-blue-500 italic">& Valeur SI</span></h2>
            <div className="h-4 w-64 bg-blue-600 mx-auto rounded-full shadow-[0_0_50px_rgba(37,99,235,0.6)]"></div>
          </div>
          <div className="grid sm:grid-cols-3 gap-24">
            {project.results.map((res, i) => (
              <div key={i} className="p-24 bg-white/5 rounded-[6rem] border border-white/10 backdrop-blur-3xl hover:border-blue-600 transition-all duration-700 group shadow-2xl hover:-translate-y-8">
                < Zap className="w-20 h-20 text-blue-400 mx-auto mb-16 group-hover:scale-150 transition-all duration-700" />
                <p className="font-black text-4xl leading-tight uppercase tracking-tight italic">{res}</p>
              </div>
            ))}
          </div>
          <button onClick={goHome} className="flex items-center gap-10 mx-auto px-28 py-14 bg-white text-slate-900 rounded-[5rem] font-black uppercase text-base tracking-[0.8em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl transform hover:scale-105 active:scale-95">
            Explorer les autres dossiers
          </button>
        </div>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Lightbox />
      
      <nav className={`fixed w-full z-50 transition-all duration-1000 ${scrolled || view !== 'home' ? 'bg-white/95 backdrop-blur-3xl shadow-xl py-6' : 'bg-transparent py-20'}`}>
        <div className="max-w-7xl mx-auto px-16 flex justify-between items-center">
          <div onClick={goHome} className="flex items-center gap-10 cursor-pointer group">
            <div className="w-24 h-24 bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white font-black text-5xl group-hover:rotate-12 transition-all duration-700 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">M</div>
            <div className="flex flex-col">
              <span className="font-black text-4xl tracking-tighter uppercase leading-none italic">Meckassoua</span>
              <span className="font-black text-[15px] text-blue-600 tracking-[0.8em] uppercase leading-none mt-5">Marwan</span>
            </div>
          </div>
          <div className="flex gap-20 items-center">
             <a href="mailto:abdoulkarim.meckassouapro@gmail.com" className="px-16 py-8 bg-slate-900 text-white rounded-[3rem] text-[13px] font-black uppercase tracking-[0.6em] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-blue-600 hover:scale-110 transition-all duration-500 hover:shadow-blue-600/30 active:scale-95">
              Me Contacter
             </a>
          </div>
        </div>
      </nav>

      {view === 'home' ? <Home /> : <Detail />}

      <footer className="py-64 bg-[#0a1121] text-slate-500 text-center">
        <div className="max-w-7xl mx-auto px-16 space-y-16">
           <div className="flex flex-wrap justify-center gap-24 font-black uppercase text-base tracking-[0.5em]">
              <span>UPEC Paris XII</span>
              <span className="text-blue-600 text-3xl">•</span>
              <span>Business Analysis & Pilotage</span>
              <span className="text-blue-600 text-4xl">•</span>
              <span>Dossier Certifié 2026</span>
           </div>
           <p className="text-[12px] text-slate-400 uppercase font-black tracking-[0.8em] pt-12 border-t border-white/5 inline-block px-20 italic">© 2026 — Marwan Meckassoua — Business Analyst & Gestion de Projet SI</p>
        </div>
      </footer>
    </div>
  );
}
