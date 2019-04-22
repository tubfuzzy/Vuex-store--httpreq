import { mapGetters, mapActions } from 'vuex'
import UsersService from '@/services/users.service';
export default {
  name: 'httpreq',
  components: {},
  props: [],
data () {
  return {
    users : Object
  }
},
computed: {
  ...mapGetters({
    getusers: 'users/getUser',
  }),
},
mounted () { 
  this.reqUser() //req form store && store req form service 
    // req form service
    // UsersService.getAll().subscribe( response => {
    //   this.users = response.data
    // }); 
},
methods: {
  ...mapActions({
    reqUser: 'users/reqUser'
  })
},
}
