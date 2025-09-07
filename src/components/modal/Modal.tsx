import './Modal.css'

type ModalProps = {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: React.ReactNode
	actions?: React.ReactNode
}

export const Modal = ({
	isOpen,
	onClose,
	title,
	children,
	actions
}: ModalProps) => {
	if (!isOpen) {
		return null
	}

	return (
		<div
			className="modal-overlay"
			onClick={onClose}
		>
			<div
				className="modal-content"
				onClick={e => e.stopPropagation()}
			>
				{title && (
					<div
						style={{ borderBottom: '2px solid #B4B4B4', marginBottom: '60px' }}
					>
						<h2 className="modal-title">{title}</h2>
					</div>
				)}
				{children}
				{actions && <div className="modal-actions">{actions}</div>}
				<button
					onClick={onClose}
					className="modal-close"
				>
					×
				</button>
			</div>
		</div>
	)
}
