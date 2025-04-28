#### Documentation

SegiTable has the following props. Some of the props are required and some are not required but can be used to enable or disable certain features.

When you render SegiTable, there is validation that makes sure that you provide props that are required and do not provide props that do not make sense such as providing both isEditable={false} and isEditing={isEditing}.

- Props
    - [addingHasDisabledCheckboxPlaceholder](#addingHasDisabledCheckboxPlaceholder)
    - [addingText](#addingText)
    - [addtlPageSizes](#addtlPageSizes)
    - [cancelEditCallBackHandler](#cancelEditCallBackHandler)
    - [defaultPageSize](#defaultPageSize)    
    - [editable](#editable)
    - [exportable](#exportable)
    - [height](#height)
    - [isAdding](#isAdding)
    - [isEditing](#isEditing)
    - [pageSizeOverride](#pageSizeOverride)
    - [paginationEnabled](#paginationEnabled)
    - [saveAddCallBackHandler](#saveAddCallBackHandler)
    - [saveEditCallBackHandler](#saveEditCallBackHandler)
    - [searchable](#searchable)
    - [setIsAdding](#setIsAdding)
    - [setIsEditing](#setIsEditing)
    - [showDisabled](#showDisabled)
    - [sortable](#sortable)
    - [tableTemplate](#tableTemplate)
        - [ITableComponent](#ITableComponent)
            - [Data](#Data)
            - [ExpandableContent](#ExpandableContent)
            - [ExpandableDataColumn](#ExpandableDataColumn)
            - [ExpandableDataLinked](#ExpandableDataLinked)
            - [Fields](#Fields)
                - [Addable](#Addable)
                - [Centered](#Centered)
                - [Clickable](#Clickable)
                - [ClickCallBack](#ClickCallBack)
                - [Columns](#Columns)
                - [DatabaseColumn](#DatabaseColumn)
                - [DefaultAddValue](#DefaultAddValue)
                - [Disabled](#Disabled)
                - [DisplayName](#DisplayName)
                - [ExpandableCriteria](#ExpandableCriteria)
                - [ExpandableCriteriaExactMatch](#ExpandableCriteriaExactMatch)
                - [FieldType](#FieldType)
                - [FieldValue](#FieldValue)
                - [FieldValueType](#FieldValueType)
                - [Filterable](#Filterable)
                - [HiddenField](#HiddenField)
                - [IsEmailAddress](#IsEmailAddress)
                - [IsIDColumn](#IsIDColumn)
                - [IsEnabledColumn](#IsEnabledColumn)
                - [IsURL](#IsURL)
                - [IsURLButton](#IsURLButton)
                - [IsURLColumn](#IsURLColumn)
                - [IsURLText](#IsURLText)
                - [Required](#Required)
                - [Rows](#Rows)
                - [SelectData](#SelectData)
                - [SelectDataIDColumn](#SelectDataIDColumn)
                - [SelectDataValueColumn](#SelectDataValueColumn)
                - [SelectDataEnabledOnly](#SelectDataEnabledOnly)
                - [SelectDataEnabledOnlyColumn](#SelectDataEnabledOnlyColumn)
                - [SearchableField](#SearchableField)
                - [SortableField](#SortableField)
                - [TogglesIDColumn](#TogglesIDColumn)
            - [MultiExpandableRows](#MultiExpandableRows)
    - [width](#width)
### ITableComponent:

#### Index
<a name="addingHasDisabledCheckboxPlaceholder"></a>
#### addingHasDisabledCheckboxPlaceholder
	       Required: No
	       Type: Boolean
	       Description: If true, will show a cell in the add row with a disabled checkbox that shows Enabled in the column header to indicate that this row will be added as an 'Enabled' row by default.

<a name="addingText"></a>
#### addingText
	       Required: No
	       Type: String
	       Description: The text that will be displayed in the Add button when adding a row. If not provided, the add button will show "Add"

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

<a name="editable"></a>
#### editable
	       Required: No
	       Type: Boolean
	       Description: If false, the table cannot be edited. If not set or set to true, it can be edited.

<a name="exportable"></a>
#### exportable
	       Required: No
	       Type: Boolean
	       Description: Exporting to CSV is disabled by default. If false, the table cannot be exported to CSV.

<a name="height"></a>
#### height
     Required: No
     Type: String
     Description: The height of the table. If not provided, the table will span the height needed. If you do set a height, the table header will be sticky which means it will stay in place no matter how many rows you select in the rows per page dropdown.

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

<a name="paginationEnabled"></a>
#### paginationEnabled
          Required: No
          Type: Boolean
          Description: Pagination is disabled by default. If true, enables paginating the table data into pages

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

<a name="searchable"></a>
#### searchable
          Required: No
          Type: Boolean
          Description: Searching is disabled by default. If set to true, enables a search field to allow searching the data in the table. Searching can be disabled for individual columns by setting SearchableField to false for the field

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

<a name="sortable"></a>
#### sortable
          Required: No
          Type: Boolean
          Description: Sorting is disabled by default. If true, enables sorting of the table. Sorting can be disabled for individual columns by setting SortableField to false for the field

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

<a name="Data"></a>
#### Data
	       Required: Yes
	       Type: Object
	       Description: The object that holds the data that you want to render. The data needs to have key value pairs for each row like "Name": "foo"

<a name="ExpandableContent"></a>
#### ExpandableContent
	       Required: No
	       Type: Object or string
	       Description: A string with HTML content or a component to show when you expand the row. You can render a SegiTable table as the expandable row content. It is possible to currently tie the expanded row to its parent.

<a name="ExpandableDataColumn"></a>
#### ExpandableContent
	       Required: No
	       Type: String
	       Description: If ExpandableDataLinked is set to true, set this to the column used to link the parent and child rows.

<a name="ExpandableDataColumnLinked"></a>
#### ExpandableContentLinked
	       Required: No
	       Type: Boolean
	       Description: If true, the expandable data can be tied to the parent. If using this feature, set ExpandableDataColumn to the name of the column in the database to use to link the data. This should be a non nullable database column, preferably the primary key column.

<a name="Fields"></a>
#### Fields
          Required: Yes
          Type: ITableComponentField
          Description: ITableComponentField object that describes the fields in the table data. See ITableComponentField reference below.

<a name="MultiExpandableRows"></a>
#### MultiExpandableRows
          Required: Yes
          Type: Boolean
          Description: If true, you can have more than 1 expandable row open at a time
<br /> <br /> <br /> 

### ITableComponentField:

<a name="Addable"></a>
#### Addable
	       Required: No
	       Type: Boolean
	       Description: If false, this field cannot be added when adding a new row. If not set or set to true, it can be added

<a name="Centered"></a>
#### Centered
	       Required: No
	       Type: Boolean
	       Description: If true, will center the text inside of the cell

<a name="Clickable"></a>
#### Clickable
                    Required: No
                    Type: Boolean
                    Description: If true, this will add a CSS class on the column header to make it have a mouse pointer when you hover over the column. This can be used to perform an action when you click on the column header

<a name="ClickCallBack"></a>
#### ClickCallBack
                    Required: No
                    Type: Method
                    Description: Method to call when the column header has been clicked. If you use this, Clickable will automatically be set to true so the column turns into a mouse pointer when you hover over the column name. Do not set this with TogglesIDColumn. Only use one or the other but not both

<a name="Columns"></a>
#### Columns
                    Required: No
                    Type: Number
                    Description: When the field type is TEXTAREA, the number of columns to display the text area with. Only provide this for a textarea field

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
#### DisplayName
          Required: Yes
          Type: String
          Description: The column header text

<a name="ExpandableCriteria"></a>
#### ExpandableCriteria
          Required: No
          Type: Array
          Description: The criteria to determine whether to display an expandable row for the current row. This is defined as a key/value pair in the format ExpandableCriteria: [{ Match: "Roch", Show: "&lt;h1 style='background-color: green;'&gt;This is a test message</h1&gt;" }, { Match: "Her", Show: "&lt;h1 style='background-color: red;'&gt;This is a test message&lt;/h1&gt;" }]``` which will match when the field value contains 'John' or 'Jane'. Set Match to "*" to have a for the default for all rows. which will use the provided Show html. If you provide an array and do not see any expandable rows, it means that no rows matched the criteria.

<a name="ExpandableCriteriaExactMatch"></a>
#### ExpandableCriteriaExactMatch
          Required: No
          Type: Boolean
          Description: Determines whether to do an exct or partial match. This is true by default unless you set this to false. A partial match is case insensitive but an exact match is case sensitive.

<a name="FieldType"></a>
#### FieldType
                    Required: Yes
                    Type: 
                        FieldTypes.TEXTFIELD for a text field
                        FieldTypes.TEXTAREA for a text area. When using a textarea, you can specify the rows and columns with rows={} and columns={} on the field. TEXTAREA is only valid for FieldValueTypes TEXT or NUMBER.
                        FieldTypes.SELECT for a select dropdown
                        FieldTypes.CHECKBOX for a CHECKBOX
                    Description: The type of field you want to display the text as when editing the field

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
                         FieldValueTypes.CURRENCY for currency data
                    Description: The data type for the field. This is not required when you set IsIDColumn to true because an ID column is not editable but is required otherwise.

<a name="Filterable"></a>
#### Filterable
	       Required: No
	       Type: Boolean
	       Description: If true, the table can be filtered by clicking on the down arrow icon in the column header. 

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

<a name="IsEmailAddress"></a>
#### IsEmailAddress
                    Required: No
                    Type: Boolean
                    Description: If true, indicates that the field is an email column and will be displayed as a mailto: hyperlink. Do not provide both IsEmailColumn and IsURL for the same field. You can only use one or the other.

<a name="IsEnabledColumn"></a>
#### IsEnabledColumn
                    Required: No
                    Type: Boolean
                    Description: If true, indicates that the field is a boolean column that can be used when showDisabled is set to true to determine whether to hide or show the field based on an enabled status 

<a name="IsURL"></a>
#### IsURL
                    Required: No
                    Type: Boolean
                    Description: If true, indicates that the field is a URL and wll be displayed as a hyper link.

<a name="IsURLButton"></a>
#### IsURLButton
                    Required: No
                    Type: Boolean
                    Description: If true, will display a button as the link instead of using a traditional hyperlink

<a name="IsURLColumn"></a>
#### IsURLColumn
                    Required: No
                    Type: String
                    Description: If provided, indicates that the name of the database column that will be used to display as the text of the hyperlink text.

<a name="IsURLText"></a>
#### IsURLText
                    Required: No
                    Type: String
                    Description: If provided, indicates the text that will be used to display the link

<a name="Required"></a>
#### Required
                    Required: No
                    Type: Boolean
                    Description: If true, the field is marked as required

<a name="Rows"></a>
#### Rows
                    Required: No
                    Type: Number
                    Description: When the field type is TEXTAREA, the number of rows to display the text area with. Only provide this for a textarea field

<a name="Searchable"></a>
#### Searchable
          Required: No
          Type: Boolean
          Description: If false, disables searching this column. If not set or set to true, searching is enabled for the field. All columns will have searching enabled by default.

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

### Collapsible/Expandable Arrow icon
                 Class name: SegiTableArrow
                 Description: The arrow icon for collapsible/expandable rows

### Collapsible/Expandable Arrow icon
                 Class name: SegiTableArrow
                 Description: The arrow icon for collapsible/expandable rows

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

#### Filter grid
                 Class name: .SegiTableFilterGrid
                 Description: The style for the filter grid that appears when you click on the filter icon if filtering is enabled

#### Filter grid
                 Class name: .SegiTableFilterGridOption
                 Description: The style for the filter grid options that appears when you click on the filter icon if filtering is enabled

#### Filter icon
                 Class name: .SegiTableFilterIcon
                 Description: The style for the filter icon if filtering is enabled

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

#### URL button
                 Class name: .SegiTableURLButton
                 Description: The button displayed for a link