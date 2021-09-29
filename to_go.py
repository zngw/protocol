import os
import shutil
import re

rootdir = '.\\proto_raw'                # proto源文件目录
goTemp = 'out\\__go'                    # 临时目录
goOut = 'out\\golang'                   # 成生目录
goMerge = goTemp+"\\protocol.proto"     # 合并go文件

def mergeGolangTemp():
    if os.path.exists(goTemp):
        shutil.rmtree(goTemp, True)
    os.makedirs(goTemp)
    dst = open(goMerge, 'w',encoding= 'utf-8')
    dst.write('syntax = "proto3";\n')
    dst.write('package pb;\n')
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if (file[-6:].lower() != '.proto'):
                continue
            
            src = open(rootdir+'\\'+ file,encoding= 'utf-8')
            for line in src.readlines():
                if "import" not in line:
                    dst.write(line)
            src.close()
    dst.close()

def genGolang():
    if not os.path.exists(goOut):
        os.makedirs(goOut)
    for subdir, dirs, files in os.walk(goTemp):
        for file in files:
            print('Generate Golang file = '+file)
            cmd = 'protoc.exe --proto_path='+goTemp+' --go_out='+goOut+' '+goTemp+'\\'+file
            os.system(cmd)
    
def main():
    # 生成 Golang
    mergeGolangTemp()
    genGolang()
    shutil.rmtree(goTemp)

    os.system('pause & exit')

if __name__ == '__main__':
    main()
