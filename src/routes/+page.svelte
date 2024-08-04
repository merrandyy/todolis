<script lang="ts">
	import Header from "$lib/header.svelte";
	import Tasksinput from "$lib/tasksinput.svelte";
	import Taskslist from "$lib/taskslist.svelte";

    
</script>

<div class="p-6  md:p-8  pt-8 lg:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto">

	<Header />
	<Tasksinput />
	<Taskslist />
	
	
</div>
