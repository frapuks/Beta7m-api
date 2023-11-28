import { JSONSchemaType } from 'ajv';
import { MatchSchema } from './Types';

const matchSchema: JSONSchemaType<MatchSchema> = {
  type: 'object',
  properties: {
    players_victory: { type: 'boolean' },
  },
  required: ['players_victory'],
  additionalProperties: false,
};

const matchUpdateSchema: JSONSchemaType<MatchSchema> = {
  type: 'object',
  properties: {
    players_victory: { type: 'boolean' },
  },
  required: [],
  additionalProperties: false,
};

export { matchSchema, matchUpdateSchema };