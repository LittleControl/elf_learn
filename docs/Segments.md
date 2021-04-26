# Program Header Table / Segments

一个可执行文件或者共享链接库的程序头表是一个数据结构的数组,每一个都描述一个段（segment）或者一个系统需要为程序运行提供信息.一个ELF文件包含一个或多个节(section).程序头只对可执行文件和共享链接库有意义.  
程序头表告诉系统如何建立一个进程映像,它是从加载执行的角度来看待elf文件,从它的角度看,elf文件被分成许多段,elf文件中的代码、链接信息和注释都以段的形式存放。程序头表告诉系统如何建立一个进程映像,它是从加载执行的角度来看待elf文件,从它的角度看,elf文件被分成许多段,elf文件中的代码、链接信息和注释都以段的形式存放

## 段的类型

- ARM_ARCHEXT = <SEGMENT_TYPES.ARM_ARCHEXT: 1879048192>
- ARM_UNWIND = <SEGMENT_TYPES.ARM_UNWIND: 1879048193>
- DYNAMIC = <SEGMENT_TYPES.DYNAMIC: 2>
- GNU_EH_FRAME = <SEGMENT_TYPES.GNU_EH_FRAME: 1685382480>¶
- 
- GNU_PROPERTY = <SEGMENT_TYPES.GNU_PROPERTY: 1685382483>
- GNU_RELRO = <SEGMENT_TYPES.GNU_RELRO: 1685382482>
- GNU_STACK = <SEGMENT_TYPES.GNU_STACK: 1685382481>
- INTERP = <SEGMENT_TYPES.INTERP: 3>
- LOAD = <SEGMENT_TYPES.LOAD: 1>
- NOTE = <SEGMENT_TYPES.NOTE: 4>
- NULL = <SEGMENT_TYPES.NULL: 0>
- PHDR = <SEGMENT_TYPES.PHDR: 6>
- SHLIB = <SEGMENT_TYPES.SHLIB: 5>
- TLS = <SEGMENT_TYPES.TLS: 7>
- UNWIND = <SEGMENT_TYPES.ARM_UNWIND: 1879048193>

## 段偏移

段偏移，这个段的第一个字节到文件开始的距离，也就是该段在文件中的偏移

## 段虚拟地址

段将映射到的地址,也就是段在内存中的虚拟地址  
对于虚拟地址而言,一定有
`virtual address≡file offset(mod page size)`和
`virtual address≡file offset(mod alignment)`

## 段物理地址

加载到内存中的物理地址

## 段在文件映像中的字节数

段二进制数据的大小

## 段在内存映像中的字节数

段在内存中的大小

## 段标记

段的标记

- R 0x4
- W 0x2
- X 0x1

## 段在内存中的对齐标记

提供段在内存和文件中对齐的值,值0和1表示不需要对齐。
