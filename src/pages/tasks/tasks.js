import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup
} from 'devextreme-react/data-grid';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Tareas</h2>

    <DataGrid
      className={'dx-card wide-card'}
      dataSource={dataSource}
      showBorders={false}
      focusedRowEnabled={true}
      defaultFocusedRowIndex={0}
      columnAutoWidth={true}
      columnHidingEnabled={true}
    >
      <Paging defaultPageSize={10} />
      <Pager showPageSizeSelector={true} showInfo={true} />
      <FilterRow visible={true} />

      <Column dataField={'Task_ID'} width={90} hidingPriority={2} />
      <Column
        dataField={'Task_Subject'}
        width={190}
        caption={'Descripción'}
        hidingPriority={8}
      />
      <Column
        dataField={'Task_Status'}
        caption={'Estado'}
        hidingPriority={6}
      />
      <Column
        dataField={'Task_Priority'}
        caption={'Prioridad'}
        hidingPriority={5}
      >
        <Lookup
          dataSource={priorities}
          valueExpr={'value'}
          displayExpr={'name'}
        />
      </Column>
      <Column
        dataField={'ResponsibleEmployee.Employee_Full_Name'}
        caption={'Asignado a'}
        allowSorting={false}
        hidingPriority={7}
      />
      <Column
        dataField={'Task_Start_Date'}
        caption={'Fecha inicio'}
        dataType={'date'}
        hidingPriority={3}
      />
      <Column
        dataField={'Task_Due_Date'}
        caption={'Vencimiento'}
        dataType={'date'}
        hidingPriority={4}
      />
      <Column
        dataField={'Task_Priority'}
        caption={'Prioridad'}
        name={'Priority'}
        hidingPriority={1}
      />
      <Column
        dataField={'Task_Completion'}
        caption={'Terminación'}
        hidingPriority={0}
      />
    </DataGrid>
  </React.Fragment>
);

const dataSource = {
  store: {
    type: 'odata',
    key: 'Task_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Due_Date',
    'Task_Status',
    'Task_Priority',
    'Task_Completion',
    'ResponsibleEmployee/Employee_Full_Name'
  ]
};

const priorities = [
  { name: 'Urgente', value: 4 },
  { name: 'Alta', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Baja', value: 1 }
];
