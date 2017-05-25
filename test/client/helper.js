const im = require('../../src/app/client/flow/im');
const { reducers, reducer } = require('../../src/app/client/flow/reducers');
const dataGetter = require('../../src/app/client/components/setting/data');
const _ = require('../../src/app/client/util');
const ComponentTypes = [
  'auto',
  'table',
  'listFilter',
  'dateTimeFilter',
  'rect',
  'text',
  'image',
];



module.exports = {
  reducers,
  im,
  _,
  getDashboardState() {
    return {
      global: {
        'title': '新建报告j2l7373d',
        'id': 11104,
        'setting': {
          'style': {
            'theme': 'white',
            'primary': {
              'background': {
                'color': {
                  'r': 242,
                  'g': 242,
                  'b': 242,
                  'a': 1
                }
              },
              'font': {
                'color': {
                  'r': 51,
                  'g': 51,
                  'b': 51,
                  'a': 1
                },
                'family': 'avenir, Helvetica,"Microsoft YaHei", Arial, "Hiragino Sans GB", sans-serif'
              }
            },
            'secondary': {
              'background': {
                'color': {
                  'r': 68,
                  'g': 68,
                  'b': 68,
                  'a': 1
                }
              },
              'font': {
                'color': {
                  'r': 255,
                  'g': 255,
                  'b': 255,
                  'a': 1
                },
                'family': 'avenir, Helvetica,"Microsoft YaHei", Arial, "Hiragino Sans GB", sans-serif'
              }
            },
            'palette': [{
              'r': 0,
              'g': 82,
              'b': 228,
              'a': 1
            }, {
              'r': 63,
              'g': 178,
              'b': 126,
              'a': 1
            }, {
              'r': 105,
              'g': 204,
              'b': 101,
              'a': 1
            }, {
              'r': 247,
              'g': 200,
              'b': 74,
              'a': 1
            }, {
              'r': 248,
              'g': 141,
              'b': 73,
              'a': 1
            }, {
              'r': 243,
              'g': 83,
              'b': 81,
              'a': 1
            }, {
              'r': 206,
              'g': 98,
              'b': 214,
              'a': 1
            }, {
              'r': 137,
              'g': 84,
              'b': 212,
              'a': 1
            }, {
              'r': 81,
              'g': 86,
              'b': 184,
              'a': 1
            }, {
              'r': 105,
              'g': 212,
              'b': 219,
              'a': 1
            }],
            'grid': {
              'color': {
                'r': 230,
                'g': 230,
                'b': 230,
                'a': 0.8
              }
            },
            'axis': {
              'color': {
                'r': 163,
                'g': 163,
                'b': 163,
                'a': 1
              }
            },
            'background': {
              'color': {
                'r': 255,
                'g': 255,
                'b': 255,
                'a': 1
              }
            },
            'opacity': 1,
            'border': {
              'color': {
                'r': 204,
                'g': 204,
                'b': 204,
                'a': 1
              },
              'width': 0,
              'style': 'solid'
            },
            'borderRadius': 0,
            'discreteColor': 1,
            'continuousColor': 10
          },
          'format': {
            'size': {
              'type': 'standard',
              'width': 96,
              'height': 72
            }
          }
        },
        'flushTime': 0
      },
      dashboard: {
        'id': 12405,
        'title': '页面 1',
        'setting': {
          'style': {},
          'data': {}
        },
        'groups': []
      },
      dataModels: [],
      components: [ComponentTypes.map(key => dataGetter[key]())],
    };
  },
};