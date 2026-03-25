'use client';

import { Button, Card, CardContent, TextField, Typography, Box } from '@mui/material';
import { useState } from 'react';

export default function MuiExample() {
  const [count, setCount] = useState(0);

  return (
    <Box sx={{ padding: 4 }}>
      <Card sx={{ maxWidth: 400 }}>
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            Material Design 3 Example
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Count: {count}
          </Typography>
          <TextField
            label="Enter text"
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount(count + 1)}
            fullWidth
          >
            Increment
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
