// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Instrumentos musicales
// ============================================

"use strict";


const DOMAIN_NAME = "Inventario de Instrumentos Musicales";
const VALUE_LABEL = "precio";

const instrumentos = [
  {
    id: 1,
    nombre: "Guitarra acústica Yamaha F310",
    tipo: "Cuerda",
    precio: 650000,
    stock: 4,
    disponible: true,
  },
  {
    id: 2,
    nombre: "Piano digital Casio CDP-S110",
    tipo: "Teclado",
    precio: 2100000,
    stock: 2,
    disponible: true,
  },
  {
    id: 3,
    nombre: "Batería electrónica Alesis Nitro",
    tipo: "Percusión",
    precio: 2450000,
    stock: 1,
    disponible: true,
  },
  {
    id: 4,
    nombre: "Violín Hoffmann 4/4",
    tipo: "Cuerda",
    precio: 480000,
    stock: 0,
    disponible: false,
  },
  {
    id: 5,
    nombre: "Saxofón alto Mercury",
    tipo: "Viento",
    precio: 1750000,
    stock: 3,
    disponible: true,
  },
];



const formatearInstrumento = (instrumento) => {
  return `🎵 ${instrumento.nombre} | Tipo: ${instrumento.tipo} | Precio: COP ${instrumento.precio.toLocaleString("es-CO")} | Stock: ${instrumento.stock}`;
};


const calcularValorInventario = (precio, cantidad = 1) => {
  return precio * cantidad;
};



const esInstrumentoDisponible = (instrumento) => {
  return instrumento.disponible === true && instrumento.stock > 0;
};

const formatearConDefault = (
  valor,
  etiqueta = `Total ${VALUE_LABEL}`,
  moneda = "COP"
) => {
  return `${etiqueta}: ${moneda} ${valor.toLocaleString("es-CO")}`;
};


console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (instrumentos.length === 0) {
  console.log("\n⚠️ No hay instrumentos registrados.");
} else {
  console.log("\n📋 Inventario disponible:");

  let numeroLinea = 1;
  for (const instrumento of instrumentos) {
    console.log(`  ${numeroLinea}. ${formatearInstrumento(instrumento)}`);
    numeroLinea++;
  }

  let disponibles = 0;
  for (const instrumento of instrumentos) {
    if (esInstrumentoDisponible(instrumento)) {
      disponibles++;
    }
  }
  console.log(`\n✅ Instrumentos disponibles: ${disponibles} / ${instrumentos.length}`);

  let valorTotalInventario = 0;
  for (const instrumento of instrumentos) {
    valorTotalInventario += calcularValorInventario(
      instrumento.precio,
      instrumento.stock
    );
  }

  console.log(formatearConDefault(valorTotalInventario));
}

console.log(`\n${"═".repeat(45)}\n`);
