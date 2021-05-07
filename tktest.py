from tkinter import *
from tkinter import scrolledtext

window = Tk()
window.title("ELF")
window.geometry("500x500")
lbl = Label(window, text="请输入要分析的文件路径", font=("Roboto", 30))
lbl.grid(column=0, row=0, columnspan=3)
print(lbl.grid_info())
txt = Entry(window, font=("Roboto", 20))
txt.grid(column=0, row=1, columnspan=3)
print(txt.grid_info())
stxt = scrolledtext.ScrolledText(
    window, font=("Roboto", 20))
stxt.grid(column=0, row=3, columnspan=3, sticky="nw")
btn_h = Button(window, text="Header", font=("Roboto", 20))
btn_h.grid(column=0, row=2)
print(btn_h.grid_info())
btn_s = Button(window, text="Segments", font=("Roboto", 20))
btn_s.grid(column=1, row=2)
btn_s = Button(window, text="Sections", font=("Roboto", 20))
btn_s.grid(column=2, row=2)
window.mainloop()
