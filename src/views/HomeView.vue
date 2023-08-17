<template>
  <top-section></top-section>
  <content></content>
</template>

<script>
import TopSection from '../components/section/TopSection.vue'
import LoremIpsumContent from '../components/project-content/LoremIpsumContent.vue'

export default {
  name: 'HomeView',
  components: {
    "top-section": TopSection,
    content: LoremIpsumContent
  },
  data() {
    return {}
  }
}
</script>
<style scoped></style>
