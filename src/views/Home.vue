<template>
  <v-container class="ma-0">
    <v-row>
      <v-col
      >
        <v-img
          :src="require('../assets/mian_image.jpg')"
          contain
        >
          <div
            style="position: absolute;
              top: 43%;
              left: 50%;
              transform: translate(-50%, -50%);
              font-size:3vw;"
            class="font-weight-black"
          >
            새로운 투표를 만들어 봅시다!
          </div>
          <div
            style="position: absolute;
              top: 58%;
              left: 50%;
              transform: translate(-50%, -50%);"
          >
            <v-btn large class="title font-weight-medium white--text" color="#717b84">투표만들기</v-btn>
          </div>
        </v-img>
      </v-col>
    </v-row>

    <v-row class="pa-2">
      <v-col align="center">
        <div style="font-size:2.2vw" class="font-weight-black">인기 있는 투표</div>
      </v-col>
    </v-row>

    <v-row
      style="max-width:85%; margin:0 auto;"
    >
      <v-col
        align="center"
        v-for="n in 4"
        :key="n"
        class="pa-5"
      >
        <v-card
          width="260px"
          height="260px"
          style="padding-top:5px;"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            height="250px"
            width="250px"
            style="opacity: 0.5;"
          >
          </v-img>
          <div>
              <h2
                class="headline font-weight-black"
                style="
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);"
              >
                투표 이름
              </h2>
            </div>
        </v-card>
      </v-col>
    </v-row>
        
  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data: () => ({
    
  }),
};
</script>

<style scoped>
.container {
  min-width:100%
}
</style>
