export default class ItemModel {
  constructor(obj) {
    Object.assign(this, {
      brand: '',
      title: '',
      description: '',
      descriptionFull: '',
      price: 0,
      currency: ''
    }, obj);
  }
}