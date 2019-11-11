export class Factura {

  constructor(
    public _id?: string,
    public proveedor?: string,
    public cliente?: string,
    public direccion_proveedor?: string,
    public direccion_cliente?: string,
    public rfc_cliente?: string,
    public rfc_proveedor?: string,
    public fecha?: string,
    public concepto?: Array<Object>,
    public impuesto?: number,
    public total?: number,
    public firmaDigital?: string,
    public selloDigital?: string,
    public estatus?: string
  ) {  }
}
