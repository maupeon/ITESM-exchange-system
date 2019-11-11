export class Cliente {

  constructor(
    public rfc?: string,
    public nombre?: string,
    public apellido?: string,
    public direccion?: string,
    public correo?: string,
    public contrasena?: string,
    public actaConstitutiva?: string,
    public estadoDeCuenta?: string
  ) {  }
}
