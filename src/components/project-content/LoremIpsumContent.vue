<template>
  <h1 class="my-4">Lorem ipsum content</h1>
  <div class="col-lg-6 mb-4" v-for="loremIpsum in loremIpsums" :key="'id_' + loremIpsum.id">
    <div class="card h-100">
      <a href="#"><img class="card-img-top" :src="loremIpsum.image" alt="loremIpsum image" /></a>
      <div class="card-body">
        <h4 class="card-title">
          <a href="#">{{ loremIpsum.title }}</a>
        </h4>
        <p class="card-text">
          {{ loremIpsum.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueBoilerplateService from '../../services/vue-boilerplate.service'

export default {
  name: 'LoremIpsumContent',
  components: {},
  data() {
    return {
      loremIpsums: []
    }
  },
  mounted() {
    this.loremIpsums = VueBoilerplateService.getLoremIpsum()
  }
}
</script>

<style scoped lang="scss"></style>
