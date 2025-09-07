// eslint-disable-next-line no-restricted-syntax
import { FiltersModalUI } from '@/components/FiltersModal/ui/FiltersModalUI.tsx'
// eslint-disable-next-line no-restricted-syntax
import { useFiltersModal } from '@/components/hooks/useFiltersModal.ts.tsx'
import { FiltersModalProps } from '@/shared/api/types/Filter/FilterType.ts'

export const FiltersModal = (props: FiltersModalProps) => {
	const logic = useFiltersModal(
		props.currentFilters,
		props.onApply,
		props.onClose
	)
	return (
		<FiltersModalUI
			{...props}
			{...logic}
		/>
	)
}
