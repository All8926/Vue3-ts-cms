const user = () => import('@/views/home/system/user/user.vue')

export default {
  path: '/main/system/user',
  name:'user',
  component: user,
  children:[]
}