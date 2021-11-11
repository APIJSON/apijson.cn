# 新增接口

## 后台添加数据表

在自己的数据库里新增一个表，比如我这里新增`b_stone`

```sql
-- 原石
CREATE TABLE `b_stone` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `cost` int(10) NULL COMMENT '成本',
  `price` int(10) NULL COMMENT '卖价',
  `length` int(10) NULL,
  `width`  int(10) NULL,
  `height` int(10) NULL,
  `weight` float(8,1) NULL,
  `creationdate` datetime default CURRENT_TIMESTAMP COMMENT '创建时间',
  `modifydate` timestamp DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  `modifier` varchar(80) NULL,
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```


## 角色访问权限配置

APIJSON 3.7.0  版开始，依赖了 apijson-framework.jar 的不需要写任何代码：

#### 2.1）在 Access 表里加一行记录即可

![](https://raw.githubusercontent.com/TommyLemon/StaticResources/master/APIJSON/APIJSON_access_config-small.jpg) 

<br />
<br />

~~如果低于 3.7.0 或者未依赖 apijson-framework.jar，而是直接依赖 apijson-orm.jar，则需要编写代码：~~

#### ~~2.1）在Model中添加对象并配置权限~~

~~项目的model目录下，新增一个类~~

```java
package apijson.demo.server.model;

import zuo.biao.apijson.MethodAccess;

@MethodAccess
public class Stone {
}
```

~~注解`@MethodAccess`的配置，可以参考其他类~~



~~由于我们的类名和数据库表名不一致，需要注册一下。如果一样就不需要了。~~

~~设置数据库的实际表名`DemoSQLConfig`，38行~~

```java
//表名映射，隐藏真实表名，对安全要求很高的表可以这么做
	static {
		TABLE_KEY_MAP.put(User.class.getSimpleName(), "apijson_user");
		TABLE_KEY_MAP.put(Privacy.class.getSimpleName(), "apijson_privacy");
		TABLE_KEY_MAP.put(Stone.class.getSimpleName(), "b_stone"); // <--这一句
	}
```



~~注册权限是必须的，这样程序才能使用你配置的类权限去管理你的接口~~

~~脚本`DemoVerifier.java`的48行~~

```java
static { //注册权限
		ACCESS_MAP.put(User.class.getSimpleName(), getAccessMap(User.class.getAnnotation(MethodAccess.class)));
....
		ACCESS_MAP.put(Stone.class.getSimpleName(), getAccessMap(Stone.class.getAnnotation(MethodAccess.class)));
	}
```

<br />
<br />
                                                                             

## 请求参数校验 Request 表配置

  ![](https://raw.githubusercontent.com/TommyLemon/StaticResources/master/APIJSON/APIJSON_request_config-small.jpg) 
可这样设置 structure 字段来配置自动校验请求 JSON 参数： <br />
```json
"VERIFY":{
  "type{}":[0,1,2]
}
```
就能校验 type 的值是不是 0，1，2中的一个。<br />
还有 <br />
```js
"VERIFY": { "money&{}":">0,<=10000" }              //自动验证是否 money>0 & money<=10000
"TYPE": { "balance": "Double" }                    //自动验证balance类型是否为Double
"UNIQUE": "phone"                                  //强制phone的值为数据库中没有的
"NECESSARY": "id,name"                             //强制传id,name两个字段
"DISALLOW": "balance"                              //禁止传balance字段
"INSERT": { "@role": "OWNER" }                     //如果没传@role就自动添加
"UPDATE": { "id@": "User/id" }                     //强制放入键值对
```
全部操作符见 [Operation.java](https://github.com/Tencent/APIJSON/blob/master/APIJSONORM/src/main/java/apijson/orm/Operation.java) 的注释
<br />
<br />
  
:first_quarter_moon_with_face:此处的介绍都只是简要介绍，只是为了引导刚刚接触 APIJSON 的道友快速了解 APIJSON，并不代表 APIJSON 只有这些功能，具体功能详情参考下列图表
  
#### 完整功能图表
https://github.com/Tencent/APIJSON/blob/master/Document.md#3
