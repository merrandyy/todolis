<script lang="ts">
    import {tasks} from "$lib/stores/tasks";
	import dayjs from "dayjs";

    let title="";
    let datetime= dayjs().format("YYYY-MM-DDThh:mm");

function addTask() {
    tasks.update((currentTasks) => {
        currentTasks.push({
            title,
            assignedDate: dayjs().format(),
            isDone: false,
        });
    
        return currentTasks;
});
}

</script>


<div class="input-group input-group-divider flex flex-col sm:flex-row justify-between !bg-white">
	<input bind:value={title} class="flex-1 " type="search" placeholder="عنوان المهمة" />
    <input bind:value={datetime} class="input w-fit" title="Input (datetime-local)" type="datetime-local" />
	<button on:click={addTask} class="variant-filled-primary"> <span class="mx-auto p-1"> اضافة</span></button>
</div>