<script>
	export let value = '';
	export let placeholder = '';
	export let id;
	export let label;
	export let type = 'text';
	export let disabled = false;
	export let required = false;
</script>

<div class="w-full max-w-lg pb-2 pt-4">
	<label for={id} class="pb-1 text-sm font-medium">
		<span>{label}</span>
	</label>
	<input
		class="form-input focus:border-b-color-background w-full max-w-lg border-b border-t-0 border-l-0 border-r-0 focus:ring-0 disabled:border-0 disabled:bg-[#F3F3F9]"
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	/>
</div>
