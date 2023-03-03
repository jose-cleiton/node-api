import crypto from 'crypto';

export default abstract class Entity<T> { 
  protected _id: string;

  public props: T;

  public get id(): string {
    return this._id;
   }

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = id ??crypto.randomUUID();
  }


}