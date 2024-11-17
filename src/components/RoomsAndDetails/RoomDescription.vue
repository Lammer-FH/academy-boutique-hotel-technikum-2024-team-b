<script>
export default {
  name: "RoomDescription",

  props: {
    id: Number
  }
}
</script>

<template>

  <p v-if="id===1">
    Unser stilvolles Boutique-Zimmer vereint Komfort und Charme mit einzigartigem Design. Helle, freundliche
    Farben und ausgewählte Details schaffen eine warme Atmosphäre, während hochwertige Betten für erholsamen Schlaf
    sorgen.
    Genießen Sie moderne Annehmlichkeiten, ein elegantes Badezimmer und einen Blick ins Grüne – der perfekte Rückzugsort
    für Ihren Aufenthalt.</p>

  <p v-if="id===2">
    Helles Boutique-Zimmer mit bodentiefer Fensterfront, die eine beeindruckende Aussicht direkt vom großen, gemütlichen
    Bett aus bietet. Ein eleganter Schreibtisch aus Glas verleiht dem Raum ein modernes, luftiges Ambiente – ideal zum
    Arbeiten oder Entspannen. Genießen Sie das stilvolle Design und den Komfort, der jeden Aufenthalt zu einem
    besonderen Erlebnis macht.</p>

  <p v-if="id===3">
    Helles und geräumiges Zimmer mit schlichtem Design und warmem Licht, das eine einladende Atmosphäre schafft. Ein
    bequemer Stuhl am Fenster lädt zum Entspannen und Genießen der Aussicht ein – ideal für Gäste, die eine ruhige und
    unaufgeregte Umgebung suchen.</p>

  <p v-if="id===4">
    Stilvolles Boutique-Zimmer in ruhiger Lage, in warmen Rottönen gehalten und mit großzügigem, komfortablem Bett. Das
    Badezimmer ist durch eine dezente Schiebetür vom Wohnbereich abgetrennt und bietet Privatsphäre sowie modernes
    Design. Ein perfekter Rückzugsort zum Entspannen und Wohlfühlen.</p>

  <p v-if="id===5">
    Charmantes Zimmer im traditionellen Design mit warmem Teppichboden und hochwertigen Holzmöbeln, die eine gemütliche
    Atmosphäre schaffen. Viele kleine Lampen sorgen für stimmungsvolle Beleuchtung und ein behagliches Ambiente – ideal
    für Gäste, die klassischen Komfort und eine heimelige Atmosphäre schätzen.</p>

  <p v-if="id===6">
    Einfaches und schlichtes Zimmer, das dennoch jeden Komfort für einen angenehmen Aufenthalt bietet. Funktionale
    Einrichtung, gemütliches Bett und durchdachte Details schaffen eine entspannte Atmosphäre – perfekt für Gäste, die
    Wert auf Ruhe und Bequemlichkeit legen.</p>

  <p v-if="id===7">
    Ein stilvolles Zimmer mit edlem Holzboden und einer warmen, einladenden Atmosphäre. Die harmonische Einrichtung mit
    viel Holz schafft eine behagliche Umgebung. Das moderne Badezimmer ist durch eine elegante Schiebetür getrennt und
    bietet eine perfekte Kombination aus Komfort und zeitgemäßem Design.</p>

  <p v-if="id===8">
    Ein lichtdurchflutetes Zimmer mit einem privaten Balkon, der eine beeindruckende Aussicht bietet. Ausgestattet mit
    einem großzügigen, komfortablen Bett und einem gemütlichen Sessel lädt der Raum zum Entspannen ein – ideal für einen
    erholsamen Aufenthalt in stilvollem Ambiente..</p>

  <p v-if="id===9">
    Helles, einladendes Zimmer mit bodentiefen Fenstern, die viel Tageslicht und eine schöne Aussicht bieten. Ein
    gemütlicher Sessel direkt am Fenster lädt zum Lesen und Entspannen ein – der perfekte Ort, um zur Ruhe zu kommen und
    den Moment zu genießen.</p>

  <p v-if="id===10">
    Geräumiges und lichtdurchflutetes Zimmer mit zwei großen, komfortablen Betten und stilvollem Wandbild. Das
    Badezimmer verfügt über eine großzügige Badewanne, ideal für entspannende Momente. Perfekt für Gäste, die Komfort
    und modernes Design in einem hellen Ambiente genießen möchten.</p>


</template>

<style scoped>

</style>