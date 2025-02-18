/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro, f as renderComponent } from '../chunks/astro/server_B6IEuQq7.mjs';
import 'kleur/colors';
import { a as aboutPageContent, $ as $$Layout } from '../chunks/Layout_Y7XETk4p.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BHa2hjh-.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Timeline = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Timeline;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-20 relative"> <h2 class="font-bold text-2xl mb-8">journey</h2> <div class="absolute left-[7px] top-[4rem] bottom-10 w-[2px] bg-blue-500/20"></div> <div class="space-y-8"> ${items.map((item) => renderTemplate`<div class="flex gap-6 items-start ml-0.5"> <div class="w-3 h-3 rounded-full bg-blue-500/50 mt-2 shrink-0"></div> <div> <p class="text-sm text-blue-400 mb-1">${item.year}</p> <h3 class="font-medium mb-1">${item.title}</h3> <p class="opacity-60 text-sm">${item.description}</p> </div> </div>`)} </div> </div>`;
}, "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/components/Timeline.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">about</h1> <p class="opacity-60 ">${aboutPageContent.subtitle}</p> <div class="mb-14 whitespace-pre-wrap"> ${aboutPageContent.about.description} </div> <div class="flex flex-col min-[410px]:flex-row justify-center items-center gap-4"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_l.url, "alt": aboutPageContent.about.image_l.alt, "width": 250, "height": 250, "class": "w-[250px] h-[250px] object-cover rounded-xl -rotate-6" })} ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_m.url, "alt": aboutPageContent.about.image_m.alt, "width": 250, "height": 250, "class": "w-[250px] h-[250px] object-cover rounded-xl" })} ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_r.url, "alt": aboutPageContent.about.image_r.alt, "width": 250, "height": 250, "class": "w-[250px] h-[250px] object-cover rounded-xl rotate-6" })} </div> ${renderComponent($$result2, "Timeline", $$Timeline, { "items": aboutPageContent.timeline.items })} </section> ` })}`;
}, "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/pages/about.astro", void 0);

const $$file = "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
