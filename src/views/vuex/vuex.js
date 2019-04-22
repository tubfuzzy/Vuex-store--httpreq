import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'vuex',
  components: {},
  props: [],
  data () {
    return {
      textstate:''
    }
  },
  computed: {
    ...mapGetters({
      msg: 'sample/getName',
    })
  },
  mounted () {
  },
  methods: {
    ...mapActions({
      setMessage: 'sample/setName',
      resetName: 'sample/setReName'
    }),
    setAction(){
      this.setMessage(this.textstate).then(response => {
         console.log("change success")
      },err => {
         console.log("change error")
      })
    },
    setActionClear(){
      this.resetName().then(response => {
        console.log("change success")
     },err => {
        console.log("change error")
     })
    }
  }
}
