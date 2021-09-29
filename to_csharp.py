import os
import shutil
import re

rootdir = '.\\proto_raw'        # proto源文件目录
csharpTemp = 'out\\__csharp'    # 临时目录
csharpOut = 'out\\csharp'       # 成生目录

def makeCSharpTemp():
    if os.path.exists(csharpTemp):
        shutil.rmtree(csharpTemp, True)
    os.makedirs(csharpTemp)
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if (file[-6:].lower() != '.proto'):
                continue

            src = open(rootdir+'\\'+ file,encoding= 'utf-8')
            dst = open(csharpTemp+'\\'+file, 'w',encoding= 'utf-8')
            dst.write('syntax = "proto3";\n')
            dst.writelines(src.readlines())
            dst.close()
            src.close()

def genCSharp():
    if not os.path.exists(csharpOut):
        os.makedirs(csharpOut)
    for subdir, dirs, files in os.walk(csharpTemp):
        for file in files:
            print('Generate C# file = '+file)
            cmd = 'protoc.exe --proto_path='+csharpTemp+' --csharp_out='+csharpOut+' '+csharpTemp+'\\'+file
            os.system(cmd)

def main():
    # 生成 C#

    makeCSharpTemp()
    genCSharp()
    shutil.rmtree(csharpTemp)

    os.system('pause & exit')

if __name__ == '__main__':
    main()
