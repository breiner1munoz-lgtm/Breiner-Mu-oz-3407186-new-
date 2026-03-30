// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// Dominio: instrumentos musicales
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

const elementName = "Guitarra eléctrica";
const elementStatus = "active";
const elementValue = 9;
const elementType = "cuerda";
const elementInfo = {
  detail: "Sonido potente para rock y blues",
  marca: "Fender",
  origen: {
    pais: "México",
  },
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

let classification = "Sin clasificar";

if (elementValue >= 9) {
  classification = "Instrumento profesional";
} else if (elementValue >= 6) {
  classification = "Instrumento intermedio";
} else {
  classification = "Instrumento básico";
}

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

const statusLabel = elementStatus === "active"
  ? "Disponible para tocar"
  : "En mantenimiento";

// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel = "Sin tipo";

switch (elementType) {
  case "cuerda":
    typeLabel = "Instrumento de cuerda";
    break;
  case "percusion":
    typeLabel = "Instrumento de percusión";
    break;
  case "viento":
    typeLabel = "Instrumento de viento";
    break;
  case "teclado":
    typeLabel = "Instrumento de teclado";
    break;
  default:
    typeLabel = "Tipo desconocido";
}

// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

const displayName = elementName ?? "Instrumento sin nombre";
const infoDetail = elementInfo?.detail ?? "Sin información adicional";

// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

const safeProperty = elementInfo?.origen?.pais ?? "Origen no especificado";

// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));
console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));