import { Random, setup, mock } from "mockjs";
const Base_Url = process.env.REACT_APP_BASE_URL
setup({
    timeout: 1000
})

const adminList = []
for (let i = 0; i < 100; i++) {
    const obj = {
        id: Random.id(),
        name: Random.cname(),
        date: Random.date('yyyy-MM-dd'),
        url: Random.url(),
        address: Random.county(true),
        ip: Random.ip(),
    }
    adminList.push(obj)
}

mock(`${Base_Url}/admin/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: adminList
})

const roleList = []
for (let i = 0; i < 30; i++) {
    const obj = {
        name: Random.cname(),
        date: Random.date('yyyy-MM-dd'),
        address: Random.county(true),
        email: Random.email(),
        guid: Random.guid(),
        code: Random.zip()

    }
    roleList.push(obj)
}

mock(`${Base_Url}/role/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: roleList
})

const messageList = []
for (let i = 0; i < 30; i++) {
    const obj = {
        name: Random.cname(),
        date: Random.datetime(),
        content: Random.cparagraph(),
        is: true
    }
    messageList.push(obj)
}

mock(`${Base_Url}/message/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: messageList
})

const login = {
    token: Random.guid(),
    name: Random.name(),
    id: Random.id(),
    time: Random.now()
}
mock(`${Base_Url}/login`, 'post', {
    msg: '登录成功',
    code: 200,
    data: login
})

const menuList = []
const children = []
for (let i = 0; i < 5; i++) {
    const item = {
        id: Random.id(),
        name: Random.name(),
        url: Random.url(),
        date: Random.datetime(),
        menuUrl: Random.domain(),
        is: Random.boolean(),
        icon: Random.protocol(),
    }
    children.push(item)
}
for (let i = 0; i < 30; i++) {
    const obj = {
        id: Random.id(),
        name: Random.name(),
        date: Random.datetime(),
        children,
        menuUrl: Random.domain(),
        url: Random.url(),
        is: Random.boolean(),
        icon: Random.protocol()

    }
    menuList.push(obj)
}

mock(`${Base_Url}/menu/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: menuList
})

const orderList = []
for (let i = 0; i < 300; i++) {
    const obj = {
        orderSn: Random.id(),
        name: Random.cname(),
        time: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        address: Random.county(true),
        "money|1-1000.2": 10
    }
    orderList.push(obj)
}
mock(`${Base_Url}/order/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: orderList
})

const productList = []
for (let i = 0; i < 300; i++) {
    const obj = {
        id: Random.id(),
        name: Random.cname(),
        time: Random.datetime("yyyy-MM-dd HH:mm:ss"),
        guid: Random.guid(),
        "money|1-600": 10,
        product: Random.name()

    }
    productList.push(obj)
}
mock(`${Base_Url}/product/list`, 'get', {
    msg: '请求成功',
    code: 200,
    data: productList
})