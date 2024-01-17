/**
 * Owner Class
 */
export class Owner {
  /**
   *
   * @param {string} nombre El nombre del propietario
   * @param {string} apellido El apellido del propietario
   *
   */
  constructor(nombre, apellido, num_tel) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.num_tel = num_tel;
      this.productos = [];
  }

  añadirProducto(producto) {
      this.productos.push(producto);
  }
}
