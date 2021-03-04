class TagList {
	constructor(data, createTag, createForm, isDisabled) {
		this._data = data;
		this._createTag = createTag;
		this._createForm = createForm;
		this._isDisabled = isDisabled;
	}

	getView() {
		const listTemplate = document.querySelector('#tag-list-template').content.children[0];
		this._view = listTemplate.cloneNode(true);
		this._tagContainer = this._view.querySelector('.tag-list__container');
		this._formContainer = this._view.querySelector('.tag-list__form');
		this._renderForm();
		this._data.forEach(text => this._renderTag(text));

		return this._view;
	}

	_renderForm = () => {
		const form = this._createForm((text) => { this._handleAddTag(text) }, this._isDisabled).getView();
		this._formContainer.append(form);
	}

	_renderTag = (text) => {
		const item = this._createTag(text, (text) => { this._removeItem(item) }, this._isDisabled).getView();
		this._tagContainer.append(item);
	}

	_handleAddTag = (text) => {

		this._renderTag(text);
		this._appendToStorage(text);
	}

	_removeItem = (item) => {
		item.remove();
		const newData = this._data.filter(tag => tag != item.querySelector('.tag-item__text').textContent);
		localStorage.setItem('tags', JSON.stringify(newData));
	}

	_appendToStorage(tag) {
		let localData = JSON.parse(localStorage.getItem('tags'));

		if (localData) {
			localData.push(tag)
			localStorage.setItem('tags', JSON.stringify(localData));
		} else {
			localData = [];
			localData.push(tag);
			localStorage.setItem('tags', JSON.stringify(localData));
		}
	}
}

export default TagList;
