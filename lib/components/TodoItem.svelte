<script>
  import { useTodoState } from "$lib/states/todoState.svelte.js";
  let todoState = useTodoState();
  let { todo } = $props();
</script>

<input
  type="checkbox"
  onchange={() => todoState.changeDone(todo.id)}
  id={todo.id}
/>
<label for={todo.id}>
  {todo.name} ({todo.done ? "done" : "not done"})
</label>
<button onclick={() => todoState.remove(todo.id)}>Remove</button>