<template>
  <div class="blocks">
    <div class="blocks__btn">
      <button @click="blockAdd">Add</button>
      <button @click="blockDel">Delete</button>
    </div>
    <div class="blocks__block"></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: {
    parent () {
      return document.querySelector('.blocks')
    }
  },
  methods: {
    blockAdd () {
      const block = document.querySelector('.blocks__block')
      if (!block) return
      const blockX = block.cloneNode(false)
      this.parent.appendChild(blockX)
    },
    blockDel () {
      const block = document.querySelector('.blocks__block')
      if (!block) return
      this.parent.removeChild(block)
    }
  }
}
</script>

<style scoped>
  .blocks {
    height: 300px;
    width: 100%;
    padding: 2rem 0;
    border: 1px solid #000;
  }
  .blocks__btn {
    text-align: right;
  }
  button {
    margin: 0 10px 10px 0;
  }
  .blocks__block {
    display: inline-block;
    width: 50%;
    height: 100px;
    border: 1px solid grey;
    margin: 0 1rem;
  }
</style>
