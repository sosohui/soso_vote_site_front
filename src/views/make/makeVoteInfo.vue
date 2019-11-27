<template>
  <v-container class="ma-0">
      <v-row>
      <v-col
        align="center"
        class="mt-5"
      >
        <v-card
          width="500px"
          color="#ced6de"
          class="ma-5 pa-2"
        >
          <v-row>
            <v-col align="center">
              <p style="font-size:22px;" class="font-weight-bold">
                投票の情報
              </p>
            </v-col>
          </v-row>
          
          <v-row
            class="px-4 py-5"
          >
            <v-text-field
              v-model="voteName"
              style="background-color:white;height:56px;"
              color="#43434c"
              class="font-weight-bold"
              label="投票の名"
              placeholder="内容を入力してください。"
              outlined
            ></v-text-field>
          </v-row>
          <v-row
            class="px-4 py-5"
          >
            <v-textarea
              v-model="voteContext"
              style="background-color:white;height:115px;"
              color="#43434c"
              class="font-weight-bold"
              outlined
              name="input-7-4"
              label="投票の説明"
              placeholder="内容を入力してください。"
            ></v-textarea>
          </v-row>
          <v-row
            class="px-4 pt-5 pb-0"
          >
            <v-file-input
              style="background-color:white; height:55px;"
              v-model="thumbnail"
              color="#43434c"
              class="font-weight-bold mb-5"
              label=""
              placeholder="クリックしてファイルを添付してください。"
              outlined
              prepend-icon=""
            >
            </v-file-input>
          </v-row>
          <v-row class="px-5">
            <v-switch class="font-weight-black" color="blue-grey darken-3" v-model="open" inset label="非公開の投票"></v-switch>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                @click="saveVote()"
                large color="#434b56" class="px-5 font-weight-bold title" outlined>完成</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'makeVoteInfo',

  data: () => ({
    voteName: '',
    voteContext: '',
    thumbnail: [],
    open: 'true'
  }),
  methods:{
    saveVote() {
      const baseURI = 'http://127.0.0.1:8000'
        this.$http.post(`${baseURI}/api/votes/makeVote`,
          {
            'vote_id': '001003',
            'writer': 'soso',
            'title': this.voteName,
            'context': this.voteContext,
          }
        )
        .then((result) => {
          console.log(result)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  min-width:100%
}
</style>
