class TagForm {
	constructor(submitTag, isDisabled) {
		this._submitTag = submitTag;
		this._isDisabled = isDisabled;
	}

	getView() {
		const formTemplate = document.querySelector('#tag-list-form-template').content.children[0];
		this._view = formTemplate.cloneNode(true);
		this._view.querySelector('.tag-from__submit').disabled = this._isDisabled;
		this._view.addEventListener('submit', (e) => {
			const inputValue = this._view.querySelector('.tag-form__input').value;
			e.preventDefault();
			this._submitTag(inputValue);
			this._view.reset();
		});

		return this._view;
	}
}

export default TagForm;
