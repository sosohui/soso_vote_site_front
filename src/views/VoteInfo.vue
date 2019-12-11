<template>
  <v-container style="max-width:100%">
     <v-img
        style="width:100%; height:25em;"
        :src="voteInfo.img"
      >
        <div
          style="position: absolute;
            top: 35%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:2vw;"
          class="font-weight-black"
        >
          投票 No.{{ $route.params.voteId }}
        </div>
        <div
          style="position: absolute;
            top: 46%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:3vw;"
          class="font-weight-black"
        >
            {{ voteInfo.title }}
        </div>
        <div
          style="position: absolute;
            top: 58%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:2vw;"
          class="font-weight-black"
        >
          {{ voteInfo.context }}
        </div>
     </v-img>
     <v-row
        style="max-width:98%; margin:0 auto;"
      >
      <v-radio-group v-model="check" row>
      <v-col
        align="center"
        v-for="(ai,index) in answerInfo"
        :key="index"
        class="pa-5"
      >
        <v-card
          width="210px"
          height="260px"
          style="padding-top:5px;"
        >
          <v-img
            :src="ai.ans_img"
            height="200px"
            width="200px"
          >
          </v-img>
          <v-col>
            <v-row
              class="mx-2 subtitle-1 font-weight-black"
            >
            <v-radio color="indigo" :label="ai.answer" :value="ai.answer_id"></v-radio>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      <v-col
        class="pa-5"
        align="center"
      >
        <v-card
          width="210px"
          height="260px"
          style="padding-top:5px;"
        >
          <v-col class="py-2 px-5 font-weight-bold" align="left">
            イメージ
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-file-input
              v-model="thumbnail"
              style="max-width:180px;max-height:60px;"
              color="indigo darken-1"
              class="font-weight-bold"
              label=""
              placeholder="添付してください"
              outlined
              prepend-icon=""
            >
            </v-file-input>
          </v-col>
          <v-col class="py-2 px-5 font-weight-bold" align="left">
            答えの選択肢
          </v-col>
          <v-col class="pa-0 ma-0">
            <v-text-field
              v-model="thumbnail"
              style="max-width:180px; max-height:50px;"
              color="indigo darken-1"
              class="font-weight-bold "
              label=""
              placeholder="入力してください"
              outlined
              prepend-icon=""
            >
            </v-text-field>
          </v-col>
          <v-col align="center">
            <v-btn class="ma-2 font-weight-bold" outlined color="indigo darken-1">完成</v-btn>
          </v-col>
        </v-card>
      </v-col>
      </v-radio-group>
      <v-row>
        <v-col
          align="center"
        >
          <v-btn style="border-width: 2px;" large class="ma-2 title font-weight-bold" outlined color="#414954">投票する</v-btn>
          <v-btn style="border-width: 2px;" large class="ma-2 title font-weight-bold" outlined color="#414954">結果見る</v-btn>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>

export default {
  //voteInfo
  name: 'VoteInfo',


  data: () => ({
    voteNum: null,
    voteInfo: null,
    answerInfo: null,
    check: null,
    thumbnail: null,
  }),
  methods: {
      answerDataLoading(){
        const baseURI = 'http://127.0.0.1'
        this.$http.get(`${baseURI}/api/votes/voteInfo/`+this.$route.params.voteId)
        .then((result) => {
          this.voteInfo = result['data'];
          console.log("소소");
          console.log(this.voteInfo);
        })
        .catch(function(error) {
          console.log(error);
        });
      },
      voteDataLoading(){
        const baseURI = 'http://127.0.0.1'
        this.$http.get(`${baseURI}/api/votes/answerInfo/`+this.$route.params.voteId)
        .then((result) => {
          this.answerInfo = result['data'];
          console.log("히히");
          console.log(this.answerInfo);
        })
        .catch(function(error) {
          console.log(error);
        });
      }
  },
  mounted() {
    this.voteDataLoading();
    this.answerDataLoading();
  }
};
</script>
