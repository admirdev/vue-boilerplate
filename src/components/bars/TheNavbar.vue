<template>
  <nav class="navbar navbar-expand-lg sticky-top navbar-light bg-white py-3">
    <div class="container">
      <a class="navbar-brand" href="index.html"><span class="fw-bolder text-light-blue">vue-boilerplate</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li class="nav-item"><a class="nav-link" href="lorem-ipsum-1">Lorem ipsum 1</a></li>
          <li class="nav-item"><a class="nav-link" href="lorem-ipsum-2">Lorem ipsum 2</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  components: {},
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.text-light-blue {
  color: $bg-light-blue;
}
</style>
