import { ChangeEvent, useState } from 'react'

const useForm = <T extends {}>(initial: T) => {
  const [form, setForm] = useState<T>(initial)
  const handleChanges = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event
    setForm({
      ...form,
      [target.name]: target.value
    })
  }

  const cleanForm = () => {
    setForm(initial)
  }

  return {
    form,
    handleChanges,
    cleanForm
  }
}

export default useForm