export default class initModal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback para fazer referencia ao objeto da classe
    this.evenetToggleModal = this.evenetToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }


  // adiciona os evenetos de toggle ao modal
  toggleModal() {
    this.containerModal.classList.toggle('ativo');
  }

  // abre ou fecha o modal
  evenetToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar do lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adiciona os eventos aos elementos do modal
  addModalEvenets() {
    this.botaoAbrir.addEventListener('click', this.evenetToggleModal);
    this.botaoFechar.addEventListener('click', this.evenetToggleModal);
    this.containerModal.addEventListener('click', this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvenets();
    }
    return this;
  }
}
