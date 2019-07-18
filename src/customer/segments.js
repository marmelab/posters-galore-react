import React from 'react';
import { SelectArrayInput, Title } from 'react-admin';

import {
    Button,
    Card,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';

const SEGMENTS = ['collector', 'compulsive', 'ordered_once', 'regular', 'returns', 'reviewer'];

const SEGMENT_CHOICES = SEGMENTS.map(item => ({
    id: item,
    name: item,
}));

export const SEGMENT_LABEL = 'Segments';

export const SegmentCard = () => (
    <Card>
        <Title title={SEGMENT_LABEL} />
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {SEGMENTS.map(segment => (
                    <TableRow key={segment}>
                        <TableCell>{segment}</TableCell>
                        <TableCell>
                            <Button
                                href={`#/customers?filter=%7B"groups"%3A%5B"${segment}"}"%5D%7D`}
                            >
                                Customers
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Card>
);

export const SegmentsField = ({ record }) => (
    <div>{record.groups && record.groups.map(item => <Chip key={item} label={item} />)}</div>
);
SegmentsField.defaultProps = { label: SEGMENT_LABEL };

export const SegmentSelectArrayInput = () => (
    <SelectArrayInput label={SEGMENT_LABEL} source="groups" choices={SEGMENT_CHOICES} />
);
