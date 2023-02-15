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
	<label for={id} class="pb-1 font-medium">
		<span>{label}</span>
	</label>
	<input
		class="form-input w-full max-w-lg"
		{type}
		{placeholder}
		{required}
		{disabled}
		{id}
		name={id}
		{value}
	/>
</div>
