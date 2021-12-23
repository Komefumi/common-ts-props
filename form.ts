type HTMLInputFieldType = "text" | "number" | "color" | "date" | "textarea";

export interface IFormFieldPayload extends Array<string> {
  0: string; // Label
  1: string; // Name
  2: HTMLInputFieldType; // Type of field
}

export type FormFieldPayloadList = IFormFieldPayload[];
