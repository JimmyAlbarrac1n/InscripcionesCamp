var SHEET_NAME = "Inscripciones";

var HEADERS = [
  "Fecha", "Nombres", "Apellidos", "Cédula", "Nacimiento", "Género", "Institución", "Año/Nivel",
  "Categoría", "Asistió antes", "Motivación",
  "Representante", "Parentesco (rep.)", "Teléfono (rep.)", "Dirección", "Ciudad",
  "Contacto adicional", "Parentesco (adic.)", "Teléfono (adic.)",
  "Condición médica", "Tratamiento médico", "Tipo de sangre",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    if (data.website) return json({ ok: true }); // honeypot

    var required = [
      "nombres", "apellidos", "cedula", "fechaNacimiento", "genero", "institucion", "anioNivel",
      "categoria", "asistioAntes", "motivacion",
      "representanteNombre", "representanteParentesco", "representanteTelefono", "direccion", "ciudad",
      "adicionalNombre", "adicionalParentesco", "adicionalTelefono",
    ];
    for (var i = 0; i < required.length; i++) {
      if (!data[required[i]]) return json({ ok: false, error: "Falta: " + required[i] });
    }
    if (!/^\d{10}$/.test(String(data.cedula))) return json({ ok: false, error: "Cédula inválida" });
    if (data.autorizacion !== true && data.autorizacion !== "true") return json({ ok: false, error: "Falta autorización" });

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);

    sheet.appendRow([
      new Date(),
      data.nombres, data.apellidos, data.cedula, data.fechaNacimiento, data.genero, data.institucion, data.anioNivel,
      data.categoria, data.asistioAntes, data.motivacion,
      data.representanteNombre, parentesco(data.representanteParentesco, data.representanteParentescoOtro), data.representanteTelefono, data.direccion, data.ciudad,
      data.adicionalNombre, parentesco(data.adicionalParentesco, data.adicionalParentescoOtro), data.adicionalTelefono,
      data.condicionMedica || "", data.tratamientoMedico || "", data.tipoSangre || "",
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function parentesco(valor, otro) {
  return valor === "Otro" ? "Otro: " + (otro || "") : (valor || "");
}

function doGet() {
  return json({ ok: true, service: "Inscripciones Cristo Rey 2026" });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}