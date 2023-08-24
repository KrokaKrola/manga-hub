import {
    EntitySchema,
    EntitySchemaColumnOptions,
    EntitySchemaOptions,
} from 'typeorm';
import { BaseEntity } from '../utils/base.entity';

export class BaseSchema<T> extends EntitySchema<T> {
    constructor(props: EntitySchemaOptions<T> & { createdAt?: boolean }) {
        const additionalColumns: {
            [K in keyof BaseEntity]: EntitySchemaColumnOptions;
        } = {
            id: {
                type: Number,
                primary: true,
                generated: true,
            },
        };

        if (props.createdAt !== false) {
            additionalColumns.createdAt = {
                name: 'created_at',
                type: 'timestamp with time zone',
                createDate: true,
            };
        }

        props.columns = {
            ...additionalColumns,
            ...props.columns,
        };

        super(props);
    }
}
