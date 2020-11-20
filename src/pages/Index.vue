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
      <div class="relative">
        <q-avatar size="200px" font-size="52px" color="teal" text-color="white">
          <img :src="userFound.avatar_url" />
        </q-avatar>
        <q-btn
          @click="toggleFavorites"
          class="absolute"
          label=""
          flat
          color="grey"
        >
          <template v-if="favorite">
            <q-tooltip>
              Remover dos favoritos
            </q-tooltip>
            <q-icon size="50px" color="yellow-7" name="grade"></q-icon>
          </template>
          <template v-else>
            <q-tooltip>
              Adicionar aos favoritos
            </q-tooltip>
            <q-icon size="50px" color="yellow-7" name="o_grade"></q-icon>
          </template>
        </q-btn>
      </div>
      <div class="q-mx-md">
        <p v-if="userFound.name" class="q-mt-md text-h4 text-center">
          {{ userFound.name }}
        </p>
        <p class="q-mt-lg" v-if="userFound.bio">{{ userFound.bio }}</p>
      </div>
      <p class="text-h6 q-mb-lg">
        Repositorios publicos: {{ userFound.public_repos }}
      </p>
      <div class="q-px-lg row q-col-gutter-md">
        <div
          v-for="(repository, i) in repositories"
          :key="i"
          class="col-12 col-sm-6 col-md-4 col-lg-3 q-ma-md-none my-card"
        >
          <q-card v-ripple @click="goToRepository(i)">
            <q-badge
              v-if="repository.language"
              color="cyan-11"
              text-color="black"
              pill
              floating
            >
              {{ repository.language }}
            </q-badge>
            <div class="q-pa-sm d-flex column full-height">
              <a class="text-h6 justify-center full-width row bb"
                ><div class="ellipsis">{{ repository.name }}</div></a
              >
              <div class="row justify-center" style="height:15px">
                <q-icon class="q-mt-xs text-orange" name="stars" />
                <p class="text-h8">{{ repository.stargazers_count }}</p>
                <q-icon class="q-mt-xs q-ml-auto" name="remove_red_eye" />
                <p class="text-h8 q-mr-auto">
                  {{ repository.watchers_count }}
                </p>
                <q-icon class="q-mt-xs text-red" name="account_tree" />
                <p class="text-h8">{{ repository.forks }}</p>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <q-dialog v-model="confirm">
      <q-card>
        <q-card-section class="row items-center">
          <h5 class="q-ml-sm">Tem certeza que quer remover dos favoritos</h5>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancelar" color="primary" v-close-popup />
          <q-btn flat label="Remover" color="primary" @click="removeFavorite" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      userToFind: null,
      repositories: null,
      userFound: null,
      favorite: false,
      confirm: false
    };
  },
  methods: {
    goToRepository(i) {
      const win = window.open(this.repositories[i].html_url, "_blank");
      win.focus();
    },
    async searchUser() {
      this.$q.loading.show();
      this.userFound = await this.$http(`/${this.userToFind}`).then(
        response => response.data
      );
      this.isFavorite();
      this.repositories = await this.$http(this.userFound.repos_url).then(
        response => response.data
      );
      this.$q.loading.hide();
    },
    toggleFavorites() {
      if (this.favorite) {
        this.confirm = true;
      } else {
        this.$store.commit("favorites/addToList", this.userFound);
        this.$q.notify({
          timeout: 1500,
          position: "top",
          message: "Usuário adicionado aos favorítos"
        });
        this.favorite = !this.favorite;
      }
    },
    removeFavorite() {
      this.$store.commit("favorites/removeFromList", this.userFound);
      this.favorite = false;
      this.confirm = false;
      this.$q.notify({
        timeout: 1500,
        position: "top",
        message: "Usuário removido dos favorítos"
      });
    },
    isFavorite() {
      const favorites = this.$store.getters["favorites/getAll"];
      let favorite = false;
      favorites.forEach((favoriteUser, i) => {
        if (favoriteUser.id === this.userFound.id) {
          this.userFound.index = i;
          favorite = true;
          return;
        }
      });
      this.favorite = favorite;
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
.ellipsis2 {
  text-overflow: ellipsis ellipsis;
}
.teste {
  overflow: hidden;
  white-space: nowrap;
  width: auto;
}
</style>
