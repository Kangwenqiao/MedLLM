非常好的建议。以下是更新后的 Readme 文件：

# MedLLM——基于大语言模型的导诊系统

## 关于如何本地运行

### 页面目录如图

![image-20240406145206165](image/image-20240406145206165.png)

### 1. 前端启动

在`nginx-1.22.0`目录中，双击`nginx.exe`启动。

![image-20240406142825539](image/image-20240406142825539.png)

### 2. 后端启动

- 进入`redis`目录，双击`redis-server.exe`启动Redis服务器。

![image-20240406142954931](image/image-20240406142954931.png)

- 在项目文件目录中打开命令提示符，执行以下命令启动后端服务：

```bash
java -jar order-register-1.0.0.jar
```

#### 3. 打开页面 `localhost:80`

在浏览器中输入地址 `localhost:80`，即可访问系统页面。

![image-20240406145448045](image/image-20240406145448045.png)

## 项目成员信息

成员皆来自NCWU的wqKang开发组：

- 202107927 康问樵
- 202108913 张皓
- 202110209 朱金舟
- 202109723 傅家俊

## 联系方式

如有任何问题或建议，请通过邮件联系：wenqiaokang@outlook.com
