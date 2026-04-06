// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// ============================================
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME con el nombre de tu dominio asignado
// 2. Reemplaza VALUE_LABEL con la etiqueta de tu unidad de valor
//    Ejemplos: "unidades", "libros", "medicamentos", "miembros"
// 3. Define tu array items con objetos de tu dominio
// 4. Completa cada TODO con la implementación contextualizada
// ============================================

// ---- CONFIGURA TU DOMINIO ----
const DOMAIN_NAME = "Instrumentos Musicales";
const VALUE_LABEL = "instrumentos";



const items = [
  { id: 1, name: "Guitarra Acústica", price: 320, inStock: true, category: "Cuerdas", brand: "Yamaha", material: "Madera" },
  { id: 2, name: "Piano Digital", price: 950, inStock: true, category: "Teclado", brand: "Casio", material: "Polímero" },
  { id: 3, name: "Batería Junior", price: 540, inStock: false, category: "Percusión", brand: "Pearl", material: "Metal" },
  { id: 4, name: "Violín 4/4", price: 410, inStock: true, category: "Cuerdas", brand: "Stentor", material: "Abeto" },
  { id: 5, name: "Flauta Travesera", price: 260, inStock: false, category: "Viento", brand: "Jupiter", material: "Níquel" }
];


const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

removeLastItem = () => {
  const removedItem = items.pop();
  console.log(`Último instrumento eliminado: ${removedItem.name}`);
  return removedItem;
};


const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Instrumento prioritario agregado: ${priorityItem.name}`);
};


const removeByIndex = (index) => {
  if (index < 0 || index >= items.length) {
    console.log("Índice fuera de rango");
    return;
  }

  const removedItems = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removedItems[0].name}`);
};


const getActiveItems = () => {
  return items.filter((item) => item.inStock);
};


const findByName = (name) => {
  return items.find((item) => item.name.toLowerCase() === name.toLowerCase());
};


const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} | ${item.brand} | $${item.price} | ${item.inStock ? "Disponible" : "Agotado"}`;
};



console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);


console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);

items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Operaciones de mutación ---\n");

addItem({ id: 6, name: "Saxofón Alto", price: 780, inStock: true, category: "Viento", brand: "Selmer", material: "Latón" });

addPriorityItem({ id: 0, name: "Micrófono de Estudio", price: 190, inStock: true, category: "Accesorios", brand: "Shure", material: "Metal" });

removeByIndex(2);
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach((item) => {
  console.log(`  ${formatItem(item)}`);
});

console.log("\n--- Búsqueda y filtrado ---\n");

const foundInstrument = findByName("Guitarra Acústica");
console.log(foundInstrument ? `Encontrado: ${formatItem(foundInstrument)}` : "Instrumento no encontrado");

const activeItems = getActiveItems();
console.log(`Disponibles en stock: ${activeItems.length} de ${items.length}`);

const snapshot = [...items, { id: 99, name: "Ukulele Soprano", price: 145, inStock: true, category: "Cuerdas", brand: "Kala", material: "Caoba" }];
console.log(`Snapshot inmutable creado con ${snapshot.length} instrumentos (items sigue con ${items.length})`);

console.log("\n--- Transformación con map ---\n");

const instrumentNames = items.map((item) => item.name);
console.log("Nombres:", instrumentNames);

const discountedPrices = items.map((item) => ({
  name: item.name,
  discountedPrice: Number((item.price * 0.9).toFixed(2))
}));
console.log("Precios con 10% de descuento:", discountedPrices);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
