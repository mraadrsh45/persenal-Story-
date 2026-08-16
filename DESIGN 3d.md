# Redoyanul Haque

## Mission
Create implementation-ready, token-driven UI guidance for Redoyanul Haque that is optimized for consistency, accessibility, and fast delivery across documentation site.

## Brand
- Product/brand: Redoyanul Haque
- URL: https://www.redoyanulhaque.me/
- Audience: developers and technical teams
- Product surface: documentation site

## Style Foundations
- Visual style: clean, functional, implementation-oriented
- Main font style: `font.family.primary=Geist`, `font.family.stack=Geist, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=24px`
- Typography scale: `font.size.xs=14px`, `font.size.sm=15px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=20px`, `font.size.2xl=22px`, `font.size.3xl=24px`, `font.size.4xl=25px`
- Color palette: `color.text.primary=#eae5ec`, `color.text.secondary=#adacac`, `color.border.strong=#c2a4ff`, `color.surface.base=#000000`, `color.border.muted=#ffffff`, `color.surface.strong=#0b080c`
- Spacing scale: `space.1=3px`, `space.2=8px`, `space.3=10px`, `space.4=14px`, `space.5=15px`, `space.6=16px`, `space.7=20px`, `space.8=23.38px`
- Radius/shadow/motion tokens: `radius.xs=8px`, `radius.sm=10px`, `radius.md=30px` | `motion.duration.instant=300ms`, `motion.duration.fast=500ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
Concise, confident, implementation-focused.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: links (66), buttons (2), lists (1).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
