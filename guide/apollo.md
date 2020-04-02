# apollo

## <center>Apollo配置中心使用说明</center>

​	

​	目前框架配置中心由spring cloud config替换为Apollo配置中心。开发环境配置已经在公司部署完毕并使用。

访问地址为[http://192.168.10.132:8070](http://192.168.10.132:8070/)。服务配置为中心统一配置，多环境部署。开发默认环境为“DEV”，且提供基础环境配置，默认各个领域都参照配置。

期望达到理想要求是各个领域只需要启动各自领域的基础工程，其他依赖工程和服务都在对应的环境部署。尽量保证与今后的测试，生产环境一致。

**如有特殊要求需要修改本地配置，比如临时调整代码做测试等。可以通过如下方法设置。**

> 配置中心默认在本机缓存配置文件，以配置中心服务不可用时保证系统可以启用。缓存路径为
>
> /opt/data/$appId/config-cache/XXX.properties（Mac/Linux）
>
> C:\opt\data\\$appId\config-cache\XXX.properties（Windows）

如图：

![1566200012436](C:\Users\tzm\AppData\Roaming\Typora\typora-user-images\1566200012436.png)



Apollo客户端还支持本地开发模式，这个主要用于当开发环境无法连接Apollo服务器的时候，或者需要临时增加特殊配置的时候。

在本地开发模式下，Apollo只会从本地文件读取配置信息，不会从Apollo服务器读取配置。

可以通过下面的步骤开启Apollo本地开发模式。

### 1.本地开发修改环境

> 修改/opt/settings/server.properties（Mac/Linux）或C:\opt\settings\server.properties（Windows）文件，设置env为Local：

```
env=Local
```

如图:

![1566200214754](C:\Users\tzm\AppData\Roaming\Typora\typora-user-images\1566200214754.png)

![1566200231980](C:\Users\tzm\AppData\Roaming\Typora\typora-user-images\1566200231980.png)

此时会读取本地缓存的配置文件，可以自行添加修改后启动项目。



### 2.阿里云配置中心本地开发使用

针对某些项目本机的开发环境需要使用阿里云部署的配置中心，如果直接配置阿里云的公网地址是无法拉取到配置的。因为Apollo的`apollo-configservice`和`apollo-adminservice`是基于内网可信网络设计的，所以出于安全考虑，不会将`apollo-configservice`和`apollo-adminservice`直接暴露在公网。

> 解决办法：通过启动参数-Dapollo.configService=http://config-service的公网IP:端口来跳过meta service的服务发现

![1568286099488](C:\Users\tzm\AppData\Roaming\Typora\typora-user-images\1568286099488.png)



### 3.前端配置接入配置中心

目前前端工程有配置项目跟代码工程剥离的需求，所以Apollo配置中心提供基于Restfull的配置拉取API。具体使用方法如下：

####  3.1通过带缓存的Http接口从Apollo读取配置

该接口会从缓存中获取配置，适合频率较高的配置拉取请求，如简单的每30秒轮询一次配置。

由于缓存最多会有一秒的延时，所以如果需要配合配置推送通知实现实时更新配置的话，请使用[3.2 通过不带缓存的Http接口从Apollo读取配置]()

##### 3.1.1 Http接口说明

**URL**: {config_server_url}/configfiles/json/{appId}/{clusterName}/{namespaceName}?ip={clientIp}

**Method**: GET

| 参数名            | 是否必须 | 参数值               | 备注                                                         |
| ----------------- | -------- | -------------------- | ------------------------------------------------------------ |
| config_server_url | 是       | Apollo配置服务的地址 |                                                              |
| appId             | 是       | 应用的appId          |                                                              |
| clusterName       | 是       | 集群名               | 一般情况下传入 default 即可。 如果希望配置按集群划分，可以参考[集群独立配置说明]()做相关配置，然后在这里填入对应的集群名。 |
| namespaceName     | 是       | Namespace的名字      | 如果没有新建过Namespace的话，传入application即可。 如果创建了Namespace，并且需要使用该Namespace的配置，则传入对应的Namespace名字。**需要注意的是对于properties类型的namespace，只需要传入namespace的名字即可，如application。对于其它类型的namespace，需要传入namespace的名字加上后缀名，如datasources.json** |
| ip                | 否       | 应用部署的机器ip     | 这个参数是可选的，用来实现灰度发布。 如果不想传这个参数，请注意URL中从?号开始的query parameters整个都不要出现。 |

使用公司环境测试 http://192.168.10.132:8080/configfiles/json/demo/default/application

##### 	3.1.2 Http接口返回格式

该Http接口返回的是JSON格式、UTF-8编码，包含了对应namespace中所有的配置项。

返回内容Sample如下：

![1570792899353](C:\Users\tzm\AppData\Roaming\Typora\typora-user-images\1570792899353.png)



#### 3.2 通过不带缓存的Http接口从Apollo读取配置

该接口会直接从数据库中获取配置，可以配合配置推送通知实现实时更新配置。

##### 3.2.1 Http接口说明

**URL**: {config_server_url}/configs/{appId}/{clusterName}/{namespaceName}?releaseKey={releaseKey}&ip={clientIp}

**Method**: GET

**参数说明**

| 参数名            | 是否必须 | 参数值               | 备注                                                         |
| ----------------- | -------- | -------------------- | ------------------------------------------------------------ |
| config_server_url | 是       | Apollo配置服务的地址 |                                                              |
| appId             | 是       | 应用的appId          |                                                              |
| clusterName       | 是       | 集群名               | 一般情况下传入 default 即可。 如果希望配置按集群划分，可以参考[集群独立配置说明]()做相关配置，然后在这里填入对应的集群名。 |
| namespaceName     | 是       | Namespace的名字      | 如果没有新建过Namespace的话，传入application即可。 如果创建了Namespace，并且需要使用该Namespace的配置，则传入对应的Namespace名字。**需要注意的是对于properties类型的namespace，只需要传入namespace的名字即可，如application。对于其它类型的namespace，需要传入namespace的名字加上后缀名，如datasources.json** |
| releaseKey        | 否       | 上一次的releaseKey   | 将上一次返回对象中的releaseKey传入即可，用来给服务端比较版本，如果版本比下来没有变化，则服务端直接返回304以节省流量和运算 |
| ip                | 否       | 应用部署的机器ip     | 这个参数是可选的，用来实现灰度发布。                         |

使用公司环境测试 http://192.168.10.132:8080/configs/demo/default/application

##### 3.2.2 Http接口返回格式

该Http接口返回的是JSON格式、UTF-8编码。

如果配置没有变化（传入的releaseKey和服务端的相等），则返回HttpStatus 304，response body为空。

如果配置有变化，则会返回HttpStatus 200，response body为对应namespace的meta信息以及其中所有的配置项。

返回内容Sample如下：

![1570793098314](C:\Users\tzm\AppData\Roaming\Typora\typora-user-images\1570793098314.png)



> server.properties的配置文件还可以设置多环境，集群，appid切换等。目前开发暂时用不到这些配置。后续根据情况再跟大家补充相关配置的使用讲解。
