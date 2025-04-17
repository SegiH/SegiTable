export const FieldTypes = Object.freeze({
     TEXTFIELD: 'TEXTFIELD',
     TEXTAREA: 'TEXTAREA',
     SELECT: 'SELECT',
     CHECKBOX: 'CHECKBOX'
});

type FieldTypesType = keyof typeof FieldTypes;

export const FieldValueTypes = Object.freeze({
     TEXT: 'TEXT',
     NUMBER: 'NUMBER',
     DATE: 'DATE',
     BOOLEAN: 'BOOLEAN'
});

type FieldValueTypes = keyof typeof FieldValueTypes;

export interface ITableComponent {
     Data: any;
     Fields: ITableComponentField[];
}

export interface ITableComponentField {
     Addable?: boolean; // Indicates whether this field is addable
     Clickable?: boolean; // Indicates whether the column header clickable
     ClickCallBack?: () => void; // Callback event to be called when you click on the column header
     Columns?: number; // The number of columns for a textarea
     DatabaseColumn: string; // The database column in the data. This will be the name of the field in the data
     DefaultAddValue?: any; // The default value when addding the field
     Disabled?: boolean; // Disable a field from being added
     DisplayName: string; // The name of the column header
     FieldType: FieldTypesType; // The type of field based on one of the FieldTypes
     FieldValue: string | number; // The value of the field. This is used when adding
     FieldValueType: FieldValueTypes; // The type of value (text, number, date etc) based on FieldValueTypes
     Filterable: boolean; // Indicates whether this field is filterable
     HiddenField?: boolean; // Hide this field when not editing the table
     IsEmailAddress?: boolean; // Indicates that this is an email address field
     IsIDColumn: boolean; // Indicates that this is an ID field
     IsEnabledColumn: boolean; // Indicates whether this field is used to determine whether to hide or show enabled fields when showDisable is provided
     IsURL?: boolean; // Indicates that this is a URL field
     IsURLColumn?: string; // Specify the database column name in the data that is used as the hyperlink text when displaying a URL
     Required: boolean; // Indicates that this is a required field
     Rows?: number; // The number of rows for a textarea
     SelectData?: any; // When the field type is SELECT, the data used to render the select drop down
     SelectDataIDColumn?: string; // When the field type is SELECT, the database column that is returned when you select a value in the select dropdown, usually an ID column
     SelectDataValueColumn?: string; // When the field type is SELECT, the value column that is displayed in the select
     SelectDataEnabledOnly?: boolean; // When the field type is SELECT, indicates that you only want to show enabled values in the select
     SelectDataEnabledOnlyColumn?: string; // When the field type is SELECT and you only want to show enabled values in the select, the column in the select data that determines whether the data is enabled
     SearchableField?: boolean; // Indicates whether the field can be searched when search is enabled
     SortableField?: boolean; // indicates whether the field can be sorted
     TogglesIDColumn?: boolean; // If true, when you double click on the column header for this field, it toggles the ID column     
     UniqueValues?: any[]; // Array that stores unique filter values
     UniqueValuesSelected?: any[]; // Array that stores select filter values
     UniqueValuesSelectAllSelected?: boolean; // Indicates whether select all is checked in the filter values
}