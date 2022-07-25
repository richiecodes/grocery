import AddTask from './components/AddTask';
import { VStack, Heading } from "@chakra-ui/react";
import TaskList from './components/TaskList';

export default function App() {
  return (
    <VStack p={4} minH="100vh">
      <Heading mt="20" p="5" fontWeight="extrabold" size="xl" bgGradient="linear(to-l, teal.300, blue.500)" bgClip="text">
        Grocery List
      </Heading>
      <AddTask />
      <TaskList />
    </VStack>
  )
}