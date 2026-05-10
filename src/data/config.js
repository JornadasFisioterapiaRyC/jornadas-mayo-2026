// ─────────────────────────────────────────────
//  CONFIGURACIÓN DE SECCIONES
//  Editar aquí para activar/desactivar secciones
//  y asignar los pósteres correspondientes.
//  Los IDs están en src/data/posters.js
// ─────────────────────────────────────────────

export const config = {

  // ── Sección de trabajos galardonados ─────────
  winners: {
    visible: false,
    poster: '001_540a525a-78b1-4314-bafb-afe29305ba04',        // null si no hay ganador aún
    comunicacion: '002_88d35be1-391e-4421-8fca-bdf6e75ee68a',  // null si no hay ganador aún
  },

  // ── Sección de pósteres finalistas ───────────
  finalists: {
    visible: true,
    ids: [
      '001_540a525a-78b1-4314-bafb-afe29305ba04', // finalista 1
      '002_88d35be1-391e-4421-8fca-bdf6e75ee68a', // finalista 2
      '003_1ed89d87-dcaf-4593-81ad-9248093f5a92', // finalista 3
    ],
  },

}
