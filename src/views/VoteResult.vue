<template>
  <v-container style="max-width:100%">
     <v-img
        style="width:100%; height:25em;"
        :src="require('../assets/mian_image.jpg')"
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
      <v-radio-group v-model="check" row>
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
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            height="200px"
            width="200px"
          >
          </v-img>
          <v-col>
            <v-row
              class="mx-2 subtitle-1 font-weight-black"
            >
            <v-radio color="indigo" :label="n" :value="n"></v-radio>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
      </v-radio-group>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'VoteResult',


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
