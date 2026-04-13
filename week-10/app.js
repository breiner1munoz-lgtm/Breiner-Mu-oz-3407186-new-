// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: Instrumentos Musicales
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

const DOMAIN_NAME = "MUSICAL_INSTRUMENTS";
const VALUE_LABEL = "instrumentos";

// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

const items = [
  {
    id: 1,
    nombre: "Guitarra Acústica",
    tipo: "Cuerda",
    precio: 500,
    disponible: true,
    marca: "Yamaha",
    descripcion: "Guitarra de 6 cuerdas con caja de resonancia"
  },
  {
    id: 2,
    nombre: "Piano Digital",
    tipo: "Teclado",
    precio: 1200,
    disponible: true,
    marca: "Casio"
  },
  {
    id: 3,
    nombre: "Batería Electrónica",
    tipo: "Percusión",
    precio: 800,
    disponible: false,
    marca: "Roland",
    descripcion: "Batería con pads sensibles a la velocidad"
  },
  {
    id: 4,
    nombre: "Violín",
    tipo: "Cuerda",
    precio: 300,
    disponible: true,
    marca: "Stradivarius"
  },
  {
    id: 5,
    nombre: "Saxofón Alto",
    tipo: "Viento",
    precio: 700,
    disponible: true,
    marca: "Yamaha"
  },
  {
    id: 6,
    nombre: "Trompeta",
    tipo: "Viento",
    precio: 400,
    disponible: false,
    marca: "Bach",
    descripcion: "Trompeta en si bemol con boquilla incluida"
  }
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log(`No se puede agregar: límite de ${MAX_ITEMS} ${VALUE_LABEL} alcanzado.`);
    return;
  }
  items.push(item);
  console.log(`Nuevo ${VALUE_LABEL} agregado: ${item.nombre}`);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  return items.filter(item => item.disponible);
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  return items.map(item => item.id === id ? { ...item, ...changes } : item);
};

/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
  const values = items.map(item => item[field]).filter(value => typeof value === 'number');
  if (values.length === 0) return { min: 0, max: 0, avg: 0, total: 0 };
  const min = Math.min(...values);
  const max = Math.max(...values);
  const total = values.reduce((sum, val) => sum + val, 0);
  const avg = total / values.length;
  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  return `${item.id.toString().padStart(3)} | ${item.nombre.padEnd(20)} | ${item.tipo.padEnd(10)} | COP ${item.precio.toString().padStart(5)} | ${item.disponible ? 'Disponible' : 'No disponible'} | ${item.descripcion ?? 'N/A'}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */
const buildReport = () => {
  console.log(`Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(80));
  console.log("ID  | Nombre              | Tipo      | Precio | Disponibilidad | Descripción");
  console.log("----|----------------------|-----------|--------|----------------|-------------");
  items.forEach(item => console.log(formatItem(item)));
  console.log("");

  const activeItems = getActive();
  console.log(`Instrumentos disponibles: ${activeItems.length}`);
  console.log(`Instrumentos no disponibles: ${items.length - activeItems.length}`);
  console.log("");

  const stats = calculateStats('precio');
  console.log("Estadísticas de precios:");
  console.log(`Mínimo: COP ${stats.min}`);
  console.log(`Máximo: COP ${stats.max}`);
  console.log(`Promedio: COP ${stats.avg.toFixed(2)}`);
  console.log(`Total: COP ${stats.total}`);
  console.log("");

  if (items.length > 0) {
    console.log("Propiedades del primer instrumento:");
    Object.entries(items[0]).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }
  console.log("");
  console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(1);
console.log("Encontrado id=1:", found?.nombre ?? "no encontrado");
console.log("");

// Paso 2: Listar activos
const active = getActive();
console.log("Instrumentos disponibles:");
active.forEach(item => console.log(`- ${item.nombre}`));
console.log("");

// Paso 3: Filtrar por campo
const guitars = filterByField('tipo', 'Cuerda');
console.log("Instrumentos de tipo Cuerda:");
guitars.forEach(item => console.log(`- ${item.nombre}`));
console.log("");

// Paso 4: Actualizar un item
const updatedItems = updateItem(1, { precio: 550 });
console.log("Actualizado precio de Guitarra Acústica a COP 550");
console.log("");

// Paso 5: Estadísticas
const stats = calculateStats('precio');
console.log("Estadísticas de precios:");
console.log(`Mín: COP ${stats.min}, Máx: COP ${stats.max}, Prom: COP ${stats.avg.toFixed(2)}, Total: COP ${stats.total}`);
console.log("");

// Paso 6: Agregar nuevo item
addItem({
  id: 7,
  nombre: "Flauta Traversa",
  tipo: "Viento",
  precio: 200,
  disponible: true,
  marca: "Yamaha"
});
console.log("");

// Paso 7: Reporte completo
buildReport();
// const active = getActive();
// console.log(`Activos: ${active.length}`);
// active.forEach(item => console.log(" ", formatItem(item)));
// console.log("");

// Paso 3: Filtrar por campo
// const filtered = filterByField("category", "tipo-a");
// console.log(`Filtro category=tipo-a: ${filtered.length} resultados`);
// console.log("");

// Paso 4: Actualizar con spread
// const updated = updateItem(1, { value: 999 });
// console.log(`Actualizado id=1: value=${updated.find(i => i.id === 1)?.value}`);
// console.log("");

// Paso 5: Estadísticas
// const stats = calculateStats("value");
// console.log(`Estadísticas (value): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
// console.log("");

// Paso 6: Reporte completo
// buildReport();

// TODO: Agregar un nuevo elemento usando addItem
// addItem({ id: 7, name: "Nuevo elemento", value: 300, active: true, category: "tipo-a" });