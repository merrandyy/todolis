<script lang="ts">
    import dayjs from "dayjs";
    import {tasks} from "$lib/stores/tasks";
    import relativeTime from 'dayjs/plugin/relativeTime'
    dayjs.extend(relativeTime);
    import Tasklistitems from "$lib/tasklistitems.svelte"
    import { fade } from "svelte/transition";

</script>


{#if $tasks.length == 0}
 <div class="flex flex-col justify-center text-gray-500 items-center h-[50dvh] "> 
  <img src="/sun.png" class=" h-20 w-20" alt="img"/>
  ابدأ مهامك
</div>

{:else}
{#if $tasks.filter((task) => !task.isDone).length > 0}
<ol transition:fade class="gap-2 flex flex-col">
  <h3> المهام المتبقية</h3>
  <Tasklistitems donetasks={false}/>
</ol>
{/if}

{#if $tasks.filter((task) => task.isDone).length > 0}
<ol class="gap-2 flex flex-col">
    <h3>المهام المكتملة</h3>
    <Tasklistitems donetasks={true}/>
  </ol>
  {/if}
  {/if}