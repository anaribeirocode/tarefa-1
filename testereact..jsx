import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');
    const [showCompleted, setShowCompleted] = useState(false);

    function addTask() {
        if (taskName !== '') {
            setTasks([...tasks, { name: taskName, completed: false}]);
            setTaskName('');
        }
}

  function toggleTaskStatus(index) {
        const newTasks = [...tasks];
        newTasks[index]
            .completed = !newTasks[index].completed;
        setTasks(newTasks);
 }
    function handleFilter() {
        setShowCompleted(!showCompleted);
    
  }

    return (
        <div>
            <h2>Lista de Tarefas Mega incrível</h2>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Nova tarefa";
            <button onClick={addTask}>Adicionar</button>
            <button onClick={handleFilter}>
                {showCompleted ? 'Ver Todas' : 'Ver Finalizadas'}
            </button>
       <ul>
                {tasks
                    .filter(task => (showCompleted ? task.completed : true))
                    .map((task, index) => (
                     <li key={index}>
                            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                                {task.name}
                            </span>
                            <button onClick={() => toggleTaskStatus(index)}>
                                {task.completed ? 'Desmarcar' : 'Concluir'}
                            </button>
                     </li>
               ))}
      </ul>
   </div>
 );
}

export default TaskList;

//foi bem trabalhoso, tentei desenvolver da melhor forma possível.
//acredito que por trás dos erros e das tentativas existe um ganho de conhecimento.
