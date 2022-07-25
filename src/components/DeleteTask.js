import { IconButton, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FiTrash2 } from 'react-icons/fi'
import supabase from "../supabase";


export default function DeleteTask({ id }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  async function handleDelete() {
    setLoading(true);
    const { data, error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    setLoading(false);

    toast({
      title: error || 'Task Deleted!',
      position: 'top',
      status: error ? 'error' : 'success',
      duration: 2000,
      isClosable: true
    })
  }

  return <IconButton isRound icon={<FiTrash2 />} onClick={handleDelete} isLoading={loading} />
}