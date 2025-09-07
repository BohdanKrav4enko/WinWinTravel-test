import { FiltersModalUI } from '@/components/FiltersModal/ui/FiltersModalUI.tsx'
import { useFiltersModal } from '@/components/hooks/useFiltersModal.tsx'
import { FiltersModalProps } from '@/shared/api/types/Filter/FilterType'

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
