// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Drink } = initSchema(schema);

export {
  Drink
};