# Section Header Table

节头表描述程序节, 为编译器和链接器服务。它把elf文件分成了许多节, 每个节保存着用于不同目的的数据, 这些数据可能被前面的程序头重复使用, 完成一次任务所需的信息往往被分散到不同的节里。由于节中数据的用途不同, 节被分成不同的类型, 每种类型的节都有自己组织数据的方式。每一个节在节头表中都有一个表项描述该节的属性, 节的属性包括小节名在字符表中的索引, 类型, 属性, 运行时的虚拟地址, 文件偏移, 以字节为单位的大小, 小节的对齐等信息

```C
typedef struct
{
  Elf64_Word sh_name; /* Section name (string tbl index) */
  Elf64_Word sh_type; /* Section type */
  Elf64_Xword sh_flags;  /* Section flags */
  Elf64_Addr sh_addr;  /* Section virtual addr at execution */
  Elf64_Off sh_offset;  /* Section file offset */
  Elf64_Xword sh_size;  /* Section size in bytes */
  Elf64_Word sh_link;  /* Link to another section */
  Elf64_Word sh_info;  /* Additional section information */
  Elf64_Xword sh_addralign;  /* Section alignment */
  Elf64_Xword sh_entsize;  /* Entry size if section holds table */
} Elf64_Shdr;
```

- sh_name: 确定节的名字,它的值不是一个字符串,而是节名字符串表的索引
- sh_type: 分类 节的内容和语义
- sh_flags: 支持一位的标识, 描述各种各样的属性
- sh_addr: 如果这个节出现在进程中的内存映像,这个成员给出这个节在第一个字节在内存中的地址
- sh_offset: 这个节在文件中的偏移
- sh_size: 该节的字节数
- sh_link: 节头表索引链接, 它的解释器根据节的类型决定
- sh_info: 额外信息, 解释器取决于节的类型
- sh_addralign: 对齐限制
- sh_entsize: 有些节持有/保存一个固定尺寸项的表，比如说符号表(symbol table)。对这样一个节，这个成员给出每一项的字节大小
