import { useState } from "react";
import ReactModal from "react-modal";
import { AlbumsService } from "../../../service/albums.service";
import { appTimeout } from "../../../service/sleep.service";
import { Title, Form, Input, InputContainer, Label, PricesContainer, Select, SubmitBtn, Subtitle } from "./styles";
import { toast } from "react-toastify";
import { Toast } from "../../toast/Toast";
import { useNavigate } from "react-router-dom";

const albumsService = new AlbumsService();

const NewAlbumModal = ({ isOpenned, onCloseNewAlbumModal }) => {
	
	const navigate = useNavigate();
	
	const [isDisabled, setIsDisabled] = useState(false);
	const [name, setName] = useState("");
	const [artist, setArtist] = useState("");
	const [price, setPrice] = useState(0);
	const [oldPrice, setOldPrice] = useState(0);
	const [URL, setURL] = useState("");
	const [category, setCategory] = useState("Pop");

	const handleSubmit = async () => {
		setIsDisabled(true);

		const alert = toast.loading("Please wait...")

		let oldPriceToSave = oldPrice;
		if(oldPriceToSave === 0) {
			oldPriceToSave = null;
		}

		const data = {
			name,
			artist,
			price: Number(price),
			oldPrice: Number(oldPriceToSave),
			URL,
			category
		}

		albumsService.create(data).then(async () => {
			toast.update(alert, {
				render: "Created! Await auto redirect...",
				type: "success",
				isLoading: false,
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});

			await appTimeout(4000);
			onCloseNewAlbumModal();
		}).catch(async error => {
			console.clear();

			toast.update(alert, {
				render: error,
				type: "error",
				isLoading: false,
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});

			await appTimeout(2100);
			setIsDisabled(false);
		});
	}

	return (
		<>
			<ReactModal
				isOpen={ isOpenned }
				onRequestClose={ onCloseNewAlbumModal }
				overlayClassName="react-modal-overlay"
				className="react-modal-content"
				ariaHideApp={false}
			>
				<Title>Add a new album</Title>
				<Subtitle>Mandatory fields are marked with <span>*</span></Subtitle>

				<Form>
					<InputContainer>
						<Label>Name:&nbsp;<span>*</span></Label>
						<Input type="text" placeholder="Insert a album name..." required={ true } value={ name } onChange={ (e) => setName(e.target.value) }/>
					</InputContainer>

					<InputContainer>
						<Label>Artist:&nbsp;<span>*</span></Label>
						<Input type="text" placeholder="Insert a artist name..." required={ true } value={ artist } onChange={ (e) => setArtist(e.target.value) } />
					</InputContainer>

					<PricesContainer>
						<InputContainer>
							<Label>Price:&nbsp;<span>*</span></Label>
							<Input type="number" min={ 0 } step="any" placeholder="Insert a album price..." required={ true } value={ price } onChange={ (e) => setPrice(e.target.value) }/>
						</InputContainer>

						<InputContainer>
							<Label>Old Price:</Label>
							<Input type="number" min={ 0 } step="any" placeholder="Insert a album old price..." value={ oldPrice } onChange={ (e) => setOldPrice(e.target.value) } />
						</InputContainer>
					</PricesContainer>

					<InputContainer>
							<Label>URL: <span>*</span></Label>
							<Input type="text" placeholder="Insert a album image url..." required={ true } value={ URL } onChange={ (e) => setURL(e.target.value) }/>
					</InputContainer>

					<InputContainer>
							<Label>Category: <span>*</span></Label>
							<Select value={ category } onChange={ (e) => setCategory(e.target.value) } >
								<option value="Pop">Pop</option>
								<option value="Rap">Rap</option>
								<option value="Funk">Funk</option>
								<option value="Rock">Rock</option>
								<option value="Classic Music">Classic Music</option>
							</Select>
					</InputContainer>

					<SubmitBtn type="button" onClick={handleSubmit} disabled={ isDisabled }>
						{
							(isDisabled) ? "Await..." : "Add"
						}
					</SubmitBtn>
				</Form>
			</ReactModal>

			<Toast />
		</>
	);
}

export { NewAlbumModal };
