
import Mock from "mockjs"
import loginMock from "./login"

const { login, userInfo } = loginMock

// login
Mock.mock( /\/login/, "post", login )

// user
Mock.mock( /\/userInfo/, "post", userInfo )

export default Mock
