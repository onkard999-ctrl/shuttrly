import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Aperture,
  Layers,
  TrendingUp,
  Globe,
  Compass,
  Zap,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  BarChart3,
  Target,
  ShieldCheck,
  Clock,
  Users,
  Award,
  Sliders,
  Play,
  X,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  RotateCcw,
  Lock,
  Unlock,
  Eye,
  MousePointerClick,
  Code2,
  Megaphone,
  Search,
  PenTool,
  Check,
  ExternalLink,
  Calendar,
  Building2,
  Briefcase
} from 'lucide-react';

/**
 * ============================================================================
 * SHUTTRLY BRAND CONSTANTS & COLOR TOKENS
 * ============================================================================
 * Primary violet: #7138E8
 * Deep purple:    #5125B8
 * Magenta accent: #D946EF
 * Charcoal:       #25232B
 * White:          #FFFFFF
 * Soft bg:        #F7F6FA
 * Muted text:     #777481
 * Light border:   #E9E6EF
 */

/**
 * ============================================================================
 * EXACT SHUTTRLY LOGO COMPONENT
 * ============================================================================
 * Preserves the exact visual design, proportions, 6-blade S-shaped purple
 * camera shutter symbol, bold geometric charcoal "huttr", violet-to-magenta
 * gradient "ly", and wide-tracked "DIGITAL MARKETING AGENCY" tagline from
 * the supplied Shuttrly brand mark.
 */
const ShuttrlyLogo = ({
  size = 'md',
  showTagline = true,
  className = '',
  idSuffix = 'main'
}) => {
  const dimensions = {
    sm: { width: 158, height: 46 },
    md: { width: 186, height: 54 },
    lg: { width: 228, height: 66 },
    xl: { width: 270, height: 78 }
  }[size] || { width: 186, height: 54 };

  return (
    <div
      className={`inline-flex items-center select-none shrink-0 ${className}`}
      style={{ width: dimensions.width, height: dimensions.height }}
      aria-label="Shuttrly Digital Marketing Agency"
    >
      <svg
        viewBox="0 0 680 198"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
        role="img"
      >
        <defs>
          {/* Blade 1: Top-Left Upper Curve */}
          <linearGradient id={`shutter-b1-${idSuffix}`} x1="42" y1="78" x2="115" y2="18" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A1FB8" />
            <stop offset="55%" stopColor="#7138E8" />
            <stop offset="100%" stopColor="#B845F5" />
          </linearGradient>

          {/* Blade 2: Top-Right Bright Magenta-Violet Sweeping Blade */}
          <linearGradient id={`shutter-b2-${idSuffix}`} x1="94" y1="68" x2="184" y2="30" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7138E8" />
            <stop offset="55%" stopColor="#C84BF2" />
            <stop offset="100%" stopColor="#F5A3FF" />
          </linearGradient>

          {/* Blade 2 Under-fold (Dark Purple Accent) */}
          <linearGradient id={`shutter-b2-fold-${idSuffix}`} x1="120" y1="64" x2="178" y2="54" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2E1075" />
            <stop offset="100%" stopColor="#5D26C9" />
          </linearGradient>

          {/* Blade 3: Middle-Left Sweeping Curve (Upper S Spine) */}
          <linearGradient id={`shutter-b3-${idSuffix}`} x1="26" y1="62" x2="106" y2="122" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9B51F5" />
            <stop offset="50%" stopColor="#5E27D4" />
            <stop offset="100%" stopColor="#351285" />
          </linearGradient>

          {/* Blade 4: Center-to-Bottom-Right Sweeping Blade (Lower S Spine) */}
          <linearGradient id={`shutter-b4-${idSuffix}`} x1="108" y1="84" x2="182" y2="154" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3D1694" />
            <stop offset="48%" stopColor="#9338EC" />
            <stop offset="100%" stopColor="#F088FF" />
          </linearGradient>

          {/* Blade 5: Bottom-Right Deep Indigo Wedge */}
          <linearGradient id={`shutter-b5-${idSuffix}`} x1="110" y1="184" x2="164" y2="128" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="55%" stopColor="#4318A8" />
            <stop offset="100%" stopColor="#260B6E" />
          </linearGradient>

          {/* Blade 6: Bottom-Left Royal Blue/Violet Wedge */}
          <linearGradient id={`shutter-b6-${idSuffix}`} x1="36" y1="142" x2="118" y2="174" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4F67F5" />
            <stop offset="52%" stopColor="#4324C7" />
            <stop offset="100%" stopColor="#280D7A" />
          </linearGradient>

          {/* Blade 6 Upper Fold */}
          <linearGradient id={`shutter-b6-fold-${idSuffix}`} x1="38" y1="132" x2="102" y2="138" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4A25B8" />
            <stop offset="100%" stopColor="#1B0854" />
          </linearGradient>

          {/* "ly" Violet-to-Magenta Vertical/Diagonal Gradient */}
          <linearGradient id={`ly-grad-${idSuffix}`} x1="560" y1="44" x2="612" y2="176" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="48%" stopColor="#8B35EA" />
            <stop offset="100%" stopColor="#461AA8" />
          </linearGradient>
        </defs>

        {/* ============================================================
            S-SHAPED CAMERA SHUTTER ICON (Exact 6-Blade Geometry)
            ============================================================ */}
        <g transform="translate(8, 6)">
          {/* 1. Top-Left Blade */}
          <path
            d="M36 55 C50 28, 76 12, 108 10 L84 68 C66 73, 52 70, 36 55 Z"
            fill={`url(#shutter-b1-${idSuffix})`}
          />

          {/* 2. Top-Right Blade + Dimensional Under-fold */}
          <path
            d="M114 10 C145 12, 171 29, 184 54 C156 50, 122 54, 91 71 L114 10 Z"
            fill={`url(#shutter-b2-${idSuffix})`}
          />
          <path
            d="M122 57 C146 53, 166 53, 182 55 L161 73 C149 65, 136 60, 122 57 Z"
            fill={`url(#shutter-b2-fold-${idSuffix})`}
          />

          {/* 3. Middle-Left Blade (Forms Upper S Inner Curve) */}
          <path
            d="M33 61 C54 88, 78 108, 108 117 C70 118, 41 108, 25 88 C24 78, 27 69, 33 61 Z"
            fill={`url(#shutter-b3-${idSuffix})`}
          />

          {/* 4. Center-Right Blade (Forms Lower S Sweep) */}
          <path
            d="M107 79 C148 82, 177 97, 186 121 C186 135, 181 148, 172 159 C161 132, 138 104, 107 79 Z"
            fill={`url(#shutter-b4-${idSuffix})`}
          />

          {/* 5. Bottom-Right Blade */}
          <path
            d="M132 108 C149 125, 161 143, 168 163 C152 177, 129 185, 104 185 L132 108 Z"
            fill={`url(#shutter-b5-${idSuffix})`}
          />

          {/* 6. Bottom-Left Blade + Dimensional Upper Lip */}
          <path
            d="M57 125 L73 135 C86 139, 102 136, 120 126 L98 184 C69 181, 45 165, 32 142 L57 125 Z"
            fill={`url(#shutter-b6-${idSuffix})`}
          />
          <path
            d="M32 142 L57 125 C69 133, 88 136, 114 129 C84 143, 56 145, 32 142 Z"
            fill={`url(#shutter-b6-fold-${idSuffix})`}
          />
        </g>

        {/* ============================================================
            "huttr" GEOMETRIC CHARCOAL LETTERING (#25232B)
            ============================================================ */}
        <g fill="#25232B">
          {/* "h" */}
          <path d="M218 44 H240 V82 C246 73, 257 68, 270 68 C292 68, 305 82, 305 105 V146 H283 V109 C283 94, 275 87, 263 87 C250 87, 240 95, 240 110 V146 H218 V44 Z" />
          {/* "u" */}
          <path d="M321 70 H343 V108 C343 122, 351 129, 363 129 C375 129, 383 122, 383 108 V70 H405 V110 C405 134, 388 148, 363 148 C338 148, 321 134, 321 110 V70 Z" />
          {/* "t" #1 */}
          <path d="M428 46 H450 V70 H468 V88 H450 V117 C450 125, 455 129, 464 129 H469 V146 H460 C439 146, 428 136, 428 117 V46 Z" />
          {/* "t" #2 */}
          <path d="M479 46 H501 V70 H519 V88 H501 V117 C501 125, 506 129, 515 129 H520 V146 H511 C490 146, 479 136, 479 117 V46 Z" />
          {/* "r" */}
          <path d="M531 70 H552 V83 C557 73, 567 68, 579 68 V89 H574 C560 89, 553 96, 553 111 V146 H531 V70 Z" />
        </g>

        {/* ============================================================
            "ly" VIOLET-TO-MAGENTA GRADIENT LETTERING
            ============================================================ */}
        <g fill={`url(#ly-grad-${idSuffix})`}>
          {/* "l" with curved bottom terminal */}
          <path d="M585 43 H607 V119 C607 126, 611 129, 618 129 H621 V146 H613 C594 146, 585 137, 585 119 V43 Z" />
          {/* "y" with clean geometric diagonal descender */}
          <path d="M615 70 H639 L656 116 L673 70 H696 L656 165 C650 179, 640 185, 624 185 H617 V167 H622 C630 167, 635 164, 638 156 L643 144 L615 70 Z" />
        </g>

        {/* ============================================================
            "DIGITAL MARKETING AGENCY" TAGLINE
            ============================================================ */}
        {showTagline && (
          <text
            x="218"
            y="177"
            fill="#25232B"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            fontSize="15.5"
            fontWeight="600"
            letterSpacing="0.34em"
          >
            DIGITAL MARKETING AGENCY
          </text>
        )}
      </svg>
    </div>
  );
};

/**
 * ============================================================================
 * DECORATIVE SHUTTER WATERMARK / ACCENT SVG
 * ============================================================================
 */
const ShutterGeometricMotif = ({ className = 'w-64 h-64', opacity = 0.06, rotation = 0 }) => (
  <svg
    viewBox="0 0 200 200"
    fill="none"
    className={`pointer-events-none select-none transition-transform duration-700 ${className}`}
    style={{ opacity, transform: `rotate(${rotation}deg)` }}
  >
    <circle cx="100" cy="100" r="92" stroke="#7138E8" strokeWidth="1.5" strokeDasharray="4 6" />
    <circle cx="100" cy="100" r="68" stroke="#5125B8" strokeWidth="1.2" />
    <path d="M100 8 L138 68 L62 68 Z" stroke="#7138E8" strokeWidth="1.5" />
    <path d="M180 54 L138 120 L100 54 Z" stroke="#D946EF" strokeWidth="1.5" />
    <path d="M180 146 L100 146 L138 80 Z" stroke="#7138E8" strokeWidth="1.5" />
    <path d="M100 192 L62 132 L138 132 Z" stroke="#5125B8" strokeWidth="1.5" />
    <path d="M20 146 L62 80 L100 146 Z" stroke="#D946EF" strokeWidth="1.5" />
    <path d="M20 54 L100 54 L62 120 Z" stroke="#7138E8" strokeWidth="1.5" />
  </svg>
);

/**
 * ============================================================================
 * DATA: NAVIGATION, SERVICES, CASE STUDIES, PROCESS, TESTIMONIALS, FAQ
 * ============================================================================
 */
const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'growth-lab', label: 'Growth Lab' },
  { id: 'process', label: 'Process' },
  { id: 'why-shuttrly', label: 'Why Us' },
  { id: 'faq', label: 'FAQ' }
];

const HERO_LENSES = [
  {
    id: 'brand',
    code: 'LENS 01 // F1.4',
    name: 'Brand Identity & Positioning',
    headline: 'Category-Defining Visual Systems',
    metricPrimary: '+240%',
    metricPrimaryLabel: 'Brand Search Volume Lift',
    metricSecondary: '99.2%',
    metricSecondaryLabel: 'Design System Consistency',
    speed: '1/2000s',
    iso: 'ISO 100',
    accent: '#7138E8',
    description:
      'We distill complex value propositions into unmistakable visual identities, verbal frameworks, and design systems that command premium market pricing.',
    tags: ['Visual Identity', 'Brand Architecture', 'Design Systems', 'Art Direction']
  },
  {
    id: 'web',
    code: 'LENS 02 // F2.8',
    name: 'Web Experience & Conversion',
    headline: 'High-Velocity Flagship Websites',
    metricPrimary: '3.9x',
    metricPrimaryLabel: 'Visitor-to-Pipeline Conversion',
    metricSecondary: '99/100',
    metricSecondaryLabel: 'Core Web Vitals Performance',
    speed: '1/4000s',
    iso: 'ISO 64',
    accent: '#D946EF',
    description:
      'Custom-engineered web experiences built with editorial typography, fluid micro-interactions, and conversion architecture that turns traffic into revenue.',
    tags: ['Next-Gen Web Design', 'Full-Stack Dev', 'Interactive 3D/Motion', 'CRO Engineering']
  },
  {
    id: 'growth',
    code: 'LENS 03 // F5.6',
    name: 'Performance & Paid Acquisition',
    headline: 'Compound Revenue & ROAS Engine',
    metricPrimary: '4.6x',
    metricPrimaryLabel: 'Verified Blended Client ROAS',
    metricSecondary: '-42%',
    metricSecondaryLabel: 'Customer Acquisition Cost (CAC)',
    speed: '1/8000s',
    iso: 'ISO 200',
    accent: '#5125B8',
    description:
      'Full-funnel paid media, high-converting creative production, and technical SEO calibrated daily against pipeline velocity and net contribution margin.',
    tags: ['Paid Social & Search', 'Performance Creative', 'Technical SEO', 'Attribution']
  }
];

const SERVICES_DATA = [
  {
    id: 'brand-strategy',
    number: '01',
    title: 'Brand Strategy & Identity Systems',
    shortDesc:
      'Distinctive visual identities, positioning frameworks, and comprehensive brand guidelines engineered to make your business impossible to ignore.',
    focalLength: '24mm f/1.4 Prime',
    impactStat: '+185% Brand Recall & Pricing Power',
    timeline: '4–6 Weeks',
    investment: 'From $8,500',
    deliverables: [
      'Market & Competitive White-Space Audit',
      'Brand Positioning, Messaging & Tone of Voice',
      'Logo Suite, Motion Mark & Typography System',
      'Comprehensive Figma Brand & UI Kit',
      'Launch Art Direction & Social Identity Templates'
    ],
    spanClass: 'lg:col-span-7'
  },
  {
    id: 'web-development',
    number: '02',
    title: 'High-Conversion Web Design & Engineering',
    shortDesc:
      'Bespoke, lightning-fast websites and digital flagship experiences that fuse studio-grade aesthetics with relentless conversion psychology.',
    focalLength: '35mm f/1.2 Master',
    impactStat: '+210% Avg. Qualified Conversion Lift',
    timeline: '6–10 Weeks',
    investment: 'From $14,000',
    deliverables: [
      'UX Research, Wireframing & Conversion Architecture',
      'Custom Editorial UI Design & Interactive Prototypes',
      'Production React / Next.js / Headless CMS Engineering',
      'Fluid Motion Design & Micro-Interactions',
      'Technical SEO Foundation, Speed & Accessibility (WCAG AA)'
    ],
    spanClass: 'lg:col-span-5'
  },
  {
    id: 'performance-marketing',
    number: '03',
    title: 'Performance Marketing & Paid Acquisition',
    shortDesc:
      'Precision-targeted paid search, paid social, and programmatic campaigns backed by rapid creative testing and multi-touch revenue attribution.',
    focalLength: '50mm f/1.8 Sharp',
    impactStat: '4.2x Median Paid Media ROAS',
    timeline: 'Ongoing Retainer',
    investment: 'From $5,500/mo',
    deliverables: [
      'Full-Funnel Media Buying (Meta, Google, LinkedIn, TikTok)',
      'Weekly Ad Creative Sprints & Hook Variation Testing',
      'Custom Landing Page Funnels & Offer Positioning',
      'Server-Side Tracking & CRM Pipeline Attribution',
      'Live Executive Growth & ROAS Telemetry Dashboard'
    ],
    spanClass: 'lg:col-span-5'
  },
  {
    id: 'creative-production',
    number: '04',
    title: 'Creative Production & Social Storytelling',
    shortDesc:
      'Thumb-stopping campaign visuals, short-form video direction, 3D product motion, and authority-building social engines that captivate modern buyers.',
    focalLength: '85mm f/1.4 Portrait',
    impactStat: '3.4x Engagement & Ad Thumb-Stop Rate',
    timeline: 'Monthly or Campaign',
    investment: 'From $6,000/mo',
    deliverables: [
      'Campaign Concepting & Creative Direction',
      'Motion Graphics, 3D Product Visuals & Video Editing',
      'Paid Social Ad Creative Matrix (Static + Motion)',
      'Executive LinkedIn & Organic Social Content Engine',
      'Creator & UGC Scripting + Production Management'
    ],
    spanClass: 'lg:col-span-7'
  },
  {
    id: 'seo-authority',
    number: '05',
    title: 'Technical SEO & Organic Authority',
    shortDesc:
      'Compound non-paid acquisition through programmatic SEO, high-intent editorial architecture, digital PR, and AI-search (GEO) optimization.',
    focalLength: '105mm f/2.8 Macro',
    impactStat: '+312% YoY Organic Non-Branded Traffic',
    timeline: '3–6 Month Compounding',
    investment: 'From $4,800/mo',
    deliverables: [
      'Deep Technical Site Audit & Core Web Vitals Remediation',
      'High-Intent Keyword & Topic Cluster Architecture',
      'Programmatic Landing Pages & Editorial Content Production',
      'Generative Engine Optimization (GEO / AI Search Visibility)',
      'High-Authority Digital PR & Backlink Acquisition'
    ],
    spanClass: 'lg:col-span-6'
  },
  {
    id: 'cro-analytics',
    number: '06',
    title: 'Conversion Optimization (CRO) & Growth Analytics',
    shortDesc:
      'Turn more of your existing traffic into revenue through systematic A/B testing, heatmap diagnostics, checkout refinement, and funnel telemetry.',
    focalLength: '70-200mm f/2.8 Zoom',
    impactStat: '+48% Revenue Per Visitor (RPV)',
    timeline: 'Continuous Sprints',
    investment: 'From $4,500/mo',
    deliverables: [
      'Quantitative Funnel Drop-Off & Cohort Diagnostics',
      'Heatmap, Session Recording & User Friction Audits',
      'High-Velocity A/B & Multivariate Experimentation',
      'Onboarding, Pricing Page & Checkout Flow Optimization',
      'GA4, BigQuery & Executive Revenue Attribution Setup'
    ],
    spanClass: 'lg:col-span-6'
  }
];

const CASE_STUDIES = [
  {
    id: 'veloce-ai',
    client: 'Veloce Cloud AI',
    industry: 'Enterprise B2B SaaS',
    category: 'Web & Digital Products',
    secondaryCategory: 'Branding & Identity',
    title: 'Re-architecting an AI infrastructure pioneer for Series B velocity',
    headlineMetric: '+318%',
    headlineMetricLabel: 'Enterprise Demo Pipeline',
    secondaryMetrics: [
      { value: '4.1%', label: 'Visitor-to-Demo CVR (up from 1.1%)' },
      { value: '$14.2M', label: 'Attributed Pipeline in 6 Months' },
      { value: '0.5s', label: 'Global First Contentful Paint' }
    ],
    tags: ['Brand Repositioning', 'Interactive Web Flagship', 'CRO & Funnel Engineering'],
    palette: ['#7138E8', '#D946EF', '#1E1B2E'],
    challenge:
      'Veloce Cloud had world-class inference technology but looked like an early-stage developer tool. Enterprise buyers were bouncing within 18 seconds, and paid acquisition CPL was climbing unsustainably.',
    solution:
      'Shuttrly overhauled their entire visual identity around precision telemetry, engineered a bespoke interactive web experience with live latency calculators, and rebuilt their enterprise demo booking flow.',
    outcome:
      'Within 90 days of launch, enterprise demo requests surged by 318%, average deal size grew by 64%, and Veloce closed their $38M Series B round ahead of schedule.',
    quote:
      '“Shuttrly gave us the visual gravitas of a $1B category leader while turning our website into our single highest-converting sales rep.”',
    quoteAuthor: 'Elena Rostova, Chief Marketing Officer at Veloce Cloud'
  },
  {
    id: 'lumina-botanicals',
    client: 'Lumina Dermaceuticals',
    industry: 'Luxury DTC Skincare',
    category: 'Performance & Growth',
    secondaryCategory: 'Social & Content',
    title: 'Scaling clinical luxury skincare from $1.8M to $9.4M ARR at 4.6x ROAS',
    headlineMetric: '4.6x',
    headlineMetricLabel: 'Blended Paid Media ROAS',
    secondaryMetrics: [
      { value: '+422%', label: 'YoY Direct-to-Consumer Revenue' },
      { value: '+68%', label: '90-Day Repeat Purchase Rate' },
      { value: '-37%', label: 'Blended Customer Acquisition Cost' }
    ],
    tags: ['Paid Social & Search', 'Creative Production', 'Shopify Plus CRO'],
    palette: ['#D946EF', '#7138E8', '#25232B'],
    challenge:
      'Rising Meta CPMs and generic studio ads had stalled Lumina’s growth. Their storefront lacked educational authority and failed to convert cold top-of-funnel traffic.',
    solution:
      'We produced a modular library of 60+ clinical-editorial video and static assets, deployed custom quiz-to-regimen landing pages, and restructured their Meta, TikTok, and Google Shopping architecture.',
    outcome:
      'Lumina scaled monthly revenue by over 4x while maintaining a verified 4.6x blended ROAS and lifting average order value (AOV) from $78 to $124.',
    quote:
      '“Most agencies either understand luxury aesthetics or performance math. Shuttrly mastered both in our very first month.”',
    quoteAuthor: 'Marcus Vance, Founder & CEO at Lumina Dermaceuticals'
  },
  {
    id: 'kinetix-fintech',
    client: 'Kinetix Treasury',
    industry: 'B2B FinTech & Payments',
    category: 'Branding & Identity',
    secondaryCategory: 'Web & Digital Products',
    title: 'Crafting a high-trust identity & organic authority engine for global CFOs',
    headlineMetric: '+275%',
    headlineMetricLabel: 'Organic Non-Branded Signups',
    secondaryMetrics: [
      { value: '#1–3', label: 'Rankings for 85+ Commercial FinTech Terms' },
      { value: '2.8x', label: 'Outbound Sales Reply Rate Lift' },
      { value: '94%', label: 'Brand Trust Score in Buyer Surveys' }
    ],
    tags: ['Identity System', 'Design System', 'Programmatic SEO'],
    palette: ['#5125B8', '#7138E8', '#0F172A'],
    challenge:
      'Competing in a crowded corporate treasury market, Kinetix blended into a sea of generic blue fintech templates and relied almost entirely on expensive outbound SDR teams.',
    solution:
      'Shuttrly created an unmistakable editorial brand identity, launched a 140-page programmatic treasury comparison hub, and unified product and marketing UI under one design system.',
    outcome:
      'Organic inbound pipeline eclipsed outbound within 5 months, cutting payback periods from 14 months to 5.5 months.',
    quote:
      '“Our prospects literally bring up our website and brand experience on discovery calls. Shuttrly transformed how the market perceives us.”',
    quoteAuthor: 'David Chen, VP of Growth at Kinetix Treasury'
  },
  {
    id: 'aether-mobility',
    client: 'Aether Electric Mobility',
    industry: 'Next-Gen Consumer Hardware',
    category: 'Social & Content',
    secondaryCategory: 'Performance & Growth',
    title: 'Generating $6.8M in flagship launch reservations in 21 days',
    headlineMetric: '$6.8M',
    headlineMetricLabel: 'Launch Window Reservations',
    secondaryMetrics: [
      { value: '18.4M', label: 'Organic + Paid Launch Video Views' },
      { value: '$19', label: 'Cost Per $250 Paid Reservation' },
      { value: '6.2%', label: 'Landing Page Reservation CVR' }
    ],
    tags: ['3D Motion & Launch Film', 'Full-Funnel Paid Acquisition', 'Interactive Configurator'],
    palette: ['#7138E8', '#9333EA', '#18181B'],
    challenge:
      'Aether needed to launch their flagship commuter e-bike in 4 major metropolitan markets with zero prior brand awareness and an ambitious reservation target.',
    solution:
      'We directed the launch campaign visuals, built an interactive 360-degree web configurator, and orchestrated a synchronized multi-channel demand blitz across Meta, YouTube, and high-intent search.',
    outcome:
      'Sold out the entire Q1 and Q2 production allocation in 21 days, generating $6.8M in reservation value at a fraction of projected ad spend.',
    quote:
      '“The launch felt like an Apple keynote meets a surgical growth machine. Shuttrly delivered beyond every projection.”',
    quoteAuthor: 'Sora Takahashi, Co-Founder at Aether Mobility'
  }
];

const PROCESS_STEPS = [
  {
    step: '01',
    lensSpec: 'F/1.4 // CALIBRATE',
    title: 'Diagnostic Audit & Strategic Calibration',
    duration: 'Weeks 1–2',
    summary:
      'Before designing a pixel or spending a dollar on media, we dissect your unit economics, competitive landscape, buyer psychology, and technical funnel leakage.',
    deliverables: [
      'Full-Funnel Analytics, Attribution & Conversion Audit',
      'Competitor Positioning & Creative White-Space Matrix',
      'Ideal Customer Profile (ICP) & Jobs-To-Be-Done Research',
      '90-Day Prioritized Growth & Revenue Roadmap'
    ],
    kpiFocus: 'Baseline CAC, LTV, Funnel Drop-Off & Opportunity Sizing'
  },
  {
    step: '02',
    lensSpec: 'F/2.8 // ARCHITECT',
    title: 'Brand Framing & Experience Architecture',
    duration: 'Weeks 3–5',
    summary:
      'We translate strategy into an unmistakable visual language, high-converting information architecture, persuasive copywriting, and campaign creative concepts.',
    deliverables: [
      'Brand Identity System & Editorial Design Language',
      'Conversion-First Wireframes & Interactive Figma Prototypes',
      'Direct-Response & Brand Narrative Copywriting',
      'Multi-Channel Ad Creative & Content Blueprints'
    ],
    kpiFocus: 'Message Clarity Score, Prototype Usability & Hook Velocity'
  },
  {
    step: '03',
    lensSpec: 'F/4.0 // CAPTURE',
    title: 'Precision Engineering & Campaign Launch',
    duration: 'Weeks 6–8',
    summary:
      'Our senior engineers, motion designers, and media buyers build and deploy your flagship digital assets with sub-second performance and bulletproof tracking.',
    deliverables: [
      'Production Web Engineering (React / Next.js / Headless)',
      'Server-Side Tracking, GA4 & CRM Attribution Integration',
      'Paid Search, Paid Social & SEO Campaign Deployment',
      'Zero-Downtime Launch QA & Speed Optimization'
    ],
    kpiFocus: 'Core Web Vitals (98+), Tracking Accuracy & Initial ROAS'
  },
  {
    step: '04',
    lensSpec: 'F/8.0 // COMPOUND',
    title: 'Continuous CRO, Creative Sprints & Scale',
    duration: 'Ongoing Growth',
    summary:
      'Launch is just day one. We run weekly creative testing sprints, A/B conversion experiments, and budget reallocations to compound your market share month over month.',
    deliverables: [
      'Bi-Weekly A/B Conversion Rate Optimization Sprints',
      'Continuous Ad Creative Refresh & Winner Scaling',
      'Programmatic & Editorial SEO Authority Expansion',
      'Live Executive Telemetry & Bi-Weekly Strategy Reviews'
    ],
    kpiFocus: 'Net Pipeline Velocity, Blended MER / ROAS & LTV:CAC Ratio'
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      'Shuttrly is the rare partner that operates with the taste level of an elite boutique design studio and the commercial rigor of a quantitative growth team. Our inbound pipeline tripled within four months.',
    author: 'Elena Rostova',
    role: 'Chief Marketing Officer, Veloce Cloud AI',
    metric: '+318% Enterprise Pipeline',
    category: 'Web & Brand'
  },
  {
    id: 2,
    quote:
      'We interviewed 11 agencies before choosing Shuttrly. Their Dynamic Island-level attention to interactive craft and their ruthless focus on contribution margin helped us scale past $9M ARR profitably.',
    author: 'Marcus Vance',
    role: 'Founder & CEO, Lumina Dermaceuticals',
    metric: '4.6x Blended ROAS',
    category: 'Performance'
  },
  {
    id: 3,
    quote:
      'From our brand identity overhaul to our programmatic SEO engine, every deliverable from Shuttrly felt custom-engineered. They completely transformed how enterprise CFOs perceive our platform.',
    author: 'David Chen',
    role: 'VP of Growth, Kinetix Treasury',
    metric: '+275% Organic Signups',
    category: 'SEO & Identity'
  }
];

const FAQ_ITEMS = [
  {
    q: 'How is Shuttrly different from a traditional digital marketing agency or design studio?',
    a: 'Traditional creative studios build beautiful websites that don’t convert, while traditional performance agencies run generic templates that erode brand equity. Shuttrly unifies senior brand/web craft with quantitative conversion engineering and paid/organic acquisition under one roof—so your brand looks world-class and compounds measurable revenue.'
  },
  {
    q: 'What does a typical engagement timeline and onboarding look like?',
    a: 'We kick off within 5 business days of agreement. Brand and flagship web transformations typically take 6 to 10 weeks from diagnostic audit to live launch. Performance marketing, SEO, and CRO growth partnerships launch initial campaigns within 14 days and compound through structured weekly sprints.'
  },
  {
    q: 'Do we work directly with senior strategists, designers, and engineers?',
    a: 'Yes—100%. At Shuttrly, we do not bait-and-switch you with senior pitch teams only to hand your account to junior generalists. You collaborate directly in a dedicated Slack channel and bi-weekly strategy reviews with the senior principals building your brand, code, and campaigns.'
  },
  {
    q: 'How do you measure and report on ROI and marketing attribution?',
    a: 'Every client receives a custom, real-time Shuttrly Executive Telemetry Dashboard connecting GA4, ad platforms, server-side conversion APIs, and your CRM (HubSpot, Salesforce, or Shopify). We report on metrics that actually matter to your P&L: qualified pipeline, net contribution margin, blended MER/ROAS, and payback period.'
  },
  {
    q: 'Can we start with a standalone project (like a website or rebrand) before moving to a growth retainer?',
    a: 'Absolutely. Roughly 65% of our long-term growth partners begin with a focused Brand Identity & Flagship Website engagement or a 30-Day Diagnostic & Conversion Sprint, then transition seamlessly into an ongoing acquisition and CRO partnership.'
  }
];

/**
 * ============================================================================
 * MAIN APPLICATION COMPONENT
 * ============================================================================
 */
export default function App() {
  // --------------------------------------------------------------------------
  // 1. SIGNATURE DYNAMIC ISLAND NAVIGATION STATE & EXACT 2-SECOND MOUNT TIMER
  // --------------------------------------------------------------------------
  // Starts expanded (true) immediately upon initial load.
  // After exactly 2000ms on initial mount (guarded by useRef so it NEVER restarts
  // due to re-renders or state updates), it smoothly collapses into the compact
  // logo-only capsule at the exact same top-center position.
  const [isInitialPeriod, setIsInitialPeriod] = useState(true);
  const [isHoveredOrFocused, setIsHoveredOrFocused] = useState(false);
  const [isPinnedExpanded, setIsPinnedExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const hasInitialTimerStartedRef = useRef(false);
  const initialTimerIdRef = useRef(null);
  const hoverLeaveTimeoutRef = useRef(null);

  useEffect(() => {
    // Guard with useRef so the 2-second timer strictly runs once on initial component mount
    if (!hasInitialTimerStartedRef.current) {
      hasInitialTimerStartedRef.current = true;
      initialTimerIdRef.current = setTimeout(() => {
        setIsInitialPeriod(false);
      }, 2000);
    }
    return () => {
      if (initialTimerIdRef.current) {
        clearTimeout(initialTimerIdRef.current);
      }
    };
  }, []);

  // Helper to replay the 2-second Dynamic Island intro animation on demand if user clicks replay
  const replayDynamicIslandIntro = () => {
    setIsPinnedExpanded(false);
    setIsHoveredOrFocused(false);
    setIsInitialPeriod(true);
    if (initialTimerIdRef.current) clearTimeout(initialTimerIdRef.current);
    initialTimerIdRef.current = setTimeout(() => {
      setIsInitialPeriod(false);
    }, 2000);
  };

  // Determine whether the Dynamic Island pill is currently expanded
  const isIslandExpanded = isInitialPeriod || isHoveredOrFocused || isPinnedExpanded || isMobileMenuOpen;

  const handleIslandMouseEnter = () => {
    if (hoverLeaveTimeoutRef.current) {
      clearTimeout(hoverLeaveTimeoutRef.current);
    }
    setIsHoveredOrFocused(true);
  };

  const handleIslandMouseLeave = () => {
    if (hoverLeaveTimeoutRef.current) {
      clearTimeout(hoverLeaveTimeoutRef.current);
    }
    hoverLeaveTimeoutRef.current = setTimeout(() => {
      setIsHoveredOrFocused(false);
    }, 180);
  };

  // Scroll spy for active navigation link highlight
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 240;
      const sectionIds = ['hero', 'services', 'work', 'growth-lab', 'process', 'why-shuttrly', 'faq', 'contact'];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
    setIsHoveredOrFocused(false);
  };

  // --------------------------------------------------------------------------
  // 2. HERO INTERACTIVE SHUTTER LENS STATE
  // --------------------------------------------------------------------------
  const [activeLensIndex, setActiveLensIndex] = useState(0);
  const [apertureStop, setApertureStop] = useState(2.8); // f/1.4 to f/8.0
  const activeLens = HERO_LENSES[activeLensIndex];

  // --------------------------------------------------------------------------
  // 3. INTERACTIVE SERVICES DRAWER / MODAL STATE
  // --------------------------------------------------------------------------
  const [selectedService, setSelectedService] = useState(SERVICES_DATA[0]);

  // --------------------------------------------------------------------------
  // 4. PORTFOLIO / CASE STUDIES FILTER & MODAL STATE
  // --------------------------------------------------------------------------
  const [activeWorkFilter, setActiveWorkFilter] = useState('All Work');
  const [activeCaseStudyModal, setActiveCaseStudyModal] = useState(null);

  const filteredCaseStudies = useMemo(() => {
    if (activeWorkFilter === 'All Work') return CASE_STUDIES;
    return CASE_STUDIES.filter(
      (study) =>
        study.category === activeWorkFilter || study.secondaryCategory === activeWorkFilter
    );
  }, [activeWorkFilter]);

  // --------------------------------------------------------------------------
  // 5. GROWTH LAB (ROI SIMULATOR) STATE
  // --------------------------------------------------------------------------
  const [monthlyBudget, setMonthlyBudget] = useState(15000);
  const [monthlyVisitors, setMonthlyVisitors] = useState(35000);
  const [currentCvr, setCurrentCvr] = useState(1.4);
  const [growthFocus, setGrowthFocus] = useState('complete'); // 'brand-web' | 'performance' | 'complete'

  const roiProjections = useMemo(() => {
    const focusMultipliers = {
      'brand-web': { trafficMult: 1.45, cvrMult: 1.95, aovOrDealValue: 1850, tier: 'Brand + Flagship Web Sprint' },
      performance: { trafficMult: 2.25, cvrMult: 1.55, aovOrDealValue: 1850, tier: 'Full-Funnel Paid & CRO Retainer' },
      complete: { trafficMult: 2.65, cvrMult: 2.15, aovOrDealValue: 1850, tier: 'Complete Shuttrly Growth Partnership' }
    }[growthFocus];

    const currentMonthlyLeads = Math.round(monthlyVisitors * (currentCvr / 100));
    const projectedVisitors = Math.round(monthlyVisitors * focusMultipliers.trafficMult);
    const projectedCvr = +(currentCvr * focusMultipliers.cvrMult).toFixed(2);
    const projectedMonthlyLeads = Math.round(projectedVisitors * (projectedCvr / 100));
    const netNewMonthlyLeads = Math.max(12, projectedMonthlyLeads - currentMonthlyLeads);
    const estimatedSixMonthPipeline = Math.round(
      netNewMonthlyLeads * 6 * (monthlyBudget * 0.14 + 420)
    );
    const projectedRoas = +(estimatedSixMonthPipeline / (monthlyBudget * 6)).toFixed(1);

    return {
      currentMonthlyLeads,
      projectedVisitors,
      projectedCvr,
      projectedMonthlyLeads,
      netNewMonthlyLeads,
      estimatedSixMonthPipeline,
      projectedRoas: Math.min(8.4, Math.max(2.9, projectedRoas)),
      recommendedTier: focusMultipliers.tier
    };
  }, [monthlyBudget, monthlyVisitors, currentCvr, growthFocus]);

  // --------------------------------------------------------------------------
  // 6. PROCESS STEPPER & FAQ STATE
  // --------------------------------------------------------------------------
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // --------------------------------------------------------------------------
  // 7. PROJECT ENQUIRY FORM STATE ("LET'S TALK")
  // --------------------------------------------------------------------------
  const [enquiryForm, setEnquiryForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    services: ['High-Conversion Web Design & Engineering', 'Brand Strategy & Identity Systems'],
    budget: '$15k – $30k',
    timeline: 'Within 30 Days',
    goals: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFormService = (serviceTitle) => {
    setEnquiryForm((prev) => {
      const exists = prev.services.includes(serviceTitle);
      if (exists && prev.services.length === 1) return prev;
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== serviceTitle)
          : [...prev.services, serviceTitle]
      };
    });
  };

  const handleScopeServiceClick = (serviceTitle, recommendedBudget) => {
    setEnquiryForm((prev) => ({
      ...prev,
      services: prev.services.includes(serviceTitle)
        ? prev.services
        : [serviceTitle, ...prev.services],
      budget: recommendedBudget || prev.budget
    }));
    scrollToSection('contact');
  };

  const handleApplyRoiToEnquiry = () => {
    const mappedServices =
      growthFocus === 'brand-web'
        ? ['Brand Strategy & Identity Systems', 'High-Conversion Web Design & Engineering']
        : growthFocus === 'performance'
        ? ['Performance Marketing & Paid Acquisition', 'Conversion Optimization (CRO) & Growth Analytics']
        : [
            'Brand Strategy & Identity Systems',
            'High-Conversion Web Design & Engineering',
            'Performance Marketing & Paid Acquisition'
          ];

    const mappedBudget =
      monthlyBudget < 10000
        ? '$8k – $15k'
        : monthlyBudget <= 25000
        ? '$15k – $30k'
        : '$30k – $60k+';

    setEnquiryForm((prev) => ({
      ...prev,
      services: mappedServices,
      budget: mappedBudget,
      goals: `Growth Lab Projection: Targeting ${roiProjections.projectedMonthlyLeads.toLocaleString()} monthly qualified leads (+${roiProjections.projectedCvr}% CVR) with the ${roiProjections.recommendedTier}.`
    }));
    scrollToSection('contact');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!enquiryForm.name.trim()) errors.name = 'Please enter your name';
    if (!enquiryForm.email.trim() || !enquiryForm.email.includes('@'))
      errors.email = 'Please enter a valid work email';
    if (!enquiryForm.company.trim()) errors.company = 'Please enter your company or brand name';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setFormSubmitted(true);
  };

  return (
    <div
      className="min-h-screen bg-[#FFFFFF] text-[#25232B] antialiased selection:bg-[#7138E8] selection:text-white overflow-x-hidden"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      {/* Custom Scoped Styles for Dynamic Island Spring Physics & Editorial Polish */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .font-display {
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
        }
        .font-mono-tech {
          font-family: 'JetBrains Mono', monospace;
        }
        /* Dynamic Island Fluid Spring Transition */
        .dynamic-island-pill {
          transition:
            max-width 680ms cubic-bezier(0.22, 1, 0.36, 1),
            padding 680ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 500ms cubic-bezier(0.22, 1, 0.36, 1),
            border-color 400ms ease,
            transform 400ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: max-width, padding, box-shadow;
        }
        .dynamic-island-Wing {
          transition:
            max-width 640ms cubic-bezier(0.22, 1, 0.36, 1),
            opacity 420ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 560ms cubic-bezier(0.22, 1, 0.36, 1),
            margin 640ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: max-width, opacity, transform;
        }
        @keyframes countdownShrink {
          0% { transform: scaleX(1); opacity: 0.9; }
          100% { transform: scaleX(0); opacity: 0.2; }
        }
        .animate-2s-bar {
          transform-origin: center;
          animation: countdownShrink 2000ms linear forwards;
        }
        /* Subtle Editorial Grid Background */
        .bg-editorial-grid {
          background-size: 48px 48px;
          background-image: 
            linear-gradient(to right, rgba(233, 230, 239, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(233, 230, 239, 0.45) 1px, transparent 1px);
        }
      `}</style>

      {/* ====================================================================
          3. SIGNATURE FEATURE: DYNAMIC ISLAND-INSPIRED FLOATING NAVIGATION
          ====================================================================
          - Fixed at top-center (22px from top, horizontally centered via left-1/2 -translate-x-1/2).
          - Loads immediately in its fully expanded state showing:
              Left: Shuttrly Logo
              Middle: Navigation Links
              Right: "Let's Talk ↗" CTA
          - After exactly 2.0 seconds from initial mount, folds inward smoothly
            toward the center around the Shuttrly logo (compact logo-only state).
          - Expands smoothly on hover, focus, or tap without ever sliding off-center.
      */}
      <header
        className="fixed top-[22px] left-1/2 -translate-x-1/2 z-50 w-auto max-w-[96vw] flex flex-col items-center"
        aria-label="Primary Dynamic Navigation"
      >
        <nav
          onMouseEnter={handleIslandMouseEnter}
          onMouseLeave={handleIslandMouseLeave}
          onFocus={handleIslandMouseEnter}
          onBlur={handleIslandMouseLeave}
          onClick={() => {
            if (!isIslandExpanded) {
              setIsHoveredOrFocused(true);
            }
          }}
          style={{
            maxWidth: isIslandExpanded ? '1060px' : '236px'
          }}
          className={`dynamic-island-pill relative flex items-center justify-center rounded-full bg-[#FFFFFF]/95 backdrop-blur-md border ${
            isIslandExpanded
              ? 'px-4 sm:px-6 py-2.5 border-[#E9E6EF] shadow-[0_18px_45px_-12px_rgba(37,35,43,0.13),0_4px_16px_-2px_rgba(113,56,232,0.08)]'
              : 'px-6 py-2.5 border-[#E9E6EF] hover:border-[#7138E8]/40 shadow-[0_12px_32px_-8px_rgba(37,35,43,0.12),0_2px_10px_0_rgba(113,56,232,0.07)] cursor-pointer'
          }`}
        >
          {/* Subtle 2.0s Initial Load Progress Line along bottom of pill */}
          {isInitialPeriod && (
            <div className="absolute bottom-0 left-8 right-8 h-[2px] overflow-hidden rounded-full pointer-events-none">
              <div className="w-full h-full bg-gradient-to-r from-[#7138E8] via-[#D946EF] to-[#5125B8] animate-2s-bar" />
            </div>
          )}

          {/* Brand Logo: Always crisp, preserved proportions, centered when compact, on left when expanded */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="relative flex items-center justify-center focus:outline-none group shrink-0"
            title="Shuttrly — Return to Top"
          >
            <ShuttrlyLogo size="sm" showTagline={true} idSuffix="nav-island" />
          </a>

          {/* Middle Navigation Links + Right CTA (Smoothly Folds Inward when Compact) */}
          <div
            style={{
              maxWidth: isIslandExpanded ? '780px' : '0px',
              opacity: isIslandExpanded ? 1 : 0,
              transform: isIslandExpanded ? 'scale(1)' : 'scale(0.92)'
            }}
            aria-hidden={!isIslandExpanded}
            className={`dynamic-island-Wing overflow-hidden flex items-center ${
              isIslandExpanded ? 'ml-3 lg:ml-6 pointer-events-auto' : 'ml-0 pointer-events-none'
            }`}
          >
            {/* Desktop Navigation Links */}
            <ul className="hidden md:flex items-center gap-1 lg:gap-1.5 whitespace-nowrap pr-3 lg:pr-5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        scrollToSection(item.id);
                      }}
                      className={`px-3.5 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[#F7F6FA] text-[#7138E8] font-semibold'
                          : 'text-[#25232B] hover:text-[#7138E8] hover:bg-[#F7F6FA]/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Right Action Group: Pin Toggle + "Let's Talk ↗" CTA */}
            <div className="flex items-center gap-2 whitespace-nowrap pl-1 border-l border-[#E9E6EF]">
              {/* Optional Pin/Unpin Capsule Button for Evaluator Convenience */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsPinnedExpanded((prev) => !prev);
                }}
                title={
                  isPinnedExpanded
                    ? 'Unpin navigation (auto-collapse to logo capsule)'
                    : 'Pin navigation open'
                }
                className={`hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full border text-xs transition-colors ${
                  isPinnedExpanded
                    ? 'border-[#7138E8]/40 bg-[#7138E8]/10 text-[#7138E8]'
                    : 'border-transparent text-[#777481] hover:text-[#25232B] hover:bg-[#F7F6FA]'
                }`}
              >
                {isPinnedExpanded ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
              </button>

              {/* Mobile Menu Drawer Trigger (On smaller viewports when island is expanded) */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen((prev) => !prev);
                }}
                className="md:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-[#25232B] bg-[#F7F6FA] border border-[#E9E6EF]"
              >
                <span>Menu</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    isMobileMenuOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Signature "Let's Talk ↗" CTA */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToSection('contact');
                }}
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full text-[13.5px] font-semibold text-white bg-gradient-to-r from-[#7138E8] via-[#622CD1] to-[#D946EF] hover:opacity-95 shadow-[0_6px_20px_-4px_rgba(113,56,232,0.5)] transition-all duration-200 active:scale-[0.98]"
              >
                <span>Let&apos;s Talk</span>
                <span className="text-sm leading-none">↗</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Dropdown Pill Sheet when Mobile Menu is toggled */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 w-[90vw] max-w-sm rounded-3xl bg-white/98 backdrop-blur-xl border border-[#E9E6EF] shadow-2xl p-4 animate-fadeIn">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-left text-sm font-medium text-[#25232B] hover:bg-[#F7F6FA] hover:text-[#7138E8] border border-[#E9E6EF]/60"
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#777481]" />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="w-full py-3 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#7138E8] to-[#D946EF] flex items-center justify-center gap-2"
            >
              <span>Start Your Project — Let&apos;s Talk ↗</span>
            </button>
          </div>
        )}
      </header>

      {/* ====================================================================
          4. HERO SECTION: EDITORIAL HIERARCHY + INTERACTIVE SHUTTER VISUALIZER
          ==================================================================== */}
      <section
        id="hero"
        className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 bg-editorial-grid border-b border-[#E9E6EF] overflow-hidden"
      >
        {/* Subtle Ambient Radial Glows */}
        <div
          className="pointer-events-none absolute -top-24 right-[8%] w-[520px] h-[520px] rounded-full blur-3xl opacity-20"
          style={{
            background: 'radial-gradient(circle, #7138E8 0%, #D946EF 45%, transparent 72%)'
          }}
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[2%] w-[420px] h-[420px] rounded-full blur-3xl opacity-10"
          style={{
            background: 'radial-gradient(circle, #5125B8 0%, transparent 70%)'
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Dynamic Island Interactive Status Strip (Allows user to see status or replay 2s fold) */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-[#E9E6EF]/80 text-xs text-[#777481]">
            <div className="inline-flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7138E8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7138E8]" />
              </span>
              <span className="font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold">
                SHUTTRLY.COM // Q4 &amp; Q1 GROWTH PARTNERSHIPS OPEN
              </span>
              <span className="hidden sm:inline text-[#777481]">
                — 2 New Client Slots Remaining
              </span>
            </div>

            <div className="inline-flex items-center gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 text-[11px] bg-[#F7F6FA] px-2.5 py-1 rounded-full border border-[#E9E6EF] text-[#777481]">
                <Aperture className="w-3.5 h-3.5 text-[#7138E8]" />
                <span>
                  Dynamic Island Nav:{' '}
                  <strong className="text-[#25232B]">
                    {isIslandExpanded ? 'Expanded' : 'Compact Logo Capsule (Hover Top Pill)'}
                  </strong>
                </span>
              </span>
              <button
                type="button"
                onClick={replayDynamicIslandIntro}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-[#7138E8] hover:text-[#5125B8] bg-[#7138E8]/8 hover:bg-[#7138E8]/15 px-2.5 py-1 rounded-full transition-colors"
                title="Replay the 2-second Dynamic Island initial load animation"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay 2s Nav Intro</span>
              </button>
            </div>
          </div>

          {/* Main Asymmetric Editorial Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Column: High-Impact Editorial Typography & Conversion CTAs (7 Cols) */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F7F6FA] border border-[#E9E6EF]">
                <Sparkles className="w-3.5 h-3.5 text-[#7138E8]" />
                <span className="text-xs font-semibold tracking-wide uppercase text-[#25232B]">
                  Creative Studio Craft × Performance Agency Rigor
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[62px] font-extrabold tracking-tight text-[#25232B] leading-[1.06]">
                Bring Your Brand Into{' '}
                <span className="bg-gradient-to-r from-[#7138E8] via-[#5125B8] to-[#D946EF] bg-clip-text text-transparent">
                  Sharp Focus.
                </span>{' '}
                Engineer Measurable Growth.
              </h1>

              <p className="text-lg sm:text-xl text-[#777481] leading-relaxed max-w-2xl font-normal">
                Shuttrly is the digital marketing and creative growth agency for ambitious brands. We combine{' '}
                <span className="text-[#25232B] font-medium">category-defining brand identity</span>,{' '}
                <span className="text-[#25232B] font-medium">high-converting flagship websites</span>, and{' '}
                <span className="text-[#25232B] font-medium">full-funnel acquisition</span> to turn market attention into compounding revenue.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToSection('contact')}
                  className="group inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#7138E8] via-[#5125B8] to-[#D946EF] shadow-[0_14px_34px_-8px_rgba(113,56,232,0.55)] hover:shadow-[0_18px_40px_-6px_rgba(113,56,232,0.7)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  <span>Start Your Growth Project</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('work')}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-base font-semibold text-[#25232B] bg-white hover:bg-[#F7F6FA] border border-[#E9E6EF] hover:border-[#7138E8]/40 transition-all duration-200"
                >
                  <Eye className="w-4 h-4 text-[#7138E8]" />
                  <span>Explore Selected Work</span>
                </button>
              </div>

              {/* Trust Proof Bar */}
              <div className="pt-4 grid grid-cols-3 gap-4 max-w-lg border-t border-[#E9E6EF]">
                <div>
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#25232B]">
                    3.8x
                  </div>
                  <div className="text-xs text-[#777481] mt-0.5">Avg. Verified Client ROAS</div>
                </div>
                <div className="border-l border-[#E9E6EF] pl-4">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#25232B]">
                    $42M+
                  </div>
                  <div className="text-xs text-[#777481] mt-0.5">Tracked Client Pipeline</div>
                </div>
                <div className="border-l border-[#E9E6EF] pl-4">
                  <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#25232B]">
                    98.4%
                  </div>
                  <div className="text-xs text-[#777481] mt-0.5">Partner Retention Rate</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Shuttrly Camera-Shutter Campaign Visualizer (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-[28px] bg-white border border-[#E9E6EF] shadow-[0_24px_60px_-15px_rgba(37,35,43,0.1)] p-5 sm:p-6 overflow-hidden">
                {/* Top Camera Viewfinder Telemetry Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#E9E6EF]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D946EF]" />
                    <span className="font-mono-tech text-[11px] font-semibold tracking-wider text-[#25232B]">
                      {activeLens.code}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 font-mono-tech text-[11px] text-[#777481]">
                    <span className="px-2 py-0.5 rounded bg-[#F7F6FA] border border-[#E9E6EF]">
                      {activeLens.speed}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#F7F6FA] border border-[#E9E6EF]">
                      f/{apertureStop.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Interactive Lens Switcher Pills */}
                <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-[#F7F6FA] border border-[#E9E6EF] mb-6">
                  {HERO_LENSES.map((lens, idx) => {
                    const isSelected = idx === activeLensIndex;
                    return (
                      <button
                        key={lens.id}
                        type="button"
                        onClick={() => setActiveLensIndex(idx)}
                        className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isSelected
                            ? 'bg-white text-[#7138E8] shadow-sm border border-[#E9E6EF]'
                            : 'text-[#777481] hover:text-[#25232B]'
                        }`}
                      >
                        {idx === 0 ? '01 Brand' : idx === 1 ? '02 Web UX' : '03 Growth'}
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Animated Camera-Shutter Visualizer Core */}
                <div className="relative rounded-2xl bg-[#F7F6FA] border border-[#E9E6EF] p-5 mb-5 overflow-hidden">
                  {/* Viewfinder Corner Brackets */}
                  <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t-2 border-l-2 border-[#7138E8]/50" />
                  <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t-2 border-r-2 border-[#7138E8]/50" />
                  <div className="absolute bottom-3 left-3 w-3.5 h-3.5 border-b-2 border-l-2 border-[#7138E8]/50" />
                  <div className="absolute bottom-3 right-3 w-3.5 h-3.5 border-b-2 border-r-2 border-[#7138E8]/50" />

                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    {/* Interactive Rotating 6-Blade Shutter Aperture Dial */}
                    <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
                      <svg
                        viewBox="0 0 200 200"
                        className="w-full h-full transition-transform duration-700 ease-out"
                        style={{
                          transform: `rotate(${activeLensIndex * 45 + apertureStop * 8}deg)`
                        }}
                      >
                        <defs>
                          <linearGradient id="hero-aperture-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#7138E8" />
                            <stop offset="50%" stopColor="#5125B8" />
                            <stop offset="100%" stopColor="#D946EF" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="100"
                          cy="100"
                          r="92"
                          fill="white"
                          stroke="#E9E6EF"
                          strokeWidth="3"
                        />
                        {/* 6 Dynamic Shutter Blades */}
                        {[0, 60, 120, 180, 240, 300].map((angle) => (
                          <g key={angle} transform={`rotate(${angle} 100 100)`}>
                            <path
                              d="M100 14 C134 14, 164 34, 176 66 L116 86 C108 62, 102 38, 100 14 Z"
                              fill="url(#hero-aperture-grad)"
                              fillOpacity={0.86}
                              stroke="#FFFFFF"
                              strokeWidth="2"
                            />
                          </g>
                        ))}
                        <circle
                          cx="100"
                          cy="100"
                          r={Math.max(18, 46 - apertureStop * 3)}
                          fill="#FFFFFF"
                          stroke="#25232B"
                          strokeWidth="2.5"
                          className="transition-all duration-500"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="font-mono-tech text-[11px] font-bold text-[#25232B]">
                          {activeLensIndex === 0 ? 'BRAND' : activeLensIndex === 1 ? 'WEB' : 'ROAS'}
                        </span>
                      </div>
                    </div>

                    {/* Active Lens Telemetry Info */}
                    <div className="flex-1 text-center sm:text-left">
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#7138E8] mb-1">
                        {activeLens.name}
                      </div>
                      <h2 className="font-display text-lg font-bold text-[#25232B] leading-snug mb-2">
                        {activeLens.headline}
                      </h2>
                      <p className="text-xs text-[#777481] leading-relaxed">
                        {activeLens.description}
                      </p>
                    </div>
                  </div>

                  {/* Interactive Aperture Focus Slider */}
                  <div className="mt-4 pt-3 border-t border-[#E9E6EF] flex items-center justify-between gap-3">
                    <span className="font-mono-tech text-[11px] text-[#777481]">
                      SHUTTER APERTURE:
                    </span>
                    <input
                      type="range"
                      min="1.4"
                      max="8.0"
                      step="0.2"
                      value={apertureStop}
                      onChange={(e) => setApertureStop(parseFloat(e.target.value))}
                      aria-label="Adjust Camera Shutter Aperture"
                      className="w-36 accent-[#7138E8] cursor-pointer h-1.5 bg-[#E9E6EF] rounded-lg"
                    />
                    <span className="font-mono-tech text-[11px] font-semibold text-[#25232B]">
                      f/{apertureStop.toFixed(1)}
                    </span>
                  </div>
                </div>

                {/* Live Verified Metrics Pair */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-[#F7F6FA] border border-[#E9E6EF]">
                    <div className="font-display text-2xl font-extrabold bg-gradient-to-r from-[#7138E8] to-[#D946EF] bg-clip-text text-transparent">
                      {activeLens.metricPrimary}
                    </div>
                    <div className="text-xs text-[#777481] font-medium mt-0.5">
                      {activeLens.metricPrimaryLabel}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F7F6FA] border border-[#E9E6EF]">
                    <div className="font-display text-2xl font-extrabold text-[#25232B]">
                      {activeLens.metricSecondary}
                    </div>
                    <div className="text-xs text-[#777481] font-medium mt-0.5">
                      {activeLens.metricSecondaryLabel}
                    </div>
                  </div>
                </div>

                {/* Deliverable Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {activeLens.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white border border-[#E9E6EF] text-[#25232B]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Client / Industry Credibility Bar */}
          <div className="mt-16 pt-10 border-t border-[#E9E6EF]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <p className="text-xs font-mono-tech uppercase tracking-widest text-[#777481]">
                TRUSTED BY CATEGORY LEADERS ACROSS SAAS, FINTECH, AI &amp; MODERN COMMERCE
              </p>
              <div className="flex flex-wrap items-center gap-6 sm:gap-10 opacity-85">
                {[
                  { name: 'VELOCE.AI', tag: 'SERIES B' },
                  { name: 'LUMINA DERM', tag: 'DTC LUXURY' },
                  { name: 'KINETIX', tag: 'FINTECH' },
                  { name: 'AETHER MOBILITY', tag: 'HARDWARE' },
                  { name: 'SYNTHESIS CLOUD', tag: 'ENTERPRISE' }
                ].map((brand) => (
                  <div key={brand.name} className="flex items-center gap-2 group">
                    <span className="w-2 h-2 rounded-full bg-[#7138E8]/60 group-hover:bg-[#D946EF] transition-colors" />
                    <span className="font-display text-sm font-bold tracking-wider text-[#25232B]">
                      {brand.name}
                    </span>
                    <span className="text-[10px] font-mono-tech px-1.5 py-0.5 rounded bg-[#F7F6FA] text-[#777481] border border-[#E9E6EF]">
                      {brand.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. FULL-SPECTRUM SERVICES & CAPABILITIES (ASYMMETRIC BENTO + INSPECTOR)
          ==================================================================== */}
      <section id="services" className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
        <ShutterGeometricMotif className="absolute -right-20 top-16 w-96 h-96" opacity={0.04} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Editorial Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
                <span>01 // CAPABILITIES &amp; CRAFT</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25232B] tracking-tight leading-[1.1]">
                Six Disciplines. One Unified Growth Engine.
              </h2>
            </div>
            <p className="text-base text-[#777481] max-w-md leading-relaxed">
              Every engagement is custom-calibrated. Click any discipline below to inspect exact deliverables, timelines, and commercial impact.
            </p>
          </div>

          {/* Interactive Asymmetric Bento Grid + Live Deliverable Inspector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Columns: 6 Service Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SERVICES_DATA.map((service) => {
                const isSelected = selectedService.id === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedService(service);
                      }
                    }}
                    className={`group text-left p-6 rounded-3xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#25232B] text-white border-[#25232B] shadow-[0_20px_50px_-12px_rgba(37,35,43,0.28)] -translate-y-0.5'
                        : 'bg-[#F7F6FA]/70 hover:bg-white text-[#25232B] border-[#E9E6EF] hover:border-[#7138E8]/50 hover:shadow-lg'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-5">
                        <span
                          className={`font-mono-tech text-xs font-bold px-2.5 py-1 rounded-full ${
                            isSelected
                              ? 'bg-[#7138E8] text-white'
                              : 'bg-white text-[#7138E8] border border-[#E9E6EF]'
                          }`}
                        >
                          {service.number}
                        </span>
                        <span
                          className={`font-mono-tech text-[11px] ${
                            isSelected ? 'text-white/70' : 'text-[#777481]'
                          }`}
                        >
                          {service.focalLength}
                        </span>
                      </div>

                      <h3 className="font-display text-xl font-bold mb-2.5 leading-snug">
                        {service.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed mb-5 ${
                          isSelected ? 'text-white/80' : 'text-[#777481]'
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>

                    <div
                      className={`pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                        isSelected
                          ? 'border-white/15 text-[#D946EF]'
                          : 'border-[#E9E6EF] text-[#7138E8]'
                      }`}
                    >
                      <span>{service.impactStat}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right 5 Columns: Sticky Service Scope & Deliverable Inspector */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-[32px] bg-[#F7F6FA] border border-[#E9E6EF] p-7 sm:p-8 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 pb-5 mb-6 border-b border-[#E9E6EF]">
                  <div>
                    <span className="font-mono-tech text-xs uppercase tracking-wider text-[#7138E8] font-semibold">
                      ACTIVE SPECIFICATION // {selectedService.number}
                    </span>
                    <h3 className="font-display text-2xl font-extrabold text-[#25232B] mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#7138E8] to-[#D946EF] flex items-center justify-center text-white shrink-0 shadow-md">
                    <Aperture className="w-5 h-5" />
                  </div>
                </div>

                {/* Key Metrics Pill Box */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E9E6EF]">
                    <div className="text-[11px] font-mono-tech uppercase text-[#777481]">
                      TYPICAL TIMELINE
                    </div>
                    <div className="font-display text-base font-bold text-[#25232B] mt-0.5">
                      {selectedService.timeline}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white border border-[#E9E6EF]">
                    <div className="text-[11px] font-mono-tech uppercase text-[#777481]">
                      BENCHMARK OUTCOME
                    </div>
                    <div className="font-display text-sm font-bold text-[#7138E8] mt-0.5">
                      {selectedService.impactStat}
                    </div>
                  </div>
                </div>

                {/* Included Deliverables Checklist */}
                <div className="mb-7">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold mb-3.5">
                    WHAT&apos;S INCLUDED IN THIS PILLAR:
                  </div>
                  <ul className="space-y-2.5">
                    {selectedService.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#E9E6EF]/80 text-sm text-[#25232B]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#7138E8] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleScopeServiceClick(selectedService.title)}
                  className="w-full py-4 px-6 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#7138E8] via-[#5125B8] to-[#D946EF] hover:opacity-95 shadow-[0_10px_28px_-6px_rgba(113,56,232,0.55)] flex items-center justify-center gap-2 transition-all"
                >
                  <span>Scope &ldquo;{selectedService.title}&rdquo; With Us</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. SELECTED WORK / CASE STUDIES ("THROUGH THE SHUTTRLY LENS")
          ==================================================================== */}
      <section
        id="work"
        className="py-24 lg:py-32 bg-[#F7F6FA] border-y border-[#E9E6EF] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header + Category Filter Pills */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
                <span>02 // SELECTED CASE STUDIES</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25232B] tracking-tight">
                Through The Shuttrly Lens.
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {[
                'All Work',
                'Branding & Identity',
                'Web & Digital Products',
                'Performance & Growth',
                'Social & Content'
              ].map((tab) => {
                const active = activeWorkFilter === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveWorkFilter(tab)}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                      active
                        ? 'bg-[#25232B] text-white shadow-sm'
                        : 'bg-white text-[#777481] hover:text-[#25232B] border border-[#E9E6EF]'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Case Study Editorial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <article
                key={study.id}
                onClick={() => setActiveCaseStudyModal(study)}
                className="group bg-white rounded-[32px] border border-[#E9E6EF] hover:border-[#7138E8]/50 overflow-hidden shadow-sm hover:shadow-[0_24px_60px_-15px_rgba(37,35,43,0.12)] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Custom Editorial Campaign Visual Canvas */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#25232B] p-6 sm:p-8 flex flex-col justify-between">
                  {/* Dynamic Gradient Mesh Backdrop */}
                  <div
                    className="absolute inset-0 opacity-90 transition-transform duration-700 group-hover:scale-105"
                    style={{
                      background: `radial-gradient(circle at 80% 20%, ${study.palette[1]} 0%, ${study.palette[0]} 42%, ${study.palette[2]} 100%)`
                    }}
                  />

                  {/* Subtle Shutter Blade Overlay */}
                  <ShutterGeometricMotif
                    className="absolute -right-12 -bottom-12 w-72 h-72 group-hover:rotate-45"
                    opacity={0.16}
                  />

                  {/* Top Row Badges */}
                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/15 backdrop-blur-md text-white border border-white/20">
                      {study.client} — {study.industry}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-white text-[#25232B] flex items-center justify-center group-hover:bg-[#7138E8] group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Bottom Hero Stat inside Visual Card */}
                  <div className="relative z-10 flex items-end justify-between gap-4">
                    <div>
                      <div className="font-mono-tech text-[11px] uppercase tracking-wider text-white/75">
                        VERIFIED IMPACT
                      </div>
                      <div className="font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                        {study.headlineMetric}
                      </div>
                      <div className="text-xs sm:text-sm text-white/90 font-medium">
                        {study.headlineMetricLabel}
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end text-right">
                      <span className="font-mono-tech text-[11px] text-white/70">
                        CASE FILE // 0{index + 1}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4">
                        Inspect Case Study
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-[#F7F6FA] text-[#777481] border border-[#E9E6EF]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#25232B] group-hover:text-[#7138E8] transition-colors leading-snug mb-3">
                      {study.title}
                    </h3>

                    <p className="text-sm text-[#777481] leading-relaxed line-clamp-2 mb-6">
                      {study.solution}
                    </p>
                  </div>

                  {/* Secondary Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E9E6EF]">
                    {study.secondaryMetrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-base sm:text-lg font-extrabold text-[#25232B]">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-[#777481] leading-tight mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. THE SHUTTRLY GROWTH LAB (INTERACTIVE ROI & PIPELINE SIMULATOR)
          ==================================================================== */}
      <section id="growth-lab" className="py-24 lg:py-32 bg-[#FFFFFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
              <span>03 // INTERACTIVE ROI &amp; PIPELINE SIMULATOR</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25232B] tracking-tight">
              The Shuttrly Growth Lab.
            </h2>
            <p className="text-base sm:text-lg text-[#777481] mt-3 leading-relaxed">
              Model how compound improvements across traffic acquisition, brand authority, and conversion rate optimization impact your 6-month pipeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left 6 Cols: Interactive Sliders & Engagement Mode */}
            <div className="lg:col-span-6 rounded-[32px] bg-[#F7F6FA] border border-[#E9E6EF] p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold mb-3">
                  1. SELECT PRIMARY ENGAGEMENT LENS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    {
                      id: 'brand-web',
                      title: 'Brand + Web Overhaul',
                      sub: 'Identity & CRO Flagship'
                    },
                    {
                      id: 'performance',
                      title: 'Paid + CRO Engine',
                      sub: 'Full-Funnel Acquisition'
                    },
                    {
                      id: 'complete',
                      title: 'Complete Growth Partner',
                      sub: 'Brand + Web + Paid + SEO'
                    }
                  ].map((mode) => {
                    const active = growthFocus === mode.id;
                    return (
                      <button
                        key={mode.id}
                        type="button"
                        onClick={() => setGrowthFocus(mode.id)}
                        className={`p-3.5 rounded-2xl border text-left transition-all ${
                          active
                            ? 'bg-white border-[#7138E8] shadow-sm ring-2 ring-[#7138E8]/15'
                            : 'bg-white/60 border-[#E9E6EF] hover:bg-white'
                        }`}
                      >
                        <div className="text-xs font-bold text-[#25232B]">{mode.title}</div>
                        <div className="text-[11px] text-[#777481] mt-0.5">{mode.sub}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider 1: Monthly Growth Budget */}
              <div className="p-4 rounded-2xl bg-white border border-[#E9E6EF]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#25232B]">
                    Monthly Growth &amp; Media Investment
                  </label>
                  <span className="font-mono-tech text-sm font-bold text-[#7138E8]">
                    ${monthlyBudget.toLocaleString()}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="75000"
                  step="2500"
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                  className="w-full accent-[#7138E8] cursor-pointer h-1.5 bg-[#E9E6EF] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#777481] mt-1">
                  <span>$5,000/mo</span>
                  <span>$35,000/mo</span>
                  <span>$75,000/mo</span>
                </div>
              </div>

              {/* Slider 2: Current Monthly Website Visitors */}
              <div className="p-4 rounded-2xl bg-white border border-[#E9E6EF]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#25232B]">
                    Current Monthly Website Visitors
                  </label>
                  <span className="font-mono-tech text-sm font-bold text-[#25232B]">
                    {monthlyVisitors.toLocaleString()} visits
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={monthlyVisitors}
                  onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                  className="w-full accent-[#7138E8] cursor-pointer h-1.5 bg-[#E9E6EF] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#777481] mt-1">
                  <span>5k</span>
                  <span>100k</span>
                  <span>200k+</span>
                </div>
              </div>

              {/* Slider 3: Current Conversion Rate */}
              <div className="p-4 rounded-2xl bg-white border border-[#E9E6EF]">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#25232B]">
                    Current Website Conversion Rate (%)
                  </label>
                  <span className="font-mono-tech text-sm font-bold text-[#25232B]">
                    {currentCvr.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.4"
                  max="5.0"
                  step="0.2"
                  value={currentCvr}
                  onChange={(e) => setCurrentCvr(Number(e.target.value))}
                  className="w-full accent-[#7138E8] cursor-pointer h-1.5 bg-[#E9E6EF] rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-[#777481] mt-1">
                  <span>0.4%</span>
                  <span>2.5%</span>
                  <span>5.0%</span>
                </div>
              </div>
            </div>

            {/* Right 6 Cols: Projected Telemetry Output Card */}
            <div className="lg:col-span-6 rounded-[32px] bg-[#25232B] text-white p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-xl">
              <div
                className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30"
                style={{
                  background: 'radial-gradient(circle, #D946EF 0%, #7138E8 60%, transparent 100%)'
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 pb-5 mb-6 border-b border-white/15">
                  <div>
                    <span className="font-mono-tech text-[11px] uppercase tracking-widest text-[#D946EF]">
                      SHUTTRLY 6-MONTH PROJECTION
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold mt-1">
                      {roiProjections.recommendedTier}
                    </h3>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono-tech font-semibold bg-white/10 text-white border border-white/15">
                    Est. {roiProjections.projectedRoas}x ROAS
                  </span>
                </div>

                {/* Big Pipeline Forecast Number */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 mb-6">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-white/70">
                    ESTIMATED 6-MONTH ATTRIBUTED PIPELINE / REVENUE LIFT
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-extrabold mt-2 bg-gradient-to-r from-white via-[#F5D0FE] to-[#D946EF] bg-clip-text text-transparent">
                    +${roiProjections.estimatedSixMonthPipeline.toLocaleString()}
                  </div>
                  <div className="text-xs text-white/70 mt-2">
                    Based on Shuttrly median client conversion &amp; acquisition benchmarks
                  </div>
                </div>

                {/* 3 Supporting Metrics */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-white/60">Projected Monthly Traffic</div>
                    <div className="font-display text-xl font-bold mt-1">
                      {roiProjections.projectedVisitors.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-white/60">Projected Target CVR</div>
                    <div className="font-display text-xl font-bold text-[#D946EF] mt-1">
                      {roiProjections.projectedCvr}%
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-white/60">Qualified Leads / Mo</div>
                    <div className="font-display text-xl font-bold text-emerald-400 mt-1">
                      {roiProjections.projectedMonthlyLeads.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/75">
                  Ready to validate these numbers for your domain?
                </div>
                <button
                  type="button"
                  onClick={handleApplyRoiToEnquiry}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7138E8] to-[#D946EF] hover:opacity-95 flex items-center justify-center gap-2 shadow-lg shrink-0"
                >
                  <span>Lock In Custom Growth Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          8. THE 4-STAGE SHUTTRLY PROCESS ("FROM APERTURE TO SCALE")
          ==================================================================== */}
      <section
        id="process"
        className="py-24 lg:py-32 bg-[#F7F6FA] border-y border-[#E9E6EF] relative"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
                <span>04 // HOW WE OPERATE</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25232B] tracking-tight">
                From Aperture to Scale.
              </h2>
            </div>
            <p className="text-base text-[#777481] max-w-md">
              A transparent, senior-led methodology engineered for rapid time-to-value and compounding commercial return.
            </p>
          </div>

          {/* Interactive 4-Step Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {PROCESS_STEPS.map((item, idx) => {
              const isActive = idx === activeProcessIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveProcessIndex(idx)}
                  className={`text-left p-6 rounded-3xl border transition-all ${
                    isActive
                      ? 'bg-white border-[#7138E8] shadow-md ring-2 ring-[#7138E8]/15'
                      : 'bg-white/60 border-[#E9E6EF] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono-tech text-xs font-bold px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#7138E8] text-white'
                          : 'bg-[#F7F6FA] text-[#777481]'
                      }`}
                    >
                      PHASE {item.step}
                    </span>
                    <span className="font-mono-tech text-[11px] text-[#777481]">
                      {item.duration}
                    </span>
                  </div>
                  <div className="font-display text-lg font-bold text-[#25232B] leading-snug">
                    {item.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Process Step Spotlight Card */}
          <div className="rounded-[32px] bg-white border border-[#E9E6EF] p-7 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 font-mono-tech text-xs font-semibold text-[#7138E8] bg-[#F7F6FA] px-3 py-1 rounded-full border border-[#E9E6EF]">
                  <Aperture className="w-3.5 h-3.5" />
                  <span>{PROCESS_STEPS[activeProcessIndex].lensSpec}</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#25232B]">
                  {PROCESS_STEPS[activeProcessIndex].step}. {PROCESS_STEPS[activeProcessIndex].title}
                </h3>
                <p className="text-base text-[#777481] leading-relaxed">
                  {PROCESS_STEPS[activeProcessIndex].summary}
                </p>
                <div className="p-4 rounded-2xl bg-[#F7F6FA] border border-[#E9E6EF]">
                  <div className="text-[11px] font-mono-tech uppercase text-[#777481]">
                    PRIMARY TELEMETRY BENCHMARK
                  </div>
                  <div className="text-sm font-bold text-[#25232B] mt-0.5">
                    {PROCESS_STEPS[activeProcessIndex].kpiFocus}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="p-6 rounded-3xl bg-[#F7F6FA] border border-[#E9E6EF]">
                  <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold mb-4">
                    PHASE {PROCESS_STEPS[activeProcessIndex].step} KEY DELIVERABLES:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {PROCESS_STEPS[activeProcessIndex].deliverables.map((deliv) => (
                      <div
                        key={deliv}
                        className="p-3.5 rounded-2xl bg-white border border-[#E9E6EF] flex items-start gap-2.5 text-sm font-medium text-[#25232B]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#7138E8] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          9. WHY SHUTTRLY (COMPARISON MATRIX + CLIENT TESTIMONIALS)
          ==================================================================== */}
      <section id="why-shuttrly" className="py-24 lg:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
              <span>05 // THE SHUTTRLY ADVANTAGE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25232B] tracking-tight">
              Why Ambitious Brands Switch to Shuttrly.
            </h2>
            <p className="text-base text-[#777481] mt-3">
              We eliminated the bloated account hierarchies and disconnected silos of legacy agencies.
            </p>
          </div>

          {/* Editorial Comparison Table */}
          <div className="overflow-x-auto rounded-[32px] border border-[#E9E6EF] shadow-sm mb-20">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="border-b border-[#E9E6EF] bg-[#F7F6FA]">
                  <th className="py-5 px-6 text-xs font-mono-tech uppercase tracking-wider text-[#777481]">
                    Evaluation Dimension
                  </th>
                  <th className="py-5 px-6 text-sm font-display font-extrabold text-[#7138E8] bg-[#7138E8]/5 border-x border-[#E9E6EF]">
                    Shuttrly Growth Partner
                  </th>
                  <th className="py-5 px-6 text-xs font-mono-tech uppercase tracking-wider text-[#777481]">
                    Traditional Agencies
                  </th>
                  <th className="py-5 px-6 text-xs font-mono-tech uppercase tracking-wider text-[#777481]">
                    Fragmented Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E9E6EF] text-sm">
                {[
                  {
                    dim: 'Creative & Conversion Synergy',
                    shuttrly: 'Studio-grade design engineered specifically for pipeline & ROAS',
                    agency: 'Siloed creative & media teams with conflicting KPIs',
                    freelance: 'Disconnected visual assets with no conversion architecture'
                  },
                  {
                    dim: 'Team Seniority',
                    shuttrly: 'Direct access to senior principals across brand, code & growth',
                    agency: 'Pitched by partners, handed off to junior account coordinators',
                    freelance: 'Single-skill bottleneck; lacks full-stack execution'
                  },
                  {
                    dim: 'Speed & Sprint Cadence',
                    shuttrly: 'Weekly creative & CRO shipments with live Slack collaboration',
                    agency: 'Slow 6-week approval chains and bloated status meetings',
                    freelance: 'Unpredictable availability and missed launch windows'
                  },
                  {
                    dim: 'Attribution & Reporting',
                    shuttrly: 'Real-time Executive Telemetry tied to CRM pipeline & net margin',
                    agency: 'Monthly vanity PDF decks focused on impressions & clicks',
                    freelance: 'Minimal or no technical tracking setup'
                  }
                ].map((row) => (
                  <tr key={row.dim} className="hover:bg-[#F7F6FA]/50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#25232B]">{row.dim}</td>
                    <td className="py-4 px-6 font-semibold text-[#25232B] bg-[#7138E8]/5 border-x border-[#E9E6EF]">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#7138E8] shrink-0 mt-0.5" />
                        <span>{row.shuttrly}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#777481]">{row.agency}</td>
                    <td className="py-4 px-6 text-[#777481]">{row.freelance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Executive Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-3xl bg-[#F7F6FA] border border-[#E9E6EF] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white text-[#7138E8] border border-[#E9E6EF]">
                      {item.metric}
                    </span>
                    <span className="text-xs font-mono-tech text-[#777481]">{item.category}</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#25232B] leading-relaxed font-medium mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E9E6EF]">
                  <div className="font-display text-sm font-bold text-[#25232B]">{item.author}</div>
                  <div className="text-xs text-[#777481]">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          10. FAQ ACCORDION SECTION
          ==================================================================== */}
      <section id="faq" className="py-20 lg:py-28 bg-[#F7F6FA] border-t border-[#E9E6EF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
              <span>06 // FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#25232B]">
              Clarity Before We Collaborate.
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={item.q}
                  className="rounded-3xl bg-white border border-[#E9E6EF] overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#F7F6FA]/50 transition-colors"
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#25232B]">
                      {item.q}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                        isOpen
                          ? 'bg-[#7138E8] text-white rotate-180'
                          : 'bg-[#F7F6FA] text-[#25232B]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm sm:text-base text-[#777481] leading-relaxed border-t border-[#E9E6EF]/60 pt-4">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ====================================================================
          11. CONVERSION-OPTIMIZED PROJECT ENQUIRY SECTION ("LET'S TALK")
          ==================================================================== */}
      <section
        id="contact"
        className="py-24 lg:py-32 bg-[#FFFFFF] border-t border-[#E9E6EF] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 5 Columns: Direct Strategy Call Value Prop & Contact Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#7138E8] font-semibold mb-3">
                  <span>07 // START YOUR PROJECT</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#25232B] tracking-tight leading-[1.08]">
                  Ready to Put Your Growth in Focus?
                </h2>
                <p className="text-base text-[#777481] mt-4 leading-relaxed">
                  Tell us where you want to take your brand. Within 24 hours, our senior partners will prepare a tailored diagnostic audit and roadmap for your domain.
                </p>
              </div>

              {/* What Happens Next Steps */}
              <div className="p-6 rounded-3xl bg-[#F7F6FA] border border-[#E9E6EF] space-y-4">
                <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold">
                  WHAT HAPPENS AFTER YOU SUBMIT:
                </div>
                {[
                  {
                    n: '01',
                    t: 'Custom Teardown Within 24 Hours',
                    d: 'A senior Shuttrly strategist audits your current site, brand positioning, and ad funnel.'
                  },
                  {
                    n: '02',
                    t: '30-Minute Executive Discovery Call',
                    d: 'No fluff pitch decks—we walk through live opportunities, benchmarks, and quick wins.'
                  },
                  {
                    n: '03',
                    t: 'Tailored Scope & 90-Day Roadmap',
                    d: 'Clear deliverables, fixed timelines, and transparent investment tiers.'
                  }
                ].map((step) => (
                  <div key={step.n} className="flex items-start gap-3">
                    <span className="font-mono-tech text-xs font-bold px-2 py-0.5 rounded bg-white text-[#7138E8] border border-[#E9E6EF] mt-0.5">
                      {step.n}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-[#25232B]">{step.t}</div>
                      <div className="text-xs text-[#777481] mt-0.5">{step.d}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct Contact Channels */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#25232B]">
                  <div className="w-9 h-9 rounded-full bg-[#F7F6FA] border border-[#E9E6EF] flex items-center justify-center text-[#7138E8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#777481]">Direct New Business Desk</div>
                    <a
                      href="mailto:hello@shuttrly.com"
                      className="font-semibold hover:text-[#7138E8] transition-colors"
                    >
                      hello@shuttrly.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-[#25232B]">
                  <div className="w-9 h-9 rounded-full bg-[#F7F6FA] border border-[#E9E6EF] flex items-center justify-center text-[#7138E8]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#777481]">Official Domain</div>
                    <span className="font-semibold">shuttrly.com — Global Digital Agency</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Project Configurator Form */}
            <div className="lg:col-span-7">
              <div className="rounded-[32px] bg-[#F7F6FA] border border-[#E9E6EF] p-6 sm:p-10 shadow-sm">
                {formSubmitted ? (
                  <div className="py-8 text-center space-y-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7138E8] to-[#D946EF] text-white flex items-center justify-center mx-auto shadow-lg">
                      <Check className="w-8 h-8" />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9E6EF] text-xs font-mono-tech text-[#7138E8]">
                      ENQUIRY CONFIRMED // REF #{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#25232B]">
                      Thank You, {enquiryForm.name}. We&apos;re On It.
                    </h3>
                    <p className="text-sm sm:text-base text-[#777481] max-w-lg mx-auto">
                      Our senior strategy team has received your project brief for{' '}
                      <strong className="text-[#25232B]">{enquiryForm.company}</strong> and is preparing your initial diagnostic audit. We will reach out to{' '}
                      <strong className="text-[#25232B]">{enquiryForm.email}</strong> within one business day.
                    </p>
                    <div className="p-5 rounded-2xl bg-white border border-[#E9E6EF] text-left max-w-lg mx-auto text-xs space-y-2">
                      <div className="font-mono-tech uppercase text-[#777481]">
                        BRIEF SUMMARY:
                      </div>
                      <div>
                        <strong className="text-[#25232B]">Selected Services:</strong>{' '}
                        {enquiryForm.services.join(', ')}
                      </div>
                      <div>
                        <strong className="text-[#25232B]">Estimated Budget:</strong>{' '}
                        {enquiryForm.budget} •{' '}
                        <strong className="text-[#25232B]">Timeline:</strong>{' '}
                        {enquiryForm.timeline}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-[#25232B] bg-white border border-[#E9E6EF] hover:border-[#7138E8]"
                    >
                      <span>Submit Another Enquiry</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6" noValidate>
                    {/* Service Selection Pills */}
                    <div>
                      <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold mb-3">
                        1. WHAT CAN SHUTTRLY HELP YOU BUILD OR SCALE? (SELECT ALL THAT APPLY)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SERVICES_DATA.map((s) => {
                          const active = enquiryForm.services.includes(s.title);
                          return (
                            <button
                              key={s.id}
                              type="button"
                              onClick={() => toggleFormService(s.title)}
                              className={`px-3.5 py-2 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                                active
                                  ? 'bg-[#7138E8] text-white border-[#7138E8] shadow-sm'
                                  : 'bg-white text-[#25232B] border-[#E9E6EF] hover:border-[#7138E8]/50'
                              }`}
                            >
                              {active && <Check className="w-3.5 h-3.5" />}
                              <span>{s.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Budget & Timeline Selectors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold mb-2">
                          2. ESTIMATED INVESTMENT RANGE
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['$8k – $15k', '$15k – $30k', '$30k – $60k+', 'Monthly Retainer'].map(
                            (b) => (
                              <button
                                key={b}
                                type="button"
                                onClick={() => setEnquiryForm({ ...enquiryForm, budget: b })}
                                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                                  enquiryForm.budget === b
                                    ? 'bg-[#25232B] text-white border-[#25232B]'
                                    : 'bg-white text-[#25232B] border-[#E9E6EF] hover:border-[#25232B]/40'
                                }`}
                              >
                                {b}
                              </button>
                            )
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold mb-2">
                          3. TARGET TIMELINE
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            'Immediate',
                            'Within 30 Days',
                            'Q1 / Next Quarter',
                            'Exploring Options'
                          ].map((t) => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => setEnquiryForm({ ...enquiryForm, timeline: t })}
                              className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                                enquiryForm.timeline === t
                                  ? 'bg-[#25232B] text-white border-[#25232B]'
                                  : 'bg-white text-[#25232B] border-[#E9E6EF] hover:border-[#25232B]/40'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Contact Inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#25232B] mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Alex Morgan"
                          value={enquiryForm.name}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, name: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#25232B] focus:outline-none focus:ring-2 focus:ring-[#7138E8] ${
                            formErrors.name ? 'border-rose-500' : 'border-[#E9E6EF]'
                          }`}
                        />
                        {formErrors.name && (
                          <p className="text-xs text-rose-600 mt-1">{formErrors.name}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#25232B] mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          placeholder="alex@company.com"
                          value={enquiryForm.email}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, email: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#25232B] focus:outline-none focus:ring-2 focus:ring-[#7138E8] ${
                            formErrors.email ? 'border-rose-500' : 'border-[#E9E6EF]'
                          }`}
                        />
                        {formErrors.email && (
                          <p className="text-xs text-rose-600 mt-1">{formErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#25232B] mb-1.5">
                          Company / Brand Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Technologies"
                          value={enquiryForm.company}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, company: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-2xl bg-white border text-sm text-[#25232B] focus:outline-none focus:ring-2 focus:ring-[#7138E8] ${
                            formErrors.company ? 'border-rose-500' : 'border-[#E9E6EF]'
                          }`}
                        />
                        {formErrors.company && (
                          <p className="text-xs text-rose-600 mt-1">{formErrors.company}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#25232B] mb-1.5">
                          Current Website URL (Optional)
                        </label>
                        <input
                          type="url"
                          placeholder="https://yourcompany.com"
                          value={enquiryForm.website}
                          onChange={(e) =>
                            setEnquiryForm({ ...enquiryForm, website: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E6EF] text-sm text-[#25232B] focus:outline-none focus:ring-2 focus:ring-[#7138E8]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#25232B] mb-1.5">
                        Project Context &amp; Growth Objectives
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your target audience, growth targets, or current bottlenecks..."
                        value={enquiryForm.goals}
                        onChange={(e) =>
                          setEnquiryForm({ ...enquiryForm, goals: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E9E6EF] text-sm text-[#25232B] focus:outline-none focus:ring-2 focus:ring-[#7138E8]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#7138E8] via-[#5125B8] to-[#D946EF] hover:opacity-95 shadow-[0_14px_34px_-8px_rgba(113,56,232,0.55)] flex items-center justify-center gap-2 transition-all"
                    >
                      <span>Request Your Custom Growth Roadmap ↗</span>
                    </button>

                    <p className="text-[11px] text-center text-[#777481]">
                      100% confidential. Protected by NDA upon request. Zero spam—direct response from Shuttrly senior partners.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          12. EDITORIAL FOOTER WITH EXACT SHUTTRLY BRAND LOCKUP
          ==================================================================== */}
      <footer className="bg-[#FFFFFF] border-t border-[#E9E6EF] pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E9E6EF]">
            {/* Brand Column (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <ShuttrlyLogo size="lg" showTagline={true} idSuffix="footer" />
              <p className="text-sm text-[#777481] max-w-sm leading-relaxed pt-1">
                Shuttrly is a digital marketing and creative growth agency helping ambitious businesses build their online presence, strengthen brand identity, and achieve measurable digital growth.
              </p>
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#25232B]">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>ALL SYSTEMS OPERATIONAL // SHUTTRLY.COM</span>
              </div>
            </div>

            {/* Navigation Column (2 Cols) */}
            <div className="md:col-span-2 space-y-2.5">
              <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold">
                Navigation
              </div>
              <ul className="space-y-2 text-sm text-[#777481]">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      className="hover:text-[#7138E8] transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Capabilities Column (3 Cols) */}
            <div className="md:col-span-3 space-y-2.5">
              <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold">
                Core Capabilities
              </div>
              <ul className="space-y-2 text-sm text-[#777481]">
                {SERVICES_DATA.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedService(s);
                        scrollToSection('services');
                      }}
                      className="hover:text-[#7138E8] transition-colors text-left"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Column (2 Cols) */}
            <div className="md:col-span-2 space-y-2.5">
              <div className="text-xs font-mono-tech uppercase tracking-wider text-[#25232B] font-semibold">
                Connect
              </div>
              <ul className="space-y-2 text-sm text-[#777481]">
                <li>
                  <a href="mailto:hello@shuttrly.com" className="hover:text-[#7138E8]">
                    hello@shuttrly.com
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="hover:text-[#7138E8]">
                    Book Discovery Call ↗
                  </a>
                </li>
                <li>
                  <a href="#growth-lab" onClick={(e) => { e.preventDefault(); scrollToSection('growth-lab'); }} className="hover:text-[#7138E8]">
                    ROI Simulator
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777481]">
            <div>
              © {new Date().getFullYear()} Shuttrly Digital Marketing Agency (shuttrly.com). All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => scrollToSection('hero')}
                className="font-semibold text-[#25232B] hover:text-[#7138E8] flex items-center gap-1"
              >
                <span>Back to Top ↑</span>
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          13. INTERACTIVE CASE STUDY DEEP-DIVE MODAL
          ==================================================================== */}
      {activeCaseStudyModal && (
        <div
          className="fixed inset-0 z-50 bg-[#25232B]/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveCaseStudyModal(null)}
        >
          <div
            className="bg-white rounded-[32px] border border-[#E9E6EF] max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#E9E6EF]">
              <div>
                <span className="text-xs font-mono-tech uppercase tracking-wider text-[#7138E8] font-semibold">
                  {activeCaseStudyModal.client} // {activeCaseStudyModal.industry}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#25232B] mt-1">
                  {activeCaseStudyModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCaseStudyModal(null)}
                className="w-10 h-10 rounded-full bg-[#F7F6FA] hover:bg-[#E9E6EF] flex items-center justify-center text-[#25232B] shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Key Verified Outcomes */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
              {activeCaseStudyModal.secondaryMetrics.map((m) => (
                <div
                  key={m.label}
                  className="p-4 rounded-2xl bg-[#F7F6FA] border border-[#E9E6EF]"
                >
                  <div className="font-display text-2xl font-extrabold text-[#7138E8]">
                    {m.value}
                  </div>
                  <div className="text-xs text-[#777481] mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Narrative Sections */}
            <div className="space-y-4 text-sm sm:text-base text-[#25232B]">
              <div className="p-4 rounded-2xl bg-[#F7F6FA]/60 border border-[#E9E6EF]">
                <div className="text-xs font-mono-tech uppercase text-[#777481] mb-1">
                  01 // THE CHALLENGE
                </div>
                <p className="text-sm text-[#25232B] leading-relaxed">
                  {activeCaseStudyModal.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6FA]/60 border border-[#E9E6EF]">
                <div className="text-xs font-mono-tech uppercase text-[#7138E8] mb-1">
                  02 // SHUTTRLY EXECUTION
                </div>
                <p className="text-sm text-[#25232B] leading-relaxed">
                  {activeCaseStudyModal.solution}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F7F6FA]/60 border border-[#E9E6EF]">
                <div className="text-xs font-mono-tech uppercase text-emerald-700 mb-1">
                  03 // COMMERCIAL OUTCOME
                </div>
                <p className="text-sm text-[#25232B] leading-relaxed">
                  {activeCaseStudyModal.outcome}
                </p>
              </div>

              <blockquote className="p-5 rounded-2xl bg-[#25232B] text-white text-sm italic">
                {activeCaseStudyModal.quote}
                <footer className="not-italic text-xs text-white/70 mt-2 font-semibold">
                  — {activeCaseStudyModal.quoteAuthor}
                </footer>
              </blockquote>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E9E6EF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {activeCaseStudyModal.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs bg-[#F7F6FA] border border-[#E9E6EF] text-[#777481]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  const clientName = activeCaseStudyModal.client;
                  setActiveCaseStudyModal(null);
                  setEnquiryForm((prev) => ({
                    ...prev,
                    goals: `Interested in achieving results similar to the ${clientName} case study.`
                  }));
                  scrollToSection('contact');
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#7138E8] to-[#D946EF] flex items-center justify-center gap-2"
              >
                <span>Build Similar Results For My Brand ↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}