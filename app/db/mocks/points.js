'use strict';

const MOCK_POINTS = [
  {
    'id': 'fab1aa20-31a3-46b9-b07b-22ce4930e147',
    'base_price': 5258,
    'date_from': '2025-04-17T03:25:12.542Z',
    'date_to': '2025-04-18T13:02:12.542Z',
    'destination': 'c7f74341-dc34-428a-a132-5acbe6f4ebb3',
    'is_favorite': true,
    'offers': [
      '8eda5e31-c993-4f83-8fc0-cbd8e245918b',
      '52caaa6b-6fb4-4c28-bd03-e2c266cc85e3',
      'c36f493d-3322-4f46-8b96-5ac9e246ae4a',
      '0042cd0b-24c7-45a0-9241-b61519bdbb87',
      '83ad5020-3aee-465d-9bb5-dd65755cf47f'
    ],
    'type': 'flight'
  },
  {
    'id': 'b3d7e9bf-62e3-4d91-8496-c62fda4acbad',
    'base_price': 7226,
    'date_from': '2025-04-19T14:58:12.542Z',
    'date_to': '2025-04-20T12:01:12.542Z',
    'destination': 'b881075f-952d-42d7-8d1c-de9255cbbbfa',
    'is_favorite': false,
    'offers': [],
    'type': 'train'
  },
  {
    'id': '3d589716-e5b4-4af6-80dc-7c42797807d9',
    'base_price': 1175,
    'date_from': '2025-04-22T02:56:12.542Z',
    'date_to': '2025-04-23T05:23:12.542Z',
    'destination': 'b881075f-952d-42d7-8d1c-de9255cbbbfa',
    'is_favorite': false,
    'offers': [
      '06f4b2f7-e312-4573-a40b-b444610e5c5a',
      '30325cab-f934-4b72-8ea3-76ca1e88c5aa',
      '903fcd70-e510-49d4-972e-9ea12c365d45'
    ],
    'type': 'taxi'
  },
  {
    'id': 'b261b047-6447-47d6-8085-43ecec33c24c',
    'base_price': 4150,
    'date_from': '2025-05-02T18:38:12.542Z',
    'date_to': '2025-05-03T04:02:12.542Z',
    'destination': 'e6e5ba9e-eb2e-41fc-9055-b74dc80b54ce',
    'is_favorite': false,
    'offers': [],
    'type': 'bus'
  },
  {
    'id': '7be00941-9b8f-49cd-85d6-c87918ef5ad2',
    'base_price': 9407,
    'date_from': '2025-05-01T20:56:12.542Z',
    'date_to': '2025-05-02T03:01:12.542Z',
    'destination': 'e6e5ba9e-eb2e-41fc-9055-b74dc80b54ce',
    'is_favorite': false,
    'offers': [
      'f3385601-9632-4283-b62e-970e966503e1',
      '5a797c79-b100-4cec-98c5-5f3a876851e1',
      '5a797c79-b100-4cec-98c5-5f3a876851e2'
    ],
    'type': 'ship'
  }
];

module.exports = { MOCK_POINTS };
