<script lang="ts">
	export let show = false;
</script>

{#if show}
	<div class="bg-opacity fixed inset-0 flex items-center justify-center">
		<div class="w-[50%] rounded bg-white">
			<slot></slot>
		</div>
	</div>
{/if}
