export const enum FilterType {
	OPTION = 'OPTION'
}
export type Filters = Record<string, string[]>

export type FiltersModalProps = {
	isOpen: boolean
	onClose: () => void
	title?: string
	onApply: (filters: Filters) => void
	currentFilters: Filters
}
