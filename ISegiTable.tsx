export const FieldTypes = Object.freeze({
     TEXTFIELD: 'TEXTFIELD',
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
     AddingText?: string;
     AddingHasDisabledCheckboxPlaceholder?: boolean;
     AllowExportCSV?: boolean;
     Data: any;
     Editable?: boolean;     
     Fields: ITableComponentField[];
     PaginationEnabled?: boolean;
     Searchable?: boolean;
     Sortable?: boolean;
}

export interface ITableComponentField {
     Addable?: boolean;
     Clickable?: boolean;
     ClickCallBack?: () => void;
     DatabaseColumn: string;
     DefaultAddValue?: any;
     Disabled?: boolean;
     DisplayName: string;     
     FieldType: FieldTypesType;
     FieldValue: string | number;
     FieldValueType: FieldValueTypes;
     HiddenField?: boolean;
     IsIDColumn: boolean;
     IsEnabledColumn: boolean;
     Required: boolean;
     SelectData?: any;
     SelectDataIDColumn?: string;
     SelectDataValueColumn?: string;
     SelectDataEnabledOnly?: boolean;
     SelectDataEnabledOnlyColumn?: string;
     SearchableField?: boolean;
     SortableField?: boolean;
     TogglesIDColumn?: boolean; // If true, when you double click on the column header for this field, it toggles the ID column     
}