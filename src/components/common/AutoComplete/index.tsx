import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Searchbar, RadioButton } from 'react-native-paper';
import AppColors from 'src/config/colors';
import SearchIcon from 'src/assets/icons/search.svg';
import CloseIcon from 'src/assets/icons/searchbar-close.svg';

import styles from './styles';
import { useDebounce } from 'src/utils/functions';

export interface ItemInterface {
  value: string;
  label: string;
}

interface AutoCompleteProps {
  suggestions: ItemInterface[];
  onPress?: () => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({suggestions}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filtered, setFiltered] = useState<ItemInterface[]>([]);
  const [value, setValue] = React.useState<string>('');

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  useEffect(
    () => {
      if (!debouncedSearchQuery) {
        setFiltered([]);
      } else {
        setFiltered(
          suggestions.filter(
            s => s.label.toLowerCase().includes((debouncedSearchQuery as string).toLowerCase())
          )
        );
      }
    },
    [debouncedSearchQuery] // Only call effect if debounced search term changes
  );

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchStyle}
        inputStyle={styles.searchInputStyle}
        icon={() => <SearchIcon />}
        clearIcon={() => searchQuery? <CloseIcon />: null}
        theme={{
          colors: {
            placeholder: AppColors.searchPlaceholderColor,
            primary: AppColors.whiteColor,
          }
       }}
      />
      <RadioButton.Group onValueChange={value => setValue(value)} value={value} >
        {filtered.map(s => (
          <RadioButton.Item
            key={s.value}
            label={s.label}
            value={s.value}
            color={AppColors.whiteColor}
            style={styles.radioStyle}
            labelStyle={styles.labelStyle}
          />
        ))}
      </RadioButton.Group>
    </View>
  );
};

export default AutoComplete;
