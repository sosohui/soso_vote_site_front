<template>
  <v-app>
    <v-app-bar
      app
      color="#414954"
      dark
    >
      <div>
        <v-btn text style="width:135px;height:50px;">
          <router-link to="/">
            <div class="d-flex align-center">
              <v-img
                alt="vote_site_logo"
                class=""
                contain
                src="./assets/main_logo.png"
                width="130"
              />
            </div>
          </router-link>
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        target="_blank"
        text
        class="mx-2 subtitle-1"
      >
        <router-link to="/voteList" style="text-decoration:none; color:white">
          <span>투표 리스트</span>
        </router-link>
      </v-btn>
      <v-btn
        target="_blank"
        text
        class="mx-2 subtitle-1"
      >
        <router-link to="/login" style="text-decoration:none; color:white">
          <span>로그인</span>
        </router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',


  data: () => ({
    //
  }),
};
</script>
