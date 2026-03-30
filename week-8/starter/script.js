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

// ============================================
// 1. ARRAY INICIAL — Define tu inventario
// ============================================

const items = [
  { id: 1, name: "Guitarra Acústica", price: 320, inStock: true, category: "Cuerdas", brand: "Yamaha", material: "Madera" },
  { id: 2, name: "Piano Digital", price: 950, inStock: true, category: "Teclado", brand: "Casio", material: "Polímero" },
  { id: 3, name: "Batería Junior", price: 540, inStock: false, category: "Percusión", brand: "Pearl", material: "Metal" },
  { id: 4, name: "Violín 4/4", price: 410, inStock: true, category: "Cuerdas", brand: "Stentor", material: "Abeto" },
  { id: 5, name: "Flauta Travesera", price: 260, inStock: false, category: "Viento", brand: "Jupiter", material: "Níquel" }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

/**
 * Agrega un nuevo elemento al inventario
 * @param {Object} newItem - Elemento a agregar
 */
const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

/**
 * Elimina el último elemento del inventario
 * @returns {Object} El elemento eliminado
 */
const removeLastItem = () => {
  const removedItem = items.pop();
  console.log(`Último instrumento eliminado: ${removedItem.name}`);
  return removedItem;
};

/**
 * Agrega un elemento prioritario al inicio del inventario
 * @param {Object} priorityItem - Elemento a agregar con prioridad
 */
const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Instrumento prioritario agregado: ${priorityItem.name}`);
};

/**
 * Elimina un elemento por su posición (índice)
 * @param {number} index - Posición del elemento a eliminar
 */
const removeByIndex = (index) => {
  if (index < 0 || index >= items.length) {
    console.log("Índice fuera de rango");
    return;
  }

  const removedItems = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removedItems[0].name}`);
};

/**
 * Obtiene todos los elementos activos/disponibles
 * @returns {Array} Array de elementos activos
 */
const getActiveItems = () => {
  return items.filter((item) => item.inStock);
};

/**
 * Busca un elemento por su nombre
 * @param {string} name - Nombre a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findByName = (name) => {
  return items.find((item) => item.name.toLowerCase() === name.toLowerCase());
};

/**
 * Formatea un elemento para mostrar en el reporte
 * @param {Object} item - Elemento a formatear
 * @returns {string} Texto formateado
 */
const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.category} | ${item.brand} | $${item.price} | ${item.inStock ? "Disponible" : "Agotado"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

// Estado inicial
console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
// TODO: Usar forEach para mostrar cada elemento con formatItem
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
// TODO: mostrar total de activos vs total general
const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);