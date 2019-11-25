<template>
  <v-container>
    <v-row>
      <v-col
        align="center"
        class="mt-5"
      >
        <v-card
          width="500px"
          color="#dde4ed"
          class="ma-5 pa-5"
        >
          <v-row>
            <v-col aling="center">
              <p class="headline font-weight-bold">로그인</p>
            </v-col>
          </v-row>
          <v-row
            class="pa-3"
          >
            <v-textarea
              class="font-weight-bold"
              color="#434b56"
              label="ID"
              auto-grow
              outlined
              rows="1"
              row-height="15"
        ></v-textarea>
          </v-row>
          <v-row
            class="pa-3"
          >
            <v-textarea
              class="font-weight-bold"
              color="#434b56"
              label="Password"
              auto-grow
              outlined
              rows="1"
              row-height="15"
            ></v-textarea>
          </v-row>
          <v-row>
            <v-col>
              <v-btn large color="#434b56" class="px-5 font-weight-bold title" outlined>Login</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'Login',


  data: () => ({
    //
  }),
};
</script>
