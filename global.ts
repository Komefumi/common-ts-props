/*
 * Use case: making an item like ["link-name", "/link-path"]
 * Make an array of such arrays, and loop through them to render links
 * for them in a DRY manner.
 * */
export interface ILinkPayload extends Array<string> {
  0: string;
  1: string;
}

export type LinkPayloadList = ILinkPayload[];
