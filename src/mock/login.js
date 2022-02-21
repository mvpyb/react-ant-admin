
const tokens = {
  admin : "admin-token",
  guest : "guest-token",
  editor : "editor-token"
}

const users = {
  "admin-token" : {
    id : "admin",
    roles : [ "admin"],
    username : "灰是小灰灰的灰",
    avatar : "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
    description : "我是超级管理员"
  },
  "editor-token" : {
    id : "editor",
    roles : ["editor"],
    username : "普通用户",
    avatar : "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80",
    description : "产品啥也不是"
  },
}

export default {
  
  login : ( config ) => {
    const { username } = JSON.parse( config.body )
    const token = tokens[username]
    if ( !token ) {
      return {
        code : -1,
        message : "用户名或密码错误"
      }
    }
    return {
      code : 200,
      message : "success",
      data : {
        token
      }
    }
  },
  
  userInfo : ( config ) => {
    const { token } = JSON.parse( config.body )
    const userInfo = users[token]
    if ( !userInfo ) {
      return {
        code : 5004,
        message : "无效token",
        data : {}
      }
    }
    return {
      code : 200,
      message : 'success',
      data : userInfo
    }
  },
  
  logout: () => {
    return {
      code: 200,
      message: "success",
    };
  },
}
