import React, { useEffect, useState } from 'react';
import { TextStyle, View } from 'react-native';
import { Searchbar, TouchableRipple } from 'react-native-paper';
import AppColors from 'src/config/colors';
import SearchIcon from 'src/assets/icons/search.svg';
import CloseIcon from 'src/assets/icons/searchbar-close.svg';
import CheckIcon from 'src/assets/icons/autocomplete-check.svg';

import { useDebounce } from 'src/utils/functions';
import { Caption } from '../Texts';

import styles from './styles';

export interface ItemInterface {
  value: string;
  label: string;
}

interface AutoCompleteProps {
  suggestions: ItemInterface[];
  onChange?: (val: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({suggestions, onChange}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filtered, setFiltered] = useState<ItemInterface[]>([]);
  const [selectedValue, setSelectedValue] = React.useState<string>('');

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

      setSelectedValue('');
    },
    [debouncedSearchQuery] // Only call effect if debounced search term changes
  );

  const onChangeSearch = (query: string) => {
    setSearchQuery(query);
  };

  const onSelect = (val: string) => {
    setSelectedValue(val);

    if (onChange) {
      onChange(val);
    }
  };

  return (
    <View>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchStyle}
        inputStyle={styles.searchInputStyle}
        autoCapitalize='none'
        icon={() => <SearchIcon />}
        clearIcon={() => searchQuery? <CloseIcon />: null}
        theme={{
          colors: {
            placeholder: AppColors.searchPlaceholderColor,
            primary: AppColors.whiteColor,
          }
       }}
      />
      {filtered.map(s => {
        const isSelected = selectedValue === s.value;
        let wrapperStyle: TextStyle[] = [styles.selectWrapper];
        let labelStyle: TextStyle[] = [styles.selectLabel];

        if (isSelected) {
          wrapperStyle.push(styles.active);
          labelStyle.push(styles.active);
        }

        return (
          <TouchableRipple onPress={() => onSelect(s.value)} key={s.value}>
            <View style={wrapperStyle}>
              <Caption style={labelStyle}>{s.label}</Caption>
              {isSelected && <CheckIcon />}
            </View>
          </TouchableRipple>
        );
      })}
    </View>
  );
};

export default AutoComplete;
