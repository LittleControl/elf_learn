import lief
from flask import Flask
from flask import request
from flask_cors import CORS
import json
import copy

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})


@app.route("/")
def index():
    return "Index Pages"


@app.route("/analysis", methods=['GET', 'POST'])
def analysis():
    error = None
    if request.method == 'POST':
        path = json.loads(request.data)['file_name']
        res = {}
        res['header'] = e_header(path)
        res['segments'] = e_segments(path)
        res['sections'] = e_sections(path)
        return res
    else:
        return error


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
    temp = {}
    binary = lief.parse(path)
    sections = binary.sections
    count = 1
    for section in sections:
        temp['index_v'] = count
        temp['key'] = 'section' + str(count)
        temp['sh_name_idx'] = section.name_idx
        temp['sh_name'] = str(section.name)
        temp['sh_name_and_index'] = str(
            section.name) + '(' + str(section.name_idx) + ')'
        temp['sh_type'] = str(section.type)
        temp['sh_flags'] = str(section.flags)
        temp['sh_addr'] = section.virtual_address
        temp['sh_offset'] = section.file_offset
        temp['sh_size'] = section.size
        temp['sh_link'] = section.link
        temp['sh_info'] = section.information
        temp['sh_addralign'] = section.alignment
        temp['sh_entsize'] = section.entry_size
        temp['sh_content'] = section.content
        res.append(copy.deepcopy(temp))
        count = count + 1
        temp.clear()

    return res
