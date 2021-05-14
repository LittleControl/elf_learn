from flask import Flask
from flask import request
from flask_cors import CORS
import json
import lief
import pickle

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
        return res
    else:
        return error


def e_header(path):
    res = {}
    header = lief.ELF.parse(path).header
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
    sections = lief.ELF.parse(path).sections
    temp = {}
    for section in sections:
        temp['name'] = section.name
        temp['type'] = section.type
        temp['flags'] = section.flags
        temp['virtual_address'] = section.virtual_address
        temp['file_offset'] = section.file_offset
        temp['flags'] = section.flags
        temp['flags'] = section.flags
        temp['flags'] = section.flags
        temp['flags'] = section.flags
        temp['flags'] = section.flags
    return res


def e_sections(path):
    res = {}
    return res
