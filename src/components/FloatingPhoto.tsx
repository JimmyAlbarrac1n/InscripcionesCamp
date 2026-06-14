// Foto flotante decorativa (se usa para repartir las fotos por las secciones).
// El tamaño/posición se pasan por `className` (ej: "-left-6 top-8 w-24 aspect-[3/4]").
interface FloatingPhotoProps {
  src: string;
  className?: string;
  rotate?: string;
  anim?: string;
}

const FloatingPhoto = ({ src, className = "", rotate = "0deg", anim = "animate-float" }: FloatingPhotoProps) => (
  <div className={`pointer-events-none absolute ${className}`} aria-hidden="true">
    <div className={`h-full w-full ${anim}`}>
      <div
        className="h-full w-full overflow-hidden rounded-xl border border-white/70 shadow-[0_18px_40px_-18px_rgba(20,40,25,0.45)]"
        style={{ transform: `rotate(${rotate}) scale(1.03)` }}
      >
        <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>
  </div>
);

export default FloatingPhoto;
