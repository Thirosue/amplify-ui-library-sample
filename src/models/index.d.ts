import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type DrinkMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Drink {
  readonly id: string;
  readonly Name?: string;
  readonly Description?: string;
  readonly Star?: number;
  readonly Price?: number;
  readonly ImageUri?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Drink, DrinkMetaData>);
  static copyOf(source: Drink, mutator: (draft: MutableModel<Drink, DrinkMetaData>) => MutableModel<Drink, DrinkMetaData> | void): Drink;
}