// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000

const GUITAR_PRICE = 500_000;
const PIANO_PRICE = 2_000_000;
const DRUMS_PRICE = 800_000;
const MAX_STOCK = 50;

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

const numGuitars = 10;
const numPianos = 2;
const numDrums = 5;
const totalValue = (numGuitars * GUITAR_PRICE) + (numPianos * PIANO_PRICE) + (numDrums * DRUMS_PRICE);
console.log("Valor total del inventario:", totalValue.toLocaleString('es-ES'));

const averagePrice = totalValue / (numGuitars + numPianos + numDrums);
console.log("Precio promedio por instrumento:", averagePrice.toLocaleString('es-ES'));

const discount = totalValue * 0.10; // 10% discount
console.log("Descuento del 10%:", discount.toLocaleString('es-ES'));

const finalValue = totalValue - discount;
console.log("Valor final con descuento:", finalValue.toLocaleString('es-ES'));

console.log("");

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

let totalSales = 0;
console.log("Ventas iniciales:", totalSales.toLocaleString('es-ES'));
totalSales += 2 * GUITAR_PRICE; // Venta de 2 guitarras
console.log("Después de vender 2 guitarras:", totalSales.toLocaleString('es-ES'));
totalSales += 1 * PIANO_PRICE; // Venta de 1 piano
console.log("Después de vender 1 piano:", totalSales.toLocaleString('es-ES'));
totalSales *= 0.95; // Descuento del 5% por pago en efectivo
console.log("Con descuento del 5%:", totalSales.toLocaleString('es-ES'));

console.log("");

// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

const currentStock = numGuitars + numPianos + numDrums;
const isStockLow = currentStock < 10;
console.log("¿Stock bajo?", isStockLow);

const isPianoExpensive = PIANO_PRICE > 1_500_000;
console.log("¿El piano es caro?", isPianoExpensive);

const isGuitarCheap = GUITAR_PRICE <= 600_000;
console.log("¿La guitarra es barata?", isGuitarCheap);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

const isMember = true;
const purchaseAmount = totalSales;
const qualifiesForDiscount = isMember && purchaseAmount >= 1_000_000;
console.log("¿Califica para descuento de miembro?", qualifiesForDiscount);

const needsRestock = currentStock < 5 || !isStockLow;
console.log("¿Necesita reabastecer?", needsRestock);

const notExpensive = !isPianoExpensive;
console.log("¿No es caro el piano?", notExpensive);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores

console.log("Precio de guitarra:", GUITAR_PRICE.toLocaleString('es-ES'));
console.log("Precio de piano:", PIANO_PRICE.toLocaleString('es-ES'));
console.log("Precio de batería:", DRUMS_PRICE.toLocaleString('es-ES'));
console.log("Stock máximo:", MAX_STOCK);
console.log("Valor total del inventario:", totalValue.toLocaleString('es-ES'));
console.log("Precio promedio:", averagePrice.toLocaleString('es-ES'));
console.log("Valor final con descuento:", finalValue.toLocaleString('es-ES'));
console.log("Ventas totales:", totalSales.toLocaleString('es-ES'));
console.log("Stock actual:", currentStock);
console.log("¿Stock bajo?", isStockLow);
console.log("¿Califica para descuento?", qualifiesForDiscount);

console.log("");