import { Document, model, Schema, SchemaTypes } from "mongoose";
import { DataSourceSchema, IDataSource } from "./datasource";

export interface IFormField {
    name: string;
    jpath: string;
    type: string; /* input type = hidden, text, select, radio, checkbox, email, date */
    defaultValue?: string;
    dataSource?: IDataSource;
}

export interface IFormFieldModel extends Document, IFormField {
}

export const FormFieldSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    jpath: {
        required: true,
        type: String,
    },
    type: {
        required: true,
        type: String,
    },
    defaultValue: String,
    dataSource: DataSourceSchema,
});

const FormField = model<IFormFieldModel>("FormField", FormFieldSchema);

export default FormField;