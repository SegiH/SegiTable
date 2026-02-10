import React, { useEffect, useState } from "react";
import SegiTable from './SegiTable/SegiTable';
import { FieldTypes, FieldValueTypes } from "./SegiTable/ISegiTable";

const App = () => {
     const [isAdding, setIsAdding] = useState(false);
     const [dataLoaded, setDataLoaded] = useState(false);
     const [isEditing, setIsEditing] = useState(false);
     const [mockData, setMockData] = useState([]);
     const [expandableData, setExpandableData] = useState([]);

     const cancelEditClickHandler = () => {
          setIsEditing(false);
     }

     const expandableTemplate = {
          Data: expandableData,
          ExpandableDataColumn: "id", // The id in expandableData will be matched with the id in mockData
          ExpandableDataLinked: true,
          Fields: [
               {
                    DisplayName: 'Year',
                    DatabaseColumn: "car_year",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.NUMBER,
                    ColumnWidth: "10%"
               },
               {
                    DisplayName: 'Make',
                    DatabaseColumn: "car_make",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    ColumnWidth: "30%"
               },
               {
                    DisplayName: 'Model',
                    DatabaseColumn: "car_model",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
               }
          ]
     }

     const template = {
          Data: mockData,
          ExpandableDataColumn: "id", // This has to match ExpandableDataColumn defined in expandableTemplate 
          ExpandableContent:
               <SegiTable
                    darkMode={true}
                    editable={false}
                    exportable={false}
                    searchable={false}
                    sortable={false}
                    tableTemplate={expandableTemplate}
                    width={"600px"}
               />,
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
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "first_name",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    Required: true,
                    IsURL: true,
                    IsURLHrefColumn: "url",
                    TogglesIDColumn: true,
                    ColumnWidth: "14%"
               },
               {
                    DisplayName: 'Last Name',
                    DatabaseColumn: "last_name",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    Required: true,
                    ColumnWidth: "14%"
               },
               {
                    DisplayName: 'Email Address',
                    DatabaseColumn: "email",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    IsEmailAddress: true,
                    Required: true,
                    ColumnWidth: "16%"
               },
               {
                    DisplayName: 'Gender',
                    DatabaseColumn: "gender",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Filterable: true,
                    Required: true,
                    ColumnWidth: "14%"
               },
               {
                    DisplayName: 'IP Address',
                    DatabaseColumn: "ip_address",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Centered: true,
                    Required: true,
                    ColumnWidth: "12%"
               },
               {
                    DisplayName: 'URL',
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
                    Filterable: true,
                    ColumnWidth: "12%"
               },
               {
                    DisplayName: 'Date of Entry',
                    DatabaseColumn: "date_of_entry",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.DATE,
                    Centered: true,
                    Required: true,
                    Filterable: true,
                    ColumnWidth: "12%"
               },
               {
                    DisplayName: 'Due',
                    DatabaseColumn: "amount",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.CURRENCY,
                    Centered: true,
                    Required: true,
                    Filterable: true,
                    ColumnWidth: "12%"
               },
          ],
          MultiExpandableRows: true,
     }

     const saveAddClickHandler = (addDBTypeObj) => {
          // Save addDBTypeObj with an API call
          alert("This is an example and your changes will not be saved once you refresh the page");
          setIsAdding(false);
     }

     const saveEditClickHandler = async (newData) => {
          alert("This is an example and your changes will not be saved once you refresh the page");

          // Save newData with an API call
          setIsEditing(false);
     }

     useEffect(() => {
          fetch(`/MOCK_DATA.csv`)
               .then(res => res.text())
               .then(mockUserData => {
                    // Import CSV data
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
               }).catch((err) => {
                    // Catch any fetch or parsing errors
                    console.error('Error loading CSV:', err);
                    // Optionally set state to indicate error
                    setMockData([]);
                    // Or show a user-friendly message
                    alert('Failed to load mock data. Please try again later.');
               });

          fetch(`/EXPANDABLE_DATA.csv`)
               .then(res => res.text())
               .then(expandableData => {
                    // Import CSV data
                    const expandableLines = expandableData.trim().split('\n');

                    // Get the headers
                    const expandableHeaders = expandableLines[0].split(',').map(h => h.trim());

                    // Convert each line to an object
                    const expandableResult = expandableLines.slice(1).map(line => {
                         const values = line.split(',').map(val => val.trim());
                         return expandableHeaders.reduce((obj, key, i) => {
                              obj[key] = values[i];
                              return obj;
                         }, {});
                    });

                    setExpandableData(expandableResult);
               });
     }, []);

     useEffect(() => {
          if (mockData.length > 0 && expandableData.length > 0) {
               setDataLoaded(true);
          }
     }, [expandableData, mockData]);

     return (
          <>
               {dataLoaded &&
                    <SegiTable
                         addingText={"Add User"}
                         cancelEditCallBackHandler={cancelEditClickHandler}
                         darkMode={true}
                         defaultPageSize={5}
                         editable={true}
                         exportable={true}
                         filterable={true}
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
                    />
               }
          </>
     );
}

export default App;
