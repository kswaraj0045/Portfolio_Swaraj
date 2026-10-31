# DESIGN SYSTEM: PREMIUM DARK EDITORIAL PRODUCT EXPERIENCE

## 1. Design Direction & Aesthetic Philosophy
- **Theme**: "Premium Dark Editorial Meets Futuristic Product Experience"
- **Tone**: High-calibre product studio aesthetic, deliberate, clean, data-driven, engineering-grounded.
- **Visual Texture**: Deep space navy foundations layered with translucent glass panels, micro-borders with subtle contrast, soft radial cyan/violet ambient glows, and Deloitte-inspired lime green milestone highlights.
- **Visual Identity**: Rather than a personal photo, an abstract technical visual identity is constructed using geometric UI cards, simulated product dashboards, metric sparklines, and interactive product workflow nodes.

---

## 2. Color Palette & Design Tokens

### Core Colors
| Token | Hex | Role / Application |
|---|---|---|
| `--bg-main` | `#090D18` | Deepest dark navy canvas background |
| `--bg-secondary` | `#121A2B` | Section alternate background, cards hover base |
| `--bg-card` | `#151F33` | Primary surface for cards, panels, modals |
| `--bg-card-glass` | `rgba(21, 31, 51, 0.75)` | Glassmorphic containers with `backdrop-blur-md` |
| `--border-subtle` | `#26344D` | Micro-borders, card outlines, separators |
| `--border-focus` | `#38BDF8` | Active element highlights, interactive outlines |

### Accent Colors
| Token | Hex | Role / Application |
|---|---|---|
| `--accent-primary` | `#38BDF8` | Sky/Cyan blue — primary product actions, links, active tabs |
| `--accent-secondary` | `#8B5CF6` | Violet/Purple — secondary gradient highlights, roadmap nodes |
| `--accent-achievement`| `#A3E635` | Vibrant lime green — Deloitte selection badge & milestones |
| `--accent-emerald` | `#10B981` | Success states, live demo tags, metric uplifts |

### Typography & Neutrals
| Token | Hex | Role / Application |
|---|---|---|
| `--text-primary` | `#F1F5F9` | Slate 100 — primary headlines, titles, prominent text |
| `--text-secondary` | `#94A3B8` | Slate 400 — body descriptions, subheadings, labels |
| `--text-muted` | `#64748B` | Slate 500 — metadata, timestamps, secondary hints |

---

## 3. Typography Scale & Fonts

### Font Families
- **Headings**: `Space Grotesk`, sans-serif (Geometric, high-contrast, modern product feel).
- **Body & UI**: `Inter`, -apple-system, BlinkMacSystemFont, sans-serif (Highly legible, crisp rendering at all sizes).
- **Technical & Metrics**: `JetBrains Mono`, monospace (KPI values, framework steps, code tags, tech badges).

### Type Scale
| Level | Font Size / Line Height | Font Weight | Usage |
|---|---|---|---|
| `display-1` | 3.5rem (56px) / 1.1 | Bold (700) | Hero Headline |
| `h1` | 2.5rem (40px) / 1.2 | Bold (700) | Major Section Titles |
| `h2` | 1.875rem (30px) / 1.3 | SemiBold (600) | Sub-headings, Card Titles |
| `h3` | 1.25rem (20px) / 1.4 | SemiBold (600) | Component Headings, Modal Titles |
| `body-lg` | 1.125rem (18px) / 1.6 | Regular (400) | Lead introductory paragraphs |
| `body-base` | 1.0rem (16px) / 1.6 | Regular (400) | Standard content copy |
| `body-sm` | 0.875rem (14px) / 1.5 | Regular (400) | Card summaries, list details |
| `caption` | 0.75rem (12px) / 1.4 | Medium / Mono | Badges, tags, metric captions |

---

## 4. Spacing, Borders & Radius Systems

### Border Radius
- `radius-sm`: `6px` (Tags, badges, small buttons)
- `radius-md`: `10px` (Inputs, secondary buttons, tooltips)
- `radius-lg`: `16px` (Standard cards, UI panels)
- `radius-xl`: `24px` (Hero preview card, modal dialogs)
- `radius-full`: `9999px` (Pills, circular icons, avatars)

### Shadows & Glows
- `shadow-card`: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
- `shadow-glow-cyan`: `0 0 25px -5px rgba(56, 189, 248, 0.25)`
- `shadow-glow-violet`: `0 0 25px -5px rgba(139, 92, 246, 0.25)`
- `shadow-glow-deloitte`: `0 0 20px -3px rgba(163, 230, 53, 0.3)`

---

## 5. UI Component Specifications

### 1. Buttons
- **Primary Button**: Solid gradient or sky background (`#38BDF8`), dark navy text (`#090D18`), bold font, subtle hover translation `translate-y-[-1px]`, active press state.
- **Secondary / Outline Button**: Border `#26344D` with semi-transparent background, text `#F1F5F9`, hover border `#38BDF8` and subtle background tint.
- **Deloitte Accent Button**: Border `#A3E635` / lime glow, lime text, dark background.
- **Ghost / Icon Button**: Minimal padding, slate icon, glowing border on hover.

### 2. Badges & Status Pills
- **Achievement Pill**: Green glowing dot, lime text `#A3E635`, border `rgba(163, 230, 53, 0.2)`, background `rgba(163, 230, 53, 0.08)`.
- **Category Pill**: Cyan text `#38BDF8`, border `rgba(56, 189, 248, 0.2)`, background `rgba(56, 189, 248, 0.08)`.
- **Tech Stack Tag**: Monospace font, slate text `#94A3B8`, border `#26344D`, background `#121A2B`.

### 3. Glassmorphic Surface Cards
- Border: `1px solid #26344D`
- Background: `#151F33` with 80% opacity and `backdrop-filter: blur(12px)`
- Transitions: Smooth cubic-bezier transition on border color and card transform upon hover.

### 4. Interactive Product Thinking Stepper
- Six stages (`01 UNDERSTAND` through `06 MEASURE`).
- Active stage triggers high-contrast cyan highlight, progress line illumination, and contextual explanation pane.

---

## 6. Responsive Breakpoints
- **Mobile**: `< 640px` (Single-column layout, vertical timeline, compact navigation drawer, touch-friendly tap targets `min-h-[44px]`).
- **Tablet**: `640px – 1023px` (Two-column grid where appropriate, fluid typography).
- **Desktop**: `≥ 1024px` (Multi-column grids, horizontal interactive framework timeline, side-by-side hero composition).
- **Wide**: `≥ 1280px` (Max container width `1280px` centered with auto margins and generous breathing room).

