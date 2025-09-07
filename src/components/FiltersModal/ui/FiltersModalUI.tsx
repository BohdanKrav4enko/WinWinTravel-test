import { useTranslation } from 'react-i18next'

import '@/components/FiltersModal/ui/FiltersModalStyle.css'
import { FiltersModalWarning } from '@/components/FiltersModalWarning/FiltersModalWarning'
import { Modal } from '@/components/modal'
import { FiltersModalProps } from '@/shared/api/types/Filter/FilterType.ts'
import filterData from '@/shared/temp/filterData.json'

type FiltersModalUIProps = FiltersModalProps & {
	tempFilters: Record<string, string[]>
	warning: boolean
	setWarning: (value: boolean) => void
	handleOptionChange: (filterId: string, optionId: string) => void
	clearFilters: () => void
	handleApply: () => void
	handleClose: () => void
	applyNew: () => void
}

export const FiltersModalUI = ({
	isOpen,
	tempFilters,
	warning,
	handleOptionChange,
	clearFilters,
	handleApply,
	handleClose,
	applyNew
}: FiltersModalUIProps) => {
	const { t } = useTranslation()

	return (
		<>
			<Modal
				isOpen={isOpen}
				handleClose={handleClose}
				title={t('Filter')}
				actions={
					<div className="modal-footer">
						<button
							className="modal-button-apply"
							onClick={handleApply}
						>
							{t('Apply')}
						</button>
						<button
							className="modal-clear-button"
							onClick={clearFilters}
						>
							{t('Clear all parameters')}
						</button>
					</div>
				}
			>
				{filterData.filterItems.map(filter => (
					<div
						className="modal-section-container"
						key={filter.id}
					>
						<h4 className="modal-name-filter">{t(filter.name)}</h4>
						<div className="options-grid">
							{filter.options.map(option => (
								<label
									style={{ display: 'flex', gap: '18px' }}
									key={option.id}
								>
									<input
										type="checkbox"
										name={filter.id}
										value={option.id}
										checked={tempFilters[filter.id]?.includes(option.id)}
										onChange={() => handleOptionChange(filter.id, option.id)}
									/>
									<p className="modal-name-option">{t(option.name)}</p>
								</label>
							))}
						</div>
					</div>
				))}
			</Modal>

			{warning && (
				<FiltersModalWarning
					handleClose={handleClose}
					onApplyNew={applyNew}
				/>
			)}
		</>
	)
}
