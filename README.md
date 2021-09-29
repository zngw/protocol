# protocol
将protocolbuf3 语法的.proto源文件生成不同语言使用

# 环境
python脚本版本为 3.x

# 使用
在proto_raw目录下编写protocolbuf3 语法的.proto源文件,运行to_xx.py生成对应语言文件,输出目录为out

* to_cpp.py 	生成C++
* to_csharp.py	生成C#
* to_go.py		生成Go
* to_java.py	生成Java
* to_js.py		生成JavaScript
* to_ts.py		生成Ts

# 注意
proto默认不能直接生成ts,这里需要按装pbts插件

```
npm install -g protobufjs
```

会生成 js和ts二个文件,二个文件都要导入到工程中才可以使用