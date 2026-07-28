// Photo pipeline: EXIF auto-rotate, resize to max 1920w, strip metadata,
// SEO filenames, JSON manifest with dimensions for next/image.
// Run: node scripts/process-photos.mjs
import sharp from "sharp";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "C:/Users/admin/Projects/DAVMEL Remodeling/foto david";
const OUT = path.resolve("public/images");
const MANIFEST = path.resolve("src/lib/photo-manifest.json");

// [source file, output name (no ext), alt text]
const PHOTOS = [
  // heroes
  ["4942808206195928436.jpg", "open-concept-living-remodel-lancaster-pa", "Open concept living and dining room after a full interior remodel in Lancaster County PA"],
  ["20250331_082318.jpg", "bathroom-remodel-marble-tile-lancaster-pa", "Finished bathroom remodel with marble tile and chrome fixtures, Lancaster County PA"],
  ["4942808206195928435.jpg", "kitchen-remodel-quartz-farmhouse-sink-pa", "Remodeled kitchen with white cabinets, quartz counters and farmhouse sink"],
  ["4942808206195928434.jpg", "oak-staircase-renovation-lancaster-pa", "Rebuilt oak staircase with white balusters and curved handrail"],
  ["20260625_183158.jpg", "composite-deck-white-railing-blue-door-pa", "New gray composite deck with white vinyl railing at a blue front door"],
  ["20260211_141637.jpg", "composite-deck-cable-railing-lancaster-pa", "Composite deck with black cable railing and stairs built in winter"],
  ["20260707_194317.jpg", "bathroom-jetted-tub-marble-surround-pa", "Jetted corner tub with marble tile surround and pendant lighting"],
  ["20260707_194312.jpg", "walk-in-shower-glass-slider-marble-pa", "Walk-in shower with glass slider, marble look tile and niches"],
  // bathrooms
  ["20230614_121051.jpg", "bathroom-double-vanity-led-mirrors-pa", "Double vanity bathroom with LED mirrors and black faucets"],
  ["20250307_173225.jpg", "bathroom-twin-vanities-wainscoting-pa", "Twin white vanities with sconces and wainscoting during a bathroom remodel"],
  ["20240625_180424.jpg", "bathroom-remodel-skylight-white-tile-pa", "Finished bathroom with skylight and white tile floor"],
  ["20250324_183905.jpg", "bathroom-black-onyx-shower-tile-pa", "Dramatic black onyx look shower tile with gray vanity"],
  ["20250526_121921.jpg", "bathroom-gold-fixtures-black-vanity-pa", "Bathroom with gold framed mirror, gold faucets and black fluted cabinets"],
  ["4942808206195928432.jpg", "tub-surround-marble-tile-remodel-pa", "New tub with marble look tile surround and tiled floor"],
  ["4942808206195928430.jpg", "marble-shower-mosaic-pan-linear-drain-pa", "Marble tile shower with mosaic pan, quartz curb and linear drain"],
  ["4942808206195928407.jpg", "subway-tile-shower-hex-marble-floor-pa", "Subway tile shower and hex marble floor mid remodel"],
  ["4942808206195928429.jpg", "bathroom-demolition-before-pa", "Bathroom demolition with stud walls opened before remodel"],
  ["4942808206195928433.jpg", "tub-surround-demo-before-pa", "Tub surround demolition with stripped tile walls"],
  ["4942808206195928428.jpg", "shower-pan-liner-install-pa", "PVC shower pan liner installed in a framed shower stall"],
  ["4942808206195928410.jpg", "bathroom-remodel-in-progress-black-vanity-pa", "Nearly finished bathroom remodel with black vanity"],
  ["20241109_115013.jpg", "bathroom-wood-look-tile-floor-install-pa", "Wood look tile floor installation in a bathroom remodel"],
  ["20250512_160211.jpg", "bathroom-vanity-brass-pulls-install-pa", "White vanity with brass pulls and marble look floor during install"],
  // tile
  ["4942808206195928424.jpg", "marble-shower-wall-tile-installation-pa", "Marble look shower wall tile being installed"],
  ["4942808206195928425.jpg", "porcelain-floor-tile-leveling-system-pa", "Porcelain floor tile laid with a leveling spacer system"],
  ["4942808206195928408.jpg", "baseboard-trim-hex-marble-tile-floor-pa", "Baseboard trim detail over hex marble tile floor"],
  ["20260402_155425.jpg", "marble-mosaic-vanity-wall-tile-pa", "Marble mosaic vanity wall with sconces being installed"],
  ["20260330_115858.jpg", "mosaic-tile-bathroom-wall-progress-pa", "Marble mosaic bathroom wall tile in progress"],
  // drywall
  ["4942808206195928411.jpg", "drywall-taping-mudding-pa", "Taped and mudded drywall ready for finishing"],
  ["4942808206195928412.jpg", "drywall-skim-coat-hallway-pa", "Hallway drywall patches skim coated"],
  ["4942808206195928417.jpg", "drywall-green-board-hung-taped-pa", "Room fully hung with green board drywall, seams taped"],
  ["4942808206195928414.jpg", "ceiling-drywall-mudded-pa", "Green board ceiling mudded during a bathroom remodel"],
  ["20260504_104540.jpg", "recessed-drywall-access-panel-pa", "Flush recessed access panel in a textured ceiling"],
  ["20260227_120819.jpg", "drywall-taping-stone-accent-beam-pa", "Freshly taped drywall around an exposed stone accent beam"],
  // framing
  ["4942808206195928416.jpg", "shower-framing-cement-board-pa", "Shower wall framing with PVC drains and cement board"],
  ["4942808206195928418.jpg", "shower-alcove-framing-pa", "Framed shower alcove during a bathroom rebuild"],
  ["4942808206195928419.jpg", "wall-framing-plumbing-rough-in-pa", "Gutted walls with insulation and PEX plumbing rough in"],
  ["4942808206195928420.jpg", "ceiling-insulation-vent-framing-pa", "Ceiling insulation and new vent duct with wall framing"],
  ["4942808206195928423.jpg", "basement-remodel-framing-spray-foam-pa", "Basement remodel with steel ceiling grid and spray foam"],
  // interior carpentry / living spaces
  ["4942808206195928406.jpg", "marvin-window-installation-interior-pa", "New Marvin windows installed in a room mid renovation"],
  ["20260707_194327.jpg", "geometric-accent-wall-lvp-flooring-pa", "Painted geometric accent wall with new LVP flooring"],
  ["20260515_115733.jpg", "accent-wall-trim-carpentry-pa", "Geometric trim accent wall built and ready for paint"],
  ["20260519_105347.jpg", "wainscoting-picture-frame-molding-pa", "Picture frame wainscoting molding installed on a wall"],
  ["20260408_135716.jpg", "built-in-bookcase-wall-pa", "Built in bookcase wall with glazed door and bamboo floor"],
  ["20260408_135726.jpg", "sitting-room-before-renovation-pa", "Sitting room before renovation with tall windows"],
  ["20260225_083259.jpg", "black-grid-windows-interior-trim-pa", "New black grid windows trimmed during an interior renovation"],
  ["20260127_160149.jpg", "interior-door-casing-install-pa", "New interior door and casing installed"],
  ["20260625_114704.jpg", "white-two-panel-interior-door-pa", "New white two panel interior door with trim"],
  // decks
  ["20260625_183148.jpg", "composite-deck-build-in-progress-pa", "Composite deck build in progress with white vinyl railing"],
  ["20260625_183445.jpg", "elevated-composite-deck-brick-ranch-pa", "Elevated composite deck built on a brick ranch home"],
  ["20260625_183502.jpg", "elevated-deck-corner-white-railing-pa", "Corner view of a new elevated composite deck with white railing"],
  ["20260211_141643.jpg", "cable-railing-deck-stairs-pa", "Close up of composite deck stairs with black cable railing"],
  ["20260629_154750.jpg", "treated-wood-landing-gate-rail-pa", "New treated wood landing with gate rail, top view"],
  ["20260706_182532.jpg", "brick-porch-black-metal-railings-pa", "Brick porch with new black metal railings beside a garden"],
  ["20260706_182546.jpg", "porch-railing-hydrangea-garden-pa", "New black porch railings beside blooming hydrangeas"],
  // windows and doors
  ["20260502_141900.jpg", "replacement-windows-aluminum-capping-pa", "Two new double hung windows with fresh aluminum capping"],
  ["20260502_155754.jpg", "replacement-windows-tan-trim-brick-pa", "New replacement windows with tan trim on a brick bay"],
  ["20260518_171733.jpg", "modern-front-door-sidelites-stone-pa", "Modern front door with sidelites on a stone facade"],
  ["20260528_180335.jpg", "blue-front-door-installation-pa", "New blue front door with lite window and white trim"],
  ["20260528_180347.jpg", "blue-entry-door-fan-transom-pa", "Blue entry door with fan transom on brick and siding"],
  ["20260528_180412.jpg", "white-entry-door-paver-walkway-pa", "New white six panel entry door with paver walkway"],
  ["20260528_180905.jpg", "white-double-hung-window-install-pa", "New white double hung window on brick and siding"],
  ["20260724_152119.jpg", "black-storm-door-nine-lite-brick-pa", "New black storm door with nine lite glass on brick"],
  ["20260724_181922.jpg", "black-storm-door-board-batten-pa", "Black storm door on a board and batten siding porch"],
  ["4942808206195928421.jpg", "exterior-entry-door-brick-install-pa", "New white exterior entry door installed in a brick wall"],
  ["20260423_101348.jpg", "old-front-door-before-replacement-pa", "Worn wood front door before replacement"],
  ["20260423_153137.jpg", "door-opening-flashing-zip-tape-pa", "Door opening flashed with ZIP tape, ready for the new door"],
  // porch refinishing, exterior stairs
  ["20260427_211734.jpg", "porch-steps-refinishing-before-after-pa", "Before and after of porch steps refinishing"],
  ["20260427_211822.jpg", "porch-door-refinishing-before-after-pa", "Before and after of a porch door refinishing"],
  ["20260427_211845.jpg", "shutters-refinishing-before-after-pa", "Before and after of wood shutters restained dark walnut"],
  ["20260427_085949.jpg", "weathered-porch-steps-before-pa", "Weathered gray porch steps before refinishing"],
  ["20260427_190324.jpg", "porch-steps-stained-after-pa", "Freshly stained porch steps with white railings"],
  ["20260610_141525.jpg", "concrete-steps-before-resurfacing-pa", "Worn concrete side steps before resurfacing"],
  ["20260611_173723.jpg", "concrete-steps-resurfaced-after-pa", "Concrete steps resurfaced with a clean uniform finish"],
  ["20260613_103557.jpg", "deck-stairs-peeling-paint-before-pa", "Old deck steps with peeling red paint before rebuild"],
  ["20260626_192529.jpg", "new-porch-steps-railings-after-pa", "New pressure treated porch steps with railings"],
  ["20260629_154725.jpg", "treated-wood-stairs-side-entrance-pa", "New treated wood stairs at a side entrance"],
  ["20260626_121251.jpg", "porch-step-framing-stringers-pa", "Porch step framing with new stringers"],
  // kitchen
  ["20260528_180536.jpg", "kitchen-window-installation-pa", "New window installed over a kitchen sink"],
  // 2020 archive (craft background block, not PA gallery)
  ["IMG_20200111_145154_518.jpg", "archive-kitchen-white-island-marble", "Minimalist white kitchen with island and marble floor, earlier work"],
  ["IMG_20200111_145154_519.jpg", "archive-living-room-ceiling-mural", "Ornate living room with painted ceiling and chandelier, earlier work"],
  ["IMG_20200111_145154_523.jpg", "archive-marble-stairs-led-lighting", "Marble stairs with LED step lighting, earlier work"],
  ["IMG_20200111_145154_524.jpg", "archive-walk-in-shower-mosaic", "Walk in shower with gradient mosaic tile, earlier work"],
  ["IMG_20200111_145154_527.jpg", "archive-led-cove-ceiling-plaster", "LED cove lit ceiling with decorative plaster, earlier work"],
  ["IMG_20200111_145154_528.jpg", "archive-led-accent-wall", "Accent wall with X shaped LED fixture, earlier work"],
  // owner
  ["Screenshot-2024-04-12-190040.jpg", "david-melnychuk-owner", "David Melnychuk, owner of DAVMEL Remodeling"],
];

await mkdir(OUT, { recursive: true });
const manifest = {};
let done = 0, failed = 0;

for (const [src, out, alt] of PHOTOS) {
  try {
    const img = sharp(path.join(SRC, src)).rotate();
    const outPath = path.join(OUT, out + ".jpg");
    const info = await img
      .resize({ width: 1920, height: 1920, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(outPath);
    manifest[out] = { src: `/images/${out}.jpg`, width: info.width, height: info.height, alt };
    done++;
  } catch (e) {
    failed++;
    console.error(`FAIL ${src}: ${e.message}`);
  }
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2));
console.log(`done=${done} failed=${failed} -> ${MANIFEST}`);
