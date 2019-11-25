<template>
  <v-container>
      <v-row>
          <v-col align="center">
            <v-row style="width:450px;">
              <v-text-field
                color="#434b56"
                label="SearchVote"
                outlined=""
                placeholder="투표 번호를 입력해 주세요."
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
        v-for="n in 10"
        :key="n"
        class="pa-5"
      >
        <v-card
          width="260px"
          height="320px"
          style="padding-top:5px;"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
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
              {{ n }}
            </div>
            <h2
              class="ma-2 title font-weight-black"
            >
              투표 이름
            </h2>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VoteList',


  data: () => ({
    //
  }),
};
</script>

<style scoped>
.container{
  min-width:100%
}
</style>
