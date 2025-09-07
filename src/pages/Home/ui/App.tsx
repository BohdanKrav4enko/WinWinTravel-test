import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { FiltersModal } from '@/components/FiltersModal/FiltersModal.tsx'

export const App = () => {
	const { t } = useTranslation()
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [filters, setFilters] = useState({})
	return (
		<section className="w-full h-dvh flex items-center justify-center ">
			<FiltersModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onApply={setFilters}
				currentFilters={filters}
			/>
			<button
				onClick={() => setIsModalOpen(true)}
				className="text-6xl text-gray-600 mb-12 cursor-pointer"
			>
				{t('Open Modal')}
			</button>
		</section>
	)
}
