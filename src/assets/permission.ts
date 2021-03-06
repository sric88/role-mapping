export const permission = {
  permissions: [
    {
      appName: 'ABM',
      categories: [
        {
          key: 'row1',
          value: 'Task'
        },
        {
          key: 'row2',
          value: 'Story'
        },
        {
          key: 'row3',
          value: 'Bugs&Defects'
        }
      ],
      scopes: [
        {
          key: 'col1',
          value: 'Read'
        },
        {
          key: 'col2',
          value: 'Create'
        },
        {
          key: 'col3',
          value: 'Update/Change'
        }
      ],
      permissions: {
        row1: {
          col1: {
            id: 'a765ef43-5f70-4c5c-9fe7-9830e925c7e9',
            isAssigned: true,
            code: 'Task_Read',
            dependents: [],
            dependentOn: ['1393cfcf-7370-4756-a6f2-53ed8c29164e']
          },
          col2: {
            id: '1393cfcf-7370-4756-a6f2-53ed8c29164e',
            isAssigned: true,
            code: 'Task_Create',
            dependents: ['a765ef43-5f70-4c5c-9fe7-9830e925c7e9'],
            dependentOn: []
          }
        },
        row2: {
          col1: {
            id: '28e87aff-a6dc-4249-ba37-025410411368',
            isAssigned: true,
            code: 'Story_Read',
            dependents: [],
            dependentOn: [
              '76d9158e-8a52-48b0-93a2-ca62c4cc8d11',
              'e017d4b0-abba-46ef-9803-58c515d4a654'
            ]
          },
          col2: {
            id: 'ffd71fc0-62a1-45af-b3b8-615176881e6b',
            isAssigned: true,
            code: 'Story_Create',
            dependents: ['28e87aff-a6dc-4249-ba37-025410411368'],
            dependentOn: ['e017d4b0-abba-46ef-9803-58c515d4a654']
          },
          col3: {
            id: '6e995aee-c0ab-44dc-a374-2ecf67b3c534',
            isAssigned: true,
            code: 'Story_Update',
            dependents: [
              '28e87aff-a6dc-4249-ba37-025410411368',
              '76d9158e-8a52-48b0-93a2-ca62c4cc8d11'
            ],
            dependentOn: []
          }
        },
        row3: {
          col1: {
            id: 'fc709f40-af77-4557-8dd0-eee113175a63',
            isAssigned: true,
            code: 'Bugs_Read',
            dependents: [],
            dependentOn: ['d93271c6-e9d3-40bb-99b6-a383b30babb6']
          },
          col3: {
            id: '047f5638-d0a7-46f9-9de2-fa859525188a',
            isAssigned: true,
            code: 'Bugs_Update',
            dependents: ['fc709f40-af77-4557-8dd0-eee113175a63'],
            dependentOn: []
          }
        }
      }
    },
    {
      appName: 'Work items',
      categories: [
        {
          key: 'row1',
          value: 'Sprint backlog'
        },
        {
          key: 'row2',
          value: 'Icebox'
        },
        {
          key: 'Row3',
          value: 'Capacity plan'
        }
      ],
      scopes: [
        {
          key: 'Col1',
          value: 'Read'
        },
        {
          key: 'Col2',
          value: 'Create'
        },
        {
          key: 'Col3',
          value: 'Update/Change'
        }
      ],
      permissions: {
        row1: {
          col1: {
            id: 'a765ef43-5f70-4c5c-9fe7-9830e925c7e9',
            isAssigned: true,
            code: 'Task_Read',
            dependents: [],
            dependentOn: ['1393cfcf-7370-4756-a6f2-53ed8c29164e']
          },
          col2: {
            id: '1393cfcf-7370-4756-a6f2-53ed8c29164e',
            isAssigned: true,
            code: 'Task_Create',
            dependents: ['a765ef43-5f70-4c5c-9fe7-9830e925c7e9'],
            dependentOn: []
          }
        },
        row2: {
          col1: {
            id: '28e87aff-a6dc-4249-ba37-025410411368',
            isAssigned: true,
            code: 'Story_Read',
            dependents: [],
            dependentOn: [
              '76d9158e-8a52-48b0-93a2-ca62c4cc8d11',
              'e017d4b0-abba-46ef-9803-58c515d4a654'
            ]
          },
          col2: {
            id: 'ffd71fc0-62a1-45af-b3b8-615176881e6b',
            isAssigned: true,
            code: 'Story_Create',
            dependents: ['28e87aff-a6dc-4249-ba37-025410411368'],
            dependentOn: ['e017d4b0-abba-46ef-9803-58c515d4a654']
          },
          col3: {
            id: '6e995aee-c0ab-44dc-a374-2ecf67b3c534',
            isAssigned: true,
            code: 'Story_Update',
            dependents: [
              '28e87aff-a6dc-4249-ba37-025410411368',
              '76d9158e-8a52-48b0-93a2-ca62c4cc8d11'
            ],
            dependentOn: []
          }
        },
        row3: {
          col1: {
            id: 'fc709f40-af77-4557-8dd0-eee113175a63',
            isAssigned: true,
            code: 'Bugs_Read',
            dependents: [],
            dependentOn: ['d93271c6-e9d3-40bb-99b6-a383b30babb6']
          },
          col3: {
            id: '047f5638-d0a7-46f9-9de2-fa859525188a',
            isAssigned: true,
            code: 'Bugs_Update',
            dependents: ['fc709f40-af77-4557-8dd0-eee113175a63'],
            dependentOn: []
          }
        }
      }
    }
  ]
};
