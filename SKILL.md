# ComfyUI Image Generation Skill — z_image_turbo

## Model
- **Checkpoint:** z_image_turbo_bf16.safetensors (SD3-Turbo, fast inference)
- **CLIP:** qwen_3_4b.safetensors
- **VAE:** ae.safetensors
- **Default resolution:** 1024x1024
- **Step range:** 4-8 (turbo model, low step counts)
- **Optimal steps:** 6 (best quality/speed balance across all categories)

## Workflows

### V3 Workflow (RECOMMENDED) — `image_z_image_turbo-CLAUDE-TEST.json`
Uses `er_sde` sampler + `ModelSamplingAuraFlow` (shift=3) for better quality.
- `57:27` -> `.inputs.text` = prompt string
- `57:3` -> `.inputs.seed` = random int
- `57:3` -> `.inputs.steps` = step count (6 or 8)
- `57:13` -> `.inputs.width` / `.inputs.height` = dimensions
- `9` -> `.inputs.filename_prefix` = output name

### Legacy Workflow — `text_to_image.json`
Uses `res_multistep` sampler (no AuraFlow). Slightly lower quality.
- `83:27` -> `.inputs.text` = prompt
- `83:3` -> `.inputs.seed` / `.inputs.steps`
- `83:13` -> `.inputs.width` / `.inputs.height`
- `60` -> `.inputs.filename_prefix`

## ComfyUI API
- Endpoint: http://127.0.0.1:8188
- Queue: POST /prompt with {"prompt": <workflow>, "client_id": "improver"}
- Poll: GET /history/<prompt_id>
- Download: GET /view?filename=<fname>&type=output

---

## Image Categories & Recommended Dimensions

| Category | Dimensions | Use Case |
|----------|-----------|----------|
| Square close-up | 1024x1024 | Macro beauty, treatment detail, product shots |
| Hero banner (wide) | 1344x768 | Homepage heroes, service page headers |
| Vertical infographic bg | 768x1344 | Medical infographic backgrounds, social posts |
| Vertical poster | 1080x1920 | Instagram stories, vertical infographics |

---

## Multi-Environment Prompt Templates (Battle-Tested)

### Template 1: Medical Anatomy Visualization (Infographic Backgrounds)
**Score range: 62-64/70 | Dimensions: 768x1344 (vertical)**
```
[anatomical subject: spine/skeleton/joints with glowing neural pathways],
[translucent X-ray blue visualization with highlighted pain areas in red and orange],
[dark navy/black medical background with subtle grid overlay],
[medical textbook quality anatomical rendering / 3D medical visualization],
[cool blue clinical lighting with warm red pain indicators],
[3D medical visualization with depth and transparency],
[professional medical illustration photorealistic anatomy]
```
**Key patterns:** X-ray blue translucent body, red/orange pain hotspots, dark background with grid, full body or spine focus. Model excels at these.

### Template 2: Clinical Pain Indicator (Patient Photography)
**Score range: 60-64/70 | Dimensions: 1344x768 (hero)**
```
[patient pose: rear view/side view touching affected area],
[red circular pain indicator radiating with concentric rings at pain location],
[soft clinical office background with medical certificates and treatment table],
[medical photography with pain visualization overlay],
[soft diffused clinical lighting from window],
[50mm documentary lens f/2.8 patient sharp background soft],
[warm neutral skin tones with vivid red pain indicator against soft lavender-gray walls],
[8K medical photography with digital pain overlay photorealistic]
```
**Key patterns:** Model renders red concentric pain indicators naturally. Clinical office backgrounds with lavender/gray walls work well.

### Template 3: Before/After Results
**Score range: 55-58/70 | Dimensions: 1344x768 (wide comparison)**
```
[split-screen close-up portrait showing before and after treatment results],
[left side shows [specific issue: wrinkles/aging/redness]],
[right side shows smooth improved result after treatment],
[identical lighting and angle both sides, clean white/neutral background],
[soft even beauty lighting from large softbox above minimal shadows],
[85mm portrait lens f/2.0 face tack sharp],
[neutral skin tones identical white balance both sides no filters],
[face centered split down middle, 8K clinical before after photorealistic]
```
**Key patterns:** Model CAN do split comparisons but results are subtle. Differences between before/after need to be exaggerated in the prompt. Hardest category for this model.

### Template 4: Dramatic Action/Fitness
**Score range: 64-66/70 | Dimensions: 1024x1024 (square)**
```
[dynamic action shot of athlete mid-[specific movement] with intense expression],
[dramatic environmental effect: shattering glass/fire embers/debris particles],
[dark industrial background with metal/concrete texture],
[dramatic high-contrast fitness photography],
[strong backlight with orange-amber glow from below + cool gray ambient above],
[35mm wide action lens f/2.0 athlete sharp debris motion blur],
[powerful explosive unstoppable],
[desaturated background with vivid orange fire accents maximum drama],
[athlete centered breaking through barrier, 8K action sports photorealistic]
```
**Key patterns:** Model is EXCELLENT at glass shattering + fire effects. Always use desaturated bg + vivid orange accent. Industrial textures work well.

### Template 5: Aesthetic Lip Augmentation Hero
**Score range: 64-66/70 | Dimensions: 1344x768 (hero)**
```
[extreme close-up of full glossy [color] lips inside circular LED ring light halo],
[medical syringe with thin needle approaching from right, [color] medical gloves],
[dark luxe clinic interior with reflective surfaces],
[ring light creating circular illumination on lips with dramatic falloff],
[100mm macro lens f/2.8 lips and syringe sharp ring light soft],
[sculpted defined confident luxurious],
[deep blacks with vivid [lip color] + [glove color] ring light pure white],
[lips centered inside ring light syringe from right, 8K aesthetic hero photorealistic]
```
**Key patterns:** Ring light halo effect renders beautifully. Pink/magenta gloves + syringe is the proven combination. Always dark background.

### Template 6: Medspa Treatment (Golden Serum/PRP)
**Score range: 64-66/70 | Dimensions: 1024x1024 (square)**
```
[overhead/close-up of patient face receiving [treatment type] golden serum/PRP],
[golden droplets glistening on skin catching and refracting light],
[practitioner gloved hand with [tool: micro-cannula/brush/dropper]],
[eyes closed serene expression],
[dark luxury medspa environment with warm ambient bokeh],
[warm directional light from upper right creating golden glow on droplets],
[85-100mm lens f/1.8-2.8 face and droplets sharp practitioner hand soft],
[warm ivory skin with golden droplets amber tones dark background],
[8K luxury clinical treatment photorealistic]
```
**Key patterns:** Golden PRP/serum droplets on skin is this model's absolute strength (65-67/70). Always include a visible tool/device.

### Template 7: Physical Therapy/Rehabilitation
**Score range: 58-60/70 | Dimensions: 1344x768 (hero)**
```
[medium shot of therapist in white coat guiding patient through exercise],
[specific exercise detail: resistance band/weights/stretching],
[bright modern rehabilitation clinic with equipment in background],
[clinical rehabilitation photography documentary style],
[bright clean clinical lighting from overhead + natural window light],
[50mm standard lens f/2.8 both subjects sharp background soft],
[professional therapeutic encouraging clinical],
[bright whites clean neutrals with [equipment color] accent],
[8K clinical rehabilitation documentary photorealistic]
```
**Key patterns:** Two-person interaction scenes work well. Green resistance bands provide good color accent. Bright clinical environments with equipment in background add authenticity.

### Template 8: Couples/Service Lifestyle Hero
**Score range: 60-63/70 | Dimensions: 1344x768 (hero)**
```
[service scene: couple/patient receiving treatment in luxury spa],
[practitioner hands in [black/white] gloves on patient],
[cinematic lighting: warm amber dominant + subtle teal accent from left],
[dark spa interior with warm golden candle bokeh orbs in background],
[35-50mm cinematic lens f/1.8 subjects sharp background bokeh],
[serene indulgent intimate luxury],
[warm highlights + cool shadow accents cinematic color grading],
[subjects at left/right thirds balanced composition],
[8K cinematic spa lifestyle hero photorealistic]
```

---

## Universal Prompt Engineering Rules

### DO
- Every prompt: subject + lighting direction + lens/focal length + depth of field
- Include a physical tool/product/device whenever possible
- Specify exact color palette (hex-style descriptions work)
- Use "photorealistic" as the last word
- Match dimensions to content type (wide for heroes, vertical for infographics)
- Use 6 steps for most images, 8 for extra detail on close-ups

### DON'T
- Never use vague words: beautiful, stunning, amazing, perfect
- Never specify rim lighting (model can't render it reliably)
- Never use "silver reflector fill" (never visible in output)
- Never center the composition without explicit reason
- Never render skin alone without a treatment tool/product co-star
- Never use 4 steps (too rough) or >8 steps (diminishing returns)

---

## Workflow Comparison

| Feature | V3 (er_sde + AuraFlow) | Legacy (res_multistep) |
|---------|----------------------|----------------------|
| Sampler | er_sde | res_multistep |
| Model sampling | AuraFlow shift=3 | None |
| Best quality | All categories | Beauty close-ups only |
| Action/effects | Excellent (fire, glass) | Decent |
| Medical viz | Excellent (X-ray, pain) | Good |
| Multi-person | Better coherence | More artifacts |
| Recommended | YES | Only if V3 unavailable |

---

## Scoring History

| Iteration | Focus | Images | Avg | Best | Workflow |
|-----------|-------|--------|-----|------|----------|
| 1 | Macro close-ups (baseline) | 15 | 51.0 | 59 | Legacy |
| 2 | Close-ups + treatment tools | 10 | 60.2 | 65 | Legacy |
| 3 | Hero images (first attempt) | 10 | 60.6 | 65 | Legacy |
| 4 | Hero images (refined) | 10 | 64.3 | 67 | Legacy |
| 5 | Multi-environment (8 categories) | 16 | 63.1 | 66 | V3 |

## Top Performers All-Time

1. **67/70** — LED Light Therapy (red+blue panel, iter 4)
2. **66/70** — Golden Facial Treatment (gold mask + brush, iter 4)
3. **66/70** — Action Fitness (glass shatter + fire, iter 5, V3 workflow)
4. **66/70** — Lip Augmentation Hero (ring light + syringe, iter 5, V3 workflow)
5. **65/70** — PRP Treatment (golden droplets, iter 5, V3 workflow)
6. **65/70** — Neon Glam Beauty (pink+blue split, iter 4)
7. **65/70** — Serum Cascade (triple droplets, iter 2)
8. **65/70** — Eye + Gold Patch (translucent gold, iter 2)

---

## Infographic System (Rand Medical Center)

### CRITICAL: Text Rendering Limitation
**This model CANNOT generate readable text.** The Qwen 3 4B CLIP encoder produces text that *looks* like real words but is gibberish on close inspection. Therefore:

- **DO:** Generate infographic BACKGROUNDS and VISUAL ELEMENTS only (spine visualizations, X-ray imagery, pain indicators, anatomical illustrations)
- **DO:** Use a two-layer compositing workflow: AI generates the visual layer, then overlay real text with HTML/CSS, Figma, or Canva
- **DO NOT:** Ask the model to generate complete infographics with readable text — it will fail every time
- **EXCEPTION:** The model understands infographic LAYOUTS well (grids, timelines, card arrangements) — useful for generating layout mockups/comps even if text is unreadable

### What the Model CAN Generate for Infographics
1. **Dark theme backgrounds** (10/10) — Glowing blue X-ray spine, red/orange pain hotspots, dark navy/asphalt bg, grid overlays
2. **Light theme backgrounds** (9/10) — Subtle gray anatomical line drawings on white, minimal and clean
3. **Anatomical visualizations** (9/10) — 3D spine, skeleton X-rays, neural pathways, joint detail
4. **Pain indicator overlays** (9/10) — Red concentric circles, heat map effects, glowing pain zones
5. **Layout structure mockups** (8/10) — Timelines, comparison grids, card arrangements (text unreadable but layout is correct)

### Infographic Background Prompt Templates

**Dark Theme Background (Highest Quality):**
```
clean dark background image for medical infographic overlay,
glowing blue translucent human [body part] X-ray visualization centered,
subtle blue neural pathways branching from [area],
red-orange pain hotspots at [location] with radiating heat map,
dark asphalt black background with subtle industrial grid pattern,
NO TEXT no labels no words,
pure visual background for text compositing,
cool blue medical glow with warm pain indicators,
symmetric centered composition with breathing room for text overlay,
8K medical visualization dark theme background only
```

**Light Theme Background:**
```
clean light background for medical infographic overlay,
subtle anatomical illustration of [body part] in soft gray line drawing,
very light white background with soft blue-green gradient at edges,
faint anatomical detail lines showing [structures],
NO TEXT no labels no words no branding,
pure clean background for text compositing,
minimal medical illustration soft muted tones,
centered with ample white space for text overlay areas,
8K clean minimal light theme medical background
```

### Infographic Design Tokens (for text overlay layer)
- **Dark theme:** bg #0f1115, surfaces #16191e, text #e0e0e0, accent #ff4d00 (Safety Orange)
- **Light theme:** bg #ffffff, text #111111, borders #e5e7eb, accent #ff4d00
- **Fonts:** Syne 700-800 (headlines), Inter 400-600 (body)
- **Layout:** Vertical, clear section separation via contrast/borders, no shadows

### Recommended Two-Layer Workflow
1. **Layer 1 (ComfyUI):** Generate visual background at 768x1344 or 1080x1920 using dark/light bg template above
2. **Layer 2 (Code/Design tool):** Overlay structured text content using the Rand Medical Center Infographic Generator schema (in `COMFYUI-CLAUDE-CODE-SKILL-TEST-V3/SMAPLES OF INFOGRAPHICS PROMPTS.txt`)
3. **Composite:** Merge layers in HTML/CSS (Astro component), Figma, or image editor

---

## Suggested Future Improvements

### High Priority
1. **Automated compositing pipeline** — Build an Astro/HTML component that takes a ComfyUI background image + structured JSON content and renders a complete infographic with real readable text
2. **CLIP model upgrade** — Test with a larger CLIP encoder (e.g., T5-XXL) for better text rendering capability
3. **ControlNet integration** — Add a ControlNet workflow for edge/depth-guided generation, allowing more precise control over anatomy placement and layout structure
4. **Batch automation with API key** — Set up ANTHROPIC_API_KEY so the improver.py script can run fully automated prompt engineering + evaluation loops without manual orchestration

### Medium Priority
5. **Negative prompt support** — The current workflow uses ConditioningZeroOut for negatives. Test adding a proper negative prompt node for better quality control (avoid specific artifacts)
6. **img2img workflow** — Create an image-to-image workflow for refining/enhancing generated images (e.g., upscale a 1024px image to 2048px with detail enhancement)
7. **Style consistency system** — Create a "style lock" mechanism that ensures all images for a single client (Essence vs Rand) maintain consistent color grading and lighting
8. **A/B testing pipeline** — Generate 2 variants of each hero image and let Claude vision pick the winner automatically, building a preference dataset over time

### Low Priority
9. **Video workflow integration** — The comfyui-skill.md mentions txt2video and img2video workflows. Test generating short treatment/procedure clips from the best static images
10. **Model fine-tuning dataset** — The 60+ evaluated images with scores could serve as a training dataset for a reward model to automate quality scoring

### Full Run Logs
See: `iterations/iteration_01.json` through `iterations/iter6_jobs.json`
