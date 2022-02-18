
import Mock from "mockjs"
import loginMock from "./login"
import tableMock from "./table"

const { login, userInfo, logout } = loginMock
const { tableData, dashboardTable } = tableMock

// login
Mock.mock( /\/login/, "post", login )

// user
Mock.mock( /\/userInfo/, "post", userInfo )
Mock.mock( /\/logout/, "post", logout )
Mock.mock( /\/table\/list/, "get", tableData )
Mock.mock( /\/table\/dashboard/, "get", dashboardTable )

export default Mock
