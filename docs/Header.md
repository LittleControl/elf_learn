# ELF Header

Elf头在程序的开始部位, 作为引路表描述整个ELF的文件结构, 其信息大致分为四部分:一是系统相关信息, 二是目标文件类型, 三是加载相关信息, 四是链接相关信息。

## 系统相关信息

系统相关信息包括elf文件魔数 (标识elf文件) , 平台位数, 数据编码方式, elf头部版本, 硬件平台e＿machine, 目标文件版本e＿version, 处理器特定标志e＿flags

- Magic 文件的标识以及标识描述了elf如何编码等信息
  - 7f 45 4c 46 02 01 01 00 00 00 00 00 00 00 00 00, 一共16个字节,目前只有前8个字节被用到
  - EI_MAG0 7f
  - EI_MAG1 0x45 -> 69(E)
  - EI_MAG2 0x4c -> 76(L)
  - EI_MAG3 0x46 -> 70(f)
  - EI_CLASS 当取值为0时，是非法类别，1是32位的目标，2是64位的目标
  - EI_DATA 表示数据的编码，当为0时，表示非法数据编码，1表示高位在前(大端)，2表示低位在前(小端)
  - EI_VERSION 表示了elf的头部版本号码, 1表示为CURRENT, 0表示为NONE
  - EI_OSABI 应用程序二进制接口, 常见的值, 0为SYSTEMV, 3为GNU/Linux, 9为FREEBSD
  - EI_PAD 补齐字节开始处
- Machine 目标平台架构, 常见的62表示x86_64,183表示AARCH64,40表示ARM, 3表示i386
- Version 确定对象文件的版本, 1表示为CURRENT, 0表示为NONE
- Flags 处理器特定标识

## 目标文件类型

目标文件类型用e＿type的值表示, 可重定位文件为1, 可执行文件为2, 共享文件为3

- Type ELF文件类型
  - NONE = <E_TYPE.NONE: 0> 未知目标文件格式
  - RELOCATABLE = <E_TYPE.RELOCATABLE: 1> 可重定位文件
  - EXECUTABLE = <E_TYPE.EXECUTABLE: 2> 可执行文件
  - DYNAMIC = <E_TYPE.DYNAMIC: 3> 共享目标文件
  - CORE = <E_TYPE.CORE: 4> Core文件(转储格式)
  - HIPROC = <E_TYPE.HIPROC: 65535> 特定处理器文件
  - LOPROC = <E_TYPE.LOPROC: 65280> 特定处理器文件

## 加载相关信息

加载相关信息有:程序进入点e＿entry, 程序头表偏移量e＿phoff, elf头部长度e＿ehsize, 程序头表中一个条目的长度e＿phentsize, 程序头表条目数目e＿phnum

- Entry point address 入口地址, 规定ELF程序的入口虚拟地址, 操作系统在加载完该程序后从这个地址开始执行进程的指令. 可重定位指令一般没有入口地址.
- Start of program headers 程序头起点
- Size of program headers 程序头大小
- Size of this headers 该elf头部的长度或者说ELF Header本身的大小
- Number of program headers 程序头的数量,或者说段的数量
- Program Header Offset, 文件在程序头表中的偏移

## 链接相关信息

链接相关信息有:节头表偏移量e＿shoff, 节头表中一个条目的长度e＿shentsize, 节头表条目个数e＿shnum, 节头表字符索引e＿shstrndx

- Start of section headers 节头的起始地址
- Size of section headers 节头大小
- Number of section headers 节头数量
- Section header string table index 字符表索引节头,这个字段保留节头表的索引，联系到节名字符串表（section name string table）
- Section Header Offset 节头表偏移量
