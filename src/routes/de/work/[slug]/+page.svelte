<script>
	import WorkPage from '$lib/WorkPage.svelte';
	export let data;
</script>

<WorkPage copy={data.copy} item={data.item} />
