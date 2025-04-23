import React, { useEffect, useState } from "react";
import SegiTable from './SegiTable/SegiTable';
import { FieldTypes, FieldValueTypes } from "./SegiTable/ISegiTable";
import mockUserData from "./MOCK_DATA.csv";

const App = () => {
     const [isAdding, setIsAdding] = useState(false);
     const [dataLoaded, setDataLoaded] = useState(false);
     const [isEditing, setIsEditing] = useState(false);
     const [mockData, setMockData] = useState([]);

     const cancelEditClickHandler = () => {
          setIsEditing(false);
     }

     const template = {
          Data: mockData,
          MultiExpandableRows: true,
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
                    Centered: true,
                    Filterable: true,
                    Required: true,
                    // Display a collapsible/expandable row. When the first name is Herc, the value of "Show" will be displayed. * matches all other rows
                    ExpandableCriteria: [{ Match: "*", Show: "<h1 style='background-color: green;height: 150px'>This is a test message</h1>" }, { Match: "Herc", Show: "<h1 style='background-color: red;'>This is a test message</h1>" }],
                    ExpandableCriteriaExactMatch: false,
               },
               {
                    DisplayName: 'Last Name',
                    Clickable: true,
                    DatabaseColumn: "last_name",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    Required: true
               },
               {
                    DisplayName: 'Email Address',
                    Clickable: true,
                    DatabaseColumn: "email",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    IsEmailAddress: true,
                    Required: true
               },
               {
                    DisplayName: 'Gender',
                    Clickable: true,
                    DatabaseColumn: "gender",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    Required: true
               },
               {
                    DisplayName: 'IP Address',
                    Clickable: true,
                    DatabaseColumn: "ip_address",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Required: true
               },
               {
                    DisplayName: 'URL',
                    Clickable: true,
                    DatabaseColumn: "url",
                    FieldType: FieldTypes.TEXTAREA,
                    Rows: 5,
                    Columns: 20,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    IsURL: true,
                    IsURLText: "Link",
                    IsURLButton: true,
                    Required: true,
                    Filterable: true
               },
               {
                    DisplayName: 'Date of Entry',
                    Clickable: true,
                    DatabaseColumn: "date_of_entry",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.DATE,
                    Centered: true,
                    Required: true,
                    Filterable: true
               },
               {
                    DisplayName: 'Due',
                    Clickable: true,
                    DatabaseColumn: "amount",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.CURRENCY,
                    Centered: true,
                    Required: true,
                    Filterable: true
               },
          ]
     }

     const saveAddClickHandler = (addDBTypeObj) => {
          // Save addDBTypeObj with an API call
          alert("This record is not going to be saved")
          setIsAdding(false);
     }

     const saveEditClickHandler = async (newData) => {
          alert("This is a demo and your changes will not be saved once you refresh the page");

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
                         //addingHasDisabledCheckboxPlaceholder={true} // Shows disabled checkbox when adding
                         addingText={"Add User"}
                         cancelEditCallBackHandler={cancelEditClickHandler}
                         defaultPageSize={5}
                         editable={true}
                         exportable={false}
                         filterable={true}
                         height={"500px"}
                         isAdding={isAdding}
                         isEditing={isEditing}
                         pageSizeOverride={{ 0: "All", 5: "5", 10: "10", 25: "25", 50: "50" }}
                         paginationEnabled={true}
                         saveAddCallBackHandler={saveAddClickHandler}
                         saveEditCallBackHandler={saveEditClickHandler}
                         searchable={true}
                         setIsAdding={setIsAdding}
                         setIsEditing={setIsEditing}
                         sortable={true}
                         tableTemplate={template}
                         width={"1500px"}
                    />
               }
          </>
     );
}

export default App;