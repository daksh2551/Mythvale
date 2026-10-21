/* Mythvale Swordigo reference registry. Metadata only: never loads proprietary binary files into the renderer. */
export const swordigoReferenceRegistry = Object.freeze({
  status: "reference-only",
  modelFormat: ".POD",
  textureFormat: ".PVR",
  sceneFormat: ".scene",
  fontMetadataFormat: ".fnt",
  audioRuntimePath: "assets/audio/",
  rendererCompatibility: { canvas2d: false, browserImage: false, requiresConversion: true },
  note: "Use only for private prototyping unless you have rights to redistribute the source assets."
});
