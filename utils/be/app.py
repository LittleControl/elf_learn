import lief
from flask import Flask
from flask import request
from flask_cors import CORS
import json
import copy

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

path = ''


@app.route("/")
def index():
    return "Index Pages"


@app.route("/analysis", methods=['GET', 'POST'])
def analysis():
    res = {}
    global path
    path = json.loads(request.data)['file_name']
    if(path):
        res['header'] = e_header(path)
    else:
        res['error'] = 'Invalid Path Parameter'
    return res


@app.route('/segments')
def getSegments():
    global path
    res = {}
    res['segments'] = e_segments(path)
    return res


@app.route('/sections')
def getSections():
    global path
    res = {}
    res['sections'] = e_sections(path)
    return res


@app.route('/symbols')
def getSymbols():
    global path
    res = {}
    res['symbols'] = e_symbols(path)
    return res


@app.route('/relocations')
def getRelocations():
    global path
    res = {}
    res['relocations'] = e_relocations(path)
    return res


def e_header(path):
    res = {}
    binary = lief.parse(path)
    header = binary.header
    res['key'] = header.identity
    res['magic'] = header.identity
    res['class'] = str(header.identity_class)
    res['i_data'] = str(header.identity_data)
    res['e_version'] = str(header.identity_version)
    res['abi'] = str(header.identity_os_abi)
    res['abi_version'] = header.identity_abi_version
    res['type'] = str(header.file_type)
    res['machine_type'] = str(header.machine_type)
    res['object_file_version'] = str(header.object_file_version)
    res['processor_flag'] = str(header.processor_flag)
    res['entrypoint'] = header.entrypoint
    res['header_size'] = header.header_size
    res['numberof_segments'] = header.numberof_segments
    res['program_header_offset'] = header.program_header_offset
    res['program_header_size'] = header.program_header_size
    res['numberof_sections'] = header.numberof_sections
    res['section_header_size'] = header.section_header_size
    res['section_header_offset'] = header.section_header_offset
    res['section_name_table_idx'] = header.section_name_table_idx
    return res


def e_segments(path):
    res = []
    temp = {}
    binary = lief.parse(path)
    segments = binary.segments
    # print("Number of segments {}".format(len(segments)))
    count = 1
    for segment in segments:
        temp['index_v'] = count
        temp['key'] = 'segment' + str(count)
        temp['type'] = str(segment.type)
        temp['offset'] = segment.file_offset
        temp['virtAddr'] = segment.virtual_address
        temp['physAddr'] = segment.physical_address
        temp['fileSize'] = segment.physical_size
        temp['memSize'] = segment.virtual_size
        temp['flags'] = str(segment.flags)
        temp['align'] = segment.alignment
        res.append(copy.deepcopy(temp))
        count = count + 1
        temp.clear()

    return res


def e_sections(path):
    res = []
    binary = lief.parse(path)
    sections = binary.sections
    count = 0
    for section in sections:
        res.append({})
        res[count]['index_v'] = count
        res[count]['key'] = 'section' + str(count)
        res[count]['sh_name_idx'] = section.name_idx
        res[count]['sh_name'] = str(section.name)
        res[count]['sh_name_and_index'] = str(
            section.name) + '(' + str(section.name_idx) + ')'
        res[count]['sh_type'] = str(section.type)
        res[count]['sh_flags'] = str(section.flags)
        res[count]['sh_addr'] = section.virtual_address
        res[count]['sh_offset'] = section.file_offset
        res[count]['sh_size'] = section.size
        res[count]['sh_link'] = section.link
        res[count]['sh_info'] = section.information
        res[count]['sh_addralign'] = section.alignment
        res[count]['sh_entsize'] = section.entry_size
        res[count]['sh_content'] = section.content
        count = count + 1

    return res


def e_symbols(path):
    res = []
    binary = lief.parse(path)
    symbols = binary.symbols
    count = 0
    for symbol in symbols:
        res.append({})
        res[count]['sym_index'] = count
        res[count]['key'] = 'symbol' + str(count)
        res[count]['sym_value'] = symbol.value
        res[count]['sym_size'] = symbol.size
        res[count]['sym_type'] = str(symbol.type)
        res[count]['sym_bind'] = str(symbol.binding)
        res[count]['sym_vis'] = str(symbol.visibility)
        res[count]['sym_ndx'] = symbol.shndx
        res[count]['sym_name'] = symbol.name
        count = count + 1

    return res


def e_relocations(path):
    res = []
    binary = lief.parse(path)
    relocations = binary.relocations
    count = 0
    for relocation in relocations:
        res.append({})
        res[count]['re_addend'] = relocation.addend
        res[count]['re_address'] = relocation.address
        res[count]['re_info'] = relocation.info
        res[count]['re_size'] = relocation.size
        res[count]['re_sym_name'] = relocation.symbol.name
        res[count]['re_sym_type'] = relocation.symbol.type
        res[count]['re_sym_value'] = relocation.symbol.value
        count = count + 1

    return res


# rel
def e_text(path):
    res = []
    return res


def e_data(path):
    res = []
    return res


def e_rodata(path):
    res = []
    return res


# dynamic
def e_dynamic(path):
    res = []
    return res


def e_dynstr(path):
    res = []
    return res


def e_dynsym(path):
    res = []
    return res


# exe
def e_got(path):
    res = {}
    return res


def e_plt(path):
    res = {}
    return res
