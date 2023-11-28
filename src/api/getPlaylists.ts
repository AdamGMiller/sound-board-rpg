import type { IPlaylist } from 'types'

export default async function getPlaylists(): Promise<IPlaylist[]> {
	/*
	const response = await fetch(
		'https://614c99f03c438c00179faa84.mockapi.io/fruits'
	)
	return response.json() as Promise<IFruit[]>
	*/
	const playlists: IPlaylist[] = [
		{
			name: 'Combat: Standard',
			url: '0bWUBjlr7O4troJKyyMVbD',
			keywords: ['combat']
		}
	]

	/* TODO: Create endpoint to maintain updated list of playlists */
	/* eslint-disable no-promise-executor-return */
	const promise = new Promise<IPlaylist[]>(resolve => resolve(playlists))
	/* eslint-enable */

	return promise
}
