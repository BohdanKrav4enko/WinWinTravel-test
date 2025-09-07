import { useTranslation } from 'react-i18next'

// eslint-disable-next-line no-restricted-syntax
import { Modal } from '@/components/modal'

type FiltersModalWarningProps = {
	onClose: () => void
	onApplyNew: () => void
	cancelApply: () => void
}

export const FiltersModalWarning = ({
	onClose,
	onApplyNew,
	cancelApply
}: FiltersModalWarningProps) => {
	const { t } = useTranslation()

	return (
		<Modal
			isOpen={true}
			onClose={onClose}
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
					onClick={cancelApply}
				>
					{t('Keep old filters')}
				</button>
			</div>
		</Modal>
	)
}
