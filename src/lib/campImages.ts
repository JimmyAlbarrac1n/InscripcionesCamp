// Fotos del campamento (src/assets/Camp*.jpg), ordenadas por número.
// Compartidas entre secciones para repartirlas a lo largo de la página.
const modules = import.meta.glob("../assets/Camp*.{JPG,jpg,jpeg,JPEG,png,PNG}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const campImages: string[] = Object.entries(modules)
  .sort(([a], [b]) => {
    const na = parseInt(a.match(/Camp(\d+)/i)?.[1] ?? "0", 10);
    const nb = parseInt(b.match(/Camp(\d+)/i)?.[1] ?? "0", 10);
    return na - nb;
  })
  .map(([, src]) => src);
