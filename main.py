import lief
# import tkinter

# ELF
binary = lief.ELF.parse('./Temp/hello')
header = binary.header
# print(header)
# print(header.arm_flags_list)
print("文件类型: %s" %(header.file_type))
print(type(header.file_type))
print(str(header.file_type))
if(header.file_type == 1):
  print('nothing')
if(str(header.file_type) == 'E_TYPE.DYNAMIC'):
  print('avalon')
# print("ident: %s" %(header.identity))
# print("ident: %s" %(header.identity_abi_version))
# print("ident: %s" %(header.identity_abi_version))
# print('文件类型' + header.file_type)
# print(header.machine_type)
# print(header.program_header_size)
# top = tkinter.Tk()
# top.mainloop()
