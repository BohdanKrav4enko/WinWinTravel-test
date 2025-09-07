import { useTranslation } from 'react-i18next'

import { Modal } from '@/components/modal'

type FiltersModalWarningProps = {
	onApplyNew: () => void
	handleClose: () => void
}

export const FiltersModalWarning = ({
	onApplyNew,
	handleClose
}: FiltersModalWarningProps) => {
	const { t } = useTranslation()

	return (
		<Modal
			isOpen={true}
			handleClose={handleClose}
		>
			<p className={'modal-title'}>{t('Do you want to apply new filters?')}</p>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					gap: '30px',
					marginTop: '120px'
				}}
			>
				<button
					className="modal-button-apply"
					onClick={onApplyNew}
				>
					{t('Apply new filters')}
				</button>
				<button
					className="modal-button-old"
					onClick={handleClose}
				>
					{t('Keep old filters')}
				</button>
			</div>
		</Modal>
	)
}
