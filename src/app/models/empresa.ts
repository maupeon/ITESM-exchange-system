export class Empresa {

  constructor(
    public rfc?: string,
    public nombre?: string,
    public razon_social?: string,
    public direccion?: string,
    public correo?: string,
    public contrasena?: string,
    public actaConstitutiva?: string,
    public estadoDeCuenta?: string,
    public token?: string,
    public cliente?: Array<string>
  ) {  }

}
