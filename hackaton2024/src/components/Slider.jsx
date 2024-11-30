import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: 'Bardzo Słabo',
  },
  {
    value: 2,
    label: 'Słabo',
  },
  {
    value: 3,
    label: 'Średnio',
  },
  {
    value: 4,
    label: 'Dobrze',
  },
  {
    value: 5,
    label: 'Bardzo dobrze',
  },
];

function valuetext(value) {
  return `${value}`;
}

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={3}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
