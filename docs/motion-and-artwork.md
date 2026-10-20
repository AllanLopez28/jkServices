# Motion and artwork

The new motion uses the existing Framer Motion dependency and CSS. No additional
runtime package is needed.

- Marketing entrances: one-time 600 ms reveals, with 50 ms stagger.
- Service changes and measured FAQ expansion: 200 ms.
- Press feedback: 160 ms.
- Easing: the existing `--ease` / `[0.23, 1, 0.32, 1]`.
- Decorative pointer response: mass 1, stiffness 100, damping 10.
- Scroll moves only decorative photo and illustration layers. Reading copy stays
  still. Keyboard service/FAQ activations are immediate. Reduced motion replaces
  spatial animation with gentle fades.
- Process illustrations use CSS and the existing Lucide icon set.

## Generated image

Asset: `public/accounting-editorial.png`

Created with the built-in image generation tool. It is an illustrative still
life, not a photograph of the agency's actual office. Next Image supplies
responsive sizes and lazy loading.

Prompt:

> Create a premium editorial still-life photograph for JK Service Agency, an
> accounting and tax services website. Landscape 3:2 composition. A beautifully
> arranged minimal desk with crisp white blank tax-paper-like sheets (no legible
> financial information), a cobalt blue folder, an understated white calculator,
> a blue pen, and a sculptural translucent glass paperweight. Soft pale
> lavender-blue surface (#edf2fc), cobalt blue accents (#125bfa), natural angled
> morning sunlight, elegant subtle shadows, authentic paper texture. Overhead
> three-quarter view, composition centered with generous breathing room around
> objects, exceptionally polished tactile photographic art direction, restrained
> and professional, not a stock-photo office scene. No people, no text, no
> letters, no logos, no numbers, no watermarks. This is the finished photograph
> asset, not a webpage mockup.

## Feel checks

Check a slow downward scroll and a quick reverse scroll. The image layers should
remain inside their frames and never carry the copy with them. Open and close
FAQ rows rapidly; they should retarget smoothly. Verify keyboard activation
without waiting for animations, and enable the operating system's reduced-motion
preference. Touch and scroll feel should also be checked on a physical phone.
