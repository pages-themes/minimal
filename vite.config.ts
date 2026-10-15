import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The srcm-web dashboard screenshots come from a local srcm-project checkout
// (set SRCM_PROJECT to use another one). They are copied into public/images/
// every time Vite starts, for dev and build alike. Where the checkout doesn't
// exist (GitHub Actions) the committed copies are used, so commit public/images/.
const SRCM_PROJECT =
  process.env.SRCM_PROJECT ?? "/Users/charliecameron/CodingHub/PhD/Production_code/srcm-project";
const SCREENSHOTS: [string, string][] = [
  ["figures/web-figs/frontpage.png", "public/images/dashboard.png"],
  ["figures/web-figs/HDE.png", "public/images/dashboard-hde.png"],
];

function syncScreenshots(): void {
  mkdirSync("public/images", { recursive: true });
  for (const [from, to] of SCREENSHOTS) {
    const src = join(SRCM_PROJECT, from);
    if (!existsSync(src)) {
      if (!existsSync(to)) console.warn(`[screenshots] missing ${src} and no committed ${to}`);
      continue;
    }
    if (!existsSync(to) || statSync(to).size === 0 || statSync(src).mtimeMs > statSync(to).mtimeMs) {
      copyFileSync(src, to);
      console.log(`[screenshots] copied ${from} -> ${to}`);
    }
  }
}
syncScreenshots();

// A user site (cgyc20.github.io) is served from the domain root, so base is "/".
// Two pages: the home page, and /srcm/ for the software.
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        srcm: resolve(import.meta.dirname, "srcm/index.html"),
      },
    },
  },
});
