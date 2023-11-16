import React from "react";
import ReactModal from "react-modal";
import { Toast } from "../../toast/Toast";
import { Title, BtnContainer, CancelBtn, ConfirmBtn, Container, Subtitle } from "./styles";

const DeleteAlbumModal = ({ isOpenned, handleDeleteAlbum, onCloseDeleteAlbumModal, isDisabled }) => {

	const handleCloseModal = () => {
		onCloseDeleteAlbumModal();
	}
	
	return (
		<ReactModal
			isOpen={ isOpenned }
      onRequestClose={ onCloseDeleteAlbumModal }
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
			ariaHideApp={ false }
		>
			<Container>
				<div>
					<Title>Delete album</Title>
					<Subtitle>Are you sure you want to delete the album? <span>Permanent action</span></Subtitle>
				</div>
				
				<BtnContainer>
					<CancelBtn onClick={ handleCloseModal } disabled={ isDisabled } >Cancel</CancelBtn>
					<ConfirmBtn onClick={ () => handleDeleteAlbum() } disabled={ isDisabled } >Delete</ConfirmBtn>
				</BtnContainer>
			</Container>

			<Toast />
		</ReactModal>
	);
}

export { DeleteAlbumModal };
