export default class Form extends HTMLElement {
  constructor() {
    super();
    const form = document.createElement('form');
    form.id = 'submitForm';
    form.innerHTML = this.formTemplate();
    this.appendChild(form);
  }

  connectedCallback() {
    this.addEventListener('submit', this.onSubmit);
    this.addEventListener('edit-character', this.onEdit);
  }

  get form() {
    return this.querySelector('#submitForm');
  }

  onSubmit(event) {
    event.preventDefault();
    const id = this.querySelector('#id');
    const name = this.querySelector('#name');
    const username = this.querySelector('#username');
    const phone = this.querySelector('#phone');

    if (!name.value || !username.value) return;

    const submitEvent = new CustomEvent('form-submitted', {
      detail: {
        id: id.value,
        name: name.value,
        username: username.value,
        phone: phone.value
      }
    });
    this.dispatchEvent(submitEvent);
    id.value = '';
    name.value = '';
    username.value = '';
    phone.value = '';
  }

  onEdit(event) {
    this.form.innerHTML = this.formTemplate(
      event.detail.id,
      event.detail.name,
      event.detail.username,
      event.detail.phone
    );
  }

  formTemplate(id = '', name = '', username = '', phone = '') {
    return `
      <input
        type="text"
        name="id"
        id="id"
        value="${id}"
        style="display: none"
      />
      
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value="${name}"
        />

        <label htmlFor="username">Username</label>
        <input
        type="text"
        name="username"
        id="username"
        value="${username}"
      />

      <label htmlFor="username">Phone</label>
      <input
      type="text"
      name="phone"
      id="phone"
      value="${phone}"
    />    
      <input id="submit" type="submit" value="Submit" />
    `;
  }
}

customElements.define('crud-form', Form);
