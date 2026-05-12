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
      '019_c3f320e4-059b-4661-8ee3-c1050e96d2be',
      '005_fc23f1ee-f755-43d2-949b-bf10fc552bf0',
      '009_dc7bc3b7-f187-44c1-a948-c7969bb073e1',
    ],
  },

}
