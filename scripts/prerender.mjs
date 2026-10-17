// Inserta el HTML de la página en dist/index.html para que Google,
// WhatsApp y redes sociales vean el contenido sin ejecutar JavaScript.
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const dist = resolve("dist");
const ssrEntry = resolve("dist-ssr/entry-server.js");

const { render } = await import(pathToFileURL(ssrEntry).href);
const template = await readFile(resolve(dist, "index.html"), "utf8");
const html = template.replace('<div id="root"></div>', `<div id="root">${render()}</div>`);

if (html === template) throw new Error("No se encontró <div id=\"root\"></div> en dist/index.html");

await writeFile(resolve(dist, "index.html"), html);
await rm(resolve("dist-ssr"), { recursive: true, force: true });
console.log("Página pre-renderizada en dist/index.html");
