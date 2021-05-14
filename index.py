from tkinter import *
from tkinter import scrolledtext
import lief

window = Tk()
window.title("ELF")
window.geometry("800x800")
lbl = Label(window, text="请输入要分析的文件路径", font=("Roboto", 30))
lbl.grid(column=0, row=0, columnspan=3)
txt = Entry(window, font=("Roboto", 20))
txt.grid(column=0, row=1, columnspan=3)
stxt = scrolledtext.ScrolledText(
    window, font=("NotoSansMono", 15), width=120)
stxt.grid(column=0, row=3, columnspan=4)


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
    stxt.insert(INSERT, "%-26s%-6s%-6s%-6s%-7s%-7s%-16s%-6s\n" %
                ("类型", "段偏移", "虚拟地址", "物理地址", "文件大小", "内存大小", "标志", "对齐"))
    for segment in segments:
        stxt.insert(INSERT, "%-28s%-8s%-8s%-9s%-9s%-8s%-20s%-8d\n" %
                    (segment.type,
                     segment.file_offset,
                     segment.virtual_address,
                     segment.physical_address,
                     segment.physical_size,
                     segment.virtual_size,
                     segment.flags,
                     segment.alignment))


def e_sections():
    binary = lief.ELF.parse(txt.get())
    sections = binary.sections
    stxt.delete(1.0, END)
    stxt.insert(INSERT, "%-19s%-24s%-4s%-6s%-6s%-5s%-4s%-6s%-4s%-6s\n" %
                ("节名", "节类", "标识", "虚拟地址", "文件偏移", "字节数", "链接", "额外信息", "对齐", "入口大小"))
    for section in sections:
        stxt.insert(INSERT, "%-20s%-27s%-5s%-8s%-9s%-8s%-7s%-6s%-6s%-8s\n" %
                    (section.name,
                     section.type,
                     section.flags,
                     section.virtual_address,
                     section.file_offset,
                     section.size,
                     section.link,
                     section.information,
                     section.alignment,
                     section.entry_size))

    # stxt.configure(state="disable")


btn_h = Button(window, text="Header", font=(
    "Roboto", 20), command=e_header)
btn_h.grid(column=0, row=2)
btn_s = Button(window, text="Segments", font=(
    "Roboto", 20), command=e_segments)

btn_s.grid(column=1, row=2)
btn_s = Button(window, text="Sections", font=(
    "Roboto", 20), command=e_sections)
btn_s.grid(column=2, row=2)

window.mainloop()
