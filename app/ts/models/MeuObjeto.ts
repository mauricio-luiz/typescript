import { Imprimivel } from './imprimivel';
import { Igualavel } from './Igualavel';

export interface MeuObjeto<T> extends Imprimivel, Igualavel<T>{}