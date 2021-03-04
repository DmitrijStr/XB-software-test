import TagList from './TagList.js';
import TagForm from './TagForm.js';
import TagItem from './TagItem.js';

const checkStorage = () => {
	const localdata = localStorage.getItem('tags');
	if (localdata) {
		return JSON.parse(localdata);
	}
	return [];
}

const isReadOnly = false;

const createTag = (...args) => new TagItem(...args);
const createForm = (...args) => new TagForm(...args);

const tagList = (new TagList(checkStorage(), createTag, createForm, isReadOnly)).getView();

document.querySelector('.page').append(tagList);
