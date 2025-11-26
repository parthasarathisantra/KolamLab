# KolamCraft Design Guidelines

## Design Approach
**Heritage-Inspired Cultural Design** - Drawing from South-Indian Kolam art tradition, combining temple architecture aesthetics with modern web design principles. This is a culturally-rich, warm, and elegant experience that honors traditional art forms.

## Core Design Principles
- **Cultural Authenticity**: Every design element should reflect South-Indian heritage and Kolam art tradition
- **Warm Elegance**: Sophisticated yet approachable, ceremonial yet inviting
- **Visual Richness**: Layered textures, patterns, and decorative elements that create depth
- **Purposeful Animation**: Subtle, heritage-appropriate motion that enhances without distracting

## Typography System

**Headings**: Playfair Display (serif) - Elegant, classical, cultural gravitas
- Hero titles: text-5xl to text-7xl, font-bold
- Section headers: text-3xl to text-4xl, font-semibold
- Subsections: text-2xl, font-medium

**Body Text**: Inter or system sans-serif - Clean readability
- Primary: text-base to text-lg
- Secondary: text-sm
- Captions: text-xs

**Hierarchy**: Generous line-height (leading-relaxed, leading-loose) for elegance and breathability

## Color Palette

**Primary Colors**:
- Kolam Maroon: #8c2f0c (primary accent, CTAs, emphasis)
- Kolam Gold: #d8b98a (secondary accent, highlights, borders)
- Kolam Ivory: #fff8ef (backgrounds, light surfaces)
- Kolam Sand: #b57a50 (tertiary accent, warm neutrals)

**Usage**:
- Backgrounds: Layered ivory with warm overlays
- Text: Deep maroon on light backgrounds, ivory on dark
- Accents: Gold for borders, dividers, decorative elements
- Buttons: Maroon primary, gold secondary

## Layout System

**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 to py-24 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8, gap-12
- Content margins: mx-auto with max-w-7xl containers

**Grid Strategy**:
- Landing page: Single column with centered content, occasional 2-column splits
- Dashboard: 2x2 grid for four main options (md:grid-cols-2)
- Gallery: Masonry or 3-4 column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Generator tools: Side panel + canvas layout

## Background Treatment

**Heritage Texture Layers**:
1. Base: Brown temple stone texture or subtle mandala pattern
2. Overlay: Soft ivory gradient (opacity 85-95%)
3. Pattern: Animated kolam line patterns (very subtle, opacity 10-15%)
4. Parallax: Gentle zoom/shift on scroll (transform scale 1.0 to 1.05)

**Implementation**: Create reusable HeritageBackground wrapper component with layered divs

## Visual Effects

**Shadows & Depth**:
- Cards: shadow-lg with warm tint
- Floating elements: shadow-2xl with glow effect
- Text shadows: Subtle on hero headings

**Glow Effects**:
- Gold borders with soft outer glow (box-shadow with gold)
- Maroon CTAs with warm inner glow on hover

**Heritage Borders**:
- Floral/kolam-inspired decorative dividers between sections
- Temple-style geometric patterns for page frames
- Gold accent lines (1-2px) with ornamental corners

**Animations**:
- Fade-in on scroll: opacity 0 to 1, translate-y
- Floating patterns: Subtle y-axis movement (keyframes)
- Hover: Scale 1.02-1.05 with smooth transition
- NO distracting or rapid animations

## Component Specifications

**Navbar**:
- Sticky top with backdrop blur and ivory background (bg-opacity-95)
- Logo left, navigation center/right
- Mobile: Hamburger menu with slide-in drawer
- Heritage gold underline on active links

**Footer**:
- Temple-style with ornamental top border
- Multi-column layout: About, Links, Social, Credits
- Heritage divider lines between columns
- Warm maroon background with ivory text

**Buttons**:
- Primary: Maroon background, ivory text, rounded-lg, px-8 py-3
- Secondary: Gold border, maroon text, transparent background
- Hover: Subtle scale + glow effect
- On images: Backdrop blur (backdrop-blur-md) with semi-transparent background

**Cards (Dashboard Options)**:
- Ivory background with gold border
- Hover: Lift effect (translateY -4px) + shadow increase
- Icon/illustration at top, title, description, subtle CTA
- Rounded corners (rounded-xl)

**Image Grid (Gallery)**:
- Masonry layout preferred for visual interest
- Hover: Overlay with kolam name + soft maroon tint
- Smooth scale on hover (scale-105)
- Rounded corners, shadow-md

## Page-Specific Guidelines

**Landing Page**:
- Hero: Full-width with heritage background, large kolam illustration, centered headline, dual CTAs ("Create Kolam" + "Learn More")
- "What is Kolam": Text + decorative kolam pattern images, 2-column alternating layout
- Features: 3-column grid with icons/illustrations
- CTA Section: Centered with warm gradient background
- Footer: Full temple-style footer

**Dashboard**:
- Welcome header with user name
- 2x2 grid of large option cards (About, Create, Explore, Profile/Settings)
- Each card: Icon, title, description, hover state
- Decorative kolam patterns in corners

**Generator Page**:
- Two-tab interface or side-by-side sections
- Upload area: Dashed gold border, large drop zone
- Grid controls: Sliders with kolam-themed markers
- Canvas: Centered, bordered with gold, ivory background

**Editor Page**:
- Canvas center-dominant (60% width)
- Tool panel left (20%): Color palette, tools, vertical layout
- Properties right (20%): Download options, settings
- Mobile: Stack vertically

**Gallery (Explore)**:
- Masonry grid with 20-30 kolam images
- Filters/categories at top
- Infinite scroll or pagination
- Search bar with heritage styling

## Images

**Required Images**:
- Hero kolam illustration (large, decorative, warm-toned)
- Heritage background texture (temple stone/mandala)
- 8 kolam placeholder designs (for generator results)
- 20-30 kolam gallery images (various styles)
- About page: 3-4 cultural/historical reference images
- Decorative patterns for borders and dividers

**Hero Image**: Yes - Large, prominent kolam illustration as hero background or beside hero text

## Accessibility
- Maintain WCAG AA contrast ratios (maroon on ivory works)
- Focus states: Gold outline ring
- Keyboard navigation: Clear focus indicators
- Form labels: Always visible, heritage-styled