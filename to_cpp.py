import os
import shutil

rootdir = '.\\proto_raw'    # proto源文件目录
cppTemp = 'out\\__cpp'      # 临时目录
cppOut = 'out\\cpp'         # 成生目录

def makeCppTemp():
    if os.path.exists(cppTemp):
        shutil.rmtree(cppTemp, True)
    os.makedirs(cppTemp)
    for subdir, dirs, files in os.walk(rootdir):
        for file in files:
            if (file[-6:].lower() != '.proto'):
                continue
            
            src = open(rootdir+'\\'+ file,encoding= 'utf-8')
            dst = open(cppTemp+'\\'+file, 'w',encoding= 'utf-8')
            dst.write('syntax = "proto3";\n')
            dst.writelines(src.readlines())
            dst.close()
            src.close()

def genCpp():
    if not os.path.exists(cppOut):
        os.makedirs(cppOut)
    for subdir, dirs, files in os.walk(cppTemp):
        for file in files:
            print('Generate C++ file = '+file)
            cmd = 'protoc.exe --proto_path='+cppTemp+' --cpp_out='+cppOut+' '+cppTemp+'\\'+file
            os.system(cmd)

def main():
    # 生成 C++

    makeCppTemp()
    genCpp()
    shutil.rmtree(cppTemp)

    os.system('pause & exit')

if __name__ == '__main__':
    main()
