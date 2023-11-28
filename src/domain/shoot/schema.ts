// Modifier le nom des colonnes
import { JSONSchemaType } from 'ajv';
import { ShootSchema } from './Types';

const shootSchema: JSONSchemaType<ShootSchema> = {
  type: 'object',
  properties: {
    is_Goal: { type: 'boolean' },
    shooter_id: { type: 'number' },
    goalkeeper_id: { type: 'number' },
    match_id: { type: 'number' },
  },
  required: ['is_Goal', 'shooter_id', 'goalkeeper_id', 'match_id'],
  additionalProperties: false,
};

const shootUpdateSchema: JSONSchemaType<ShootSchema> = {
  type: 'object',
  properties: {
    is_Goal: { type: 'boolean' },
    shooter_id: { type: 'number' },
    goalkeeper_id: { type: 'number' },
    match_id: { type: 'number' },
  },
  required: [],
  additionalProperties: false,
};

export { shootSchema, shootUpdateSchema };