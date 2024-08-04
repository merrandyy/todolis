<script lang="ts">
    import dayjs from "dayjs";
    import {tasks} from "$lib/stores/tasks";
    import relativeTime from 'dayjs/plugin/relativeTime'
    dayjs.extend(relativeTime);
    import Tasklistitems from "$lib/tasklistitems.svelte"

</script>



<ol class="gap-2 flex flex-col">
  <h3> المهام المتبقية</h3>
  <Tasklistitems donetasks={false}/>
</ol>

<ol class="gap-2 flex flex-col">
    <h3>المهام المكتملة</h3>
    <Tasklistitems donetasks={true}/>
  </ol>