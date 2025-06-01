import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";
import tasksData from '../../data/tasks.json'

export default function TaskBoard() {
  const [tasks, setTasks] = useState(tasksData)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAddTask = () => {
    console.log('add task')
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleSaveTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const handleDeleteAll = () => {
    console.log('delete all')
  } 

  return (
    <div>
      <section className="mb-20" id="tasks">
        <div className="container">
          {/* search option  */}
          <div className="p-2 flex justify-end">
            <SearchTask />
          </div>
          {/* task action and list  */}
          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction handleAddTask={handleAddTask} handleDeleteAll={handleDeleteAll} />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </section>
      
      {/* Add Task Modal */}
      <AddTaskModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
      />
    </div>
  );
}
