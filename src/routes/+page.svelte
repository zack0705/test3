<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { TITLE_SUFFIX } from '$lib/params';
	import { HOME, getPlatfromIcon } from '$lib/params';
	import MY_SKILLS from '$lib/skills.params';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';

	const { description, lastName, links, name, title, skills } = HOME;

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
	import { RESUME } from '$lib/params';

	const { item } = RESUME;
	import Chip from '$lib/components/Chip/Chip.svelte';
	import { base } from '$app/paths';
	import Assets, { getAssetURL } from '$lib/data/assets';
	

</script>

<svelte:head>
	<title>{TITLE_SUFFIX}</title>
</svelte:head>
<div
	class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
>
	<div class="md:flex-1 gap-10px">
		<MainTitle classes="md:text-left ">{name} {lastName},</MainTitle>
		<p class="text-[var(--tertiary-text)]  text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a
					class="decoration-none"
					href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`}
					target="_blank"
					rel="noreferrer"
				>
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>
	<!-- <Carrousel items={skills ?? MY_SKILLS} /> -->
	<div style="width: 500px; height: 500px; overflow: hidden;"> <!-- Adjust width and height as needed -->
        <img style="width: 100%; height: auto; display: block;" src="{getAssetURL(Assets.Me)}" alt="Zeel.png">
    </div>
		<!-- <img src="{getAssetURL(Assets.Me)}" alt="Zeel.png"> -->
</div>

<div class="resume">
	{#if item}
		<a href={item}>
			<Chip size={'1.25em'}>Resume</Chip>
		</a>
	{:else}
		<Chip>Ooops! no CV at the moment.</Chip>
	{/if}
</div>


<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 0px;
		margin-bottom: 50px;
		& > a {
			color: inherit;
		}
		size: 1.25em;
		font-size: x-large;
	}
</style>
