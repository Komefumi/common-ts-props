export interface ITwoItemPayload<T, K> extends Array<any> {
  0: T;
  1: K;
}
export type ListOfTwoItemPayloads<T, K> = ITwoItemPayload<T, K>[];

export interface IDoubleStringPayload extends ITwoItemPayload<string, string> {}
// export type DoubleStringList = IDoubleStringPayload[];
export type DoubleStringList = ListOfTwoItemPayloads<string, string>;

/*
 * Use case: making an item like ["link-name", "/link-path"]
 * Make an array of such arrays, and loop through them to render links
 * for them in a DRY manner.
 * */
export interface ILinkPayload extends IDoubleStringPayload {}
export type LinkPayloadList = DoubleStringList;
