import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import * as React from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
         width: 250,
      },
   },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
   return {
      fontWeight:
         personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
   };
}

export default function MultipleSelectChip({
   allSpecialties,
   setSelectedIds,
   selectedIds,
}: any) {
   const theme = useTheme();

   const handleChange = (event: SelectChangeEvent<typeof selectedIds>) => {
      const {
         target: { value },
      } = event;

      setSelectedIds(typeof value === 'string' ? value.split(',') : value);
   };

   return (
      <div>
         <FormControl sx={{ width: '100%' }}>
            <InputLabel
               id='demo-multiple-chip-label'
               sx={{ mt: selectedIds.length > 0 ? 0 : -1 }}
            >
               Specialties
            </InputLabel>
            <Select
               labelId='demo-multiple-chip-label'
               id='demo-multiple-chip'
               multiple
               value={selectedIds}
               onChange={handleChange}
               input={
                  <OutlinedInput
                     id='select-multiple-chip'
                     label='Specialties'
                     size='small'
                  />
               }
               renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                     {selected.map((value: any) => (
                        <Chip
                           size='small'
                           key={value}
                           label={
                              allSpecialties.find(
                                 (item: any) => item.id === value
                              )
                                 ? `${
                                      allSpecialties.find(
                                         (item: any) => item.id === value
                                      )?.title
                                   }`
                                 : ''
                           }
                        />
                     ))}
                  </Box>
               )}
               MenuProps={MenuProps}
            >
               {allSpecialties?.map((item: any) => (
                  <MenuItem
                     key={item?.id}
                     value={item.id}
                     style={getStyles(item.id, selectedIds, theme)}
                  >
                     {item?.title}
                  </MenuItem>
               ))}
            </Select>
         </FormControl>
      </div>
   );
}
