import { Divider } from '@mui/material';
import TableDessert from '../components/Tables/TableDessert';

export type DessertDetail = {
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
}

export type PriceType = {
  code: string,
  symbol: string,
  rate: string,
  description: string,
  rate_float: string
}


const Dashboard = () => {
  return (
    <>
      <h2 className="text-xl text-gray-500 font-bold pt-4">
        Dessert 
      </h2>
      <TableDessert />  
      <div className='py-4'>
        <Divider />
      </div>
    </>
  );
}

export default Dashboard