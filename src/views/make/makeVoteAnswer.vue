<template>
  <v-container style="max-width:100%">
     <v-img
        style="width:100%; height:25em;"
        :src="require('../../assets/mian_image.jpg')"
      >
        <div
          style="position: absolute;
            top: 38%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:2vw;"
          class="font-weight-black"
        >
          投票 No.00100
        </div>
        <div
          style="position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:3vw;"
          class="font-weight-black"
        >
            오늘 뭐먹지?
        </div>
        <div
          style="position: absolute;
            top: 62%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size:2vw;"
          class="font-weight-black"
        >
          오늘 먹은 점심을 알려주세요!
        </div>
     </v-img>
     <v-row
        style="max-width:98%; margin:0 auto;"
      >
      <v-col
        align="center"
        v-for="n in 10"
        :key="n"
        class="pa-5"
      >
        <v-card
          width="210px"
          height="260px"
          style="padding-top:5px;"
        >
          <v-col class="pb-0">
            <v-switch
              class="pa-0 ma-0 font-weight-black"
              v-model="ex11"
              label="イメージ利用"
              color="indigo darken-1"
              value="indigo"
              hide-details
            ></v-switch>
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
      
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'MakeVoteAnswer',


  data: () => ({
    voteInformation: {

      "vote_img":"",
      "vote_title":"",
      "vote_context":"",
      "vote_hits":"",
      "vote_likes":"",
      "vote_writer":""
    },
    check:''
    //
  }),
};
</script>
