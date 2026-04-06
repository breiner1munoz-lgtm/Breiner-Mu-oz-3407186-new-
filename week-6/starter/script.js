// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [tu dominio asignado]
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un elemento de tu dominio.
// Adapta las propiedades según tu contexto.
//
// NOTA PARA EL APRENDIZ:
// Ejemplos de adaptación:
//   Biblioteca  → { name: "El Principito", category: "ficción", value: 96 }
//   Farmacia    → { name: "Ibuprofeno", category: "analgésico", value: 150 }
//   Gimnasio    → { name: "Bicicleta", category: "cardio", value: 6.5 }
//   Restaurante → { name: "Ensalada César", category: "entrada", value: 8.5 }

const items = [
  { name: "Guitarra acústica", category: "cuerda", value: 320000 },
  { name: "Violín", category: "cuerda", value: 450000 },
  { name: "Batería", category: "percusión", value: 780000 },
  { name: "Flauta traversa", category: "viento", value: 260000 },
  { name: "Saxofón alto", category: "viento", value: 690000 },
  { name: "Teclado digital", category: "teclado", value: 540000 }
];

const categories = ["cuerda", "percusión", "viento", "teclado"];

const valueLabel = "precio en pesos colombianos";
const formatCOP = (value) => `$${value.toLocaleString("es-CO")} COP`;


console.log("=== LISTADO COMPLETO ===");


let lineNumber = 0;

for (const item of items) {
  lineNumber++;
  console.log(
    `${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${formatCOP(item.value)}`
  );
}

console.log("");


console.log("=== CONTEO POR CATEGORÍA ===");



for (const category of categories) {
  let count = 0;

  for (const item of items) {
    if (item.category === category) count++;
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");


console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of items) {
  totalValue += item.value;
}


const averageValue = items.length > 0 ? totalValue / items.length : 0;

console.log(`Total ${valueLabel}: ${formatCOP(totalValue)}`);
console.log(`Promedio ${valueLabel}: ${formatCOP(Number(averageValue.toFixed(1)))}`);

console.log("");


console.log("=== MÁXIMO Y MÍNIMO ===");


let maxItem = items[0] ?? null;
let minItem = items[0] ?? null;

if (items.length > 0) {
  for (const item of items) {
    if (item.value > maxItem.value) {
      maxItem = item;
    }

    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem?.name} (${formatCOP(maxItem?.value)})`);
  console.log(`Menor ${valueLabel}: ${minItem?.name} (${formatCOP(minItem?.value)})`);
}

console.log("");


console.log("=== REPORTE DETALLADO ===");


for (let i = 0; i < items.length; i++) {
  const item = items[i];

  const comparison =
    item.value >= averageValue ? "sobre el promedio" : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");
