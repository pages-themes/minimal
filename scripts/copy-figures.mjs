// The research figures live in figures/ at the repo root (kept from the old
// static site). Copy them into the build so /figures/... URLs keep working.
import { cpSync, existsSync } from "node:fs";

if (existsSync("figures")) {
  cpSync("figures", "dist/figures", { recursive: true });
  console.log("copied figures/ -> dist/figures/");
} else {
  console.warn("figures/ not found; figure images will be missing from the build");
}
