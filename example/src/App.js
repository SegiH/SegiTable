import React, { useEffect, useState } from "react";
import SegiTable from './SegiTable/SegiTable';
import { FieldTypes, FieldValueTypes } from "./SegiTable/ISegiTable";
import mockUserData from "./MOCK_DATA.csv";

const App = () => {
     const [isAdding, setIsAdding] = useState(false);
     const [dataLoaded, setDataLoaded] = useState(false);
     const [isEditing, setIsEditing] = useState(false);
     const [mockData, setMockData] = useState([]);

     const data = [{ "DatabaseTypeID": 1, "DatabaseTypeName": "Oracle", "Enabled": true }, { "DatabaseTypeID": 2, "DatabaseTypeName": "SQL Server", "Enabled": true }, { "DatabaseTypeID": 3, "DatabaseTypeName": "MySQL", "Enabled": true }];

     const cancelEditClickHandler = () => {
          setIsEditing(false);
     }

     const template = {
          AddingText: "Add Database Type",
          Data: mockData,
          Exportable: false,
          Filterable: true,
          Searchable: true,
          PaginationEnabled: true,
          Fields: [
               {
                    DisplayName: 'id', // Column header
                    DatabaseColumn: "id", // Database column
                    FieldType: FieldTypes.TEXTFIELD, // Renders an input field. This will not render an input fieldNot used in this case because it is marked as the ID Column
                    FieldValueType: FieldValueTypes.NUMBER,
                    HiddenField: true, // Hides the column
                    IsIDColumn: true, // Specifies that this is the ID column
                    Disabled: true,
                    Addable: false, // Specifies that this field cannot be added
                    Required: true
               },
               {
                    DisplayName: 'First Name',
                    Clickable: true,
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "first_name",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Filterable: true,
                    Required: true
               },
               {
                    DisplayName: 'Last Name',
                    Clickable: true,
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "last_name",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Filterable: true,
                    Required: true
               },
               {
                    DisplayName: 'Email Address',
                    Clickable: true,
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "email",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Filterable: true,
                    Required: true
               },
               {
                    DisplayName: 'Gender',
                    Clickable: true,
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "gender",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Filterable: true,
                    Required: true
               },
               {
                    DisplayName: 'IP Address',
                    Clickable: true,
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "ip_address",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Required: true
               }
          ],
          AddingHasDisabledCheckboxPlaceholder: true // Shows disabled checkbox when adding
     }

     const saveAddClickHandler = (addDBTypeObj) => {
          // Save addDBTypeObj with an API call
          alert("This record is not going to be saved!")
          setIsAdding(false);
     }

     const saveEditClickHandler = async (newData) => {
          // Save newData with an API call
          setIsEditing(false);
     }

     useEffect(() => {
          const lines = mockUserData.trim().split('\n');

          // Get the headers
          const headers = lines[0].split(',').map(h => h.trim());

          // Convert each line to an object
          const result = lines.slice(1).map(line => {
               const values = line.split(',').map(val => val.trim());
               return headers.reduce((obj, key, i) => {
                    obj[key] = values[i];
                    return obj;
               }, {});
          });

          setMockData(result);

          setDataLoaded(true);
     }, []);

     return (
          <>
               {dataLoaded &&
                    <SegiTable
                         isAdding={isAdding}
                         isEditing={isEditing}
                         saveAddCallBackHandler={saveAddClickHandler}
                         cancelEditCallBackHandler={cancelEditClickHandler}
                         saveEditCallBackHandler={saveEditClickHandler}
                         setIsAdding={setIsAdding}
                         setIsEditing={setIsEditing}
                         defaultPageSize={5}
                         pageSizeOverride={{ 5: "5", 10: "10", 25: "25", 50: "50" }}
                         tableTemplate={template} />
               }
          </>
     );
}

export default App;