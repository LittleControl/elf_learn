import lief
# import tkinter

# ELF
binary = lief.ELF.parse('/usr/bin/ls')
header = binary.header
# print(header)
# print(header.arm_flags_list)
# print("文件类型: %s" %(header.file_type))
# print(type(header.file_type))
# print(str(header.file_type))
# if(header.file_type == 1):
#   print('nothing')
# if(str(header.file_type) == 'E_TYPE.DYNAMIC'):
#   print('avalon')
# print("ident: %s" %(header.identity))
# print("ident: %s" %(header.identity_abi_version))
# print("ident: %s" %(header.identity_abi_version))
# print('文件类型' + header.file_type)
# print(header.machine_type)
# print(header.program_header_size)
# top = tkinter.Tk()
# top.mainloop()
segments = binary.segments
# for segment in segments:
#   print(segment.file_offset)
# print(segments.file_offset)
print(type(segments))

segment = segments[0]
# print(segment)
# print(segment.type)
# print(type(segment.type))
# print(str(segment.type))
# print(type(segment.file_offset))
# print(type(segment.virtual_address))
# print(type(segment.virtual_address))
# print(type(segment.alignment))
# print(segment.flags)
# print(type(segment.flags))
# print("%4s\n" % (segment.type))
sections = binary.sections
# print(sections)
# section.name,
# section.type,
# section.flags,
# section.virtual_address,
# section.file_offset,
# section.size,
# section.link,
# section.information,
# section.alignment,
# section.entry_size
section = sections[1]
print(section)
print(section.name, type(section.name))
print(section.type, type(section.type))
print(section.flags, type(section.flags))
print(section.virtual_address, type(section.virtual_address))
print(section.file_offset, type(section.file_offset))
print(section.size, type(section.size))
print(section.link, type(section.link))
print(section.information, type(section.information))
print(section.alignment, type(section.alignment))
print(section.entry_size, type(section.entry_size))
