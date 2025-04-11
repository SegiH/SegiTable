# SegiTable

### SegiTable is a simple React component that renders a data table based on an array with the data that you want to display and an object that describes your data and enabled or disables features. This table can be edited, exported and searched.

### Features:

 - Simple HTML/CSS based table
 - No external dependencies
 - Very small size 87k
 - Table data can be edited to edit or add a row to the table
 - Built in search
 - Built in pagination
 - Export to CSV
 - Customize the look and feel with CSS

## Example:

<pre>
import React, { useState } from "react";
import SegiTable from './SegiTable/SegiTable';
import { FieldTypes, FieldValueTypes } from "./SegiTable/ISegiTable";

const App = () => {
     const [isAdding, setIsAdding] = useState(false); // Controls adding status when adding a row
     const [isEditing, setIsEditing] = useState(false); // Controls editing status when editing the table

     // Data
     const data = [{ "DatabaseTypeID": 1, "DatabaseTypeName": "Oracle", "Enabled": true }, { "DatabaseTypeID": 2, "DatabaseTypeName": "SQL Server", "Enabled": true }, { "DatabaseTypeID": 3, "DatabaseTypeName": "MySQL", "Enabled": true }];

     // Template
     const template = {
          AddingText: "Add Database Type",
          Data: data,
          AllowExportCSV: true,
          Fields: [
               {
                    DisplayName: 'ID', // Column header
                    DatabaseColumn: "DatabaseTypeID", // Database column
                    FieldType: FieldTypes.TEXTFIELD, // Renders an input field. This will not render an input fieldNot used in this case because it is marked as the ID Column
                    FieldValueType: FieldValueTypes.NUMBER,
                    HiddenField: true, // Hides the column
                    IsIDColumn: true, // Specifies that this is the ID column
                    Disabled: true,
                    Addable: false, // Specifies that this field cannot be added
                    Required: true
               },
               {
                    DisplayName: 'Name',
                    Clickable: true,
                    TogglesIDColumn: true, // Double clicking on this column header toggles the ID column
                    DatabaseColumn: "DatabaseTypeName",
                    FieldType: FieldTypes.TEXTFIELD,
                    FieldValueType: FieldValueTypes.TEXT,
                    Required: true
               },
               {
                    DisplayName: 'Enabled',
                    DatabaseColumn: "Enabled",
                    FieldType: FieldTypes.CHECKBOX,
                    FieldValueType: FieldValueTypes.TEXT,
                    IsEnabledColumn: true,
                    Addable: false,
                    Required: false, // Specifies that this field cannot be added
                    HiddenField: true
               }
          ],
          AddingHasDisabledCheckboxPlaceholder: true // Shows disabled checkbox when adding
     }

     // Event handler that is called when you save a new row. The newly added row is saved immediately
     const saveAddClickHandler = (addDBTypeObj) => { }

     // Event handler that is called when you save the table
     const saveEditClickHandler = async (newData) => { }

     return (
          <SegiTable
               isAdding={isAdding}
               isEditing={isEditing}
               saveAddCallBackHandler={saveAddClickHandler}
               saveEditCallBackHandler={saveEditClickHandler}
               setIsAdding={setIsAdding}
               setIsEditing={setIsEditing}
               defaultPageSize={5}
               pageSizeOverride={{ 5: "5", 10: "10", 25: "25", 50: "50" }}
               height={"775px"}
               showDisabled={false}
               tableTemplate={template} />
     );
}

export default App;
</pre>

which results in this:

![alt text](screenshots/Example.png "")

Double clicking on the Name column shows the ID column:

![alt text](screenshots/Example2.png "")

# Possible issues:

1. When rending SegiTable, you need to make sure that the data array which is passed to the data property of tableTemplate has been loaded by your API before rendering the table. Usually this means doing

<pre>
     {dataLoaded &&
          &lt;SegiTable
               saveAddCallBackHandler={saveAddClickHandler}
               saveEditCallBackHandler={saveEditClickHandler}
               defaultPageSize={5}
               pageSizeOverride={{ 5: "5", 10: "10", 25: "25", 50: "50" }}
               height={"775px"}
               showDisabled={false}
               tableTemplate={template} /&gt;
     }
</pre>

If you do not do this, the SegiTable component will render with an empty array for the data and will show "No Data".

When a field is a select type, the SelectData property specifies the data to render for the select dropdown. You must also make sure that the SelectData object for all fields 
that are select types have been loaded. Otherwise, when you edit the table, the select dropdown will be empty. 

2. It is best to use pagination if your data has many rows and the table is editable. If you do not use pagination on an editable table, editing can be slow.

# Documentation:

- Props
    - [addtlPageSizes](#addtlPageSizes)
    - [cancelEditCallBackHandler](#cancelEditCallBackHandler)
    - [defaultPageSize](#defaultPageSize)    
    - [height](#height)
    - [isAdding](#isAdding)
    - [isEditing](#isEditing)
    - [pageSizeOverride](#pageSizeOverride)
    - [saveAddCallBackHandler](#saveAddCallBackHandler)
    - [saveEditCallBackHandler](#saveEditCallBackHandler)
    - [setIsAdding](#setIsAdding)
    - [setIsEditing](#setIsEditing)
    - [showDisabled](#showDisabled)
    - [tableTemplate](#tableTemplate)
        - [ITableComponent](#ITableComponent)
            - [AddingHasDisabledCheckboxPlaceholder](#AddingHasDisabledCheckboxPlaceholder)
            - [AddingText](#AddingText)
            - [AllowExportCSV](#AllowExportCSV)
            - [Data](#Data)
            - [Editable](#Editable)
            - [Fields](#Fields)
                - [Addable](#Addable)
                - [Clickable](#Clickable)
                - [ClickCallBack](#ClickCallBack)
                - [DatabaseColumn](#DatabaseColumn)
                - [DefaultAddValue](#DefaultAddValue)
                - [Disabled](#Disabled)
                - [DisplayName](#DisplayName)
                - [FieldType](#FieldType)
                - [FieldValue](#FieldValue)
                - [FieldValueType](#FieldValueType)
                - [HiddenField](#HiddenField)
                - [IsIDColumn](#IsIDColumn)
                - [IsEnabledColumn](#IsEnabledColumn)
                - [Required](#Required)
                - [SelectData](#SelectData)
                - [SelectDataIDColumn](#SelectDataIDColumn)
                - [SelectDataValueColumn](#SelectDataValueColumn)
                - [SelectDataEnabledOnly](#SelectDataEnabledOnly)
                - [SelectDataEnabledOnlyColumn](#SelectDataEnabledOnlyColumn)
                - [SearchableField](#SearchableField)
                - [SortableField](#SortableField)
                - [TogglesIDColumn](#TogglesIDColumn)
            - [PaginationEnabled](#PaginationEnabled)
            - [Searchable](#Searchable)
            - [Sortable](#Sortable)
    - [width](#width)
### ITableComponent:

#### Index
<a name="addtlPageSizes"></a>
#### addtlPageSizes
     Required: No
     Type: Array
     Description: Additional page sizes that you want in the rows per page dropdown. This needs to be provided as a key value pair like this: addtlPageSizes={{7:"7"}} to add 7 as a custom option. Do not use addtlPageSizes if you provide pageSizeOverride which overrides the default options.  You can only use addtlPageSizes or pageSizeOverride, not both.

<a name="cancelEditCallBackHandler"></a>
#### cancelEditCallBackHandler
     Required: No
     Type: Method
     Description: Method that is called when you cancel editing a table. This method can be used to perform canceling the edit related tasks. 

<a name="defaultPageSize"></a>
#### defaultPageSize
     Required: No
     Type: Number
     Description: the default rows per page. Use 0 for "All"

<a name="height"></a>
#### height
     Required: No
     Type: String
     Description: The height of the table. If not provided, the table will span the full height available

<a name="isAdding"></a>
#### isAdding
     Required: Yes
     Type: Boolean
     Description: Boolean value that determines whether the table is in add mode

<a name="isEditing"></a>
#### isEditing
     Required: Yes
     Type: Boolean
     Description: Boolean value that determines whether the table is in edit mode   

<a name="pageSizeOverride"></a>
#### pageSizeOverride
     Required: No
     Type: Array
     Description: Replace the options for the Rows per page dropdown with your own values. pageSizeOverride={{5:"5", 10: "10"}}. Do not use this with addtlPageSizes. You can only use addtlPageSizes or pageSizeOverride, not both.

<a name="saveAddCallBackHandler"></a>
#### saveAddCallBackHandler
     Required: No
     Type: Method
     Description: Method that is called when you click on the add button to add a new record.

<a name="saveEditCallBackHandler"></a>
#### saveEditCallBackHandler
     Required: No
     Type: Method
     Description: Method that is called when you click on the save button to save the table. The method needs to accept an object of type ITableComponent. 

<a name="setIsAdding"></a>
#### setIsAdding
     Required: Yes
     Type: Method
     Description: Method to set isAdding

<a name="setIsEditing"></a>
#### setIsEditing
     Required: Yes
     Type: Method
     Description: Method to set isEditing

<a name="showDisabled"></a>
#### showDisabled
     Required: No
     Type: Boolean
     Description: Boolean that can be used to show items that are hidden. If this is true, you have to specify IsEnabledColumn: true for one of the fields for this to work.

<a name="tableTemplate"></a>
#### tableTemplate
     Required: Yes
     Type: ITableComponent Object
     Description: Custom object that describes your data model and how you want to render the data

<a name="width"></a>
#### width
     Required: No
     Type: String
     Description: The width of the table. If not provided, the table will span the full width available. It is not recommended to set a width of les than 360px if you are using pagination.

<a name="ITableComponent"></a>
### ITableComponent:
     This is the object that describes the fields that you want to display in the table

<a name="AddingHasDisabledCheckboxPlaceholder"></a>
#### AddingHasDisabledCheckboxPlaceholder
	       Required: No
	       Type: Boolean
	       Description: If true, will show a cell in the add row with a disabled checkbox that shows Enabled in the column header to indicate that this row will be added as an 'Enabled' row by default.

<a name="AddingText"></a>
#### AddingText
	       Required: No
	       Type: String
	       Description: The text that will be displayed in the Add button when adding a row. If not provided, the add button will show "Add"

<a name="AllowExportCSV"></a>
#### AllowExportCSV
	       Required: No
	       Type: Boolean
	       Description: Exporting to CSV is disabled by default. If false, the table cannot be exported to CSV.
	       
<a name="Data"></a>
#### Data
	       Required: Yes
	       Type: Object
	       Description: The object that holds the data that you want to render. The data needs to have key value pairs for each row like "Name": "foo"   

<a name="Editable"></a>
#### Editable
	       Required: No
	       Type: Boolean
	       Description: If false, the table cannot be edited. If not set or set to true, it can be edited.

<a name="Fields"></a>
#### Fields
          Required: Yes
          Type: ITableComponentField
          Description: ITableComponentField object that describes the fields in the table data. See ITableComponentField reference below.

<a name="PaginationEnabled"></a>
#### PaginationEnabled
          Required: No
          Type: Boolean
          Description: Pagination is disabled by default. If true, enables paginating the table data into pages

<a name="Searchable"></a>
#### Searchable
          Required: No
          Type: Boolean
          Description: Searching is disabled by default. If set to true, enables a search field to allow searching the data in the table. Searching can be disabled for individual columns by setting SearchableField to false for the field

<a name="Sortable"></a>
#### Sortable
          Required: No
          Type: Boolean
          Description: Sorting is disabled by default. If true, enables sorting of the table. Sorting can be disabled for individual columns by setting SortableField to false for the field

<br /> <br /> <br /> 

### ITableComponentField:

<a name="Addable"></a>
#### Addable
	       Required: No
	       Type: Boolean
	       Description: If false, this field cannot be added when adding a new row. If not set or set to true, it can be added

<a name="Clickable"></a>
#### Clickable
                    Required: No
                    Type: Boolean
                    Description: If true, this will add a CSS class on the column header to make it have a mouse pointer when you hover over the column. This can be used to perform an action when you click on the column header

<a name="ClickCallBack"></a>
#### ClickCallBack
                    Required: No
                    Type: Method
                    Description: Method to call when the column header has been clicked. If you use this, you should set Clickable to true so the column turns into a mouse pointer when you hover over it. Do not set this with TogglesIDColumn. Only use one or the other but not both

<a name="DatabaseColumn"></a>
#### DatabaseColumn
                    Required: Yes
                    Type: String
                    Description: The name of the database column tied to the Field

<a name="DefaultAddValue"></a>
#### DefaultAddValue
                    Required: No
                    Type: Any
                    Description: The default value to use for the field when you add a new row 

<a name="Disabled"></a>
#### Disabled
                    Required: No
                    Type: Boolean
                    Description: Determines whether a field can be edited

<a name="DisplayName"></a>
####  DisplayName
          Required: Yes
          Type: String
          Description: The column header text

<a name="FieldType"></a>
#### FieldType
                    Required: Yes
                    Type: 
                        FieldTypes.TEXTFIELD for a text field
                        FieldTypes.SELECT for a select dropdown
                        FieldTypes.CHECKBOX for a CHECKBOX

                    Description: The type of field you want to display the text as

<a name="FieldValue"></a>
#### FieldValue
                    Required: No
                    Type: String or number
                    Description: Stores the value of the field when adding a row

<a name="FieldValueType"></a>
#### FieldValueType
                    Required: No
                    Type:
                         FieldValueTypes.TEXT for text data
                         FieldValueTypes.NUMBER for numeric data
                         FieldValueTypes.DATE for dates
                         FieldValueTypes.BOOLEAN for boolean data
                    Description: The data type for the field. This is not required when you set IsIDColumn to true because an ID column is not editabe but is required otherwise.

<a name="HiddenField"></a>
#### HiddenField
                    Required: No
                    Type: Boolean
                    Description: If true, the field is hidden when not editing. It will still be shown and editable when editing the table. The only exception is if the field is an ID column with IsIDColumn set to true, it will be displayed as a read only field

<a name="IsIDColumn"></a>
#### IsIDColumn
                    Required: No
                    Type: Boolean
                    Description: If true, indicates that the field is an ID column. Can be used along with Clickable on another fields' column header to show or hide ID column. An ID column cannot be edited 

<a name="IsEnabledColumn"></a>
#### IsEnabledColumn
                    Required: No
                    Type: Boolean
                    Description: If true, indicates that the field is a boolean column that can be used when showDisabled is set to true to determine whether to hide or show the field based on an enabled status 

<a name="Required"></a>
#### Required
                    Required: No
                    Type: Boolean
                    Description: If true, the field is marked as required

<a name="SelectData"></a>
#### SelectData
                    Required: No
                    Type: Object
                    Description: If FieldType is SELECT, this is a required attribute to specify the data that will be used to render the select dropdown

<a name="SelectDataIDColumn"></a>
#### SelectDataIDColumn
                    Required: No
                    Type: String
                    Description: If FieldType is SELECT, this is a required attribute to specify the column in SelectData (Usually the ID column in the data) that will be returned when you select an item from the select data

<a name="SelectDataValueColumn"></a>
#### SelectDataValueColumn
                    Required: No
                    Type: String
                    Description: If FieldType is SELECT, this is a required attribute to specify the column in SelectData that will be shown in the select dropdown

<a name="SelectDataEnabledOnly"></a>
#### SelectDataEnabledOnly
                    Required: No
                    Type: Boolean
                    Description: If true, only show fields that are enabled based on a field called Enabled

<a name="SelectDataEnabledOnlyColumn"></a>
#### SelectDataEnabledOnlyColumn
                    Required: No
                    Type: Boolean
                    Description: If SelectDataEnabledOnly is true, you must specify the boolean column in the select data that will be used to test if the row is enabled or not.

<a name="Searchable"></a>
#### Searchable
          Required: No
          Type: Boolean
          Description: If false, disables searching this column. If not set or set to true, searching is enabled for the field. All columns will have searching enabled by default.

<a name="SortableField"></a>
#### SortableField
          Required: No
          Type: Boolean
          Description: If false, disables sorting on the field. If not set or set to true, sorting is enabled for the field. All columns will have sorting enabled by default.

<a name="TogglesIDColumn"></a>
#### TogglesIDColumn
                    Required: No
                    Type: Boolean
                    Description: If true, double clicking on the column header for this field will toggle the ID column. When TogglesIDColumn is true, it will override ClickCallBack and ClickCallBack will not be used even if specified.

### Custom CSS

The styling for many elements in SegiTable can be customized with CSS by editing SegiTable.module.css and overriding the default value for the appropriate CSS class.

Example:

<pre>
.SegiTableAddButton {
     background-color: green !important;
}
</pre>

The following CSS classes can be overridden:

#### SegiTable style:
                 Class name: .SegiTable
                 Description: The style for the entire component

#### Add button style:
                 Class name: .SegiTableAddButton
                 Description: The add button style when adding a row

#### Button style:
                 Class name: .SegiTableButtonStyle
                 Description: The generic button style used by all buttons in SegiTable

#### Cancel button style:
                 Class name: .SegiTableCancelButton
                 Description: The cancel button style when editing or adding a row

#### Table cell style:
                 Class name: .SegiTableDataCell
                 Description: The style for the table cells not including the header

#### Table style:
                 Class name: .SegiTableDataGrid
                 Description: The style for the table

#### Table head:
                 Class name: .SegiTableDataGrid thead
                 Description: The style for the table header

#### Table data style:
                 Class name: .SegiTableDataGrid td
                 Description: The style for the table cells not including the header

#### Table row style:
                 Class name: .SegiTableDataGrid tr
                 Description: The style for the table row not including the header

#### Table even row style:
                 Class name: .SegiTableDataGrid tr:nth-child(even) td:not(.header)
                 Description: The style for the even numbered table rows not including the header. By default, this style is used to set the background color for even rows so every other row has a different color.

#### Excel icon:
                 Class name: .SegiTableExcelIcon
                 Description: The style for the Excel icon if exporting to CSV is enabled

#### Excel editable icon:
                 Class name: .SegiTableExcelIconEditable
                 Description: The style for the Excel icon when editing is enabled if exporting to CSV is enabled

#### Excel read only icon:
                 Class name: .SegiTableExcelIconEditable
                 Description: The style for the Excel icon when editing is not enabled if exporting to CSV is enabled

#### Table grid content:
                 Class name: .SegiTableGridContent
                 Description: The style for the element that contains the table itself

#### Table header style:
                 Class name: .SegiTableDataGridHeader
                 Description: The style for the table header tr tag

#### ID Column style:OK
                 Class name: .SegiTableIDColumn
                 Description: The style for the column marked as the ID column with IsIDColumn

#### Input style:
                 Class name: .SegiTableInputStyle
                 Description: The style for the input fields when editing the table

#### Pagination style:
                 Class name: .SegiTablePagination
                 Description: The style for the pagination bar when pagination has been enabled

#### Pagination style:
                 Class name: .SegiTablePagination
                 Description: The style for the pagination bar when pagination has been enabled

#### Pagination container style:
                 Class name: .SegiTablePaginationContainer
                 Description: The style for the element that contains the entire pagination bar when pagination has been enabled

#### Pagination icon button style:
                 Class name: .SegiTablePaginationIconButton
                 Description: The style for the pagination arrow icons when pagination has been enabled

#### Pagination disabled icon button style:
                 Class name: .SegiTablePaginationIconButtonDisabled
                 Description: The style for the disabled pagination arrow icons when pagination has been enabled
                 
#### Pagination nav container style:
                 Class name: .SegiTablePaginationNavContainer
                 Description: The style for the element that is a child of SegiTablePaginationContainer when pagination has been enabled
                 
#### Pagination span container style:
                 Class name: .SegiTablePaginationSpan
                 Description: The style for the element that is a child of SegiTablePagination when pagination has been enabled

### Pagination 1-X of X text style
                 Class name: .SegiTableRecordStartEnd
                 Description: The style for the text "Page 1-50 of 100" when pagination has been enabled

### Pagination when All rows is shown
                 Class name: .SegiTableRecordStartEnd
                 Description: The style for the text "Page 1-50 of 100" when pagination has been enabled

SegiTableRecordStartEndAll
#### Pagination Rows per page text style:
                 Class name: .SegiTableRecordStartEndAll
                 Description: The style for the text "Page 1-50 of 100" when all rows is selected

#### Pagination Current page text style:
                 Class name: .SegiTableRowCurrentPage
                 Description: The style for the text "Page 1/10" when pagination has been enabled

#### Pagination Rows per page label:
                 Class name: .SegiTableRowLabel
                 Description: The style for the text "Rows per page:" when pagination has been enabled

#### Save button style:
                 Class name: .SegiTableSaveButton
                 Description: The button style for the add button when adding a row or the save button when saving the table.

#### Select button style:
                 Class name: .SegiTableSelectStyle
                 Description: The button style for the select dropdown when adding or editing a row.

#### table border style:
                 Class name: .SegiTableSolidBorder
                 Description: The table border style for the table

### Future features:
Filter data in the column headers similar to how you filter data in Excel
