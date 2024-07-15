import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import DrawerTableDessert from '../Drawers/DrawerTableDessert';
import { DessertDetail } from '../../Pages/Dashboard';

const TableDessert = () => {
  const [dataMainDrawer, setDataMainDrawer] = useState<DessertDetail | null>(null)
  const [dessetData, setDessertData] = useState<Array<DessertDetail>>([
    { name:'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
    { name:'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
    { name:'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
    { name:'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { name:'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
  ]);

  return (
    <>
      <div className='rounded-lg overflow-hidden shadow-light-300 shadow-lg'>
        <TableContainer component={Paper} >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{backgroundColor: "#EFF6F6"}}>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="left">Calories</TableCell>
                <TableCell align="left">Fat&nbsp;(g)</TableCell>
                <TableCell align="left">Carbs&nbsp;(g)</TableCell>
                <TableCell align="left">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dessetData.map((row) => (
                <TableRow 
                  onClick={() => {setDataMainDrawer(row)}}
                  key={row.name}
                  className='hover:cursor-pointer hover:bg-gray-100'
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {
          dataMainDrawer &&
          <DrawerTableDessert
            data={dataMainDrawer}
            onClose={() => {setDataMainDrawer(null)}}
            saveForm={setDessertData}
          />
        }
      </div>
    </>
  );
}

export default TableDessert