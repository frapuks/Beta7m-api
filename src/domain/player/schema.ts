import { JSONSchemaType } from 'ajv';
import { PlayerSchema } from './Types';

const playerSchema: JSONSchemaType<PlayerSchema> = {
  type: 'object',
  properties: {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    is_goalkeeper: { type: 'boolean' },
  },
  required: ['first_name', 'last_name', 'is_goalkeeper'],
  additionalProperties: false,
};

const playerUpdateSchema: JSONSchemaType<PlayerSchema> = {
  type: 'object',
  properties: {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    is_goalkeeper: { type: 'boolean' },
  },
  required: [],
  additionalProperties: false,
};

export { playerSchema, playerUpdateSchema };