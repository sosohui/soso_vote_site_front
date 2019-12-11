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
            新しい投票を作ってみましょう！
          </div>
          <div
            style="position: absolute;
              top: 58%;
              left: 50%;
              transform: translate(-50%, -50%);"
          >
            <router-link to="/makeVoteInfo" style="text-decoration:none; color:white">
              <v-btn large class="title font-weight-medium white--text" color="#717b84">
                投票作る
              </v-btn>
            </router-link>
          </div>
        </v-img>
      </v-col>
    </v-row>

    <v-row class="pa-2">
      <v-col align="center">
        <div style="font-size:2.2vw" class="font-weight-black">人気の投票</div>
      </v-col>
    </v-row>

    <v-row
      style="max-width:85%; margin:0 auto;"
    >
      <v-col
        align="center"
        v-for="(pop,index) in popularVote"
        class="pa-5"
        :key="index"
      >
        <v-card
          v-if="index <= 3"
          width="260px"
          height="260px"
          style="padding-top:5px;"
        >
          <v-img
            :src="pop.img"
            height="250px"
            width="250px"
            style="opacity: 0.5;"
          >
          </v-img>
          <div>
              <h2
                class="headline font-weight-black"
                style="
                  min-width:200px;
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);"
              >
                {{ pop.title }}
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
    popularVote: null
  }),
  methods: {
    dataLoading(){
      const baseURI = 'http://127.0.0.1'
      this.$http.get(`${baseURI}/api/votes/allVotes`)
      .then((result) => {
        this.popularVote = result['data'];
        console.log(this.popularVote);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  },
  mounted() {
    this.dataLoading()
  }
};
</script>

<style scoped>
.container {
  min-width:100%
}
</style>
