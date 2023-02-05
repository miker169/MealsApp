import React, { createContext, useMemo, useState } from "react";

type FavoritesContextType = {
  ids: Array<string>;
  addFavourite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavouritesContext = createContext<FavoritesContextType>({
  ids: [],
  addFavourite: (id) => {},
  removeFavorite: (id) => {},
});

export const FavoritesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState<Array<string>>([]);

  const addFavourite = (id: string) => {
    setFavoriteMealIds((currentFavouriteIds) => [...currentFavouriteIds, id]);
  };

  const removeFavorite = (id: string) => {
    setFavoriteMealIds((currentFavouriteIds) =>
      currentFavouriteIds.filter((mealId) => mealId !== id)
    );
  };

  const value = useMemo(
    () => ({
      ids: favoriteMealIds,
      addFavourite,
      removeFavorite,
    }),
    [favoriteMealIds]
  );

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};
