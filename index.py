from tkinter import *
from tkinter import scrolledtext
import lief

window = Tk()
window.title("ELF")
window.geometry("500x500")
lbl = Label(window, text="请输入要分析的文件路径", font=("Roboto", 30))
lbl.grid(column=0, row=20)
txt = Entry(window, width=20, font=("Roboto", 20))
txt.grid(column=0, row=30)
stxt = scrolledtext.ScrolledText(window, width=110, height=30, font=("Roboto", 20))
stxt.grid(column=0, row=70)
def e_header():
  # print(path)方
  binary = lief.ELF.parse(txt.get())
  header = binary.header
  stxt.delete(1.0, END)
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

def e_segments():
  binary = lief.ELF.parse(txt.get())
  segments = binary.segments
  stxt.delete(1.0, END)
  stxt.insert(INSERT, "%-60s%-8s%-8s%-8s%-8s%-8s%-8s%-8s\n" % ("类型", "段偏移", "虚拟地址", "物理地址","文件大小","内存大小","标志", "对齐"))
  for segment in segments:
    stxt.insert(INSERT, "%-60s%-8s%-8s%-8s%-8s%-8s%-8s%-8s\n" % (segment.type, segment.file_offset, segment.virtual_address, segment.physical_address, segment.physical_size, segment.virtual_size, segment.flags, segment.alignment))


btn_h = Button(window, text="Header", font=("Roboto", 20), command=e_header)
btn_h.grid(column=0, row=40)
btn_s = Button(window, text="Segments", font=("Roboto", 20), command=e_segments)
btn_s.grid(column=5, row=40)

window.mainloop()
