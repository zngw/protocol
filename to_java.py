import os
import shutil
import re

rootdir = '.\\proto_raw'            # proto源文件目录
serverTemp = 'out\\__java'          # 临时目录
serverOut = 'out\\java'             # 成生目录
package = "com.game.msg.protobuf"   # protobuf所在包名,根据项目目录修改

def makeJavaTemp():
    if os.path.exists(serverTemp):
        shutil.rmtree(serverTemp, True)
    os.makedirs(serverTemp)
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if (file[-6:].lower() != '.proto'):
                continue
            
            src = open(rootdir+'\\'+ file,encoding= 'utf-8')
            dst = open(serverTemp+'\\'+file, 'w',encoding= 'utf-8')
            dst.write('syntax = "proto3";\n')
            dst.write('option java_package = "'+package+'";\n')
            className = file[:-6]
            dst.write('option java_outer_classname = "'+className+'";\n')
            dst.writelines(src.readlines())
            dst.close()
            src.close()

def genJava():
    if not os.path.exists(serverOut):
        os.makedirs(serverOut)
    for subdir, dirs, files in os.walk(serverTemp):
        for file in files:
            print('Generate Server file = '+file)
            cmd = 'protoc.exe --proto_path='+serverTemp+' --java_out='+serverOut+' '+serverTemp+'\\'+file
            os.system(cmd)

def main():

    makeJavaTemp()
    genJava()
    shutil.rmtree(serverTemp)

    os.system('pause & exit')

if __name__ == '__main__':
    main()
