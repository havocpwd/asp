<template>
<v-container
  class="white lighten-5 mb-6"
>
  <v-card
      class="d-flex flex-row mb-6"
      :color="$vuetify.theme.light ? 'white darken-3' : 'white lighten-4'"
      flat
      tile
    >
      <v-card
        class="pa-2"
        outlined
        tile
        max-width="800"
      >
        <v-sparkline
          :value="value"
          :gradient="gradient"
          :smooth="radius || false"
          :padding="padding"
          :line-width="width"
          :stroke-linecap="lineCap"
          :gradient-direction="gradientDirection"
          :fill="fill"
          :type="type"
          :auto-line-width="autoLineWidth"
          auto-draw
        ></v-sparkline>
      </v-card>
      <v-spacer></v-spacer>
      <v-card
        class="pa-2"
        outlined
        tile
        max-width="800"
      >
        <v-sparkline
        :fill="fill"
        :gradient="selectedGradient"
        :line-width="width"
        :padding="padding"
        :smooth="radius || false"
        :value="value"
        auto-draw
      ></v-sparkline>
      </v-card>
    </v-card>
    <v-card
      class="d-flex flex-row-reverse"
      :color="$vuetify.theme.light ? 'white darken-3' : 'white lighten-4'"
      flat
      tile
    >
      <v-card
        class="pa-2"
        outlined
        tile
      >
        Flex item
      </v-card>
    </v-card>
</v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
]
  export default {
    data () {
      return {
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        selectedGradient: gradients[4],
        gradient: gradients[5],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'trend',
        autoLineWidth: false,
      }
    },
  }
</script>