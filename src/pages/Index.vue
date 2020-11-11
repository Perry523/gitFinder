<template>
  <q-page>
    <div class="col-4 d-flex row flex-center content-start">
      <q-input
        v-model="userToFind"
        @keyup.enter="searchUser"
        class="w-50"
        type="text"
        label="Nick do usuário"
      />
      <q-btn color="primary" icon="search" @click="searchUser" />
    </div>
    <div v-if="userFound" class="d-flex column q-mt-md items-center">
      <q-avatar size="200px" font-size="52px" color="teal" text-color="white">
        <img :src="userFound.avatar_url" />
      </q-avatar>
      <div class="q-mx-md">
        <p v-if="userFound.name" class="q-mt-md text-h4 text-center">
          {{ userFound.name }}
        </p>
        <p v-if="userFound.bio">{{ userFound.bio }}</p>
      </div>
      <p class="text-h6">Repositorios publicos: {{ userFound.public_repos }}</p>
      <div class="row justify-center">
        <q-card
          @click="goToRepository(i)"
          v-for="(repository, i) in repositories"
          :key="i"
          class="q-ma-sm col-auto col-10 col-sm-5 col-md-3 my-card"
        >
          <div class="q-pa-sm d-flex column full-height">
            <a class="text-h6 col row justify-center bb"
              ><span class="">{{ repository.name }}</span></a
            >
            <div class="row justify-center" style="height:15px">
              <q-icon class="q-mt-xs text-orange" name="stars" />
              <p class="text-h8">{{ repository.stargazers_count }}</p>
              <q-icon class="q-mt-xs q-ml-auto" name="remove_red_eye" />
              <p class="text-h8 q-mr-auto">{{ repository.watchers_count }}</p>
              <q-icon class="q-mt-xs text-red" name="account_tree" />
              <p class="text-h8">{{ repository.forks }}</p>
            </div>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      userToFind: null,
      repositories: null,
      userFound: null
    };
  },
  methods: {
    goToRepository(i) {
      window.location = this.repositories[i].html_url;
    },
    async searchUser() {
      this.userFound = await this.$http(`/${this.userToFind}`).then(
        response => response.data
      );
      this.repositories = await this.$http(this.userFound.repos_url).then(
        response => response.data
      );
    }
  }
};
</script>
<style scoped>
.w-50 {
  width: 50%;
}
.my-card {
  cursor: pointer;
}
.bb {
  border-bottom: 1px solid #eee;
  padding-bottom: 3px;
  margin-bottom: 3px;
}
</style>
