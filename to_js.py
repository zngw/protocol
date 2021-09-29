import os
import shutil
import re

rootdir = '.\\proto_raw'        # proto源文件目录
clientTemp = 'out\\__js'        # 临时目录
clientOut = 'out\\js'           # 成生目录

allFile = clientTemp+'\\AllProto.proto' # proto合并文件名
jsFile = clientOut+'\\AllProto.js'      # proto最终生成js文件名

def mergeAllProto():
    if not os.path.exists(clientTemp):
        os.makedirs(clientTemp)
    dst = open(allFile, 'w',encoding= 'utf-8')
    dst.write('syntax = "proto3";\n')
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if (file[-6:].lower() != '.proto'):
                continue
            print(file)
            src = open(rootdir+'\\'+ file,encoding= 'utf-8')
            for line in src.readlines():
                if "import" not in line:
                    dst.write(line)
            src.close()
    dst.close()

def genTS():
    if not os.path.exists(clientOut):
        os.makedirs(clientOut)
        
    cmd = 'pbjs -t static-module -w commonjs -o ' + jsFile + ' '+allFile
    os.system(cmd)
         
def main():

    mergeAllProto()
    genTS()
    shutil.rmtree(clientTemp)

    os.system('pause & exit')

if __name__ == '__main__':
    main()
