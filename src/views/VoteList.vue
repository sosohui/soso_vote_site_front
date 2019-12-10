<template>
  <v-container>
      <v-row>
          <v-col align="center">
            <v-row style="width:450px;">
              <v-text-field
                color="#434b56"
                label="SearchVote"
                outlined=""
                placeholder="投票の番号を入力してください。"
                solo
              ></v-text-field>
              <v-btn class="mx-4 my-1" style="height:45px;" outlined small color="#434b56">
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
            </v-row>
          </v-col>
      </v-row>
      <v-row
        style="max-width:98%; margin:0 auto;"
      >
      <v-col
        align="center"
        v-for="(n,index) in allVote"
        :key="n.vote_id"
        class="pa-5"
      >
      <router-link :to="{ name: 'voteInfo', params: { voteId: n.vote_id } }" style="text-decoration:none;">
        <v-card
          width="260px"
          height="320px"
          style="padding-top:5px;"
        >
          <v-img
            :src="n.img"
            height="250px"
            width="250px"
            style="opacity: 0.5;"
          >
          </v-img>
            <div
              class="title px-2 white--text"
              style="
                position: absolute;
                top: 1.5%;
                left: 1.7%
                height:30px;
                backgroundColor:#434b56"
            >
              {{ index+1 }}
            </div>
            <h2
              class="ma-2 title font-weight-black"
            >
              {{ n.title }}
            </h2>
        </v-card>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VoteList',


  data: () => ({
    allVote: null,
  }),
  methods: {
      dataLoading(){
        const baseURI = 'http://127.0.0.1'
        this.$http.get(`${baseURI}/api/votes/allVotes`)
        .then((result) => {
          this.allVote = result['data'];
          console.log(this.allVote);
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
.container{
  min-width:100%
}
</style>
