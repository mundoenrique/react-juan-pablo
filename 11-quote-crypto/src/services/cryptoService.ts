import axios from 'axios';
import { CryptosResponseSchema } from '../schema';

export async function getCrypto() {
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  const {
    data: { Data },
  } = await axios(url);

  const { success, data } = CryptosResponseSchema.safeParse(Data);

  if (success) {
    return data;
  }
}
