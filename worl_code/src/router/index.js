import Vue from 'vue'
import Router from 'vue-router'

const Home  = resolve => require(['@/home/home'], resolve)
const Discovery = resolve => require(['@/discovery/fx'], resolve)
const ProjectDetail = resolve => require(['@/discovery/children/projectDetail'], resolve)
const ProjectPersonal = resolve => require(['@/discovery/children/projectPersonal'], resolve)
const Detail = resolve => require(['@/discovery/children/detail'], resolve)

const Publish = resolve => require(['@/publish/fb'], resolve)
const Tags = resolve => require(['@/publish/children/tags'], resolve)
const NextSet = resolve => require(['@/publish/children/nextSet'], resolve)
const EditProject = resolve => require(['@/publish/children/editProject'], resolve)
const BusNewsTextEdit = resolve => require(['@/publish/children/busNewsTextEdit'], resolve)
const basicNewsSet = resolve => require(['@/publish/children/basicNewsSet'], resolve)
const ShortDesc = resolve => require(['@/publish/children/shortDesc'], resolve)
const basicNewsSetMusic = resolve => require(['@/publish/children/basicNewsSetMusic'], resolve)

const User = resolve => require(['@/user/user'], resolve)
const AccountSetting = resolve => require(['@/user/children/accountSetting'], resolve)
const FunctionSetting = resolve => require(['@/user/children/functionSetting'], resolve)
const Industry = resolve => require(['@/user/children/industry'], resolve)
const Signature = resolve => require(['@/user/children/signature'], resolve)
const BindPhone = resolve => require(['@/user/children/bindPhone'], resolve)
const ChangePhone = resolve => require(['@/user/children/changePhone'], resolve)
const ChangePhone1 = resolve => require(['@/user/children/changePhone1'], resolve)
const SetPassword = resolve => require(['@/user/children/setPassword'], resolve)

const PhoneLogin = resolve => require(['@/user/children/phoneLogin'], resolve)
const PasswordLogin = resolve => require(['@/user/children/passwordLogin'], resolve)
const Register = resolve => require(['@/user/children/register'], resolve)
const Protocol = resolve => require(['@/user/children/protocol'], resolve)
const Forgot = resolve => require(['@/user/children/forgot'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',			//重定向
      name: 'fx-default',
      redirect: '/passwordLogin',
      component: Home,
      children: [
        {
          path: '/discovery',			//发现
          name: 'fx',
          component: Discovery,
        },

        {
          path: '/publish',		//发布
          name: 'fb',
          component: Publish,
        },
        {
          path: '/user',			//个人中心
          name: 'wo',
          component: User,
        }
      ]
    },
    {
      path: '/discovery/projectDetail',		//项目详情
      name: 'projectDetail',
      component: ProjectDetail
    },
    {
      path: '/discovery/projectPersonal',		//项目方主页
      name: 'projectPersonal',
      component: ProjectPersonal
    },
    {
      path: '/discovery/detail',
      name: 'detail',
      component: Detail    //项目详情页
    },
    {
      path: '/publish/Tags',			//发布  标签选择
      name: 'tags',
      component: Tags,
    },
    {
      path: '/publish/NextSet',			//发布  下一步
      name: 'NextSet',
      component: NextSet,
      meta: { keepAlive: true }
    },
    {
      path: '/user/editProject',			//发布页面点完成之后跳转的一个供用户预览的一个页面
      name: 'editProject',
      component: EditProject,
    },
    //{
    //  path: '/publish/NextSet/busNewsTextEdit',			//发布  编写文字
    //  name: 'bNTextEdit',
    //  component: BusNewsTextEdit,
    //  meta: { keepAlive: true }
    //},

    {
      path: '/publish/NextSet/basicNewsSet',			//发布  基本信息修改
      name: 'basicNewsSet',
      component: basicNewsSet,
    },
    {
      path: '/publish/nextSet/basicNewsSet/shortDesc',			//发布  基本信息 一句话简介修改
      name: 'shortDesc',
      component: ShortDesc,
    },
    {
      path: '/publish/NextSet/basicNewsSetMusic',			//发布  音乐设置
      name: 'basicNewsSetMusic',
      component: basicNewsSetMusic,
    },

    //登录、注册页面路由
    {
      path: '/phoneLogin',		//验证码登录
      name: 'phoneLogin',
      component: PhoneLogin
    },
    {
      path: '/passwordLogin',		//密码登录
      name: 'passwordLogin',
      component: PasswordLogin
    },
    {
      path: '/forgot',		//忘记密码
      name: 'forgot',
      component: Forgot
    },
    {
      path: '/register',		//注册账号
      name: 'register',
      component: Register
    },
    {
      path: '/protocol',		//用户协议
      name: 'protocol',
      component: Protocol
    },
    {
      path: '/user/accountSetting',		//账号设置
      name: 'accountSetting',
      component: AccountSetting
    },
    {
      path: '/user/accountSetting/industry',		//领域设置
      name: 'industry',
      component: Industry
    },
    {
      path: '/user/accountSetting/bindPhone',		//绑定手机
      name: 'bindPhone',
      component: BindPhone
    },
    {
      path: '/user/accountSetting/changePhone',		//换绑手机
      name: 'changePhone',
      component: ChangePhone
    },
    {
      path: '/user/accountSetting/changePhone/changePhone1',		//换绑手机 下一步
      name: 'changePhone1',
      component: ChangePhone1
    },
    {
      path: '/user/accountSetting/setPassword',		//设置密码
      name: 'setPassword',
      component: SetPassword
    },
    {
      path: '/user/accountSetting/signature',		//个人介绍
      name: 'signature',
      component: Signature
    },
    {
      path: '/user/functionSetting',		//设置
      name: 'functionSetting',
      component: FunctionSetting
    },

  ]
})
