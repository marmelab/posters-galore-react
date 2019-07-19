import React from 'react';
import Typography from '@material-ui/core/Typography';

export default ({ record }) => (
    <Typography>
        {record.first_name} {record.last_name}
    </Typography>
);
