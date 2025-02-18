/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, f as renderComponent, r as renderTemplate } from '../chunks/astro/server_DLP-nXmf.mjs';
import 'kleur/colors';
import { $ as $$Layout, p as projectsPageContent } from '../chunks/Layout_CvWZUiMV.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DzujUpLO.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, image, year, url, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 
         group-hover:opacity-60 hover:!opacity-100 
         transition-all duration-300 transform hover:-translate-y-1 
         bg-glass backdrop-glass rounded-xl p-6 
         border border-white/10 hover:border-white/20"> <div class="h-full bg-gray-700 rounded-lg aspect-video sm:h-[150px]"> ${renderComponent($$result, "Image", $$Image, { "width": 1920, "height": 1080, "src": image, "alt": title, "class": "w-full h-full object-cover rounded-lg aspect-video object-top" })} </div> <div> <div class="mb-3"> <h2 class="font-medium mb-1">${title}</h2> <p class="text-sm opacity-60 mb-2">${year}</p> <div class="flex flex-wrap gap-2"> ${skills.split(" \xB7 ").map((skill) => renderTemplate`<span class="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded-full"> ${skill} </span>`)} </div> </div> <div class="opacity-60"> ${description} </div> </div> </a>`;
}, "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": projectsPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">projects</h1> <p class="opacity-60 mb-10">${projectsPageContent.subtitle}</p> <div class="grid grid-cols-1 gap-8 group"> ${projectsPageContent.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </section> ` })}`;
}, "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/pages/projects.astro", void 0);

const $$file = "/Users/alexwang/Code/WebDev/astro-minimal-portfolio-template/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
