import { BaseSchema } from './base.schema';
import { BaseEntity } from 'typeorm';

class TestEntity extends BaseEntity {}

export const TestMapper = new BaseSchema<TestEntity>({
  name: TestEntity.name,
  tableName: 'test_table',
  target: TestEntity,
  columns: {},
  relations: {},
});
