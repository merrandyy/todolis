<script lang="ts">
    import { ListBox, ListBoxItem, popup, type PopupSettings } from '@skeletonlabs/skeleton';
	import dayjs from "dayjs";
	import 'dayjs/locale/ar';

	dayjs.locale('ar');

	let period=dayjs().format('a') == 'م' ? 'مساء' : 'صباح'


let comboboxValue: string= "جميع المهام";

const popupCombobox: PopupSettings = {
	event: 'click',
	target: 'popupCombobox',
	placement: 'bottom',
	closeQuery: '.listbox-item'
};
				
</script>


<header class=" flex justify-between">
    <div>
         <h1 class="text-3xl lg:text-4xl mb-4"> {period}  الخير 👋 </h1>
        <h2 class=" text-1xl lg:text-2xl text-surface-900 "> {dayjs().format('اليوم، dddd D MMM YYYY')} </h2>
    </div>
       
<button class="btn variant-filled w-36 h-fit py-4 px-2 justify-between text-black variant-filled-secondary" use:popup={popupCombobox}>
	<span >{comboboxValue}</span>
	<span class="!m-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 rotate-180" viewBox="0 0 24 24"><path fill="currentColor"
         d="M4.08 11.92L12 4l7.92 7.92l-1.42 1.41l-5.5-5.5V22h-2V7.83l-5.5 5.5zM12 4h10V2H2v2z"/></svg></span>
</button>

<div class="card w-48 shadow-xl py-2 " data-popup="popupCombobox">
	<ListBox active="variant-filled-primary" rounded="rounded-none">
		<ListBoxItem bind:group={comboboxValue} name="medium" value="جميع المهام">جميع المهام</ListBoxItem>
		<ListBoxItem bind:group={comboboxValue} name="medium" value="مهام اليوم">مهام اليوم</ListBoxItem>
	</ListBox>
	<div class="arrow bg-surface-100-800-token" />
</div>				
					
    </header>