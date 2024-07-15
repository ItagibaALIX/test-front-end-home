import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { useTypedController } from "@hookform/strictly-typed"
import { useForm } from 'react-hook-form';
import {  Button, TextField } from '@mui/material';

type DessertDetail = {
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
}

type DrawerListProps = {
  data: DessertDetail | null,
  onClose: () => void
  saveForm: React.Dispatch<React.SetStateAction<DessertDetail[]>>
}

const DrawerTableDessert = (props: DrawerListProps) => {
  const { data, onClose, saveForm } = props

  const { handleSubmit, control } = useForm<DessertDetail>({
    mode: "onChange",
    defaultValues: data ?? { name: "", calories: 0, fat: 0, carbs: 0, protein: 0 }
  })

  const TypedController = useTypedController<DessertDetail>({ control })

  const handleOnSubmit = (form: DessertDetail) => {
    saveForm((oldValue) => {
      const newValue = oldValue.map((field) => {
        if (field.name === form.name) {
          return form
        } else {
          return field
        }
      })
      return (newValue) 
    }) 
    onClose()
  }

  return (
    <div>
      <Drawer open={data ? true : false} anchor={"right"} onClose={onClose}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Box sx={{ width: 600 }} className="p-8" role="presentation" >
            <h1 className="text-xl font-bold">
              Edit Dessert 
            </h1>
            <div className='flex flex-col gap-4 m-4'>
              <TypedController
                name="name"
                disabled
                render={({ value, onChange }) => (
                  <div className="flex flex-row items-center">
                    <TextField value={value} onChange={onChange} label="Name" disabled />
                  </div>
                )}
              />
              <TypedController
                name="calories"
                render={({ value, onChange }) => (
                  <div className="flex flex-row items-center">
                    <TextField value={value} onChange={onChange} label="Calories" />
                  </div>
                )}
              />
              <TypedController
                name="fat"
                render={({ value, onChange }) => (
                  <div className="flex flex-row items-center">
                    <TextField value={value} onChange={onChange} label="Fat" />
                  </div>
                )}
              />
              <TypedController
                name="carbs"
                render={({ value, onChange }) => (
                  <div className="flex flex-row items-center">
                    <TextField value={value} onChange={onChange} label="Carbs" />
                  </div>
                )}
              />
              <TypedController
                name="protein"
                render={({ value, onChange }) => (
                  <div className="flex flex-row items-center">
                    <TextField value={value} onChange={onChange} label="Protein" />
                  </div>
                )}
              />
            </div>
            <div className='p-4'>
              <Button type="submit" variant="contained">Save</Button>
            </div>
            <Divider />
          </Box>
        </form>
      </Drawer>
    </div>
  );
}

export default DrawerTableDessert