<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import dayjs from "dayjs";
	import 'dayjs/locale/ar';
	import { filter } from "$lib/stores/filter";
	

	dayjs.locale('ar');

	let period=dayjs().format('a') == 'م' ? 'مساء' : 'صباح'


const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item',
	state: (e: Record<string, boolean>) => {
		if (e.state) {
			document.getElementById('arrow')?.classList.add('rotate-180');}
			else {
				document.getElementById('arrow')?.classList.remove('rotate-180');
		}
	}
};
				
</script>


<header class=" flex justify-between">
    <div>
         <h1 class="text-3xl lg:text-4xl mb-4"> {period}  الخير 👋 </h1>
        <h2 class=" text-1xl lg:text-2xl text-surface-900 "> {dayjs().format('اليوم، dddd D MMM YYYY')} </h2>
    </div>
       
<button class="btn variant-filled w-36 h-fit py-4 px-2 justify-between text-black variant-filled-secondary" use:popup={popupCombobox}>
	<span >{$filter}</span>
	<span class="!m-0"><svg id="arrow" class="w-6 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor"
         d="M4.08 11.92L12 4l7.92 7.92l-1.42 1.41l-5.5-5.5V22h-2V7.83l-5.5 5.5zM12 4h10V2H2v2z"/></svg></span>
</button>

<div class="card w-48 shadow-xl py-2 " data-popup="popupCombobox">
	<ListBox active="bg-indigo-400" rounded="rounded-none">
		<ListBoxItem bind:group={$filter} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
		<ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>				
					
    </header>