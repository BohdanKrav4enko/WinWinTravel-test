import { useEffect, useState } from 'react'

import { Filters } from '@/shared/api/types/Filter/FilterType.ts'

export const useFiltersModal = (
	currentFilters: Filters,
	onApply: (filters: Filters) => void,
	onClose: () => void
) => {
	const [tempFilters, setTempFilters] = useState<Filters>({})
	const [warning, setWarning] = useState(false)

	useEffect(() => {
		setTempFilters({ ...currentFilters })
	}, [currentFilters])

	const handleOptionChange = (filterId: string, optionId: string) => {
		setTempFilters(prev => {
			const currentOptions = prev[filterId] || []
			const newOptions = currentOptions.includes(optionId)
				? currentOptions.filter(id => id !== optionId)
				: [...currentOptions, optionId]
			return { ...prev, [filterId]: newOptions }
		})
	}

	const clearFilters = () => {
		const cleared = Object.fromEntries(
			Object.keys(tempFilters).map(key => [key, []])
		)
		setTempFilters(cleared)
	}

	const handleApply = () => {
		const hasChanges =
			JSON.stringify(tempFilters) !== JSON.stringify(currentFilters)
		if (hasChanges) {
			setWarning(true)
		} else {
			onClose()
		}
	}

	const applyNew = () => {
		onApply(tempFilters)
		setWarning(false)
		onClose()
	}

	const cancelApply = () => {
		setWarning(false)
	}

	const handleClose = () => {
		setTempFilters({ ...currentFilters })
		onClose()
	}

	return {
		tempFilters,
		warning,
		handleOptionChange,
		clearFilters,
		handleApply,
		handleClose,
		applyNew,
		cancelApply,
		setWarning
	}
}
