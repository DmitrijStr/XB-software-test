class TagItem {
	constructor(text, delHandler, isDisabled) {
		this._text = text;
		this.delHandler = delHandler;
		this._isDisabled = isDisabled;
	}

	getView() {
		const itemTemplate = document.querySelector('#tag-item-template').content.children[0];
		this._view = itemTemplate.cloneNode(true);
		this._view.querySelector('.tag-item__text').textContent = this._text;
		const delButton = this._view.querySelector('.tag-item__del');
		delButton.disabled = this._isDisabled;
		delButton.addEventListener('click', () => {
			this.delHandler();
			console.log(this)
		})

		return this._view;
	}
}

export default TagItem;
