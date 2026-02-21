

## Cambios solicitados

### 1. Eliminar la Galeria (SocialFeed)
- Eliminar el componente `SocialFeed` de `Index.tsx`
- Eliminar la referencia "GALERIA" del navbar

### 2. Actualizar datos de contacto en `Contact.tsx`
- Direccion: Garcia Moreno 220 y, Quito 170157
- Telefono: 098 749 7681
- Horario actualizado:
  - Miercoles a Viernes: 12:30 - 22:30
  - Sabado: 12:30 - 22:30
  - Domingo: 12:00 - 17:00
  - Lunes y Martes: Cerrado

### 3. Actualizar Hero con imagen brutalista
- Copiar la imagen subida (textura halftone brutalista) como fondo del hero
- Usarla como imagen principal en lugar de la foto de hamburguesa actual, o combinarla como textura de fondo con overlays brutalistas

### 4. Actualizar Menu con precios en dolares y nuevos items
- Cambiar precios de MXN a USD (rango $6 - $20)
- Agregar seccion de acompanamientos: Porcion de Papas
- Agregar seccion de bebidas: Agua, Limonada, Gaseosas, Agua con gas, Agua sin gas
- Las hamburguesas no incluyen papas (aclarar en el menu)

### Detalles tecnicos

**Archivos a modificar:**
- `src/pages/Index.tsx` - Quitar `<SocialFeed />`
- `src/components/Navbar.tsx` - Quitar link "GALERIA" del array de links
- `src/components/Contact.tsx` - Actualizar direccion, horario, telefono
- `src/components/MenuSection.tsx` - Nuevos precios en USD, agregar papas y bebidas
- `src/components/Hero.tsx` - Usar imagen brutalista subida como fondo/textura

**Archivo a copiar:**
- `user-uploads://Diseño_sin_título_1.png` a `src/assets/brutalist-texture.png`

**Menu propuesto (precios en USD):**
- LA CLASICA - $8
- LA SANGRE - $10
- LA TOSTADA - $9
- LA SIMPLE - $6
- PAPAS SMASH - $5
- Bebidas (Agua $1.50, Limonada $3, Gaseosa $2.50, Agua con gas $2, Agua sin gas $1.50)

