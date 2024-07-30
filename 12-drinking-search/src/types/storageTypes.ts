import { Tcategory } from './listTypes';

export type TRecipesSlice = {
  categories: Tcategory;

  fetchCategories: () => Promise<void>;
};
