
import Mock from "mockjs"
import loginMock from "./login"

const { login, userInfo, logout } = loginMock

// login
Mock.mock( /\/login/, "post", login )

// user
Mock.mock( /\/userInfo/, "post", userInfo )
Mock.mock( /\/logout/, "post", logout )

export default Mock
