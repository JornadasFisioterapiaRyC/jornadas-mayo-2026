// ─────────────────────────────────────────────
//  CONFIGURACIÓN DE SECCIONES
//  Editar aquí para activar/desactivar secciones
//  y asignar los pósteres correspondientes.
//  Los IDs están en src/data/posters.js
// ─────────────────────────────────────────────

export const config = {

  // ── Sección de trabajos galardonados ─────────
  winners: {
    visible: true,
    poster: '019_c3f320e4-059b-4661-8ee3-c1050e96d2be',
    comunicacion: '004_aa647890-21ff-4efe-a8df-80d91dae7078',
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
