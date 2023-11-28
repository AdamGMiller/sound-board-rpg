import type { ReactElement } from 'react'
import type { IPlaylist } from 'types'

interface Properties {
	playlist: IPlaylist
	index: number
}

export default function Playlist({
	playlist,
	index
}: Properties): ReactElement {
	return (
		<h3 data-testid='PlaylistName' className='p-6 text-xl font-bold'>
			{index}. {playlist.name}
		</h3>
	)
}
