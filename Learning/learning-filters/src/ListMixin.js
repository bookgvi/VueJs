export default {
  data(){
    return {
      arrName: ['John', 'Bob', 'Lisa', 'Barbara'],
      searchName: '',
    }
  },
  computed: {
    filterName(){
      return this.arrName.filter(name => name.toLowerCase().includes(this.searchName));
    }
  },
}
