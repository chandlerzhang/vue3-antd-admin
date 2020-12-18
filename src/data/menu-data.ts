import {GetMenuListByUserIdResult} from "@/api/system/model/menuModel";

export default [{"id": 3, "url": "/system/role", "sort": 3, "icon": "icon-yonghu", "parentId": 1, "name": "角色管理"
}, {
    "id": 2,
    "url": "system/account",
    "sort": 3,
    "icon": "icon-kehuguanli",
    "parentId": 1,
    "name": "账号管理"
}, {"id": 1, "url": "system", "sort": 6, "icon": "icon-shezhi", "parentId": -1, "name": "系统管理"}, {
    "id": 5,
    "url": "system/dict",
    "sort": 6,
    "icon": "icon-ziduanguanli",
    "parentId": 1,
    "name": "字典管理"
}] as GetMenuListByUserIdResult

// }, {"id": 42, "url": "1", "sort": 1, "icon": "", "parentId": -1, "name": "123"
// }, {"id": 18, "url": "test", "sort": 1, "icon": "icon-BUG", "parentId": -1, "name": "测试模块"
// }, {
//     "id": 19,
//     "url": "test/01",
//     "sort": 1,
//     "icon": "icon-zujianshiyong",
//     "parentId": 18,
//     "name": "测试1"
// }, {"id": 32, "url": "2333", "sort": 1, "icon": "icon-ziduanguanli", "parentId": 18, "name": "233"}, {
//     "id": 37,
//     "url": "1111111111111",
//     "sort": 1,
//     "icon": "icon-yun",
//     "parentId": -1,
//     "name": "模块22222"
// }, {"id": 39, "url": "22223", "sort": 1, "icon": "icon-yun", "parentId": 37, "name": "菜单22"}, {
//     "id": 40,
//     "url": "/test-module",
//     "sort": 1,
//     "icon": "",
//     "parentId": -1,
//     "name": "模块333"
// }, {
//     "id": 4,
//     "url": "system/access",
//     "sort": 5,
//     "icon": "icon-ziyuan",
//     "parentId": 1,
//     "name": "资源管理"
