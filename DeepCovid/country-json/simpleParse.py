# import yaml

# with open('./src/country-by-capital-city.json') as json_file:
#     for line in yaml.safe_load(json_file):
#         print line # {'country': 'Afghanistan', 'city': 'Kabul'}

import json
import glob
from os.path import isfile
from pprint import pprint

from jsonmerge import merge
from itertools import groupby
import pprint




class bcolors:
    HEADER = '\033[95m'
    OKBLUE = '\033[94m'
    OKGREEN = '\033[92m'
    WARNING = '\033[93m'
    FAIL = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

result = []
flist = ['population-density',          'population', 
         # 'yearly-average-temperature',  'geo-coordinates',
         'abbreviation',                'iso-numeric'        ]
fnames = ['src/country-by-' + feature + '.json' for feature in flist]

exitAfter = False
for filename in fnames:
    fexists = isfile(filename)
    if fexists:
        print(f'File: {filename}, exists')
    else: 
        print(f"{bcolors.FAIL}File: {filename}, does not exist{bcolors.ENDC}")
        exitAfter = True;
if exitAfter:
    raise FileNotFoundError
with open('fmaster.txt', 'w') as fidmaster:
    # with open(fnames[0], 'r') as fid:
    #     firstDocument = fid.read()
    # with open(fnames[1], 'r') as fid:
    #     secondDocument = fid.read()
    with open(fnames[0], 'r') as fid:
         mjson = json.load(fid)
    for i in mjson: 
        print(i) 
    #print(mjson.keys())
    #data_grouped = {k: list(v) for k, v in groupby(mjson, key=lambda x: x["country"])}
    # pp = pprint.PrettyPrinter(indent=4)
    # pp.pprint(data_grouped, file=fidmaster)

# with open("merged_file.json", "w") as outfile:
#     outfile.write('[{}]'.format(
#         ','.join([open(f, "r").read() for f in fnames])))
# print('Wrote file')
# with open("merged_file.json", 'r') as f:
#     unsortedJson = json.load(f)
#     print('Read back in data')
#     # parsed_json = (json.loads(unsortedJson))
#     # print('Parsed JSON')
#     print(json.dumps(unsortedJson, indent=4, sort_keys=True))
# result = []
# for f in fnames:
#     with open(f, "rb") as infile:
#         # print(json.load(infile))
#         result.append(json.load(infile))

# with open("merged_file.json", "wb") as outfile:
#      json.dump(result, outfile)