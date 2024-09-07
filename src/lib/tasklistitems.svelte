<script lang="ts">
    import dayjs from "dayjs";
    import {tasks} from "$lib/stores/tasks";
    import relativeTime from 'dayjs/plugin/relativeTime'
    dayjs.extend(relativeTime);
    import { getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
    import { slide } from 'svelte/transition';
	  
    import { filter } from "$lib/stores/filter";

    const modalStore = getModalStore();
    export let donetasks: boolean;


    function confirmdelet(task: Task){
    const modal: ModalSettings = {
	type: 'confirm',
	// Data
	title: "متاكد تبغا تحذف ؟",
	body:`سيتم حذف المهمة: "${task.title}"` ,
	// TRUE if confirm pressed, FALSE if cancel pressed
    buttonTextCancel: "الغاء",
    buttonTextConfirm: "تاكيد",
    response: (r: boolean) => {
        if (r) {
            tasks.update((currentTasks) => {
                let index = currentTasks.indexOf(task);
                currentTasks.splice(index,1);
                return currentTasks;
            })
        }
    }
};
modalStore.trigger(modal); }

function applyFilter (filter: typeof $filter, task: Task): boolean {
  switch (filter) {
    case "مهام اليوم" :
      return dayjs(task.assignedDate).unix() - dayjs().unix() <= 24*60*60;
      case "جميع المهام" :
      default:
        return true;
      }
}

</script>

{#each $tasks as task}
    {#if task.isDone===donetasks && applyFilter($filter, task)}
    <li transition:slide
     class=" bg-secondary-500 items-center p-1.5 rounded-lg flex justify-between">
      <div>
        <input bind:checked={task.isDone} class="checkbox w-6 h-6 rounded-lg " type="checkbox" >
      <span class=" mr-2">
        {task.title}
      </span>
      </div>
      <div class=" flex gap-1.5">
        <button class="btn variant-filled-surface hover:bg-surface-700 text-black">
            {dayjs().to(dayjs(task.assignedDate))}
          </button>
          <button  on:click={() => confirmdelet(task)} 
            class="btn variant-filled-surface hover:bg-surface-700 text-black p-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 " viewBox="0 0 24 24">
                <path fill="currentColor" d="m20.37 8.91l-1 1.73l-12.13-7l1-1.73l3.04 1.75l1.36-.37l4.33 2.5l.37 1.37zM6 19V7h5.07L18 11v8a2 
                2 0 0 1-2 2H8a2 2 0 0 1-2-2m2 0h8v-6.8L10.46 9H8z"/></svg>
          </button>
      </div>
    </li>
    {/if}
    {/each}