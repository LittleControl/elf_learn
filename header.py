from tkinter import *
from tkinter import scrolledtext
import lief

window = Tk()
window.title("ELF")
window.geometry("500x500")
lbl = Label(window, text="请输入要分析的文件路径", font=("Roboto", 40), bd=4)
lbl.grid(column=70, row=20)
txt = Entry(window, width=10, font=("Roboto", 20), bd=4)
txt.grid(column=70, row=30)
stxt = scrolledtext.ScrolledText(window, width=70, height=30, font=("Roboto", 20))
stxt.grid(column=70, row=700)
def header():
  # print(path)
  binary = lief.ELF.parse(txt.get())
  header = binary.header
  stxt.insert(INSERT, "魔数: %s\n" % (header.identity))
  stxt.insert(INSERT, "目标类型: %s\n" % (header.identity_class))
  stxt.insert(INSERT, "数据编码方式: %s\n" % (header.identity_data))
  stxt.insert(INSERT, "ELF文件版本: %s\n" % (header.identity_version))
  stxt.insert(INSERT, "系统应用程序二进制接口): %s\n" % (header.identity_os_abi))
  stxt.insert(INSERT, "应用程序二进制接口版本): %s\n" % (header.identity_abi_version))
  fstr = '未知目标文件格式'
  if(str(header.file_type) == 'E_TYPE.RELOCATABLE'):
    fstr = '可重定位文件'
  if(str(header.file_type) == 'E_TYPE.EXECUTABLE'):
    fstr = '可执行文件'
  if(str(header.file_type) == 'E_TYPE.DYNAMIC'):
    fstr = '可重定位文件'
  if(str(header.file_type) == 'E_TYPE.RELOCATABLE'):
    fstr = '共享目标文件'
  stxt.insert(INSERT, "文件类型: %s\n" % (fstr))
  # stxt.insert(INSERT, "文件类型: %s\n" % (header.file_type))
  stxt.insert(INSERT, "目标平台架构: %s\n" % (header.machine_type))
  stxt.insert(INSERT, "对象文件版本: %s\n" % (header.object_file_version))
  stxt.insert(INSERT, "程序入口地址: %s\n" % (header.entrypoint))
  # stxt.insert(INSERT, "段起始地址: %s\n" % (header.object_file_version))
  stxt.insert(INSERT, "程序头(段)的数量: %s\n" % (header.numberof_segments))
  stxt.insert(INSERT, "程序头大小: %s\n" % (header.program_header_size))
  stxt.insert(INSERT, "程序头偏移: %s\n" % (header.program_header_offset))
  stxt.insert(INSERT, "节头数量: %s\n" % (header.numberof_sections))
  stxt.insert(INSERT, "节头大小: %s\n" % (header.section_header_size))
  stxt.insert(INSERT, "节头偏移量: %s\n" % (header.section_header_offset))
  stxt.insert(INSERT, "节头表索引: %s\n" % (header.section_name_table_idx))

btn = Button(window, text="Click Me", font=("Roboto", 25), bd=4, command=header)
btn.grid(column=70, row=40)
window.mainloop()
