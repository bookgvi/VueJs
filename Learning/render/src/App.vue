<script>
import NewComponent from './components/NewComponent'
export default {
  components: {
    'my-comp': NewComponent
  },
  render: h => h (
      'div', [
        'Holly, Vue',
        h('my-comp', { props: { someProp: 'wat' } })
      ],
    )
}
</script>
